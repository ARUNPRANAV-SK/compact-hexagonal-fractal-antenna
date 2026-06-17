"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Parameters", href: "#parameters" },
    { name: "Workflow", href: "#workflow" },
    { name: "Results", href: "#results" },
    { name: "Applications", href: "#applications" },
    { name: "Report", href: "#report" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-lg border border-cyan-400/20 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-slate-100 uppercase">
                Fractal Patch
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400">
                2.4 GHz RF Antenna
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* PDF Download Button */}
          <div className="flex items-center gap-4">
            <a
              href="/docs/Hexagonal_Fractal_Patch_Antenna_Report.pdf"
              download="Hexagonal_Fractal_Patch_Antenna_Report.pdf"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
