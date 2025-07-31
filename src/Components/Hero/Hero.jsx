import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>I'm <span>Srithi Chatterjee</span></h1>
      <p>I am a AI Engineer</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <a
          href="Srithi Chatterjee (1).pdf"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </a>

      </div>
    </div>
  )
}

export default Hero
