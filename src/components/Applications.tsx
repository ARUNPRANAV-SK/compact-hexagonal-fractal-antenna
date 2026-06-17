"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Bluetooth, Share2, Cpu, Smartphone, Database } from "lucide-react";

interface ApplicationItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  specs: string;
}

export default function Applications() {
  const applications: ApplicationItem[] = [
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: "Wi-Fi Communication",
      description: "Optimized for IEEE 802.11 b/g/n routers, access points, and adapters operating on the 2.4 GHz band.",
      specs: "2.4 GHz - 2.4835 GHz",
    },
    {
      icon: <Bluetooth className="w-6 h-6 text-blue-400" />,
      title: "Bluetooth Devices",
      description: "Enables low-profile transceiver boards for wireless headphones, audio streams, and keyboard modules.",
      specs: "Class 1 & Class 2 RF range",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "IoT Core Nodes",
      description: "Compact antenna dimensions make it suitable for narrow micro-controller housing integrations.",
      specs: "Fits 30x30mm IoT modules",
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      title: "Wireless Sensor Networks",
      description: "Low standing wave ratio ensures highly efficient node transmissions in distributed networks.",
      specs: "ZigBee / Thread compliance",
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Embedded Systems",
      description: "Low-profile coplanar design allows direct print trace fabrication on standard multi-layer system boards.",
      specs: "FR4 single/double-layer",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "Smart Devices",
      description: "Symmetrical radiation boundaries deliver seamless network handovers for mobile smart home interfaces.",
      specs: "Wearables & Home Automation",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section id="applications" className="py-24 relative bg-slate-900 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute left-1/3 top-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Practical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Target Applications
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Due to its compact physical structure and resonance in the 2.4 GHz ISM band,
            this antenna provides high usability in several modern communication sectors.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 border-slate-800 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {app.description}
                </p>
              </div>
              <div className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2.5 py-1 rounded inline-block self-start">
                {app.specs}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
