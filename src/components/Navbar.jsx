// import React from 'react'
// import { MdOutlineDarkMode } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <div className='flex justify-between px-16 py-5 w-full '>

//         <div className='text-2xl font-semibold'>Where in the world</div>
//         <div className='flex'><MdOutlineDarkMode className='w-10 h-6'/>Dark Mode</div>
        
//     </div>
//   )
// }

// export default Navbar






// import React, { useState, useEffect } from 'react';
// import { MdOutlineDarkMode } from "react-icons/md";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem('theme') === 'dark'
//   );

//   // Apply dark mode when component mounts
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <div className='flex justify-between px-16 py-5 w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300'>
//       <div className='text-2xl font-semibold'>Where in the world</div>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className='flex items-center space-x-2 cursor-pointer'
//       >
//         <MdOutlineDarkMode className='w-6 h-6' />
//         <span>Dark Mode</span>
//       </button>
//     </div>
//   );
// };

// export default Navbar;








import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex justify-between px-16 py-5 w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300'>
      <div className='text-2xl font-semibold'>Where in the world</div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className='flex items-center space-x-2 cursor-pointer'
      >
        <MdOutlineDarkMode className='w-6 h-6' />
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
};

export default Navbar;
