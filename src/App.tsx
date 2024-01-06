import React, { useState } from 'react';
import './App.css';
import Head from './components/head';
import Countries from './components/functions/countries';
import Counter from './components/counter';


function App ()
{ 
  const [selectedCountries, setSelectedCountries] = useState<any[]>([]);

  const incrementCounter = (selectedCountry: any) => {
    console.log( selectedCountry );
    
    const updatedSelectedCountries = [ ...selectedCountries, selectedCountry ];
    console.log(updatedSelectedCountries)

    setSelectedCountries(updatedSelectedCountries);
  };

  return (
    <div className="flex flex-col items-center space-y-5">
      <Head heading='Rest Countries' />
      <Counter counter={ selectedCountries.length } />
      <div className=''>
        <Countries onAdd={incrementCounter}/>
      </div>
    </div>
  );
};

export default App;