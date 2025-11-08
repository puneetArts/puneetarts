import React from 'react'
import './About.css'
import Me from '../../assets/dp.jpg'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAwardFilled className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>


            {/* </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small> */}


            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>Results-driven Full Stack Developer with hands-on experience in building scalable, secure, and high-performance web applications using React.js, Node.js, Express.js, and MongoDB. Adept at integrating AI and cloud technologies to create intelligent and reliable systems. Demonstrated success in delivering full-stack projects such as LynxApp — a social platform with AI-powered recommendations — and CodeMate — an AI-driven code visualization tool. Strong problem-solving and design skills backed by a solid academic foundation (MCA, CGPA 9.18) and practical experience at Globentix Technologies. Passionate about innovation, performance optimization, and crafting seamless user experiences.</p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>
      </div>
    </section>

  )
}

export default About