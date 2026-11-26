"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: string;
}

const allTechItems: TechItem[] = [
  { id: "react", name: "React", category: "Library", color: "#06b6d4", icon: "react" },
  { id: "js", name: "JS", category: "Language", color: "#facc15", icon: "js" },
  { id: "html", name: "HTML5", category: "Markup", color: "#f97316", icon: "html" },
  { id: "tailwind", name: "Tailwind", category: "Styling", color: "#38bdf8", icon: "tailwind" },
  { id: "node", name: "Node", category: "Runtime", color: "#22c55e", icon: "node" },
  { id: "express", name: "Express", category: "Framework", color: "#ffffff", icon: "express" },
  { id: "sql", name: "SQL", category: "Database", color: "#0284c7", icon: "sql" },
  { id: "mongodb", name: "MongoDB", category: "Database", color: "#10b981", icon: "mongodb" },
  { id: "java", name: "Java", category: "Language", color: "#f97316", icon: "java" },
];

// Chunk into groups of 4
const PAGE_SIZE = 4;
const totalPages = Math.ceil(allTechItems.length / PAGE_SIZE);

export default function CoreTechBento() {
  const [page, setPage] = useState<number>(0);

  // Auto-scroll through 4 technologies at a time every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentFour = allTechItems.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const renderIcon = (type: string, color: string) => {
    switch (type) {
      case "react":
        return (
          <svg className="w-5 h-5 text-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case "js":
        return (
          <div className="w-5 h-5 rounded bg-[#facc15] text-black font-extrabold text-[10px] flex items-center justify-center font-mono shadow-[0_0_8px_rgba(250,204,21,0.6)]">
            JS
          </div>
        );
      case "html":
        return (
          <svg className="w-5 h-5 text-[#f97316] drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 5l2 14 7 3 7-3 2-14-9-3zm6 5.5l-.2 2.5H8.3l.2 2H17l-.5 6-4.5 1.5-4.5-1.5-.3-3.5h2.2l.1 1.7 2.5.8 2.5-.8.3-2.7H6.2l-.7-6.5h12.5z" />
          </svg>
        );
      case "tailwind":
        return (
          <svg className="w-5 h-5 text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 5.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-.9-2.5-1.7C16.4 7.5 14.9 6 12 6zM6 12c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7.9 2.5 1.7C8.6 17.7 10.1 19.2 13 19.2c2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.8-2.8-5.7-2.8z" />
          </svg>
        );
      case "node":
        return (
          <svg className="w-5 h-5 text-[#22c55e] drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4L12 22l-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
            <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        );
      case "express":
        return (
          <div className="w-5 h-5 flex items-center justify-center font-bold text-xs tracking-tighter text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] font-mono">
            ex
          </div>
        );
      case "sql":
        return (
          <svg className="w-5 h-5 text-[#0284c7] drop-shadow-[0_0_8px_rgba(2,132,199,0.7)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case "mongodb":
        return (
          <svg className="w-5 h-5 text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 2 11 2.3 10.7 2.7C8.5 5.8 7 9.8 7 13.5C7 17.5 9.5 21 12 22C14.5 21 17 17.5 17 13.5C17 9.8 15.5 5.8 13.3 2.7C13 2.3 12.5 2 12 2ZM12 4C13.2 6.5 15 9.8 15 13.5C15 16.5 13.5 19.3 12 20.3C10.5 19.3 9 16.5 9 13.5C9 9.8 10.8 6.5 12 4Z" />
          </svg>
        );
      case "java":
        return (
          <svg className="w-5 h-5 text-[#f97316] drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[440px] select-none pointer-events-auto">
      {/* Top Row: My Core Tech Stack (Auto-Scroller) + 3+ Months Experience */}
      <div className="flex items-stretch gap-2.5">
        {/* Card 1: My Core Tech Stack (Shows 4 at a time with smooth auto-scroll) */}
        <div className="relative flex-1 rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Header with Title & Page Indicators */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-neutral-200 tracking-wide">
              My Core Tech Stack
            </span>
            {/* Page Dots Indicator */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    page === i ? "w-3.5 bg-[#ff9900]" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  title={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 4 Technologies (2x2 Grid with smooth animated slide) */}
          <div className="relative h-[95px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-2 gap-2 h-full"
              >
                {currentFour.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-orange-500/30 transition-all"
                  >
                    <div className="flex items-center justify-center shrink-0">
                      {renderIcon(tech.icon, tech.color)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold text-white truncate leading-tight font-mono">
                        {tech.name}
                      </span>
                      <span className="text-[9px] text-neutral-400 truncate leading-tight">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Card 2: 3+ Months Experience */}
        <div className="w-[140px] sm:w-[150px] relative flex flex-col justify-center rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.7)] hover:border-orange-500/40 transition-all">
          <div className="pointer-events-none absolute top-2 right-2 text-orange-400/50 text-[10px] font-mono">
            +
          </div>
          <div className="text-xl sm:text-2xl font-black text-[#ff7a18] drop-shadow-[0_0_12px_rgba(255,122,24,0.4)] whitespace-nowrap">
            3+ Months
          </div>
          <div className="text-[11px] text-neutral-300 font-medium mt-0.5">
            Experience
          </div>
        </div>
      </div>

      {/* Bottom Row: 10+ Projects Completed */}
      <div className="flex items-center justify-between gap-2.5">
        {/* Card 3: 10+ Projects Completed */}
        <div className="flex-1 flex items-center justify-between rounded-xl border border-white/10 bg-black/55 px-3.5 py-2 backdrop-blur-2xl shadow-[0_6px_20px_rgba(0,0,0,0.7)] hover:border-orange-500/40 transition-all">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[#ff7a18] drop-shadow-[0_0_8px_rgba(255,122,24,0.4)]">
              10+
            </span>
            <span className="text-[11px] text-neutral-300 font-medium">
              Projects Completed
            </span>
          </div>
          <span className="text-orange-400/50 text-[10px]">✦</span>
        </div>
      </div>
    </div>
  );
}
