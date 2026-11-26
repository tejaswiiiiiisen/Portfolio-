"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Command, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  // Detect when door portal is opened to hide global floating navbar
  useEffect(() => {
    const updateDoorStatus = () => {
      setIsDoorOpen(document.body.classList.contains("door-open"));
    };
    updateDoorStatus();
    const observer = new MutationObserver(updateDoorStatus);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My Story", href: "/my-story" },
    { name: "Contact", href: "/contact" },
  ];

  // Auto-hide navbar when scrolling down, scroll back in when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current + 8) {
        // Scrolling down -> scroll up out of screen
        setIsVisible(false);
      } else if (currentScrollY < lastScrollYRef.current - 12) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isDoorOpen) return null;

  return (
    <>
      {/* Long Thin Curved Transparent Floating Navbar Header (Auto-scrolls up on scroll) */}
      <header
        className={`fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
        }`}
      >
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-2xl sm:max-w-3xl h-12 sm:h-13 px-3.5 sm:px-5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all">
          {/* Left: Brand Moniker */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-left group"
            >
              <span className="font-extrabold text-xs sm:text-sm tracking-wider text-white hover:text-amber-400 transition-colors">
                TEJASWI SEN
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold bg-white/15 border border-white/10 shadow-sm"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Controls: Quick Search */}
          <div className="flex items-center gap-2">
            {/* Search Pill: [🔍 Ctrl K] */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Search (Ctrl + K)"
            >
              <Search className="h-3 w-3 text-neutral-400" />
              <span className="font-mono text-[10px] text-neutral-500">Ctrl K</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Interactive Quick Command / Search Modal (Triggered by Ctrl+K) */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#0a0a0a] p-4 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3 px-2">
              <Search className="h-4 w-4 text-sky-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, capabilities, case studies..."
                autoFocus
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded text-neutral-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 space-y-1">
              <div className="text-[11px] font-mono text-neutral-500 px-2 py-1">QUICK JUMP</div>
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsSearchOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition-colors text-left"
                >
                  <span>{item.name} Section</span>
                  <Command className="h-3 w-3 text-neutral-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
