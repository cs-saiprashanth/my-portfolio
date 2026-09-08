"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface ProjectCard {
  id: number;
  title: string;
  category: string;
  description: string;
  img: string;
  linkText: string;
}

const CAROUSEL_PROJECTS: ProjectCard[] = [
  {
    id: 1,
    title: "Lumi AI Camera",
    category: "Multimodal AI",
    description:
      "Designing a multimodal AI that lets users point their camera at the world and talk to it. We turned live visuals into an empathetic system that reasons about context, giving users a magical experience despite privacy and latency hurdles.",
    img: "/masked.png.png",
    linkText: "View details",
  },
  {
    id: 2,
    title: "Prism",
    category: "Discovery Engine",
    description:
      "Redesigned the Edge Add-ons Store into a dynamic discovery engine. I built a modular card framework that adapts to intent. This solved trust barriers and shifted metrics from downloads to meaningful ecosystem engagement for millions now.",
    img: "/revealed.png",
    linkText: "View details",
  },
  {
    id: 3,
    title: "Takelessons",
    category: "EdTech Marketplace",
    description:
      "Architected a two-sided marketplace to democratize education in India. We built a goal-centric ecosystem connecting students and mentors via outcomes. I designed for accessibility plus solved trust issues to bridge curiosity and mastery!",
    img: "/masked.png.png",
    linkText: "View details",
  },
  {
    id: 4,
    title: "NeuraPay Web3 Wallet",
    category: "Fintech & Crypto",
    description:
      "Designed a biometric-first crypto wallet for seamless token swaps, gasless transactions, and cross-chain portfolio tracking with zero friction.",
    img: "/revealed.png",
    linkText: "View details",
  },
  {
    id: 5,
    title: "Odyssey AI Telemetry",
    category: "AI Data Visualization",
    description:
      "Built an interactive neural network telemetry system for deep learning engineers to visualize transformer layer activations and real-time accuracy bottlenecks.",
    img: "/masked.png.png",
    linkText: "View details",
  },
  {
    id: 6,
    title: "Cyber Shield Protocol",
    category: "Identity & Security",
    description:
      "Crafted a high-assurance identity security suite for enterprise SOC teams with real-time threat detection and facial biometric verification.",
    img: "/revealed.png",
    linkText: "View details",
  },
];

const FEATURED_COMPANIES = [
  {
    name: "Bellebe",
    subtitle: "JEWELRY",
    className: "bg-[#9b3f73] text-[#ffe8f2]",
    texture:
      "radial-gradient(circle at 50% 42%, rgba(255,255,255,.14) 0 2px, transparent 3px), linear-gradient(135deg, #a7487e, #71305d)",
    mark: "◇",
  },
  {
    name: "Wildline",
    subtitle: "OUTDOOR GOODS",
    className: "bg-[#536edc] text-white",
    texture:
      "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(135deg, #526fdd, #263d9b)",
    mark: "Wild\nline",
  },
  {
    name: "Thyme",
    subtitle: "TIMEKEEPING",
    className: "bg-[#27231f] text-[#e7c990]",
    texture:
      "radial-gradient(circle at 30% 20%, rgba(255,255,255,.1), transparent 30%), linear-gradient(140deg, #39332b, #151310)",
    mark: "◉",
  },
  {
    name: "Yummy",
    subtitle: "FOOD DELIVERY",
    className: "bg-[#ff9f0b] text-[#48158d]",
    texture:
      "linear-gradient(135deg, rgba(255,255,255,.18), transparent 42%), #ff9f0b",
    mark: "Yummy\n●",
  },
  {
    name: "Quish",
    subtitle: "WELLNESS",
    className: "bg-[#e30d13] text-[#fff3e8]",
    texture:
      "radial-gradient(circle at 50% 35%, rgba(255,255,255,.12), transparent 35%), #e30d13",
    mark: "Q",
  },
  {
    name: "Nox",
    subtitle: "NIGHTLIFE",
    className: "bg-[#229443] text-[#fff6dd]",
    texture:
      "linear-gradient(135deg, rgba(255,255,255,.16), transparent 40%), #229443",
    mark: "Nox",
  },
  {
    name: "Lilly",
    subtitle: "LIFESTYLE",
    className: "bg-[#f29ab5] text-[#34162a]",
    texture:
      "repeating-linear-gradient(135deg, rgba(255,255,255,.13) 0 2px, transparent 2px 11px), #f29ab5",
    mark: "Lilly",
  },
];

export const ProjectCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; scrollLeft: number }>({ startX: 0, scrollLeft: 0 });

  // Duplicated list for infinite seamless loop scrolling
  const doubleProjects = [...CAROUSEL_PROJECTS, ...CAROUSEL_PROJECTS];

  // Infinite Auto-Scroll Loop from Right to Left
  useEffect(() => {
    let animId: number;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += 1.2; // Smooth right to left scroll speed
        
        // Reset scroll position seamlessly when reaching midpoint for infinite loop effect
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers for horizontal swipe scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      dragStartRef.current = {
        startX: e.clientX,
        scrollLeft: scrollRef.current.scrollLeft,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStartRef.current.startX;
    scrollRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx * 1.2;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Arrow button manual navigation
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="project-carousel-section" className="relative z-10 w-full py-24 px-6 bg-[#050508] select-none border-t border-zinc-900 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Section (Matching Reference Image) */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-sans">
          Projects you need to see
        </h2>
        
        <p className="text-zinc-300 text-sm sm:text-base font-sans font-medium">
          Translating ambiguous, high-stakes problems into scalable solutions.
        </p>

        {/* NDA Note Paragraph */}
        <p className="text-zinc-500 text-xs sm:text-sm font-mono max-w-2xl mx-auto leading-relaxed pt-1">
          For NDA compliance, my deep-dive case studies are password protected. Curious?{" "}
          <a
            href="mailto:contact@saiprashanth.com"
            className="text-cyan-400 font-semibold underline hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
          >
            <span>[Drop me a line]</span>
            <Mail className="w-3 h-3" />
          </a>{" "}
          and I'll hand you the keys.
        </p>
      </div>

      {/* Main Carousel Area */}
      <div className="relative max-w-7xl mx-auto">

        {/* Overlapping brand wall inspired by editorial identity boards */}
        <div className="relative mx-auto mb-16 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] px-4 py-8 sm:px-8 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_62%)]" />
          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex lg:h-[320px] lg:items-center lg:justify-center lg:gap-0">
            {FEATURED_COMPANIES.map((company, index) => (
              <div
                key={company.name}
                className={`group relative flex aspect-[.78] min-h-[170px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-black/30 px-4 text-center shadow-[0_18px_35px_rgba(0,0,0,.35)] transition duration-500 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_26px_45px_rgba(0,0,0,.55)] sm:min-h-[230px] lg:-ml-8 lg:w-[170px] lg:first:ml-0 lg:nth-[2]:translate-y-5 lg:nth-[3]:-translate-y-2 lg:nth-[4]:translate-y-7 lg:nth-[5]:-translate-y-4 lg:nth-[6]:translate-y-4 lg:nth-[7]:-translate-y-1 ${company.className}`}
                style={{
                  backgroundImage: company.texture,
                  zIndex: index + 1,
                }}
              >
                <div className="absolute inset-0 bg-black/[0.04] transition group-hover:bg-transparent" />
                <div className="relative flex flex-col items-center gap-2">
                  <span className={`whitespace-pre-line text-4xl font-black leading-[.8] tracking-[-.08em] sm:text-5xl ${index === 2 ? "font-serif" : "font-sans"}`}>
                    {company.mark}
                  </span>
                  <span className="text-xl font-black tracking-tight sm:text-2xl">
                    {company.name}
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.28em] opacity-85 sm:text-[0.7rem]">
                    {company.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable & Draggable Cards Container (Infinite Loop) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 no-scrollbar select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doubleProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="flex-shrink-0 w-[340px] sm:w-[380px] bg-[#121216] border border-zinc-800/90 rounded-2xl p-5 hover:border-zinc-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Project Image Thumbnail (Clean, No Category Tag Overlay) */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black border border-zinc-800/80">
                  <img
                    src={getAssetPath(project.img)}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Problem & Impact Description (Matching Reference Image) */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-5">
                  {project.description}
                </p>
              </div>

              {/* Bottom Link Action (Matching Reference Image) */}
              <div className="pt-5 border-t border-zinc-800/60 mt-4 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-zinc-300 group-hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-zinc-600 group-hover:decoration-cyan-400"
                >
                  <span>{project.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* <Lock className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
