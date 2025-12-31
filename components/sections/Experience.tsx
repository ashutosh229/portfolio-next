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
  type: "work" | "research";
  role: string;
  company: string;
  location: string;
  duration: string;
  description: { text: string; highlight?: string | null }[];
  technologies: { name: string; icon: string }[];
  achievement: string;
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    role: "Software Engineering Intern",
    company: "Google",
    location: "Bangalore, India",
    duration: "May 2024 - July 2024",
    description: [
      {
        text: "Developed and optimized backend microservices handling",
        highlight: "1M+ daily requests",
      },
      {
        text: "Implemented caching strategies reducing API latency by",
        highlight: "40%",
      },
      {
        text: "Collaborated with cross-functional teams on product feature development",
      },
      {
        text: "Contributed to internal tools used by",
        highlight: "500+ engineers",
      },
    ],
    technologies: [
      { name: "Go", icon: "devicon-go-plain" },
      { name: "gRPC", icon: "devicon-grpc-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "GCP", icon: "devicon-googlecloud-plain" },
    ],
    achievement: "Received return offer for full-time position",
  },
  {
    type: "research",
    role: "Research Intern",
    company: "Microsoft Research",
    location: "Remote",
    duration: "Dec 2023 - Feb 2024",
    description: [
      {
        text: "Researched novel approaches for efficient transformer architectures",
      },
      { text: "Implemented and benchmarked attention mechanisms in PyTorch" },
      { text: "Co-authored a paper submitted to", highlight: "NeurIPS 2024" },
      { text: "Presented findings to a team of", highlight: "15+ researchers" },
    ],
    technologies: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "PyTorch", icon: "devicon-pytorch-original" },
      { name: "CUDA", icon: "devicon-cuda-plain" },
    ],
    achievement: "Paper under review at top-tier venue",
  },
  {
    type: "work",
    role: "Backend Developer Intern",
    company: "Startup XYZ",
    location: "Remote",
    duration: "June 2023 - Aug 2023",
    description: [
      {
        text: "Built RESTful APIs using Node.js and Express for fintech application",
      },
      { text: "Designed and implemented database schemas in PostgreSQL" },
      {
        text: "Integrated third-party payment gateways",
        highlight: "(Stripe, Razorpay)",
      },
      {
        text: "Wrote unit and integration tests with",
        highlight: "90%+ code coverage",
      },
    ],
    technologies: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
    ],
    achievement: "Promoted to lead the authentication module",
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {experiences.map((exp, index) => {
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
                        exp.type === "work" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full animate-ping ${
                        exp.type === "work"
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
                        exp.type === "work"
                          ? "hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                          : "hover:shadow-[0_0_40px_hsl(var(--secondary)/0.15)]"
                      }`}
                    >
                      {/* Header */}
                      <div
                        className={`relative p-6 ${
                          exp.type === "work"
                            ? "bg-gradient-to-r from-primary/20 via-primary/5 to-transparent"
                            : "bg-gradient-to-r from-secondary/20 via-secondary/5 to-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                              exp.type === "work"
                                ? "bg-gradient-to-br from-primary to-primary/70"
                                : "bg-gradient-to-br from-secondary to-secondary/70"
                            }`}
                          >
                            {exp.type === "work" ? (
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
                                exp.type === "work"
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
                              transition={{ delay: baseDelay + 0.3 + i * 0.1 }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Sparkles
                                className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                  exp.type === "work"
                                    ? "text-primary"
                                    : "text-secondary"
                                }`}
                              />
                              <span>
                                {item.text}{" "}
                                {item.highlight && (
                                  <span
                                    className={`font-semibold ${
                                      exp.type === "work"
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
                              transition={{ delay: baseDelay + 0.5 + i * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg ${
                                exp.type === "work"
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
