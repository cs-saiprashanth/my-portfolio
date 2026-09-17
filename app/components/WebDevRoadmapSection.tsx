"use client";

import React from "react";
import {
  Code2,
  Laptop,
  Server,
  Sparkles,
  Layers,
  Terminal,
  Database,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";

// Tech Brand SVG & Glass Badge Components
const HtmlLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(227,79,38,0.7)]" viewBox="0 0 24 24" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const CssLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(21,114,182,0.7)]" viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const JsLogo = () => (
  <div className="w-5 h-5 rounded-md bg-[#F7DF1E] text-black font-extrabold text-[10px] flex items-end justify-end p-0.5 leading-none shadow-[0_0_8px_rgba(247,223,30,0.6)] font-mono">
    JS
  </div>
);

const ReactLogo = () => (
  <svg className="w-5 h-5 animate-spin-slow drop-shadow-[0_0_10px_rgba(97,218,251,0.8)]" viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="7" fill="#61DAFB" />
  </svg>
);

const VueLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(65,184,131,0.7)]" viewBox="0 0 24 24">
    <path fill="#41B883" d="M24 1.61H14.06L12 5.16L9.94 1.61H0L12 22.39L24 1.61Z" />
    <path fill="#34495E" d="M18.37 1.61H14.06L12 5.16L9.94 1.61H5.63L12 12.63L18.37 1.61Z" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const NodeLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(51,153,51,0.7)]" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.25l8.25 4.71v9.48L12 21.15l-8.25-4.71V6.96L12 2.25z" />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(55,118,171,0.7)]" viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.9 0c-5.7 0-5.3 2.5-5.3 2.5v2.6h5.4v.8H4.5S2 5.6 2 11.3c0 5.7 2.2 5.5 2.2 5.5h1.3v-2.6c0-3 2.6-2.8 2.6-2.8h5.3s2.5.1 2.5-2.4V3.8S16.4 0 11.9 0zm-2.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
    <path fill="#FFD43B" d="M12.1 24c5.7 0 5.3-2.5 5.3-2.5v-2.6h-5.4v-.8h7.5s2.5.3 2.5-5.4c0-5.7-2.2-5.5-2.2-5.5h-1.3v2.6c0 3-2.6 2.8-2.6 2.8h-5.3s-2.5-.1-2.5 2.4v5.2s-.5 3.8 4 3.8zm2.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
  </svg>
);

const MongoLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(77,179,61,0.7)]" viewBox="0 0 24 24" fill="#4DB33D">
    <path d="M12 0C11.4 3.3 9.4 6 7.4 8.7 5.4 11.4 3.8 14.5 4 18c.2 3.6 2.3 5.5 5.2 6 0 0 1-2.2 1.3-3.2.4-1.3.8-2.6.9-4 0 0 .5 2.6.9 4 .3 1 1.3 3.2 1.3 3.2 2.9-.5 5-2.4 5.2-6 .2-3.5-1.4-6.6-3.4-9.3C14.6 6 12.6 3.3 12 0z" />
  </svg>
);

const PostgreLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(51,103,145,0.7)]" viewBox="0 0 24 24" fill="#336791">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 4.5c.83 0 1.5.67 1.5 1.5S11.83 7.5 11 7.5 9.5 6.83 9.5 6s.67-1.5 1.5-1.5zm6 13.5h-2v-3.5c0-.83-.67-1.5-1.5-1.5S12 13.67 12 14.5V18h-2v-3.5c0-.83-.67-1.5-1.5-1.5S7 13.67 7 14.5V18H5v-7.5c0-1.93 1.57-3.5 3.5-3.5 1.25 0 2.36.66 3 1.65.64-.99 1.75-1.65 3-1.65 1.93 0 3.5 1.57 3.5 3.5V18z" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(26,188,254,0.7)]" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

export const WebDevRoadmapSection: React.FC = () => {
  return (
    <section
      id="roadmap-section"
      className="relative z-20 w-full bg-[#04050a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 select-none border-t border-zinc-900 overflow-hidden"
    >
      {/* Volumetric Radial Glows */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Title & Developer Narrative Box (Matching Reference Image Left Column) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            
            {/* Main Section Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>FULL STACK & UI ARCHITECTURE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight leading-[0.95] text-white">
                WEB <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  DEVELOPMENT
                </span>
              </h2>

              <div className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md">
                THE COMPLETE ROADMAP
              </div>

              <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-bold pt-1">
                <span className="text-purple-400">LEARN.</span>{" "}
                <span className="text-cyan-400">BUILD.</span>{" "}
                <span className="text-amber-400">GROW.</span>
              </p>
            </div>

            {/* Developer Illustration Card Box (Matching Reference Image) */}
            <div className="relative rounded-3xl border border-cyan-500/30 bg-[#090b14]/90 p-6 shadow-[0_0_35px_rgba(6,182,212,0.15)] backdrop-blur-2xl space-y-5 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
              
              {/* Dev Icon & Avatar */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="relative p-3.5 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-cyan-300">
                  <Code2 className="w-8 h-8" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-sans tracking-tight">
                    Sai Prashanth
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    Product Designer & Full Stack Engineer
                  </p>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed font-normal">
                Web Development is the art & discipline of building powerful, responsive web applications that solve real-world problems and deliver human impact.
              </p>

              {/* Mottos / Highlights */}
              <div className="space-y-1.5 pt-1 text-xs font-mono font-semibold">
                <p className="text-purple-400 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-purple-400" /> Keep Learning.
                </p>
                <p className="text-cyan-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Keep Building.
                </p>
                <p className="text-amber-400 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" /> Keep Growing.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-cyan-300 font-bold">START TODAY</span>
                <span className="text-zinc-500">BUILD TOMORROW ↗</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Tree Mindmap Diagram (Matching Reference Image Tree Layout) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            <div className="relative rounded-3xl border border-white/15 bg-[#080912]/95 p-5 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-10">
              
              {/* ==================== BRANCH 1: FRONT END ==================== */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                
                {/* Main Node Badge: FRONT END */}
                <div className="shrink-0 z-10 px-5 py-3 rounded-2xl border-2 border-cyan-400/80 bg-gradient-to-r from-cyan-950 via-[#0a1526] to-blue-950 text-cyan-300 font-mono font-bold text-sm sm:text-base tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-cyan-400" />
                  <span>FRONT END</span>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 text-[10px] font-mono">UI/UX</span>
                </div>

                {/* Sub-Tree Nodes */}
                <div className="flex-1 w-full pl-4 sm:pl-6 border-l-2 border-cyan-500/40 space-y-6 relative before:absolute before:left-0 before:top-4 before:w-4 before:h-0.5 before:bg-cyan-500/40">
                  
                  {/* Category 1: Languages */}
                  <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-cyan-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold shadow-md">
                      <span>Language</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <HtmlLogo />
                        <span>HTML5</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <CssLogo />
                        <span>CSS3</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <JsLogo />
                        <span>JavaScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Frameworks */}
                  <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-cyan-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold shadow-md">
                      <span>Framework</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <ReactLogo />
                        <span>React.js / Next.js</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <VueLogo />
                        <span>Vue.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Styling & Design Tools */}
                  <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-cyan-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold shadow-md">
                      <span>Design & Styling</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <TailwindLogo />
                        <span>Tailwind CSS</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-[#0d1222] text-xs font-mono text-white shadow-md hover:border-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer">
                        <FigmaLogo />
                        <span>Figma Studio</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="h-px w-full bg-gradient-to-r from-cyan-500/20 via-purple-500/40 to-blue-500/20" />

              {/* ==================== BRANCH 2: BACK END & AI ==================== */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                
                {/* Main Node Badge: BACK END */}
                <div className="shrink-0 z-10 px-5 py-3 rounded-2xl border-2 border-purple-400/80 bg-gradient-to-r from-purple-950 via-[#190a26] to-indigo-950 text-purple-300 font-mono font-bold text-sm sm:text-base tracking-wider shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>BACK END</span>
                  <span className="px-1.5 py-0.5 rounded bg-purple-400/20 text-purple-300 text-[10px] font-mono">API & AI</span>
                </div>

                {/* Sub-Tree Nodes */}
                <div className="flex-1 w-full pl-4 sm:pl-6 border-l-2 border-purple-500/40 space-y-6 relative before:absolute before:left-0 before:top-4 before:w-4 before:h-0.5 before:bg-purple-500/40">
                  
                  {/* Category 1: Server Languages */}
                  <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-purple-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold shadow-md">
                      <span>Server Runtime</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <NodeLogo />
                        <span>Node.js / Express</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <PythonLogo />
                        <span>Python</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Databases */}
                  <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-purple-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold shadow-md">
                      <Database className="w-3.5 h-3.5 text-purple-400" />
                      <span>Database</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <MongoLogo />
                        <span>MongoDB</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <PostgreLogo />
                        <span>PostgreSQL</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: APIs & AI Tools */}
                  <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-2 before:absolute before:left-0 before:top-3 before:w-4 before:h-0.5 before:bg-purple-500/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold shadow-md">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      <span>API & AI Coding</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <span className="px-1.5 py-0.5 bg-amber-400/20 text-amber-300 text-[10px] font-bold rounded">API</span>
                        <span>REST & GraphQL</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/30 bg-[#120d22] text-xs font-mono text-white shadow-md hover:border-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span>AI Vibe Coding</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDevRoadmapSection;
