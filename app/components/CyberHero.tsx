"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SecurityFaceReveal from "./SecurityFaceReveal";
import SmokeEffect from "./SmokeEffect";
import DraggableInstagramCanvas from "./DraggableInstagramCanvas";
import FinalContactSection from "./FinalContactSection";
import AboutDesignerBanner from "./AboutDesignerBanner";
import SkillsSection from "./SkillsSection";
import {
  BriefcaseBusiness,
  Code2,
  Component,
  FileText,
  Home,
  Layers,
  Layout,
  Link2,
  Mail,
  Palette,
  Sparkles,
  UserRound,
} from "lucide-react";
import { getAssetPath } from "../lib/asset";

// Design Tool Glass Icons
const FigmaIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

const AdobeXdIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-[#470137] text-[#FF61F6] font-black text-xs flex items-center justify-center border border-[#FF61F6]/60 shadow-[0_0_12px_rgba(255,97,246,0.4)]">
    Xd
  </div>
);

const IllustratorIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-[#330000] text-[#FF9A00] font-black text-xs flex items-center justify-center border border-[#FF9A00]/60 shadow-[0_0_12px_rgba(255,154,0,0.4)]">
    Ai
  </div>
);

const PhotoshopIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-[#001E36] text-[#31A8FF] font-black text-xs flex items-center justify-center border border-[#31A8FF]/60 shadow-[0_0_12px_rgba(49,168,255,0.4)]">
    Ps
  </div>
);

const CanvaIcon = () => (
  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] text-white font-black text-xs flex items-center justify-center shadow-[0_0_12px_rgba(0,196,204,0.5)]">
    C
  </div>
);

const AutoCadIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-[#2D0000] text-[#E51937] font-black text-xs flex items-center justify-center border border-[#E51937]/60 shadow-[0_0_12px_rgba(229,25,55,0.4)]">
    A
  </div>
);

// Coding Languages Glass Icons
const HtmlIcon = () => (
  <svg className="w-7 h-7 drop-shadow-[0_0_10px_rgba(227,79,38,0.6)]" viewBox="0 0 24 24" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const CssIcon = () => (
  <svg className="w-7 h-7 drop-shadow-[0_0_10px_rgba(21,114,182,0.6)]" viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const JsIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-[#F7DF1E] text-black font-black text-xs flex items-end justify-end p-0.5 leading-none shadow-[0_0_12px_rgba(247,223,30,0.5)]">
    JS
  </div>
);

const ReactIcon = () => (
  <svg className="w-7 h-7 animate-spin-slow drop-shadow-[0_0_12px_rgba(97,218,251,0.7)]" viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="7" fill="#61DAFB" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-7 h-7 drop-shadow-[0_0_10px_rgba(51,153,51,0.6)]" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.25l8.25 4.71v9.48L12 21.15l-8.25-4.71V6.96L12 2.25z" />
  </svg>
);

const VibeCodingIcon = () => (
  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 text-white flex items-center justify-center shadow-[0_0_14px_rgba(56,189,248,0.7)] animate-pulse">
    <Sparkles className="w-4 h-4 text-white" />
  </div>
);

const DESIGN_TOOLS_ICONS = [
  { name: "Figma", icon: <FigmaIcon />, hoverGlow: "hover:border-fuchsia-400/80 hover:bg-fuchsia-500/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]" },
  { name: "Adobe XD", icon: <AdobeXdIcon />, hoverGlow: "hover:border-[#FF61F6]/80 hover:bg-[#FF61F6]/20 hover:shadow-[0_0_30px_rgba(255,97,246,0.5)]" },
  { name: "Adobe Illustrator", icon: <IllustratorIcon />, hoverGlow: "hover:border-[#FF9A00]/80 hover:bg-[#FF9A00]/20 hover:shadow-[0_0_30px_rgba(255,154,0,0.5)]" },
  { name: "Adobe Photoshop", icon: <PhotoshopIcon />, hoverGlow: "hover:border-[#31A8FF]/80 hover:bg-[#31A8FF]/20 hover:shadow-[0_0_30px_rgba(49,168,255,0.5)]" },
  { name: "Canva", icon: <CanvaIcon />, hoverGlow: "hover:border-[#00C4CC]/80 hover:bg-[#00C4CC]/20 hover:shadow-[0_0_30px_rgba(0,196,204,0.5)]" },
  { name: "AutoCAD", icon: <AutoCadIcon />, hoverGlow: "hover:border-[#E51937]/80 hover:bg-[#E51937]/20 hover:shadow-[0_0_30px_rgba(229,25,55,0.5)]" },
];

const CODING_LANGUAGES_ICONS = [
  { name: "HTML5", icon: <HtmlIcon />, hoverGlow: "hover:border-[#E34F26]/80 hover:bg-[#E34F26]/20 hover:shadow-[0_0_30px_rgba(227,79,38,0.5)]" },
  { name: "CSS3 / Tailwind", icon: <CssIcon />, hoverGlow: "hover:border-[#1572B6]/80 hover:bg-[#1572B6]/20 hover:shadow-[0_0_30px_rgba(21,114,182,0.5)]" },
  { name: "JavaScript", icon: <JsIcon />, hoverGlow: "hover:border-[#F7DF1E]/80 hover:bg-[#F7DF1E]/20 hover:shadow-[0_0_30px_rgba(247,223,30,0.5)]" },
  { name: "React / Next.js", icon: <ReactIcon />, hoverGlow: "hover:border-[#61DAFB]/80 hover:bg-[#61DAFB]/20 hover:shadow-[0_0_30px_rgba(97,218,251,0.6)]" },
  { name: "Node.js", icon: <NodeIcon />, hoverGlow: "hover:border-[#339933]/80 hover:bg-[#339933]/20 hover:shadow-[0_0_30px_rgba(51,153,51,0.5)]" },
  { name: "AI Vibe Coding", icon: <VibeCodingIcon />, hoverGlow: "hover:border-cyan-400/80 hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]" },
];

const AUTO_ROLES = [
  "UI/UX Product Designer",
  "Front end developer",
  "AI Integration & UX Strategy",
  "Team Leadership",
];

export const CyberHero: React.FC = () => {
  const [name] = useState("Sai Prashanth");
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

      {/* Glass Header Navigation (Centered Logo + Navigation Dock Combined) */}
      <header className="fixed inset-x-0 top-5 z-50 flex items-center justify-center pointer-events-none px-4">
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        >
          {/* SP Metallic Monogram Logo integrated seamlessly into centered dock */}
          <a
            href="#hero-section"
            className="flex items-center group transition-transform duration-300 hover:scale-105 pr-2 mr-1 border-r border-white/15"
            title="Sai Prashanth — Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:border-cyan-400 transition-colors bg-black">
              <img
                src={getAssetPath("/images/sp_logo.png")}
                alt="Sai Prashanth SP Monogram Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

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
              className="group flex h-9 w-9 items-center justify-center rounded-xl text-white/90 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              {Icon ? <Icon size={20} aria-hidden="true" /> : <span className="text-sm font-bold leading-none font-sans text-white">Bē</span>}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Hero Section */}
      <main id="hero-section" className="hero relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6 pt-32 pb-0">

        {/* Top Titles (Matching Reference Screenshot Layout) */}
        <div className="hero-content relative z-10 text-center mb-8 space-y-2 max-w-5xl animate-in fade-in duration-700">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1">
            <span className="font-normal text-white/90">Hi, I&apos;m</span>
            <span className="font-bold text-white">{name}</span>
          </h1>

          {/* Animated Auto-Changing Role Display (Slightly smaller for better hierarchy) */}
          <div className="h-12 flex items-center justify-center pt-1">
            <p
              className={`text-xl sm:text-3xl md:text-4xl font-semibold text-[#1aa0ff] drop-shadow-[0_0_20px_rgba(26,160,255,0.45)] transition-all duration-300 transform ${isFading ? "opacity-0 scale-95 translate-y-1" : "opacity-100 scale-100 translate-y-0"
                }`}
            >
              {currentRoleDisplay}
            </p>
          </div>
        </div>

        {/* Security Face Reveal Interactive Canvas Component (Full original height & width preserved) */}
        <div className="hero-image">
          <SecurityFaceReveal
            revealedImgSrc={getAssetPath("/revealed.png")}
            revealRadius={140}
          />
        </div>


        {/* Floating Asymmetrical Cards Overlay */}
        <div className="absolute inset-x-0 top-0 bottom-0 max-w-7xl mx-auto pointer-events-none z-30 hidden lg:block">

          {/* Left Side Floating Card: Visual UI/UX Design Screen */}
          <div className="absolute left-[6.5%] xl:left-[8.5%] top-[50%] xl:top-[48%] w-[275px] xl:w-[305px] pointer-events-auto transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out">
            <div className="relative rounded-2xl border border-fuchsia-500/35 bg-[#070714]/95 p-4 shadow-[0_0_40px_rgba(217,70,239,0.25)] backdrop-blur-xl hover:border-fuchsia-400/70 hover:shadow-[0_0_50px_rgba(217,70,239,0.4)] group overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

              <div className="relative flex items-center justify-between border-b border-fuchsia-500/20 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/30">
                    <Palette className="w-4 h-4 text-fuchsia-400" />
                  </div>
                  <span className="font-mono text-xs xl:text-sm font-semibold text-white tracking-wide">UI/UX Design</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-fuchsia-950/90 text-fuchsia-300 border border-fuchsia-500/40 text-[10px] font-mono flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-fuchsia-400" /> Figma Studio
                </span>
              </div>

              <div className="relative rounded-xl border border-white/10 bg-[#0c0d1e] p-3 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400"></span>
                    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                    <Layout className="w-2.5 h-2.5 text-purple-400" /> Mobile & Web UI
                  </span>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-fuchsia-900/40 via-purple-900/30 to-blue-900/40 p-2.5 border border-fuchsia-500/30 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-20 rounded bg-white/80 animate-pulse" />
                    <div className="h-1.5 w-14 rounded bg-fuchsia-300/50" />
                  </div>
                  <button className="px-2.5 py-1 rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-[10px] font-semibold shadow-[0_0_10px_rgba(217,70,239,0.5)] flex items-center gap-1">
                    <Component className="w-2.5 h-2.5" /> CTA Button
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                  <div className="rounded-md bg-white/5 p-1.5 border border-white/10 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-purple-400" />
                    <span className="text-zinc-300 font-mono">8pt Layout Grid</span>
                  </div>
                  <div className="rounded-md bg-white/5 p-1.5 border border-white/10 flex items-center gap-1.5">
                    <span className="font-sans font-bold text-fuchsia-300 text-xs">Aa</span>
                    <span className="text-zinc-300 font-mono">Typography</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-1.5" title="UI System Color Palette">
                  <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                  <span className="h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_8px_#8b5cf6]"></span>
                  <span className="h-3 w-3 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#ec4899]"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]"></span>
                </div>
                <span className="text-[10px] font-mono text-fuchsia-300 flex items-center gap-1">
                  ✓ 100% Pixel Perfect
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Floating Card: Coding Card */}
          <div className="absolute right-[6.5%] xl:right-[8.5%] top-[62%] xl:top-[60%] w-[270px] xl:w-[300px] pointer-events-auto transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out">
            <div className="relative rounded-2xl border border-blue-500/35 bg-[#060813]/90 p-4 xl:p-4.5 shadow-[0_0_35px_rgba(59,130,246,0.22)] backdrop-blur-xl hover:border-cyan-400/70 hover:shadow-[0_0_45px_rgba(56,189,248,0.4)] group">
              <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs xl:text-sm font-semibold text-white tracking-wide">Code</span>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse"></span>
              </div>

              <div className="font-mono text-[11px] leading-relaxed space-y-0.5 select-none text-left">
                <div>
                  <span className="text-[#c084fc]">const</span>{" "}
                  <span className="text-[#38bdf8]">developer</span>{" "}
                  <span className="text-zinc-300">= &#123;</span>
                </div>
                <div className="pl-3">
                  <span className="text-purple-200">name</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-[#fb923c]">&quot;{name}&quot;</span>
                  <span className="text-zinc-400">,</span>
                </div>
                <div className="pl-3">
                  <span className="text-purple-200">skills</span>
                  <span className="text-zinc-400">: [</span>
                  <span className="text-[#fb923c]">&quot;HTML&quot;</span>
                  <span className="text-zinc-400">, </span>
                  <span className="text-[#fb923c]">&quot;CSS&quot;</span>
                  <span className="text-zinc-400">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#fb923c]">&quot;JavaScript&quot;</span>
                  <span className="text-zinc-400">, </span>
                  <span className="text-[#fb923c]">&quot;React&quot;</span>
                  <span className="text-zinc-400">],</span>
                </div>
                <div className="pl-3">
                  <span className="text-purple-200">passion</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-[#fb923c]">&quot;Building things</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#fb923c]">for the web&quot;</span>
                </div>
                <div>
                  <span className="text-zinc-300">&#125;</span>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  Build Passed
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono tracking-tight">
                  &lt;/&gt; Frontend Dev
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile View Cards & Glass Icons */}
        <div className="relative z-30 lg:hidden w-full max-w-xl mx-auto px-4 mt-6 mb-6 flex flex-col gap-3 justify-center">
          {/* Mobile Visual Design Card */}
          <div className="w-full rounded-xl border border-fuchsia-500/30 bg-[#060813]/90 p-3 shadow-lg backdrop-blur-xl space-y-1.5">
            <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-1">
              <div className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-fuchsia-400" />
                <span className="font-mono text-xs font-semibold text-white">UI/UX Design</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]"></span>
            </div>
            <div className="rounded bg-gradient-to-r from-fuchsia-900/40 to-blue-900/40 p-1.5 border border-fuchsia-500/20 flex items-center justify-between text-[10px]">
              <span className="text-zinc-200 font-mono">Figma UI Mock</span>
              <span className="px-1.5 py-0.5 rounded bg-fuchsia-500 text-white font-semibold text-[9px]">CTA Button</span>
            </div>
          </div>
          {/* Mobile Code Card */}
          <div className="w-full rounded-xl border border-blue-500/30 bg-[#060813]/90 p-3 shadow-lg backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-1.5 mb-1.5">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-xs font-semibold text-white">Code</span>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
            </div>
            <div className="font-mono text-[10px] leading-tight space-y-0.5 text-left text-zinc-300">
              <p><span className="text-[#c084fc]">const</span> <span className="text-[#38bdf8]">developer</span> = &#123;</p>
              <p className="pl-2"><span className="text-purple-200">name</span>: <span className="text-[#fb923c]">&quot;{name}&quot;</span>,</p>
              <p className="pl-2"><span className="text-purple-200">skills</span>: [<span className="text-[#fb923c]">&quot;React&quot;</span>, <span className="text-[#fb923c]">&quot;JS&quot;</span>]</p>
              <p>&#125;</p>
            </div>
          </div>
          {/* Mobile Glass Tool Icons Row */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full p-2 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-lg w-full">
            <span className="text-[10px] font-mono font-bold text-fuchsia-400 px-1 shrink-0">Tools:</span>
            {DESIGN_TOOLS_ICONS.map((tool) => (
              <div key={tool.name} className="p-1.5 rounded-xl bg-white/10 border border-white/15 shrink-0" title={tool.name}>
                {tool.icon}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto max-w-full p-2 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-lg w-full">
            <span className="text-[10px] font-mono font-bold text-cyan-400 px-1 shrink-0">Code:</span>
            {CODING_LANGUAGES_ICONS.map((tool) => (
              <div key={tool.name} className="p-1.5 rounded-xl bg-white/10 border border-white/15 shrink-0" title={tool.name}>
                {tool.icon}
              </div>
            ))}
          </div>
        </div>

        <SmokeEffect />
      </main>

      {/* 2nd Section: About Me & Key Statistics */}
      <AboutDesignerBanner />

      <SkillsSection />

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
