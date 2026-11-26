"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      <Navbar />

      <div className="pt-20">
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
