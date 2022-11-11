import { useContext } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import { DarkModeCtx } from "../../context/DarkModeContext";
import Layout from "../../components/Layout";
import useCountry from "../../hook/useCountry";

import type {CountryDataType} from '../../hook/useCountry';

type COUINTRY_TYPE = {
  id: number,
  key: string,
  name: string
}[]

const COUNTRY_1:COUINTRY_TYPE = [{
  id: 1,
  key: "nativeName",
  name: "Native Name"
}, {
  id: 2,
  key: "population",
  name: "Population"
}, {
  id: 3,
  key: "region",
  name: "Region"
}, {
  id: 4,
  key: "subregion",
  name: "Sub Region"
}, {
  id: 5,
  key: "capital",
  name: "Capital"
}]


const COUNTRY_2:COUINTRY_TYPE = [{
  id: 6,
  key: "topLevelDomain",
  name: "Top Level Domain"
}, {
  id: 7,
  key: "currencies",
  name: "Currencies"
}, {
  id: 8,
  key: "languages",
  name: "Languages"
}]

const getJoinArray = (key: string, items: string[]) => {
  if (items) {
    if (key === 'topLevelDomain'){
      return items.join(",");
    } else {
      let newString = ""
      items.forEach((item: any, index) => {
        if (index === 0){
          newString += item.name
        } else {
          newString += `,${item.name}`
        }
      })
      return newString
    }
  }
  return items
}

const Country = ({data}:any) => {
  const [isDarkMode] = useContext(DarkModeCtx);
  const router = useRouter() 
  const {codeMap} = useCountry();

  const responseData:CountryDataType = data[0];
  const {flag, name, borders} = responseData;


  return (
    <Layout>
      <div className="item-mt">
        <button className={`${isDarkMode ? "bg-dark-elment" : "bg-white"} rounded-md px-8 py-2 flex items-center shadow-md
          animation-colors select-none`} 
            onClick={(e) => {e.preventDefault()
            router.push('/')
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span className="ml-3">Back</span>
        </button>
      </div>
      <div className="mt-[2rem] flex md:flex-col justify-between md:justify-center gap-3">
        <div className="md:w-full w-[50%] relative overflow-hidden h-[300px]">
        <Image
          src={flag}
          layout="fill"
          objectFit='contain'
          alt={"image"}
        />
        </div>
        <div className="w-[50%] md:w-full md:py-0 py-7">
          <h3 className="font-bold text-xl">{name}</h3>
          <div className="py-3 flex md:flex-col">
            <div className="w-[50%] md:w-full">
              {
                COUNTRY_1.map(({id, name, key}) => {
                  return (
                    <div key={id} className='my-3 text-sm'>
                      <span className="font-semibold">{name}:</span>
                      <span className="pl-2">{data[0][key]}</span>
                    </div>
                  )
                })
              }
            </div>
            <div className="w-[50%] md:w-full">
              <div className='my-3 text-sm'>
                {
                  COUNTRY_2.map(({id, name, key}) => {
                    return (
                      <div key={id} className='my-3 text-sm'>
                        <span className="font-semibold">{name}:</span>
                        <span className="pl-2">{
                         getJoinArray(key, data[0][key])
                        }</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className='my-3 text-sm'>
              <span className="font-semibold text-xl">Border Country:</span>
              <div className="mt-3">
                { borders &&
                  borders.map((name, index) => (
                    <button className={`${isDarkMode ? "bg-dark-elment" : "bg-white"} px-6 py-2 shadow cursor-hover inline-block mr-4 mt-3 w-[150px]`} key={index}
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(`/country/${name.toLocaleLowerCase()}`)
                      }}
                    >
                      <span className="text-sm w-full h-full overflow-hidden">{codeMap[name]}</span>
                    </button>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Country;

export const getServerSideProps = async (context:any) => {
  const countryId = context.params.id
  const URL = `https://restcountries.com/v2/alpha?codes=${countryId}`

  const countryData = await fetch(URL, {
    method: "GET"}
  );
  const data = await countryData.json();

  if (!data){
    return {
      notFound: true,
    }
  }

  return{
    props: {
      data
    }
  }
};