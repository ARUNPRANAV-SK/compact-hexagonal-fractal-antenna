"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building, Mail, Users, Award, Shield } from "lucide-react";

interface TeamMember {
  name: string;
  regNo: string;
  role: string;
  details: string;
  email?: string;
  github?: string;
}

export default function AuthorCard() {
  const team: TeamMember[] = [
    {
      name: "Arun Pranav SK",
      regNo: "Reg No. 710723106012",
      role: "Lead RF Design & EM Simulation",
      details: "Formulated the 3D HFSS modeling, designed the circular fractal slot coordinates, and simulated return loss parameter sweeps.",
      email: "arunpranav.sk@gmail.com",
      github: "https://github.com/ARUNPRANAV-SK",
    },
    {
      name: "J K Dakshata",
      regNo: "Reg No. 710723106020",
      role: "Hardware Fabrication & Testing",
      details: "Managed photolithography film etching layout on double-sided FR4 laminates, SMA feed port soldering, and RF measurement setups.",
    },
    {
      name: "Devanand N",
      regNo: "Reg No. 710723106021",
      role: "Parametric Sweep & Data Analysis",
      details: "Conducted parametric dimensions fine-tuning, executed comparative analysis between simulation and physical network analyzer data.",
    },
  ];

  return (
    <section className="py-24 relative bg-slate-950 bg-grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute left-1/4 top-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-4">
            ACADEMIC PROJECT GROUP
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Project{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Team & Contributors
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light">
            Designed, simulated, and prototype-fabricated by Electronics and Communication Engineering students at Dr. N.G.P Institute of Technology.
          </p>
        </div>

        {/* Teammates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, idx) => (
            <div key={idx} className="relative group">
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-[6px] opacity-20 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative glass-card rounded-2xl p-6 border-slate-800 flex flex-col justify-between h-full glass-card-hover">
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-slate-850 pb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-inner shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{member.name}</h3>
                      <span className="text-[10px] font-mono text-slate-500 leading-tight block">
                        {member.regNo}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded block mb-4 self-start">
                    {member.role}
                  </span>
                  
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                    {member.details}
                  </p>
                </div>

                {/* Social Actions for Arun */}
                {member.email && (
                  <div className="flex flex-col gap-2 mt-auto border-t border-slate-850 pt-4">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-900/60 hover:border-slate-700 text-slate-300 text-[10px] font-bold transition-all"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GitHub Profile</span>
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-blue-600/80 to-cyan-500/80 hover:from-blue-600 hover:to-cyan-500 text-white text-[10px] font-bold transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact Email</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Advisors Row */}
        <div className="glass-card rounded-2xl p-6 border-slate-800/80 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-850 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Faculty Project Advisory</h3>
              <p className="text-xs text-slate-500 font-light">Supervisory credentials and review authority</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300 font-light">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Project Supervisor & Coordinator</span>
              <span className="font-bold text-slate-100 text-sm">Dr. K. Sakthisudhan, M.E., Ph.D.</span>
              <span className="text-slate-400">Professor, Department of ECE</span>
              <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                <Building className="w-3 h-3" /> Dr. N.G.P Institute of Technology
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">Head of the Department</span>
              <span className="font-bold text-slate-100 text-sm">Dr. Chandrasekharan N, M.E., Ph.D.</span>
              <span className="text-slate-400">Professor & Head, Department of ECE</span>
              <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                <Building className="w-3 h-3" /> Dr. N.G.P Institute of Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
