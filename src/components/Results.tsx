"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { LineChart, BarChart2, Radio, Compass, RefreshCw } from "lucide-react";

type ActiveView = "s11" | "vswr" | "radiation";

export default function Results() {
  const [activeView, setActiveView] = useState<ActiveView>("s11");
  const [hoverData, setHoverData] = useState<{ freq: string; val: string } | null>(null);
  const [mode, setMode] = useState<"interactive" | "hfss">("interactive");
  const chartRef = useRef<SVGSVGElement | null>(null);

  // Return Loss S11 Data points (Frequency GHz vs S11 dB)
  // Range: 2.0 to 2.8 GHz, Peak at 2.4 GHz (-28.52 dB)
  const s11Data = [
    { freq: 2.00, db: -1.2 },
    { freq: 2.10, db: -2.1 },
    { freq: 2.20, db: -4.3 },
    { freq: 2.25, db: -6.8 },
    { freq: 2.30, db: -10.5 }, // BW lower limit
    { freq: 2.33, db: -14.2 },
    { freq: 2.36, db: -20.1 },
    { freq: 2.38, db: -25.4 },
    { freq: 2.40, db: -28.52 }, // Peak Resonance
    { freq: 2.42, db: -23.1 },
    { freq: 2.45, db: -15.6 },
    { freq: 2.48, db: -11.2 },
    { freq: 2.50, db: -8.4 },
    { freq: 2.60, db: -3.8 },
    { freq: 2.70, db: -1.8 },
    { freq: 2.80, db: -0.9 },
  ];

  // VSWR Data points (Frequency GHz vs VSWR)
  // Range: 2.0 to 2.8 GHz, Peak at 2.4 GHz (1.15)
  const vswrData = [
    { freq: 2.00, val: 14.5 },
    { freq: 2.10, val: 8.3 },
    { freq: 2.20, val: 4.1 },
    { freq: 2.25, val: 2.7 },
    { freq: 2.30, val: 1.84 },
    { freq: 2.33, val: 1.48 },
    { freq: 2.36, val: 1.22 },
    { freq: 2.38, val: 1.18 },
    { freq: 2.40, val: 1.15 }, // Peak VSWR
    { freq: 2.42, val: 1.16 },
    { freq: 2.45, val: 1.40 },
    { freq: 2.48, val: 1.76 },
    { freq: 2.50, val: 2.2 },
    { freq: 2.60, val: 4.6 },
    { freq: 2.70, val: 9.8 },
    { freq: 2.80, val: 18.2 },
  ];

  // SVG Chart margins/dimensions
  const width = 500;
  const height = 280;
  const paddingX = 60;
  const paddingY = 40;

  // S11 Scales
  const getS11Coords = (freq: number, db: number) => {
    const minFreq = 2.0;
    const maxFreq = 2.8;
    const minDb = 0;
    const maxDb = -35;

    const x = paddingX + ((freq - minFreq) / (maxFreq - minFreq)) * (width - paddingX * 2);
    const y = paddingY + ((db - minDb) / (maxDb - minDb)) * (height - paddingY * 2);
    return { x, y };
  };

  // VSWR Scales
  const getVswrCoords = (freq: number, val: number) => {
    const minFreq = 2.0;
    const maxFreq = 2.8;
    const minVal = 1.0;
    const maxVal = 5.0; // cap VSWR at 5.0 on chart for scaling

    // clamp value
    const clampedVal = Math.min(val, maxVal);

    const x = paddingX + ((freq - minFreq) / (maxFreq - minFreq)) * (width - paddingX * 2);
    const y = height - paddingY - ((clampedVal - minVal) / (maxVal - minVal)) * (height - paddingY * 2);
    return { x, y };
  };

  // Generate S11 path string
  const s11PathPoints = s11Data.map((d) => {
    const { x, y } = getS11Coords(d.freq, d.db);
    return `${x},${y}`;
  });
  const s11Path = `M ${s11PathPoints.join(" L ")}`;

  // Generate VSWR path string
  const vswrPathPoints = vswrData.map((d) => {
    const { x, y } = getVswrCoords(d.freq, d.val);
    return `${x},${y}`;
  });
  const vswrPath = `M ${vswrPathPoints.join(" L ")}`;

  // Handle Chart Hover
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    // Convert mouseX to Frequency
    const minFreq = 2.0;
    const maxFreq = 2.8;
    const chartWidth = width - paddingX * 2;
    const relativeX = mouseX - paddingX;

    if (relativeX < 0 || relativeX > chartWidth) {
      setHoverData(null);
      return;
    }

    const freqVal = minFreq + (relativeX / chartWidth) * (maxFreq - minFreq);

    // Find nearest data point
    let nearest = s11Data[0];
    let minDiff = Math.abs(s11Data[0].freq - freqVal);

    if (activeView === "s11") {
      s11Data.forEach((d) => {
        const diff = Math.abs(d.freq - freqVal);
        if (diff < minDiff) {
          minDiff = diff;
          nearest = d;
        }
      });
      setHoverData({
        freq: nearest.freq.toFixed(2),
        val: `${nearest.db.toFixed(2)} dB`,
      });
    } else if (activeView === "vswr") {
      let nearestVswr = vswrData[0];
      let minDiffVswr = Math.abs(vswrData[0].freq - freqVal);
      vswrData.forEach((d) => {
        const diff = Math.abs(d.freq - freqVal);
        if (diff < minDiffVswr) {
          minDiffVswr = diff;
          nearestVswr = d;
        }
      });
      setHoverData({
        freq: nearestVswr.freq.toFixed(2),
        val: nearestVswr.val.toFixed(2),
      });
    }
  };

  return (
    <section id="results" className="py-24 relative bg-slate-950">
      <div className="absolute right-1/4 bottom-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            HFSS Simulation{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Results & Analysis
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Verified electrical feedback logs demonstrating high bandwidth coupling and stable, symmetrical radiation boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Panel: Chart Selection Toggles & Details */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <button
                onClick={() => {
                  setActiveView("s11");
                  setHoverData(null);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeView === "s11"
                    ? "glass-card border-cyan-500/40 bg-cyan-950/20 shadow-md"
                    : "border-slate-800 bg-slate-900/10 hover:border-slate-700"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    activeView === "s11"
                      ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    S11 Reflection Coefficient
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    Return loss values showing resonance peak at 2.4 GHz.
                  </p>
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveView("vswr");
                  setHoverData(null);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeView === "vswr"
                    ? "glass-card border-cyan-500/40 bg-cyan-950/20 shadow-md"
                    : "border-slate-800 bg-slate-900/10 hover:border-slate-700"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    activeView === "vswr"
                      ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    VSWR Parameter
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    Voltage Standing Wave Ratio evaluating power transfer match.
                  </p>
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveView("radiation");
                  setHoverData(null);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeView === "radiation"
                    ? "glass-card border-cyan-500/40 bg-cyan-950/20 shadow-md"
                    : "border-slate-800 bg-slate-900/10 hover:border-slate-700"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    activeView === "radiation"
                      ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    2D Radiation Patterns
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    E-Plane and H-Plane polar plots detailing signal propagation.
                  </p>
                </div>
              </button>
            </div>

            {/* Readout parameters display */}
            <div className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/20">
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                MEASURED VALUES AT 2.4 GHz
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 block">Peak Return Loss</span>
                  <span className="text-base font-bold text-white font-mono">-28.52 dB</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Peak VSWR</span>
                  <span className="text-base font-bold text-white font-mono">1.154</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Bandwidth (S11 &lt; -10dB)</span>
                  <span className="text-base font-bold text-white font-mono">95 MHz</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Radiation Type</span>
                  <span className="text-sm font-bold text-white">Omnidirectional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Chart Visualizer */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-2xl border-slate-800 shadow-2xl p-6 h-full flex flex-col justify-between">
              {/* Header inside visualizer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 mb-4 gap-4">
                <div>
                  <h3 className="font-bold text-white text-base">
                    {activeView === "s11" && "Reflection Coefficient S11 Plot"}
                    {activeView === "vswr" && "VSWR Parameter Curve"}
                    {activeView === "radiation" && "E-Plane & H-Plane Polar Radiation Patterns"}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-light">
                    {activeView === "s11" && "Impedance matching dip at the 2.4 GHz ISM frequency band."}
                    {activeView === "vswr" && "Voltage standing wave ratio matching ideal parameters close to 1.1."}
                    {activeView === "radiation" && "Stable gain boundaries mapped around E-Plane (elevation) and H-Plane (azimuth)."}
                  </p>
                </div>
                {/* Live hover coordinates display */}
                {hoverData && mode === "interactive" && (
                  <div className="bg-slate-900 border border-cyan-500/30 px-3 py-1.5 rounded-lg text-right font-mono scale-90 sm:scale-100">
                    <span className="text-[9px] text-slate-500 block uppercase">Cursor Readout</span>
                    <span className="text-xs font-bold text-cyan-400">
                      {hoverData.freq} GHz : {hoverData.val}
                    </span>
                  </div>
                )}
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex gap-2 p-1 rounded-lg bg-slate-950/80 border border-slate-800 self-start mb-6 text-[11px] font-semibold">
                <button
                  onClick={() => setMode("interactive")}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    mode === "interactive"
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30 shadow-inner"
                      : "text-slate-400 hover:text-slate-200 border border-transparent"
                  }`}
                >
                  Interactive Data Analyzer
                </button>
                <button
                  onClick={() => {
                    setMode("hfss");
                    setHoverData(null);
                  }}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    mode === "hfss"
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30 shadow-inner"
                      : "text-slate-400 hover:text-slate-200 border border-transparent"
                  }`}
                >
                  HFSS Captured Plots
                </button>
              </div>

              {/* Chart/Plot Content Area */}
              <div className="flex-1 flex items-center justify-center min-h-[300px]">
                {mode === "interactive" ? (
                  <>
                    {activeView === "s11" && (
                      <svg
                        ref={chartRef}
                        width="100%"
                        height="100%"
                        viewBox={`0 0 ${width} ${height}`}
                        className="overflow-visible select-none"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoverData(null)}
                      >
                        {/* Background Grids */}
                        <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#1e293b" strokeWidth="0.5" />
                        <line x1={paddingX} y1={paddingY + (height - paddingY * 2) * 0.285} x2={width - paddingX} y2={paddingY + (height - paddingY * 2) * 0.285} stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" /> {/* -10dB Threshold */}
                        <line x1={paddingX} y1={paddingY + (height - paddingY * 2) * 0.5} x2={width - paddingX} y2={paddingY + (height - paddingY * 2) * 0.5} stroke="#1e293b" strokeWidth="0.5" />
                        <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="1" />

                        {/* Verticals */}
                        <line x1={paddingX} y1={paddingY} x2={paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="1" />
                        <line x1={paddingX + (width - paddingX * 2) * 0.5} y1={paddingY} x2={paddingX + (width - paddingX * 2) * 0.5} y2={height - paddingY} stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" /> {/* 2.4 GHz Line */}
                        <line x1={width - paddingX} y1={paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="0.5" />

                        {/* S11 Limit Label (-10dB) */}
                        <text x={paddingX - 10} y={paddingY + (height - paddingY * 2) * 0.285 + 4} fill="#ef4444" fontSize="8" textAnchor="end" fontFamily="monospace">-10 dB</text>
                        <line x1={paddingX} y1={paddingY + (height - paddingY * 2) * 0.285} x2={width - paddingX} y2={paddingY + (height - paddingY * 2) * 0.285} stroke="#ef4444" strokeWidth="0.75" strokeOpacity="0.4" />

                        {/* Axes Y-Labels */}
                        <text x={paddingX - 10} y={paddingY + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">0 dB</text>
                        <text x={paddingX - 10} y={paddingY + (height - paddingY * 2) * 0.5 + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">-17.5 dB</text>
                        <text x={paddingX - 10} y={height - paddingY + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">-35 dB</text>

                        {/* Axes X-Labels */}
                        <text x={paddingX} y={height - paddingY + 18} fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">2.0 GHz</text>
                        <text x={paddingX + (width - paddingX * 2) * 0.5} y={height - paddingY + 18} fill="#22d3ee" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">2.4 GHz</text>
                        <text x={width - paddingX} y={height - paddingY + 18} fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">2.8 GHz</text>

                        {/* Plot curve */}
                        <path
                          d={s11Path}
                          fill="none"
                          stroke="url(#s11Gradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Highlight resonance dot */}
                        {(() => {
                          const { x, y } = getS11Coords(2.40, -28.52);
                          return (
                            <g>
                              <circle cx={x} cy={y} r="5" fill="#22d3ee" className="animate-ping" />
                              <circle cx={x} cy={y} r="4" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />
                            </g>
                          );
                        })()}

                        <defs>
                          <linearGradient id="s11Gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="60%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}

                    {activeView === "vswr" && (
                      <svg
                        ref={chartRef}
                        width="100%"
                        height="100%"
                        viewBox={`0 0 ${width} ${height}`}
                        className="overflow-visible select-none"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoverData(null)}
                      >
                        {/* Background Grids */}
                        <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#1e293b" strokeWidth="0.5" />
                        <line x1={paddingX} y1={paddingY + (height - paddingY * 2) * 0.75} x2={width - paddingX} y2={paddingY + (height - paddingY * 2) * 0.75} stroke="#ef4444" strokeWidth="0.75" strokeOpacity="0.4" /> {/* VSWR = 2.0 Threshold */}
                        <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="1" />

                        {/* Verticals */}
                        <line x1={paddingX} y1={paddingY} x2={paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="1" />
                        <line x1={paddingX + (width - paddingX * 2) * 0.5} y1={paddingY} x2={paddingX + (width - paddingX * 2) * 0.5} y2={height - paddingY} stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                        <line x1={width - paddingX} y1={paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#1e293b" strokeWidth="0.5" />

                        {/* VSWR Threshold Label (2.0) */}
                        <text x={paddingX - 10} y={paddingY + (height - paddingY * 2) * 0.75 + 4} fill="#ef4444" fontSize="8" textAnchor="end" fontFamily="monospace">VSWR 2.0</text>

                        {/* Axes Y-Labels */}
                        <text x={paddingX - 10} y={paddingY + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">5.0</text>
                        <text x={paddingX - 10} y={paddingY + (height - paddingY * 2) * 0.5 + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">3.0</text>
                        <text x={paddingX - 10} y={height - paddingY + 3} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">1.0</text>

                        {/* Axes X-Labels */}
                        <text x={paddingX} y={height - paddingY + 18} fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">2.0 GHz</text>
                        <text x={paddingX + (width - paddingX * 2) * 0.5} y={height - paddingY + 18} fill="#3b82f6" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">2.4 GHz</text>
                        <text x={width - paddingX} y={height - paddingY + 18} fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">2.8 GHz</text>

                        {/* Plot curve */}
                        <path
                          d={vswrPath}
                          fill="none"
                          stroke="url(#vswrGradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Highlight resonance dot */}
                        {(() => {
                          const { x, y } = getVswrCoords(2.40, 1.15);
                          return (
                            <g>
                              <circle cx={x} cy={y} r="5" fill="#3b82f6" className="animate-ping" />
                              <circle cx={x} cy={y} r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
                            </g>
                          );
                        })()}

                        <defs>
                          <linearGradient id="vswrGradient" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}

                    {activeView === "radiation" && (
                      <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
                        {/* E-Plane Pattern */}
                        <div className="flex flex-col items-center">
                          <svg width="150" height="150" viewBox="0 0 100 100" className="overflow-visible">
                            {/* Polar Circles */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
                            <circle cx="50" cy="50" r="15" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                            {/* Axes */}
                            <line x1="5" y1="50" x2="95" y2="50" stroke="#1e293b" strokeWidth="0.5" />
                            <line x1="50" y1="5" x2="50" y2="95" stroke="#1e293b" strokeWidth="0.5" />
                            
                            {/* E-Plane Pattern Path (Figure-8 shaped omni-like pattern) */}
                            <path
                              d="M 50,5 C 80,12 85,50 50,95 C 15,50 20,12 50,5 Z"
                              fill="rgba(6, 182, 212, 0.15)"
                              stroke="#06b6d4"
                              strokeWidth="1.5"
                            />
                          </svg>
                          <span className="text-xs font-mono font-bold text-cyan-400 mt-3">E-Plane (Elevation)</span>
                        </div>

                        {/* H-Plane Pattern */}
                        <div className="flex flex-col items-center">
                          <svg width="150" height="150" viewBox="0 0 100 100" className="overflow-visible">
                            {/* Polar Circles */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
                            <circle cx="50" cy="50" r="15" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                            {/* Axes */}
                            <line x1="5" y1="50" x2="95" y2="50" stroke="#1e293b" strokeWidth="0.5" />
                            <line x1="50" y1="5" x2="50" y2="95" stroke="#1e293b" strokeWidth="0.5" />

                            {/* H-Plane Pattern Path (Omnidirectional circular pattern) */}
                            <circle
                              cx="50"
                              cy="50"
                              r="38"
                              fill="rgba(59, 130, 246, 0.15)"
                              stroke="#3b82f6"
                              strokeWidth="1.5"
                            />
                          </svg>
                          <span className="text-xs font-mono font-bold text-blue-400 mt-3">H-Plane (Azimuth)</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2">
                    {activeView === "s11" && (
                      <div className="flex flex-col items-center max-w-md w-full">
                        <img
                          src="/images/img_page_48_1.png"
                          alt="Simulated Return Loss S11 Plot"
                          className="max-h-[200px] sm:max-h-[220px] w-auto rounded-lg border border-slate-800 shadow bg-slate-950/85 object-contain"
                        />
                        <span className="text-[10px] font-mono text-cyan-400 mt-4 bg-slate-950 border border-slate-800 px-3 py-1 rounded">
                          Fig 5.1 Re-simulated Return Loss S11 Curve
                        </span>
                      </div>
                    )}

                    {activeView === "vswr" && (
                      <div className="flex flex-col items-center max-w-md w-full">
                        <img
                          src="/images/img_page_49_1.png"
                          alt="Simulated VSWR Plot"
                          className="max-h-[200px] sm:max-h-[220px] w-auto rounded-lg border border-slate-800 shadow bg-slate-950/85 object-contain"
                        />
                        <span className="text-[10px] font-mono text-cyan-400 mt-4 bg-slate-950 border border-slate-800 px-3 py-1 rounded">
                          Fig 5.2 HFSS Simulated VSWR Plot
                        </span>
                      </div>
                    )}

                    {activeView === "radiation" && (
                      <div className="flex flex-col items-center w-full">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                          <div className="flex flex-col items-center">
                            <img
                              src="/images/img_page_50_1.png"
                              alt="Captured E-Plane Radiation Pattern"
                              className="max-h-[120px] w-auto rounded-lg border border-slate-800 bg-slate-950/80 object-contain"
                            />
                            <span className="text-[9px] font-mono text-cyan-400 mt-2">Fig 5.3 E-Plane 2D Pattern</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src="/images/img_page_51_1.png"
                              alt="Captured H-Plane Radiation Pattern"
                              className="max-h-[120px] w-auto rounded-lg border border-slate-800 bg-slate-950/80 object-contain"
                            />
                            <span className="text-[9px] font-mono text-blue-400 mt-2">Fig 5.5 H-Plane 2D Pattern</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-4 border-t border-slate-900 pt-3">
                          <div className="flex flex-col items-center">
                            <img
                              src="/images/img_page_50_2.png"
                              alt="Captured E-Plane Gain Plot"
                              className="max-h-[50px] w-auto rounded-lg border border-slate-800 bg-slate-950/80 object-contain"
                            />
                            <span className="text-[8px] font-mono text-slate-500 mt-1">E-Plane Gain Sweep</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src="/images/img_page_51_2.png"
                              alt="Captured H-Plane 3D Polar Plot"
                              className="max-h-[50px] w-auto rounded-lg border border-slate-800 bg-slate-950/80 object-contain"
                            />
                            <span className="text-[8px] font-mono text-slate-500 mt-1">3D Polar Pattern</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer details */}
              <div className="border-t border-slate-800/80 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>SIMULATION DEVICE: ANSYS HFSS v19</span>
                <span>MESH METHOD: ITERATIVE TETRAHEDRAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
