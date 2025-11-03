import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function First() {
  const greetings = ["Hello", "Ola", "Namaste", "こんにちは"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const typeText = () => {
      if (charIndex < greetings[index].length) {
        const nextChar = greetings[index][charIndex];
        if (nextChar !== undefined) {
          setDisplayText((prev) => prev + nextChar);
        }
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText("");
          setIndex((prev) => (prev + 1) % greetings.length);
        }, 600);
      }
    };

    typingInterval = setInterval(typeText, 120);
    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0d0f] text-gray-300 overflow-hidden relative">
      {/* subtle background glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-indigo-500/10 blur-[150px] rounded-full"></div>

      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 tracking-wide"
      >
        • {displayText}
        <span className="border-r-4 border-indigo-400 animate-pulse ml-1"></span>
      </motion.h1>
    </div>
  );
}
