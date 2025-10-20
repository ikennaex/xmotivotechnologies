import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../Pages/Contact/contactpage.css"

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jka5j81', 'template_4wy5yyj', form.current, {
        publicKey: 'YUV82ir3iaHkzxdUL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been sent successfully, we will get back shortly!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactpage'>

      <div>
        <p className='contact-cta'>Call or send a dm on</p>

        <div className='contact-info'>
          <div>
          <FaPhoneAlt size={30} />
            <p>+234 704 270 6659</p>
          </div>

          <div>
          <MdEmail size={30} />
            <p>info@xmotivotechnologies.com</p>
          </div>
        </div>
      </div>

    <div className='contactform-section '>
      <div className='maxwidth-section'>

      <h2 className='contactform-text'>Input your request in the form below</h2>
      <form ref= {form} onSubmit={sendEmail} action="">
        <div className='contact-forminputs'>

        <div className='contactform-name'>

          <div className='contactform-namediv'>
        <label className='required' htmlFor="">First Name</label>
        <input placeholder='First name' type="text" name="user_name" required />
          </div>

          <div className='contactform-namediv'>
        <label htmlFor="">Last Name</label>
        <input placeholder='Last name' type="text" />
          </div>

        </div>

        <label className='required' htmlFor="">Email</label>
        <input placeholder='Email-Address' type="email" name="user_email" required />

        <label className='required' htmlFor="">Subject</label>
        <textarea className='form-textarea' name='message' id="" cols="30" rows="10" required></textarea>
        </div>
        
        <button className='contactform-submit'>Submit Form</button>
      </form>
      </div>
    </div>

    </div>
  )
}

export default ContactPage