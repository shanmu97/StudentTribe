import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Add hamburger and close icons

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname !== "/") return null;

  const menuItems = [
    { id: "St School", name: "St. School", sectionId: "school" },
    { id: "ST App", name: "St. App", sectionId: "app" },
    { id: "ST Opportunities", name: "St. Opportunities", sectionId: "opportunities" },
    { id: "ST Events", name: "St. Events", sectionId: "events" },
    { id: "ST Beast", name: "St. Beast", sectionId: "beast" },
    { id: "ST Care", name: "St. Care", sectionId: "care" },
    { id: "Who We Are", name: "WHO WE ARE", sectionId: "about" },
  ];

  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close menu after click (on mobile)
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-6 flex justify-center z-50">
      {/* Desktop Menu */}
      <div
        className="hidden md:flex items-center px-4 py-2 rounded-full shadow-xl space-x-4"
        style={{
          background: `linear-gradient(to right, #000 0%, #1a1a1a 20%, #1a1a1a 80%, #000 100%)`,
          boxShadow: "0 0 60px 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        {menuItems.map(({ name, sectionId }) => (
          <button
            key={name}
            onClick={() => handleScroll(sectionId)}
            className="text-sm md:text-base font-medium px-4 py-2 rounded-full transition duration-300 whitespace-nowrap text-gray-300 hover:text-white hover:bg-[#2b2b2b]"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full shadow-lg text-white focus:outline-none"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        {/* Slide-out menu */}
        {isOpen && (
          <div className="bg-black absolute left-0 top-16 rounded-xl shadow-xl p-4 space-y-2 z-50 w-48">
            {menuItems.map(({ name, sectionId }) => (
              <button
                key={name}
                onClick={() => handleScroll(sectionId)}
                className="block w-full text-left text-sm font-medium px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#2b2b2b]"
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
