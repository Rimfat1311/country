import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Previewpage from './pages/Previewpage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Previewpage />
    </div>
  )
}

export default App