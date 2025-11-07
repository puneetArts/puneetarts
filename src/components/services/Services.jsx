import React from 'react'
import './Services.css'
import { IoMdCheckmark } from "react-icons/io";

const Services = () => {
  return (
   <section id='services'>
  <h5>What I Offer</h5>
  <h2>Services Menu</h2>
  <div className="container services__container">
    
    {/* Web Development Section */}
    <article className='service'>
      <div className="service__head">
        <h2>Web Development</h2>
      </div>
      <ul className='service__list'>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>UI/UX Designing</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Frontend Development</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Full Stack Web Development</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Portfolio / Blog Websites</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>API Integration & Authentication</p>
        </li>
      </ul>
    </article>

    {/* Technical Solutions Section (Replaces Art Section) */}
    <article className='service'>
      <div className="service__head">
        <h2>Technical Solutions</h2>
      </div>
      <ul className='service__list'>
        <li className='list_items'><IoMdCheckmark className='service__list-icon' />
          <div><h4>Backend Development</h4>
            <small className='text-light'>Node.js, Express.js, REST APIs</small></div>
        </li>
        <li className='list_items'><IoMdCheckmark className='service__list-icon' />
          <div><h4>Database Management</h4>
            <small className='text-light'>MongoDB, MySQL</small></div>
        </li>
        <li className='list_items'><IoMdCheckmark className='service__list-icon' />
          <div><h4>Cloud Deployment</h4>
            <small className='text-light'>AWS EC2, S3, Render, Vercel</small></div>
        </li>
        <li className='list_items'><IoMdCheckmark className='service__list-icon' />
          <div><h4>AI Integration</h4>
            <small className='text-light'>Google Gemini API, NLP Models</small></div>
        </li>
        <li className='list_items'><IoMdCheckmark className='service__list-icon' />
          <div><h4>DevOps & CI/CD</h4>
            <small className='text-light'>Docker, GitHub Actions</small></div>
        </li>
      </ul>
    </article>

    {/* Other Services Section */}
    <article className='service'>
      <div className="service__head">
        <h2>Other Services</h2>
      </div>
      <ul className='service__list'>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Logo & Branding</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Content Writing</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>Technical Documentation</p>
        </li>
        <li><IoMdCheckmark className='service__list-icon' />
          <p>System Optimization & Debugging</p>
        </li>
      </ul>
    </article>

  </div>
</section>

  )
}

export default Services