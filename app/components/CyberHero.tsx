"use client";

import React, { useState, useEffect } from "react";
import SecurityFaceReveal from "./SecurityFaceReveal";
import InteractiveMeshBackground from "./InteractiveMeshBackground";
import GlobeGallery from "./GlobeGallery";
import ProjectCarousel from "./ProjectCarousel";
import TechMarquee from "./TechMarquee";
import DraggableInstagramCanvas from "./DraggableInstagramCanvas";
import FinalContactSection from "./FinalContactSection";
import { Shield } from "lucide-react";

const AUTO_ROLES = [
  "UI/UX Product Designer",
  "AI Integration",
  "Design Strategy",
  "Team Leadership",
];

export const CyberHero: React.FC = () => {
  const [name] = useState("SaiPrashanth ChavanSharaff");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % AUTO_ROLES.length);
        setIsFading(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const currentRoleDisplay = AUTO_ROLES[roleIndex];

  return (
    <div className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Interactive Cyber Mesh Background (Dynamic Mouse Warp Movement & Floating Skill Badges) */}
      <InteractiveMeshBackground />

      {/* Ambient Radial Glows */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono text-sm tracking-wider font-semibold">
          <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
            <Shield className="w-4 h-4" />
          </div>
          <span className="text-zinc-100 font-bold">PORTFOLIO</span>
          <span className="text-zinc-600">/</span>
          <span className="text-blue-400 text-xs bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
            CYBER_FX
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Security Mode</span>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main id="hero-section" className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-6 py-12">
        {/* Top Titles */}
        <div className="text-center mb-8 space-y-2 max-w-4xl animate-in fade-in duration-700">
          <p className="text-lg sm:text-xl font-mono text-blue-400/90 font-semibold tracking-widest uppercase">
            Hi, I'm
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-50 font-sans whitespace-nowrap">
            {name}
          </h1>

          {/* Animated Auto-Changing Role Display */}
          <div className="h-14 flex items-center justify-center pt-1">
            <p
              className={`text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 transform ${isFading ? "opacity-0 scale-95 translate-y-1" : "opacity-100 scale-100 translate-y-0"
                }`}
            >
              {currentRoleDisplay}
            </p>
          </div>
        </div>

        {/* Security Face Reveal Interactive Canvas Component */}
        <div className="w-full flex justify-center mb-10">
          <SecurityFaceReveal
            maskedImgSrc="/masked.jpg"
            revealedImgSrc="/revealed.jpg"
            gridColor="white"
            revealRadius={160}
            autoScanSpeed={1}
          />
        </div>
      </main>

      {/* Infinite Continuous UI/UX Technical Names Marquee Bar (Below 1st Section) */}
      <TechMarquee />

      {/* Next Section: Interactive 3D Auto-Rotating Portfolio Globe Gallery */}
      <GlobeGallery />

      {/* 3rd Section: Horizontal Infinite Scrolling Project Carousel */}
      <ProjectCarousel />

      {/* 4th Section: Interactive Draggable Instagram Canvas Gallery */}
      <DraggableInstagramCanvas />

      {/* 5th Section: Final CTA Available For Work & Contact Footer (Matching Reference) */}
      <FinalContactSection />

      {/* Clean Bottom Footer Spacing */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-center font-mono text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} {name}</span>
      </footer>
    </div>
  );
};

export default CyberHero;
