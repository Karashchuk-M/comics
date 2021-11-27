import React, { Component } from 'react';
import Slider from "react-slick";

import styles from './Slider.module.css';

import image1 from "./img/slide-1.png";
import image2 from "./img/slide-2.png";
import image3 from "./img/slide-3.png";
import image4 from "./img/slide-4.png";
import image5 from "./img/slide-5.png";





export default class Responsive extends Component {
  render() {
    var settings = {
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay: true,
			speed: 200,
			autoplaySpeed: 4000,
			pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container">
      <div className={styles.Slider}>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <Slider {...settings}>
          <div className={styles.Slider__item}>
            <img src={image1} alt="slide1"/>
            <h3>Расскажем все про CGC</h3>
            
          </div>
          <div className={styles.Slider__item}>
            <img src={image2} alt="image2" />
            <h3>Внесите свой предмет искусства в блокчейн реестр цифровых прав</h3>
          </div>
          <div className={styles.Slider__item}>
            <img src={image3} alt="image3" />
            <h3>Ссылка на самый дорогой комикс на Ebay</h3>
          </div>
          <div className={styles.Slider__item}>
            <img src={image4} alt="image4" />
              <h3>Даем доступ на рынок нового искусства</h3>

          </div>
          <div className={styles.Slider__item}>
            <img src={image5} alt="image5" />
              <h3 >Не упусти свой шанс!</h3>
          </div>
          

        </Slider>
      </div>
      </div>
    );
  }
}

const cssstyle = `
h3 {
  position: absolute;
  bottom: 25px;
  left: 12px;
  font-family: "GothamPro-Black";
  font-weight: 900;
  font-size: 1.5em;
  color: #fff;
  line-height: 28px;
  width: 75%;
}
.slick-list, .slick-slider, .slick-track{
  height: 345px;
  
}
.slick-dots li button:before
{
    font-family: 'slick';
    font-size: 10px;
    line-height: 20px;

    position: relative;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .95;
    color: rgb(255 107 107);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .55;
    color: rgb(0 0 0);
}


`