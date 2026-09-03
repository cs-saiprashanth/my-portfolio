"use client";

import React, { useState } from "react";

export interface DesignerAvatarProps {
  className?: string;
}

export const DesignerAvatarSVG: React.FC<DesignerAvatarProps> = ({ className = "w-56 h-72" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
    >
      <svg
        viewBox="0 0 300 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Dark T-shirt Body */}
        <path
          d="M50 240 C50 205, 95 185, 150 185 C205 185, 250 205, 250 240 L265 360 L35 360 Z"
          fill="#121214"
        />

        {/* Sleeve Hem Bands */}
        <rect x="35" y="250" width="38" height="28" rx="3" fill="#cf9c6b" />
        <rect x="227" y="250" width="38" height="28" rx="3" fill="#cf9c6b" />

        {/* Neck */}
        <rect x="128" y="155" width="44" height="38" rx="6" fill="#cf9c6b" />
        <path d="M128 180 C145 194, 155 194, 172 190 Z" fill="#b98555" />

        {/* Face Base */}
        <path
          d="M98 85 C98 45, 202 45, 202 85 L202 130 C202 160, 178 178, 150 178 C122 178, 98 160, 98 130 Z"
          fill="#cf9c6b"
        />

        {/* Ears */}
        <circle cx="94" cy="115" r="10" fill="#cf9c6b" />
        <circle cx="206" cy="115" r="10" fill="#cf9c6b" />

        {/* Ear Stud (Matching Reference Image) */}
        <circle cx="206" cy="120" r="2" fill="#ffffff" />
        <circle cx="94" cy="120" r="2" fill="#ffffff" />

        {/* Hair Top (Full Wavy Hair matching reference) */}
        <path
          d="M90 85 C85 45, 120 20, 150 20 C180 20, 215 45, 210 85 C210 85, 185 60, 150 62 C115 60, 90 85, 90 85 Z"
          fill="#121214"
        />

        {/* Beard Base (Full Dark Beard matching reference image) */}
        <path
          d="M98 115 C98 175, 122 188, 150 188 C178 188, 202 175, 202 115 C202 135, 185 180, 150 180 C115 180, 98 135, 98 115 Z"
          fill="#121214"
        />
        <path
          d="M98 125 C98 168, 120 184, 150 184 C180 184, 202 168, 202 125 L194 125 C194 160, 174 176, 150 176 C126 176, 106 160, 106 125 Z"
          fill="#121214"
        />

        {/* Mustache */}
        <path
          d="M120 142 C130 134, 142 138, 150 142 C158 138, 170 134, 180 142 C170 150, 158 150, 150 145 C142 150, 130 150, 120 142 Z"
          fill="#121214"
        />

        {/* DYNAMIC MOUTH: Neutral vs Smiling Face (White Teeth) on Hover */}
        {isHovered ? (
          /* HOVER STATE: Broad Smiling Face with White Teeth (Matching Hover in Image) */
          <g className="animate-in fade-in zoom-in-95 duration-200">
            {/* Open Smiling Mouth Base */}
            <path
              d="M130 148 Q150 172 170 148 Z"
              fill="#121214"
            />
            {/* Bright White Smiling Teeth Row */}
            <path
              d="M133 149 Q150 162 167 149 C164 156, 136 156, 133 149 Z"
              fill="#ffffff"
            />
          </g>
        ) : (
          /* DEFAULT STATE: Calm Neutral Mouth Line (Matching Default in Image) */
          <path
            d="M136 152 Q150 156 164 152"
            stroke="#b98555"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* Eyes & Iris */}
        <ellipse cx="125" cy="108" rx="7" ry="8" fill="#ffffff" />
        <ellipse cx="175" cy="108" rx="7" ry="8" fill="#ffffff" />

        <circle cx="125" cy="108" r="4.5" fill="#121214" />
        <circle cx="175" cy="108" r="4.5" fill="#121214" />

        {/* Catchlight */}
        <circle cx="123" cy="106" r="1.5" fill="#ffffff" />
        <circle cx="173" cy="106" r="1.5" fill="#ffffff" />

        {/* Eyebrows (Slightly raised on hover) */}
        <path
          d={isHovered ? "M114 92 Q125 86 136 92" : "M114 95 Q125 91 136 95"}
          stroke="#121214"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d={isHovered ? "M164 92 Q175 86 186 92" : "M164 95 Q175 91 186 95"}
          stroke="#121214"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default DesignerAvatarSVG;
