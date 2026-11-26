"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export interface ProjectItem {
  id: number;
  number: string;
  titleWhite: string;
  titleOrange: string;
  cardTitle: string;
  subtitle: string;
  category: "Full-Stack" | "Frontend & 3D" | "Java & Systems";
  description: string;
  image: string;
  tags: string[];
  mockupAccent: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects10Data: ProjectItem[] = [
  {
    id: 1,
    number: "01",
    titleWhite: "TASKFLOW",
    titleOrange: "KANBAN",
    cardTitle: "01. TASKFLOW KANBAN",
    subtitle: "Agile project orchestration tool with optimistic UI drag-and-drop",
    category: "Full-Stack",
    description:
      "Agile project orchestration tool with optimistic UI drag-and-drop card reordering, granular role-based access control, sprint velocity trackers, and real-time activity audit streams.",
    image: "/projects/octocat-screen.jpg",
    tags: ["Stack // MERN", "Auth // JWT", "State // Redux", "UI // Tailwind"],
    mockupAccent: "#ff8800",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 2,
    number: "02",
    titleWhite: "NEXUS API",
    titleOrange: "GATEWAY",
    cardTitle: "02. NEXUS API GATEWAY",
    subtitle: "High-throughput REST & GraphQL rate-limiting dashboard",
    category: "Full-Stack",
    description:
      "Enterprise microservice routing layer handling over 250k req/sec with Redis sliding-window token bucket throttling, distributed JWT validation, and real-time telemetry streaming pipelines.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Backend // Node.js", "Framework // Express", "Cache // Redis", "Lang // TypeScript"],
    mockupAccent: "#38bdf8",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 3,
    number: "03",
    titleWhite: "SMART LIBRARY",
    titleOrange: "SYSTEM",
    cardTitle: "03. SMART LIBRARY SYSTEM",
    subtitle: "Desktop & web catalog management with automated tracking",
    category: "Java & Systems",
    description:
      "Multi-threaded catalog inventory system managing 50,000+ catalogued assets with RFID barcode scanning integration, automated penalty algorithms, and relational ACID persistence.",
    image: "https://images.unsplash.com/photo-1507842229451-7f01be7fe7ab?auto=format&fit=crop&w=800&q=80",
    tags: ["Core // Java", "Architecture // Spring", "Database // MySQL", "UI // JavaFX"],
    mockupAccent: "#f97316",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 4,
    number: "04",
    titleWhite: "SKILLORAPATH",
    titleOrange: "EDTECH",
    cardTitle: "04. SKILLORAPATH EDTECH",
    subtitle: "Full-stack learning platform with progress & quiz engine",
    category: "Full-Stack",
    description:
      "Modern adaptive LMS featuring algorithmic learning pathways, interactive in-browser code sandboxes, dynamic quiz validation engines, and automated certificate generation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["Frontend // React", "Backend // Node.js", "Database // MongoDB", "Styling // Tailwind"],
    mockupAccent: "#a855f7",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 5,
    number: "05",
    titleWhite: "PULSEPAY",
    titleOrange: "FINTECH",
    cardTitle: "05. PULSEPAY FINTECH",
    subtitle: "Real-time expense splitter & transaction analytics app",
    category: "Full-Stack",
    description:
      "Peer-to-peer ledger reconciler featuring debt-minimization graph algorithms, multi-currency ledger conversions, and dynamic financial health visualizations with Chart.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Frontend // React", "Engine // Express", "Metrics // Chart.js", "Database // MongoDB"],
    mockupAccent: "#10b981",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 6,
    number: "06",
    titleWhite: "DEVCOLLAB",
    titleOrange: "STUDIO",
    cardTitle: "06. DEVCOLLAB STUDIO",
    subtitle: "Live multi-user code editor & room-based whiteboard",
    category: "Frontend & 3D",
    description:
      "Collaborative multiplayer development environment powered by Operational Transformation and WebSockets for sub-15ms multi-cursor synchronization and shared infinite canvases.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Sockets // Socket.io", "UI // React", "Backend // Node.js", "P2P // WebRTC"],
    mockupAccent: "#06b6d4",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 7,
    number: "07",
    titleWhite: "MARITIME",
    titleOrange: "ACADEMY",
    cardTitle: "07. MARITIME ACADEMY",
    subtitle: "Course booking & cadet inquiry platform with media showcase",
    category: "Full-Stack",
    description:
      "Institutional maritime training portal featuring multi-tier administrative workflows, digital cadet verification, secure tuition processing, and dynamic simulator schedule management.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    tags: ["Core // Next.js", "Styling // Tailwind", "Backend // Node.js", "Database // MongoDB"],
    mockupAccent: "#0ea5e9",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 8,
    number: "08",
    titleWhite: "TASKFLOW",
    titleOrange: "KANBAN",
    cardTitle: "08. TASKFLOW KANBAN",
    subtitle: "Drag-and-drop sprint manager with role-based auth",
    category: "Full-Stack",
    description:
      "Agile project orchestration tool with optimistic UI drag-and-drop card reordering, granular role-based access control, sprint velocity trackers, and real-time activity audit streams.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    tags: ["Stack // MERN", "Auth // JWT", "State // Redux", "UI // Tailwind"],
    mockupAccent: "#f59e0b",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 9,
    number: "09",
    titleWhite: "CLOUDVAULT",
    titleOrange: "STORAGE",
    cardTitle: "09. CLOUDVAULT STORAGE",
    subtitle: "Encrypted file upload, preview & shareable link manager",
    category: "Full-Stack",
    description:
      "Zero-knowledge client-side encrypted cloud storage service with chunked parallel file uploads, automated thumbnail compression workers, and time-expiring signed access URLs.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    tags: ["Runtime // Node.js", "Database // MongoDB", "Cloud // AWS S3", "Backend // Express"],
    mockupAccent: "#6366f1",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 10,
    number: "10",
    titleWhite: "AETHER WEATHER",
    titleOrange: "3D VISUALIZER",
    cardTitle: "10. AETHER WEATHER 3D",
    subtitle: "Live geolocation weather visualizer with dynamic shaders",
    category: "Frontend & 3D",
    description:
      "Hyper-local weather visualization platform rendering atmospheric pressure systems, wind particle vectors, and volumetric cloud precipitation in hardware-accelerated 3D shaders.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    tags: ["Core // JavaScript", "Graphics // WebGL", "API // REST Weather", "Styling // Tailwind"],
    mockupAccent: "#38bdf8",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
];

// Alias for backwards compatibility
export const projects15Data = projects10Data;

// Atmospheric Warm Embers & Lens Flare Particles Canvas Effect (inspired by image_6.png)
function SandSmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 500;
      height = canvas.height = canvas.offsetHeight || 300;
    };
    window.addEventListener("resize", onResize);

    interface EmberParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      life: number;
      maxLife: number;
      color: string;
      glow: number;
    }

    const particles: EmberParticle[] = [];
    const count = 55;

    const emberColors = [
      "rgba(255, 170, 50, ",
      "rgba(255, 120, 20, ",
      "rgba(255, 200, 100, ",
      "rgba(240, 90, 15, ",
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.45) * 0.5,
        vy: -(Math.random() * 0.7 + 0.2),
        size: Math.random() < 0.75 ? Math.random() * 2 + 1 : Math.random() * 4 + 2.5,
        alpha: Math.random() * 0.5,
        maxAlpha: Math.random() * 0.7 + 0.25,
        life: Math.random() * 120,
        maxLife: Math.random() * 160 + 80,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        glow: Math.random() * 12 + 4,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.03) * 0.4;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.alpha = (progress / 0.2) * p.maxAlpha;
        } else if (progress > 0.6) {
          p.alpha = ((1 - progress) / 0.4) * p.maxAlpha;
        }

        if (p.life >= p.maxLife || p.y < -15 || p.x > width + 20 || p.x < -20) {
          p.life = 0;
          p.x = Math.random() * width;
          p.y = height + Math.random() * 15;
          p.alpha = 0;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = "#ff8800";
        ctx.shadowBlur = p.glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}

interface SelectedProjectsProps {
  scrollYProgress?: MotionValue<number>;
}

export default function SelectedProjects({ scrollYProgress }: SelectedProjectsProps) {
  const [manualIdx, setManualIdx] = useState<number>(0);
  const [isManual, setIsManual] = useState<boolean>(false);

  const projects = projects10Data;

  // Track scroll progress to update active card index automatically
  useEffect(() => {
    if (!scrollYProgress || isManual) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Range: 0.48 to 0.82
      if (latest >= 0.48 && latest <= 0.82) {
        const progressInRange = (latest - 0.48) / (0.82 - 0.48);
        const nextIdx = Math.min(
          projects.length - 1,
          Math.max(0, Math.floor(progressInRange * projects.length))
        );
        setManualIdx(nextIdx);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isManual, projects.length]);

  const activeIdx = Math.min(manualIdx, projects.length - 1);
  const currentProject = projects[activeIdx] || projects[0];

  const handleSelectCard = (index: number) => {
    setIsManual(true);
    setManualIdx(index);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-8 md:p-12 pointer-events-auto select-none">
      {/* 3-Column Luxury Layout Framing the Fixed Portrait in Center */}
      <div className="relative w-full h-full flex items-center justify-between">
        
        {/* ================= LEFT COLUMN: 10-Project Sliding Window Wallet Stack ================= */}
        <div className="relative flex items-center gap-4 z-20 max-w-[90vw] sm:max-w-[420px] lg:max-w-[450px]">
          
          {/* Far-Left Vertical Progress Rail & Counter */}
          <div className="flex flex-col items-center justify-between self-stretch py-4">
            {/* Top Counter */}
            <div className="font-mono text-xs font-bold text-[#ff9900] tracking-wider drop-shadow-[0_0_8px_rgba(255,153,0,0.6)]">
              {currentProject.number}
            </div>

            {/* Vertical Dot Rail */}
            <div className="relative flex flex-col items-center gap-2 my-3 h-[250px] justify-center">
              <div className="absolute inset-y-0 w-[1px] bg-white/10" />
              {projects.map((p, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectCard(idx)}
                    className={`relative z-10 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2.5 h-2.5 bg-[#ff9900] shadow-[0_0_10px_#ff9900]"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/50"
                    }`}
                    title={p.titleWhite}
                  />
                );
              })}
            </div>

            {/* Bottom Total */}
            <div className="font-mono text-[10px] text-neutral-400">
              / {String(projects.length).padStart(2, "0")}
            </div>
          </div>

          {/* Cards Stack & Futuristic Retro Metallic TV Display */}
          <div className="flex flex-col items-center">
            {/* 3D-Layered Futuristic Smart Monitor Setup */}
            <div className="relative w-[320px] sm:w-[370px] lg:w-[410px] min-h-[340px] flex items-center justify-center">
              {/* Card 3 (Background Layered Monitor 2) */}
              {activeIdx > 1 && (
                <div
                  onClick={() => handleSelectCard(activeIdx - 2)}
                  className="absolute inset-x-2 top-0 h-[260px] rounded-3xl border border-white/10 bg-gradient-to-b from-[#2e3138] to-[#121316] p-2 shadow-2xl cursor-pointer transition-all duration-500 opacity-30 transform -translate-y-10 scale-[0.86] overflow-hidden"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-black/60 relative">
                    <img
                      src={projects[activeIdx - 2].image}
                      alt="Project preview"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </div>
              )}

              {/* Card 2 (Background Layered Monitor 1) */}
              {activeIdx > 0 && (
                <div
                  onClick={() => handleSelectCard(activeIdx - 1)}
                  className="absolute inset-x-1 top-0 h-[280px] rounded-3xl border border-white/15 bg-gradient-to-b from-[#3a3e47] to-[#17181c] p-2.5 shadow-2xl cursor-pointer transition-all duration-500 opacity-60 transform -translate-y-5 scale-[0.93] overflow-hidden"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-black/50 relative border border-amber-500/30">
                    <img
                      src={projects[activeIdx - 1].image}
                      alt="Project preview"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                </div>
              )}

              {/* Card 1: THE FOREGROUND RETRO-STYLE METALLIC TV DISPLAY (as seen in image_6.png) */}
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0.6, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-3xl bg-gradient-to-b from-[#565b66] via-[#33373f] to-[#1a1b1f] p-3 sm:p-3.5 border-2 border-[#6c7280] shadow-[0_28px_65px_rgba(0,0,0,0.95),0_0_35px_rgba(255,140,0,0.22)] transition-all z-10 group/card"
                style={{
                  transform: "perspective(1200px) rotateY(7deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Left Industrial Cooling Grille / Ventilation Slots */}
                <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
                  <div className="w-1 h-3.5 rounded-full bg-black/75 border-r border-white/20 shadow-inner" />
                  <div className="w-1 h-3.5 rounded-full bg-black/75 border-r border-white/20 shadow-inner" />
                  <div className="w-1 h-3.5 rounded-full bg-black/75 border-r border-white/20 shadow-inner" />
                  <div className="w-1 h-3.5 rounded-full bg-black/75 border-r border-white/20 shadow-inner" />
                  <div className="w-1 h-3.5 rounded-full bg-black/75 border-r border-white/20 shadow-inner" />
                </div>

                {/* Top Metallic Bevel Highlight */}
                <div className="absolute inset-x-6 top-1 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                {/* Recessed Screen Cavity */}
                <div className="relative rounded-2xl bg-[#0c0d10] p-2.5 sm:p-3 border border-black/90 shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)]">
                  {/* Glowing Curved Amber CRT Glass Screen Rim */}
                  <div className="relative rounded-xl border-2 border-[#ff9900]/85 shadow-[0_0_24px_rgba(255,153,0,0.65),inset_0_0_28px_rgba(255,153,0,0.5)] overflow-hidden aspect-[16/10] bg-black">
                    {/* Project Screen Image (Octocat or project screenshot) */}
                    <img
                      src={currentProject.image}
                      alt={currentProject.titleWhite}
                      className="w-full h-full object-cover object-center transform group-hover/card:scale-105 transition-transform duration-700"
                    />

                    {/* CRT Scanline Texture Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40 z-10" />

                    {/* Curved Glass Bulb Reflection Glare */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-80 z-10" />

                    {/* Amber Ambient Backlight Glow around edges */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/30 z-10" />
                  </div>
                </div>

                {/* Integrated Metallic Bezel Control Console with Tactile Push-Buttons */}
                <div className="mt-2.5 rounded-xl bg-gradient-to-b from-[#343840] via-[#24262c] to-[#17181b] border-t border-white/20 p-2 sm:p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] flex items-center justify-between gap-2.5">
                  {/* Dark Tactile GitHub Push-Button */}
                  <a
                    href={currentProject.githubUrl || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-b from-[#2a2c32] to-[#1a1b1f] border border-white/15 hover:border-white/35 text-xs font-mono font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.7)] active:translate-y-0.5 active:shadow-inner transition-all group/btn"
                  >
                    <Github className="w-3.5 h-3.5 text-neutral-300 group-hover/btn:text-white transition-colors" />
                    <span>GitHub</span>
                  </a>

                  {/* Glowing Amber 'Visit Now' Tactile Push-Button */}
                  <a
                    href={currentProject.liveUrl || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#ff9900] via-[#ff7a18] to-[#ff5500] hover:from-[#ffa726] hover:to-[#ff8a3d] text-black font-extrabold text-xs font-mono shadow-[0_0_20px_rgba(255,140,0,0.75),inset_0_1px_0_rgba(255,255,255,0.45),0_2px_4px_rgba(0,0,0,0.5)] active:translate-y-0.5 active:shadow-inner hover:brightness-110 transition-all group/btn"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                    <span>Visit Now</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= CENTER COLUMN: Clear Area for Portrait (Fixed & Crisp) ================= */}
        <div className="flex-1 pointer-events-none" />

        {/* ================= RIGHT COLUMN: Synced Project Information with Sand-Smoke Effect ================= */}
        <div className="relative flex flex-col items-start text-left z-20 max-w-[90vw] sm:max-w-[420px] lg:max-w-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 25, filter: "blur(12px)", scale: 0.98 }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, x: -20, filter: "blur(14px)", scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col"
            >
              {/* Atmospheric Warm Ember Mist Aura in Background */}
              <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_35%_45%,rgba(255,122,24,0.35)_0%,rgba(234,88,12,0.14)_45%,transparent_75%)] blur-3xl opacity-85" />

              {/* Eyebrow Label */}
              <div className="relative z-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                <span className="text-[#ff9900]">03 //</span> PROJECT INFORMATION
              </div>

              {/* Massive Bold Split-Color Headline with LIVE Embers Particles Canvas */}
              <div className="relative z-10">
                {/* 60fps Warm Embers particle canvas behind the headline letters */}
                <div className="absolute -inset-x-12 -inset-y-8 pointer-events-none z-0 overflow-hidden">
                  <SandSmokeCanvas />
                </div>

                <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                  <span className="text-white block uppercase tracking-tight drop-shadow-[0_0_24px_rgba(255,255,255,0.25)]">
                    {currentProject.titleWhite}
                  </span>
                  <span className="bg-gradient-to-r from-[#ff9900] via-[#ff7a18] to-[#ff5500] bg-clip-text text-transparent block mt-1 uppercase tracking-tight drop-shadow-[0_0_30px_rgba(255,122,24,0.7)] animate-sandSmokeGlow">
                    {currentProject.titleOrange}
                  </span>
                </h2>
              </div>

              {/* Concise Description Paragraph */}
              <p className="relative z-10 mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {currentProject.description}
              </p>

              {/* 4 Dark Pill-Shaped Tech Stack Tags with Glowing Amber Dots */}
              <div className="relative z-10 mt-5 grid grid-cols-2 gap-2.5 w-full">
                {currentProject.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-neutral-300 hover:border-orange-500/40 hover:text-white transition-all truncate shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900] shadow-[0_0_6px_#ff9900]" />
                    <span className="truncate">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Two Prominent Action Buttons in Project Details */}
              <div className="relative z-10 mt-5 flex items-center gap-3 w-full">
                <a
                  href={currentProject.githubUrl || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md hover:bg-white/10 hover:border-white/40 text-xs font-mono text-white transition-all shadow-sm active:scale-95"
                >
                  <Github className="w-4 h-4 text-neutral-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={currentProject.liveUrl || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ff7a18] hover:from-[#ffa726] hover:to-[#ff8a3d] text-black font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(255,153,0,0.55)] active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  <span>Visit Now</span>
                </a>
              </div>

              {/* Bottom Real-Time Cover Status Bar with Floating 4-Point Star */}
              <div className="relative z-10 mt-6 pt-3 border-t border-white/10 flex items-center justify-between w-full text-[10px] font-mono text-neutral-400">
                <span className="uppercase tracking-wider">
                  Cover revealed in real-time on stack change
                </span>
                <span className="text-white text-base drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse">
                  ✦
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
