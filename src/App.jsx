import { useState } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Tech from "./Tech";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0a0b14] via-[#101626] to-[#1e1b4b]">
        
        {/* --- Animated Glowing Background Orbs --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Top Left Glow */}
          <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] top-[-200px] left-[-200px] animate-pulse"></div>
          {/* Bottom Right Glow */}
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] bottom-[-200px] right-[-200px] animate-ping"></div>
          {/* Optional Middle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0f1025]/60 to-[#1a1c3d]/80 mix-blend-overlay"></div>
        </div>

        {/* --- Main Content --- */}
        <div className="relative z-10">
          <Intro />
          <Projects />
          <Tech />
          <Form />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
