"use client";
import { motion } from "framer-motion";

export default function Waveform() {
  const barCount = 270; // Increased number of bars
  const bars = Array.from({ length: barCount }, (_, i) => ({
    delay: Math.random() * 1.5,
    height: 200//Math.random() * 100 + 150, // Random heights between 40px and 120px
  }));

  return (
    <div className="w-full flex justify-center items-center h-40 bg-black">
      <svg width="1000" height="400" viewBox="0 0 800 120">
        {bars.map((bar, i) => (
          <motion.rect
            key={i}
            x={i * 3} // Adjust spacing between bars
            y={60 - bar.height / 2} // Center bars vertically
            width="2"
            height={bar.height}
            fill="#25404A"
            animate={{
              height: [bar.height, Math.random() * 100 + 50, bar.height], // Varies the height
              y: [60 - bar.height / 2, 60 - (Math.random() * 100 + 20) / 2, 60 - bar.height / 2], // Adjusts position to match height change
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: bar.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
