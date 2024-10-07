import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
       
        <Route path="/" element={<Homepage />} />
      
      </Routes>
    </Router>
  )
}

export default App