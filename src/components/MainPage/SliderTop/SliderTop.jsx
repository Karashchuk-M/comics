import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PropTypes from 'prop-types';
import styles from './SliderTop.module.css';

import image1 from "./img/slide-1.png";
import image2 from "./img/slide-2.png";
import image3 from "./img/slide-3.png";
import image4 from "./img/slide-4.png";
import image5 from "./img/slide-5.png";

const SliderTop = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,       
        autoplaySpeed: 3000,
        pauseOnHover: true,

        useTransform: true,
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
        
        <>
            <div className={styles.wrapper}>

            <Slider {...settings}>
            <div className={styles.Slider__item}>
            <img className={styles.Slider__img} src={image1} alt="slide1"/>
            <h3 className={styles.Slider__title}>Расскажем все про CGC</h3>
            
          </div>
          <div className={styles.Slider__item}>
            <img className={styles.Slider__img} src={image2} alt="image2" />
            <h3 className={styles.Slider__title}>Внесите свой предмет искусства в блокчейн реестр цифровых прав</h3>
          </div>
          <div className={styles.Slider__item}>
            <img className={styles.Slider__img} src={image3} alt="image3" />
            <h3 className={styles.Slider__title}>Ссылка на самый дорогой комикс на Ebay</h3>
          </div>
          <div className={styles.Slider__item}>
            <img className={styles.Slider__img} src={image4} alt="image4" />
              <h3 className={styles.Slider__title}>Даем доступ на рынок нового искусства</h3>

          </div>
          <div className={styles.Slider__item}>
            <img className={styles.Slider__img} src={image5} alt="image5" />
              <h3 className={styles.Slider__title} >Не упусти свой шанс!</h3>
          </div>

        </Slider>
      </div>
        </>
     );
}

SliderTop.propTypes = {
    autoplay: PropTypes.bool,
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,       
    autoplaySpeed: PropTypes.number,
    pauseOnHover: PropTypes.bool,
    responsive: PropTypes.bool,
    useTransform: PropTypes.bool
    
}

export default SliderTop;