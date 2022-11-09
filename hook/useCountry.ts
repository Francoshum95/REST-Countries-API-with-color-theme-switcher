import {useEffect, useState} from 'react';

const URL = "https://restcountries.com/v2/all";

export type countryDataType = {
  name: string,
  topLevelDomain: string[],
  nativeName: string,
  region: string,
  subregion: string,
  capital: string,
  population: number,
  domain: string[],
  currencies: string[],
  languages: string[],
  borders: string[],
  flag: string,
  alpha3Code: string
}[] | []
export type regionListType = string[];
export type isLoadingType = boolean;

const getFormateData = (data:countryDataType) => {
  const allRegion: string[] = [];

  const newData = data.map(({
    name, topLevelDomain,nativeName,region,subregion,capital,population,domain,
    currencies,languages,borders,flag,alpha3Code
  }) => {
    if (!allRegion.includes(region)){
      allRegion.push(region)
    };

    return {
      name, topLevelDomain,nativeName,region,subregion,capital,population,domain,
      currencies,languages,borders,flag,alpha3Code
    }
  })

  return {
    regions: allRegion,
    countryData: newData
  }
}

const useCountry = () => {
  const [countryData, setCountryData] = useState<countryDataType>([]);
  const [regionList, setRegionList] = useState<regionListType>([]);
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);

  useEffect(() => {
    const getCountries = async() => {
      setIsLoading(true);
      const dataFromLocalStorage = localStorage.getItem("country_data");
      let countryData = [];
      let regions = [];

      if (dataFromLocalStorage){
        const storageData =  JSON.parse(dataFromLocalStorage);
        countryData = storageData.countryData;
        regions = storageData.regions;
      }

      try {
        const response = await fetch(URL, {
          method: "GET"
        });
        const data = await response.json();
        const formateData = getFormateData(data);
        countryData = formateData.countryData;
        regions = formateData.regions;

        localStorage.setItem("country_data", JSON.stringify({regions, countryData}));

      } catch(error:unknown){
        if (error instanceof Error){
          console.error(error.message)
        }
      }

      setCountryData(countryData);
      setRegionList(regions);
      setIsLoading(false);

    };

    getCountries()

  }, [])

  return {
    isLoading,
    countryData,
    regionList
  }
};

export default useCountry;