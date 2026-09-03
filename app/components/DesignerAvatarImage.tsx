"use client";

import React, { useState } from "react";

export const DesignerAvatarImage: React.FC<{ className?: string }> = ({ className = "w-56 sm:w-64 h-64 sm:h-72" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer bg-transparent ${className}`}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-transparent">
        {/* Default Avatar Image (Calm expression from reference image Variation 1 - Transparent) */}
        <img
          src="/avatar_default.png"
          alt="Avatar Default"
          className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Avatar Image (Smiling Face with white teeth from reference image Variation 1 - Transparent) */}
        <img
          src="/avatar_hover.png"
          alt="Avatar Hover Smiling Face"
          className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default DesignerAvatarImage;
