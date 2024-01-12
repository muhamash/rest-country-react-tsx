import React, { useEffect, useState } from 'react';
import './App.css';
import Head from './components/head';
import Countries from './components/functions/countries';
import Counter from './components/counter';
import SearchBar from './components/search/searchBar';

interface Country {
  name: { common: string };

}

function App() {
  const [state, setState] = useState({
    countries: [] as Country[],
    selectedCountries: [] as any[],
    searchResults: [] as any[],
    loading: true,
    error: null as string | null,
  });

  // console.log( state.selectedCountries, `type of state ${typeof state.selectedCountries}`, Array.isArray(state.selectedCountries) )
  // console.log( state.searchResults, `type of sate.search result ${ typeof state.searchResults }` )
  
  console.log(state, `type of state ${typeof state}`, Array.isArray(state))
  
  useEffect(() => {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch( 'https://restcountries.com/v3.1/all' );
        const data = await response.json();

        setState( ( prev ) => ( { ...prev, countries: data, loading: false  } ) );

      }
      catch ( error )
      {
        console.error( 'Error fetching data:', error );
        setState((prev) => ({ ...prev, error: 'Error fetching data', loading: false }));
      }
    };

    fetchData();
  }, []);

  const incrementCounter = (selectedCountry: any) => {
    setState((prev) => ({
      ...prev,
      selectedCountries: [ ...prev.selectedCountries, selectedCountry ],
    } ) );

    console.log(selectedCountry, typeof selectedCountry)
  };

  const handleSearch = (value: any) => {
    const countryFilter = state.countries.filter(
      ( c: Country ) => c.name.common.toLowerCase().includes( value.toLowerCase() )
    );
    console.log( value, countryFilter )
    setState((prev) => ({ ...prev, searchResults: countryFilter }));
  };


  return (
    <div className="flex flex-col items-center space-y-5">
      <Head heading='Rest Countries' />
      <div className='py-5'>
        <SearchBar onSearch={handleSearch} />
      </div>
      {state.loading && <p className='text-xl text-yellow-600 font-mono'>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && (
        <>
          <Counter counter={state.selectedCountries.length} />
          <div className=''>
            <Countries
              onAdd={incrementCounter}
              countries={
                state.searchResults.length > 0
                  ? state.searchResults
                  : state.countries
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;