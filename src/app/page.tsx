import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Overview from "@/components/Overview";
import DesignParameters from "@/components/DesignParameters";
import Workflow from "@/components/Workflow";
import Results from "@/components/Results";
import Applications from "@/components/Applications";
import FutureScope from "@/components/FutureScope";
import PdfViewer from "@/components/PdfViewer";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-slate-950 text-slate-100">
        <Hero />
        <Stats />
        <Overview />
        <DesignParameters />
        <Workflow />
        <Results />
        <Applications />
        <FutureScope />
        <PdfViewer />
        <AuthorCard />
      </main>
      <Footer />
    </>
  );
}
