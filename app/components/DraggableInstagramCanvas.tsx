"use client";

import React from "react";
import Image from "next/image";
import { Camera, ExternalLink, Sparkles } from "lucide-react";
import { getAssetPath } from "../lib/asset";

// Photo Reel Strip 1 (Scrolling UP)
const REEL_COLUMN_1 = [
  { id: 1, title: "Lakeview Balcony", img: "/images/reel_lakeview_balcony.jpg" },
  { id: 2, title: "Treehouse Villa Stay", img: "/images/reel_treehouse.jpg" },
  { id: 3, title: "Marathon Medal Finish", img: "/images/reel_marathon_medal.jpg" },
  { id: 4, title: "Garden Pathway Walk", img: "/images/reel_garden_stairs.jpg" },
  { id: 5, title: "Product & Code Session", img: "/images/developer_portrait_code.jpg" },
  { id: 6, title: "Marathon & Event Run", img: "/images/cloudangles_team_marathon.jpg" },
];

// Photo Reel Strip 2 (Scrolling DOWN - Opposite Direction)
const REEL_COLUMN_2 = [
  { id: 7, title: "Cafe Relaxing Vibe", img: "/images/reel_cafe_relaxing.jpg" },
  { id: 8, title: "Street Exploration", img: "/images/reel_street_scooters.jpg" },
  { id: 9, title: "Marathon Medal Victory", img: "/images/reel_marathon_medal.jpg" },
  { id: 10, title: "Biker Studio Portrait", img: "/images/revealed.png" },
  { id: 11, title: "Vintage Workshop Event", img: "/images/cloudangles_team_diwali.jpg" },
  { id: 12, title: "Team Celebration Journey", img: "/images/cloudangles_team_christmas.jpg" },
];

export const DraggableInstagramCanvas: React.FC = () => {
  // Double lists for seamless infinite looping
  const reel1Loop = [...REEL_COLUMN_1, ...REEL_COLUMN_1];
  const reel2Loop = [...REEL_COLUMN_2, ...REEL_COLUMN_2];

  return (
    <section
      id="instagram-canvas-section"
      className="relative z-10 w-full min-h-[640px] sm:min-h-[700px] bg-[#030305] select-none border-t border-zinc-900 overflow-hidden flex items-center justify-center py-12 lg:py-16"
    >
      {/* Volumetric Radial Glow Background Lights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-950/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Main Content Layout Container - Entire 3-Column Section Centered Together */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 xl:gap-12 px-4 sm:px-8">
        
        {/* ================= COLUMN 1: Developer Cutout Portrait Centered in Glow ================= */}
        <div className="flex items-center justify-center shrink-0 pointer-events-auto">
          <div className="relative group flex items-center justify-center">
            {/* Ambient Radial Backlight Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] xl:w-[500px] h-[340px] sm:h-[460px] xl:h-[500px] bg-gradient-to-tr from-cyan-500/35 via-blue-500/25 to-indigo-600/35 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative w-[280px] sm:w-[380px] xl:w-[440px] h-[360px] sm:h-[480px] xl:h-[540px] flex items-center justify-center">
              <Image
                src={getAssetPath("/images/developer_hoodie_cutout.png")}
                alt="Sai Prashanth — Developer Hoodie Cutout Portrait"
                width={480}
                height={580}
                priority
                className="h-full w-auto object-contain object-center drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2: Cursive "Connect on" + LinkedIn Title ================= */}
        <div className="text-center lg:text-left space-y-4 px-2 max-w-sm shrink-0 pointer-events-auto">
          
          <a
            href="https://linkedin.com/in/saiprashanth-chavan"
            target="_blank"
            rel="noopener noreferrer"
            className="group/linkedin block space-y-0.5 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className="font-signature text-4xl sm:text-6xl lg:text-7xl text-cyan-300 tracking-wide font-normal drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover/linkedin:text-cyan-200">
              Connect on
            </p>
            
            {/* LinkedIn Title + Official LinkedIn SVG Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <svg className="w-9 h-9 sm:w-12 sm:h-12 fill-[#0A66C2] drop-shadow-[0_0_15px_rgba(10,102,194,0.6)] shrink-0 transition-transform group-hover/linkedin:scale-110" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
              </svg>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-sans tracking-tight leading-none drop-shadow-2xl group-hover/linkedin:text-cyan-100">
                linkedin
              </h2>
            </div>
          </a>

          {/* Subtitle Narrative */}
          <p className="text-zinc-300 text-xs sm:text-sm font-sans max-w-xs mx-auto lg:mx-0 leading-relaxed pt-1">
            My digital sketchbook. A space for unfinished thoughts, UI explorations, and late-night experiments.
          </p>

          {/* Follow Me Pill Button */}
          <div className="pt-2">
            <a
              href="https://linkedin.com/in/saiprashanth-chavan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-white/20 bg-black/80 text-white hover:bg-white hover:text-black font-sans font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:scale-105"
            >
              <Camera className="w-4 h-4" />
              <span>Follow me</span>
            </a>
          </div>

        </div>

        {/* ================= COLUMN 3: Dual 35mm Transparent Vertical Film Strips (Centered as Part of Layout) ================= */}
        <div className="relative h-[480px] sm:h-[540px] flex gap-3 sm:gap-4 shrink-0 overflow-hidden pointer-events-auto items-center">
          
          {/* Top & Bottom Vignette Gradient Masks */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030305] via-[#030305]/80 to-transparent z-30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030305] via-[#030305]/80 to-transparent z-30 pointer-events-none" />

          {/* ---------------- REEL COLUMN 1: Continuous 35mm Vertical Transparent Strip (Scroll UPWARDS) ---------------- */}
          <div className="overflow-hidden h-full">
            <div className="flex flex-col gap-0 animate-reel-up py-0">
              {reel1Loop.map((item, index) => (
                <div
                  key={`reel1-${item.id}-${index}`}
                  className="group relative w-[155px] sm:w-[190px] bg-black shadow-2xl transition-all duration-300 hover:scale-[1.03] shrink-0 cursor-pointer flex flex-col"
                >
                  {/* Main Frame Body: Left Sprocket Margin Track | Transparent Photo Window | Right Sprocket Margin Track */}
                  <div className="flex items-stretch w-full h-[160px] sm:h-[195px]">
                    
                    {/* LEFT FILM SPROCKET MARGIN TRACK */}
                    <div className="w-5 sm:w-6 bg-black flex flex-col justify-between items-center py-2 shrink-0 border-r border-zinc-900 select-none overflow-hidden">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[6px] font-mono font-semibold text-zinc-300 uppercase tracking-widest -rotate-90 whitespace-nowrap opacity-80 my-0.5">
                        HAPPY MOMENT
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[6px] font-mono font-semibold text-zinc-300 uppercase tracking-widest -rotate-90 whitespace-nowrap opacity-80 my-0.5">
                        HAPPY MOMENT
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                    </div>

                    {/* CENTER TRANSPARENT PHOTO WINDOW */}
                    <div className="relative flex-1 bg-transparent overflow-hidden">
                      <Image
                        src={getAssetPath(item.img)}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 130px, 160px"
                        className="object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Vignette Overlay & Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 flex items-end">
                        <span className="text-[10px] font-mono font-bold text-cyan-200 truncate">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT FILM SPROCKET MARGIN TRACK */}
                    <div className="w-5 sm:w-6 bg-black flex flex-col justify-between items-center py-2 shrink-0 border-l border-zinc-900 select-none overflow-hidden">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[7px] font-mono font-bold text-white tracking-tighter rotate-90 whitespace-nowrap opacity-90 my-0.5">
                        ▷ 23A
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[7px] font-mono font-bold text-white tracking-tighter rotate-90 whitespace-nowrap opacity-90 my-0.5">
                        {24 + (index % 12)}
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                    </div>

                  </div>

                  {/* Single Horizontal Black Film Divider Line between frames */}
                  <div className="w-full h-2.5 sm:h-3 bg-black border-y border-zinc-900 shrink-0" />

                </div>
              ))}
            </div>
          </div>

          {/* ---------------- REEL COLUMN 2: Continuous 35mm Vertical Transparent Strip (Scroll DOWNWARDS) ---------------- */}
          <div className="overflow-hidden h-full">
            <div className="flex flex-col gap-0 animate-reel-down py-0">
              {reel2Loop.map((item, index) => (
                <div
                  key={`reel2-${item.id}-${index}`}
                  className="group relative w-[155px] sm:w-[190px] bg-black shadow-2xl transition-all duration-300 hover:scale-[1.03] shrink-0 cursor-pointer flex flex-col"
                >
                  {/* Main Frame Body: Left Sprocket Margin Track | Transparent Photo Window | Right Sprocket Margin Track */}
                  <div className="flex items-stretch w-full h-[160px] sm:h-[195px]">
                    
                    {/* LEFT FILM SPROCKET MARGIN TRACK */}
                    <div className="w-5 sm:w-6 bg-black flex flex-col justify-between items-center py-2 shrink-0 border-r border-zinc-900 select-none overflow-hidden">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[6px] font-mono font-semibold text-zinc-300 uppercase tracking-widest -rotate-90 whitespace-nowrap opacity-80 my-0.5">
                        HAPPY MOMENT
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[6px] font-mono font-semibold text-zinc-300 uppercase tracking-widest -rotate-90 whitespace-nowrap opacity-80 my-0.5">
                        HAPPY MOMENT
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                    </div>

                    {/* CENTER TRANSPARENT PHOTO WINDOW */}
                    <div className="relative flex-1 bg-transparent overflow-hidden">
                      <Image
                        src={getAssetPath(item.img)}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 130px, 160px"
                        className="object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Vignette Overlay & Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 flex items-end">
                        <span className="text-[10px] font-mono font-bold text-cyan-200 truncate">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT FILM SPROCKET MARGIN TRACK */}
                    <div className="w-5 sm:w-6 bg-black flex flex-col justify-between items-center py-2 shrink-0 border-l border-zinc-900 select-none overflow-hidden">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[7px] font-mono font-bold text-white tracking-tighter rotate-90 whitespace-nowrap opacity-90 my-0.5">
                        ▷ 23A
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="text-[7px] font-mono font-bold text-white tracking-tighter rotate-90 whitespace-nowrap opacity-90 my-0.5">
                        {36 + (index % 12)}
                      </span>
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/15 rounded-[1.5px] border border-white/10 shrink-0" />
                    </div>

                  </div>

                  {/* Single Horizontal Black Film Divider Line between frames */}
                  <div className="w-full h-2.5 sm:h-3 bg-black border-y border-zinc-900 shrink-0" />

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default DraggableInstagramCanvas;
