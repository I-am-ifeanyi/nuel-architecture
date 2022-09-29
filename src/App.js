import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'



const App = () => {
  return (
    <div className="bg-[#F5F5F5] p-8">
    <Routes >
        <Route path="/" element={< LandingPage/>} />
        <Route path="AboutUs" element={< AboutUs/>} />
    </Routes>
    </div>
  )
}

export default App