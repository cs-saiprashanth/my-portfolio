"use client";

import React from "react";
import { Sparkles, Laptop, Server, Database, Globe, Cpu, Terminal } from "lucide-react";

// Tech Logos for Flow Chart Nodes
const HtmlLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(227,79,38,0.7)]" viewBox="0 0 24 24" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const CssLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(21,114,182,0.7)]" viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.05l.23-2.625H5.405l.693 7.875h8.922l-.379 4.248-2.671.723-2.672-.723-.172-1.928H6.505l.343 3.858 5.122 1.42 5.124-1.42.709-7.923H8.531z" />
  </svg>
);

const JsLogo = () => (
  <div className="w-4 h-4 rounded bg-[#F7DF1E] text-black font-extrabold text-[9px] flex items-end justify-end p-0.5 leading-none shadow-[0_0_6px_rgba(247,223,30,0.6)] font-mono">
    JS
  </div>
);

const ReactLogo = () => (
  <svg className="w-4 h-4 animate-spin-slow drop-shadow-[0_0_8px_rgba(97,218,251,0.8)]" viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="7" fill="#61DAFB" />
  </svg>
);

const VueLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(65,184,131,0.7)]" viewBox="0 0 24 24">
    <path fill="#41B883" d="M24 1.61H14.06L12 5.16L9.94 1.61H0L12 22.39L24 1.61Z" />
    <path fill="#34495E" d="M18.37 1.61H14.06L12 5.16L9.94 1.61H5.63L12 12.63L18.37 1.61Z" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const NodeLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(51,153,51,0.7)]" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.25l8.25 4.71v9.48L12 21.15l-8.25-4.71V6.96L12 2.25z" />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(55,118,171,0.7)]" viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.9 0c-5.7 0-5.3 2.5-5.3 2.5v2.6h5.4v.8H4.5S2 5.6 2 11.3c0 5.7 2.2 5.5 2.2 5.5h1.3v-2.6c0-3 2.6-2.8 2.6-2.8h5.3s2.5.1 2.5-2.4V3.8S16.4 0 11.9 0zm-2.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
    <path fill="#FFD43B" d="M12.1 24c5.7 0 5.3-2.5 5.3-2.5v-2.6h-5.4v-.8h7.5s2.5.3 2.5-5.4c0-5.7-2.2-5.5-2.2-5.5h-1.3v2.6c0 3-2.6 2.8-2.6 2.8h-5.3s-2.5-.1-2.5 2.4v5.2s-.5 3.8 4 3.8zm2.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
  </svg>
);

const MongoLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(77,179,61,0.7)]" viewBox="0 0 24 24" fill="#4DB33D">
    <path d="M12 0C11.4 3.3 9.4 6 7.4 8.7 5.4 11.4 3.8 14.5 4 18c.2 3.6 2.3 5.5 5.2 6 0 0 1-2.2 1.3-3.2.4-1.3.8-2.6.9-4 0 0 .5 2.6.9 4 .3 1 1.3 3.2 1.3 3.2 2.9-.5 5-2.4 5.2-6 .2-3.5-1.4-6.6-3.4-9.3C14.6 6 12.6 3.3 12 0z" />
  </svg>
);

const PostgreLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(51,103,145,0.7)]" viewBox="0 0 24 24" fill="#336791">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 4.5c.83 0 1.5.67 1.5 1.5S11.83 7.5 11 7.5 9.5 6.83 9.5 6s.67-1.5 1.5-1.5zm6 13.5h-2v-3.5c0-.83-.67-1.5-1.5-1.5S12 13.67 12 14.5V18h-2v-3.5c0-.83-.67-1.5-1.5-1.5S7 13.67 7 14.5V18H5v-7.5c0-1.93 1.57-3.5 3.5-3.5 1.25 0 2.36.66 3 1.65.64-.99 1.75-1.65 3-1.65 1.93 0 3.5 1.57 3.5 3.5V18z" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="w-4 h-4 drop-shadow-[0_0_6px_rgba(26,188,254,0.7)]" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

// SVG Developer Laptop Illustration (Root Node Logo)
export const DeveloperLaptopLogo: React.FC<{ className?: string }> = ({
  className = "w-56 h-56",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Volumetric Aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/15 to-amber-400/20 blur-2xl pointer-events-none animate-pulse" />

      <svg
        className="w-full h-full drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-dev-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          <linearGradient id="logo-screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#091829" />
            <stop offset="100%" stopColor="#040914" />
          </linearGradient>

          <filter id="logo-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Circle */}
        <circle cx="120" cy="120" r="95" stroke="url(#logo-dev-grad)" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.45" />

        {/* Developer Head */}
        <path
          d="M120 42 C106 42 95 53 95 67 C95 81 106 92 120 92 C134 92 145 81 145 67 C145 53 134 42 120 42 Z"
          stroke="url(#logo-dev-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logo-neon-glow)"
        />

        {/* Hair Detail */}
        <path
          d="M98 62 C96 52 104 44 116 43 C128 42 142 47 143 56 C143 56 137 50 125 50 C113 50 102 56 98 62 Z"
          fill="url(#logo-dev-grad)"
          opacity="0.9"
        />

        {/* Shoulders & Torso */}
        <path
          d="M68 135 C68 108 88 97 120 97 C152 97 172 108 172 135"
          stroke="url(#logo-dev-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#logo-neon-glow)"
        />

        {/* Laptop Screen Frame */}
        <rect
          x="58"
          y="118"
          width="124"
          height="74"
          rx="12"
          fill="url(#logo-screen-grad)"
          stroke="url(#logo-dev-grad)"
          strokeWidth="3.5"
          filter="url(#logo-neon-glow)"
        />

        {/* Laptop Base Stand */}
        <path
          d="M40 198 L200 198 C206 198 210 202 208 207 L204 214 C202 217 197 219 192 219 L48 219 C43 219 38 217 36 214 L32 207 C30 202 34 198 40 198 Z"
          fill="#060d19"
          stroke="url(#logo-dev-grad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          filter="url(#logo-neon-glow)"
        />

        {/* Glowing Code Symbol </> on Screen */}
        <g filter="url(#logo-neon-glow)">
          <path d="M 92 145 L 82 155 L 92 165" stroke="#00f3ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 116 142 L 104 168" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M 128 145 L 138 155 L 128 165" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
};

export const DeveloperIllustrationSection: React.FC = () => {
  return (
    <section
      id="dev-illustration-section"
      className="relative z-20 w-full bg-[#04050a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 select-none border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-cyan-950/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[500px] bg-purple-950/20 rounded-full blur-[180px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* FLOW CHART DIAGRAM (Root Logo Node on Left -> Branching Tech Flowchart on Right) */}
        <div className="rounded-3xl border border-cyan-500/30 bg-[#070914]/95 p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ROOT NODE: Developer Laptop Logo Box */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 text-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <div className="relative p-2 rounded-3xl bg-[#080b18] border border-cyan-400/40 shadow-[0_0_40px_rgba(6,182,212,0.25)]">
              <DeveloperLaptopLogo className="w-56 h-56 sm:w-64 sm:h-64" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>SAI PRASHANTH • DEV ENGINE</span>
              </div>
              <p className="text-xs font-mono text-zinc-400 pt-1">
                Full Stack Architecture & Design Flow
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Branching Flowchart Tree (Front-End & Back-End Nodes) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* ==================== FLOW BRANCH 1: FRONT END ==================== */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-400/60 space-y-5 before:absolute before:left-0 before:top-4 before:w-6 before:h-0.5 before:bg-cyan-400/60">
              
              {/* Branch Header Node */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-cyan-400/60 bg-gradient-to-r from-cyan-950 to-blue-950 text-cyan-300 font-mono font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>FRONT END & UI/UX</span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 text-[10px] font-mono">CLIENT</span>
              </div>

              {/* Sub-Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Node 1: Languages */}
                <div className="p-3 rounded-2xl bg-[#0c1022] border border-cyan-500/30 space-y-2 hover:border-cyan-300 hover:bg-cyan-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block">
                    1. Languages
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <HtmlLogo /> <span>HTML5</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <CssLogo /> <span>CSS3</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <JsLogo /> <span>JavaScript</span>
                    </div>
                  </div>
                </div>

                {/* Node 2: Frameworks */}
                <div className="p-3 rounded-2xl bg-[#0c1022] border border-cyan-500/30 space-y-2 hover:border-cyan-300 hover:bg-cyan-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block">
                    2. Frameworks
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <ReactLogo /> <span>React / Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <VueLogo /> <span>Vue.js</span>
                    </div>
                  </div>
                </div>

                {/* Node 3: Design & Styling */}
                <div className="p-3 rounded-2xl bg-[#0c1022] border border-cyan-500/30 space-y-2 hover:border-cyan-300 hover:bg-cyan-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block">
                    3. Styling & Tools
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <TailwindLogo /> <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <FigmaLogo /> <span>Figma Studio</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Connecting Divider Line */}
            <div className="h-px w-full bg-gradient-to-r from-cyan-500/30 via-purple-500/50 to-blue-500/30" />

            {/* ==================== FLOW BRANCH 2: BACK END & AI ==================== */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-400/60 space-y-5 before:absolute before:left-0 before:top-4 before:w-6 before:h-0.5 before:bg-purple-400/60">
              
              {/* Branch Header Node */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-purple-400/60 bg-gradient-to-r from-purple-950 to-indigo-950 text-purple-300 font-mono font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Server className="w-4 h-4 text-purple-400" />
                <span>BACK END & AI</span>
                <span className="px-1.5 py-0.5 rounded bg-purple-400/20 text-purple-300 text-[10px] font-mono">SERVER</span>
              </div>

              {/* Sub-Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Node 1: Runtime */}
                <div className="p-3 rounded-2xl bg-[#130e24] border border-purple-500/30 space-y-2 hover:border-purple-300 hover:bg-purple-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                    1. Server Runtime
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <NodeLogo /> <span>Node.js / Express</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <PythonLogo /> <span>Python</span>
                    </div>
                  </div>
                </div>

                {/* Node 2: Database */}
                <div className="p-3 rounded-2xl bg-[#130e24] border border-purple-500/30 space-y-2 hover:border-purple-300 hover:bg-purple-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                    2. Databases
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <MongoLogo /> <span>MongoDB</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <PostgreLogo /> <span>PostgreSQL</span>
                    </div>
                  </div>
                </div>

                {/* Node 3: APIs & AI */}
                <div className="p-3 rounded-2xl bg-[#130e24] border border-purple-500/30 space-y-2 hover:border-purple-300 hover:bg-purple-950/30 transition-all">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                    3. APIs & AI Coding
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" /> <span>REST & GraphQL</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> <span>AI Vibe Coding</span>
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

export default DeveloperIllustrationSection;
