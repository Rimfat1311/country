import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../components/Filters';

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const BASE_URL = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountriesData();
  }, []);

  useEffect(() => {
    let filtered = countries;
    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedRegion) {
      filtered = filtered.filter((country) => country.region === selectedRegion);
    }
    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);

  return (
    <div className='w-full h-full px-16 bg-slate-50 dark:bg-gray-800 text-black dark:text-white transition-all duration-300'>
      <Filters onSearch={setSearchTerm} onFilterRegion={setSelectedRegion} />
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
        {filteredCountries.map((country) => (
          <Link to={`/country/${country.cca3}`} key={country.cca3}>
            <div className='border rounded-lg shadow-sm bg-white dark:bg-gray-900 transition-all duration-300 cursor-pointer hover:shadow-lg'>
              <img src={country.flags.png} alt={country.name.common} className='w-full h-48 object-cover border rounded-t-lg' />
              <div className='p-6'>
                <h2 className='text-xl font-bold'>{country.name.common}</h2>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
