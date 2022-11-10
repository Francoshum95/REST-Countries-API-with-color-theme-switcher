import { useContext } from "react";
import { DarkModeCtx } from "../context/DarkModeContext";
import Image from 'next/image'
import { countryDataType } from "../hook/useCountry";

type props = {
  countryData: countryDataType
}





const Card = ({
  countryData
}:props) => {
  const [isDarkMode] = useContext(DarkModeCtx);

  return (
    <div className={`item-mt`}>
      <div className="grid gap-6 desktop:grid-cols-4 grid-cols-2 md:grid-cols-1 content-center">
        {
          countryData.map(({name, flag, alpha3Code, population, region, capital}) => {
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