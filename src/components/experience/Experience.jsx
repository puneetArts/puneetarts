import React from 'react'
import './Experience.css'
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Experience = () => {
  return (
        <section id='experience'>
  <h5>What Skills I Have</h5>
  <h2>My Experience</h2>

  <div className="container experience__container">
    {/* Web Development Section */}
    <div className="experience__frontend">
      <h3><b>Full Stack Web Development</b></h3>
      <div className="experience__content">
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>HTML</h4><small className='text-light'>Experienced</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>CSS</h4><small className='text-light'>Experienced</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>JavaScript</h4><small className='text-light'>Experienced</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>React.js</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Node.js</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Express.js</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Tailwind CSS</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>RESTful APIs</h4><small className='text-light'>Experienced</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>AI Integration</h4><small className='text-light'>Beginner</small></div>
        </article>
      </div>
    </div>

    {/* Technical Expertise Section */}
    <div className="experience__backend">
      <h3><b>Technical Expertise</b></h3>
      <div className="experience__content">
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>MongoDB</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>MySQL</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>AWS (EC2, S3, Lambda)</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Docker & CI/CD</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Google Gemini API</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>JWT, Multer, Cloudinary</h4><small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Python</h4><small className='text-light'>Experienced</small></div>
        </article>
        <article className='experience__details'>
          <IoShieldCheckmarkSharp className='experience__details-icon' />
          <div><h4>Git, Postman, VS Code</h4><small className='text-light'>Experienced</small></div>
        </article>
      </div>
    </div>
  </div>
</section>


  )
}

export default Experience