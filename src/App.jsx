import { useState, useEffect } from "react";
import myPhoto from "./assets/MyPicture.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import quotes from "./data/quotes";

import "./App.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Projects from "./Projects";
import Skills from "./Skills";
import Slider from './Slider';
import Expereince from "./Expereince";

function App() {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateQuote();
  }, []);
  return (
    <>
      <div className="main w-screen">
        <div className="home flex items-center justify-center h-screen">
          <div className="details ">
            <p className="text-xlg md:text-lg lg:text-4xl name">Padma Kumar </p>

            <p className="text-lg mt-3">padmakumar23.dev@gmail.com</p>
            <button className="text-lg mt-5 resumeButton rounded">
              <a
                href="https://drive.google.com/file/d/1SPi2P_IyWuxD9ugAFfQl34aCGpEq_qjq/view?usp=sharing"
                target="_blank"
                className="resumeAnchor"
              >
                Resume
              </a>
            </button>

            <p className="text-lg mt-4">"{quote.quote}"</p>
            <p className="text-lg float-right ">- {quote.author}</p>
          </div>

          <div className="picture">
            <LazyLoadImage
              src={myPhoto}
              alt="Picture"
              className="MyPicture transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

<Slider/>
        <Skills />

        {/* <Expereince /> */}

        {/* <Projects /> */}

        <div className="Contact mt-20">
          <p className="font-bold text-white text-3xl">
            Tell's make a good API Call
          </p>

          <div className="contactList"></div>
        </div>
      </div>
    </>
  );
}

export default App;
