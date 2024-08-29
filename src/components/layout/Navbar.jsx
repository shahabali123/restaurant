import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <h1>Khidmat Ghar</h1>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about-us">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Reservation</a></li>
            
        </ul>
        <div className="menu">
            <a href="#menu">OUR MENU</a>
        </div>
    </nav>
  )
}

export default Navbar