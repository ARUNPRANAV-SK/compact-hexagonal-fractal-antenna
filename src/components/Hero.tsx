"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Radio, Shield, Network } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Decorative Floating Tech Grids */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Category */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase border border-cyan-500/30 rounded-full bg-cyan-950/40 text-cyan-400">
                Electromagnetics & RF Design
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6"
            >
              Compact Hexagonal{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Fractal Patch Antenna
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-light"
            >
              A high-performance microstrip antenna operating at the{" "}
              <span className="text-cyan-400 font-semibold">2.4 GHz ISM band</span>. Optimized
              using circular fractal slots to increase electrical path length while maintaining
              a compact structural footprint, ideal for Wi-Fi, Bluetooth, and IoT.
            </motion.p>

            {/* Metadata Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8 max-w-lg"
            >
              <div className="flex flex-col gap-1 p-3 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Target Frequency
                </span>
                <span className="text-lg font-bold text-cyan-400">2.4 GHz</span>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Substrate
                </span>
                <span className="text-lg font-bold text-blue-400">FR4 Epoxy</span>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Simulation Tool
                </span>
                <span className="text-lg font-bold text-cyan-400">ANSYS HFSS</span>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <a
                href="#overview"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explore Technical Details</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
              <a
                href="#report"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 text-slate-200 hover:border-slate-500 transition-all"
              >
                <span>Read Full Report</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right Visuals (Antenna Schematic) */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" as any, delay: 0.3 }}
          >
            {/* Radial glow directly behind the antenna */}
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[80px]" />

            {/* Interactive Schematic Frame */}
            <div className="relative w-[340px] h-[400px] sm:w-[380px] sm:h-[440px] rounded-2xl glass-card flex items-center justify-center p-6 border-slate-800 shadow-2xl">
              {/* Outer grid details */}
              <div className="absolute top-3 left-4 text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>RF EMISSION PATTERN</span>
              </div>
              <div className="absolute bottom-3 right-4 text-[9px] font-mono text-slate-500 uppercase">
                FR4 Substrate: 1.6mm
              </div>

              {/* Antenna Illustration Wrapper */}
              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* 1st radiating wave */}
                <div className="absolute w-24 h-24 rounded-full border border-cyan-500/40 bg-cyan-500/5 animate-pulse-wave-1 pointer-events-none" />
                {/* 2nd radiating wave */}
                <div className="absolute w-24 h-24 rounded-full border border-cyan-400/30 bg-cyan-400/5 animate-pulse-wave-2 pointer-events-none" />
                {/* 3rd radiating wave */}
                <div className="absolute w-24 h-24 rounded-full border border-blue-500/20 bg-blue-500/5 animate-pulse-wave-3 pointer-events-none" />

                {/* SVG Antenna Isometric/Flat Schematic */}
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="relative z-10 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                  {/* FR4 Substrate (Base Layer) */}
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    rx="12"
                    fill="url(#substrateGradient)"
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="1.5"
                  />

                  {/* Microstrip Line Feed (Line leading to the patch) */}
                  <rect
                    x="94"
                    y="120"
                    width="12"
                    height="60"
                    fill="url(#copperGradient)"
                    stroke="url(#copperStroke)"
                    strokeWidth="0.5"
                  />

                  {/* Ground Plane Edge Details */}
                  <path
                    d="M 20 170 L 180 170"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Hexagonal Patch Antenna Shape */}
                  {/* Hexagon vertices: center (100, 90), radius 50 */}
                  {/* points: x = cx + r*cos(a), y = cy + r*sin(a) */}
                  {/* angles: 0, 60, 120, 180, 240, 300 deg */}
                  <polygon
                    points="100,40 143.3,65 143.3,115 100,140 56.7,115 56.7,65"
                    fill="url(#copperGradient)"
                    stroke="url(#copperStroke)"
                    strokeWidth="1"
                  />

                  {/* Circular Fractal Slots (Miniaturization technique) */}
                  {/* Center Slot */}
                  <circle
                    cx="100"
                    cy="90"
                    r="14"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.4)"
                    strokeWidth="1"
                  />

                  {/* 1st Order Fractal Circular Slots around the vertices */}
                  <circle
                    cx="100"
                    cy="52"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="133"
                    cy="71"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="133"
                    cy="109"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="100"
                    cy="128"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="67"
                    cy="109"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="67"
                    cy="71"
                    r="6"
                    fill="#0a0f1d"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.75"
                  />

                  {/* Mini center core slot dot */}
                  <circle cx="100" cy="90" r="4" fill="url(#cyanGlow)" />

                  {/* Definitions for gradients */}
                  <defs>
                    <linearGradient id="substrateGradient" x1="20" y1="20" x2="180" y2="180">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="copperGradient" x1="56.7" y1="40" x2="143.3" y2="140">
                      <stop offset="0%" stopColor="#b45309" /> {/* Copper / Bronze */}
                      <stop offset="35%" stopColor="#f59e0b" />
                      <stop offset="70%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id="copperStroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Antenna metadata overlay boxes */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2 flex flex-col gap-2 scale-90 sm:scale-100">
                <div className="px-2.5 py-1 text-[9px] font-mono glass-card border-l-2 border-l-cyan-400 text-slate-300">
                  S11: -28.52 dB
                </div>
                <div className="px-2.5 py-1 text-[9px] font-mono glass-card border-l-2 border-l-blue-400 text-slate-300">
                  VSWR: 1.15
                </div>
              </div>

              <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-2 scale-90 sm:scale-100">
                <div className="px-2.5 py-1 text-[9px] font-mono glass-card border-r-2 border-r-cyan-400 text-slate-300 text-right">
                  Gain: 2.1 dBi
                </div>
                <div className="px-2.5 py-1 text-[9px] font-mono glass-card border-r-2 border-r-blue-400 text-slate-300 text-right">
                  BW: 95 MHz
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
