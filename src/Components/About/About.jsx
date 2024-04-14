import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import bg from '../../assets/bg.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={bg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a MERN Stack developer with a passion for learning and an intermediate level in UI/UX design.</p>
                    <p>I thrive on mastering new technologies and crafting captivating digital experiences that resonate with users and stakeholders alike.</p>
                </div>
                <div className="about-skills">

                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}}/>
                    </div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About