"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  Trophy,
  Sparkles,
} from "lucide-react";

interface ExperienceItem {
  type: "Internship" | "Full-Time";
  role: string;
  company: string;
  location: string;
  duration: string;
  description: { text: string; highlight?: string | null }[];
  technologies: { name: string; icon: string }[];
  achievement: string;
}

const monthMap: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const parseMonthYear = (value: string): Date => {
  if (value === "Present") {
    // far future so ongoing roles float to top
    return new Date(2100, 0, 1);
  }

  const [month, year] = value.split(" ");
  return new Date(Number(year), monthMap[month]);
};

const getDatesFromDuration = (duration: string) => {
  const [start, end] = duration.split("–").map((s) => s.trim());

  return {
    startDate: parseMonthYear(start),
    endDate: parseMonthYear(end),
    isPresent: end === "Present",
  };
};

const experiences: ExperienceItem[] = [
  {
    type: "Internship",
    role: "Backend Developer",
    company: "G-Roots.AI",
    location: "Remote",
    duration: "Oct 2025 – Present",
    description: [
      {
        text: "Set up and managed end-to-end",
        highlight: "AWS infrastructure",
      },
      {
        text: "Integrated Pinecone vector database for",
        highlight: "RAG-based semantic search",
      },
      {
        text: "Designed BFS-based web scraping framework for large-scale",
        highlight: "government data extraction",
      },
      {
        text: "Built preprocessing and ingestion pipelines for",
        highlight: "structured multi-modal data",
      },
    ],
    technologies: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Pinecone", icon: "devicon-database-plain" },
      { name: "Python", icon: "devicon-python-plain" },
    ],
    achievement: "Developed scalable data infrastructure powering AI workflows",
  },

  {
    type: "Internship",
    role: "Full Stack Developer",
    company: "Mentor Me",
    location: "Remote",
    duration: "Jun 2025 – Present",
    description: [
      {
        text: "Built secure authentication and onboarding using",
        highlight: "Spring Boot and PostgreSQL",
      },
      {
        text: "Optimized APIs and frontend performance using",
        highlight: "async calls, caching, and memoization",
      },
      {
        text: "Integrated end-to-end",
        highlight: "payment gateway workflows",
      },
      {
        text: "Developed a full-featured",
        highlight: "admin portal for operations",
      },
    ],
    technologies: [
      { name: "Spring Boot", icon: "devicon-spring-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "React", icon: "devicon-react-original" },
    ],
    achievement: "Improved system maintainability and performance across stack",
  },

  {
    type: "Internship",
    role: "Full Stack Engineer",
    company: "AI Planet",
    location: "Remote",
    duration: "Sep 2025 – Nov 2025",
    description: [
      {
        text: "Implemented",
        highlight: "Single Sign-On (SSO)",
      },
      {
        text: "Built dynamic",
        highlight: "agent registry system",
      },
      {
        text: "Enabled cross-application agent integration with",
        highlight: "real-time UI updates",
      },
      {
        text: "Resolved bugs and optimized",
        highlight: "frontend performance",
      },
    ],
    technologies: [
      { name: "Typescript", icon: "devicon-typescript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
    ],
    achievement: "Improved scalability and maintainability of agent platform",
  },

  {
    type: "Internship",
    role: "Backend Developer",
    company: "WebSoniX",
    location: "Remote",
    duration: "Sep 2025 – Oct 2025",
    description: [
      {
        text: "Architected AI-powered",
        highlight: "song recognition system",
      },
      {
        text: "Built scalable",
        highlight: "FastAPI backend services",
      },
      {
        text: "Implemented end-to-end",
        highlight: "audio processing pipeline",
      },
      {
        text: "Integrated backend with",
        highlight: "Flutter client",
      },
    ],
    technologies: [
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Librosa", icon: "devicon-python-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain" },
    ],
    achievement: "Delivered real-time audio recognition with optimized latency",
  },

  {
    type: "Internship",
    role: "Full Stack Developer",
    company: "CollegeMap",
    location: "Remote",
    duration: "Jun 2025 – Sep 2025",
    description: [
      {
        text: "Built interactive",
        highlight: "statistical dashboards",
      },
      {
        text: "Integrated secure",
        highlight: "payment gateway",
      },
      {
        text: "Developed real-time",
        highlight: "data extraction pipelines",
      },
    ],
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
    achievement: "Enabled data-driven insights across multiple institutions",
  },

  {
    type: "Internship",
    role: "Software Engineer Intern",
    company: "Virtual Internships",
    location: "Remote",
    duration: "Jul 2025 – Aug 2025",
    description: [
      {
        text: "Implemented global phone number validation using",
        highlight: "libphonenumber-js",
      },
      {
        text: "Improved frontend performance by",
        highlight: "optimizing table rendering",
      },
      {
        text: "Enhanced data fetching with",
        highlight: "RTK Query and caching",
      },
      {
        text: "Improved admin search using",
        highlight: "optimized keyword highlighting",
      },
    ],
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Redux", icon: "devicon-redux-original" },
      { name: "Typescript", icon: "devicon-typescript-plain" },
      { name: "RTK Query", icon: "devicon-redux-original" },
    ],
    achievement: "Reduced UI latency and improved admin usability",
  },

  {
    type: "Internship",
    role: "Student Mentor",
    company: "Jeet Neeti",
    location: "Remote",
    duration: "Jun 2025 – Jul 2025",
    description: [
      {
        text: "Provided end-to-end",
        highlight: "JoSAA counselling mentorship",
      },
      {
        text: "Guided students with",
        highlight: "data-driven college selection",
      },
    ],
    technologies: [],
    achievement: "Helped aspirants make informed admission decisions",
  },

  {
    type: "Internship",
    role: "Student Mentor",
    company: "OpenLinks Foundation",
    location: "Remote",
    duration: "Nov 2024 – Apr 2025",
    description: [
      {
        text: "Mentored JEE & NEET aspirants in",
        highlight: "PCM / Biology",
      },
      {
        text: "Designed personalized",
        highlight: "study plans and assessments",
      },
      {
        text: "Strengthened communication and",
        highlight: "leadership skills",
      },
    ],
    technologies: [],
    achievement: "Improved student confidence and exam preparedness",
  },

  {
    type: "Internship",
    role: "Full Stack Web Developer",
    company: "Trajectory",
    location: "Remote",
    duration: "Oct 2024 – Nov 2024",
    description: [
      {
        text: "Built frontend with",
        highlight: "Redux-based global state",
      },
      {
        text: "Developed FastAPI backend with",
        highlight: "LangChain and OpenAI",
      },
      {
        text: "Optimized performance using",
        highlight: "async pipelines and caching",
      },
    ],
    technologies: [
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "LangChain", icon: "devicon-openai-plain" },
      { name: "Redux", icon: "devicon-redux-original" },
      { name: "OpenAI", icon: "devicon-openai-plain" },
    ],
    achievement: "Delivered scalable AI-powered web application",
  },

  {
    type: "Internship",
    role: "Student Mentor",
    company: "JoSAA Guidance Hub",
    location: "Remote",
    duration: "Jun 2024 – Jul 2024",
    description: [
      {
        text: "Provided one-on-one",
        highlight: "JoSAA counselling guidance",
      },
      {
        text: "Analyzed historical",
        highlight: "cutoff and eligibility trends",
      },
    ],
    technologies: [],
    achievement: "Reduced uncertainty during counselling process",
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sortedExperiences = [...experiences].sort((a, b) => {
    const A = getDatesFromDuration(a.duration);
    const B = getDatesFromDuration(b.duration);

    // 1️⃣ Present roles first
    if (A.isPresent && !B.isPresent) return -1;
    if (!A.isPresent && B.isPresent) return 1;

    // 2️⃣ Latest start date first
    return B.startDate.getTime() - A.startDate.getTime();
  });

  return (
    <section
      id="experience"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where <span className="text-primary font-medium">learning</span>{" "}
            meets <span className="text-secondary font-medium">impact</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {sortedExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const baseDelay = index * 0.2;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: baseDelay }}
                  className={`relative md:flex ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10 pointer-events-none">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: baseDelay + 0.3, type: "spring" }}
                      className={`w-4 h-4 rounded-full border-4 border-background ${
                        exp.type === "Internship"
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full animate-ping ${
                        exp.type === "Internship"
                          ? "bg-primary/50"
                          : "bg-secondary/50"
                      }`}
                      style={{ animationDuration: "2s" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`group relative glass-strong rounded-3xl overflow-hidden transition-all duration-500 ${
                        exp.type === "Internship"
                          ? "hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                          : "hover:shadow-[0_0_40px_hsl(var(--secondary)/0.15)]"
                      }`}
                    >
                      {/* Header */}
                      <div
                        className={`relative p-6 ${
                          exp.type === "Internship"
                            ? "bg-gradient-to-r from-primary/20 via-primary/5 to-transparent"
                            : "bg-gradient-to-r from-secondary/20 via-secondary/5 to-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                              exp.type === "Internship"
                                ? "bg-gradient-to-br from-primary to-primary/70"
                                : "bg-gradient-to-br from-secondary to-secondary/70"
                            }`}
                          >
                            {exp.type === "Internship" ? (
                              <Briefcase className="w-7 h-7 text-primary-foreground" />
                            ) : (
                              <Building2 className="w-7 h-7 text-secondary-foreground" />
                            )}
                          </motion.div>

                          <div className="flex-1">
                            <h3 className="text-xl font-display text-foreground mb-1">
                              {exp.role}
                            </h3>
                            <p
                              className={`font-medium ${
                                exp.type === "Internship"
                                  ? "text-primary"
                                  : "text-secondary"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pt-2">
                        {/* Meta info */}
                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-accent" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-highlight" />
                            {exp.duration}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2.5 mb-5">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                delay: baseDelay + 0.3 + i * 0.1,
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Sparkles
                                className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                  exp.type === "Internship"
                                    ? "text-primary"
                                    : "text-secondary"
                                }`}
                              />
                              <span>
                                {item.text}{" "}
                                {item.highlight && (
                                  <span
                                    className={`font-semibold ${
                                      exp.type === "Internship"
                                        ? "text-primary"
                                        : "text-secondary"
                                    }`}
                                  >
                                    {item.highlight}
                                  </span>
                                )}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4" role="list">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                delay: baseDelay + 0.5 + i * 0.05,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg ${
                                exp.type === "Internship"
                                  ? "bg-primary/10 text-primary border border-primary/20"
                                  : "bg-secondary/10 text-secondary border border-secondary/20"
                              }`}
                              role="listitem"
                            >
                              <i className={tech.icon} />
                              {tech.name}
                            </motion.span>
                          ))}
                        </div>

                        {/* Achievement */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: baseDelay + 0.7 }}
                          className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20"
                        >
                          <Trophy className="w-4 h-4 text-accent shrink-0" />
                          <p className="text-sm font-medium text-foreground">
                            {exp.achievement}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
