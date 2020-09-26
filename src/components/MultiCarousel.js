import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--primaryColor)",
        width: "2rem",
        height: "2rem",
        top: "-3rem",
        right: "43%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--primaryColor)",
        top: "-3rem",
        left: "43%",
      }}
      onClick={onClick}
    />
  );
}

function MultiCarousel({children}) {
  let settings = {
    infinite: true,
    speed: 2000,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container'>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default MultiCarousel;
