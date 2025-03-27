import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full navbar text-white shadow-lg z-50"
    >
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
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
            <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
            <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
          </ul>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden text-center py-4">
          <ul className="flex flex-col space-y-4">
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
            <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
            <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

const FadeUpSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10"
    >
      {children}
    </motion.section>
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
            <FadeUpSection id="home">
              <Profile />
            </FadeUpSection>

            <FadeUpSection id="skills">
              <Skills />
            </FadeUpSection>

            <FadeUpSection id="experience">
              <Experience />
            </FadeUpSection>

            <FadeUpSection id="projects">
              <Projects />
            </FadeUpSection>
            
            <FadeUpSection id="contact">
            </FadeUpSection>
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;