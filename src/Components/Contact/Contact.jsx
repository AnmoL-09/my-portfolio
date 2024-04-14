import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>
                    Please feel free to reach out to me at your convenience regarding any new projects. I am readily available and eager to discuss potential collaborations.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>anmolmahobiya092@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+777-458-1567</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>India</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Names</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>

                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact