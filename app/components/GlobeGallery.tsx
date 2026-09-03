"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Sparkles, ArrowUpRight, Monitor, Smartphone, Tablet, X, ZoomIn, Shield } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface GlobeItem {
  id: number;
  title: string;
  category: string;
  img: string;
  deviceType: "Desktop" | "Mobile" | "Tablet" | "Multi-Device";
  lat: number;  // Latitude angle in degrees
  lon: number;  // Longitude angle in degrees
  description?: string;
  tags?: string[];
}

// Exactly 10 Featured Device Mockup Images Symmetrically Spaced on 3D Sphere
const GLOBE_ITEMS: GlobeItem[] = [
  // Top Ring (Lat: +30 deg) - 3 Cards
  {
    id: 1,
    title: "Neural Core AI Dashboard",
    category: "Desktop Dashboard",
    img: "/mockup_desktop.jpg",
    deviceType: "Desktop",
    description: "Enterprise AI ops control panel with real-time model analytics, neural stream monitoring, and GPU data flow visualization.",
    tags: ["UI/UX", "AI Integration", "Dashboard"],
    lat: 30,
    lon: 0,
  },
  {
    id: 2,
    title: "Finnovate Banking iOS App",
    category: "Mobile Fintech",
    img: "/project2.jpg",
    deviceType: "Mobile",
    description: "Next-gen personal finance & investment iOS app featuring dark mode micro-interactions and instant crypto transfers.",
    tags: ["Mobile UX", "iOS", "Fintech"],
    lat: 30,
    lon: 120,
  },
  {
    id: 3,
    title: "Cyberpunk VR Matrix OS",
    category: "Spatial 3D UI",
    img: "/project3.jpg",
    deviceType: "Desktop",
    description: "Spatial vision operating system interface designed for AR/VR immersive 3D workspaces.",
    tags: ["3D Motion", "Spatial UI", "VisionOS"],
    lat: 30,
    lon: 240,
  },

  // Equator Ring (Lat: 0 deg) - 4 Cards
  {
    id: 4,
    title: "Nexus Dynamics Platform",
    category: "Multi-Device UX",
    img: "/mockup_multi.jpg",
    deviceType: "Multi-Device",
    description: "Responsive multi-device product suite seamlessly syncs across MacBook Pro desktop and mobile iOS devices.",
    tags: ["Responsive", "Multi-Device", "Design System"],
    lat: 0,
    lon: 45,
  },
  {
    id: 5,
    title: "Helios iPad Studio Canvas",
    category: "Tablet UI Design",
    img: "/mockup_tablet.jpg",
    deviceType: "Tablet",
    description: "Digital design canvas for iPad Pro supporting Apple Pencil stylus input and high-speed layer management.",
    tags: ["Tablet App", "iPadOS", "Prototyping"],
    lat: 0,
    lon: 135,
  },
  {
    id: 6,
    title: "Odyssey Deep AI Network",
    category: "AI Visualizer",
    img: "/project4.jpg",
    deviceType: "Desktop",
    description: "Interactive neural network model visualizer displaying transformer node activity and real-time accuracy telemetry.",
    tags: ["Data Viz", "Deep Learning", "SaaS"],
    lat: 0,
    lon: 225,
  },
  {
    id: 7,
    title: "NeuraPay Wallet Mobile",
    category: "Mobile Web3",
    img: "/project2.jpg",
    deviceType: "Mobile",
    description: "Biometric Web3 crypto wallet with token swap graphs and instant cross-chain settlement.",
    tags: ["Web3", "Crypto", "Mobile UX"],
    lat: 0,
    lon: 315,
  },

  // Bottom Ring (Lat: -30 deg) - 3 Cards
  {
    id: 8,
    title: "Cyber Shield Protocol",
    category: "Security Interface",
    img: "/masked.jpg",
    deviceType: "Multi-Device",
    description: "Cybersecurity biometric facial recognition security system with active HUD target reticles.",
    tags: ["Security", "Biometrics", "Identity"],
    lat: -30,
    lon: 60,
  },
  {
    id: 9,
    title: "Design System Architecture",
    category: "UI Kit & Tokens",
    img: "/revealed.jpg",
    deviceType: "Tablet",
    description: "Scalable component library, typography design tokens, and interactive UI kit documentation.",
    tags: ["Design System", "Tokens", "UI Kit"],
    lat: -30,
    lon: 180,
  },
  {
    id: 10,
    title: "Ultra Wide Enterprise Suite",
    category: "Desktop Suite",
    img: "/mockup_desktop.jpg",
    deviceType: "Desktop",
    description: "Ultrawide monitor interface optimized for multi-tasking data streams and live code analytics.",
    tags: ["Desktop UI", "Data Viz", "Enterprise"],
    lat: -30,
    lon: 300,
  },
];

export const GlobeGallery: React.FC = () => {
  const [rotY, setRotY] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GlobeItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef<{ x: number; rotY: number }>({ x: 0, rotY: 0 });
  const radius = 220; // Compact sphere radius

  // Smooth Globe Rotation & Camera Target Interpolation Loop
  useEffect(() => {
    let animId: number;
    const animate = () => {
      if (!isDragging) {
        if (hoveredId !== null) {
          // Find hovered item and smoothly rotate globe to bring that item straight to front center!
          const item = GLOBE_ITEMS.find((i) => i.id === hoveredId);
          if (item) {
            const targetRotY = -item.lon;
            setRotY((prev) => {
              let diff = (targetRotY - prev) % 360;
              if (diff > 180) diff -= 360;
              if (diff < -180) diff += 360;
              return prev + diff * 0.12; // Smooth camera centering lerp
            });
          }
        } else if (isContainerHovered || selectedItem !== null) {
          // Freeze rotation when mouse is in container
        } else {
          // Continuous auto-spin when mouse is outside container
          setRotY((prev) => (prev + 0.38) % 360);
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, isContainerHovered, hoveredId, selectedItem]);

  // Keyboard ESC key handler for closing click-zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mouse drag handlers for spinning the globe
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".project-card")) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, rotY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    setRotY(dragStartRef.current.rotY + deltaX * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="globe-section"
      className="relative z-10 w-full py-12 sm:py-16 px-6 bg-[#030306] select-none overflow-hidden border-t border-zinc-900 flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* Background Volumetric Light Rays & Radial Globe Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.28)_0%,rgba(59,130,246,0.2)_35%,rgba(6,182,212,0.1)_60%,transparent_75%)] blur-3xl animate-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.32)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-20 max-w-4xl mx-auto text-center mb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 font-mono text-xs font-semibold shadow-lg">
          <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          <span>3D SPHERICAL DEVICE GLOBE • CLICK TO ZOOM</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Interactive Device Showcase
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto font-mono">
          Hover over any device mockup to rotate straight to center & zoom in.
        </p>
      </div>

      {/* EXTERNAL BOX CONTAINER AROUND GLOBE */}
      <div
        onMouseEnter={() => setIsContainerHovered(true)}
        onMouseLeave={() => {
          setIsContainerHovered(false);
          setHoveredId(null);
          setIsDragging(false);
        }}
        className={`relative max-w-5xl w-full rounded-3xl border transition-all duration-500 p-4 sm:p-6 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center ${isContainerHovered
            ? "bg-zinc-950/90 border-blue-400/80 shadow-[0_0_50px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/40"
            : "bg-black/60 border-zinc-800/90 shadow-black/80"
          }`}
      >
        {/* HUD Box Container Header Status Badge */}
        <div className="w-full flex items-center justify-between pb-3 font-mono text-[11px] text-zinc-400 border-b border-zinc-800/80 mb-2">
          <div className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded border border-white/10">
            <span className={`w-2 h-2 rounded-full ${isContainerHovered ? "bg-amber-400 animate-ping" : "bg-emerald-400 animate-pulse"}`} />
            <span className="text-zinc-200 font-semibold tracking-wider">
              {isContainerHovered ? "CONTAINER HOVERED • GLOBE FROZEN" : "GLOBE ROTATING (AUTO SPIN)"}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-zinc-500">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>ID: #GLOBE-BOX-CONTAINER</span>
          </div>
        </div>

        {/* 3D Globe Interactive Drag Canvas */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full h-[400px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: "1000px" }}
        >
          {/* 3D Latitude & Equator Wireframe Globe Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            <div className="w-[450px] h-[450px] rounded-full border border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: "35s" }} />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-blue-500/40 rotate-45" />
            <div className="absolute w-[500px] h-[220px] rounded-full border border-purple-500/40 -rotate-12" />
          </div>

          {/* 3D Rotating Sphere Assembly */}
          <div
            className="relative w-0 h-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(-8deg) rotateY(${rotY}deg)`,
              transition: isDragging ? "none" : "transform 0.1s linear",
            }}
          >
            {GLOBE_ITEMS.map((item) => {
              const isHovered = hoveredId === item.id;

              // Calculate 3D spherical Z depth relative to camera
              const currentLon = (item.lon + rotY) % 360;
              const radLon = (currentLon * Math.PI) / 180;
              const radLat = (item.lat * Math.PI) / 180;
              const zPos = radius * Math.cos(radLat) * Math.cos(radLon);

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedItem(item)}
                  className="project-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "visible",
                    WebkitBackfaceVisibility: "visible",
                    transform: isHovered
                      ? `rotateY(${item.lon}deg) rotateX(${item.lat}deg) translateZ(${radius + 90}px) scale(1.45)`
                      : `rotateY(${item.lon}deg) rotateX(${item.lat}deg) translateZ(${radius}px) scale(0.95)`,
                    zIndex: isHovered ? 99999 : Math.floor(zPos + 1000),
                    opacity: 1,
                    filter: "none",
                  }}
                >
                  {/* 3D Mockup Device Card */}
                  <div
                    className={`group relative w-44 sm:w-48 rounded-2xl overflow-hidden border transition-all duration-300 backdrop-blur-md shadow-2xl ${isHovered
                        ? "bg-zinc-950 border-cyan-400 shadow-[0_0_45px_rgba(6,182,212,0.95)] ring-2 ring-cyan-400 scale-105"
                        : "bg-zinc-900/90 border-zinc-700/80 hover:border-zinc-500"
                      }`}
                  >
                    {/* Mockup Screen Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={getAssetPath(item.img)}
                        alt={item.title}
                        className={`w-full h-full object-cover object-center transition-transform duration-500 ${isHovered ? "scale-110 brightness-110" : "scale-100 filter brightness-95"
                          }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                      {/* Device Category Badge */}
                      <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5 shadow-md">
                        {item.deviceType === "Desktop" && <Monitor className="w-3.5 h-3.5 text-cyan-400" />}
                        {item.deviceType === "Mobile" && <Smartphone className="w-3.5 h-3.5 text-purple-400" />}
                        {item.deviceType === "Tablet" && <Tablet className="w-3.5 h-3.5 text-blue-400" />}
                        {!item.deviceType && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                        <span>{item.category}</span>
                      </div>

                      {/* Click Zoom Indicator Icon */}
                      <div className={`absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white transition-opacity ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                        <ZoomIn className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>

                    {/* Card Title Header */}
                    <div className="p-3.5 bg-zinc-950/95 flex items-center justify-between border-t border-zinc-800/80">
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-zinc-100 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 font-semibold">
                        <span>Zoom</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Hover Neon Highlight Aura */}
                    {isHovered && (
                      <div className="absolute inset-0 border-2 border-cyan-400/90 rounded-2xl pointer-events-none animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Box Container Corner HUD Accent Brackets */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-blue-500/80 pointer-events-none" />
      </div>

      {/* CLICK ZOOM LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 select-text"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-zinc-950 border border-zinc-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300"
          >
            {/* Modal Image Display */}
            <div className="md:w-3/5 relative bg-black aspect-[16/10] md:aspect-auto">
              <img
                src={getAssetPath(selectedItem.img)}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent md:hidden" />
            </div>

            {/* Modal Project Details Sidebar */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 font-mono text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedItem.category}
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-sans">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {selectedItem.description || "High-resolution device mockup featuring interactive UI screens, responsive layouts, and modern product design tokens."}
                </p>

                {selectedItem.tags && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Technologies & Skills</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Close Full View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobeGallery;
