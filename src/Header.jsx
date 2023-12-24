import React from 'react'
import "./header.css"
import { motivo } from './imports'
import { Link } from 'react-router-dom';
// this is the nav bar 
const Header = () => {
  return (
    <>
    <div className='navbar-div'>
    <div className='navbar'>
      <a href="/">
        <img className='logo' src= {motivo} alt="" />
      </a>
    <div className='menu-div'>
      <a href="/">

        <p>Home</p>
      </a>
      <a href="#whatwedo">
        <p>What we do</p>
      </a>

      <a href="#portfolio">
        <p>Portfolio</p>
      </a>
    </div>
    
    <Link to="/contact-us">

        <button className='contact-btn'>Contact</button>
    </Link>
    
    </div>
    </div>

    </>
  )
}

export default Header