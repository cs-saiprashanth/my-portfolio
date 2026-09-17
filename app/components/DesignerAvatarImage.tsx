"use client";

import React, { useState } from "react";
import { getAssetPath } from "../lib/asset";

export const DesignerAvatarImage: React.FC<{ className?: string }> = ({ className = "w-56 sm:w-64 h-64 sm:h-72" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer bg-transparent ${className}`}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-transparent">
        {/* Default Avatar Image (static.png cutout) */}
        <img
          src={`${getAssetPath("/images/static.png")}?v=3`}
          alt="Sai Prashanth Avatar Static"
          className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Avatar Image (on_hover.png cutout) */}
        <img
          src={`${getAssetPath("/images/on_hover.png")}?v=3`}
          alt="Sai Prashanth Avatar Hover"
          className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default DesignerAvatarImage;
