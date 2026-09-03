"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const TECH_TERMS = [
  "Micro-interactions",
  "Rive State Machines",
  "Design-to-Code Systems",
  "Information Architecture",
  "Multi-modal AI UX",
  "Design Tokens & Systems",
  "Spatial Interface Design",
  "Heuristic Evaluation",
  "User Journey Mapping",
  "Usability Testing & Analytics",
  "Interactive Prototyping",
  "Cognitive Load Optimization",
];

// Star color palette matching the reference image (yellow, teal, orange/pink, blue)
const STAR_COLORS = [
  "text-amber-300",
  "text-emerald-400",
  "text-rose-400",
  "text-cyan-400",
  "text-purple-400",
  "text-blue-400",
];

export const TechMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicated array for seamless infinite marquee loop
  const marqueeItems = [...TECH_TERMS, ...TECH_TERMS, ...TECH_TERMS];

  useEffect(() => {
    let animId: number;
    const el = containerRef.current;
    if (!el) return;

    const scroll = () => {
      el.scrollLeft += 1.2; // Smooth right to left continuous scroll
      const thirdWidth = el.scrollWidth / 3;
      if (el.scrollLeft >= thirdWidth) {
        el.scrollLeft -= thirdWidth;
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      id="tech-marquee-section"
      className="relative z-20 w-full bg-[#050508] border-y border-zinc-800/80 py-4 overflow-hidden select-none"
    >
      {/* Edge Fading Gradient Blurs */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      {/* Marquee Scroll Container */}
      <div
        ref={containerRef}
        className="flex items-center gap-8 overflow-x-auto scrollbar-none no-scrollbar whitespace-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {marqueeItems.map((term, idx) => {
          const starColor = STAR_COLORS[idx % STAR_COLORS.length];
          return (
            <div
              key={idx}
              className="flex items-center gap-3 font-sans text-base sm:text-lg font-bold tracking-tight text-white/90 hover:text-cyan-300 transition-colors"
            >
              {/* 4-Point Star Accent Icon */}
              <span className={`${starColor} text-sm flex items-center justify-center`}>
                ✦
              </span>
              <span>{term}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
