import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      // .catch(error => console.log(error))
  
  }, []);
  const handleAddCountry = (country) => {
    console.log('clicked',country)
  };
  return (
    <div>
      <h1>{countries.length}</h1>
      <ul>
        {
          countries.map(country => <Country countryArray = {country} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
