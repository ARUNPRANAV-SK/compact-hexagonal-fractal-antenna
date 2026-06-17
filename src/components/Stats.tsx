"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Maximize, Gauge, Percent } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      icon: <Activity className="w-6 h-6" />,
      value: "2.4 GHz",
      label: "Resonant Frequency",
      description: "Operates perfectly in ISM band",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      value: "-28.5 dB",
      label: "Return Loss (S11)",
      description: "Indicates excellent power matching",
      color: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      value: "1.15",
      label: "VSWR",
      description: "Voltage Standing Wave Ratio (ideal is 1.0)",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    },
    {
      icon: <Percent className="w-6 h-6" />,
      value: "35%",
      label: "Size Miniaturization",
      description: "Achieved via fractal slot geometry",
      color: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      value: "25 x 28 mm",
      label: "Patch Dimensions",
      description: "Extremely compact physical size",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "50 Ω",
      label: "Feed Impedance",
      description: "Perfect match to standard microstrip",
      color: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section className="py-20 relative bg-slate-950">
      {/* Wave propagation background element */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Simulated{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Performance Statistics
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Measured engineering metrics showing optimal matching, return loss characteristics,
            and size reduction obtained via electromagnetics simulation.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`p-6 rounded-2xl glass-card glass-card-hover flex flex-col justify-between border`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${stat.color} shadow-inner`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-100 font-mono tracking-tight mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </h4>
              </div>
              <p className="text-xs text-slate-400 font-light mt-2 border-t border-slate-800/60 pt-3">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
