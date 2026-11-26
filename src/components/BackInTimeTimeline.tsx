"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

export interface TimelineMilestone {
  id: string;
  year: string;
  dateRange: string;
  stepNumber: string;
  role: string;
  company: string;
  type: "work" | "education";
  accentColor: string;
  bullets: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "milestone-macenza",
    year: "2026",
    dateRange: "JUL 2026 — OCT 2026",
    stepNumber: "01",
    role: "Full Stack Developer Intern (90 Days)",
    company: "Macenza // Enterprise Systems",
    type: "work",
    accentColor: "#3B82F6",
    bullets: [
      "Worked as a Full Stack Developer Intern at Macenza for 3 months (90 days), developing real-world web applications and software systems including an HRMS (Human Resource Management System) and Hotel Management System.",
      "Contributed across E-commerce Development, Admin Dashboard Development, REST API Development, Database Management, User Authentication & Authorization (RBAC), and Responsive Web Design.",
      "Developed frontend interfaces, implemented backend functionality, integrated APIs, managed databases, handled user roles and permissions, and troubleshot complex technical issues throughout the complete SDLC.",
    ],
  },
  {
    id: "milestone-2026",
    year: "2026",
    dateRange: "OCT 2025 — PRESENT",
    stepNumber: "02",
    role: "Independent Freelancer & Creative Engineer",
    company: "Studio Vertex & Autonomous Clients",
    type: "work",
    accentColor: "#ff8800",
    bullets: [
      "Architecting flagship full-stack applications, interactive 3D WebGL experiences, and high-conversion client platforms.",
      "Deploying edge-rendered Next.js 14 applications with sub-second TTFB, strict type safety, and custom microservice integrations.",
      "Engineering tactile micro-interactions, canvas physics, and GPU-accelerated motion systems that scale across enterprise products.",
    ],
  },
  {
    id: "milestone-2025",
    year: "2025",
    dateRange: "2024 — 2025",
    stepNumber: "02",
    role: "Lead Interactive Developer & UI Engineer",
    company: "Nexus Labs & FinTech Ventures",
    type: "work",
    accentColor: "#2563EB",
    bullets: [
      "Spearheaded the design system and interactive component architecture for real-time FinTech trading dashboards.",
      "Reduced layout shifts and sustained steady 60–120 FPS GPU-accelerated animations across high-density desktop and mobile viewports.",
      "Integrated distributed WebSocket state synchronization pipelines with zero UI jank and low-latency client rendering.",
    ],
  },
  {
    id: "milestone-2024",
    year: "2024",
    dateRange: "2023 — 2024",
    stepNumber: "03",
    role: "UI/UX Designer & Product Strategist",
    company: "Kinetic Digital Design Studio",
    type: "work",
    accentColor: "#658C6F",
    bullets: [
      "Designed end-to-end user journeys, wireframes, and design systems for enterprise software products and venture portfolios.",
      "Built interactive clickable prototypes in Figma and conducted usability testing sessions that increased user engagement by 42%.",
      "Standardized WCAG 2.1 AAA accessible color tokens, dark mode guidelines, and cross-platform design specifications.",
    ],
  },
  {
    id: "milestone-2023",
    year: "2023",
    dateRange: "2022 — 2023",
    stepNumber: "04",
    role: "Software Engineering Intern",
    company: "Aether Cloud Systems",
    type: "work",
    accentColor: "#a855f7",
    bullets: [
      "Developed modular React frontend components and integrated secure RESTful authentication APIs with Node.js & Express.",
      "Wrote automated Jest and Cypress end-to-end integration test suites ensuring 90%+ code coverage.",
      "Contributed to database query optimization, reducing PostgreSQL response latencies by 38%.",
    ],
  },
  {
    id: "milestone-2019",
    year: "2019",
    dateRange: "2019 — 2023",
    stepNumber: "05",
    role: "B.Tech, Computer Science & Engineering",
    company: "Institute of Engineering & Technology",
    type: "education",
    accentColor: "#10b981",
    bullets: [
      "Rigorous academic curriculum covering Data Structures, Algorithms, Distributed Systems, Computer Networks, and DBMS.",
      "Graduated with First Class Honors; spearheaded campus web technology developer clubs and organized regional hackathons.",
      "Built foundational expertise in Java, C++, JavaScript, full-stack web architectures, and relational SQL database modeling.",
    ],
  },
];

export default function BackInTimeTimeline() {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(timelineMilestones[0].id);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeMilestone =
    timelineMilestones.find((m) => m.id === activeMilestoneId) || timelineMilestones[0];
  const activeIndex = timelineMilestones.findIndex((m) => m.id === activeMilestoneId);

  // Scroll spy to highlight only the timeline item currently centered in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;

      let closestId = timelineMilestones[0].id;
      let minDistance = Infinity;

      timelineMilestones.forEach((m) => {
        const el = itemRefs.current[m.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestId = m.id;
          }
        }
      });

      setActiveMilestoneId(closestId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="my-story" className="relative w-full pt-28 pb-32 border-t border-white/10 select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-12 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
        
        {/* ================= LEFT COLUMN: STICKY / PINNED ON SCROLL ================= */}
        <div className="lg:col-span-5 sticky top-28 sm:top-36 flex flex-col items-start z-10">
          {/* Muted Subhead */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A1A1AA] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff8800] animate-pulse" />
            <span>MY STORY // TIMELINE</span>
          </div>

          {/* Bold White Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Let&apos;s go back in time.
          </h2>

          <p className="mt-3 text-sm text-[#A1A1AA] font-light max-w-sm leading-relaxed">
            A chronological retrospective of software engineering, design systems, and academic milestones.
          </p>

          {/* DYNAMIC PROJECT NAME DISPLAY (Smoothly morphs on active scroll) */}
          <div className="my-6 sm:my-8 min-h-[110px] flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1.5"
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold"
                  style={{ color: activeMilestone.accentColor }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: activeMilestone.accentColor,
                      boxShadow: `0 0 8px ${activeMilestone.accentColor}`,
                    }}
                  />
                  <span>PROJECT {activeMilestone.stepNumber} // ACTIVE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-[0_8px_40px_rgba(255,255,255,0.18)]">
                  {activeMilestone.role}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ACTIVE DATE RANGE IN UPPERCASE MUTED TEXT */}
          <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-400 mb-6 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" style={{ color: activeMilestone.accentColor }} />
            <span className="text-white font-bold">{activeMilestone.dateRange}</span>
          </div>

          {/* MINIMALIST HORIZONTAL STEP PROGRESS INDICATOR (01 / 05) */}
          <div className="w-full max-w-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-white font-bold">{activeMilestone.stepNumber}</span>
              <span>/ 0{timelineMilestones.length}</span>
            </div>

            {/* 5 Progress Segments */}
            <div className="flex items-center gap-1.5 w-full">
              {timelineMilestones.map((m, sI) => {
                const isPassedOrCurrent = sI <= activeIndex;
                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      setActiveMilestoneId(m.id);
                      itemRefs.current[m.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="flex-1 h-1.5 rounded-full cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: isPassedOrCurrent
                        ? activeMilestone.accentColor
                        : "rgba(255, 255, 255, 0.12)",
                      boxShadow: isPassedOrCurrent
                        ? `0 0 10px ${activeMilestone.accentColor}`
                        : "none",
                    }}
                    title={m.role}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: VERTICAL SCROLLING TIMELINE WITH FOCUS HIGHLIGHT ================= */}
        <div className="lg:col-span-7 relative flex flex-col pl-6 sm:pl-10">
          {/* Continuous Subtle Vertical Track Line */}
          <div className="absolute left-2.5 sm:left-4 top-6 bottom-6 w-[2px] bg-white/15" />

          {/* Milestones Stack */}
          <div className="flex flex-col gap-20 sm:gap-28">
            {timelineMilestones.map((milestone) => {
              const isFocused = activeMilestoneId === milestone.id;

              return (
                <div
                  key={milestone.id}
                  ref={(el) => {
                    itemRefs.current[milestone.id] = el;
                  }}
                  className="relative transition-all duration-500 ease-out"
                  style={{
                    // Scroll-Focus Opacity Effect: Only active item is at opacity 1, others at 0.25
                    opacity: isFocused ? 1 : 0.25,
                    transform: isFocused ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  {/* Glowing Circular Node on Vertical Track Line */}
                  <div
                    className="absolute -left-[27px] sm:-left-[35px] top-1.5 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      width: isFocused ? "18px" : "12px",
                      height: isFocused ? "18px" : "12px",
                      backgroundColor: isFocused ? milestone.accentColor : "rgba(255,255,255,0.3)",
                      boxShadow: isFocused ? `0 0 16px ${milestone.accentColor}` : "none",
                    }}
                  >
                    {isFocused && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>

                  {/* Card Content Container */}
                  <div className="rounded-3xl border border-white/10 bg-[#1C1C20] p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.8)] transition-all hover:border-white/20">
                    {/* Header Row: Date Badge & Type Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-xs font-bold tracking-wider px-3 py-1 rounded-full border"
                        style={{
                          borderColor: `${milestone.accentColor}50`,
                          backgroundColor: `${milestone.accentColor}18`,
                          color: milestone.accentColor,
                        }}
                      >
                        {milestone.dateRange}
                      </span>

                      <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                        {milestone.type === "work" ? (
                          <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
                        )}
                        <span>{milestone.company}</span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {milestone.role}
                    </h3>

                    {/* Company / Institution */}
                    <div
                      className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1 mb-4"
                      style={{ color: milestone.accentColor }}
                    >
                      {milestone.company}
                    </div>

                    {/* Concise Bullet Points */}
                    <ul className="space-y-2.5 pt-2 border-t border-white/10 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {milestone.bullets.map((bullet, bI) => (
                        <li key={bI} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: milestone.accentColor }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
