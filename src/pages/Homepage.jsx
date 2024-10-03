import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";

const Homepage = () => {
  const BASE_URL = 'https://restcountries.com/v3.1/all'; 

  const fetchCountriesData = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCountriesData(); 
  }, []);

  return (
    <div className='flex justify-between my-7 px-16'>
      <FaSearch className='relative left-14 top-3 z-10'/>
      <input 
      type="text" 
      className='absolute border shadow-md  mx- w-96 px-20 h-10 outline-none'
      placeholder='Search for any country....'
      />
      <select
       name="filter by region"
       
        id="filter by region" 
        className='h-8'>
        <option value="1">filter by region</option>
        <option value="2">Africa</option>
      </select>
    </div>
  )
}

export default Homepage