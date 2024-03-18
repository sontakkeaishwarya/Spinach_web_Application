import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className='img1'>
            <img src="images/slider/img1.png" alt="Slide 1" />
          </div>
          <div className='img2'>
            <img src="images/slider/img2.png" alt="Slide 2" />
          </div>
          <div className='img3'>
            <img src="/images/slider/img3.png" alt="Slide 3" />
          </div>
          <div className='img4'>
            <img src="/images/slider/img4.png" alt="Slide 4" />
          </div>
          <div className='img5'>
            <img src="/images/slider/img5.png" alt="Slide 5" />
          </div>
          <div className='img6'>
            <img src="/images/slider/img6.png" alt="Slide 6" />
          </div>
        </Slider>
      </div>
      
    </div>
  );
}

export default SliderComponent;
