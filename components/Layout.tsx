import { useContext , ReactNode} from 'react';
import { DarkModeCtx } from '../context/DarkModeContext';
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};


const Layout = ({children}:Props) => {
  const [isDarkMode, onChangeDarkMode] = useContext(DarkModeCtx);

  return (
    <div className={`${isDarkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-light-text'} font-nunito min-h-screen animation-colors`}>
      <Navbar
        isDarkMode={isDarkMode}
        onChangeDarkMode={onChangeDarkMode}
      />
      <div className="main-container">
        {children}
      </div>
    </div>
  )
  
}

export default Layout