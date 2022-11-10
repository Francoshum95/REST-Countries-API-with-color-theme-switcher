import { useContext } from "react";
import { DarkModeCtx } from "../context/DarkModeContext";
import type { isMenuOpenType, selectCountryType, onChangeSelectCountryType, containerRefType, onClickMenuType} from "../hook/useFilter";
import type { isLoadingType, regionListType} from '../hook/useCountry';

type props = {
  isMenuOpen:isMenuOpenType, 
  isLoading: isLoadingType,
  containerRef: containerRefType,
  regionList: regionListType,
  selectCountry: selectCountryType
  onChangeSelectCountry: onChangeSelectCountryType,
  onClickMenu: onClickMenuType
}

const Filter = ({
  isMenuOpen,
  isLoading,
  containerRef,
  regionList,
  selectCountry,
  onClickMenu,
  onChangeSelectCountry
}: props) => {
  const [isDarkMode] = useContext(DarkModeCtx);

  return (
    <div className={`${isDarkMode ? "bg-dark-elment" : "bg-white"} w-[250px]
      rounded-md nav-item animation-colors select-none relative
    `} ref={containerRef}>
      <button className="w-full h-full border-none rounded leading-tight flex items-center justify-between"
        onClick={() => onClickMenu()}
      >
        <span>{selectCountry ? selectCountry: "Filter by Region"}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <ul className={`${isMenuOpen ? 'z-3 visible opacity-100': 'z-0 invisible opacity-0'} w-full bg-inherit absolute 
        z-3 mt-4 rounded-md left-0 nav-item`}
        >
        {
          regionList.map((item, index) => (
            <li key={index} className="py-2 cursor-pointer"
              onClick={() => onChangeSelectCountry(item)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  )
}


export default Filter