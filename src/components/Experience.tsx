"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Zap, ShieldCheck, Box, Activity } from "lucide-react";
import { asset } from "@/utils/assetPath";

export default function Experience() {
  const capabilities = [
    {
      icon: Cpu,
      title: "Real-Time Canvas & WebGL",
      description:
        "Frame-rate optimized rendering architectures, custom GLSL shaders, particle simulations, and interactive 3D camera controls.",
      skills: ["HTML5 Canvas 2D", "WebGL / Three.js", "GLSL Shaders", "DevicePixelRatio Scaling"],
    },
    {
      icon: Activity,
      title: "Kinetic Motion & Scrollytelling",
      description:
        "Cinematic scroll-driven choreography, spring physics, layout morphs, and micro-interactions that feel responsive to human touch.",
      skills: ["Framer Motion", "Scroll Scrubbing", "Velocity Physics", "Gesture Controls"],
    },
    {
      icon: Terminal,
      title: "Creative Engineering Architecture",
      description:
        "Type-safe Next.js App Router applications with zero hydration flash, sub-second TTFB, and flawless accessibility standards.",
      skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand / Redux"],
    },
    {
      icon: Box,
      title: "Performance & GPU Acceleration",
      description:
        "Aggressive image caching, memory pooling, multi-threaded Web Workers, and layout containment ensuring steady 120 FPS.",
      skills: ["Image Preloading", "Worker Threads", "OffscreenCanvas", "Paint Optimization"],
    },
  ];

  const timeline = [
    {
      period: "JUL 2026 — OCT 2026",
      role: "Full Stack Developer Intern (90 Days)",
      company: "Macenza",
      logo: "/experience/macenza-logo.png",
      detail:
        "Worked as a Full Stack Developer Intern at Macenza for 3 months (90 days), from July 2026 to October 2026. Gained hands-on experience developing real-world web applications including an HRMS (Human Resource Management System) and Hotel Management System. Contributed across E-commerce Development, Admin Dashboard Development, REST APIs, Database Management, User Authentication & Authorization, and Responsive Web Design. Handled frontend interfaces, backend functionality, API integrations, and troubleshooting technical issues throughout the SDLC.",
    },
  ];

  return (
    <section id="capabilities" className="relative z-20 w-full bg-[#030303] py-28 px-6 sm:px-12 md:px-20 lg:px-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Capabilities Section */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-1 text-xs font-mono text-sky-400 backdrop-blur-md mb-4">
            <Zap className="h-3.5 w-3.5" />
            <span>DISCIPLINES // CORE COMPETENCIES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Engineering Craftsmanship
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-xl font-light">
            Every interaction is built with surgical precision, mathematical grace, and extreme performance budgets.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{cap.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                    {cap.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {cap.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/5 bg-black/40 px-2 py-0.5 text-[11px] font-mono text-neutral-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Timeline Section */}
        <div id="experience" className="mt-32 pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3.5 py-1 text-xs font-mono text-purple-400 backdrop-blur-md mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>TRAJECTORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Industry Journey
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                Over six years spent collaborating with Silicon Valley seed-stage pioneers, luxury European fashion houses, and creative digital studios worldwide.
              </p>
            </div>

            <div className="md:w-2/3 space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {item.logo && (
                        <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                          <img src={asset(item.logo)} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <span className="font-mono text-xs text-sky-400 block">{item.period}</span>
                        <span className="text-xs font-mono text-neutral-400">{item.company}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
