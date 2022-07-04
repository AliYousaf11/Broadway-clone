import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import './Home.css'
import './Carousel.css'

function Carousel() {
    const settings = {
        autoplay:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "14%",
        slidesToShow: 1,
        speed: 200
      };
  return (
    <div className='carousel'>
        <Slider {...settings} className="slider">
          <div className="innerSlider">
            <img src="/image/1.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/2.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/3.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/4.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/5.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/6.png" alt="" className="image"/>
          </div>
        </Slider>
    </div>
  )
}

export default Carousel