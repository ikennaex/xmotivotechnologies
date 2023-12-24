import React from 'react'
import "../../Pages/Contact/contactpage.css"

const ContactPage = () => {
  return (
    <div className='contactform-section'>
      <h2 className='contactform-text'>Input your request in the form below</h2>
      <form action="">
        <div className='contact-forminputs'>

        <div className='contactform-name'>

          <div className='contactform-namediv'>
        <label className='required' htmlFor="">First Name</label>
        <input placeholder='First name' type="text" required />
          </div>

          <div className='contactform-namediv'>
        <label htmlFor="">Last Name</label>
        <input placeholder='Last name' type="text"/>
          </div>

        </div>

        <label className='required' htmlFor="">Email</label>
        <input placeholder='Email-Address' type="text" required />

        <label className='required' htmlFor="">Subject</label>
        <textarea name="" id="" cols="30" rows="10" required></textarea>
        </div>

        <button className='contactform-submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default ContactPage