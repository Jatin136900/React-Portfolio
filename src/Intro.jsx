import React, { useState, useEffect } from "react";
import video from "./images/vedio.mp4";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(false);
      else setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0b14] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 sm:px-10 md:px-20 py-6 z-30 relative">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Jatin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-400">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <div
          className="md:hidden text-gray-300 hover:text-white cursor-pointer text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>

        {/* Full Screen Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#0a0b14]/95 backdrop-blur-lg flex flex-col justify-center items-center space-y-10 text-2xl text-gray-300 transform transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <button
            className="absolute top-6 right-8 text-4xl text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <span
              key={item}
              onClick={() => setMenuOpen(false)}
              className="hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110"
              style={{
                animation: "fadeSlide 0.5s ease forwards",
                animationDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              {item}
            </span>
          ))}
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

          {/* ✅ Working Download Button */}
          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <a href="/resume.pdf" download="Jatin_Verma_CV.pdf">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm sm:text-base shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">
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

      {/* Animations */}
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

        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
