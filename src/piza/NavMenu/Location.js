import React from 'react'
import LocationComponent from './LocationComponent'
import './Location.css'
import Carousel from "./Carousel"

function Location() {
  return (
    <div className='Location'>
    <Carousel/>
    <div className='location'>
      <div className='row0'>

      <div className='our'>
        <p id='p1'>Our</p>
        <p id='p2'>Locations</p>
      </div>
      
      <LocationComponent
      image="/menu/hyderabad.jpg"
      name="Hyderabad"
      />
      <LocationComponent
      image="/menu/karachi.jpg"
      name="Karachi"
      />
      </div>


      <div className='row1'>
      <LocationComponent
      image="/menu/faisalabad.jpg"
      name="Faisalabad"
      />
      <LocationComponent
      image="/menu/islamabad.jpg"
      name="Islamabad"
      />
      <LocationComponent
      image="/menu/lahore.jpg"
      name="Lahore"
      />
      </div>

      <div className='row2'>
      <LocationComponent
      image="/menu/rawalpindi.jpg"
      name="Rawalpindi"
      />
      <LocationComponent
      image="/menu/sialkot.jpg"
      name="Sialkot"
      />
      <LocationComponent
      image="/menu/lahore.jpg"
      name="Lahore"
      />
      </div>
    </div>
    </div>
  )
}

export default Location