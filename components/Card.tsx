import { useContext, useMemo } from "react";
import { DarkModeCtx } from "../context/DarkModeContext";
import Image from 'next/image'
import { countryDataType } from "../hook/useCountry";
import { inputSearchType } from "../hook/useSearch";
import { selectCountryType } from "../hook/useFilter";

type props = {
  countryData: countryDataType,
  inputSearch: inputSearchType,
  selectCountry: selectCountryType
}


const getSelectedData = ({
  countryData,
  inputSearch,
  selectCountry
}:props) => {

  if (countryData.length === 0){
    return []
  }

  const cloneData:countryDataType = JSON.parse(JSON.stringify(countryData)); 
  const inSearch = inputSearch.split(" ").join("");

  return (
    cloneData.filter(data => {
      const byName = data.name.split(" ").join("");
      if (inputSearch === '' && selectCountry === ''){
        return data
      } else if (inputSearch === '' && selectCountry){
        if (selectCountry === data.region){
          return data
        }
      } else if (selectCountry === '' && inputSearch){
        if (byName.toLowerCase().includes(inSearch.toLocaleLowerCase())){
          return data
        }
      } else {
        if (byName.toLowerCase().includes(inSearch.toLocaleLowerCase())
          && selectCountry === data.region
        ){
          return data
        }
      }
    })
  )
};

const Card = ({
  countryData,
  inputSearch,
  selectCountry
}:props) => {
  const [isDarkMode] = useContext(DarkModeCtx);
  const selectedData = useMemo(() => getSelectedData({
    countryData,
    inputSearch,
    selectCountry
  }), [countryData, inputSearch, selectCountry]);

  return (
    <div className={`item-mt`}>
      <div className="grid gap-6 desktop:grid-cols-4 grid-cols-2 md:grid-cols-1 content-center">
        {
          selectedData.map(({name, flag, alpha3Code, population, region, capital}) => {
            return (
            <div className={`
              ${isDarkMode ? "bg-dark-elment" : "bg-white"}
              max-w-[25rem] rounded shadow-lg w-full cursor-hover`} key={alpha3Code}
              onClick={() => {}}
            > 
              <div className='overflow-hidden h-[18rem] relative'>
                <Image
                  src={flag}
                  layout="fill"
                  objectFit='contain'
                  alt={"image"}
                />
              </div>
            <div className="px-6 py-5 pb-[4rem]">
              <h3 className="font-bold text-xl mb-2">{name}</h3>
              <div className='gap-4'>
                <span className='font-semibold'>Population:</span>
                <span className='pl-3'>{population}</span>
              </div>
              <div className='gap-4'>
                <span className='font-semibold'>Region:</span>
                <span className='pl-3'>{region}</span>
              </div>
              <div className='gap-4'>
                <span className='font-semibold'>Capital:</span>
                <span className='pl-3'>{capital}</span>
              </div>
            </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Card