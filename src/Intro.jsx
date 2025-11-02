import React, { useState, useEffect } from "react";
import video from "./images/vedio.mp4";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(false);
      else setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 sm:px-10 md:px-20 py-6 z-10">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Jatin</h1>
        <ul className="hidden md:flex space-x-10 text-gray-400">
          {["home", "about", "projects", "services"].map((item) => (
            <li key={item} className="hover:text-white cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-gray-400 hover:text-white cursor-pointer">
          ☰
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-6 sm:px-10 md:px-24 pt-10 md:pt-0 z-10 text-center md:text-left">

        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6 sm:space-y-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            {["React.js", "TailwindCSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm border border-[#2a2c45] rounded-full bg-[#15172a]/50 backdrop-blur-md text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cb8ff] to-[#6e8aff]">
              Jatin Verma
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            An experienced Frontend Developer and UI/UX Designer with a passion
            for crafting clean, interactive, and visually stunning web
            experiences using React, TailwindCSS, and modern tools.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <a href="resume.pdf" download>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm sm:text-base">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="p-3 rounded-3xl w-[85%] sm:w-[80%] md:w-[90%]">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          <p className="tracking-wide">Scroll to discover</p>
          <div className="flex justify-center mt-2">
            <span className="text-indigo-400 animate-scrollArrow">▼</span>
          </div>
        </div>
      </div>

      {/* Arrow Animation */}
      <style jsx>{`
        @keyframes scrollArrow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(10px);
            opacity: 1;
          }
        }
        .animate-scrollArrow {
          animation: scrollArrow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
