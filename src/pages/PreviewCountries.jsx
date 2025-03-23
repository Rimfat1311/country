import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PreviewCountries = () => {
  const { id } = useParams(); // Get country ID from URL
  const [country, setCountry] = useState(null);
  const BASE_URL = `https://restcountries.com/v3.1/alpha/${id}`;

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCountry(data[0]); // API returns an array, so select first item
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [id]);

  if (!country) return <p className="text-center text-gray-500">Loading country details...</p>;

  return (
    <div className='w-full h-full px-16 py-10 bg-slate-50 dark:bg-gray-800 text-black dark:text-white transition-all duration-300'>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg">← Back to Homepage</Link>

      <div className='mt-10 flex flex-col md:flex-row gap-10'>
        <img src={country.flags.png} alt={country.name.common} className='w-1/3 h-auto border rounded-lg shadow-md' />
        <div>
          <h1 className='text-3xl font-bold'>{country.name.common}</h1>
          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
          <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCountries;
