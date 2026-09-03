"use client";

import React, { useRef, useEffect, useState } from "react";

const UI_UX_TAGS = [
  "✨ Design Thinking",
  "🔍 User Research",
  "📐 Wireframing",
  "🎨 Design Systems",
  "⚡ Micro-Interactions",
  "🗺️ User Journey Mapping",
  "🧪 Usability Testing",
  "💡 Product Strategy",
  "📲 Interactive Prototyping",
  "🚀 Information Architecture",
];

interface FloatingTag {
  id: number;
  text: string;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  offsetY: number;
}

export const InteractiveMeshBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tags, setTags] = useState<FloatingTag[]>([]);
  const lastSpawnTimeRef = useRef<number>(0);
  const tagIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid configuration
    const spacing = 50;
    const cols = Math.floor(width / spacing) + 3;
    const rows = Math.floor(height / spacing) + 3;

    interface Node {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
    }

    let nodes: Node[][] = [];

    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodes = [];

      for (let r = 0; r < rows; r++) {
        const rowNodes: Node[] = [];
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacing - spacing;
          const baseY = r * spacing - spacing;
          rowNodes.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
          });
        }
        nodes.push(rowNodes);
      }
    };

    initGrid();

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;

      // ONLY spawn UI/UX tags when hovering strictly inside #hero-section (and outside photo card)
      const targetEl = e.target as HTMLElement | null;
      const isOverHeroSection = targetEl?.closest("#hero-section");
      const isOverPhotoCard = targetEl?.closest(".group") || targetEl?.closest(".cursor-crosshair");

      if (isOverHeroSection && !isOverPhotoCard) {
        const now = Date.now();
        if (now - lastSpawnTimeRef.current > 450) {
          lastSpawnTimeRef.current = now;
          const randomTagText =
            UI_UX_TAGS[Math.floor(Math.random() * UI_UX_TAGS.length)];
          const newId = tagIdRef.current++;

          setTags((prev) => [
            ...prev.slice(-6), // Keep max 7 tags on screen for crisp performance
            {
              id: newId,
              text: randomTagText,
              x: e.clientX,
              y: e.clientY - 25,
              opacity: 1,
              scale: 1.0,
              offsetY: 0,
            },
          ]);
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse position interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Update node positions with fluid wave motion & hover displacement
      for (let r = 0; r < nodes.length; r++) {
        for (let c = 0; c < nodes[r].length; c++) {
          const node = nodes[r][c];

          // Ambient subtle floating wave (Low strength)
          const waveX = Math.sin(time + r * 0.25 + c * 0.2) * 5;
          const waveY = Math.cos(time + r * 0.2 + c * 0.25) * 5;

          let targetX = node.baseX + waveX;
          let targetY = node.baseY + waveY;

          // Mouse Hover Interactive Deformation
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 32;
            const angle = Math.atan2(dy, dx);
            targetX -= Math.cos(angle) * force;
            targetY -= Math.sin(angle) * force;
          }

          node.x += (targetX - node.x) * 0.15;
          node.y += (targetY - node.y) * 0.15;
        }
      }

      // Draw Low-Opacity Mesh Lines
      for (let r = 0; r < nodes.length; r++) {
        for (let c = 0; c < nodes[r].length; c++) {
          const node = nodes[r][c];

          // Horizontal grid line
          if (c < nodes[r].length - 1) {
            const right = nodes[r][c + 1];
            const distMouse = Math.hypot(
              mouse.x - (node.x + right.x) / 2,
              mouse.y - (node.y + right.y) / 2
            );

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(right.x, right.y);

            if (distMouse < 220) {
              const alpha = (1 - distMouse / 220) * 0.85;
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.28 + alpha})`;
              ctx.lineWidth = 2.0;
            } else {
              ctx.strokeStyle = "rgba(255, 255, 255, 0.22)"; // Highly visible mesh grid line
              ctx.lineWidth = 1.15;
            }
            ctx.stroke();
          }

          // Vertical grid line
          if (r < nodes.length - 1) {
            const bottom = nodes[r + 1][c];
            const distMouse = Math.hypot(
              mouse.x - (node.x + bottom.x) / 2,
              mouse.y - (node.y + bottom.y) / 2
            );

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(bottom.x, bottom.y);

            if (distMouse < 220) {
              const alpha = (1 - distMouse / 220) * 0.85;
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.28 + alpha})`;
              ctx.lineWidth = 2.0;
            } else {
              ctx.strokeStyle = "rgba(255, 255, 255, 0.22)"; // Highly visible mesh grid line
              ctx.lineWidth = 1.15;
            }
            ctx.stroke();
          }

          // Glowing nodes around hover point
          const distToMouse = Math.hypot(mouse.x - node.x, mouse.y - node.y);
          if (distToMouse < 180) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${(1 - distToMouse / 180) * 0.95})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Update floating tag animations (fade out & float up over time)
  useEffect(() => {
    if (tags.length === 0) return;

    const interval = setInterval(() => {
      setTags((prevTags) =>
        prevTags
          .map((tag) => ({
            ...tag,
            offsetY: tag.offsetY - 1.2,
            opacity: tag.opacity - 0.025,
            scale: Math.min(1.15, tag.scale + 0.008),
          }))
          .filter((tag) => tag.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [tags.length]);

  return (
    <>
      {/* High-Visibility Dynamic Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Prominent Floating UI/UX Skill Tags Spawning on Mouse Hover */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="absolute transition-transform ease-out font-mono text-sm sm:text-base font-extrabold px-5 py-2.5 rounded-2xl border-2 border-blue-400 bg-zinc-950/95 text-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.65)] backdrop-blur-lg flex items-center gap-2.5 tracking-wide scale-110"
            style={{
              left: `${tag.x}px`,
              top: `${tag.y}px`,
              opacity: tag.opacity,
              transform: `translate(-50%, calc(-100% + ${tag.offsetY}px)) scale(${tag.scale})`,
            }}
          >
            <span>{tag.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default InteractiveMeshBackground;
