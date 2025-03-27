import React, { useEffect, useState } from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience"; 
import Background from "./Background";
import Contact from "./Contact";
import Profile from "./Profile";
import Loading from "./Loading";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
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
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("experience")}>Experience</button>
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
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("experience")}>Experience</button>
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
  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadPage(false);
    }, 2000);
  }, []);

  return (
    <>
      {loadPage ? (
        
        <div className="Loading">
          <Loading />
        </div>
      ) : (
        <>
          <NavBar />
          <Background />
          <div className="main w-screen mt-16 px-4 sm:px-6 lg:px-8">
            <section id="home">
              <Profile />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;