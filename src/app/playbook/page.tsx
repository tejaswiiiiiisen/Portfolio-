"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Terminal } from "lucide-react";

export default function PlaybookPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      <Navbar />

      <div className="pt-20">
        <Experience />
      </div>

      <Footer />
    </main>
  );
}
