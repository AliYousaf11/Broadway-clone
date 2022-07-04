import React from 'react'
import './SummerDeal.css'

function SummerDeal({pic,heading,subheading,price}) {
  return (
    <div className='summerDeal'>
        <div className='summer_card'>
            <div className='card_image'>
                <img src={pic} alt="" />
            </div>
            <div className='card_title'>
                <h3>{heading}</h3>
                <h5>{subheading}</h5>
            </div>  

            <div className='card_footer'>
                <h4 className='price'>Rs: {price}</h4>
                <button className='pricebutton'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default SummerDeal