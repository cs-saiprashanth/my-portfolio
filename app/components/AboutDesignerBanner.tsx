"use client";

import React, { useState, useEffect } from "react";

export const AboutDesignerBanner: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  // Live IST (India Standard Time) real-time clock updating every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about-banner-section"
      className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 sm:py-16 select-none"
    >
      {/* Dark Minimalist Box Container (Matching Reference Image) */}
      <div className="relative w-full rounded-3xl bg-[#0c0d12] border border-zinc-800/90 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md overflow-hidden">

        {/* Ambient Subtle Volumetric Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* LEFT COLUMN: 3-Line Headline Copy (Matching Reference Image) */}
        <div className="md:w-3/5 space-y-2 text-left z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-medium text-white/95 tracking-tight leading-snug sm:leading-tight">
            I'm a product designer building design <br className="hidden sm:block" />
            teams and digital products that move <br className="hidden sm:block" />
            revenue, not just pixels.
          </h2>
        </div>

        {/* RIGHT COLUMN: Stylized Character Portrait Avatar & Live Location Time */}
        <div className="md:w-2/5 flex flex-col items-center justify-center space-y-4 z-10">
          {/* Avatar Image Container */}
          <div className="relative w-44 sm:w-52 aspect-square rounded-full border-2 border-zinc-700/80 p-1.5 bg-zinc-900 shadow-2xl overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative">
              <img
                src="/revealed.jpg"
                alt="SaiPrashanth Chavan - Product Designer"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Live Indicator Aura */}
            <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
          </div>

          {/* Live Location & Real-Time IST Clock (Matching Reference Image: BLR, IND • IST 06:17 PM) */}
          <div className="font-mono text-xs text-zinc-400 tracking-wider flex items-center gap-2 uppercase">
            <span>BLR, IND</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-200 font-semibold">
              IST {currentTime || "06:17 PM"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesignerBanner;
