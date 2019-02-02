import React, { Component } from 'react';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

class QuoteSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      cssEase: 'linear',
      adaptiveHeight: true
    };

    return (
      <div id='quote-slider' className='col-sm-12'>
        <Slider {...settings}>
          <div className='quote'>
            <p><q>Unless you continually work, evolve, and innovate, 
              you’ll learn a quick and painful lesson from someone who has.</q></p>
            <p className='quote-author'>- Cael Sanderson</p>
          </div>
          <div className='quote'>
            <p><q>What’s dangerous is not to evolve.</q></p>
            <p className='quote-author'>- Jeff Bezos</p>
          </div>
          <div className='quote'>
            <p><q>Mistakes help you evolve. Make them, 
              don’t be hard on yourself, learn from them, and evolve.</q>
            </p>
            <p className='quote-author'>- Anonymous</p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default QuoteSlider;