import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Pages/Home" 
import About from "./Pages/About" 
import Vans from './Pages/vans'


import "/server"

function App() {
  return (
    <BrowserRouter>
    
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App