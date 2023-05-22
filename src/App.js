import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      // .catch(error => console.log(error))
  
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className='App'>
      <h1> Country Loaded : {countries.length}</h1>
      <h2>Country Added : {cart.length}</h2>
      <Cart cart = {cart}></Cart>
      <ul>
        {
          countries.map(country => <Country countryArray = {country} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
