import React from 'react';
    import Slider from 'react-slick';
    import './index.css'
    import a2 from './images/b3.jpg'
    import "slick-carousel/slick/slick.css";         // Import slick styles
import "slick-carousel/slick/slick-theme.css";   // Import slick theme styles
import a3 from './images/b6.jpg'
import a4 from './images/b12.jpg'
import a5 from './images/b2.webp'
import a6 from './images/b7.jpg'
import a7 from  './images/b8.jpg'


    
    
    const ImageSlider = () => {
      const settings = {
                  // Enable dots navigation
        infinite: true,       // Infinite looping
        speed: 500,           // Transition speed
        slidesToShow: 1,      // Number of slides to show
        slidesToScroll: 1,    // Number of slides to scroll at a time
        autoplay: true,       // Autoplay slider
        autoplaySpeed: 1000, // Autoplay speed in ms
      };
    
      return (
       
        <div className="slider-container  ">
         
          <Slider  {...settings}>
            <div className='p6'>
              <img  src={a2} alt="Slide 1" />
            </div>
            <div className='p6'>
              <img  src={a3} alt="Slide 2" />
            </div>
            <div className='p6'>
              <img  src={a4} alt="Slide 3" />
            </div>
            <div className='p6'>
              <img  src={a5} alt="Slide 4" />
            </div>
            <div className='p6'>
              <img  src={a6} alt="Slide 4" />
            </div>
            <div className='p6'>
              <img  src={a7} alt="Slide 4" />
            </div>
          </Slider>
        </div>
      );
    };
    
    export default ImageSlider;
    
