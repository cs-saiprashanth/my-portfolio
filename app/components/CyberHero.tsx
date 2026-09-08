"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SecurityFaceReveal from "./SecurityFaceReveal";
import SmokeEffect from "./SmokeEffect";
import ProjectCarousel from "./ProjectCarousel";
import TechMarquee from "./TechMarquee";
import DraggableInstagramCanvas from "./DraggableInstagramCanvas";
import FinalContactSection from "./FinalContactSection";
import SkillsSection from "./SkillsSection";
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Home,
  Link2,
  Mail,
  UserRound,
} from "lucide-react";
import { getAssetPath } from "../lib/asset";

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
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Ambient Radial Glows */}

      {/* Glass Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 bg-[#050508]/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <a
            href="#hero-section"
            aria-label="Go to home"
            title="Home"
            className="group relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.08] transition duration-300 hover:scale-105 hover:border-blue-300/70 hover:bg-blue-500/15 hover:shadow-[0_0_24px_rgba(96,165,250,0.45)]"
          >
            <Image
              src={getAssetPath("/public/sai-logo.png")}
              alt="SaiPrashanth logo"
              width={80}
              height={48}
              className="h-10 w-auto object-contain opacity-90 transition duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-125"
            />
          </a>
          <span className="font-signature text-3xl font-bold leading-none tracking-wide text-zinc-100 sm:text-4xl">
            SaiPrashanth
          </span>
          {/* <span className="text-zinc-600">/</span> */}
          {/* <span className="text-blue-400 text-xs bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
            CYBER_FX
          </span> */}
        </div>

        <nav
          aria-label="Primary navigation"
          className="mt-5 flex items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/[0.08] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:absolute sm:right-6 sm:top-5 sm:mt-0 sm:w-auto"
        >
          {[
            { label: "Home", href: "#hero-section", icon: Home },
            { label: "About", href: "#about-banner-section", icon: UserRound },
            { label: "Projects", href: "#project-carousel-section", icon: BriefcaseBusiness },
            { label: "Resume", href: "#contact-section", icon: FileText },
            { label: "Contact", href: "#contact-section", icon: Mail },
            { label: "LinkedIn", href: "https://linkedin.com/in/saiprashanth-chavan", icon: Link2, external: true },
            { label: "Behance", href: "https://behance.net", icon: null, external: true },
            { label: "GitHub", href: "https://github.com/cs-saiprashanth", icon: Code2, external: true },
          ].map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="group flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-white/15 hover:text-white"
            >
              {Icon ? <Icon size={20} aria-hidden="true" /> : <span className="text-sm font-bold leading-none">Bē</span>}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Hero Section */}
      <main id="hero-section" className="hero relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6 pt-32 pb-0">

        {/* Top Titles */}
        <div className="hero-content relative z-10 text-center mb-8 space-y-2 max-w-4xl animate-in fade-in duration-700">
            <p className="text-lg sm:text-xl font-mono text-blue-400/90 font-semibold tracking-widest uppercase">
            Hi, I&apos;m
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
        <div className="hero-image relative z-10 w-full flex justify-center mb-0">
          <SecurityFaceReveal
            maskedImgSrc={getAssetPath("/masked.png.png")}
            revealedImgSrc={getAssetPath("/revealed.png")}
            gridColor="white"
            revealRadius={120}
            autoScanSpeed={1}
          />
        </div>

        <SmokeEffect />
      </main>

      <SkillsSection />

      {/* Infinite Continuous UI/UX Technical Names Marquee Bar (Below 1st Section) */}
      <TechMarquee />

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
