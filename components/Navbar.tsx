import Link from "next/link";
import type { onChangeDarkModeType,isDarkModeType } from "../context/DarkModeContext";

type NavbarProps = {
  isDarkMode: isDarkModeType
  onChangeDarkMode: onChangeDarkModeType
}

const DarkModeIcon = ({
  isDarkMode
}: {isDarkMode:isDarkModeType}) => {

  return (
    <>
      {
        isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mobile:w-4 mobile:h-4 w-5 h-5">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mobile:w-4 mobile:h-4 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )
      }
    </>
  )
}


const Navbar = ({
  isDarkMode,
  onChangeDarkMode
}: NavbarProps) => {
  return (
    <nav className={`${isDarkMode ? 'bg-dark-bg' : 'bg-white'} h-[6rem] w-full shadow-md mobile:p-4 px-[5rem] py-4 animation-colors`}>
      <ul className="flex justify-between items-center h-full w-full">
        <li>
          <Link href="/" className="text-2xl mobile:text-sm font-bold">
              Where in the world?
          </Link>
        </li>
        <li>
          <button className="flex gap-3 items-center justify-center"
            onClick={() => onChangeDarkMode()}
          >
            <DarkModeIcon
              isDarkMode={isDarkMode}
            />
            <span className="font-semibold mobile:text-sm ">Dark Mode</span>
          </button>

        </li>
      </ul>
      
    </nav>
  )
};

export default Navbar