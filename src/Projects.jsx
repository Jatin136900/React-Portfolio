import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// --- Image Imports ---
import fullstack from "./images/fsl.png";
import burgerfarm from "./images/burger.png";
import tanishq from "./images/tanishq.png";
import amazon from "./images/amazon.png";
import impact from "./images/impact.png";
import marvel from "./images/marvels.png";
import atom from "./images/atom.png";
import cards from "./images/cards.png";
import netflix from "./images/netflix.png";
import pokemon from "./images/pokemon.png";
import ecom from "./images/ecom.png";
import ec from "./images/ecom2.png";
import ipl from "./images/ipl.png";
import color from "./images/color.png";
import bill from "./images/bill.png";
import quiz from "./images/quiz.png";
import change from "./images/changer.png";
import yoga from "./images/yoga.png";
import recom from "./images/recom.png";
import todo from "./images/todo.png";
import poki from "./images/poki.png";
import royse from "./images/royse.png";
import Area from "./images/area.png";
import hotel from "./images/hotel.png";
import truec from "./images/trucaller.png";
import school from "./images/school.png";
import Spotify from "./images/spotify.png";
import Port from "./images/port.png";
import backend from "./images/backend.png"
import Fight from "./images/fight.png"
import stranger from "./images/stranger.png"
import booth from "./images/booth.png"


export default function Projects() {
  const [activeTab, setActiveTab] = useState("html");
  const [visibleCards, setVisibleCards] = useState([]);

  // Scroll fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".futuristic-card");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight - 100 && !visibleCards.includes(index)) {
          setVisibleCards((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  const projects = {
    html: [
      { title: "Portfolio", img: Port, demo: "https://portfolio-sigma-sage-98.vercel.app/", desc: "Its My First Portfolio using HTML & CSS and JS " },
      { title: "Full Stack ", img: fullstack, demo: "https://full-stack-chi-sandy.vercel.app/", desc: "Portfolio website using HTML & CSS showcasing both frontend and backend expertise." },
      { title: "Burger Farm", img: burgerfarm, demo: "https://burger-farm.vercel.app/", desc: "Fully animated landing page clone using HTML & CSS." },
      { title: "Amazon Clone", img: amazon, demo: "https://amazon-five-liart.vercel.app/", desc: "Clean, grid-based layout inspired by Amazon using pure HTML & CSS." },
      { title: "Impact Website", img: impact, demo: "https://new-imapct.vercel.app/", desc: "Corporate site with a bold aesthetic using HTML & CSS." },
      { title: "Marvel Films", img: marvel, demo: "https://marvels-e3c9.vercel.app/", desc: "Dark Marvel-themed landing page built purely with HTML & CSS." },
      { title: "Animated Atom", img: atom, demo: "https://atom-orcin.vercel.app/", desc: "CSS-only animated atom structure with orbiting electrons." },
      { title: "Cards Layout", img: cards, demo: "https://card-rho-orpin.vercel.app/", desc: "Elegant responsive cards built with flexbox and CSS transitions." },
    ],
    js: [
      { title: "Netflix Clone", img: netflix, demo: "https://netflix-clone-api-two.vercel.app/", desc: "Netflix-inspired movie UI built using HTML, CSS, and JavaScript for interactivity." },
      { title: "Pokémon Data App", img: pokemon, demo: "https://pokemon-wheat-one.vercel.app/", desc: "Displays Pokémon information dynamically using a public API and JavaScript." },
      { title: "E-Commerce Website", img: ec, demo: "https://new-e-com-jade.vercel.app/", desc: "Fully functional online store with cart and filtering using JavaScript." },
      { title: "Bill Generator", img: bill, demo: "https://bill-calculater-tau.vercel.app/", desc: "Auto-calculating bill generator using JS and DOM manipulation." },
      { title: "Quiz App", img: quiz, demo: "https://quiz-game-bice-nu.vercel.app/", desc: "Interactive quiz app with dynamic score and question shuffle." },
      { title: "Theme Changer", img: change, demo: "https://spotify-sxzt.vercel.app/", desc: "Toggle dark and light themes with smooth transitions and localStorage." },
      { title: "Color Picker", img: color, demo: "https://color-code-changer.vercel.app/", desc: "Copy hex and RGB color values dynamically using JavaScript." },
      { title: "IPL Dashboard", img: ipl, demo: "https://ipl-lac.vercel.app/", desc: "Displays IPL stats dynamically loaded through JavaScript." },
    ],
    react: [
      { title: "Yoga Website", img: yoga, demo: "https://yoga-website-react-navy.vercel.app/", desc: "Modern, peaceful yoga-themed React website." },
      { title: "React E-Commerce", img: recom, demo: "https://e-commerce-react-henna-five.vercel.app/", desc: "Dynamic product filtering and cart system using React hooks." },
      { title: "ToDo App", img: todo, demo: "https://avtar-rust.vercel.app/", desc: "Smooth task manager app using React useState & localStorage." },
      { title: "Pokemon Kingdom", img: poki, demo: "https://pokemon-react-six-bay.vercel.app/", desc: "Pokémon data fetched dynamically with Framer animations." },
      { title: "Rolls-Royce", img: royse, demo: "https://rolls-royce-coral.vercel.app/", desc: "Luxury-inspired website showcasing modern UI in React." },
      { title: "Stranger Things", img: stranger, demo: "https://stranger-things-umber-tau.vercel.app/", desc: "Built an interactive hover effect inspired by Stranger Things!" },
      { title: "Photo-Booth", img: booth, demo: "https://photobooth-one-lyart.vercel.app/", desc: "Built a Photo Booth using React! It includes camera filters, captures 3 photos with a single click, and allows users to download their photos instantly. " },
      
    ],
    tailwind: [
      { title: "Area Portfolio", img: Area, demo: "https://new-area.vercel.app/", desc: "Sleek Tailwind-based personal portfolio." },
      { title: "Vrindavan Hotel", img: hotel, demo: "https://vrindavan-183c.vercel.app/", desc: "Tailwind-powered serene hotel homepage." },
    ],
    bootstrap: [
      { title: "Tanishq Jewellery", img: tanishq, demo: "https://new-tanishq.vercel.app/", desc: "Elegant jewelry site reflecting Tanishq's brand luxury." },
      { title: "Truecaller UI", img: truec, demo: "https://truecaller-kappa.vercel.app/", desc: "Bootstrap-based Truecaller clone with responsive layout." },
      { title: "School Website", img: school, demo: "https://newbootstrap-ck3o.vercel.app/", desc: "Academic portal layout using Bootstrap grid system." },
      { title: "Spotify Clone", img: Spotify, demo: "https://spotify-delta-ruby.vercel.app/", desc: "Dark and sleek Spotify interface built with Bootstrap." },
    ],
    "Backend Project": [
      { title: "Ecommerce Websit", img: backend, demo: "https://backend-project-2-uiaf.onrender.com/", desc: "It's a fully Working Website made with Node.js and React.Js " },
      { title: "Pokemon Fight", img: Fight, demo: "https://pokemon-fight-backend-9hgh.onrender.com/", desc: "This is my Pokémon Fight project developed with the MERN Stack, offering engaging battle mechanics and a dynamic UI. " },

    ],


  };

  const tabList = ["html", "js", "react", "tailwind", "bootstrap", "Backend Project"];

  return (
    <section id="projects" className="text-white min-h-screen px-4 sm:px-8 py-14">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
        My <span className="text-blue-400">Projects</span>
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 backdrop-blur-md px-4 py-3 rounded-full">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 sm:px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${activeTab === tab
              ? "bg-blue-600/90 shadow-[0_0_15px_rgba(37,99,235,0.7)] text-white scale-105"
              : "bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white"
              }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="cards-container"
        >
          {projects[activeTab].map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={visibleCards.includes(index) ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -3 }}
              className="futuristic-card group"
            >
              <div className="card-image  mb-4">
                <img src={proj.img} alt={proj.title} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{proj.desc}</p>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium hover:text-blue-300"
              >
                Live Demo ↗
              </a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
