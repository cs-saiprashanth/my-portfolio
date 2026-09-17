"use client";

import React, { useState } from "react";
import { getAssetPath } from "../lib/asset";
import { X, ShieldAlert, ArrowUpRight, Sparkles } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  linkText: string;
  tag: string;
}

const ROW_1_PROJECTS: ProjectItem[] = [
  {
    id: "lumi-ai",
    title: "Tokens guru",
    category: "Multimodal AI & Mobile",
    tag: "AI Optimization Engine",
    description:
      "Designing a multimodal AI that lets users point their camera at the world and talk to it. We turned live visuals into an empathetic system that reasons about context.",
    image: "/images/project2.jpg",
    linkText: "View details",
  },
  {
    id: "prism-discovery",
    title: "MLOps mlangles",
    category: "Product Architecture",
    tag: "MLOps RAG Platform",
    description:
      "Redesigned the Edge Add-ons Store into a dynamic discovery engine. Built a modular card framework that adapts to user intent, solving trust barriers.",
    image: "/images/mockup_tablet.jpg",
    linkText: "View details",
  },
  {
    id: "tokens-guru",
    title: "Testing aide (QA)",
    category: "Fintech & Web3",
    tag: "Auto Testing platform",
    description:
      "An enterprise-grade token analytics platform featuring real-time visual telemetry, automated gas optimization pipelines, and financial data visualization.",
    image: "/images/dashboard_showcase_tile.png",
    linkText: "View details",
  },
];

const ROW_2_PROJECTS: ProjectItem[] = [
  {
    id: "takelessons",
    title: "Qangles-Qacademy",
    category: "EdTech Platform",
    tag: "Mentorship Platform",
    description:
      "Architected a two-sided marketplace to democratize education. Built a goal-centric ecosystem connecting students and mentors via outcome tracking.",
    image: "/images/project3.jpg",
    linkText: "View details",
  },
  {
    id: "pebble-beach",
    title: "Pebble Beach Experience",
    category: "Luxury Hospitality UI",
    tag: "Resort Concierge App",
    description:
      "Designed an end-to-end luxury resort digital experience with interactive concierge mapping, seamless booking flows, and real-time guest services.",
    image: "/images/pebble_beach_resorts.jpg",
    linkText: "View details",
  },
  {
    id: "smart-office",
    title: "Smart Office Ecosystem",
    category: "Enterprise IoT",
    tag: "Workspace Automation",
    description:
      "Internal intelligent office dashboard managing spatial occupancy metrics, smart HVAC scheduling, desk allocations, and energy analytics.",
    image: "/images/project4.jpg",
    linkText: "View details",
  },
  {
    id: "mlops-platform",
    title: "MLOps Telemetry Platform",
    category: "AI Data Viz",
    tag: "RAG & Pipeline Analytics",
    description:
      "Built an interactive neural telemetry system for deep learning engineers to visualize transformer layer activations and real-time accuracy bottlenecks.",
    image: "/images/publictokensguru-dashboard.png.png",
    linkText: "View details",
  },
];

export const SkillsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="skills-section"
      className="relative z-10 w-full bg-[#07080b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white select-none border-t border-white/5"
    >
      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.07),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Projects you need to see
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal text-zinc-300 leading-relaxed max-w-2xl mx-auto font-sans">
            A collection of digital products and experiences I’ve designed across SaaS, AI, healthcare, enterprise, and emerging technologies.
          </p>
        </div>

        {/* 1st Row: 3 Cards Centered (Identical card sizes to 2nd row) */}
        <div className="mb-6 lg:mb-8 flex flex-wrap justify-center gap-6">
          {ROW_1_PROJECTS.map((project) => (
            <div key={project.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ProjectCard
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* 2nd Row: 4 Cards (Identical card sizes to 1st row) */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROW_2_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* NDA Protected Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#12141a] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-zinc-400 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <ShieldAlert size={24} />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                NDA Protected Case Study
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400/90 mb-4">
              {selectedProject.category} • {selectedProject.tag}
            </p>

            <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 max-h-64 bg-black">
              <img
                src={getAssetPath(selectedProject.image)}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="text-xs text-zinc-400">
                Visit CloudAngles to explore complete enterprise solutions and case studies.
              </p>
              <a
                href="https://cloudangles.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-all shadow-lg"
              >
                Visit CloudAngles <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{
  project: ProjectItem;
  onSelect: () => void;
}> = ({ project, onSelect }) => {
  const handleProjectClick = () => {
    window.open("https://cloudangles.com", "_blank", "noopener,noreferrer");
  };

  return (
    <article
      onClick={handleProjectClick}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#13151b] p-4 h-[380px] sm:h-[400px] shadow-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)] cursor-pointer"
    >
      {/* FULL IMAGE OVERLAY (Visible on Hover) */}
      <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none rounded-3xl overflow-hidden bg-black">
        <img
          src={getAssetPath(project.image)}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Full Image Gradient Overlay & Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="rounded-full border border-white/20 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-cyan-300">
              {project.tag}
            </span>
            <span className="rounded-full bg-cyan-500/20 text-cyan-300 p-2 border border-cyan-400/40">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
            <p className="text-xs text-cyan-300 font-mono">Click to view details at cloudangles.com ↗</p>
          </div>
        </div>
      </div>

      {/* DEFAULT STATE (Visible when cursor removed): Image + Heading + Short Description */}
      <div className="flex flex-col h-full justify-between group-hover:opacity-0 transition-opacity duration-300">
        {/* Top Image Preview Frame */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#0a0b0e] border border-white/5 h-[190px] shrink-0">
          <img
            src={getAssetPath(project.image)}
            alt={project.title}
            draggable={false}
            className="h-full w-full object-cover"
          />
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
            <Sparkles size={10} className="text-cyan-400" />
            {project.tag}
          </span>
        </div>

        {/* Content Below Image */}
        <div className="flex flex-col flex-1 justify-between pt-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white line-clamp-1">
              {project.title}
            </h3>
            <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-normal line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <a
              href="https://cloudangles.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold text-zinc-300 underline underline-offset-4 hover:text-cyan-300 transition-colors"
            >
              {project.linkText}
            </a>
            <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-cyan-400" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillsSection;