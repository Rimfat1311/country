import React from 'react'
import { FaSearch } from "react-icons/fa";

const Filters = () => {
  return (
    <div className='flex justify-between py-10 bg-slate-50'>
      <FaSearch className='relative left-14 top-3 z-10' />
      <input
        type="text"
        className='absolute border shadow-md  mx- w-96 px-20 h-10 outline-none'
        placeholder='Search for any country....'
      />


      <select
        name="filter by region"
        id="filter by region"
        className='h-8 bg-white rounded-lg p-5'>Filter by Region
        <option value="/"></option>
        <option value="2">Africa</option>
        <option value="3">America</option>
        <option value="4">Asia</option>
      </select>
    
    </div>
  )
}

export default Filters