import React from 'react';
import './Country.css'

const Country = (props) => {
  const { name, capital, population, region, flags} = props.countryArray;
  const handleAddCountry = props.handleAddCountry;
  // const imgName = props.countryArray.flags.png;

  // handleAddCountry
  return (
    <div className='style'>
      <h2>This is {name.common}</h2>
      <img src={flags.png} height={'100px'} alt="" />
      <p> Capital {capital}</p>
      <p> Population {population}</p>
      <p> Region {region}</p>
      {/* <h2>This is {props.countryArray.name.common}</h2>
      <p>{props.countryArray.capital}</p>
      <p>{props.countryArray.population}</p>
      <p>{props.countryArray.region}</p> */}
      
      <button onClick={() => handleAddCountry(props.countryArray)}> Add Country</button>
    </div>
  );
};

export default Country;