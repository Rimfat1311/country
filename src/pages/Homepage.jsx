import React, { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";

const Homepage = () => {
  const BASE_URL = 'https://restcountries.com/v3.1/all'; // Make sure this endpoint is correct

  const fetchCountriesData = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched Data:', data); // Log the fetched data
      // You can also set the fetched data to state if needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCountriesData(); // Call the fetch function when the component mounts
  }, []);

 
  return (
    <div className='flex justify-between my-7'>
      <IoSearch className='relative left-14'/>
      <input 
      type="text" 
      className='absolute border shadow-md  mx-16 w-96 px-6 h-10 outline-none'
      placeholder='Search for any country....'
      />
      <select name="filter by region" id="filter by region" className='h-8'>filter by region
        <option value="1">filter by region</option>
      </select>
    </div>
  )
}

export default Homepage