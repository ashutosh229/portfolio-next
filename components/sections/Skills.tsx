"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: "primary" | "secondary" | "accent" | "highlight";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain", level: 95 },
      { name: "JavaScript", icon: "devicon-javascript-plain", level: 90 },
      { name: "TypeScript", icon: "devicon-typescript-plain", level: 88 },
      { name: "Go", icon: "devicon-go-plain", level: 80 },
      { name: "C++", icon: "devicon-cplusplus-plain", level: 85 },
      { name: "Java", icon: "devicon-java-plain", level: 75 },
      { name: "Rust", icon: "devicon-rust-original", level: 60 },
    ],
    color: "primary",
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original", level: 92 },
      { name: "Next.js", icon: "devicon-nextjs-plain", level: 88 },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-original", level: 95 },
      { name: "Vue.js", icon: "devicon-vuejs-plain", level: 70 },
      { name: "Redux", icon: "devicon-redux-original", level: 82 },
    ],
    color: "secondary",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain", level: 90 },
      { name: "Express", icon: "devicon-express-original", level: 88 },
      { name: "Django", icon: "devicon-django-plain", level: 85 },
      { name: "FastAPI", icon: "devicon-fastapi-plain", level: 87 },
      { name: "GraphQL", icon: "devicon-graphql-plain", level: 78 },
    ],
    color: "accent",
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 88 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", level: 85 },
      { name: "Redis", icon: "devicon-redis-plain", level: 80 },
      {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark",
        level: 78,
      },
      { name: "Docker", icon: "devicon-docker-plain", level: 82 },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: 75 },
    ],
    color: "highlight",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getColorClasses = (color: SkillCategory["color"]) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
          glow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
        };
      case "highlight":
        return {
          bg: "bg-highlight/10",
          border: "border-highlight/30",
          text: "text-highlight",
          glow: "group-hover:shadow-[0_0_30px_hsl(var(--highlight)/0.3)]",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
        };
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-morph"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mastering the tools that bring{" "}
            <span className="text-primary font-medium">ideas</span> to{" "}
            <span className="text-secondary font-medium">life</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const colors = getColorClasses(category.color);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              >
                <div
                  className={`glass-strong rounded-3xl p-8 transition-all duration-500 ${colors.glow} hover:border-opacity-50`}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`w-3 h-3 rounded-full ${colors.bg} ${colors.text} animate-pulse`}
                    />
                    <h3 className={`text-2xl font-display ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative group/skill"
                      >
                        <div
                          className={`relative flex flex-col items-center justify-center p-4 rounded-2xl
                          ${colors.bg} border ${
                            colors.border
                          } transition-all duration-300 cursor-pointer
                          hover:scale-110 hover:z-10
                          ${
                            hoveredSkill === skill.name
                              ? colors.glow.replace("group-hover:", "")
                              : ""
                          }`}
                        >
                          <div className="relative mb-2">
                            {/* Circular skill level */}
                            <svg
                              className="w-12 h-12 -rotate-90"
                              viewBox="0 0 36 36"
                            >
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className="stroke-muted"
                                strokeWidth="2"
                              />
                              <motion.circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className={`stroke-current ${colors.text}`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={`${skill.level}, 100`}
                                initial={{ strokeDasharray: "0, 100" }}
                                animate={
                                  isInView
                                    ? { strokeDasharray: `${skill.level}, 100` }
                                    : {}
                                }
                                transition={{
                                  duration: 1.5,
                                  delay: catIndex * 0.1 + skillIndex * 0.1,
                                  ease: "easeOut",
                                }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <i
                                className={`${skill.icon} ${colors.text} text-xl`}
                              />
                            </div>
                          </div>

                          <span className="text-xs font-medium text-foreground text-center leading-tight">
                            {skill.name}
                          </span>

                          {/* Hover tooltip */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={
                              hoveredSkill === skill.name
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                            }
                            className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md ${colors.bg} ${colors.text} text-xs font-mono font-bold whitespace-nowrap border ${colors.border}`}
                          >
                            {skill.level}%
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
