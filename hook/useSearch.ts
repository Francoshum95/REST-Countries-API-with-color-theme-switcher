import {use, useState} from 'react';

export type inputSearchType = string;


const useSearch = () => {
  const [inputSearch, setInputSearch] = useState<inputSearchType>("");

  const onChangeSearch = (e:React.FormEvent<HTMLInputElement>) => {
    setInputSearch(e.currentTarget.value)
  };

  return {
    inputSearch,
    onChangeSearch
  }

};


export default useSearch