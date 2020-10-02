import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./SlideView.css";
import medical1 from "../assets/medical1.jpg";
import medical2 from "../assets/medical2.jpg";
import medical3 from "../assets/medical3.jpg";

const items = [
  {
    src: medical1,
    altText: "Welcome to InfoHealth solutions Ltd",
    caption: "",
  },
  {
    src: medical2,
    altText: "At INFOSOLUTIONS Ltd we offer services like capacity support and research support",
    caption: (
      <Link
        to='/services'
        className='slideview__link'>
        Services
      </Link>
    ),
  },
  {
    src: medical3,
    altText: "Get in touch with us",
    caption: (
      <Link
        to='/contact'
        className='slideview__link slideview__link-red'>
        Contact us
      </Link>
    ),
  },
];

const SlideView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <div>
          <img src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className='slideview'
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default SlideView;
