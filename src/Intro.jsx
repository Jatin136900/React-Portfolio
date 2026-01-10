import React, { useState, useEffect, useRef } from "react";
import video from "./images/vedio.mp4";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  const headingRef = useRef();

  const heading = 'Jatin Verma'
  const letters = heading.split("")


  useGSAP(() => {
    setTimeout(() => {
      gsap.to('.home', { duration: 1, opacity: 1, ease: 'power1.inOut' })
      const spans = Array.from(headingRef.current.children);




      const odd = spans.filter((_, index) => index % 2 === 0);
      const even = spans.filter((_, index) => index % 2 !== 0);

      gsap.fromTo(odd,
        { y: '-100%', opacity: 0, },
        { y: 0, duration: 1, opacity: 1, stagger: 0.1, ease: 'power1.inOut' }
      )
      gsap.fromTo(even,
        { y: 100, opacity: 0, },
        { y: 0, duration: 1, opacity: 1, stagger: 0.1, ease: 'power1.inOut' }
      )
    }, 4500)
  })


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(false);
      else setIsVisible(true);

      if (window.scrollY > 30) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 🌈 Glass Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-none transition-all duration-500 ${isScrolled ? "bg-white/10 shadow-md" : "bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-8 md:px-14 lg:px-20 py-4 sm:py-6">
          <h1 className="text-lg font-[Jatin] tracking-[10px] sm:text-xl md:text-2xl font-semibold  text-white hover:text-indigo-400 transition-all duration-300">
            Jatin
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-300 text-sm lg:text-base font-[Jatin1]">
            <li>
              <a href="#home" className="hover:text-white transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-all duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <div
            className="md:hidden text-gray-300 hover:text-white cursor-pointer text-2xl sm:text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* ✅ Full Screen Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed font-[Jatin] inset-0 z-50 bg-gradient-to-b from-[#0b0c1b] via-[#111326] to-[#0a0b14] backdrop-blur-2xl 
          flex flex-col justify-center items-center space-y-8 sm:space-y-10 
          text-xl sm:text-2xl text-gray-200 transition-all duration-500 ease-in-out`}
        >
          <button
            className="absolute top-6 right-8 text-3xl sm:text-4xl text-gray-400 hover:text-white transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {[
            { name: "About", href: "#home" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 font-medium"
              style={{
                animation: "fadeSlide 0.5s ease forwards",
                animationDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* ✅ Hero Section — hidden when menuOpen = true */}
      {!menuOpen && (
        <>
          <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-4 sm:px-8 md:px-16 lg:px-24 pt-28 sm:pt-32 md:pt-40 z-10 text-center md:text-left">
            <div className="md:w-1/2 space-y-5 sm:space-y-6 md:space-y-8">
          



              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cb8ff] to-[#6e8aff]">
                  Jatin Verma
                </span>
              </h1> */}





              {/* <h1

                ref={headingRef}
                className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  tracking-tight leading-none bg-clip-text bg-gradient-to-r from-[#9cb8ff] to-[#6e8aff]  whitespace-nowrap overflow-clip ">
                Hello, I'm <br />
                {letters.map((letter, idx) => {
                  return <span className='inline-block' key={idx}>{letter}</span>
                })}
              </h1> */}


              <h1
                ref={headingRef}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight leading-none whitespace-nowrap overflow-clip"
              >
                Hello, I'm <br />

                {letters.map((letter, idx) => {
                  return (
                    <span
                      key={idx}
                      className="
          inline-block
          font-[Jatin]
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#9cb8ff]
          to-[#6e8aff]
          tracking-[0.05em]
        "
                    >
                      {letter}
                    </span>
                  );
                })}
              </h1>





              <p className="text-gray-400  text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                MERN Stack Developer and UI/UX Designer skilled in building scalable, responsive web applications using MongoDB, Express.js, React.js, and Node.js, with a strong focus on modern, intuitive user interfaces.
              </p>

              <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 pt-2">
                <a href="/Jatin Resume.pdf" download="Jatin_Verma_CV.pdf">
                  <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm sm:text-base shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">
                    Download CV
                  </button>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-0">
              <div className="p-2 sm:p-3 rounded-3xl w-[90%] sm:w-[80%] md:w-[85%] lg:w-[75%]">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`fixed bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            <div className="text-center text-gray-400 text-xs sm:text-sm">
              <p className="tracking-wide font-[Jatin4]">Scroll to discover</p>
              <div className="flex justify-center mt-1 sm:mt-2">
                <span className="text-indigo-400 animate-scrollArrow text-base sm:text-lg">
                  ▼
                </span>
              </div>
            </div>
          </div>
        </>
      )}

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
