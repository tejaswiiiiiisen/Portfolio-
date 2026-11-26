"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Trophy, Star, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
  const achievements = [
    {
      icon: Trophy,
      title: "10+ Production-Ready Projects",
      badge: "Full-Stack Portfolio",
      date: "2024",
      description: "Successfully architected and deployed 10 modern web applications spanning MERN stack, 3D Canvas physics, API rate limiting, and FinTech dashboards.",
    },
    {
      icon: Star,
      title: "Core Technologies Mastered",
      badge: "React • JS • Tailwind • SQL • Node",
      date: "2024",
      description: "Engineered scalable client interfaces with React & Tailwind CSS, integrated secure REST APIs with Node.js & Express, and managed ACID-compliant schemas with SQL & MongoDB.",
    },
    {
      icon: Zap,
      title: "High Performance & Zero Jank",
      badge: "60-120 FPS Rendering",
      date: "2024",
      description: "Designed multi-tier interactive web platforms with canvas particle simulations, hardware-accelerated transforms, and sub-100ms response latencies.",
    },
    {
      icon: Award,
      title: "Clean Architecture & Code Standards",
      badge: "Type-Safe Development",
      date: "2024",
      description: "Consistently delivered decoupled architectures with end-to-end type safety, reusable UI components, and accessible design systems.",
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      <Navbar />

      <section className="relative z-10 pt-36 pb-24 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-96 w-full max-w-4xl bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />

        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-mono text-amber-400 backdrop-blur-md">
            <Award className="h-3.5 w-3.5" />
            <span>04 // HONORS & MILESTONES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Key Achievements
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
            Milestones, architectural accomplishments, and technical standards achieved across software engineering projects.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-amber-400 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                    {item.date}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-mono text-amber-300 mb-3">
                  {item.badge}
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Outro Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-black font-bold text-xs font-mono shadow-xl shadow-orange-500/30 hover:scale-105 transition-all"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
