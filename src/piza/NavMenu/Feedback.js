import React from 'react'
import './Feedback.css'

function Feedback() {
  return (
    <div className='Feedback'>
      <center>
      <h5>Feedback Form</h5>
      </center>
      <div className='selection'>
          <select name="" id="">
            <option value="" defaultValue>Select-Option</option>
            <option value="lahore">lahore</option>
            <option value="krachi">krachi</option>
            <option value="islamabad">islamabad</option>
            <option value="hyderabad">hyderabad</option>
            <option value="sialkot">sialkot</option>
            <option value="multan">multan</option>
          </select>
      </div>
    </div>
  )
}

export default Feedback