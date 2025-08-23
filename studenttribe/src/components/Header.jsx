// src/components/Header.jsx

import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Only show Header on homepage
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
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-6 flex justify-center z-50">
      <div
        className="flex items-center px-4 py-2 rounded-full shadow-xl space-x-4 overflow-x-auto"
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
    </div>
  );
};

export default Header;
