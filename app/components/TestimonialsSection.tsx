"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, StarHalf, MessageSquareQuote } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "shashi-kumar",
    name: "Shashi Kumar",
    role: "CEO of GreenRoots",
    avatar: "/testimonial-shashi.jpg",
    quote:
      '"Prashanth\'s strategic approach to design brought our brand vision to life. The packaging and brand elements developed elevated our aesthetic and aligned perfectly with our sustainability values."',
    rating: 4.5,
  },
  {
    id: "deepak-kumar",
    name: "Deepak Kumar",
    role: "Real Estate",
    avatar: "/testimonial-deepak.jpg",
    quote:
      '"Every project Prashanth touches turns into a perfect blend of design and purpose. Crafted packaging and brand identity that reflected our eco-friendly mission while making our products stand out on the shelves."',
    rating: 4.5,
  },
  {
    id: "rakshita",
    name: "Rakshita",
    role: "Senior Medical Agent",
    avatar: "/testimonial-rakshita.jpg",
    quote:
      '"Prashanth\'s designs speak for themselves—innovative, strategic, and impactful. Deeply understood our brand, delivering high-quality work that resonated with our target audience and boosted product visibility."',
    rating: 4.5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Repeat array for seamless infinite looping marquee
  const marqueeCards = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    let animId: number;
    const el = containerRef.current;
    if (!el) return;

    const speed = 1.0; // Auto scroll speed right to left

    const scroll = () => {
      if (!isHovered && el) {
        el.scrollLeft += speed;
        const oneThird = el.scrollWidth / 4;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        }
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  return (
    <section
      id="testimonials-section"
      className="relative z-20 w-full bg-[#050508] py-20 border-t border-zinc-900 overflow-hidden select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <MessageSquareQuote size={14} className="text-blue-400" />
          <span>Client Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          What People Say
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
          Real feedback from visionary founders, executives, and team leaders.
        </p>
      </div>

      {/* Edge Fading Gradient Mask */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#050508] via-[#050508]/80 to-transparent z-10 pointer-events-none" />

      {/* Auto-scrolling Testimonials Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scrollbar-none py-4 px-8 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {marqueeCards.map((item, idx) => {
          const fullStars = Math.floor(item.rating);
          const hasHalfStar = item.rating % 1 !== 0;

          return (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[340px] sm:w-[380px] bg-[#0c0c0f] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:bg-[#121217] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400">
                  <Image
                    src={getAssetPath(item.avatar)}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white font-sans tracking-tight group-hover:text-blue-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
                  {item.role}
                </p>

                {/* Divider Line matching reference */}
                <div className="h-[1px] w-full bg-zinc-800/80 my-4" />

                {/* Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed font-sans italic opacity-95">
                  {item.quote}
                </p>
              </div>

              {/* Rating Footer */}
              <div className="flex items-center gap-2 mt-6 pt-2">
                <span className="text-base font-extrabold text-white font-mono">
                  {item.rating.toFixed(1)}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: fullStars }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  {hasHalfStar && (
                    <StarHalf
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
