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
    <div className="Projects mt-20 max-w-screen-lg mx-auto">
      <p className="font-bold text-3xl flex items-center justify-center mb-10">
        PROJECTS
      </p>

      <div className="projectsList flex justify-center">
        
          {projects.map((project, index) => (
            <div>{project.link} </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
 