"use client";

import React, { useState, useRef, useEffect } from "react";
import { Move, Camera, Play, SkipForward, Heart, Music, Sparkles } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface DragCardItem {
  id: number;
  type: "photo" | "widget";
  title?: string;
  subtitle?: string;
  img?: string;
  x: number; // position X in relative %
  y: number; // position Y in relative %
  rot: number; // rotation in degrees
  zIndex: number;
  widthClass?: string; // unique card width
  aspectClass?: string; // unique aspect ratio shape
}

const INITIAL_CARDS: DragCardItem[] = [
  // 1. Small Square Photo (Top Left)
  {
    id: 1,
    type: "photo",
    img: "/masked.jpg",
    title: "Cyber Security Mask",
    x: 80,
    y: 50,
    rot: -12,
    zIndex: 10,
    widthClass: "w-36 sm:w-44",
    aspectClass: "aspect-square",
  },

  // 2. Sleek Ultrawide Horizontal Rectangle (Top Middle Left)
  {
    id: 2,
    type: "photo",
    img: "/project3.jpg",
    title: "Cyber Matrix Artwork",
    x: 280,
    y: 35,
    rot: 8,
    zIndex: 11,
    widthClass: "w-60 sm:w-72",
    aspectClass: "aspect-[21/9]",
  },

  // 3. Tall Vertical Portrait (Top Right)
  {
    id: 3,
    type: "photo",
    img: "/revealed.jpg",
    title: "Studio Portrait",
    x: 950,
    y: 40,
    rot: -8,
    zIndex: 12,
    widthClass: "w-44 sm:w-52",
    aspectClass: "aspect-[3/4]",
  },

  // 4. Widescreen Desktop Mockup (Far Top Right)
  {
    id: 4,
    type: "photo",
    img: "/mockup_desktop.jpg",
    title: "AI Ops Dashboard",
    x: 1200,
    y: 60,
    rot: 14,
    zIndex: 13,
    widthClass: "w-56 sm:w-64",
    aspectClass: "aspect-[16/9]",
  },

  // 5. Sleek Music Player Widget (Middle Left)
  {
    id: 5,
    type: "widget",
    title: "Cyber Ambient - Live Loop",
    subtitle: "SaiPrashanth • Audio Visual",
    x: 90,
    y: 340,
    rot: -6,
    zIndex: 15,
  },

  // 6. Tall Smartphone Vertical Screen (Far Left Bottom)
  {
    id: 6,
    type: "photo",
    img: "/project2.jpg",
    title: "Finnovate Mobile UX",
    x: 40,
    y: 470,
    rot: 15,
    zIndex: 14,
    widthClass: "w-36 sm:w-44",
    aspectClass: "aspect-[9/16]",
  },

  // 7. Wide Desk Mockup (Bottom Left)
  {
    id: 7,
    type: "photo",
    img: "/mockup_multi.jpg",
    title: "Design Studio Session",
    x: 240,
    y: 510,
    rot: -10,
    zIndex: 16,
    widthClass: "w-60 sm:w-72",
    aspectClass: "aspect-[16/10]",
  },

  // 8. Compact Small Square (Bottom Middle)
  {
    id: 8,
    type: "photo",
    img: "/project4.jpg",
    title: "Neural Network UI",
    x: 580,
    y: 530,
    rot: 6,
    zIndex: 17,
    widthClass: "w-36 sm:w-40",
    aspectClass: "aspect-square",
  },

  // 9. Classic Tablet Rectangle (Middle Right)
  {
    id: 9,
    type: "photo",
    img: "/mockup_tablet.jpg",
    title: "iPad Studio Canvas",
    x: 1140,
    y: 340,
    rot: -12,
    zIndex: 18,
    widthClass: "w-52 sm:w-60",
    aspectClass: "aspect-[4/3]",
  },

  // 10. Music Player Widget (Bottom Right)
  {
    id: 10,
    type: "widget",
    title: "Late Night Code Synth",
    subtitle: "Rippy & Friends • Lo-Fi",
    x: 960,
    y: 510,
    rot: 8,
    zIndex: 19,
  },
];

export const DraggableInstagramCanvas: React.FC = () => {
  const [cards, setCards] = useState<DragCardItem[]>(INITIAL_CARDS);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [topZ, setTopZ] = useState(30);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Handle Drag Start
  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setActiveId(id);
    const newZ = topZ + 1;
    setTopZ(newZ);

    // Bring clicked card to top layer
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, zIndex: newZ } : card))
    );

    const card = cards.find((c) => c.id === id);
    if (card && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardPxX = (card.x / 1400) * containerRect.width;
      const cardPxY = (card.y / 700) * containerRect.height;
      dragOffsetRef.current = {
        x: e.clientX - cardPxX,
        y: e.clientY - cardPxY,
      };
    }
  };

  // Handle Global Dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (activeId === null || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      const newPxX = e.clientX - dragOffsetRef.current.x;
      const newPxY = e.clientY - dragOffsetRef.current.y;

      // Convert back to relative units (based on 1400x700 reference space)
      const newNormX = (newPxX / containerRect.width) * 1400;
      const newNormY = (newPxY / containerRect.height) * 700;

      setCards((prev) =>
        prev.map((card) =>
          card.id === activeId ? { ...card, x: newNormX, y: newNormY } : card
        )
      );
    };

    const handleMouseUp = () => {
      setActiveId(null);
    };

    if (activeId !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeId]);

  return (
    <section
      ref={containerRef}
      id="instagram-canvas-section"
      className="relative z-10 w-full min-h-[750px] h-[80vh] bg-[#050508] select-none border-t border-zinc-900 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Center Typography & CTA (Matching Reference Image) */}
      <div className="relative z-20 max-w-xl mx-auto text-center space-y-4 p-6 pointer-events-auto">
        {/* HUD Drag Indicator Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/80 border border-zinc-700/80 text-zinc-300 font-mono text-xs tracking-wider shadow-lg">
          <span className="text-cyan-400 font-bold">[</span>
          <Move className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Drag object to move</span>
          <span className="text-cyan-400 font-bold">]</span>
        </div> */}

        {/* Headline: Script Cursive "Connect on" + Bold "Instagram." */}
        <div className="space-y-1">
          <p className="font-signature text-4xl sm:text-6xl text-cyan-300 tracking-wide font-normal drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Connect on
          </p>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white font-sans tracking-tight">
            Linkedin
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
          My digital sketchbook. A space for unfinished thoughts, UI explorations, and late-night experiments.
        </p>

        {/* Follow Me Pill Button */}
        <div className="pt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black hover:bg-cyan-300 font-sans font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105"
          >
            <Camera className="w-4 h-4 text-black" />
            <span>Follow me</span>
          </a>
        </div>
      </div>

      {/* Draggable Asymmetric Scatter Cards Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {cards.map((card) => {
          const isDragging = activeId === card.id;

          return (
            <div
              key={card.id}
              onMouseDown={(e) => handleMouseDown(e, card.id)}
              className={`absolute pointer-events-auto transition-shadow duration-300 ${isDragging
                ? "cursor-grabbing shadow-[0_0_40px_rgba(59,130,246,0.6)] ring-2 ring-cyan-400 scale-105"
                : "cursor-grab shadow-2xl hover:scale-102"
                }`}
              style={{
                left: `${(card.x / 1400) * 100}%`,
                top: `${(card.y / 700) * 100}%`,
                transform: `rotate(${card.rot}deg)`,
                zIndex: card.zIndex,
                transition: isDragging ? "none" : "transform 0.3s ease-out, shadow 0.3s ease-out",
              }}
            >
              {card.type === "photo" ? (
                /* Asymmetric Polaroid / Frame Photo Card */
                <div className={`${card.widthClass || "w-48"} bg-[#121216] border border-zinc-700/80 rounded-2xl p-2.5 shadow-2xl group flex flex-col justify-between`}>
                  <div className={`relative ${card.aspectClass || "aspect-[4/3]"} w-full rounded-xl overflow-hidden bg-black`}>
                    <img
                      src={card.img ? getAssetPath(card.img) : ""}
                      alt={card.title || "Instagram Drag Card"}
                      className="w-full h-full object-cover object-center pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {card.title && (
                    <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      {/* <span className="truncate">{card.title}</span>
                      <Move className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 flex-shrink-0 ml-1" /> */}
                    </div>
                  )}
                </div>
              ) : (
                /* Sleek Music Player Widget (Matching Reference Image) */
                <div className="w-56 sm:w-64 bg-[#121216]/95 border border-zinc-700/90 rounded-2xl p-3.5 backdrop-blur-md shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Music className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate font-sans">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-zinc-400 truncate font-mono">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
                    <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DraggableInstagramCanvas;
