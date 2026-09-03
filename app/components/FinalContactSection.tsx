"use client";

import React, { useState } from "react";
import { Globe, Phone, Mail, Copy, Check, ExternalLink, Send } from "lucide-react";
import DesignerAvatarImage from "./DesignerAvatarImage";

export const FinalContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactData = {
    phone: "+91 7396221050, 8309561038",
    email: "saiprashanthuiuxdesigner@gmail.com",
    linkedin: "https://linkedin.com/in/saiprashanth-chavan",
    linkedinHandle: "linkedin.com/in/saiprashanth-chavan",
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section
      id="contact-section"
      className="relative z-20 w-full py-20 sm:py-28 px-6 bg-[#030305] text-white select-none overflow-hidden border-t border-zinc-900 flex items-center justify-center min-h-[70vh]"
    >
      {/* Background Volumetric Metallic Wave Flare */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-zinc-800/20 via-zinc-400/10 to-transparent rounded-full blur-[140px] opacity-60" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[450px] bg-cyan-950/20 rounded-full blur-[160px] opacity-40" />
      </div>

      {/* Main 2-Column Side-by-Side Grid Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* LEFT COLUMN: Left Aligned Content + Inline Contact Options (Matching User Request) */}
        <div className="md:col-span-8 text-left space-y-6 flex flex-col items-start justify-center">
          {/* Top Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 font-sans text-xs font-medium tracking-wide shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
            <span>Available For Work</span>
          </div>

          {/* Main Headline (Formatted in 3 Clean Lines) */}
          <h2 className="text-xl sm:text-3xl md:text-4xl font-sans font-medium text-white tracking-tight leading-snug sm:leading-tight">
            I’m currently available for new opportunities and <br className="hidden sm:block" />
            collaborations—open to building impactful, <br className="hidden sm:block" />
            meaningful digital experiences.
          </h2>

          {/* INLINE CONTACT OPTIONS (Directly below headline, button removed per request) */}
          <div className="w-full max-w-lg space-y-3 pt-2">
            {/* 1. Mobile Phone Row (Numbers displayed cleanly without Call or Copy buttons) */}
            <div className="py-2.5 border-b border-zinc-800/70 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 min-w-0">
                <Phone className="w-5 h-5 text-zinc-300 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                <div className="min-w-0 space-y-0.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                    Mobile Number
                  </span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 truncate block tracking-wide">
                    {contactData.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Gmail / Email Row (Takes user directly to gmail.com composer) */}
            <div className="py-2.5 border-b border-zinc-800/70 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 min-w-0">
                <Mail className="w-5 h-5 text-zinc-300 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                <div className="min-w-0 space-y-0.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                    Gmail Address
                  </span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 truncate block tracking-wide">
                    {contactData.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 font-mono text-sm">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-800/90 hover:bg-rose-600 text-zinc-200 hover:text-white transition-all font-semibold shadow-md flex items-center gap-1.5"
                >
                  <span>Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(contactData.email, "Gmail Address")}
                  className="p-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md"
                  title="Copy Email Address"
                >
                  {copiedField === "Gmail Address" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 3. LinkedIn Profile Row */}
            <div className="py-2.5 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-serif font-extrabold text-lg text-zinc-200 group-hover:text-cyan-400 transition-colors w-5 flex justify-center flex-shrink-0">
                  in
                </span>
                <div className="min-w-0 space-y-0.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                    LinkedIn Profile
                  </span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 truncate block tracking-wide">
                    {contactData.linkedinHandle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 font-mono text-sm">
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-800/90 hover:bg-blue-600 text-zinc-200 hover:text-white transition-all font-semibold shadow-md flex items-center gap-1.5"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(contactData.linkedin, "LinkedIn Link")}
                  className="p-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md"
                  title="Copy LinkedIn Link"
                >
                  {copiedField === "LinkedIn Link" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Copied Feedback Toast Alert */}
            {copiedField && (
              <div className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-xl animate-in fade-in duration-200 shadow-lg inline-block">
                ✓ Copied {copiedField} to clipboard!
              </div>
            )}
          </div>

          {/* Social Icons Footer Row (Behance | X | Globe) */}
          <div className="pt-6 flex items-center gap-8 sm:gap-10 font-sans font-medium text-zinc-400">
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all font-extrabold tracking-tighter text-2xl sm:text-3xl transform hover:scale-110"
            >
              Bē
            </a>
            <span className="text-zinc-700 text-xl font-light">|</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all font-bold text-2xl sm:text-3xl font-serif transform hover:scale-110"
            >
              𝕏
            </a>
            <span className="text-zinc-700 text-xl font-light">|</span>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all flex items-center justify-center transform hover:scale-110"
            >
              <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Enlarged Avatar Image from Reference Image */}
        <div className="md:col-span-4 flex items-center justify-center md:justify-end">
          <DesignerAvatarImage className="w-72 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[420px]" />
        </div>

      </div>
    </section>
  );
};

export default FinalContactSection;
