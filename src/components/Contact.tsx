"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tejaswisen@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative z-10 w-full min-h-screen pt-0 sm:pt-2 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-12 bg-[#060709] text-white select-none">
      {/* Subtle Tech Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient Warm Orange Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-96 h-96 rounded-full bg-orange-500/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-amber-500/[0.06] blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* =====================================================================
           MAIN HEADLINE & SUBHEAD
           ===================================================================== */}
        <div className="space-y-3 pt-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Let&apos;s build something that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-200 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              stays up.
            </span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Internship, junior backend/full-stack role, freelance project, or a question about RELAY AEGIS — I read every message and reply as soon as I can.
          </p>
        </div>

        {/* =====================================================================
           HORIZONTAL ROW OF 4 CONTACT CARDS (EMAIL, PHONE, LINKEDIN, GITHUB)
           ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* EMAIL */}
          <div className="rounded-2xl border border-amber-500/40 bg-[#0c0e14] p-4 sm:p-5 shadow-[0_0_22px_rgba(245,158,11,0.15)] transition-all hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] flex flex-col justify-between group">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>EMAIL</span>
              </div>
              <button
                onClick={(e) => handleCopy("tejaswisen@gmail.com", "email", e)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-white/10 hover:border-orange-500/40 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === "email" ? (
                  <>
                    <Check className="w-3 h-3 text-orange-400" />
                    <span className="text-orange-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href="mailto:tejaswisen@gmail.com"
              className="text-xs sm:text-sm font-medium text-white truncate hover:text-orange-300 transition-colors"
            >
              tejaswisen@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-4 sm:p-5 transition-all hover:border-orange-500/40 hover:shadow-[0_0_22px_rgba(245,158,11,0.15)] flex flex-col justify-between group">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>PHONE</span>
              </div>
              <button
                onClick={(e) => handleCopy("+918209925051", "phone", e)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-white/10 hover:border-orange-500/40 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === "phone" ? (
                  <>
                    <Check className="w-3 h-3 text-orange-400" />
                    <span className="text-orange-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href="tel:+918209925051"
              className="text-xs sm:text-sm font-medium text-white truncate hover:text-orange-300 transition-colors"
            >
              +91 82099 25051
            </a>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/tejaswi-sen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-4 sm:p-5 transition-all hover:border-orange-500/40 hover:shadow-[0_0_22px_rgba(245,158,11,0.15)] flex flex-col justify-between group cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-orange-300 transition-colors">
              tejaswi-sen
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/tejaswiiiiiisen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-4 sm:p-5 transition-all hover:border-orange-500/40 hover:shadow-[0_0_22px_rgba(245,158,11,0.15)] flex flex-col justify-between group cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Github className="w-4 h-4 text-purple-400" />
                <span>GITHUB</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-orange-300 transition-colors">
              tejaswiiiiiisen
            </div>
          </a>

        </div>

        {/* =====================================================================
           SEND A MESSAGE FORM CONTAINER (HORIZONTALLY BALANCED)
           ===================================================================== */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0c0e14] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Card Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/[0.06] mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Send a message
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                Direct dispatch — goes straight to my inbox.
              </p>
            </div>

            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              AVG. RESPONSE: &lt; 12 HRS
            </div>
          </div>

          {/* Form Grid */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Inputs (Name, Email, Subject) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 block">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-[#12151d] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-[#12151d] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 block">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Internship, project, question..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-[#12151d] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>
            </div>

            {/* Right Message Box + Bottom-Right Send Button */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-1.5 flex-1 flex flex-col">
                <label className="text-xs font-mono text-neutral-400 block">Message</label>
                <textarea
                  required
                  placeholder="What are you working on, and how can I help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full flex-1 min-h-[160px] lg:min-h-[190px] rounded-xl border border-white/[0.08] bg-[#12151d] p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all resize-y"
                />
              </div>

              <div className="flex justify-end pt-5">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-400 hover:via-amber-400 hover:to-amber-300 text-black font-extrabold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Send message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
