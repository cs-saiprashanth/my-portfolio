"use client";

import React, { useEffect, useRef, useState } from "react";
import { getAssetPath } from "../lib/asset";

const VISUAL_WORK = [
  { title: "TokenSGuru Dashboard", label: "AI analytics platform", image: "/publictokensguru-dashboard.png.png" },
  { title: "Multimodal AI", label: "Product experience", image: "/mockup_multi.jpg" },
  { title: "Discovery Engine", label: "Ecosystem design", image: "/mockup_desktop.jpg" },
  { title: "Learning Marketplace", label: "EdTech platform", image: "/project3.jpg" },
  { title: "Web3 Wallet", label: "Fintech interface", image: "/project2.jpg" },
  { title: "AI Telemetry", label: "Data visualization", image: "/project4.jpg" },
  { title: "Responsive Systems", label: "Interface craft", image: "/mockup_tablet.jpg" },
];

export const SkillsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const scroll = () => {
      const track = trackRef.current;
      if (track && !isPaused) {
        track.scrollLeft += 0.7;
        const loopWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= loopWidth) track.scrollLeft -= loopWidth;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const carouselItems = [...VISUAL_WORK, ...VISUAL_WORK];

  return (
    <section
      id="skills-section"
      className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-[#05080d] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(91,186,255,.12),transparent_46%)]" />

      <div className="relative">
        <div className="mx-auto mb-10 max-w-6xl px-6 text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            Selected work
          </p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Designed to move people
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            A moving index of product worlds, systems, and visual experiments.
          </p>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="visual-carousel flex gap-5 overflow-x-hidden px-6 pb-5"
          style={{ scrollbarWidth: "none" }}
        >
          {carouselItems.map((work, index) => (
            <article
              key={`${work.title}-${index}`}
              className="group relative flex h-[300px] w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-[0_18px_45px_rgba(0,0,0,.28)] transition duration-500 hover:-translate-y-2 hover:border-white/45 hover:shadow-[0_24px_55px_rgba(76,190,255,.2)] sm:h-[360px] sm:w-[340px]"
            >
              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#111820]">
                <img
                  src={getAssetPath(work.image)}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{work.title}</h3>
                  <p className="mt-1 text-xs text-zinc-400">{work.label}</p>
                </div>
                <span className="text-lg text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05080d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05080d] to-transparent" />
      </div>
    </section>
  );
};

export default SkillsSection;