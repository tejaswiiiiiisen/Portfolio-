"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Terminal,
  ArrowUpRight,
  Mail,
  Briefcase,
  GraduationCap,
  Code,
  Calendar,
  Layers,
  Award,
  Server,
  Database,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function AboutSection() {
  const techPills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Java",
  ];

  const milestones = [
    {
      date: "OCTOBER 2026",
      title: "RELAY AEGIS · Hackathon 2026",
      subtitle: "SENTRY × DEZYNE E'COLE COLLEGE",
      description:
        "Architected an evidence-driven, self-healing platform engineered to detect and autonomously remediate runtime anomalies across Spring Boot, React, PostgreSQL, Docker, and Kubernetes environments.",
      stack: ["Spring Boot", "React", "PostgreSQL", "Kubernetes", "Sentry"],
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      accent: "#F59E0B",
    },
    {
      date: "OCTOBER 3 – 4, 2026",
      title: "WordCamp Rajasthan 2026 & Contributor Day",
      subtitle: "RAJASTHAN INTERNATIONAL CENTRE, JAIPUR",
      description:
        "Participated in the WordPress Community event and Contributor Day, collaborating on Core AI integration, design patterns, and open-source community education.",
      stack: ["WordPress", "Core AI", "Patterns", "Open-Source", "Community"],
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      accent: "#3B82F6",
    },
    {
      date: "JULY – OCTOBER 2026",
      title: "Full Stack Developer Intern · Macenza",
      subtitle: "90-DAY ON-SITE INTERNSHIP",
      description:
        "Delivered production-grade enterprise software on-site daily, engineering end-to-end full-stack features using React, Node.js, Express.js, and MongoDB.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Production"],
      badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      accent: "#FB923C",
    },
    {
      date: "JULY 2026",
      title: "Google Skills Arcade Facilitator & AWS AI Practitioner",
      subtitle: "GOOGLE GEAR & AWS",
      description:
        "Served as a Facilitator for the Google Skills Arcade program and completed specialized training in Prompt Engineering and AI Practitioner tracks on AWS.",
      stack: ["Google Cloud", "Prompt Engineering", "AWS AI", "Community Leadership"],
      badgeColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
      accent: "#FACC15",
    },
    {
      date: "JUNE 2026",
      title: "JPMorgan Chase · Software Engineering Simulation",
      subtitle: "FORAGE VIRTUAL EXPERIENCE",
      description:
        "Integrated Apache Kafka into a Spring Boot microservice for fault-tolerant transaction streaming, implementing strict validation rules and persistence via Spring Data JPA.",
      stack: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "SQL"],
      badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      accent: "#38BDF8",
    },
    {
      date: "JUNE 2026",
      title: "5-Day AI Agents Intensive",
      subtitle: "KAGGLE",
      description:
        "Completed a 5-day intensive program building autonomous AI agents and practical multi-step reasoning workflows through hands-on codelabs.",
      stack: ["Autonomous AI Agents", "Kaggle", "Python", "Workflows", "Codelabs"],
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      accent: "#C084FC",
    },
    {
      date: "2025",
      title: "Identity 2025 · Open Hackathon",
      subtitle: "SMART CAMPUS AI AGENT",
      description:
        "Built an automated student support ecosystem featuring event-driven n8n workflows, a responsive web dashboard, and an integrated Telegram bot for real-time academic inquiry resolution.",
      stack: ["n8n Workflows", "Gemini API", "JavaScript", "Telegram Bot API"],
      badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
      accent: "#F472B6",
    },
    {
      date: "2024 – PRESENT",
      title: "BCA · Dezyne E'cole College, Ajmer",
      subtitle: "COMPUTER APPLICATIONS",
      description:
        "Established strong fundamentals in Java, relational databases, computer networks, operating systems, and software engineering principles while actively contributing to the Ajmer WordPress Community.",
      stack: ["Java", "Relational Databases", "Computer Networks", "Operating Systems", "WordPress Community"],
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      accent: "#34D399",
    },
  ];

  const skillCategories = [
    {
      name: "Backend",
      icon: Server,
      skills: [
        "Java 21",
        "Spring Boot 3",
        "Spring Security",
        "JPA / Hibernate",
        "REST APIs",
        "Kafka",
        "JDBC",
        "Servlets / JSP",
      ],
      accent: "#F59E0B",
    },
    {
      name: "Data",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "H2", "SQLite", "Flyway"],
      accent: "#38BDF8",
    },
    {
      name: "DevOps & reliability",
      icon: ShieldCheck,
      skills: [
        "Kubernetes (Helm)",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "Sentry",
        "CodeQL",
      ],
      accent: "#34D399",
    },
    {
      name: "AI & frontend",
      icon: Sparkles,
      skills: [
        "Gemini API",
        "n8n",
        "Prompt engineering",
        "React",
        "TypeScript",
        "HTML / CSS / JS",
      ],
      accent: "#C084FC",
    },
    {
      name: "Tools & Creative",
      icon: Wrench,
      skills: [
        "Antigravity",
        "Git & GitHub",
        "IntelliJ IDEA",
        "VS Code",
        "Postman",
        "Android Studio",
        "Adobe Firefly",
        "Adobe Photoshop",
        "Figma",
        "Canva",
      ],
      accent: "#FB923C",
    },
  ];

  return (
    <section id="my-story" className="relative z-20 w-full pt-2 sm:pt-4 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-12 bg-[#070708] overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-500/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-blue-600/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-amber-500/[0.05] blur-[150px]" />

      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        
        {/* =====================================================================
           PART 1: MAIN ABOUT CARD (LEFT PHOTO, RIGHT BIO)
           ===================================================================== */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">purpose</span> & precision.
            </h2>
          </div>

          {/* Outer Glow Wrapper Card */}
          <div className="relative rounded-3xl p-[1.5px] sm:p-[2px] bg-gradient-to-br from-amber-400/40 via-white/10 to-amber-600/30 shadow-[0_0_50px_rgba(245,158,11,0.12),0_25px_60px_rgba(0,0,0,0.9)]">
            {/* Inner Card Container */}
            <div className="w-full rounded-[calc(theme(borderRadius.3xl)-2px)] bg-[#0C0C10] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
              {/* Subtle background mesh/texture */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-black/60" />

              {/* 2-Column Responsive Layout: Left Photo Card, Right Content */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT COLUMN: Photo Card (Full Uncut Portrait) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_35px_rgba(245,158,11,0.2),0_20px_45px_rgba(0,0,0,0.85)] group bg-black cursor-pointer">
                    {/* The Full Photo - Black & White by default, reveals real vivid color on hover */}
                    <img
                      src="/about/tejaswi-hawa-mahal.jpg"
                      alt="Tejaswi Sen at Hawa Mahal, Jaipur"
                      className="w-full h-full object-cover object-center grayscale contrast-[1.08] brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle edge illumination border */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/25 group-hover:ring-amber-400/50 rounded-2xl sm:rounded-3xl transition-all duration-500" />
                  </div>

                  {/* Clean Sub-Caption Underneath Image (Doesn't cover the photo) */}
                  <div className="mt-3.5 flex items-center justify-center sm:justify-start w-full max-w-sm sm:max-w-md px-2 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Hawa Mahal · Jaipur, India</span>
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN: Bio Text & Details */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-neutral-300">
                  {/* Header Tagline */}
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>BCA · DEZYNE ÉCOLE COLLEGE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      Building Scalable Systems & Behind-The-Scenes Logic
                    </h3>
                  </div>

                  {/* Paragraph 1 */}
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-200">
                    I&apos;m <strong className="text-white font-bold">Tejaswi Sen</strong>, a final-year Bachelor of Computer Applications student at Dezyne École College, focused on Backend Development and building modern web applications. I started my development journey with programming fundamentals and gradually moved towards JavaScript, React.js, Tailwind CSS, Node.js, Express.js, REST APIs, and MongoDB.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                    What interests me most is understanding how applications work behind the scenes — how servers process requests, how APIs communicate, how databases manage information, and how backend systems handle real-world problems. During my 3-month internship at <strong className="text-amber-300 font-semibold">Macenza</strong>, I gained hands-on experience working on projects like HRMS and Hotel Management System, where I explored backend functionality, application logic, API integration, and database operations.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                    I enjoy solving problems, understanding system architecture, writing clean and structured code, and continuously improving my technical skills. I&apos;m currently looking for an <strong className="text-white font-semibold underline decoration-amber-400 underline-offset-4">Internship or Junior Backend Developer opportunity</strong> where I can contribute to real-world projects, learn from experienced developers, and grow as a backend engineer.
                  </p>

                  {/* Tech Pills */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-amber-400" />
                      <span>Core Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techPills.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Get In Touch</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-white font-mono text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                    >
                      <Briefcase className="w-4 h-4 text-amber-400" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
           PART 2: SPLIT LAYOUT -> EXPERIENCE & MILESTONES (LEFT) + SKILLS (RIGHT)
           ===================================================================== */}
        <div>
          {/* Main 2-Column Desktop Grid: Left Wide (8 cols) + Right Narrow (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* WIDE LEFT COLUMN: Experience & Milestones */}
            <div className="lg:col-span-8 space-y-8">
              {/* Section Header */}
              <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                  <Award className="w-3.5 h-3.5 animate-pulse" />
                  <span>EXPERIENCE & MILESTONES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Timeline of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Engineering Milestones</span>
                </h2>
              </div>

              {/* Vertical Connecting Timeline */}
              <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-7 sm:space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing Timeline Marker */}
                    <div
                      className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#070708] transition-all duration-300 group-hover:scale-125 shadow-[0_0_12px_#F59E0B]"
                      style={{ backgroundColor: item.accent }}
                    />

                    {/* Timeline Card (#0d0d0f) */}
                    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d0d0f] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 group-hover:border-amber-500/40 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] group-hover:bg-[#111114]">
                      {/* Top Row: Left Pill Badge + Right Organization Label */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold border ${item.badgeColor}`}>
                            <Calendar className="w-3 h-3 inline mr-1.5 -mt-0.5" />
                            {item.date}
                          </span>
                        </div>

                        <span className="text-[11px] sm:text-xs font-mono text-neutral-400 tracking-wider uppercase font-medium">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Brief text */}
                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Mini tag rows under "Stack:" */}
                      <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-[11px] font-mono text-neutral-400 font-semibold mr-1 flex items-center gap-1">
                          <Layers className="w-3 h-3 text-amber-400" />
                          <span>Stack:</span>
                        </span>
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.03] border border-white/10 text-neutral-300 group-hover:border-amber-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NARROW RIGHT COLUMN: Skills Sidebar (#0d0d0f) */}
            <div className="lg:col-span-4 sticky top-24 pt-4 lg:pt-0">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d0d0f] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.85)] relative overflow-hidden">
                {/* Subtle top amber highlight */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                {/* Header */}
                <div className="mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    Skills
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    What I work with
                  </h3>
                </div>

                {/* Categorized Tag Clouds */}
                <div className="space-y-6">
                  {skillCategories.map((group) => {
                    const IconComponent = group.icon;
                    return (
                      <div key={group.name} className="space-y-2.5">
                        {/* Sub-category Header with tiny icon & uppercase label */}
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                          <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                          <span>{group.name}</span>
                        </div>

                        {/* Skills Pill Badges */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA Card within Skills Panel */}
                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
                    <span className="text-xs font-mono text-neutral-400">Open to Roles</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-bold tracking-wide transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
