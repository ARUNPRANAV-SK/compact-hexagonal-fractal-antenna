"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Target, CheckCircle2, FileText } from "lucide-react";

type TabType = "abstract" | "problem";

export default function Overview() {
  const [activeTab, setActiveTab] = useState<TabType>("abstract");

  const objectives = [
    "Design a compact microstrip antenna suitable for mobile and embedded devices.",
    "Reduce antenna size by 30-40% using fractal slot geometry without shifting frequency.",
    "Improve return loss characteristics (S11) to achieve values below -15 dB at resonance.",
    "Achieve stable, omnidirectional E-Plane and H-Plane radiation patterns.",
    "Enhance impedance matching close to 50 ohms and keep VSWR as close to 1.0 as possible.",
    "Support wireless communication protocols (Wi-Fi, Bluetooth, and IoT applications).",
  ];

  return (
    <section id="overview" className="py-24 relative bg-slate-900 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Panel: Tabs for Abstract & Problem Statement */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Tab Toggles */}
            <div className="flex gap-4 p-1 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-8 max-w-sm self-start">
              <button
                onClick={() => setActiveTab("abstract")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "abstract"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Abstract</span>
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "problem"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="relative min-h-[300px] rounded-2xl glass-card p-8 border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-cyan-400/40 uppercase tracking-widest">
                ECE RESEARCH
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "abstract" ? (
                  <motion.div
                    key="abstract"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Executive Abstract
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed mb-6">
                      The rapid growth of wireless communication technologies demands compact, low-profile,
                      and efficient antennas. This project presents a Compact Hexagonal Fractal Antenna
                      designed specifically for operation at 2.4 GHz.
                    </p>
                    <p className="text-slate-300 font-light leading-relaxed">
                      By integrating circular fractal slot elements inside a traditional hexagonal patch
                      boundary, the electrical path length of the currents is elongated. This configuration
                      enables a significant reduction in the antenna's physical volume while maintaining high
                      radiation efficiency, return loss, stable gain, and impedance matching. The entire
                      system was simulated and optimized in ANSYS HFSS.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="problem"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      The Design Challenge
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed mb-6">
                      Conventional microstrip patch antennas operating in the gigahertz spectrum suffer
                      from structural limitations, particularly in modern miniaturized IoT and wearable
                      applications where physical space is extremely constrained.
                    </p>
                    <p className="text-slate-300 font-light leading-relaxed">
                      Furthermore, simple patch antennas exhibit relatively narrow bandwidths and poor
                      impedance matching if miniaturized via standard methods. Standard size-reduction
                      techniques often degrade radiation properties or shift resonance frequencies.
                      This design resolves these issues through fractal geometries that fold the electrical
                      field distribution without expanding the antenna's physical footprint.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Technologies Used Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {["ANSYS HFSS", "FR4 Substrate", "Microstrip Feed", "Fractal Geometry"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Project Objectives */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Project Objectives</h3>
                <p className="text-xs text-slate-400">Design goals and criteria achieved</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-800 bg-slate-950/40 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 font-light leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
