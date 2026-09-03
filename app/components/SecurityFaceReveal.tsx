"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Scan, Lock } from "lucide-react";
import { getAssetPath } from "../lib/asset";

export interface SecurityRevealProps {
  maskedImgSrc?: string;
  revealedImgSrc?: string;
  gridColor?: "white" | "cyan" | "red" | "emerald";
  revealRadius?: number;
  autoScanSpeed?: number;
  showHudText?: boolean;
}

export const SecurityFaceReveal: React.FC<SecurityRevealProps> = ({
  maskedImgSrc = getAssetPath("/masked.jpg"),
  revealedImgSrc = getAssetPath("/revealed.jpg"),
  gridColor = "white",
  revealRadius = 175,
  autoScanSpeed = 1,
  showHudText = true,
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

  const [scanLineY, setScanLineY] = useState(0);

  // Canvas drawing loop for Cyber Laser Scan Beam
  const drawSecurityMesh = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.clearRect(0, 0, width, height);

      let strokeStyleHex = "#ffffff";
      if (gridColor === "cyan") strokeStyleHex = "#06b6d4";
      if (gridColor === "red") strokeStyleHex = "#ef4444";
      if (gridColor === "emerald") strokeStyleHex = "#10b981";

      if (autoScanSpeed > 0) {
        const laserY = (Math.sin(time * 0.0015 * autoScanSpeed) * 0.5 + 0.5) * height;
        setScanLineY(laserY);

        // Laser beam gradient
        const grad = ctx.createLinearGradient(0, laserY - 14, 0, laserY + 14);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, strokeStyleHex);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.fillRect(width * 0.08, laserY - 12, width * 0.84, 24);

        // Core laser line
        ctx.beginPath();
        ctx.moveTo(width * 0.06, laserY);
        ctx.lineTo(width * 0.94, laserY);
        ctx.strokeStyle = strokeStyleHex;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = strokeStyleHex;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    },
    [gridColor, autoScanSpeed]
  );

  // Animation Loop for Laser Beam
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = (time: number) => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      drawSecurityMesh(ctx, canvas.width, canvas.height, time);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [drawSecurityMesh]);

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
    <div className="relative flex flex-col items-center justify-center w-full select-none">
      {/* Outer Glow Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl transition-shadow duration-500 hover:shadow-blue-900/50 group cursor-crosshair max-w-[620px] w-full aspect-[4/4.4]"
      >
        {/* Layer 1: Masked 1st Image (Base View: Beanie & Mask Portrait) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={maskedImgSrc}
            alt="1st Security Masked Image"
            className="w-full h-full object-cover object-[center_top] filter brightness-95 contrast-105"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
        </div>

        {/* Layer 2: Laser Scan Beam */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-95"
        />

        {/* Layer 3: 2nd Revealed Real Face Photo (Spotlight Lens Clip-Path under Cursor) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-none"
          style={{
            WebkitClipPath: clipPathStyle,
            clipPath: clipPathStyle,
          }}
        >
          <img
            src={revealedImgSrc}
            alt="2nd Revealed Face Image"
            className="w-full h-full object-cover object-[center_top] scale-100"
          />
          {/* Glowing Ring Accent around Cursor Lens Spotlight */}
          <div
            className="absolute rounded-full border-2 border-blue-400/70 shadow-[0_0_25px_rgba(59,130,246,0.8)] pointer-events-none"
            style={{
              width: `${revealRadius * 2}px`,
              height: `${revealRadius * 2}px`,
              left: `${mousePos.px - revealRadius}px`,
              top: `${mousePos.py - revealRadius}px`,
              display: isHovered ? "block" : "none",
            }}
          />
        </div>

        {/* Layer 4: Floating Security HUD UI elements */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-5 z-20">
          {/* Top HUD bar */}
          <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-zinc-200 font-semibold tracking-wider">
                {isHovered ? "REVEALING 2ND IMAGE" : "SECURITY MASK ACTIVE"}
              </span>
            </div>
            {showHudText && (
              <div className="hidden sm:flex items-center gap-2 text-zinc-400 bg-black/50 px-2 py-1 rounded border border-white/10">
                <Lock className="w-3 h-3 text-blue-400" />
                <span>ID: #892-SEC</span>
              </div>
            )}
          </div>

          {/* Center Badge: "Hover to reveal" */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 transition-all duration-300">
            <div
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg border backdrop-blur-md font-mono text-sm tracking-wider shadow-xl transition-all duration-300 ${
                isHovered
                  ? "bg-blue-950/90 border-blue-400/80 text-blue-200 shadow-blue-500/30 scale-105"
                  : "bg-black/80 border-zinc-700 text-zinc-100 hover:border-zinc-500 glow-pill"
              }`}
            >
              <span className="text-blue-400 font-bold text-base">[</span>
              <Scan className={`w-4 h-4 ${isHovered ? "text-blue-400 animate-spin" : "text-zinc-400"}`} />
              <span className="font-medium tracking-wide">
                {isHovered ? "Hovering to Reveal" : "Hover to reveal"}
              </span>
              <span className="text-blue-400 font-bold text-base">]</span>
            </div>
          </div>

          {/* Bottom HUD Bar */}
          <div className="flex items-end justify-between font-mono text-[10px] text-zinc-500">
            <div>
              <div className="text-zinc-300 font-bold">CYBER MASK SEC-V2</div>
              <div>X: {mousePos.x.toFixed(0)}% Y: {mousePos.y.toFixed(0)}%</div>
            </div>
            <div className="text-right">
              <div className="text-blue-400 font-semibold font-mono">GRID: WHITE</div>
              <div>AUTO SCAN: ON</div>
            </div>
          </div>
        </div>

        {/* Frame Corner Accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500/80 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500/80 pointer-events-none" />
      </div>
    </div>
  );
};

export default SecurityFaceReveal;
