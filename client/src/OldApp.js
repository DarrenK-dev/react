import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Ticker from './Components/Ticker'
import LeftSidebar from './LeftSideBar'
import Combined from './Test'


export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <LeftSidebar>
        
      </LeftSidebar>


    </>
  )
}





