"use client";

import React from "react";
import { FileText, Download, CheckCircle, ExternalLink } from "lucide-react";

export default function PdfViewer() {
  const documentSections = [
    "Introduction & Literature Review",
    "Microstrip Patch Geometry Formulation",
    "First and Second Order Fractal Slot Cavity Design",
    "ANSYS HFSS 3D Modeling Setup",
    "Parametric Sweep Optimization Logs",
    "Fabrication and PCB Etching Procedures",
    "VNA Performance Verification & Comparative Analysis",
  ];

  return (
    <section id="report" className="py-24 relative bg-slate-900 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl border-slate-800 shadow-2xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Document Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 h-72 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 shadow-2xl flex flex-col justify-between p-5 overflow-hidden group hover:border-cyan-500/40 transition-colors">
                {/* Tech styling */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
                
                <div className="flex justify-between items-start">
                  <div className="w-8 h-8 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[8px] font-mono text-cyan-400 bg-cyan-950 border border-cyan-500/20 px-1.5 py-0.5 rounded">
                    PDF PAPER
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Compact Hexagonal Fractal Antenna Design
                  </h4>
                  <div className="h-0.5 w-12 bg-cyan-400" />
                  <p className="text-[9px] text-slate-400 font-light font-mono uppercase tracking-widest">
                    Arun Pranav SK
                  </p>
                </div>

                <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                  <span>Pages: 12</span>
                  <span>Size: 855 KB</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text Information & Download */}
            <div className="md:col-span-7">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                ACADEMIC REPORT
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                Hexagonal Fractal Patch Antenna Report Final (1).pdf
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                Read the final publication-ready project report. This document details the step-by-step ECE methodologies, mathematical equations, ANSYS HFSS mesh setup, parametric simulation outputs, and comparison data between simulations and physical testing.
              </p>

              <div className="mb-8">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-3">
                  Document Contents Include:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {documentSections.map((sec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300 font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/docs/Hexagonal_Fractal_Patch_Antenna_Report.pdf"
                  download="Hexagonal_Fractal_Patch_Antenna_Report.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-[0_4px_15px_rgba(6,182,212,0.25)] hover:scale-105 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Report Document</span>
                </a>
                <a
                  href="/docs/Hexagonal_Fractal_Patch_Antenna_Report.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 text-slate-200 text-xs font-bold transition-all"
                >
                  <span>Open in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
