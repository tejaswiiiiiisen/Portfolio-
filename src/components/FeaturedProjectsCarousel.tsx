"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Play, ArrowRight, ArrowLeft, ExternalLink, ChevronDown, Bot, Sparkles, Layers } from "lucide-react";

interface FeaturedProject {
  id: string;
  number: string;
  titleWhite: string;
  titleOrange: string;
  subtitle: string;
  image: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isAi?: boolean;
}

const featuredProjectsList: FeaturedProject[] = [
  {
    id: "taskflow-kanban",
    number: "01",
    titleWhite: "TASKFLOW",
    titleOrange: "KANBAN",
    subtitle: "Agile project orchestration tool with optimistic UI drag-and-drop",
    image: "/projects/kanban-board-preview.jpg",
    accentColor: "#ff8800",
    glowColor: "rgba(255, 136, 0, 0.5)",
    tags: ["Stack // MERN", "State // Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: "ai-chate",
    number: "02",
    titleWhite: "AI CHATBOT /",
    titleOrange: "AI CHATE",
    subtitle: "DevConnect autonomous agent collaborative workspace",
    image: "/projects/aichat-preview.jpg",
    accentColor: "#00d2ff",
    glowColor: "rgba(0, 210, 255, 0.5)",
    tags: ["Engine // Gemini API", "Core // Next.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    isAi: true,
  },
  {
    id: "pulsepay-fintech",
    number: "03",
    titleWhite: "PULSEPAY",
    titleOrange: "FINTECH",
    subtitle: "Real-time expense splitter & transaction analytics dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.5)",
    tags: ["Engine // Express", "Database // MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: "smart-library",
    number: "04",
    titleWhite: "SMART",
    titleOrange: "LIBRARY",
    subtitle: "Multi-threaded asset tracking and inventory management",
    image: "https://images.unsplash.com/photo-1507842229451-7f01be7fe7ab?auto=format&fit=crop&w=800&q=80",
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.5)",
    tags: ["Core // Java", "Architecture // Spring"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
];

export default function FeaturedProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTime = useRef<number>(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < featuredProjectsList.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : featuredProjectsList.length - 1));
  };

  // Horizontal mouse scroll handling
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 300) return;

    if (e.deltaY > 15 || e.deltaX > 15) {
      handleNext();
      lastScrollTime.current = now;
    } else if (e.deltaY < -15 || e.deltaX < -15) {
      handlePrev();
      lastScrollTime.current = now;
    }
  };

  return (
    <section
      ref={containerRef}
      onWheel={handleWheel}
      className="relative z-20 w-full min-h-[90vh] bg-gradient-to-b from-[#060608] via-[#09090d] to-[#040405] text-white py-24 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden select-none"
    >
      {/* Deep moody amber ambient lighting & particles */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* 3D Perspective Wireframe Grid on the Floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] opacity-25 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,140,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,140,0,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          transform: "perspective(800px) rotateX(65deg) translateY(40px)",
          transformOrigin: "bottom center",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 10%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 10%, transparent 95%)",
        }}
      />

      {/* Kinetic Speed Lines & Directional Motion Arrows in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 z-0">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transform -translate-x-12" />
          <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent transform translate-x-16" />
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </div>
      </div>

      {/* Content Layout: Left Fixed Header + Right 3D Floating Glass Cards */}
      <div className="relative mx-auto max-w-7xl z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 min-h-[600px]">
        
        {/* ================= LEFT COLUMN: Heading & Navigator Indicator ================= */}
        <div className="flex items-start gap-6 sm:gap-8 shrink-0">
          {/* Vertical Dotted Scrolling Navigator Indicator */}
          <div className="flex flex-col items-center gap-3.5 pt-3">
            {featuredProjectsList.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3.5 h-3.5 bg-[#ff8800] shadow-[0_0_14px_#ff8800]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/50"
                  }`}
                  title={`Project 0${i + 1}`}
                >
                  {isActive && (
                    <span className="absolute -inset-1 rounded-full border border-orange-400/60 animate-ping opacity-75" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Heading */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              <span className="text-white block uppercase tracking-tight">
                03 // FEATURED
              </span>
              <span className="bg-gradient-to-r from-[#ff8800] via-[#ffaa33] to-[#ff6600] bg-clip-text text-transparent block mt-2 uppercase tracking-tight drop-shadow-[0_0_30px_rgba(255,136,0,0.65)]">
                PROJECTS
              </span>
            </h2>

            {/* Kinetic Arrow Cue */}
            <div className="mt-8 flex items-center gap-3 text-orange-400/80 font-mono text-xs">
              <span className="tracking-widest uppercase text-neutral-400">Sliding Stream</span>
              <span className="text-orange-400 font-bold">───▶</span>
            </div>

            {/* Quick Carousel Controls */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-white/15 bg-black/60 hover:bg-white/10 text-white transition-all shadow-md active:scale-95"
                title="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-orange-500/40 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 transition-all shadow-md active:scale-95"
                title="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-neutral-400 ml-2">
                0{activeIndex + 1} / 0{featuredProjectsList.length}
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: HORIZONTAL SEQUENCE OF MODERN 3D FLOATING GLASS CARDS ================= */}
        <div className="relative w-full lg:flex-1 h-[480px] sm:h-[520px] flex items-center justify-start overflow-visible">
          <div className="relative w-full flex items-center gap-8 pl-0 lg:pl-10">
            {featuredProjectsList.map((project, idx) => {
              // Calculate relative offset for horizontal sequence
              const offset = idx - activeIndex;

              // Only render visible cards in sliding stream
              if (offset < -1 || offset > 2) return null;

              const isPrimary = offset === 0;
              const isSecondary = offset === 1;

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: offset * 360,
                    scale: isPrimary ? 1 : isSecondary ? 0.92 : 0.85,
                    opacity: isPrimary ? 1 : isSecondary ? 0.75 : 0.4,
                    rotateY: isPrimary ? -4 : isSecondary ? 4 : 8,
                    rotateX: isPrimary ? 2 : 0,
                    zIndex: isPrimary ? 30 : 20 - Math.abs(offset),
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  className={`absolute top-0 w-[310px] sm:w-[360px] md:w-[390px] rounded-3xl p-4 sm:p-5 border border-white/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] transition-shadow duration-500 group/card ${
                    isPrimary
                      ? "shadow-[0_35px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(255,136,0,0.18)]"
                      : "hover:opacity-90 cursor-pointer"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Glowing Rounded Inner Bezel Screen Preview */}
                  <div
                    className="relative rounded-2xl p-1 overflow-hidden shadow-inner aspect-[16/10] bg-black/90"
                    style={{
                      border: `2px solid ${isPrimary ? project.accentColor : "rgba(255,255,255,0.15)"}`,
                      boxShadow: isPrimary
                        ? `0 0 25px ${project.glowColor}, inset 0 0 20px ${project.glowColor}`
                        : "none",
                    }}
                  >
                    {/* Screen Image / Digital Dashboard Preview */}
                    <img
                      src={project.image}
                      alt={project.titleWhite}
                      className="w-full h-full object-cover object-center rounded-xl"
                    />

                    {/* AI Neon Blue Badge if AI project */}
                    {project.isAi && (
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(0,210,255,0.5)]">
                        <Bot className="w-3 h-3 text-cyan-400" />
                        <span>AI ACTIVE</span>
                      </div>
                    )}

                    {/* Subtle Curved Glass Reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-80" />
                  </div>

                  {/* Card Bottom: Titles, Micro-Tags & Tactile Push Buttons */}
                  <div className="mt-4 flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight flex items-baseline gap-2">
                      <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {project.titleWhite}
                      </span>
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${project.accentColor}, #ffffff)`,
                          textShadow: `0 0 20px ${project.glowColor}`,
                        }}
                      >
                        {project.titleOrange}
                      </span>
                    </h3>

                    {/* Micro-Typography Tags */}
                    <div className="flex items-center gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tactile Push Buttons: GitHub & Live Demo */}
                    <div className="mt-2 pt-3 border-t border-white/10 flex items-center gap-3">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-xs font-mono font-medium text-white transition-all shadow-sm active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5 text-neutral-300" />
                        <span>GitHub</span>
                      </a>

                      {/* Live Demo Glowing Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl border font-bold text-xs font-mono transition-all active:scale-95 shadow-md"
                        style={{
                          borderColor: project.accentColor,
                          backgroundColor: `${project.accentColor}25`,
                          color: project.accentColor,
                          boxShadow: `0 0 16px ${project.glowColor}`,
                        }}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Navigation Cue with Animated Down Indicator & Glowing 4-Point Star */}
      <div className="relative mx-auto max-w-7xl mt-16 pt-6 border-t border-white/10 flex items-center justify-between z-10 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span>Scroll horizontally or up/down to browse</span>
          <ChevronDown className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
        </div>

        {/* Ambient Glowing 4-Point Star */}
        <span className="text-white text-base drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse">
          ✦
        </span>
      </div>
    </section>
  );
}
