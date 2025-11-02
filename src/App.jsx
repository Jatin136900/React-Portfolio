import { useState } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Tech from "./Tech";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative min-h-screen text-white  overflow-hidden">
        {/* Glass Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1a] via-[#151730] to-[#0a0b1a] z-0" />
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 z-0" />

        {/* Main Content */}
        <div className="relative z-10">
          <Intro />
          <Projects />
          <Tech />
        </div>
      </div>
    </>
  );
}

export default App;
