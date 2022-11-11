import {useEffect, useState} from 'react';

const URL = "https://restcountries.com/v2/all";

export type CountryDataType = {
  name: string,
  topLevelDomain: string[],
  nativeName: string,
  region: string,
  subregion: string,
  capital: string,
  population: number,
  domain: string[],
  currencies: {name: string}[],
  languages: string[],
  borders: string[],
  flag: string,
  alpha3Code: string
}

export type CountriesDataType = Array<CountryDataType> | []


export type regionListType = string[];
export type isLoadingType = boolean;



const getFormateData = (data:CountriesDataType) => {
  const allRegion: string[] = [];
  const codeMap:any = {}

  const newData = data.map(({
    name, topLevelDomain,nativeName,region,subregion,capital,population,domain,
    currencies,languages,borders,flag,alpha3Code
  }) => {
    if (!allRegion.includes(region)){
      allRegion.push(region)
    };

    codeMap[alpha3Code] = name;

    return {
      name, topLevelDomain,nativeName,region,subregion,capital,population,domain,
      currencies,languages,borders,flag,alpha3Code
    }
  })

  return {
    regions: allRegion,
    countryData: newData,
    countryCodeMap: codeMap
  }
}

const useCountry = () => {
  const [countryData, setCountryData] = useState<CountriesDataType>([]);
  const [regionList, setRegionList] = useState<regionListType>([]);
  const [codeMap, setCodeMap] = useState<any>({});
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);

  useEffect(() => {
    const getCountries = async() => {
      setIsLoading(true);
      const dataFromLocalStorage = localStorage.getItem("country_data");
      let countryData = [];
      let regions = [];
      let countryCodeMap = {}

      if (dataFromLocalStorage){
        const storageData =  JSON.parse(dataFromLocalStorage);
        countryData = storageData.countryData;
        regions = storageData.regions;
        countryCodeMap = storageData.countryCodeMap;
      }

      try {
        const response = await fetch(URL, {
          method: "GET"
        });
        const data = await response.json();
        const formateData = getFormateData(data);
        
        countryData = formateData.countryData;
        regions = formateData.regions;
        countryCodeMap = formateData.countryCodeMap;

        localStorage.setItem("country_data", JSON.stringify({regions, countryData, countryCodeMap}));

      } catch(error:unknown){
        if (error instanceof Error){
          console.error(error.message)
        }
      }

      setCountryData(countryData);
      setRegionList(regions);
      setCodeMap(countryCodeMap);
      setIsLoading(false);

    };

    getCountries()

  }, [])

  return {
    isLoading,
    codeMap,
    countryData,
    regionList
  }
};

export default useCountry;