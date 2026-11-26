"use client";

import React from "react";
import { Github, Twitter, Linkedin, ArrowUp, MapPin, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full bg-[#050508] border-t border-white/[0.08] overflow-hidden">
      {/* Top ambient golden edge glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-[0.5px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 max-w-lg h-[2px] bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent shadow-[0_0_12px_#F59E0B]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: The requested Identity line with rich styling */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono">
            {/* Copyright & Name */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm">
              <span className="text-amber-400 font-bold">© 2026</span>
              <span className="text-white font-bold tracking-wide">Tejaswi sen</span>
            </div>

            {/* Glowing separator */}
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]" />

            {/* Role badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-medium tracking-wide shadow-[0_0_12px_rgba(245,158,11,0.12)]">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Java backend developer</span>
            </div>

            {/* Glowing separator */}
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]" />

            {/* Location badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Ajmer, India</span>
            </div>
          </div>

          {/* Right: Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tejaswiiiiiisen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:scale-105"
              aria-label="Twitter / X"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejaswi-sen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <div className="h-6 w-[1px] bg-white/10 mx-1" />

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-mono font-bold text-neutral-300 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:shadow-[0_0_18px_rgba(245,158,11,0.25)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
