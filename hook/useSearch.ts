import {useState} from 'react';

export type inputSearchType = string;
export type onChangeSearchType = (e:React.FormEvent<HTMLInputElement>) => void

const useSearch = () => {
  const [inputSearch, setInputSearch] = useState<inputSearchType>("");

  const onChangeSearch: onChangeSearchType= (e) => {
    setInputSearch(e.currentTarget.value)
  };

  return {
    inputSearch,
    onChangeSearch
  }

};


export default useSearch