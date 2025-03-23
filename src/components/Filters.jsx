import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Filters = ({ onSearch, onFilterRegion }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    onFilterRegion(e.target.value);
  };

  return (
    <div className='flex justify-between items-center py-10 bg-slate-50 dark:bg-gray-800'>
      {/* Search Bar */}
      <div className="relative">
        <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
        <input
          type="text"
          className='pl-10 pr-4 py-2 border rounded-md shadow-md w-96 outline-none dark:bg-gray-700 dark:text-white'
          placeholder='Search for any country...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Filter by Region Dropdown */}
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className='h-10 px-4 bg-white dark:bg-gray-700 dark:text-white border rounded-md shadow-md outline-none'
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filters;
