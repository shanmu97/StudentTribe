import React, { useState, useRef, useEffect } from 'react';
import stlogo from "../assets/Red logo.png";
import centerImg from "../assets/BrandsSection/center.svg";
import leftmostUpper1st from "../assets/BrandsSection/left1st1.jpg";
import leftmost2nd from "../assets/BrandsSection/left2nd.jpg";
import rightUpper1st from "../assets/BrandsSection/rightUpper1st.jpg";
import rightmost2nd from "../assets/BrandsSection/right2nd.jpg";
import leftLower from "../assets/BrandsSection/leftLower1st.jpg";
import meeting from "../assets/BrandsSection/meeting.jpg";

export default function StudentSchool() {
  const [showButtons, setShowButtons] = useState(false);
  const [hoveredButton, setHoveredButton] = useState('students');
  const hideButtonsTimeoutRef = useRef(null);

  const handleLogoOrButtonsMouseEnter = () => {
    if (hideButtonsTimeoutRef.current) {
      clearTimeout(hideButtonsTimeoutRef.current);
      hideButtonsTimeoutRef.current = null;
    }
    setShowButtons(true);
  };

  const handleLogoOrButtonsMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    const currentTarget = e.currentTarget;
    if (!relatedTarget || !currentTarget.contains(relatedTarget)) {
      hideButtonsTimeoutRef.current = setTimeout(() => {
        setShowButtons(false);
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      if (hideButtonsTimeoutRef.current) {
        clearTimeout(hideButtonsTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#fff6f6] to-[#FFF8F8] overflow-hidden"
      id="school"
    >
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-4">
        <div className="mb-6 md:mb-8 text-center">
          <div
            className="group inline-block cursor-pointer relative"
            onMouseEnter={handleLogoOrButtonsMouseEnter}
            onMouseLeave={handleLogoOrButtonsMouseLeave}
          >
            <img
              src={stlogo}
              alt="Student Tribe Logo"
              className="h-8 md:h-12 lg:h-16 w-auto drop-shadow-lg mb-4"
            />

            <div
              className={`absolute left-1/2 -translate-x-1/2 w-[400px] h-[50px] md:w-[400px] max-w-[90vw] flex bg-[#2d000a] rounded-full shadow-2xl font-bold z-20 transition-all duration-300 ${
                showButtons ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
              }`}
              style={{
                top: 'calc(100% + 8px)',
              }}
              onMouseEnter={handleLogoOrButtonsMouseEnter}
              onMouseLeave={handleLogoOrButtonsMouseLeave}
            >
              <button
                className={`flex-1 text-center rounded-full transition-all duration-300 border-none cursor-pointer text-sm md:text-lg hover:scale-105 ${
                  hoveredButton === 'students'
                    ? 'bg-gradient-to-r from-[#b8001f] to-[#7a0015] text-white'
                    : 'bg-transparent text-gray-300 hover:text-white'
                }`}
                onClick={() => scrollToSection('main-section')}
                onMouseEnter={() => setHoveredButton('students')}
                onMouseLeave={() => setHoveredButton('')}
              >
                Students
              </button>
              <button
                className={`flex-1 text-center rounded-full transition-all duration-300 border-none cursor-pointer text-sm md:text-lg hover:scale-105 ${
                  hoveredButton === 'brands'
                    ? 'bg-gradient-to-r from-[#b8001f] to-[#7a0015] text-white'
                    : 'bg-transparent text-gray-300 hover:text-white'
                }`}
                onClick={() => scrollToSection('brands-section')}
                onMouseEnter={() => setHoveredButton('brands')}
                onMouseLeave={() => setHoveredButton('')}
              >
                Brands
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-[#2d1c1c] mb-3 md:mb-6 leading-tight px-2 md:px-4">
            Discover career paths you never know!
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-[#2d1c1c] mb-0 leading-relaxed px-2 md:px-4">
            Workshops that don't bore. Webinars with no-zoom fatigue.<br className="hidden md:block" />
            Courses that actually upskill. Dive into learning with vibe.
          </p>
        </div>

        {/* Mobile Grid */}
        <div className="block md:hidden px-4">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[leftmostUpper1st, leftmost2nd, leftLower, rightmost2nd, rightUpper1st, meeting, centerImg, leftmostUpper1st].map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`Grid Img ${i + 1}`}
                  className="w-full h-36 object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block px-4">
          <div className="grid grid-cols-5 gap-8 mb-8">
            <div className="flex flex-col gap-6">
              <img
                src={leftmostUpper1st}
                alt="Top Left"
                className="w-full h-64 lg:h-80 mt-10 object-center rounded-3xl shadow-xl"
              />
              <img
                src={leftLower}
                alt="Bottom Left"
                className="w-full h-20 lg:h-28 object-cover rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <img
                src={leftmost2nd}
                alt="Left Center"
                className="w-full h-72 lg:h-5/6 object-cover rounded-3xl shadow-xl mt-18"
              />
            </div>

            <div>
              <img
                src={centerImg}
                alt="Center"
                className="w-full h-64 lg:h-76 object-cover rounded-3xl shadow-xl mt-28"
              />
            </div>

            <div>
              <img
                src={rightmost2nd}
                alt="Right Center"
                className="w-full h-72 lg:h-5/6 object-cover rounded-3xl shadow-xl mt-18"
              />
            </div>

            <div className="flex flex-col gap-6">
              <img
                src={rightUpper1st}
                alt="Top Right"
                className="w-full h-64 lg:h-80 object-cover rounded-3xl shadow-xl mt-10"
              />
              <img
                src={meeting}
                alt="Bottom Right"
                className="w-full h-20 lg:h-28 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center relative">
          <button className="relative -top-2 sm:-top-8 lg:-top-16 px-6 md:px-10 py-3 md:py-3 rounded-full bg-gradient-to-r from-[#b8001f] to-[#7a0015] text-white font-bold text-base md:text-lg shadow-xl hover:scale-105 transition-all duration-300">
            Explore Now →
          </button>
        </div>
      </div>
    </div>
  );
}
