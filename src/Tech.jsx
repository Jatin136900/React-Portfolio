import React from "react";
import ht from "./images/html.svg";
import icon2 from "./images/css.svg";
import icon3 from "./images/js.svg";
import icon4 from "./images/react.png";
import icon5 from "./images/vite.png";
import icon6 from "./images/tail.png";
import icon7 from "./images/boot.svg";
import icon8 from "./images/vs.svg";
import icon9 from "./images/vercal.png";
import icon10 from "./images/github.png";
import icon11 from "./images/figma.png";

export default function Tech() {
  const icons = [
    { src: ht, color: "#e34c26" },
    { src: icon2, color: "#2965f1" },
    { src: icon3, color: "#f7df1e" },
    { src: icon6, color: "#38bdf8" },
    { src: icon4, color: "#61dafb" },
    { src: icon5, color: "#a855f7" },
    { src: icon7, color: "#7952b3" },
    { src: icon8, color: "#007acc" },
    { src: icon9, color: "#000000" },
    { src: icon10, color: "#ffffff" },
    { src: icon11, color: "#a259ff" },
  ];

  return (
    <div className="relative py-20  flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 bg-transparent">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 text-center mb-8 sm:mb-12 animate-fadeInUp leading-snug">
        Powering your favorite <br className="hidden sm:block" /> frameworks and tools
      </h1>

      {/* Icons grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12 p-4 sm:p-6 md:p-8 max-w-[1100px] w-full mx-auto justify-items-center animate-fadeInUp">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-3 animate-float"
          >
            <img
              src={icon.src}
              alt={`tech-${i}`}
              className="w-[55px] h-[75px] sm:w-[60px] sm:h-[85px] md:w-[65px] md:h-[90px] object-contain transition-all duration-500"
              style={{
                filter: `drop-shadow(0 0 10px ${icon.color})`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = `drop-shadow(0 0 25px ${icon.color})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = `drop-shadow(0 0 10px ${icon.color})`)
              }
            />
          </div>
        ))}
      </div>

      {/* Removed gradient overlay and any background effects */}

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
