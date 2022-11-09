import { useState, createContext, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export type onChangeDarkModeType = () => void;
export type isDarkModeType = boolean;

type DarkModeCtxType = [isDarkModeType, onChangeDarkModeType];

export const DarkModeCtx = createContext<DarkModeCtxType>([false, () => {}]);

export const DarkModeContext = ({children}:Props) => {
  const [isDarkMode, setIsDarkMode] = useState<isDarkModeType>(false);
  
  const onChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeCtx.Provider
      value={[isDarkMode, onChangeDarkMode]}
    >
      {children}
    </DarkModeCtx.Provider>
  )
};

