import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 2,
    role: "Java Tutor",
    company: "Grapinz Technology & Institution",
    duration: "Sep 2024 - Feb 2025",
    description:
      "Mentored 50+ students in OOP, data structures, and algorithms, improving their academic performance.",
  },
  {
    id: 1,
    role: "Web Application Developer",
    company: "Right Angle Solutions",
    duration: "Dec 2023 - Jul 2024",
    description:
      "Worked on web development projects, focusing on Svelte-based applications.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">
        EXPERIENCE
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative w-full md:w-1/2 ${
              index % 2 === 0
                ? "md:pr-8 md:text-right md:self-start"
                : "md:pl-8 md:text-left md:self-end"
            } mb-8 flex flex-col md:flex-row md:items-center`}
          >
            <div className="w-5 h-5 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-3"></div>
            <motion.div
              className="bg-white p-4 shadow-md rounded-lg w-full md:w-auto mt-6 hover:shadow-xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-lg text-gray-600 font-semibold">
                {exp.role}
              </h2>
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
