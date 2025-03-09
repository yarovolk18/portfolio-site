"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  textSize?: string; // Tailwind text size class (e.g., "text-6xl")
  speed?: number; // Speed in milliseconds (lower = faster)
}

export default function Typewriter({ text, textSize = "text-6xl", speed = 100 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed); // Customizable speed

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.h1
      className={`${textSize} font-bold text-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.h1>
  );
}
