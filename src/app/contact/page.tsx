"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white">
      <Navbar />

      <div className="pt-16 sm:pt-20">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
