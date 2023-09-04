import Slider from "react-slick";

import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
import carousel3 from "../assets/carousel/carousel-3.jpg";
import carousel4 from "../assets/carousel/carousel-4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider__image">
        <img src={carousel2} />
      </div>
      <div className="slider__image">
        <img src={carousel3} />
      </div>
      <div className="slider__image">
        <img src={carousel4} />
      </div>
      <div className="slider__image">
        <img src={carousel1} />
        <div></div>
      </div>
    </Slider>
  );
}

export default Carousel;
