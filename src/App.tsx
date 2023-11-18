import React from 'react';
import './App.css';
import Head from './components/head';
import Countries from './components/functions/countries';

function App() {
  return (
    <div className="">
      <Head heading='Rest Countries' />
      <div className=''>
        <Countries/>
      </div>
    </div>
  );
}

export default App;
