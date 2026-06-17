"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Target, Radio, Settings, Cpu, TrendingUp } from "lucide-react";

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  detailedPoints: string[];
  icon: React.ReactNode;
}

export default function Workflow() {
  const steps: Step[] = [
    {
      stepNumber: "Step 01",
      title: "Antenna Geometry Selection",
      description: "Defining base configurations and calculating structural limits.",
      detailedPoints: [
        "Select operating resonance frequency of 2.4 GHz",
        "Select FR4 substrate (h = 1.6mm, εr = 4.4)",
        "Determine basic rectangular feed configurations",
      ],
      icon: <Target className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 02",
      title: "Hexagonal Patch Creation",
      description: "Transitioning to hexagonal patch geometry to fold current distributions.",
      detailedPoints: [
        "Establish boundary patch radius",
        "Formulate microstrip feed line line-width matching",
        "Conduct baseline simulation checks",
      ],
      icon: <Layers className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 03",
      title: "Fractal Slot Implementation",
      description: "Carving circular fractal cavities to elongate effective electrical path.",
      detailedPoints: [
        "Incorporate primary central circular slot",
        "Apply secondary iteration slot nodes at polygon vertices",
        "Verify impedance shifts due to fractal parameters",
      ],
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 04",
      title: "HFSS Simulation",
      description: "Constructing exact 3D models and running full-wave solver simulation.",
      detailedPoints: [
        "Create boundary radiation box and set lumped port excitations",
        "Execute sweeping meshing routines in ANSYS HFSS",
        "Evaluate initial return loss S11 and VSWR values",
      ],
      icon: <Radio className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 05",
      title: "Optimization",
      description: "Fine-tuning geometric parameters to align matching and resonance peaks.",
      detailedPoints: [
        "Tweak microstrip feed line insert depth gaps",
        "Optimally adjust circular slot radii ratios",
        "Verify stability across the entire 2.4 GHz bandwidth",
      ],
      icon: <Settings className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 06",
      title: "Fabrication",
      description: "Translating optimized simulations into physical hardware layout.",
      detailedPoints: [
        "Export G-code layout configurations from Fusion 360",
        "Etch copper clad patterns onto physical FR4 laminate boards",
        "Solder SMA coaxial port feeds to line connectors",
      ],
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      stepNumber: "Step 07",
      title: "Performance Analysis",
      description: "Testing fabricated antenna parameters to validate against simulations.",
      detailedPoints: [
        "Measure physical S11 values using Vector Network Analyzer (VNA)",
        "Test radiation patterns inside RF anechoic chambers",
        "Generate final comparative data charts",
      ],
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <section id="workflow" className="py-24 relative bg-slate-900 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Design & Simulation{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Workflow Timeline
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            A comprehensive overview of our engineering methodologies, tracing the project from
            theoretical mathematics to computer-aided simulation and physical hardware prototyping.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500/80 via-blue-500/50 to-slate-800 pointer-events-none" />

          {/* Timeline Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card Panel */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" as any }}
                      className="glass-card rounded-2xl p-6 border-slate-800 shadow-lg relative group glass-card-hover"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                          {step.stepNumber}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-inner group-hover:border-cyan-500/30 transition-colors">
                          {step.icon}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2 border-t border-slate-800/60 pt-4">
                        {step.detailedPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-300 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/80 mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Node Connector */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    >
                      {idx + 1}
                    </motion.div>
                  </div>

                  {/* Empty Spacer side for spacing grid */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
