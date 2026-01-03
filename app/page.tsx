// pages/index.tsx (or app/page.tsx for Next.js App Router)
"use client";
import dynamic from "next/dynamic";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

// Dynamically import heavy sections
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});
const Blogs = dynamic(() => import("@/components/sections/Blogs"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth snap-y overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20">
        {/* Hero Section */}
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper>
          <About />
        </SectionWrapper>

        {/* Journey Section */}
        <SectionWrapper>
          <Journey />
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper>
          <Education />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        {/* Projects Section (Dynamic) */}
        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        {/* Blogs Section (Dynamic) */}
        <SectionWrapper>
          <Blogs />
        </SectionWrapper>

        {/* Skills Section (Dynamic) */}
        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        {/* Achievements Section */}
        <SectionWrapper>
          <Achievements />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
