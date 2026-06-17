"use client";

import React from "react";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left copyright / credits */}
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-xs text-slate-300 font-medium">
                © {new Date().getFullYear()} Arun Pranav SK. All rights reserved.
              </p>
              <p className="text-[10px] text-slate-500 font-light mt-0.5">
                Compact Hexagonal Fractal Antenna Showcase • Dr. N.G.P Institute of Technology
              </p>
            </div>
          </div>

          {/* Right repo / profile links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
            <a
              href="https://github.com/ARUNPRANAV-SK/compact-hexagonal-fractal-antenna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
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
              <span>Project Repository</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
