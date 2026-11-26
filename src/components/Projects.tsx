"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Layers,
  Cpu,
  MonitorPlay,
  Zap,
  X,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "WebGL & 3D" | "Interactive App" | "Design System" | "Fintech";
  year: string;
  award?: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "neura-synth",
    title: "NEURA // Spatial WebGL Synthesizer",
    subtitle: "Awwwards Site of the Day & FWA Winner",
    category: "WebGL & 3D",
    year: "2024",
    award: "Awwwards SOTD",
    description:
      "A real-time 3D generative synthesizer powered by WebGL fragment shaders and Web Audio API. Visualizes sound waves in dynamic 3D topological meshes with zero latency.",
    longDescription:
      "Engineered an interactive spatial audio visualizer combining Web Audio API frequency analysis with real-time GLSL fragment shaders. Implemented adaptive level-of-detail rendering to sustain steady 120 FPS across high-density mobile screens and desktop GPUs.",
    tags: ["Next.js 14", "WebGL", "Three.js", "Web Audio API", "Tailwind CSS"],
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Audio Latency", value: "< 2.8ms" },
      { label: "Community Users", value: "240K+" },
    ],
    accentColor: "from-sky-500 to-indigo-500",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "chronos-terminal",
    title: "CHRONOS // Algorithmic Trading HUD",
    subtitle: "Ultra Low-Latency Canvas Visualization",
    category: "Fintech",
    year: "2024",
    award: "DevPost First Prize",
    description:
      "Next-generation financial analytics suite utilizing HTML5 high-frequency 2D Canvas rendering to stream 100,000+ data points per second with zero UI jank.",
    longDescription:
      "Architected a custom dual-buffer canvas engine that decouples data stream ingestion from rendering cycles. Designed a brutalist dark aesthetic with tactile hotkeys, customizable widget docking, and instant telemetry feeds.",
    tags: ["React", "TypeScript", "HTML5 Canvas", "WebSockets", "Framer Motion"],
    metrics: [
      { label: "Throughput", value: "100k pts/s" },
      { label: "Render Time", value: "0.4ms" },
      { label: "Memory Footprint", value: "< 45MB" },
    ],
    accentColor: "from-amber-400 to-orange-500",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "aether-drone",
    title: "AETHER // Autonomous Fleet Telemetry",
    subtitle: "Realtime Geospatial Command Center",
    category: "Interactive App",
    year: "2023",
    award: "UX Design Award",
    description:
      "Geospatial drone mission controller rendering 3D flight paths, obstacle avoidance boundaries, and live camera overlays in an intuitive dark glass cockpit.",
    longDescription:
      "Developed an interactive dashboard for autonomous UAV operations. Integrated vector tile rendering with physics-based smooth tracking cameras, automated mission timeline scrubbing, and predictive collision warnings.",
    tags: ["Next.js", "Mapbox GL", "WebRTC", "Zustand", "Tailwind"],
    metrics: [
      { label: "UAV Streams", value: "64 Live" },
      { label: "Sync Accuracy", value: "±5ms" },
      { label: "Telemetry Uptime", value: "99.99%" },
    ],
    accentColor: "from-emerald-400 to-teal-500",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "kinetix-ui",
    title: "KINETIX // Kinetic Design System",
    subtitle: "Micro-Interaction Engine & Shader Primitives",
    category: "Design System",
    year: "2023",
    award: "Open Source Highlight",
    description:
      "A modular UI component ecosystem built for high-end digital brands. Features physics-based spring animations, cursor magnetics, and glass refraction shaders.",
    longDescription:
      "Created an open-source design library focused on tactile emotional micro-interactions. Includes spring physics hooks, fluid layout morphing, dynamic blur filters, and accessible keyboard navigation.",
    tags: ["Framer Motion", "Tailwind CSS", "Storybook", "TypeScript", "Nano UI"],
    metrics: [
      { label: "Components", value: "48+" },
      { label: "GitHub Stars", value: "4.8K" },
      { label: "Bundle Size", value: "< 8KB" },
    ],
    accentColor: "from-purple-400 to-pink-500",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "WebGL & 3D", "Interactive App", "Fintech", "Design System"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative z-20 w-full bg-[#030303] py-28 px-6 sm:px-12 md:px-20 lg:px-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-gradient-to-b from-sky-500/5 via-purple-500/5 to-transparent blur-3xl" />

      {/* Section Header */}
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-sky-400 backdrop-blur-md mb-4">
              <Layers className="h-3.5 w-3.5" />
              <span>SELECTED ARCHIVE (2023 - 2024)</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-xl font-light">
              High-performance web applications, generative canvas sculptures, and bespoke creative engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                    : "border border-white/10 bg-white/5 text-neutral-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Glass-Morphism Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-sky-500/10 glow-card"
            >
              {/* Subtle top corner ambient glow */}
              <div
                className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.accentColor} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30`}
              />

              <div>
                {/* Header row: Year & Award badge */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-neutral-500">{project.year} // {project.category}</span>
                  {project.award && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      {project.award}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-400">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/5 bg-black/40 p-3.5 backdrop-blur-md">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:text-sky-400 transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0a0a0a] p-6 sm:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Cpu className="h-4 w-4" />
                <span>CASE STUDY BRIEF // {activeModalProject.category}</span>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1 font-mono">
                {activeModalProject.subtitle}
              </p>

              <div className="mt-6 border-y border-white/10 py-5">
                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  Technical Architecture
                </h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                  {activeModalProject.longDescription}
                </p>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {activeModalProject.metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase">{m.label}</span>
                    <p className="text-base font-bold text-white mt-1">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <div className="text-xs font-mono text-neutral-400 mb-2">INTEGRATED TECHNOLOGIES</div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-mono text-neutral-300 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-black px-6 py-2.5 text-xs font-bold transition-all shadow-lg shadow-sky-500/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Inspect Codebase</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
