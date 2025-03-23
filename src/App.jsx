import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import PreviewCountries from './pages/PreviewCountries';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  // Toggle dark mode and store preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route path="/country/:id" element={<PreviewCountries darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
