import { useState } from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
import Menu from './components/sections/Menu';


function App() {

  return (
    <>
     <Navbar/>
    <Hero/>
    <AboutUs/>
    <hr />
    <Services/>
    <hr />
    <Menu/>
    <hr />
    </>
  )
}

export default App
