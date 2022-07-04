import React from 'react'
import './Franchies.css'
import Carousel from "./Carousel"

function Franchies() {
  return (
    <div className='Franchies'>
      <Carousel/>
      <center>
      <h5>Frenchies Form</h5>
      </center>
    <div className='franchies'>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Contact Number' />
        <input type="text" placeholder='Which city/town you are interested in opening the franchise' />
        <input type="text" placeholder='Do you own the property where you are interested in opening the franchise' />
        <input type="text" placeholder='What is your current occupation?' />
        <input type="text" placeholder='Do you own any business? (If yes then please specify the name of business)' />
        <input type="text" placeholder='How much capital you have to invest on this franchise?' />
        <input type="text" placeholder='Office Address' />
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Home Address' />
      </form>
      <button><i>SEND</i></button>
    </div>
    </div>
  )
}

export default Franchies