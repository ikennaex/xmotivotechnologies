import React from 'react'
import "./homepage.css"
import About from './About'
import Whatwedo from './Whatwedo'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div className='homepage-main'>
        <div className='homepage-text maxwidth-section'>
        <h1 className='landing-text'>
        Let's build a masterpiece together
        </h1>
        <p className='landing-subtitle'>Get ready for the fastlane...</p>
        
        </div>

        <div className='homepagebtn'>
        <Link to = "/viewportfolio" >
        <button className='book-btn'>Our Work</button>
        </Link>
        <Link to = "/contact-us" >
        <button className='book-btn'>Book Now</button>
        </Link>
        </div>
    </div>

    <About />
    <Whatwedo />
    <Portfolio />
    <Footer />

    </>
  )
}

export default HomePage