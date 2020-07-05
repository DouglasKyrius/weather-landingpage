import React, { useState, useEffect } from 'react';
import Info from './Components/Info/Info';
import Country from './Components/Country/Country';

import './App.css'

const api = {
  key: 'c88e4b3fb0e4235c997fb8cb98ff1a40',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  let [tempSymbol, setTempSymbol] = useState('C');
  let [cities, setCities] = useState([]);
  let [cityOne, setCityOne] = useState({});
  let [queryOne, setQueryOne] = useState('');
  let [cityTwo, setCityTwo] = useState({});
  let [queryTwo, setQueryTwo] = useState('');

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`${api.base}group?id=605155,3451190&units=metric&appid=${api.key}`)
      const data = await response.json();
      setCities(data.list);
    })();  
  }, []);

  const searchOne = async event => {
    if (queryOne !== '' && event.key === "Enter") {
      const response = await fetch(`${api.base}weather?q=${queryOne}&units=metric&APPID=${api.key}`)
      const data = await response.json();
      setCityOne(data);
      setQueryOne('');
    }
  }
  
  const searchTwo = async event => {
    if (event.key === "Enter") {
      const response = await fetch(`${api.base}weather?q=${queryTwo}&units=metric&APPID=${api.key}`)
      const data = await response.json();
      setCityTwo(data);
      setQueryTwo('');
    }
  }

  return (
    <div className="app">
      <main>
        <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'C' ? 'F' : 'C')} />
        <Country defaultCities={cities[0]} tempSymbol={tempSymbol} city={cityOne} query={queryOne} setQuery={setQueryOne} search={searchOne} />
        <Country defaultCities={cities[1]} tempSymbol={tempSymbol} city={cityTwo} query={queryTwo} setQuery={setQueryTwo} search={searchTwo} />
      </main>
    </div>
  );
}

export default App;
