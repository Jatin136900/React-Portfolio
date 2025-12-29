// import { useState, useEffect } from "react";
// import Intro from "./Intro";
// import Projects from "./Projects";
// import Tech from "./Tech";
// import Form from "./Form";
// import Footer from "./Footer";
// import First from "./First";
// import { motion, AnimatePresence } from "framer-motion";
// import "./App.css";
// import Lenis from 'lenis'
// import Fav from './images/Fav.png'

// function App() {
//   const [showHello, setShowHello] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowHello(false);
//     }, 4500);
//     return () => clearTimeout(timer);
//   }, []);


//   // Initialize Lenis

//   useEffect(() => {
//     const lenis = new Lenis();

//     // Use requestAnimationFrame to continuously update the scroll
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, [])


//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {showHello ? (
//           <motion.div
//             key="intro"
//             initial={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -400 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="fixed inset-0 z-50"
//           >
//             <First />
//           </motion.div>
//         ) : null}
//       </AnimatePresence>

//       {/* --- Main Portfolio --- */}
//       <motion.div
//         key="main"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: showHello ? 1.2 : 0 }}
//         className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0a0b14] via-[#101626] to-[#1e1b4b]"
//       >
//         {/* --- Animated Glowing Background Orbs --- */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] top-[-200px] left-[-200px] animate-pulse"></div>
//           <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] bottom-[-200px] right-[-200px] animate-ping"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0f1025]/60 to-[#1a1c3d]/80 mix-blend-overlay"></div>
//         </div>

//         {/* --- Main Content with IDs for scroll --- */}
//         <div className="relative z-10">
//           <section id="home">
//             <Intro />
//           </section>

//           <section id="about">
//             <Tech />
//           </section>

//           <section id="projects">
//             <Projects />
//           </section>

//           <section id="contact">
//             <Form />
//           </section>

//           <Footer />
//         </div>
//       </motion.div>
//     </>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Tech from "./Tech";
import Form from "./Form";
import Footer from "./Footer";
import First from "./First";
import SmokeyCursor from "./SmokeyCursor"; // 🔥 ADDED
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Lenis from "lenis";
import Fav from "./images/Fav.png";

function App() {
  const [showHello, setShowHello] = useState(true);

  // --- Intro Screen Timer ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // --- Initialize Lenis Smooth Scroll ---
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* 🔥 GLOBAL SMOKEY CURSOR */}
      <SmokeyCursor />

      {/* --- INTRO SCREEN --- */}
      <AnimatePresence mode="wait">
        {showHello && (
          <motion.div
            key="intro"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -400 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <First />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN PORTFOLIO --- */}
      <motion.div
        key="main"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: showHello ? 1.2 : 0 }}
        className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0a0b14] via-[#101626] to-[#1e1b4b]"
      >
        {/* --- Animated Glowing Background Orbs --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] top-[-200px] left-[-200px] animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] bottom-[-200px] right-[-200px] animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0f1025]/60 to-[#1a1c3d]/80 mix-blend-overlay"></div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10">
          <section id="home">
            <Intro />
          </section>

          <section id="about">
            <Tech />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Form />
          </section>

          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
