import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myPhoto from "./assets/MyPicture.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import quotes from "./data/quotes";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateQuote(); // Show a quote on initial render
  }, []);
  return (
    <>
      <div className="container">
        <div className="home flex items-center justify-center h-screen">
          <div className="details ">
            <p className="text-base md:text-lg lg:text-xl">
              <span className="font-bold ">PADMA</span> KUMAR
            </p>

            <p className="text-sm mt-3">padmakumar23.dev@gmail.com</p>
            <br />
            <p className="text-sm">"{quote.quote}"</p>
            <p className="text-sm float-right">— {quote.author}</p>
          </div>

          <div className="picture">
            <LazyLoadImage
              src={myPhoto}
              alt="Picture"
              className="MyPicture transition-transform duration-300 hover:scale-110"
            />
            {/* <motion.img
      src={myPhoto}
      alt="Padma Kumar"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }} 
      transition={{ duration: 2, type: "spring" }}
      className="MyPicture"
    />  */}
          </div>
        </div>

        <div className="skills">
          <p className="font-bold text-3xl mx-auto text-center">SKILLS</p>

          <div className="skillsList">
            <ul>
              <div className="skill">
                <li>HTML / CSS</li>
                <li>Tailwind</li>
                <li>Javascript</li>
              </div>

              <br />
              <div className="skill">
                <li>Java</li>
                <li>Maven</li>
                <li>Hibernate</li>
                <li>Spring</li>
                <li>REST Api</li>
              </div>
              <br />
              <div className="skill">
                <li>MySQL</li>
                <li>Postgresql</li>
                <li>MongoDb</li>
                <li>React</li>
                <li>Svelte</li>
              </div>

              <br />
              <div className="skill">
                <li>Github</li>
                <li>Figma</li>
                <li>Supabse</li>
                <li>Firebase</li>
              </div>

            </ul>
          </div>
        </div>

        <div className="Projects">
          <p className="font-bold text-3xl">PROJECTS</p>

          <div className="projectsList">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 1" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 2" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 1" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 2" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 1" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 2" className="MyPicture" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 1" className="MyPicture" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myPhoto} alt="Padma Kumar 2" className="MyPicture" />
              </SwiperSlide>
              {/* More slides here */}
            </Swiper>
          </div>
        </div>

        <div className="Contact mt-20 mb-10">
          <p className="font-bold text-3xl">Tell's make a good API Call</p>

          <div className="contactList">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop
              // navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <a href="" target="_balnk">
                  Mail
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" target="_balnk">
                  LinkedIn
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="" target="_balnk">
                  LinkedIn
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" target="_balnk">
                  Reddit
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="" target="_balnk">
                  Reddit
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" target="_balnk">
                  Instagram
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="" target="_balnk">
                  Instagram
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" target="_balnk">
                  Mail
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
