import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousal.css'; 

function VideoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1/2,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '25%',
        },
      },
    ],
  };

  return (
    <div className="video-carousel-container">
      <Slider {...settings}>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameBorder="0"
            allowFullScreen
            title="Video 1"
          ></iframe>
        </div>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameBorder="0"
            allowFullScreen
            title="Video 2"
          ></iframe>
        </div>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameBorder="0"
            allowFullScreen
            title="Video 3"
          ></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default VideoCarousel;
