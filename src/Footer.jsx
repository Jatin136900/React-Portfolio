import React, { useEffect } from "react";
import {
  FaBehance,
  FaFigma,
  FaDribbble,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const icons = [
    {
      href: "https://www.behance.net/jatinverma60",
      icon: <FaBehance />,
      label: "Behance",
      color: "#1769ff",
      delay: 1000,
    },
    {
      href: "https://www.figma.com/files/team/1463424178580327170/recents-and-sharing?fuid=1463424176698015546",
      icon: <FaFigma />,
      label: "Figma",
      color: "#a259ff",
      delay: 1500,
    },
    {
      href: "https://dribbble.com/i_jatin_verma",
      icon: <FaDribbble />,
      label: "Dribbble",
      color: "#ea4c89",
      delay: 2000,
    },
    {
      href: "https://github.com/Jatin136900",
      icon: <FaGithub />,
      label: "GitHub",
      color: "#fff",
      delay: 2500,
    },
    {
      href: "https://www.linkedin.com/in/jatin-verma-9b5537342/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "#0A66C2",
      delay: 3000,
    },
  ];

  return (
    <footer className="text-center text-gray-400 font-poppins relative py-10 px-4 sm:px-6 md:px-10">
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 mt-10 flex-wrap">
        {icons.map((item, index) => (
          <a
            key={index}
            data-aos="fade-down"
            data-aos-duration={item.delay}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{
              "--hover-color": item.color,
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
              bg-white/5 text-gray-300 text-[20px] sm:text-[22px]
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform 
              hover:scale-125 hover:rotate-[8deg] hover:text-[var(--hover-color)]
              hover:shadow-[0_0_25px_var(--hover-color)] hover:bg-white/10"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-6 px-2">
        © 2025{" "}
        <span className="text-white font-medium">Jatin Verma</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
