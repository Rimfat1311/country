import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Previewpage from './pages/Previewpage'
import { Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path='homepage' element={<Homepage />}/>
        <Router path='previewpage' element={<Previewpage />}/>
      </Router>
    </div>
  )
}

export default App