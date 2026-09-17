"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Scan } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface SecurityRevealProps {
  revealedImgSrc?: string;
  revealRadius?: number;
}

export const SecurityFaceReveal: React.FC<SecurityRevealProps> = ({
  revealedImgSrc = getAssetPath("/revealed.png"),
  revealRadius = 150,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; px: number; py: number }>({
    x: 50,
    y: 50,
    px: 0,
    py: 0,
  });

  // Store image brightness data for halftone dot matrix
  const imgDataRef = useRef<{ width: number; height: number; data: Uint8ClampedArray } | null>(null);

  // Load and sample revealed face image to build dotted portrait halftone
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = revealedImgSrc;

    img.onload = () => {
      const sampleCanvas = document.createElement("canvas");
      const sampleWidth = 120; // grid resolution horizontal
      const sampleHeight = Math.round((img.height / img.width) * sampleWidth) || 150;
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;

      const sCtx = sampleCanvas.getContext("2d");
      if (sCtx) {
        sCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
        const imgData = sCtx.getImageData(0, 0, sampleWidth, sampleHeight);
        imgDataRef.current = {
          width: sampleWidth,
          height: sampleHeight,
          data: imgData.data,
        };
      }
    };
  }, [revealedImgSrc]);

  // Main Canvas Render Loop for Dotted Matrix & Interactive Reveal
  const renderCanvas = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.clearRect(0, 0, width, height);

      const gridData = imgDataRef.current;

      // 1. Draw Dotted Cyber Halftone Matrix Background
      if (gridData) {
        const cols = gridData.width;
        const rows = gridData.height;

        // Calculate aspect-contain box matching <img className="object-contain" /> exactly
        const imgAspect = cols / rows;
        const containerAspect = width / height;

        let drawW = width;
        let drawH = height;
        let drawX = 0;
        let drawY = 0;

        if (containerAspect > imgAspect) {
          drawH = height;
          drawW = height * imgAspect;
          drawX = (width - drawW) / 2;
          drawY = 0;
        } else {
          drawW = width;
          drawH = width / imgAspect;
          drawX = 0;
          drawY = (height - drawH) / 2;
        }

        const cellW = drawW / cols;
        const cellH = drawH / rows;

        const cursorPx = mousePos.px;
        const cursorPy = mousePos.py;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const index = (r * cols + c) * 4;
            const red = gridData.data[index];
            const green = gridData.data[index + 1];
            const blue = gridData.data[index + 2];
            const alpha = gridData.data[index + 3];

            if (alpha < 30) continue; // Skip transparent background

            // Calculate luminance
            const brightness = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

            const cx = drawX + c * cellW + cellW / 2;
            const cy = drawY + r * cellH + cellH / 2;

            // Distance from cursor
            const dist = Math.hypot(cx - cursorPx, cy - cursorPy);

            // Pulse wave animation for idle dots
            const wave = Math.sin(time * 0.003 + (c + r) * 0.15) * 0.3 + 1;
            let radius = (brightness * 2.2 + 0.6) * wave;

            // Dot Opacity
            let dotAlpha = Math.min(1, brightness * 1.1 + 0.2);

            // Interactivity: If near cursor reveal spotlight, fade dots out smoothly to reveal real face
            if (isHovered && dist < revealRadius) {
              const factor = dist / revealRadius; // 0 at center, 1 at edge
              dotAlpha *= Math.pow(factor, 1.8);
              radius *= 0.5 + 0.5 * factor;
            }

            if (dotAlpha <= 0.05) continue;

            // Dot color: Cyber cyan to white gradient based on brightness
            ctx.beginPath();
            ctx.arc(cx, cy, Math.max(0.4, radius), 0, Math.PI * 2);

            if (brightness > 0.6) {
              ctx.fillStyle = `rgba(224, 242, 254, ${dotAlpha})`; // Bright icy cyan-white
            } else if (brightness > 0.3) {
              ctx.fillStyle = `rgba(56, 189, 248, ${dotAlpha})`; // Electric cyan
            } else {
              ctx.fillStyle = `rgba(30, 58, 138, ${dotAlpha * 0.8})`; // Deep cyber blue
            }

            ctx.fill();
          }
        }
      } else {
        // Fallback grid if image data hasn't loaded yet
        const spacing = 18;
        for (let x = spacing / 2; x < width; x += spacing) {
          for (let y = spacing / 2; y < height; y += spacing) {
            const wave = Math.sin(time * 0.002 + (x + y) * 0.05) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${0.2 + wave * 0.3})`;
            ctx.fill();
          }
        }
      }

    },
    [isHovered, mousePos, revealRadius]
  );

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const loop = (time: number) => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      renderCanvas(ctx, canvas.width, canvas.height, time);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [renderCanvas]);

  // Handle Mouse Movement for Spotlight Lens
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const x = (px / rect.width) * 100;
    const y = (py / rect.height) * 100;

    setMousePos({ x, y, px, py });
  };

  const clipPathStyle = isHovered
    ? `circle(${revealRadius}px at ${mousePos.x}% ${mousePos.y}%)`
    : `circle(0px at 50% 50%)`;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center select-none">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full w-full overflow-hidden bg-transparent cursor-crosshair group"
      >
        {/* Layer 1: Dotted Matrix Canvas Animation (Idle Base View - No Front Masked Image) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />

        {/* Layer 2: Real Face Photo Revealed Under Cursor Spotlight Lens */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-20 transition-[clip-path] duration-150 ease-out"
          style={{
            WebkitClipPath: clipPathStyle,
            clipPath: clipPathStyle,
          }}
        >
          <img
            src={revealedImgSrc}
            alt="Revealed Face Portrait"
            className="w-full h-full object-contain object-center scale-100 filter brightness-105 contrast-105 transition-transform duration-200 ease-out"
          />

          {/* Glowing Cyber Accent Ring around Reveal Spotlight */}
          <div
            className="absolute rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none"
            style={{
              width: `${revealRadius * 2}px`,
              height: `${revealRadius * 2}px`,
              left: `${mousePos.px - revealRadius}px`,
              top: `${mousePos.py - revealRadius}px`,
              display: isHovered ? "block" : "none",
            }}
          />
        </div>

        {/* Layer 3: Corner Bracket Cyber Hover Badge (Matching Reference Screenshot) */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 transition-all duration-300">
            <div
              className={`relative px-5 py-2.5 bg-black/85 text-white font-mono text-xs sm:text-sm tracking-widest shadow-2xl backdrop-blur-md transition-all duration-300 ${
                isHovered ? "border-cyan-400 text-cyan-200 scale-105" : "text-zinc-200"
              }`}
            >
              {/* Corner Brackets */}
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/90" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/90" />
              <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/90" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/90" />

              <span>{isHovered ? "Face revealed" : "Hover to reveal"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityFaceReveal;
