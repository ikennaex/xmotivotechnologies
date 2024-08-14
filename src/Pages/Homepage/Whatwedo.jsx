import React from 'react'
import "../Homepage/whatwedo.css"
import { graphics, laptop } from '../../imports'

const Whatwedo = () => {
  return (
    <div id='whatwedo' className='whatwedo-div '>

      <div className='maxwidth-section'>
    <div className=''>
        <h2 className='whatwedo-text'>What we do</h2>
        <p className='whatwedo-subtext'>Take a peek into our Services</p>
    </div>

    <div className='services-main'>
        <div className='webdevelopment-div'>
            <p className='webdev-text'>Website <br /> development</p>
            <ul className='webdev-list'>
              <li>Landing Pages</li>
              <li>Business Websites</li>
              <li>E-commerce</li>
              <li>Blog...Etc</li>
            </ul>
            {/* <img className='webdev-img' src={laptop} alt="" /> */}
        </div>

        <div className='graphics-div'>
          <p className='graphics-text'>Graphics <br /> Design</p>

          <ul className='graphics-list'>
            <li>Logos</li>
            <li>Banners & Flyers</li>
            <li>Business Cards</li>
            <li>Social media Designs</li>
            <li>EBook Covers</li>
            <li>Document Editing</li>
          </ul>

          <div className='graphics-imgdiv'>

          {/* <img className='graphics-img' src={graphics} alt="" /> */}
          </div>
        </div>
    </div>

    <button className='whatwedo-btn'>Book Now</button>

    </div>
    </div>
  )
}

export default Whatwedo