import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PreviewCountries = ({ darkMode }) => {
  const { id } = useParams(); // Get country ID from URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country details');
        }
        const data = await response.json();
        setCountry(data[0]); // API returns an array, get first item
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading country details...</div>;
  }

  return (
    <div className={`min-h-screen px-10 py-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Link to="/" className="inline-block px-4 py-2 mb-5 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all">
        ← Back to Homepage
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Flag */}
        <img src={country.flags.png} alt={country.name.common} className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />

        {/* Country Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common || 'N/A'}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ') || 'N/A'}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ') || 'N/A'}</p>
          <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
          <p><strong>Border Countries:</strong> {country.borders?.join(', ') || 'None'}</p>
          <p><strong>Driving Side:</strong> {country.car.side}</p>
          <p><strong>Google Maps:</strong> <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Maps</a></p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCountries;
