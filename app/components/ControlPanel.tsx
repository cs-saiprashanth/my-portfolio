"use client";

import React, { useState } from "react";
import { Sliders, Image as ImageIcon, Sparkles, User, Palette, Zap, Check, Upload, X } from "lucide-react";

export interface ControlPanelProps {
  name: string;
  setName: (v: string) => void;
  role: string;
  setRole: (v: string) => void;
  gridColor: "white" | "cyan" | "red" | "emerald";
  setGridColor: (v: "white" | "cyan" | "red" | "emerald") => void;
  revealRadius: number;
  setRevealRadius: (v: number) => void;
  autoScanSpeed: number;
  setAutoScanSpeed: (v: number) => void;
  onCustomPhotoUpload: (maskedUrl: string, revealedUrl: string) => void;
  onResetPhotos: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  name,
  setName,
  role,
  setRole,
  gridColor,
  setGridColor,
  revealRadius,
  setRevealRadius,
  autoScanSpeed,
  setAutoScanSpeed,
  onCustomPhotoUpload,
  onResetPhotos,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customRevealedFile, setCustomRevealedFile] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomRevealedFile(result);
        onCustomPhotoUpload(result, result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-mono text-xs font-semibold shadow-xl shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95 border border-blue-400/40"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Sliders className="w-4 h-4" />}
        <span>{isOpen ? "Close Controls" : "Customize Animation & Photo"}</span>
      </button>

      {/* Control Panel Drawer / Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-zinc-950/95 border border-zinc-800 backdrop-blur-xl rounded-2xl p-5 shadow-2xl text-zinc-200 text-xs font-sans space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2 font-mono font-bold text-sm text-zinc-100">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Face Reveal Settings</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Headline Text Settings */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 font-mono text-zinc-400">
              <User className="w-3.5 h-3.5 text-blue-400" /> Name Title
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1.5 font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Subtitle / Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
            />
          </div>

          {/* Wireframe Grid Theme Colors */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 font-mono text-zinc-400">
              <Palette className="w-3.5 h-3.5 text-blue-400" /> Security Grid Color
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: "white", name: "Classic", bg: "bg-zinc-200 text-zinc-950" },
                { id: "cyan", name: "Cyber Cyan", bg: "bg-cyan-500 text-zinc-950" },
                { id: "red", name: "Alert Red", bg: "bg-red-500 text-white" },
                { id: "emerald", name: "Matrix", bg: "bg-emerald-500 text-zinc-950" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setGridColor(c.id as any)}
                  className={`py-1.5 px-2 rounded-lg font-mono text-[10px] font-semibold border transition-all ${
                    gridColor === c.id
                      ? `${c.bg} border-white shadow-md scale-105`
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Reveal Lens Radius Slider */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-zinc-400">
              <span>Reveal Lens Size</span>
              <span className="text-blue-400">{revealRadius}px</span>
            </div>
            <input
              type="range"
              min={90}
              max={260}
              value={revealRadius}
              onChange={(e) => setRevealRadius(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          {/* Auto Scan Speed Toggle */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 font-mono text-zinc-400">
              <Zap className="w-3.5 h-3.5 text-blue-400" /> Auto-Laser Scan Speed
            </label>
            <div className="flex gap-2 font-mono">
              {[
                { val: 0, label: "OFF" },
                { val: 1, label: "NORMAL" },
                { val: 2, label: "FAST" },
              ].map((s) => (
                <button
                  key={s.val}
                  onClick={() => setAutoScanSpeed(s.val)}
                  className={`flex-1 py-1.5 rounded-lg border text-[11px] transition-all ${
                    autoScanSpeed === s.val
                      ? "bg-blue-600 text-white border-blue-400 font-bold"
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Upload Custom Photo Section */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <label className="flex items-center gap-1.5 font-mono text-zinc-400">
              <ImageIcon className="w-3.5 h-3.5 text-blue-400" /> Upload Your Photo
            </label>
            <div className="flex items-center gap-2">
              <label className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-zinc-900 hover:bg-zinc-850 border border-dashed border-zinc-700 hover:border-blue-500 rounded-lg cursor-pointer text-zinc-300 font-mono text-[11px] transition-all">
                <Upload className="w-3.5 h-3.5 text-blue-400" />
                <span>Choose Custom Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {customRevealedFile && (
                <button
                  onClick={() => {
                    setCustomRevealedFile(null);
                    onResetPhotos();
                  }}
                  className="px-2.5 py-2 bg-zinc-800 hover:bg-red-950 text-zinc-400 hover:text-red-300 rounded-lg border border-zinc-700 font-mono text-[10px]"
                  title="Reset to default photos"
                >
                  Reset
                </button>
              )}
            </div>
            <p className="text-[10px] text-zinc-500 leading-normal">
              Upload your face photo to test the interactive security wireframe overlay & reveal effect live!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
