import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';


const Homepage = () => {
  const [countries, setCountries] = useState([]); // Initialize as an empty array

  const BASE_URL = 'https://restcountries.com/v3.1/all';

  const fetchCountriesData = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched Data:', data);
      setCountries(data); // Set the fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <div className='w-full h-full px-16  bg-slate-50'>
      <Filters />
      <div className='grid grid-cols-4 gap-10'>
        {countries.map((country) => (
          <div key={country.cca3} className='border  rounded-lg bg-white'>
           
            <img src={country.flags.png} alt='coutries flags' className='w-full h-48 object-cover border rounded-lg' />
            <div className='p-6'>
            <h2 className='text-xl font-bold'>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region }</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
