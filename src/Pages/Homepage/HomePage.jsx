import React from 'react'
import "./homepage.css"
import { TypeAnimation } from 'react-type-animation';
import About from './About'
import Whatwedo from './Whatwedo'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { motivophone } from '../../imports';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div className='homepage-main'>
        <div className='homepage-text'>

        {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially

        "Let's design",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Let's develop",
        1000,
        "Let's build a masterpiece together"
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1rem', display: 'inline-block', fontWeight: 'bold' }}
      repeat={0}
    /> */}
    
        <h1 className='landing-text'>
        Let's build a masterpiece together
        </h1>
        <p className='landing-subtitle'>Get ready for the fastlane...</p>
        
        </div>

        {/* <div>
          <img className='home-img' src= {motivophone} alt="" />
        </div> */}

        <Link to = "/contact-us" >
        <button className='book-btn'>Book Now</button>
        </Link>
    </div>

    <About />
    <Whatwedo />
    <Portfolio />
    <Footer />


    </>
  )
}

export default HomePage