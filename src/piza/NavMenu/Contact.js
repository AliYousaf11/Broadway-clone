import React from 'react'
import './Contact.css'
import Carousel from "./Carousel"

function Contact() {
  return (
    <div className='Contact'>
      <Carousel/>
      <center>
      <h5>Contact Form</h5>
      </center>
    <div className='contact'>
      <form action="">
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Enter your Phone Number' />
        <input type="text" placeholder='Remarks' />        
      </form>
      <button><i>SEND</i></button>
    </div>
    </div>
  )
}

export default Contact