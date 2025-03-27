import React, { useEffect, useState } from "react";
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">PK</span>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("expereince")}>
                Expereince
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
          </ul>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden text-center py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("expereince")}>
                Expereince
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <Background />
      <div className="main w-screen mt-16 px-4 sm:px-6 lg:px-8">
        <section id="home"></section>
        <Profile />

        <section id="skills"></section>
        <Skills />

        <section id="expereince"></section>
        <Expereince />

        <section id="projects"></section>
        <Projects />

        <section id="contact"></section>
        <Contact />
      </div>
    </>
  );
}

export default App;
