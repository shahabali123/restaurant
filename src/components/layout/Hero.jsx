import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <header>
        <video src="./videos/hero-video.mp4" autoPlay loop muted></video>
        <div className="hero-text">
            <h1>Welcome to our website</h1>
            <a href='#'>Learn more about us</a>
        </div>
    </header>
  )
}

export default Hero