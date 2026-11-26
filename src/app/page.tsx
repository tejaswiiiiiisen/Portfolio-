"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import DoorsPortal from "@/components/DoorsPortal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      {/* Floating navigation dock */}
      <Navbar />

      {/* 500vh Sticky Scrollytelling Canvas + Parallax Overlay */}
      <ScrollyCanvas totalFrames={102} framePathPrefix="/sequence/frame_" />

      {/* "Magic happens behind the doors" - 3D Interactive Doors Portal */}
      <DoorsPortal />

      {/* Global Minimalist Footer */}
      <Footer />
    </main>
  );
}
