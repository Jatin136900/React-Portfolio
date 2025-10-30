import React, { useState, useEffect } from "react";
import video from "./images/vedio.mp4";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false); // hide when scrolls down
      } else {
        setIsVisible(true); // show again when near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen  flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <h1 className="text-xl font-semibold">Jatin</h1>
        <ul className="flex space-x-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">home</li>
          <li className="hover:text-white cursor-pointer">about</li>
          <li className="hover:text-white cursor-pointer">projects</li>
          <li className="hover:text-white cursor-pointer">services</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-12 md:px-20 flex-grow">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex space-x-3 mb-4">
            <span className="px-3 py-1 bg-[#15172a] rounded-full text-sm border border-[#2a2c45]">React.js</span>
            <span className="px-3 py-1 bg-[#15172a] rounded-full text-sm border border-[#2a2c45]">TailwindCSS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cb8ff] to-[#6e8aff]">
              Jatin Verma
            </span>
          </h1>

          <p className="text-gray-400 max-w-md">
            I’m a Frontend Developer and UI/UX Designer who creates clean, responsive, and user-friendly web experiences.
            I blend design and functionality using HTML, CSS, JavaScript, and React.
          </p>

          <div className="flex space-x-4 pt-2">
            <a href="resume.pdf" download>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Video */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-[80%] md:w-[70%] rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="text-center text-gray-400 text-sm">
          <p className="tracking-wide">Scroll to discover</p>
          <div className="flex justify-center mt-2">
            <span className="text-1xl text-indigo-500 animate-scrollArrow">▼</span>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes scrollArrow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.7;
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
