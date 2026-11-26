"use client";

import React from "react";
import Link from "next/link";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import RightHeroBento from "./RightHeroBento";
import CoreTechBento from "./CoreTechBento";
import SelectedProjects from "./SelectedProjects";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll (Range: 0.00 -> 0.22) - Hero with background MERN STACK (face cutout mask)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.24], [1, 1, 0.4, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.24], [0, -120]);
  const scale1 = useTransform(scrollYProgress, [0, 0.24], [1, 0.94]);

  // Section 2: 30% scroll (Range: 0.20 -> 0.48) - "I am Tejaswi Sen" with cinematic sand smoke transition
  const opacity2 = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [60, 0, 0, -60]);
  const x2 = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [-40, 0, 0, 30]);
  const blur2 = useTransform(
    scrollYProgress,
    [0.20, 0.28, 0.40, 0.48],
    ["blur(14px)", "blur(0px)", "blur(0px)", "blur(18px)"]
  );
  const scale2 = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [0.94, 1, 1, 1.06]);
  const letterSpacing2 = useTransform(
    scrollYProgress,
    [0.20, 0.28, 0.40, 0.48],
    ["0.06em", "0em", "0em", "0.12em"]
  );

  // Section 3: 03 // SELECTED PROJECTS - 3-Column Luxury Layout (Range: 0.46 -> 0.90)
  const opacity3 = useTransform(scrollYProgress, [0.46, 0.53, 0.84, 0.92], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.46, 0.53, 0.84, 0.92], [40, 0, 0, -40]);

  // Section 4: 90% scroll - Outro Bridge cue to full archive
  const opacity4 = useTransform(scrollYProgress, [0.90, 0.95, 1.0], [0, 1, 0.4]);
  const y4 = useTransform(scrollYProgress, [0.90, 0.96, 1.0], [40, 0, -20]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden">
      {/* SECTION 1: 0% Scroll - Hero with Joined MERN STACK in Background (Clean face, no text over face) */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden"
      >
        {/* JOINED "MERN STACK" IN BACKGROUND WITH WIDE SMOOTH FEATHERED FADE (ZERO HALF-LETTER CUTS & ZERO TEXT ON FACE) */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none px-4"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse min(44vw, 460px) min(48vh, 380px) at 48% 42%, transparent 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.7) 80%, black 100%)",
            maskImage:
              "radial-gradient(ellipse min(44vw, 460px) min(48vh, 380px) at 48% 42%, transparent 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.7) 80%, black 100%)",
          }}
        >
          <span className="neon-orange-outline text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] xl:text-[13rem] font-black tracking-normal whitespace-nowrap block text-center">
            MERN &nbsp; STACK
          </span>
        </div>

        {/* BOTTOM CONTENT: Only the clean scroll prompt (Creative Developer title removed as requested) */}
        <div className="absolute inset-x-0 bottom-8 sm:bottom-12 flex flex-col items-center justify-center text-center px-4 z-20">
          <div className="flex flex-col items-center gap-1.5 text-neutral-400 animate-bounce">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-neutral-400">
              Scroll to scrub
            </span>
            <ArrowDown className="h-3.5 w-3.5 text-neutral-400" />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2 LEFT: 30% Scroll - "I am Tejaswi Sen" (CLEAR OF FACE) */}
      <motion.div
        style={{
          opacity: opacity2,
          y: y2,
          x: x2,
          filter: blur2,
          scale: scale2,
          letterSpacing: letterSpacing2,
        }}
        className="absolute top-[10%] sm:top-[12%] md:top-[14%] left-4 sm:left-8 md:left-12 lg:left-16 flex flex-col justify-start max-w-[88vw] sm:max-w-[420px] lg:max-w-[460px] z-20 pointer-events-auto"
      >
        {/* Sand Smoke atmospheric backdrop aura on the left */}
        <div className="pointer-events-none absolute -inset-6 bg-radial-sand-smoke rounded-3xl opacity-60 blur-xl" />

        <div className="relative z-10">
          {/* Big Headline: I am Tejaswi in one line (Sen removed as requested) */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] whitespace-nowrap">
            <span className="text-white">I am </span>
            <span className="bg-gradient-to-r from-[#ff6a00] via-[#ff8800] to-[#ffa500] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,106,0,0.6)]">
              Tejaswi
            </span>
          </h2>

          {/* Bio Text */}
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-normal max-w-[380px] sm:max-w-[440px]">
            I&apos;m <strong className="font-semibold text-white">Tejaswi</strong>, a developer focused on building applications, designing APIs, integrating modern technologies, and creating reliable solutions. I turn ideas into functional products through clean code and practical problem-solving.
          </p>

          {/* Two Buttons: One in Orange, Another in Transparent */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* Orange Button */}
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ff6a00] hover:bg-[#ff7a18] text-black font-bold text-xs sm:text-sm px-5 py-2.5 shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Transparent Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-2.5 backdrop-blur-md hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* My Core Tech Stack Bento Grid (Moved to Left Side Under Buttons as Requested) */}
          <div className="mt-4">
            <CoreTechBento />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2 RIGHT: 3D Wireframe Particle Network + Glassmorphic Bento Cards + Live Pill Badge */}
      <motion.div
        style={{
          opacity: opacity2,
          y: y2,
          filter: blur2,
          scale: scale2,
        }}
        className="absolute top-[8%] sm:top-[10%] md:top-[12%] right-2 sm:right-6 md:right-10 lg:right-14 flex flex-col items-end z-20 pointer-events-auto scale-[0.80] sm:scale-90 md:scale-100 origin-top-right"
      >
        <RightHeroBento />
      </motion.div>

      {/* SECTION 3: 03 // SELECTED PROJECTS (3-Column Luxury Wallet Stack framing fixed portrait) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto"
      >
        <SelectedProjects scrollYProgress={scrollYProgress} />
      </motion.div>

      {/* SECTION 4: 90% Scroll - Outro Bridge Cue to Full Archive */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-x-0 bottom-8 sm:bottom-12 flex flex-col items-center justify-center text-center px-4 pointer-events-auto z-20"
      >
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-black/80 hover:bg-black px-4 py-2 text-xs font-mono text-orange-300 backdrop-blur-xl shadow-lg transition-all hover:scale-105"
        >
          <Code2 className="h-3.5 w-3.5 text-[#ff9900]" />
          <span>EXPLORE ALL 10 PROJECTS IN EXPANDED VIEW</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#ff9900] group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
