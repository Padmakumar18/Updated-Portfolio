import "./Projects.css";
import React, { useRef, useEffect, useState } from "react";

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
  const sliderRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setScrollWidth(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      );
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
      <p className="font-bold text-3xl mb-10 flex items-center justify-center">
        PROJECTS
      </p>
      <button className="slider-btn prev" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider" ref={sliderRef}>
        {projects.map((project, index) => (
          <div key={index} className="projectDiv text-center p-4 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-white mb-2">{project.title}</p>
            <div className="projectImage">
              <img
                src={project.img}
                alt={project.name}
                className="w-full YT h-auto rounded-lg"
              />
            </div>
            <p className="text-white mt-2 mb-2 font-semibold">{project.name}</p>
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
        ))}
      </div>
      <button className="slider-btn next" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Projects;