import {useState, useRef, useEffect} from 'react';

export type selectCountryType = string;
export type isMenuOpenType = boolean;
export type containerRefType = any;
export type onChangeSelectCountryType = (value: string) => void;
export type onClickMenuType= () => void;

const useFilter = () => {
  const [selectCountry, setSelectCountry] = useState<selectCountryType>("");
  const [isMenuOpen, setIsMenuOpen] = useState<isMenuOpenType>(false);
  const containerRef = useRef<containerRefType>(null); 

  console.log(selectCountry)

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (containerRef !== null){
        if (!containerRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  const onChangeSelectCountry:onChangeSelectCountryType = (value) => {
    setSelectCountry(value);
    setIsMenuOpen(false);
  };

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    isMenuOpen,
    containerRef,
    selectCountry,
    onClickMenu,
    onChangeSelectCountry
  }
  
};

export default useFilter