import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a MERN Stack Developer and I am open to make contributions in Web Developmen Projects.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter your email'/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className='footer-bottom-left'>@ 2024 Anmol. All rights reserved</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer