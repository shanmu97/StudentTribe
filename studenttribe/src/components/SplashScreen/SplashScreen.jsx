import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import person1 from "../../assets/splashscreen/Rectangle 3463928.svg";
import person2 from "../../assets/splashscreen/Rectangle 3463931.svg";
import person3 from "../../assets/splashscreen/Rectangle 3463948.svg";
import person4 from "../../assets/splashscreen/Rectangle 3463957.svg";
import person5 from "../../assets/splashscreen/Rectangle 3463958.svg";
import person8 from "../../assets/splashscreen/Rectangle 3463964.svg";
import fist from "../../assets/splashscreen/Rectangle 3463918.svg";
import stlogo from "../../assets/Whitelogo.png";

const peopleImages = [
  person1,
  person5,
  person2,
  person3,
  person8,
  person1,
  person4,
  person5,
  person3,
  person8,
  person2,
  person3,
  person1,
  person4,
  person5,
  person8,
  person2,
  person3,
  person1,
  person5,
  person8,
  person3,
  person4,
  person1,
  person2,
  person5,
  person3,
  person4,
  person1,
  person2,
  person5,
  person8,
  person3,
  person4,
  person1,
  person2,
  person5,
];

const words = [
  { text: "transform", style: "top-16 left-40", vertical: true, direction: 1 },
  {
    text: "Connect",
    style: "top-[168px] right-36",
    vertical: false,
    direction: 1,
  },
  {
    text: "trust",
    style: "top-4/12 left-[180px] -translate-y-1/2",
    vertical: false,
    direction: -1,
  },
  {
    text: "create",
    style: "top-1/2 right-12 -translate-y-1/2",
    vertical: false,
    direction: 1,
  },
  {
    text: "dreams",
    style: "bottom-[40%] right-[352px]",
    vertical: true,
    direction: -1,
  },
  {
    text: "Achieve",
    style: "bottom-1/3 left-[300px]",
    vertical: true,
    direction: 1,
  },
  {
    text: "grow",
    style: "bottom-[12.5%] left-12",
    vertical: true,
    direction: -1,
  },
  {
    text: "community",
    style: "bottom-[12.5%] right-8",
    vertical: true,
    direction: 1,
  },
];

const SplashScreen = ({ fade, onTransitionComplete }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({
    fist: false,
    logo: false,
  });

  // Preload critical images
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const loadImage = (src, key) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [key]: true }));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });

    Promise.all([loadImage(fist, "fist"), loadImage(stlogo, "logo")])
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Variants for fade out transition
  const fadeOutVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (fade && imagesLoaded && onTransitionComplete) {
      // Wait for fade-out duration then call onTransitionComplete
      const timer = setTimeout(() => onTransitionComplete(), 800);
      return () => clearTimeout(timer);
    }
  }, [fade, imagesLoaded, onTransitionComplete]);

  return (
    <AnimatePresence>
      {!fade && imagesLoaded && (
        <motion.div
          className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-[#b8001f] to-[#7a0015] overflow-hidden"
          initial="visible"
          animate="visible"
          exit="hidden"
          variants={fadeOutVariants}
        >
          {/* Motivational Words */}
          {words.map(({ text, style, vertical, direction }, i) => (
            <motion.div
              key={text}
              className={`absolute font-extrabold text-[64px] leading-[71%] tracking-tight font-sans select-none ${style}`}
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.2)",
                color: "transparent",
                userSelect: "none",
              }}
              animate={
                vertical
                  ? { y: [0, direction * 20, 0] }
                  : { x: [0, direction * 30, 0] }
              }
              transition={{
                repeat: Infinity,
                duration: 3 + i * 0.3,
                ease: "easeInOut",
                repeatType: "mirror",
                delay: i * 0.2,
              }}
            >
              {text}
            </motion.div>
          ))}

          {/* Central Fist Logo with ST */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Fist Icon as background */}
            <motion.div
              className="relative w-[150vh] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Fist Image - larger */}
              <motion.img
                src={fist}
                alt="Fist Icon"
                className={`absolute md:w-[600px] lg:w-[700px] h-auto object-contain transition-opacity duration-300 ${
                  loadedImages.fist ? "opacity-100" : "opacity-0"
                }`}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />

              {/* ST Logo centered inside the fist */}
              <motion.img
                src={stlogo}
                alt="Student Tribe Logo"
                className={`w-32 md:w-36 lg:w-40 drop-shadow-lg transition-opacity duration-300 ${
                  loadedImages.logo ? "opacity-100" : "opacity-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </motion.div>
          </div>

          {/* People crowd */}
          {/* Animated People Crowd */}


          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      )}

      {/* Loading indicator while images load */}
      {!imagesLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#b8001f] to-[#7a0015] z-30">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
