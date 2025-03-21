import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";

import YT from "./projectImages/YTBookmark.webp";
import ToDo from "./projectImages/To-Do.webp";
import Flames from "./projectImages/Flames.webp";
import Link2QR from "./projectImages/Link2QR.webp";
import TicTacTeo from "./projectImages/Tic-Tac-Teo.webp";
import ToDoList from "./projectImages/To-Do- List.webp";

const Projects = () => {
  const projects = [
    {
      title: "Chrome Extension",
      name: "YT Bookmark",
      img: YT,
      link: "",
    },
    {
      title: "Chrome Extension",
      name: "TO-Do List",
      img: ToDo,
      link: "",
    },
    {
      title: "Web Application",
      name: "Flames",
      img: Flames,
      link: "https://flames-algorithm.netlify.app/",
    },
    {
      title: "Web Application",
      name: "Link2QR",
      img: Link2QR,
      link: "https://link-2-qr.web.app",
    },
    {
      title: "Web Application",
      name: "Tic Tac Teo",
      img: TicTacTeo,
      link: "https://tic-tac-teo-ten.vercel.app",
    },
    {
      title: "Web Application",
      name: "To Do List",
      img: ToDoList,
      link: "https://todo-ease.web.app",
    },
  ];

  return (
    <div className="Projects mt-20 relative max-w-screen-lg mx-auto overflow-hidden">
      <p className="font-bold text-3xl flex items-center justify-center mb-10">
        PROJECTS
      </p>

      <div className="projectsList relative flex justify-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Navigation, Autoplay]}
          className="w-full max-w-screen-xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="projectDiv text-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <p className="text-white mb-2">{project.title}</p>
                <div className="projectImage">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full YT h-auto rounded-lg"
                  />
                </div>
                <p className="text-white mt-2 mb-2 font-semibold">
                  {project.name}
                </p>
                <div className="buttons flex justify-center gap-2">
                  <button className="bg-blue-600 text-white rounded sourceCode">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Source code
                    </a>
                  </button>
                  <button className="bg-green-600 text-white rounded tapToView">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tap to view
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute left-4 text-white text-3xl z-10"></div>
        <div className="swiper-button-next absolute right-4 text-white text-3xl z-10"></div>
      </div>
    </div>
  );
};

export default Projects;
