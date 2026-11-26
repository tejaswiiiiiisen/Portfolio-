"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function MyStoryPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      {/* Floating navigation dock */}
      <Navbar />

      {/* Main Dedicated My Story Section */}
      <div className="pt-16 sm:pt-20">
        <AboutSection />
      </div>

      {/* Global Minimalist Footer */}
      <Footer />
    </main>
  );
}
