import React from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Projects from "./Projects";
import Skills from "./Skills";
import Expereince from "./Expereince";
import Background from "./Background";
import Contact from "./Contact";
import Profile from "./Profile";

const NavBar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50">
      <ul className="flex justify-center space-x-6">
        <li><button onClick={() => scrollToSection("home")}>Home</button></li>
        <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
        <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <Background />
      <div className="main w-screen mt-16">
        <section id="home">
          <Profile />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <Expereince />
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;