import React, { useState } from 'react'
import './Nav.css'
import { GoHome } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { RiMessage3Line } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { LuFileTerminal } from "react-icons/lu";


const Nav = () => {

  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}  className={activeNav==='#' ? 'active' : ''}><GoHome /></a>

      <a href='#about' onClick={()=> setActiveNav('#about')}  className={activeNav==='#about' ? 'active' : ''}><HiOutlineUser /></a>
      <a href='#dsa' onClick={()=> setActiveNav('#dsa')}  className={activeNav==='#dsa' ? 'active' : ''}><SiLeetcode /></a>

      <a href='#experience'  onClick={()=> setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active' : ''}><BiBook /></a>

      <a href='#services'onClick={()=> setActiveNav('#services')}  className={activeNav==='#services' ? 'active' : ''} ><RiServiceLine /></a>

      <a href='#web-portfolio'onClick={()=> setActiveNav('#web-portfolio')}  className={activeNav==='#web-portfolio' ? 'active' : ''} ><LuFileTerminal /></a>

      <a href='#contact' onClick={()=> setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active' : ''}><RiMessage3Line /></a>

    </nav>
  )
}

export default Nav