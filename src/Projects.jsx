import "./Projects.css";
import React, { useRef, useEffect, useState } from "react";

import YT from "./projectImages/YTBookmark.webp";
import ToDo from "./projectImages/To-Do.webp";
import Flames from "./projectImages/Flames.webp";
import Link2QR from "./projectImages/Link2QR.webp";
import TicTacTeo from "./projectImages/Tic-Tac-Teo.webp";
import ToDoList from "./projectImages/To-Do- List.webp";
import Github from "./projectImages/github.webp";
import ChatApp from "./projectImages/Chat-App.webp";
import DictionaryExtension from "./projectImages/Dictionary-Extension.webp";
import Finance from "./projectImages/Finance.webp";

const Projects = () => {
  const projects = [
    {
      title: "Web Application",
      name: "Finance Manager",
      img: Finance,
      link: "https://my-financely.netlify.app/",
      sourceCode : "https://github.com/Padmakumar18/Personal_Finance_Manager"
    },
    {
      title: "Web Application",
      name: "Flames",
      img: Flames,
      link: "https://flames-algorithm.netlify.app/",
      sourceCode : "https://github.com/Padmakumar18/Flames_web"
    },{
      title: "Web Application",
      name: "Chat Application",
      img: ChatApp,
      link: "https://github.com/Padmakumar18/Chat-Application/tree/main",
      sourceCode : "https://github.com/Padmakumar18/Chat-Application/tree/main"
    },
    {
      title: "Web Application",
      name: "Link2QR",
      img: Link2QR,
      link: "https://link-2-qr.web.app",
      sourceCode : "https://github.com/Padmakumar18/QR/tree/Dev"
    },
    {
      title: "Web Application",
      name: "Tic Tac Teo",
      img: TicTacTeo,
      link: "https://tic-tac-teo-ten.vercel.app",
      sourceCode : "https://github.com/Padmakumar18/TIC-TAC-TEO-Web-app"
    },
    {
      title: "Web Application",
      name: "To Do List",
      img: ToDoList,
      link: "https://todo-ease.web.app",
      sourceCode : "https://github.com/Padmakumar18/To-do/tree/main/to-do"
    },
    {
      title: "Chrome Extension",
      name: "YT Bookmark",
      img: YT,
      link: "https://github.com/Padmakumar18/YT-Bookmark",
      sourceCode : "https://github.com/Padmakumar18/YT-Bookmark"
    },
    {
      title: "Chrome Extension",
      name: "TO-Do List",
      img: ToDo,
      link: "https://github.com/Padmakumar18/To-Do-list-chrome-extension",
      sourceCode : "https://github.com/Padmakumar18/To-Do-list-chrome-extension"
    },
    {
      title: "Chrome Extension",
      name: "Dictionary-Extension",
      img: DictionaryExtension,
      link: "https://github.com/Padmakumar18/Dictionary-Extension",
      sourceCode : "https://github.com/Padmakumar18/Dictionary-Extension"
    },
    {
      title: "Console Application",
      name: "Employee-Management",
      img: Github,
      link: "https://github.com/Padmakumar18/Employee-Management",
      sourceCode : "https://github.com/Padmakumar18/Employee-Management"
    },
    {
      title: "Console Application",
      name: "Email Application",
      img: Github,
      link: "https://github.com/Padmakumar18/EmailApp",
      sourceCode : "https://github.com/Padmakumar18/EmailApp"
    }
  ];

  return (
    <div className="">
      <p className="font-bold text-2xl mb-10 flex items-center justify-center">
        PROJECTS
      </p>
      <div className="slider" >
        {projects.map((project, index) => (
          <div key={index} className="projectDiv text-center p-4 rounded-lg shadow-lg">
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
              <button className=" text-white rounded sourceCode">
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                  Source code
                </a>
              </button>
              <button className=" text-white rounded tapToView">
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
    </div>
  );
};

export default Projects;