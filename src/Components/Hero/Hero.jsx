import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import myPfp from '../../assets/pfpMe.png';


const Hero = () => {
  return (
    <div className='hero'>
        <img src={myPfp} alt="" />
        <h1><span>I'm Anmol,</span> MERN Stack developer and UI / UX Designer</h1>
        <p>     
          I'm a MERN Stack developer with expertise in UI/UX design, dedicated to crafting seamless web solutions. Passionate about innovation and open-source contributions, I'm here to bring your digital projects to life.
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero