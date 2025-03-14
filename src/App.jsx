import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">

        <div className="home">
          <div className="details ">
            <p className="text-base md:text-lg lg:text-xl">
              <span className="font-bold ">PADMA</span> KUMAR
            </p>
            <p className="text-sm">padmakumar23.dev@gmail.com</p>
          </div>

          <div className="picture">
            <img src="" alt="Picture" />
          </div>

        </div>

        <div className="skills">
          <p className="font-bold text-3xl">SKILLS</p>

          <div className="skillsList">
            <ul>
              <li>HTML / CSS</li>
              <li>Tailwind</li>
              {/* <li>Bootstrap</li> */}
              <li>Javascript</li>
              <br />
              <li>Java</li>
              <li>Maven</li>
              <li>Hibernate</li>
              <li>Spring</li>
              {/* <li>Spring Boot</li> */}
              <br />
              <li>MySQL</li>
              <li>Postgresql</li>
              <li>MongoDb</li>
              <br />
              <li>React</li>
              <li>Svelte</li>
              <br />
              {/* <li>Git</li> */}
              <li>Github</li>
              <li>Figma</li>
              <br />
              <li>REST Api</li>
              <li>Figma</li>
              <br />
              <li>Supabse</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        <div className="Projects">
          <p className="font-bold text-3xl">PROJECTS</p>

          <div className="projectsList">

          </div>
        </div>
        
        <div className="Contact">
          <p className="font-bold text-3xl">Tell's make a good API Call</p>

          <div className="contactList">
            <a href="" target="_balnk">Mail</a>
            <a href="" target="_balnk">LinkedIn</a>
            <a href="" target="_balnk">Reddit</a>
            <a href="" target="_balnk">Instagram</a>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
