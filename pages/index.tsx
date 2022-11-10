import Head from 'next/head';
import Layout from '../components/Layout';
import useCountry from '../hook/useCountry';
import useFilter from '../hook/useFilter';
import useSearch from '../hook/useSearch';

import Search from '../components/Search';
import Filter from '../components/Filter';
import Card from '../components/Card';

export default function Home() {
  const {
    isLoading,
    countryData,
    regionList
  } = useCountry()

  const {inputSearch, onChangeSearch }= useSearch();
  const {
    isMenuOpen, 
    containerRef, 
    selectCountry, 
    onClickMenu,
    onChangeSelectCountry} = useFilter();

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='mt-5 flex w-full justify-between md:flex-col'>
          <Search
            inputSearch={inputSearch}
            onChangeSearch={onChangeSearch}
          />
          <Filter
            isMenuOpen={isMenuOpen}
            containerRef={containerRef}
            isLoading={isLoading}
            regionList={regionList}
            selectCountry={selectCountry}
            onClickMenu={onClickMenu}
            onChangeSelectCountry={onChangeSelectCountry}
          />
        </div>
        <Card
          countryData={countryData}
          inputSearch={inputSearch}
          selectCountry={selectCountry}
        />
      </Layout>

    </div>
  )
}
