import React from 'react'
import './LocationComponent.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function LocationComponent({image,name}) {
  return (
    <div className='locC'>
        <img src={image} alt="" />
        <label htmlFor="">{name}</label>
        <button className='viewbutton'>View locations</button>
        <span><ArrowForwardIosIcon/></span>
    </div>
  )
}
export default LocationComponent