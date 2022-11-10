import { useContext } from "react";
import { DarkModeCtx } from "../context/DarkModeContext";
import type { inputSearchType, onChangeSearchType } from "../hook/useSearch";

type props = {
  inputSearch: inputSearchType,
  onChangeSearch: onChangeSearchType
}

const Search = ({
  inputSearch,
  onChangeSearch
}: props) => { 
  const [isDarkMode] = useContext(DarkModeCtx);
  
  return (
    <div className={`${isDarkMode ? "bg-dark-elment" : "bg-white"} w-[500px]
      rounded-md nav-item animation-colors select-none`}>
      <div className="flex gap-4 items-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
        <input className="appearance-none block w-full border-none rounded py-3 px-4 leading-tight 
          bg-transparent focus:outline-none" 
          type="text" placeholder="Search for a country... " value={inputSearch} onChange={(e) => onChangeSearch(e)}
        />
      </div>
    </div>
  )

};

export default Search