// pages/index.tsx (or app/page.tsx for Next.js App Router)
"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

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

// Wrapper for scroll animation per section
const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="snap-start"
    >
      {children}
    </motion.section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth snap-y snap-mandatory overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper>
          <About />
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
