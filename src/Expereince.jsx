import "./Expereince.css";
import React, { useRef, useEffect, useState } from "react";

const Slider = () => {
  const sliderRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setScrollWidth(sliderRef.current.scrollWidth - sliderRef.current.clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current.scrollLeft === 0) {
      sliderRef.current.scrollLeft = scrollWidth;
    } else {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current.scrollLeft >= scrollWidth) {
      sliderRef.current.scrollLeft = 0;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider" ref={sliderRef}>
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
        <div className="slide">Slide 4</div>
        <div className="slide">Slide 5</div>
        <div className="slide">Slide 6</div>
      </div>
      <button className="slider-btn next" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
