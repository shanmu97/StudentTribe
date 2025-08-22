import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import stlogo from "../assets/Whitelogo.png";

const IntroPage = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState("students");

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = () => navigate("/brands");

  const primaryText = `Be a part of India's largest and fastest growing student community.`;
  const secondaryText = `From classrooms to career moves. We're the tribe that's with you all the way.`;

  return (
    <div
      id="main-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial gradient background layer */}
      <div className="mainscreen-gradient-bg absolute" />

      {/* Content Layer */}
      <motion.div
        className="z-50 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 2, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={stlogo}
            alt="logo"
            className="h-16 mx-auto mb-6 drop-shadow-lg"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center bg-[#2d000a] rounded-full shadow-xl w-[400px] max-w-[90vw] h-[50px] mx-auto mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("main-section")}
            onMouseEnter={() => setHoveredButton("students")}
            className={`flex-1 text-lg font-bold rounded-full transition-all ${
              hoveredButton === "students"
                ? "bg-gradient-to-r from-[#b8001f] to-[#7a0015] text-white cursor-pointer"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Students
          </button>
          <button
            onClick={handleNavigate}
            onMouseEnter={() => setHoveredButton("brands")}
            className={`flex-1 text-lg font-bold rounded-full transition-all ${
              hoveredButton === "brands"
                ? "bg-gradient-to-r from-[#b8001f] to-[#7a0015] text-white cursor-pointer"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Brands
          </button>
        </motion.div>

        {/* Primary Text */}
        <motion.h1
          className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {primaryText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Secondary Text */}
        <motion.p
          className="text-white text-lg sm:text-xl mt-10 drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.04,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {secondaryText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default IntroPage;
