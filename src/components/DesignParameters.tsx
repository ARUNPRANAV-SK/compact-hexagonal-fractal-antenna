"use client";

import React from "react";
import { motion } from "framer-motion";
import { ListFilter, Settings, Sliders } from "lucide-react";

export default function DesignParameters() {
  const parameters = [
    { name: "Operating Frequency", value: "2.4 GHz", note: "ISM Band (Wi-Fi, Bluetooth)" },
    { name: "Substrate Material", value: "FR4 Glass Epoxy", note: "Standard low-cost RF laminate" },
    { name: "Relative Permittivity (εr)", value: "4.4", note: "Dielectric constant of substrate" },
    { name: "Substrate Thickness (h)", value: "1.6 mm", note: "Standard double-sided PCB thickness" },
    { name: "Loss Tangent (tan δ)", value: "0.02", note: "Substrate dielectric loss factor" },
    { name: "Feed Mechanism", value: "Microstrip Line Feed", note: "Direct coplanar strip connection" },
    { name: "Characteristic Impedance (Z0)", value: "50 Ω", note: "Matched to standard SMA connectors" },
    { name: "Copper Cladding Thickness", value: "35 μm", note: "Standard 1 oz copper layer" },
  ];

  return (
    <section id="parameters" className="py-24 relative bg-slate-950">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Design &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Substrate Parameters
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Exact hardware parameters and substrate settings utilized for design formulation and HFSS
            electromagnetic simulation models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Blueprint Schematic */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[360px] rounded-2xl border border-dashed border-cyan-500/30 bg-cyan-950/5 p-6 flex flex-col items-center justify-center">
              {/* Technical guidelines/grid overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-400/60 tracking-wider">
                GEOMETRIC SCHEMATIC
              </div>

              {/* Antenna Vector blueprint */}
              <svg width="220" height="220" viewBox="0 0 200 200" className="relative z-10">
                {/* Horizontal reference axis */}
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
                {/* Vertical reference axis */}
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Substrate boundary outer box (dotted) */}
                <rect x="25" y="25" width="150" height="150" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeDasharray="2 2" />

                {/* Microstrip feed line */}
                <rect x="94" y="125" width="12" height="50" fill="none" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1.5" />
                
                {/* Hexagonal Patch */}
                <polygon
                  points="100,45 140,68 140,113 100,135 60,113 60,68"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                />

                {/* Annotation lines & arrows */}
                {/* Width dimension */}
                <line x1="60" y1="35" x2="140" y2="35" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <polygon points="60,35 65,32 65,38" fill="rgba(255,255,255,0.6)" />
                <polygon points="140,35 135,32 135,38" fill="rgba(255,255,255,0.6)" />
                <text x="100" y="28" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle" fontFamily="monospace">W = 25 mm</text>

                {/* Length dimension */}
                <line x1="155" y1="45" x2="155" y2="135" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <polygon points="155,45 152,50 158,50" fill="rgba(255,255,255,0.6)" />
                <polygon points="155,135 152,130 158,130" fill="rgba(255,255,255,0.6)" />
                <text x="163" y="93" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="start" fontFamily="monospace">L = 28 mm</text>

                {/* Center circle annotation */}
                <circle cx="100" cy="90" r="15" fill="none" stroke="rgba(239, 68, 68, 0.7)" strokeWidth="1" />
                <line x1="100" y1="90" x2="115" y2="75" stroke="rgba(239, 68, 68, 0.7)" strokeWidth="1" />
                <text x="118" y="72" fill="rgba(239, 68, 68, 0.9)" fontSize="8" fontFamily="monospace">R1 (Slot)</text>
              </svg>

              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-xs text-slate-300 font-medium">Dimension Blueprint</span>
                <span className="text-[10px] text-slate-500 font-mono">Drawing scale: NTS (Not to Scale)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec sheet table */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border-slate-800 shadow-xl overflow-hidden">
              <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-base">Antenna Specs Datasheet</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Rev 1.0
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {parameters.map((param, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 hover:bg-slate-900/20 transition-colors"
                  >
                    <div className="sm:col-span-4 text-sm font-semibold text-slate-300 flex items-center">
                      {param.name}
                    </div>
                    <div className="sm:col-span-3 text-sm font-bold text-cyan-400 font-mono flex items-center">
                      {param.value}
                    </div>
                    <div className="sm:col-span-5 text-xs text-slate-400 font-light flex items-center">
                      {param.note}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
