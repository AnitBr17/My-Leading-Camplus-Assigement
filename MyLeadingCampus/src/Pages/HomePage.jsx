// src/pages/HomePage.jsx
import React from "react";

import bg from "../assets/bg.png"; // if bg is in public/, use '/bg.png' in style instead of importing
import Navbar from "../Components/Navbar";
import HereSection from "../Components/HereSection";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Navbar sits on top of hero */}
      <Navbar/>

      {/* HERO SECTION */}
      <header
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        }}
        
      >
        {/* overlay to improve contrast over the bg image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/8 to-black/40"></div>

        {/* Hero content — use padding top so navbar doesn't cover it */}
        <div className="relative z-20 pt-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <HereSection/>
          </div>
        </div>
      </header>

      {/* Main content below the hero */}
      
    </div>
  );
};

export default HomePage;
