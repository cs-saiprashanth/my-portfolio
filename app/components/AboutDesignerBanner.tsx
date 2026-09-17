"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { getAssetPath } from "../lib/asset";

interface CardItem {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  radialGradient: string;
  btnBg: string;
  btnTextColor: string;
}

const STACK_CARDS: CardItem[] = [
  {
    id: 1,
    tag: "developer",
    title: "PRODUCT DESIGN & CODE",
    subtitle: "SAI PRASHANTH —",
    image: getAssetPath("/images/developer_portrait_code.jpg"),
    radialGradient: "transparent",
    btnBg: "",
    btnTextColor: "",
  },
  {
    id: 2,
    tag: "marathon",
    title: "CLOUDANGLES 5K RUN",
    subtitle: "TEAM MARATHON —",
    image: getAssetPath("/images/cloudangles_team_marathon.jpg"),
    radialGradient: "transparent",
    btnBg: "",
    btnTextColor: "",
  },
  {
    id: 3,
    tag: "christmas",
    title: "3.9 YRS AT CLOUDANGLES",
    subtitle: "CHRISTMAS CELEBRATION —",
    image: getAssetPath("/images/cloudangles_team_christmas.jpg"),
    radialGradient: "transparent",
    btnBg: "",
    btnTextColor: "",
  },
  {
    id: 4,
    tag: "diwali",
    title: "CLOUDANGLES OFFICE EVENT",
    subtitle: "FESTIVE CELEBRATION —",
    image: getAssetPath("/images/cloudangles_team_diwali.jpg"),
    radialGradient: "transparent",
    btnBg: "",
    btnTextColor: "",
  },
  {
    id: 5,
    tag: "teamwork",
    title: "STAKEHOLDERS & DEVS",
    subtitle: "CROSS-TEAM SYNERGY —",
    image: getAssetPath("/images/cloudangles_team_festive.jpg"),
    radialGradient: "transparent",
    btnBg: "",
    btnTextColor: "",
  },
];

export const AboutDesignerBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with Developer Portrait & Cloudangles photos
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto rotate deck every 3 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STACK_CARDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STACK_CARDS.length) % STACK_CARDS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STACK_CARDS.length);
  };

  return (
    <section
      id="about-banner-section"
      className="relative z-20 w-full bg-[#050508] py-16 sm:py-24 select-none border-t border-zinc-900/80 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

          {/* LEFT COLUMN: About Me Narrative */}
          <div className="w-full lg:w-6/12 xl:w-7/12 text-left space-y-6">
            {/* About Me H2 Heading */}
            <div className="flex items-center gap-3 pb-1">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                  About Me
                </span>
              </h2>
              <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_14px_#6366f1] animate-pulse" />
            </div>

            {/* Body Copy Paragraphs */}
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl">
              <p>
                Over the past <strong className="text-white font-semibold">3.9 years at Cloudangles</strong>, I’ve had the opportunity to work on multiple digital products across different domains and business requirements.
              </p>

              <p>
                My role goes beyond creating visually appealing interfaces. I focus on understanding the problem, users, business goals, and technical constraints before translating them into practical product experiences.
              </p>

              <p>
                I’ve worked closely with product managers, developers, QA teams, and stakeholders throughout the product lifecycle — helping transform ideas and requirements into intuitive, scalable, and production-ready experiences.
              </p>

              <p>
                My approach combines <strong className="text-white font-medium">UX thinking + visual design + product thinking + emerging AI technologies</strong> to create experiences that are useful, accessible, and engaging.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Fanned Photo Card Carousel Deck */}
          <div className="w-full lg:w-6/12 xl:w-6/12 flex flex-col items-center justify-center relative min-h-[410px] sm:min-h-[460px]">

            {/* Fanned Cards Canvas Stack Area */}
            <div className="relative w-full h-[310px] sm:h-[360px] flex items-center justify-center">
              {STACK_CARDS.map((card, index) => {
                let diff = index - activeIndex;
                const total = STACK_CARDS.length;
                if (diff > Math.floor(total / 2)) diff -= total;
                if (diff < -Math.floor(total / 2)) diff += total;

                const isActive = diff === 0;
                const absDiff = Math.abs(diff);

                // Fan transform angles matching reference screenshot
                const rotateDeg = diff * 15;
                const translateX = diff * 66;
                const translateY = absDiff * 12;
                const scale = 1 - absDiff * 0.08;
                const zIndex = 30 - absDiff * 5;
                const opacity = isActive ? 1 : Math.max(0.35, 1 - absDiff * 0.25);

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      transform: `perspective(1000px) translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                    className={`absolute w-[275px] sm:w-[335px] h-[250px] sm:h-[300px] rounded-3xl border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500 ease-out select-none bg-[#12121a] group`}
                  >
                    {/* Clean Natural Photo */}
                    <Image
                      src={card.image}
                      alt="Portfolio Photo"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Navigation Control Bar (Counter + Prev / Next Arrow Buttons) */}
            <div className="relative z-30 mt-6 flex items-center justify-center gap-3">
              {/* Counter Pill */}
              <div className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white font-mono text-xs font-semibold">
                {activeIndex + 1}/{STACK_CARDS.length}
              </div>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md hover:scale-105"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md hover:scale-105"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md hover:scale-105"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDesignerBanner;
