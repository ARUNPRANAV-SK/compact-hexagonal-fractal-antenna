"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Radio, RefreshCw, Cpu, Layers, Sparkles } from "lucide-react";

interface ScopeItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FutureScope() {
  const enhancements: ScopeItem[] = [
    {
      title: "Multi-band & Wideband Operation",
      description: "Introducing additional fractal cuts to excite secondary resonances, enabling concurrent support for 5 GHz Wi-Fi and 5G sub-6 bands.",
      icon: <Radio className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Gain Enhancement via Metamaterials",
      description: "Integrating reactive impedance surfaces or artificial magnetic conductors (AMC) behind the substrate to suppress backlobe radiation and boost gain.",
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Antenna Arrays & Beamforming",
      description: "Combining multiple hexagonal elements in a matrix feed network to build high-directivity arrays for wireless router arrays.",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Advanced Substrate Materials",
      description: "Transitioning from FR4 to low-loss materials (like Rogers RT/duroid or flexible polyimides) to reduce insertion losses at higher frequencies.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Callout */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-4">
              RESEARCH DIRECTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mb-6">
              Future Scope &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Enhancements
              </span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              The modularity of fractal slot geometry provides a solid groundwork for secondary iterations.
              Future studies can optimize this basic hexagonal shape for higher frequencies, wider bandwidths,
              and directional beam configurations.
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 animate-spin-slow" />
              <p className="text-xs text-slate-300 font-light">
                Ongoing investigations study standard 3rd-order Koch fractal modifications along the edges of the hexagon for multi-resonance capabilities.
              </p>
            </div>
          </div>

          {/* Right Column: Enhancements grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {enhancements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 flex flex-col justify-between hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-center mb-4 shadow-inner">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[10px] text-cyan-400/80 hover:text-cyan-400 cursor-pointer font-semibold transition-colors">
                    <span>Research details</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
