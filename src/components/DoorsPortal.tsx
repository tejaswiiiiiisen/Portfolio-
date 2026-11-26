"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Clock,
  Layers,
} from "lucide-react";

export interface TimelineMilestone {
  id: string;
  year: string;
  dateRange: string;
  stepNumber: string;
  role: string;
  company: string;
  watermarkYear: string;
  bullets: string[];
  image?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  liveUrl?: string;
  modules?: { title: string; desc: string }[];
}

export interface DoorCategory {
  id: string;
  name: string;
  doorColor: string;
  lightAccent: string;
  shadowColor: string;
  subtitle: string;
  skills: string[];
  milestones: TimelineMilestone[];
}

export const doorCategories: DoorCategory[] = [
  {
    id: "projects",
    name: "Projects",
    doorColor: "#2563EB", // Royal Blue
    lightAccent: "#60a5fa",
    shadowColor: "rgba(37, 99, 235, 0.4)",
    subtitle: "Enterprise full-stack applications, scalable SaaS systems, and bespoke digital platforms.",
    skills: ["15 Production Deployments", "Next.js, WebGL & Microservices", "Full-Stack, FinTech & Real-Time AI"],
    milestones: [
      {
        id: "proj-01",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "OCT 2025 — PRESENT",
        stepNumber: "01",
        role: "Real-Time User & Performance Analytics Dashboard",
        company: "PERSONAL PROJECT // FULL-STACK DEVELOPMENT",
        image: "/projects/analytics-dashboard.png",
        githubUrl: "https://github.com/tejaswisen/analytics-dashboard",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Designing and building a comprehensive user analytics platform focused on tracking high-volume web metrics in real-time.",
          "Integrating complex visual charts including load time vs. bounce rate histograms, start render vs. bounce rate curves, and traffic/session length monitoring systems.",
          "Developing a robust backend with optimized querying to process multi-dimensional data, instantly visualizing bounce rates, page views (LUX), session lengths, and user traffic.",
        ],
      },
      {
        id: "proj-02",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "AUG 2025 — OCT 2025",
        stepNumber: "02",
        role: "Taskflow Kanban Engine",
        company: "ENTERPRISE PROJECT ORCHESTRATION",
        image: "/projects/kanban-board-preview.jpg",
        githubUrl: "https://github.com/tejaswisen/taskflow-kanban",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Agile project orchestration platform featuring optimistic UI drag-and-drop task cards, granular role-based access, and real-time WebSocket telemetry.",
          "Engineered with Next.js 14 App Router, Redux Toolkit, Node.js microservices, and custom Tailwind design systems.",
          "Integrated sub-second activity audit streams, optimistic mutations, and automated sprint velocity calculators.",
        ],
      },
      {
        id: "proj-03",
        year: "2025",
        watermarkYear: "2025",
        dateRange: "MAY 2025 — JUL 2025",
        stepNumber: "03",
        role: "AI Chatbot / DevConnect Autonomous Agent",
        company: "COLLABORATIVE AI WORKSPACE // GEMINI API",
        image: "/projects/aichat-preview.jpg",
        githubUrl: "https://github.com/tejaswisen/devconnect-ai",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Multi-agent autonomous collaborative workspace powered by Google Gemini 1.5 Pro and Next.js Server Actions.",
          "Streaming markdown code syntax highlighting, automated test generation, and multi-turn conversational memory.",
          "Sub-100ms streaming token latency with WebSocket channels and vector semantic similarity caching.",
        ],
      },
      {
        id: "proj-04",
        year: "2025",
        watermarkYear: "2025",
        dateRange: "FEB 2025 — APR 2025",
        stepNumber: "04",
        role: "Nexus API Gateway & Token Bucket Router",
        company: "HIGH-THROUGHPUT MICROSERVICE ROUTING",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/nexus-api-gateway",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Enterprise routing layer handling 250k+ req/sec with Redis sliding-window token bucket throttling and distributed JWT validation.",
          "Architected using Node.js, Express, TypeScript, and Redis cluster automatic failover mechanisms.",
          "Integrated automated latency metrics, prometheus health checkpoints, and sub-50ms response guarantees.",
        ],
      },
      {
        id: "proj-05",
        year: "2025",
        watermarkYear: "2025",
        dateRange: "NOV 2024 — JAN 2025",
        stepNumber: "05",
        role: "Kinetic 3D Portfolio & Spatial Experience",
        company: "GPU-ACCELERATED CREATIVE WEB // THREE.JS",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/kinetic-3d-portfolio",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Cinematic scrollytelling web experience featuring physics-driven 3D coordinate meshes and custom fragment shaders.",
          "Sustained locked 120 FPS hardware acceleration using Three.js, WebGL, GSAP Flip, and Tailwind CSS.",
          "Implemented OffscreenCanvas Web Workers to eliminate main-thread layout thrashing across high-DPI displays.",
        ],
      },
      {
        id: "proj-06",
        year: "2024",
        watermarkYear: "2024",
        dateRange: "AUG 2024 — OCT 2024",
        stepNumber: "06",
        role: "PulsePay FinTech Transaction Analytics",
        company: "FINANCIAL DATA SUITE // REACT NATIVE",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/pulsepay-fintech",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Cross-platform personal finance analytics app handling multi-currency conversions and real-time expense graphing.",
          "Integrated Chart.js and Skia canvas rendering to deliver interactive 60fps spending trend diagrams and velocity forecasts.",
          "Built offline-first SQLite database synchronization with encrypted cloud backup triggers.",
        ],
      },
      {
        id: "proj-07",
        year: "2024",
        watermarkYear: "2024",
        dateRange: "JUN 2024 — AUG 2024",
        stepNumber: "07",
        role: "OmniStore Headless Global E-Commerce",
        company: "SUB-SECOND COMMERCE // NEXT.JS & STRIPE",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/omnistore-platform",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Modern edge-rendered digital storefront with instant checkout state management and international currency conversions.",
          "Built using Next.js App Router, Stripe API, Prisma ORM, and PostgreSQL multi-region database.",
          "Optimized Core Web Vitals to 99+ Performance score with automated inventory sync pipelines.",
        ],
      },
      {
        id: "proj-08",
        year: "2024",
        watermarkYear: "2024",
        dateRange: "MAR 2024 — MAY 2024",
        stepNumber: "08",
        role: "Chronos Algorithmic Trading Terminal",
        company: "HIGH-FREQUENCY VISUALIZATION // CANVAS",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/chronos-terminal",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Next-generation financial analytics suite streaming 100,000+ real-time tick points per second with zero UI jank.",
          "Architected a dual-buffer HTML5 2D Canvas engine decoupling WebSocket data ingestion from 120 FPS paint cycles.",
          "Designed tactile keyboard hotkeys, custom widget docking panels, and sub-millisecond execution latency.",
        ],
      },
      {
        id: "proj-09",
        year: "2024",
        watermarkYear: "2024",
        dateRange: "JAN 2024 — MAR 2024",
        stepNumber: "09",
        role: "Aether Autonomous Drone Telemetry HUD",
        company: "REALTIME GEOSPATIAL COMMAND // MAPBOX",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/aether-telemetry",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Geospatial drone mission controller rendering 3D flight paths, obstacle avoidance boundaries, and live camera streams.",
          "Integrated vector tile rendering with physics-based smooth tracking cameras and predictive collision warnings.",
          "Delivered 99.99% telemetry uptime across 64 concurrent autonomous UAV hardware units.",
        ],
      },
      {
        id: "proj-10",
        year: "2023",
        watermarkYear: "2023",
        dateRange: "OCT 2023 — DEC 2023",
        stepNumber: "10",
        role: "Neura Spatial WebGL Synthesizer",
        company: "GENERATIVE SOUND MESH // WEB AUDIO API",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/neura-synth",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Real-time 3D generative audio visualizer combining Web Audio API frequency analysis with GLSL fragment shaders.",
          "Interactive topological meshes responding dynamically to audio input with under 2.8ms acoustic latency.",
          "Awarded Awwwards Site of the Day with over 240,000 active community interactive sound sessions.",
        ],
      },
      {
        id: "proj-11",
        year: "2023",
        watermarkYear: "2023",
        dateRange: "JUL 2023 — SEP 2023",
        stepNumber: "11",
        role: "Kinetix Kinetic Design System",
        company: "TACTILE COMPONENT LIBRARY // TAILWIND",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/kinetix-ui",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Modular open-source UI ecosystem featuring physics-based spring animations, cursor magnetics, and glass refraction.",
          "Includes 48+ production primitives, fluid layout morphing, dynamic blur filters, and accessible keyboard navigation.",
          "Achieved 4,800+ GitHub stars with an ultra-compact bundle footprint under 8KB gzipped.",
        ],
      },
      {
        id: "proj-12",
        year: "2023",
        watermarkYear: "2023",
        dateRange: "APR 2023 — JUN 2023",
        stepNumber: "12",
        role: "DevConnect Collaboration Workspace",
        company: "REAL-TIME PEER PROGRAMMING // WEBRTC",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/devconnect",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Interactive pair-programming platform with collaborative code editor, WebRTC video/audio, and live syntax highlighting.",
          "Engineered using React, Node.js, Socket.io, MongoDB, and Monaco Code Editor integration.",
          "Delivered sub-100ms peer-to-peer sync across distributed teams with automated code execution sandboxes.",
        ],
      },
      {
        id: "proj-13",
        year: "2023",
        watermarkYear: "2023",
        dateRange: "JAN 2023 — MAR 2023",
        stepNumber: "13",
        role: "Smart Library IoT Asset Inventory",
        company: "DISTRIBUTED CATALOG // JAVA & SPRING",
        image: "https://images.unsplash.com/photo-1507842229451-7f01be7fe7ab?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/smart-library",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Multi-threaded asset tracking and physical inventory management handling 500,000+ cataloged university resources.",
          "Built using Java 17, Spring Boot, PostgreSQL, and barcode/RFID automated scanner integration.",
          "Implemented concurrent reservation queuing with optimistic locking to prevent checkout collisions.",
        ],
      },
      {
        id: "proj-14",
        year: "2022",
        watermarkYear: "2022",
        dateRange: "AUG 2022 — NOV 2022",
        stepNumber: "14",
        role: "PixelArcade Retro Canvas Physics Engine",
        company: "ARCADE GAME ENGINE // HTML5 CANVAS",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/pixel-arcade",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Developed retro arcade canvas physics engines including Brick Breaker with dynamic paddle momentum and collision detection.",
          "Created tabletop probability simulation engines with custom Web Audio synthetic haptics and multi-touch interactions.",
          "Achieved top-10 ranking in mobile arcade category with 4.8-star rating across 15,000+ active installs.",
        ],
      },
      {
        id: "proj-15",
        year: "2022",
        watermarkYear: "2022",
        dateRange: "FEB 2022 — JUL 2022",
        stepNumber: "15",
        role: "Strata Generative 3D Audio Visualizer",
        company: "COMPUTATIONAL LANDSCAPES // WEBGL",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        githubUrl: "https://github.com/tejaswisen/strata-visualizer",
        liveUrl: "https://tejaswisen.dev",
        bullets: [
          "Developed the Strata spatial audiovisual identity, transforming frequency audio waves into generative 3D wireframe landscapes.",
          "Engineered tactile skeuomorphic textures, metallic finishes, and lighting environments for digital product launches.",
          "Optimized WebGL buffer geometries for high performance across legacy mobile and low-powered hardware.",
        ],
      },
    ],
  },
  {
    id: "certificates",
    name: "Certificates",
    doorColor: "#1E1E24", // Dark Slate / Onyx
    lightAccent: "#818cf8",
    shadowColor: "rgba(129, 140, 248, 0.3)",
    subtitle: "Verified industry credentials, engineering simulations, and technical accreditations.",
    skills: [
      "JPMorgan Chase & Co.",
      "Walmart Global Tech",
      "Commonwealth Bank",
      "Deloitte Analytics",
      "Google Cloud MLOps",
      "AWS Prompt Engineering",
      "Datacom Cloud",
      "Macenza Internship",
      "WordCamp Rajasthan",
    ],
    milestones: [
      {
        id: "cert-01",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUN 2026",
        stepNumber: "01",
        role: "JPMorgan Chase & Co. — Software Engineering Job Simulation",
        company: "JPMORGAN CHASE & CO. // FORAGE VERIFIED",
        bullets: [
          "Completed hands-on enterprise tasks: Project Setup, Kafka real-time streaming, and in-memory H2 database integration.",
          "Engineered REST API controllers and optimized data serialization pipeline for high-volume financial transactions.",
          "Credential ID: 2AnFWEwWqB5LT73Zp // Issued by Forage.",
        ],
        image: "/certificates/jpmorgan-swe.png",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/jpmorgan-swe.png",
      },
      {
        id: "cert-02",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUN 2026",
        stepNumber: "02",
        role: "Walmart Global Tech — Advanced Software Engineering Simulation",
        company: "WALMART GLOBAL TECH // FORAGE VERIFIED",
        bullets: [
          "Mastered advanced data structures, algorithmic performance benchmarking, and complex software architecture paradigms.",
          "Designed resilient relational database schemas and automated data munging pipelines for high-throughput retail inventory.",
          "Credential ID: 3cM8MmrSongftMEXq // Issued by Forage.",
        ],
        image: "/certificates/walmart-advanced-swe.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/walmart-advanced-swe.jpg",
      },
      {
        id: "cert-03",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUN 2026",
        stepNumber: "03",
        role: "Commonwealth Bank — Software Engineering Job Simulation",
        company: "COMMONWEALTH BANK // FORAGE VERIFIED",
        bullets: [
          "Modified and scaled production-grade .NET backend services and React/Redux interactive banking frontend.",
          "Executed rigorous unit testing (Cover Your Code!), refined client requests, and authored standard pull requests.",
          "Credential ID: 9XmNTWMF85sGxbobc // Issued by Forage.",
        ],
        image: "/certificates/commonwealth-bank-swe.png",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/commonwealth-bank-swe.png",
      },
      {
        id: "cert-04",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUN 2026",
        stepNumber: "04",
        role: "Deloitte — Data Analytics Job Simulation",
        company: "DELOITTE // FORAGE VERIFIED",
        bullets: [
          "Spearheaded enterprise data analytics, forensic data investigation, and client-ready telemetry dashboards.",
          "Analyzed high-dimensional business data to identify statistical anomalies and compliance risk indicators.",
          "Credential ID: BjwAXGAKpXQqzdu8 // Issued by Forage.",
        ],
        image: "/certificates/deloitte-data-analytics.png",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/deloitte-data-analytics.png",
      },
      {
        id: "cert-05",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUL 2026",
        stepNumber: "05",
        role: "Google Cloud — MLOps with Agent Platform: Model Evaluation",
        company: "GOOGLE CLOUD ACCREDITATION",
        bullets: [
          "Earned official Google Cloud Completion Badge for Machine Learning Operations (MLOps) and Agent Platform pipelines.",
          "Implemented model evaluation benchmarks, bias detection, and production latency optimization.",
          "Credential Verified: Public Google Cloud Profile for Tejaswi Sen.",
        ],
        image: "/certificates/google-cloud-mlops.png",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/google-cloud-mlops.png",
      },
      {
        id: "cert-06",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUL 2026",
        stepNumber: "06",
        role: "AWS Training & Certification — Foundations of Prompt Engineering",
        company: "AMAZON WEB SERVICES (AWS)",
        bullets: [
          "Mastered generative AI prompting strategies, few-shot contextual steering, and zero-shot reasoning frameworks.",
          "Architected token-efficient agent workflows across state-of-the-art foundation models on AWS Bedrock.",
          "Credential Verified: AWS Training & Certification Directorate.",
        ],
        image: "/certificates/aws-prompt-engineering.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/aws-prompt-engineering.jpg",
      },
      {
        id: "cert-07",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUN 2026",
        stepNumber: "07",
        role: "Datacom — Introduction to Cloud Job Simulation",
        company: "DATACOM // FORAGE VERIFIED",
        bullets: [
          "Registered and deployed cloud applications with zero-trust networking and automated IAM permissions.",
          "Constructed GitHub Action CI/CD deployment workflows with multi-stage automated build checks.",
          "Credential ID: gwSbQz9taYDgdM42q // Issued by Forage.",
        ],
        image: "/certificates/datacom-cloud.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/datacom-cloud.jpg",
      },
      {
        id: "cert-08",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "2026",
        stepNumber: "08",
        role: "Macenza — Certificate of Internship Completion (90 Days)",
        company: "MACENZA // LEADERSHIP & CLIENT OPS",
        bullets: [
          "Successfully completed intensive 90-days leadership internship demonstrating team management and client-facing skills.",
          "Actively led operational workflows, coordinated cross-functional meetings, and maintained stellar communications.",
          "Certificate No.: MAC/CET/2026/26 // Signed by HR Manager Divya Gahlot.",
        ],
        image: "/certificates/macenza-internship.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/macenza-internship.jpg",
      },
      {
        id: "cert-09",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "OCT 2026",
        stepNumber: "09",
        role: "WordCamp Rajasthan 2026 — Certificate of Attendance",
        company: "WORDCAMP RAJASTHAN // RIC JAIPUR",
        bullets: [
          "Attended first-ever WordCamp Rajasthan held at Rajasthan International Centre (RIC), Jaipur.",
          "Engaged in advanced sessions covering full-site editing, modern PHP/Gutenberg architectures, and open-source contributions.",
          "Awarded with appreciation by Lead Organizer Anand Upadhyay.",
        ],
        image: "/certificates/wordcamp-rajasthan.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/wordcamp-rajasthan.jpg",
      },
    ],
  },
  {
    id: "experience",
    name: "Experience",
    doorColor: "#658C6F", // Sage Green
    lightAccent: "#86efac",
    shadowColor: "rgba(101, 140, 111, 0.4)",
    subtitle: "Professional engineering trajectory, tech leadership roles, and client milestones.",
    skills: ["Full Stack Web Applications", "HRMS & Hotel Management Systems", "E-Commerce & Admin Dashboards", "REST APIs & Database Architecture"],
    milestones: [
      {
        id: "exp-macenza",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUL 2026 – OCT 2026",
        stepNumber: "01",
        role: "Full Stack Developer Intern (90 Days)",
        company: "MACENZA // ENTERPRISE SOFTWARE & WEB",
        bullets: [
          "Worked as a Full Stack Developer Intern at Macenza for 3 months (90 days), from July 2026 to October 2026. During this internship, I gained hands-on experience in developing real-world web applications and working on various software development projects, including an HRMS (Human Resource Management System) and a Hotel Management System.",
          "I also worked on E-commerce Development, Admin Dashboard Development, REST API Development, Database Management, User Authentication & Authorization, and Responsive Web Design. My responsibilities involved developing frontend interfaces, implementing backend functionality, integrating APIs, managing databases, handling user roles and permissions, and troubleshooting technical issues.",
          "I gained practical exposure to the software development lifecycle, project structuring, debugging, and understanding business requirements. This internship helped me strengthen my technical knowledge, improve my problem-solving abilities, and gain experience in building functional, scalable, and user-friendly web applications.",
        ],
        image: "/experience/macenza-internship-ceremony.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/macenza-internship.jpg",
      },
      {
        id: "exp-macenza-modules",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "JUL 2026 – OCT 2026 (90 DAYS)",
        stepNumber: "02",
        role: "Full Stack Developer Intern – Macenza",
        company: "DETAILED APPLICATION MODULES & SDLC BREAKDOWN",
        bullets: [
          "1. HRMS (Human Resource Management System): Automated employee operations, records, Super Admin/Admin/Employee RBAC, attendance & leave records, and workflow dashboards.",
          "2. Hotel Management System: Digital operations for room management, bookings, customer records, check-in/out pipelines, and frontend/backend integration.",
          "3. E-commerce Development & Admin Dashboards: Product catalogs, administrative tools, dynamic metrics, and responsive interfaces.",
          "4. REST APIs, Databases & Auth: Node.js/Express.js CRUD endpoints, relational schema design, secure sessions, and role-based access control.",
        ],
        modules: [
          {
            title: "1. HRMS (Human Resource Management System)",
            desc: "Worked on developing an HRMS application designed to simplify and automate human resource operations. My role involved developing employee management features, handling employee records, implementing role-based access for Super Admin, Admin, and Employees, managing attendance and leave records, and working on dashboard functionalities. I also contributed to backend operations, database management, and improving the overall application workflow.",
          },
          {
            title: "2. Hotel Management System",
            desc: "Contributed to the development of a Hotel Management System focused on managing hotel operations digitally. My responsibilities included developing modules for room management, booking management, customer records, check-in and check-out operations, and user role management. I also worked on backend functionality, database operations, form handling, and connecting frontend interfaces with server-side features.",
          },
          {
            title: "3. E-commerce Development",
            desc: "Worked on e-commerce application functionality, including product listing, product information management, category organization, and shopping-related features. My role involved implementing application logic, handling product data, managing database operations, and developing responsive interfaces for a better user experience.",
          },
          {
            title: "4. Admin Dashboard Development",
            desc: "Developed and improved administrative dashboard interfaces for managing application data and operations. Worked on displaying dynamic information, organizing management sections, handling user-related data, and implementing dashboard functionalities to make administrative tasks easier and more efficient.",
          },
          {
            title: "5. REST API Development",
            desc: "Worked on developing and integrating RESTful APIs using Node.js and Express.js. My responsibilities included creating API endpoints, handling HTTP requests and responses, implementing CRUD operations, processing JSON data, managing routes, and connecting backend services with frontend applications.",
          },
          {
            title: "6. Database Management",
            desc: "Worked with database operations, including designing data structures, storing and retrieving records, updating information, and managing application data. Focused on maintaining organized data, implementing CRUD functionality, and ensuring smooth communication between backend applications and databases.",
          },
          {
            title: "7. Authentication & Authorization",
            desc: "Worked on user authentication and authorization functionality, including login and registration workflows, handling user credentials, managing sessions or authentication mechanisms, and implementing role-based access control to ensure users could access the appropriate application features.",
          },
        ],
        linkedinUrl: "https://www.linkedin.com/in/tejaswi-sen/",
        liveUrl: "/certificates/macenza-internship.jpg",
      },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    doorColor: "#D97724", // Warm Orange
    lightAccent: "#fb923c",
    shadowColor: "rgba(217, 119, 36, 0.4)",
    subtitle: "Core technical competencies, programming languages, cloud systems, and developer tooling.",
    skills: ["TypeScript / Node.js / Python", "React / Next.js / Three.js", "Docker / AWS / Kubernetes", "PostgreSQL / MongoDB / Redis"],
    milestones: [
      {
        id: "skill-2026",
        year: "2026",
        watermarkYear: "2026",
        dateRange: "OCT 2025 — PRESENT",
        stepNumber: "01",
        role: "Cloud Architecture & DevOps Systems",
        company: "INFRASTRUCTURE & ORCHESTRATION",
        bullets: [
          "Docker containerization, Kubernetes cluster orchestration, AWS (ECS, Lambda, S3, CloudFront), and GitHub Actions CI/CD.",
          "Infrastructure as Code with Terraform, Redis sliding-window caching, and Apache Kafka event-driven streaming.",
          "Automated canary deployments, zero-downtime rolling upgrades, and distributed telemetry observability.",
        ],
      },
      {
        id: "skill-2025",
        year: "2025",
        watermarkYear: "2025",
        dateRange: "2024 — 2025",
        stepNumber: "02",
        role: "Full-Stack Web & Real-Time Engineering",
        company: "RUNTIMES & FRAMEWORKS",
        bullets: [
          "Production TypeScript, Next.js 14 App Router, React Server Components (RSC), and Turbopack bundler pipelines.",
          "Real-time communication protocols: WebSockets, WebRTC peer-to-peer data channels, and Server-Sent Events (SSE).",
          "Enterprise state management: Redux Toolkit, Zustand, TanStack React Query, and Jotai.",
        ],
      },
      {
        id: "skill-2024",
        year: "2024",
        watermarkYear: "2024",
        dateRange: "2023 — 2024",
        stepNumber: "03",
        role: "Database Architecture & Performance Engineering",
        company: "DATA SYSTEMS & STORAGE",
        bullets: [
          "Relational schema modeling, foreign key constraints, connection pooling with Prisma & Drizzle ORM.",
          "NoSQL aggregation pipelines, sharded replica clusters, and distributed transactions.",
          "Query profiling with EXPLAIN ANALYZE, composite B-tree indexing, and cache eviction strategies.",
        ],
      },
      {
        id: "skill-2023",
        year: "2023",
        watermarkYear: "2023",
        dateRange: "2022 — 2023",
        stepNumber: "04",
        role: "Creative Web & GPU Shaders",
        company: "3D & MOTION GRAPHICS",
        bullets: [
          "Physics-driven 3D coordinate particle networks, raymarching shaders, and custom GLSL fragment lighting models.",
          "120 FPS hardware acceleration, smooth scroll hijacking, and GSAP Flip / ScrollTrigger animations.",
          "Web Audio API procedural sound synthesizers and responsive canvas rendering.",
        ],
      },
      {
        id: "skill-2022",
        year: "2022",
        watermarkYear: "2022",
        dateRange: "2019 — 2023",
        stepNumber: "05",
        role: "Computer Science Foundations & Algorithms",
        company: "CORE ALGORITHMIC LOGIC",
        bullets: [
          "Deep algorithmic foundations: Dynamic Programming, Graph Traversal, Computational Complexity (Big O).",
          "Object-Oriented Design Patterns: Factory, Observer, Singleton, Adapter, and Clean Architecture.",
          "Low-level memory management and concurrency primitives in C++ and Java.",
        ],
      },
    ],
  },
];

export default function DoorsPortal() {
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);
  const [activeDoorId, setActiveDoorId] = useState<string | null>(null);
  const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [transitionPhase, setTransitionPhase] = useState<
    "idle" | "zooming-in" | "inside" | "zooming-out"
  >("idle");

  // Track the active milestone inside the door
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const doorsContainerRef = useRef<HTMLDivElement | null>(null);
  const rightScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const savedScrollYRef = useRef<number>(0);

  const activeCategory =
    doorCategories.find((c) => c.id === activeDoorId) || doorCategories[0];
  const milestones = activeCategory.milestones;
  const currentMilestone = milestones[activeMilestoneIndex] || milestones[0];

  // Targeted Door Click Transition
  const handleEnterDoor = (
    e: React.MouseEvent<HTMLDivElement>,
    category: DoorCategory
  ) => {
    if (transitionPhase !== "idle") return;

    savedScrollYRef.current = window.scrollY;

    if (doorsContainerRef.current) {
      const containerRect = doorsContainerRef.current.getBoundingClientRect();
      const doorRect = e.currentTarget.getBoundingClientRect();

      // Compute exact center coordinates of the clicked door
      const originXPercent =
        ((doorRect.left + doorRect.width / 2 - containerRect.left) / containerRect.width) * 100;
      const originYPercent =
        ((doorRect.top + doorRect.height / 2 - containerRect.top) / containerRect.height) * 100;

      setZoomOrigin({ x: originXPercent, y: originYPercent });
    }

    setActiveDoorId(category.id);
    setActiveMilestoneIndex(0);
    setTransitionPhase("zooming-in");

    setTimeout(() => {
      setTransitionPhase("inside");
    }, 600);
  };

  // Exit back out of the SAME door
  const handleBackToDoors = () => {
    // 1. Immediately ensure the doors section is aligned in the viewport so it never lands in empty space
    const doorsSection = document.getElementById("doors-portal");
    if (doorsSection) {
      doorsSection.scrollIntoView({ behavior: "instant", block: "start" });
    } else if (savedScrollYRef.current > 0) {
      window.scrollTo({ top: savedScrollYRef.current, behavior: "instant" });
    }

    // 2. Start zoom-out sequence
    setTransitionPhase("zooming-out");

    setTimeout(() => {
      setTransitionPhase("idle");
      setActiveDoorId(null);
      setActiveMilestoneIndex(0);
      document.body.style.overflow = "";
      document.body.classList.remove("door-open");
    }, 750);
  };

  // Lock body scroll and intercept all wheel/touch/keyboard scrolling when inside door
  useEffect(() => {
    if (transitionPhase === "inside") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.classList.add("door-open");

      // Global wheel listener - wherever user scrolls on the screen, ONLY the right cards container scrolls
      const handleGlobalWheel = (e: WheelEvent) => {
        // ALWAYS prevent default so the outer window / main website NEVER scrolls
        e.preventDefault();

        if (rightScrollContainerRef.current) {
          rightScrollContainerRef.current.scrollTop += e.deltaY;
        }
      };

      // Keyboard navigation support
      const handleGlobalKeyDown = (e: KeyboardEvent) => {
        if (!rightScrollContainerRef.current) return;
        if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
          e.preventDefault();
          rightScrollContainerRef.current.scrollTop += 120;
        } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
          e.preventDefault();
          rightScrollContainerRef.current.scrollTop -= 120;
        } else if (e.key === "Escape") {
          handleBackToDoors();
        }
      };

      // Touch drag navigation support
      let touchStartY = 0;
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        const currentY = e.touches[0].clientY;
        const deltaY = touchStartY - currentY;
        touchStartY = currentY;

        // If swiping anywhere outside the right container, forward touch scroll
        if (
          rightScrollContainerRef.current &&
          !rightScrollContainerRef.current.contains(e.target as Node)
        ) {
          e.preventDefault();
          rightScrollContainerRef.current.scrollTop += deltaY;
        }
      };

      window.addEventListener("wheel", handleGlobalWheel, { passive: false });
      window.addEventListener("keydown", handleGlobalKeyDown);
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.classList.remove("door-open");
        window.removeEventListener("wheel", handleGlobalWheel);
        window.removeEventListener("keydown", handleGlobalKeyDown);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    } else if (transitionPhase === "zooming-in" || transitionPhase === "zooming-out") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.classList.add("door-open");
      return () => {
        document.body.style.overflow = originalOverflow;
        if (transitionPhase === "zooming-out") {
          document.body.classList.remove("door-open");
        }
      };
    } else {
      document.body.classList.remove("door-open");
    }
  }, [transitionPhase]);

  // Sync scroll on the Right Panel only
  const handleRightScroll = useCallback(() => {
    const container = rightScrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    // Focal point slightly above center for crisp, immediate downward responsiveness when scrolling
    const focalY = containerRect.top + containerRect.height * 0.42;

    let closestIdx = 0;
    let minDistance = Infinity;

    milestones.forEach((m, idx) => {
      const el = cardRefs.current[m.id];
      if (el) {
        const rect = el.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenterY - focalY);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      }
    });

    setActiveMilestoneIndex(closestIdx);
  }, [milestones]);

  // Scroll to a specific milestone
  const scrollToMilestone = (index: number) => {
    setActiveMilestoneIndex(index);
    const m = milestones[index];
    if (m && cardRefs.current[m.id]) {
      cardRefs.current[m.id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      id="doors-portal"
      className={`relative w-full min-h-screen bg-[#141416] text-white overflow-hidden select-none ${
        transitionPhase === "inside" || transitionPhase === "zooming-in" || transitionPhase === "zooming-out"
          ? "z-[9999]"
          : "z-20"
      }`}
    >
      {/* Deep atmospheric ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-full max-w-6xl bg-gradient-to-b from-amber-500/10 via-orange-600/5 to-transparent blur-[140px]" />

      {/* =========================================================================
         SCREEN 1: 4-DOOR HERO SCREEN WITH TARGETED ZOOM (ALWAYS MOUNTED FOR REVERSIBILITY)
         ========================================================================= */}
      <motion.div
        ref={doorsContainerRef}
        animate={{
          opacity: transitionPhase === "inside" ? 0 : 1,
          scale:
            transitionPhase === "zooming-in"
              ? 4.5
              : transitionPhase === "zooming-out"
              ? [4.5, 1]
              : 1,
          filter: transitionPhase === "zooming-in" ? "blur(8px)" : "blur(0px)",
        }}
        transition={{
          duration: transitionPhase === "zooming-in" ? 0.6 : 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
          pointerEvents: transitionPhase === "idle" ? "auto" : "none",
        }}
        className="relative mx-auto max-w-7xl flex flex-col items-center justify-center min-h-screen py-24 px-4 sm:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Magic happens behind the doors
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto font-light">
            Hover to crack open and reveal capabilities, or click to enter the dedicated project room.
          </p>
        </div>

        {/* 4 Minimalist Rounded-Arch 3D Doors Side-by-Side */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto px-4">
          {doorCategories.map((cat) => {
            const isHovered = hoveredDoor === cat.id;
            const isThisActiveDoor = activeDoorId === cat.id;

            const doorRotation =
              isThisActiveDoor && transitionPhase === "zooming-in"
                ? -85
                : isThisActiveDoor && transitionPhase === "zooming-out"
                ? 0
                : isHovered
                ? -22
                : 0;

                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setHoveredDoor(cat.id)}
                    onMouseLeave={() => setHoveredDoor(null)}
                    onClick={(e) => handleEnterDoor(e, cat)}
                    className="group relative flex flex-col items-center cursor-pointer select-none"
                    style={{ perspective: 1200 }}
                  >
                    {/* Floating Skills Tooltip (Revealed on hover) */}
                    <AnimatePresence>
                      {isHovered && transitionPhase === "idle" && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -top-28 left-1/2 -translate-x-1/2 w-64 z-40 p-3 rounded-2xl bg-black/95 border border-white/20 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.95)] pointer-events-none"
                        >
                          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" style={{ color: cat.lightAccent }} />
                            <span>{cat.name}</span>
                          </div>
                          <ul className="text-xs text-neutral-200 space-y-1">
                            {cat.skills.map((s, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-1.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: cat.lightAccent }}
                                />
                                <span className="truncate">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Outer Rounded-Arch Door Frame */}
                    <div className="relative w-full aspect-[1/2] max-w-[240px] rounded-t-full bg-[#18191d] p-3 border-4 border-[#24262c] shadow-[0_25px_50px_rgba(0,0,0,0.9),inset_0_4px_12px_rgba(0,0,0,0.95)] overflow-hidden">
                      {/* Dark glowing doorway interior behind the door */}
                      <div
                        className="absolute inset-0 rounded-t-full bg-gradient-to-b from-black via-[#0d0e11] to-black flex items-center justify-center"
                        style={{
                          boxShadow: isHovered
                            ? `inset 0 0 35px ${cat.shadowColor}`
                            : "inset 0 0 15px rgba(0,0,0,0.9)",
                        }}
                      >
                        <div
                          className="w-16 h-40 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                          style={{ backgroundColor: cat.lightAccent }}
                        />
                      </div>

                      {/* 3D Swing Door Panel on Left Hinge */}
                      <motion.div
                        animate={{
                          rotateY: doorRotation,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 24,
                        }}
                        style={{
                          transformOrigin: "left center",
                          transformStyle: "preserve-3d",
                          backgroundColor: cat.doorColor,
                        }}
                        className="relative w-full h-full rounded-t-full shadow-[0_10px_25px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col items-center justify-between py-12 px-3 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/30 pointer-events-none" />
                        <div className="w-3/4 aspect-[1/1.5] rounded-t-full border border-white/15 pointer-events-none mt-2" />

                        {/* Gold Nameplate Plaque at Eye-Level */}
                        <div className="relative z-10 w-full max-w-[170px] py-2 px-2.5 rounded bg-gradient-to-r from-[#eab308] via-[#fde047] to-[#ca8a04] shadow-[0_4px_12px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.6)] border border-[#a16207] text-center my-auto">
                          <span className="font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider text-[#422006] font-mono block truncate drop-shadow-sm">
                            {cat.name}
                          </span>
                        </div>

                        {/* Brass Metallic Handle & Keyhole on Right */}
                        <div className="absolute right-3.5 top-[58%] -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
                          <div className="w-7 h-2.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#eab308] to-[#ca8a04] shadow-[0_2px_6px_rgba(0,0,0,0.7)] border border-[#854d0e]" />
                          <div className="w-2.5 h-3.5 rounded-sm bg-gradient-to-b from-[#eab308] to-[#854d0e] flex items-center justify-center p-0.5 shadow-sm">
                            <div className="w-1 h-1.5 bg-[#422006] rounded-full" />
                          </div>
                        </div>

                        <div className="w-3/4 h-24 rounded-b-xl border border-white/15 pointer-events-none" />
                      </motion.div>
                    </div>

                    {/* Bottom Label below door */}
                    <div className="mt-5 text-center">
                      <span className="text-sm font-semibold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                        {cat.name}
                      </span>
                      <span className="block text-[11px] font-mono text-[#A1A1AA] mt-0.5">
                        Click to enter ➔
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
      </motion.div>

      {/* =========================================================================
         SCREEN 2: 100% LOCKED LEFT PANEL + INDEPENDENT SCROLLING RIGHT PANEL
         ========================================================================= */}
      <AnimatePresence>
        {transitionPhase === "inside" && (
          <motion.div
            key="inside-door-showcase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden flex flex-col bg-[#141416] select-none"
          >
            {/* Top Bar with Category Breadcrumbs & Links */}
            <div className="h-16 shrink-0 border-b border-white/10 px-6 sm:px-12 flex items-center justify-between z-30 bg-[#141416]/95 backdrop-blur-md">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <button
                  onClick={handleBackToDoors}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-white group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#F59E0B] group-hover:-translate-x-0.5 transition-transform" />
                  <span>Doors</span>
                </button>
                <span>/</span>
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  {activeCategory.name}
                </span>
                <span>/</span>
                <span className="text-neutral-400">Timeline</span>
              </div>

              {/* Category Switcher Pills */}
              <div className="flex items-center gap-2">
                {doorCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveDoorId(c.id);
                      setActiveMilestoneIndex(0);
                      if (rightScrollContainerRef.current) {
                        rightScrollContainerRef.current.scrollTop = 0;
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      c.id === activeCategory.id
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                        : "text-neutral-400 hover:text-white border border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Screen Container: 50/50 Balanced Center Split */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-4rem)] overflow-hidden relative">
              
              {/* =====================================================================
                 LEFT COLUMN: 100% STATIC, BOLTED IN PLACE (EXACT 50% WIDTH)
                 ===================================================================== */}
              <div
                className="h-full overflow-hidden flex flex-col justify-center p-3 sm:p-4 lg:p-6 border-r border-white/10 select-none relative z-20 bg-[#121214]"
              >
                {activeCategory.id === "experience" ? (
                  /* Left Card (Simplified): Immersive Full Photograph Card (Replacing previous signboard/indicators) */
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-[#0E0E12] shadow-[0_0_35px_rgba(245,158,11,0.22),0_20px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between group p-2.5 sm:p-3.5">
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src="/experience/macenza-internship-ceremony.jpg"
                        alt="Macenza Internship Certificate Ceremony"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Rich Contrast, Color Grading & Cinematic Edge Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/25 rounded-xl sm:rounded-2xl" />

                      {/* Faint Golden Glow Highlights */}
                      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/15 via-transparent to-amber-500/15 blur-sm" />

                      {/* Subtle Bottom Caption Pill */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse shadow-[0_0_10px_#F59E0B]" />
                          <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">Macenza Internship Award</span>
                        </div>
                        <span className="text-xs font-mono text-amber-400 font-semibold">July — Oct 2026</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Floating Curved Card Container (for Projects, Certificates, Skills) */
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Soft Golden Ambient Light Spill behind the card */}
                    <div className="pointer-events-none absolute -inset-2.5 rounded-[32px] bg-gradient-to-br from-amber-500/25 via-transparent to-amber-600/15 blur-2xl" />

                    {/* Subtle Floating Dust Particles around glowing edges */}
                    <div className="pointer-events-none absolute inset-0 overflow-visible z-30">
                      <div className="absolute -top-1 left-12 w-1.5 h-1.5 rounded-full bg-[#FEF08A] shadow-[0_0_8px_#F59E0B] animate-pulse" />
                      <div className="absolute top-28 -left-1.5 w-1.5 h-1.5 rounded-full bg-[#FBBF24] shadow-[0_0_10px_#F59E0B] animate-ping opacity-75" style={{ animationDuration: '3.2s' }} />
                      <div className="absolute top-64 -left-1 w-1 h-1 rounded-full bg-[#FDE68A] shadow-[0_0_6px_#F59E0B] animate-pulse" style={{ animationDuration: '2.5s' }} />
                      <div className="absolute -bottom-1.5 right-16 w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B] animate-pulse" style={{ animationDuration: '3.8s' }} />
                    </div>

                    {/* Sleek Rounded Dark-Charcoal UI Card Border with Concentrated Neon Glow */}
                    <div
                      className="relative w-full h-full rounded-2xl sm:rounded-3xl p-[1.5px] sm:p-[2px] transition-all shadow-[0_0_45px_rgba(245,158,11,0.22),-8px_0_35px_rgba(245,158,11,0.3),12px_20px_45px_rgba(245,158,11,0.18),0_25px_60px_rgba(0,0,0,0.95)]"
                      style={{
                        background: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 20%, #B45309 42%, rgba(255,255,255,0.06) 65%, #D97706 88%, #FBBF24 100%)",
                      }}
                    >
                      {/* Bright White-Gold Glowing Node Dot on the upper-left vertical border */}
                      <div className="absolute -left-[6px] top-28 z-40 flex flex-col items-center pointer-events-none">
                        {/* Faint Vertical Light Trail extending up and down */}
                        <div
                          className="w-[1.5px] h-16 sm:h-20 -mb-2"
                          style={{
                            background: "linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.3) 30%, #F59E0B 70%, #FFFFFF 100%)",
                            filter: "drop-shadow(0 0 6px #F59E0B)",
                          }}
                        />
                        {/* Node Dot: Outer Ring + Center White Core */}
                        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#D97706] via-[#F59E0B] to-[#FEF08A] p-[1.5px] shadow-[0_0_12px_#F59E0B,0_0_24px_rgba(245,158,11,0.9)] flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-[#18181B] flex items-center justify-center p-[1px]">
                            <div className="w-full h-full rounded-full bg-white shadow-[0_0_6px_#FFFFFF]" />
                          </div>
                        </div>
                        {/* Trail Downward */}
                        <div
                          className="w-[1.5px] h-16 sm:h-20 -mt-2"
                          style={{
                            background: "linear-gradient(180deg, #FFFFFF 0%, #F59E0B 30%, rgba(245,158,11,0.2) 70%, transparent 100%)",
                            filter: "drop-shadow(0 0 6px #F59E0B)",
                          }}
                        />
                      </div>

                      {/* Inner Dark Charcoal Card Body */}
                      <div className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-1.5px)] sm:rounded-[calc(theme(borderRadius.3xl)-2px)] bg-[#141417] p-5 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden select-none">
                        {/* Subtle inner ambient shading */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-black/40" />
                    {/* Top Section: Hanging Swinging Nameplate Plaque */}
                    <div className="relative pt-2 pb-4 -mt-2">
                      {/* Top Ceiling Mounting Pegs (Fixed to ceiling bar) */}
                      <div className="w-full max-w-[430px] flex justify-between px-10 relative z-30 pointer-events-none">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#F3F4F6] via-[#9CA3AF] to-[#374151] shadow-lg border border-black/40 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#F3F4F6] via-[#9CA3AF] to-[#374151] shadow-lg border border-black/40 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                          </div>
                        </div>
                      </div>

                      {/* Swinging Assembly: Chains + Plaque */}
                      <motion.div
                        className="relative w-full max-w-[430px] -mt-1.5 origin-top"
                        style={{ transformOrigin: "50% -8px" }}
                        animate={{
                          rotate: [-4.8, 4.8, -4.8],
                          x: [-2.5, 2.5, -2.5],
                        }}
                        transition={{
                          duration: 4.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {/* Vintage Golden-Brass Suspension Chains */}
                        <div className="flex justify-between px-10 relative z-10 pointer-events-none">
                          {/* Left Golden-Brass Chain */}
                          <svg width="12" height="38" viewBox="0 0 12 38" fill="none" className="overflow-visible drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                            <ellipse cx="6" cy="6" rx="4" ry="6" stroke="#D97706" strokeWidth="2" fill="#78350F" />
                            <ellipse cx="6" cy="15" rx="3.5" ry="5.5" stroke="#FBBF24" strokeWidth="1.8" fill="#92400E" />
                            <ellipse cx="6" cy="24" rx="4" ry="6" stroke="#D97706" strokeWidth="2" fill="#78350F" />
                            <ellipse cx="6" cy="33" rx="3.5" ry="5.5" stroke="#FEF08A" strokeWidth="1.8" fill="#B45309" />
                          </svg>
                          {/* Right Golden-Brass Chain */}
                          <svg width="12" height="38" viewBox="0 0 12 38" fill="none" className="overflow-visible drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                            <ellipse cx="6" cy="6" rx="4" ry="6" stroke="#D97706" strokeWidth="2" fill="#78350F" />
                            <ellipse cx="6" cy="15" rx="3.5" ry="5.5" stroke="#FBBF24" strokeWidth="1.8" fill="#92400E" />
                            <ellipse cx="6" cy="24" rx="4" ry="6" stroke="#D97706" strokeWidth="2" fill="#78350F" />
                            <ellipse cx="6" cy="33" rx="3.5" ry="5.5" stroke="#FEF08A" strokeWidth="1.8" fill="#B45309" />
                          </svg>
                        </div>

                        {/* Skin/Cardstock Hanging Plaque */}
                        <motion.div
                          className="relative rounded-2xl p-5 sm:p-6 border border-[#B08658]/70 select-none overflow-hidden"
                          style={{
                            background: "linear-gradient(175deg, #EAD0B0 0%, #DCBA95 38%, #C79F74 78%, #B88E62 100%)",
                          }}
                          animate={{
                            boxShadow: [
                              "14px 26px 38px -6px rgba(0, 0, 0, 0.75), 0 0 15px rgba(184, 142, 98, 0.2)",
                              "-14px 26px 38px -6px rgba(0, 0, 0, 0.75), 0 0 15px rgba(184, 142, 98, 0.2)",
                              "14px 26px 38px -6px rgba(0, 0, 0, 0.75), 0 0 15px rgba(184, 142, 98, 0.2)",
                            ],
                          }}
                          transition={{
                            duration: 4.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {/* Subtle Paper / Leather Surface Highlights */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/15 pointer-events-none" />
                          <div className="absolute inset-[3px] rounded-xl border border-white/20 pointer-events-none" />

                          {/* Top Brass Eyelets (Where chains attach) */}
                          <div className="absolute top-2.5 left-8 w-4 h-4 rounded-full bg-gradient-to-tr from-[#92400E] via-[#FBBF24] to-[#FEF3C7] shadow-md border border-[#78350F] flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#29180A] shadow-inner" />
                          </div>
                          <div className="absolute top-2.5 right-8 w-4 h-4 rounded-full bg-gradient-to-tr from-[#92400E] via-[#FBBF24] to-[#FEF3C7] shadow-md border border-[#78350F] flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#29180A] shadow-inner" />
                          </div>

                          {/* Bottom Brass Corner Pins */}
                          <div className="absolute bottom-2.5 left-3 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#92400E] via-[#FBBF24] to-[#FEF3C7] shadow-sm border border-[#78350F]" />
                          <div className="absolute bottom-2.5 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#92400E] via-[#FBBF24] to-[#FEF3C7] shadow-sm border border-[#78350F]" />

                          {/* Plaque Content */}
                          <div className="space-y-2 pt-1 relative z-10">
                            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#6E4F28] font-bold">
                              <span className="w-2 h-2 rounded-full bg-[#E58A1F] shadow-[0_0_8px_#E58A1F] animate-pulse" />
                              <span>{activeCategory.name.toUpperCase()} // TIMELINE</span>
                            </div>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#171412] leading-tight">
                              Let&apos;s go back in time.
                            </h2>

                            <p className="text-[11px] sm:text-xs text-[#4F3E2F] font-medium max-w-sm leading-relaxed">
                              A chronological retrospective of software engineering, design systems, and academic milestones.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Center Section: Dynamic Active Project Name & Step Indicator */}
                    <div className="my-auto py-3">
                      <div className="min-h-[110px] sm:min-h-[130px] flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentMilestone.id}
                            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-1.5"
                          >
                            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#F59E0B] font-semibold">
                              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse shadow-[0_0_8px_#F59E0B]" />
                              <span>PROJECT {currentMilestone.stepNumber} // ACTIVE</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-[0_4px_24px_rgba(255,255,255,0.18)]">
                              {currentMilestone.role}
                            </h3>
                            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                              {currentMilestone.company}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-300 mt-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#F59E0B]" />
                        <span className="text-white font-bold">{currentMilestone.dateRange}</span>
                      </div>

                      <div className="w-full max-w-xs flex flex-col gap-2 mt-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-amber-400 font-bold">{currentMilestone.stepNumber}</span>
                          <span className="text-[#A1A1AA]">
                            / {milestones.length < 10 ? `0${milestones.length}` : milestones.length}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-1.5 w-full">
                          {milestones.map((m, sI) => {
                            const isActiveSegment = sI === activeMilestoneIndex;
                            const isPassedSegment = sI < activeMilestoneIndex;

                            return (
                              <button
                                key={m.id}
                                onClick={() => scrollToMilestone(sI)}
                                className="flex-1 h-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none"
                                style={{
                                  backgroundColor: isActiveSegment
                                    ? "#F59E0B"
                                    : isPassedSegment
                                    ? "#B45309"
                                    : "#27272A",
                                  boxShadow: isActiveSegment
                                    ? "0 0 12px #F59E0B"
                                    : "none",
                                }}
                                title={`Jump to ${m.role}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section: Back Button in Natural Flow */}
                    <div className="pt-2 shrink-0">
                      <button
                        onClick={handleBackToDoors}
                        className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/90 hover:bg-black px-6 py-3 sm:px-7 sm:py-3 text-xs sm:text-sm font-mono font-bold text-white backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.9)] hover:border-amber-400/60 hover:text-amber-300 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4 text-[#F59E0B]" />
                        <span>← Back to the doors</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
              </div>

              {/* =====================================================================
                 RIGHT COLUMN: INDEPENDENT SCROLLABLE VIEWPORT (EXACT 50% WIDTH)
                 ===================================================================== */}
              <div
                ref={rightScrollContainerRef}
                onScroll={handleRightScroll}
                className="h-full overflow-y-auto overscroll-contain pl-3 sm:pl-4 pr-3 sm:pr-5 lg:pr-6 relative z-10"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overscrollBehavior: "contain",
                }}
              >
                {/* Continuous Vertical Timeline Track Line - Positioned flush against the cards */}
                <div className="relative border-l border-white/10 pl-3 sm:pl-3.5 py-[22vh] space-y-12 sm:space-y-14 w-full">
                  {milestones.map((milestone, idx) => {
                    const isActive = idx === activeMilestoneIndex;

                    return (
                      <div
                        key={milestone.id}
                        ref={(el) => {
                          cardRefs.current[milestone.id] = el;
                        }}
                        className="relative transition-all duration-500 ease-out w-full"
                        style={{
                          opacity: isActive ? 1 : 0.2,
                          transform: isActive ? "scale(1)" : "scale(0.98)",
                        }}
                      >
                        {/* Glowing Circular Double-Ring Indicator Dot with Neon LED Light Trail */}
                        {isActive ? (
                          <motion.div
                            layoutId="activeYellowTimelineDot"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 24,
                              mass: 0.7,
                            }}
                            className="absolute -left-[20px] sm:-left-[22px] top-6 z-30 cursor-pointer flex flex-col items-center"
                          >
                            {/* Slender Vibrant Neon / LED Light Trail extending downward */}
                            <div
                              className="absolute top-3 w-[2.5px] h-36 sm:h-44 pointer-events-none rounded-full"
                              style={{
                                background: "linear-gradient(180deg, #FFFFFF 0%, #FBBF24 20%, #F59E0B 50%, rgba(245,158,11,0.2) 80%, transparent 100%)",
                                boxShadow: "0 0 10px #F59E0B, 0 0 20px rgba(245,158,11,0.6)",
                              }}
                            />

                            {/* Lens Flare Ambient Bloom Aura */}
                            <div className="absolute -inset-2 rounded-full bg-amber-500/25 blur-md animate-pulse pointer-events-none" />

                            {/* Outer Glowing Ring */}
                            <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-tr from-[#D97706] via-[#F59E0B] to-[#FDE68A] p-[2px] shadow-[0_0_16px_#F59E0B,0_0_36px_rgba(245,158,11,0.85)] flex items-center justify-center relative z-10">
                              {/* Inner Golden Ring */}
                              <div className="w-full h-full rounded-full bg-[#18181B] flex items-center justify-center p-[2px]">
                                {/* Intense Center White Core */}
                                <div className="w-full h-full rounded-full bg-white shadow-[0_0_8px_#FFFFFF,0_0_14px_#FDE68A]" />
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <div
                            onClick={() => scrollToMilestone(idx)}
                            className="absolute -left-[16px] sm:-left-[18px] top-7 w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-[#F59E0B]/60 transition-colors duration-300 cursor-pointer"
                            title={`Jump to ${milestone.role}`}
                          />
                        )}

                        {/* Pixel-Precise Card Design matching reference structure */}
                        <div
                          className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 backdrop-blur-xl transition-all overflow-hidden ${
                            activeCategory.id === "experience"
                              ? "border border-amber-500/35 bg-gradient-to-br from-[#181822] via-[#121217] to-[#0A0A0E] shadow-[0_0_40px_rgba(245,158,11,0.18),0_20px_50px_rgba(0,0,0,0.95)] ring-1 ring-amber-400/25"
                              : "border border-white/10 bg-[#161619] shadow-[0_16px_40px_rgba(0,0,0,0.85)] hover:border-white/20"
                          }`}
                        >
                          {/* Faint Watermark Year in Top-Right Corner */}
                          <div className="pointer-events-none absolute right-6 top-3 text-5xl sm:text-6xl font-black text-white/[0.04] select-none font-mono">
                            {milestone.watermarkYear}
                          </div>

                          {/* Top-Right Glowing Blue Macenza Logo (for Macenza milestones) */}
                          {milestone.id.startsWith("exp-macenza") && (
                            <div className="absolute top-5 right-6 sm:top-6 sm:right-8 z-20">
                              <div className="w-28 sm:w-36 h-12 sm:h-14 rounded-2xl bg-white/95 p-2 shadow-[0_0_24px_rgba(37,99,235,0.45)] border border-blue-400/40 flex items-center justify-center hover:scale-105 transition-transform">
                                <img src="/experience/macenza-logo.png" alt="Macenza" className="w-full h-full object-contain" />
                              </div>
                            </div>
                          )}

                          {/* Top-Left Rounded Dark-Amber Pill Badge + Step Counter */}
                          <div className="flex items-center gap-2 mb-2 relative z-10">
                            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/25 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
                              {milestone.dateRange}
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                              {milestone.stepNumber} / {milestones.length < 10 ? `0${milestones.length}` : milestones.length}
                            </span>
                          </div>

                          {/* White Card Title (Bold & crisp) */}
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug relative z-10 max-w-lg">
                            {milestone.role}
                          </h3>

                          {/* Uppercase Orange Subtitle */}
                          <div className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] mt-1 mb-5 relative z-10 font-mono">
                            {milestone.company}
                          </div>

                          {/* 2-Column Split: Image Mockup on Left + Bullets & Buttons on Right */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center relative z-10">
                            {/* Left Column: Device Mockup Screen or Certificate Picture Frame (Hidden for Experience as full photo is on left screen) */}
                            {milestone.image && activeCategory.id !== "experience" && (
                              <div className="md:col-span-5 lg:col-span-5 xl:col-span-5 relative">
                                {activeCategory.id === "certificates" ? (
                                  /* Elegant Picture Frame for Certificates (matching user reference) */
                                  <div className="relative rounded-xl overflow-hidden border-[6px] sm:border-[8px] border-[#222226] bg-[#101014] ring-1 ring-[#F59E0B]/50 shadow-[0_16px_40px_rgba(0,0,0,0.95)] p-1.5 flex items-center justify-center group/img">
                                    <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-[#0A0A0D] border border-amber-500/20 flex items-center justify-center">
                                      <img
                                        src={milestone.image}
                                        alt={milestone.role}
                                        className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/img:scale-105"
                                      />
                                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent" />
                                    </div>
                                  </div>
                                ) : (
                                  /* Sleek Device Mockup Frame for Projects */
                                  <div className="rounded-xl overflow-hidden border border-neutral-700/60 bg-[#0A0A0C] shadow-[0_8px_30px_rgba(0,0,0,0.85)] p-1.5 flex items-center justify-center group/img">
                                    <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-black/90">
                                      <img
                                        src={milestone.image}
                                        alt={milestone.role}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                                      />
                                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Right Column: 3 Orange Bullet Points or Detailed Modules + Action Buttons */}
                            <div className={`${milestone.image && activeCategory.id !== "experience" ? "md:col-span-7 lg:col-span-7 xl:col-span-7" : "md:col-span-12"} flex flex-col justify-between h-full space-y-4`}>
                              {milestone.modules && milestone.modules.length > 0 ? (
                                <div className="space-y-3.5 pr-1">
                                  {milestone.modules.map((mod, mI) => (
                                    <div key={mI} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-amber-500/30 transition-all">
                                      <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-amber-400">
                                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] shrink-0" />
                                        <span>{mod.title}</span>
                                      </div>
                                      <p className="mt-2 text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed pl-4">
                                        {mod.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              ) : activeCategory.id === "experience" ? (
                                <div className="space-y-4 text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                                  {milestone.bullets.map((bullet, bI) => (
                                    <div key={bI} className="flex items-start gap-3">
                                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1.5 shrink-0 shadow-[0_0_8px_#F59E0B]" />
                                      <p className="leading-relaxed text-neutral-200">{bullet}</p>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-3 text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                                  {milestone.bullets.map((bullet, bI) => (
                                    <li key={bI} className="flex items-start gap-2.5">
                                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1 shrink-0 shadow-[0_0_8px_#F59E0B]" />
                                      <span className="leading-snug">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {/* Action Buttons: GitHub for Projects, LinkedIn for Certificates & Experience, View for Both */}
                              {(activeCategory.id === "projects" || activeCategory.id === "certificates" || activeCategory.id === "experience") && (
                                <div className="pt-3 flex items-center gap-3">
                                  {activeCategory.id === "experience" ? (
                                    <>
                                      <a
                                        href={milestone.linkedinUrl || "https://www.linkedin.com/in/tejaswi-sen/"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold text-white bg-[#0A66C2] hover:bg-[#004182] border border-blue-400/60 shadow-[0_0_18px_rgba(10,102,194,0.5)] transition-all hover:scale-105 active:scale-95"
                                      >
                                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                        <span>LinkedIn</span>
                                      </a>
                                      <a
                                        href={milestone.liveUrl || milestone.image || "https://tejaswisen.dev"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 shadow-[0_0_18px_rgba(245,158,11,0.25)] transition-all hover:scale-105 active:scale-95"
                                      >
                                        <span>View</span>
                                        <span className="text-amber-400 text-sm">↗</span>
                                      </a>
                                    </>
                                  ) : activeCategory.id === "projects" ? (
                                    <a
                                      href={milestone.githubUrl || "https://github.com/tejaswisen"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold text-white bg-black/85 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_22px_rgba(245,158,11,0.35)] transition-all hover:scale-105 active:scale-95"
                                    >
                                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                      </svg>
                                      <span>GitHub</span>
                                    </a>
                                  ) : (
                                    <a
                                      href={milestone.linkedinUrl || "https://www.linkedin.com/in/tejaswi-sen/"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold text-white bg-black/85 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_22px_rgba(245,158,11,0.35)] transition-all hover:scale-105 active:scale-95"
                                    >
                                      <svg className="w-3.5 h-3.5 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                      </svg>
                                      <span>LinkedIn</span>
                                    </a>
                                  )}

                                  {activeCategory.id !== "experience" && (
                                    <a
                                      href={milestone.liveUrl || milestone.image || "https://tejaswisen.dev"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold text-white bg-black/85 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_22px_rgba(245,158,11,0.35)] transition-all hover:scale-105 active:scale-95"
                                    >
                                      <span>View</span>
                                      <span className="text-amber-400 text-sm">↗</span>
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
