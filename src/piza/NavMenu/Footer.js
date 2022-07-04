import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>

        <div className='logo'>
          <span><img src="/footer/1.png" alt="" /></span>
          <span><img src="/footer/2.png" alt="" /></span>
        </div>

        <div className='socialMedia'>
            <img src="/footer/5.png" alt="" />
            <p>FACEBOOK</p>

            <img src="/footer/4.png" alt="" />
            <p>INSTAGRAM</p>

            <img src="/footer/3.png" alt="" />
            <p>WHATSAPP</p>

            <img src="/footer/6.png" alt="" />
            <p>CALL</p>
        </div>

        <div className='contactUS'><img src="/footer/7.png" alt="" /></div>
    </div>  
  )
}

export default Footer