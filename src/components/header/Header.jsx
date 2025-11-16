import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/meD5.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h4> Hi there! Welcome to my portfolio — I’m excited to share my work and creative journey with you.</h4>
          <h1><b>Puneet Singh</b></h1>
          <h5 className='text-light'>Web Developer | Artist</h5>
          <CTA/>
          <HeaderSocial/>
          <div className='me'>
            <img src={ME} alt='me' className='me-pic'></img>
          </div>
          <a href='#contact' className='scroll__down' > Scroll Down</a>
        </div>
    </header>
  )
}

export default Header