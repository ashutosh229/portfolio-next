"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  github: string | null;
  demo: string | null;
  image: string;
  featured: boolean;
  category: string;
  color: "primary" | "secondary" | "accent" | "highlight";
  size: "small" | "medium" | "large";
}

const projects: Project[] = [
  {
    title: "AI Code Review Assistant",
    description:
      "An AI-powered tool that automatically reviews pull requests, suggests improvements, and detects potential bugs using LLMs.",
    technologies: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "OpenAI", icon: "devicon-openai-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
    featured: true,
    category: "AI/ML",
    color: "primary",
    size: "large",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "A scalable task scheduling system supporting cron jobs, delayed execution, and fault-tolerant processing across multiple nodes.",
    technologies: [
      { name: "Go", icon: "devicon-go-plain" },
      { name: "gRPC", icon: "devicon-grpc-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    github: "https://github.com",
    demo: null,
    image: "/placeholder.svg",
    featured: true,
    category: "Backend",
    color: "secondary",
    size: "medium",
  },
  {
    title: "Real-time Collaboration Editor",
    description:
      "Google Docs-like collaborative text editor with real-time sync, cursor presence, and version history.",
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Socket.io", icon: "devicon-socketio-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
    featured: true,
    category: "Full Stack",
    color: "accent",
    size: "medium",
  },
  // ... add other projects here
];

const categories = ["All", "AI/ML", "Backend", "Full Stack"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getColorClasses = (color: Project["color"]) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "hover:shadow-[0_0_50px_hsl(var(--primary)/0.2)]",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
          glow: "hover:shadow-[0_0_50px_hsl(var(--secondary)/0.2)]",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          glow: "hover:shadow-[0_0_50px_hsl(var(--accent)/0.2)]",
        };
      case "highlight":
        return {
          bg: "bg-highlight/10",
          border: "border-highlight/30",
          text: "text-highlight",
          glow: "hover:shadow-[0_0_50px_hsl(var(--highlight)/0.2)]",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "hover:shadow-[0_0_50px_hsl(var(--primary)/0.2)]",
        };
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-morph"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Turning{" "}
            <span className="text-primary font-medium">complex ideas</span> into{" "}
            <span className="text-secondary font-medium">
              elegant solutions
            </span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-10" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-display text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const isLarge = project.size === "large";
            const isMedium = project.size === "medium";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative ${
                  isLarge
                    ? "lg:col-span-2 lg:row-span-2"
                    : isMedium
                    ? "lg:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`h-full glass-strong rounded-3xl overflow-hidden transition-all duration-500 ${colors.glow} border border-border/50 hover:border-opacity-100`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isLarge ? "h-72" : isMedium ? "h-48" : "h-40"
                    }`}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.title ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} text-xs font-display border ${colors.border}`}
                    >
                      {project.category}
                    </motion.div>

                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-xs font-display border border-accent/30"
                      >
                        <Star className="w-3 h-3 fill-accent" />
                        Featured
                      </motion.div>
                    )}

                    {/* Action buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.title ? 1 : 0,
                        y: hoveredProject === project.title ? 0 : 20,
                      }}
                      className="absolute bottom-4 right-4 flex gap-2"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-secondary hover:text-secondary transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3
                        className={`text-xl font-display group-hover:${colors.text} transition-colors`}
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1`}
                      />
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-muted/50 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all border border-border/50"
                        >
                          <i className={tech.icon} />
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-display shadow-lg"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
