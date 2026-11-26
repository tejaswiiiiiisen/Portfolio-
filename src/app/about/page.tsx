"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CoreTechBento from "@/components/CoreTechBento";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      <Navbar />

      <div className="pt-16">
        <AboutSection />
      </div>

      <section className="relative z-10 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            02 // SYSTEM CAPABILITIES & TECH STACK
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Architecture Readiness
          </h3>
        </div>
        <CoreTechBento />
      </section>

      <Footer />
    </main>
  );
}
