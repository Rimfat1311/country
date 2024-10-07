import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between px-16 py-5 w-full'>

        <div>Where in the world</div>
        <div className='flex'><MdOutlineDarkMode className='w-10 h-6'/>Dark Mode</div>
        
    </div>
  )
}

export default Navbar