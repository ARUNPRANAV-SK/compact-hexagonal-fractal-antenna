"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, MapPin, Building, Link } from "lucide-react";

export default function AuthorCard() {
  return (
    <section className="py-24 relative bg-slate-950 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Design{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Author
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Project designed, simulated, and fabricated by Arun Pranav SK.
          </p>
        </div>

        <div className="max-w-md mx-auto relative group">
          {/* Glowing background animation */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-[10px] opacity-25 group-hover:opacity-45 transition duration-500" />
          
          <div className="relative glass-card rounded-2xl p-8 border-slate-800 shadow-2xl flex flex-col items-center text-center">
            {/* Vector Profile Icon with tech accents */}
            <div className="relative w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <GraduationCap className="w-12 h-12 text-cyan-400" />
              {/* Outer orbit dot */}
              <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-slate-950 animate-bounce" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Arun Pranav SK</h3>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono mb-4">
              B.E. Electronics &amp; Communication Engineering
            </span>

            {/* University and Location Details */}
            <div className="space-y-2.5 w-full border-t border-b border-slate-800/80 py-5 my-5 text-left text-xs font-light text-slate-300">
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dr. N.G.P Institute of Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Quick Link Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://github.com/ARUNPRANAV-SK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-600 text-slate-200 text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Follow on GitHub</span>
              </a>
              <a
                href="mailto:arunpranav.sk@gmail.com"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg hover:shadow-[0_4px_15px_rgba(6,182,212,0.2)] transition-all active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Email Author</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
