"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Cloud,
  Globe,
  Zap,
  Coffee,
  Users,
  Trophy,
  Wrench,
  Brain,
} from "lucide-react";

const skills = {
  "Programming Languages": {
    icon: Code2,
    color: "primary",
    items: [
      { name: "C / C++", icon: "devicon-cplusplus-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Go", icon: "devicon-go-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
      { name: "R", icon: "devicon-r-plain" },
      { name: "Dart", icon: "devicon-dart-plain" },
    ],
  },

  "CS Fundamentals": {
    icon: Brain,
    color: "secondary",
    items: [
      { name: "Data Structures", icon: "devicon-thealgorithms-plain" },
      { name: "Algorithms", icon: "devicon-thealgorithms-plain" },
      { name: "OOPS", icon: "devicon-java-plain" },
      { name: "Operating Systems", icon: "devicon-linux-plain" },
      { name: "DBMS", icon: "devicon-database-plain" },
      { name: "Computer Networks", icon: "devicon-networkx-plain" },
    ],
  },

  "Web Technologies": {
    icon: Globe,
    color: "accent",
    items: [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "Django REST Framework", icon: "devicon-django-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "NestJS", icon: "devicon-nestjs-plain" },
      { name: "Spring Boot", icon: "devicon-spring-plain" },
    ],
  },

  Databases: {
    icon: Database,
    color: "highlight",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
    ],
  },

  "Machine Learning & AI": {
    icon: Brain,
    color: "primary",
    items: [
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
      { name: "PyTorch", icon: "devicon-pytorch-original" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "RAG", icon: "devicon-openai-plain" },
      { name: "LLMs", icon: "devicon-openai-plain" },
      { name: "LangChain", icon: "devicon-openai-plain" },
      { name: "LangGraph", icon: "devicon-openai-plain" },
      { name: "OpenCV", icon: "devicon-opencv-plain" },
      { name: "NLTK", icon: "devicon-python-plain" },
    ],
  },

  "App Development": {
    icon: Wrench,
    color: "secondary",
    items: [
      { name: "React Native", icon: "devicon-react-original" },
      { name: "Flutter", icon: "devicon-flutter-plain" },
    ],
  },

  DevOps: {
    icon: Cloud,
    color: "accent",
    items: [
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Git / GitHub", icon: "devicon-git-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "GCP", icon: "devicon-googlecloud-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Jenkins", icon: "devicon-jenkins-plain" },
      { name: "Ansible", icon: "devicon-ansible-plain" },
      { name: "Terraform", icon: "devicon-terraform-plain" },
      { name: "Prometheus", icon: "devicon-prometheus-plain" },
      { name: "Grafana", icon: "devicon-grafana-plain" },
    ],
  },
};

const funFacts = [
  {
    icon: Zap,
    text: "300+",
    subtext: "Coding Problems",
    color: "text-primary",
  },
  {
    icon: Coffee,
    text: "∞",
    subtext: "Cups of Coffee",
    color: "text-secondary",
  },
  { icon: Users, text: "35+", subtext: "Mentees Guided", color: "text-accent" },
  {
    icon: Trophy,
    text: "50+",
    subtext: "GitHub Contributions",
    color: "text-highlight",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
        };
      case "highlight":
        return {
          bg: "bg-highlight/10",
          border: "border-highlight/30",
          text: "text-highlight",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
        };
    }
  };

  return (
    <section
      id="about"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph" />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-morph"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A <span className="text-primary font-medium">passionate</span>{" "}
            Software Developer with a love for{" "}
            <span className="text-secondary font-medium">building</span>{" "}
            technical solutions and tools
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="text-2xl font-display text-primary mb-6">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="text-foreground font-medium">
                    Computer Science
                  </span>{" "}
                  student specializing in{" "}
                  <span className="text-primary font-medium">
                    Data Science & AI
                  </span>{" "}
                  at
                  <span className="text-secondary font-medium">
                    {" "}
                    IIT Bhilai
                  </span>
                  . With a strong foundation in software development and a keen
                  interest in building{" "}
                  <span className="text-accent font-medium">
                    scalable applications
                  </span>
                  , I love turning complex problems into elegant solutions.
                </p>
                <p>
                  My journey in tech started with{" "}
                  <span className="text-primary font-medium">
                    Statistics and Machine Learning
                  </span>
                  , which honed my foundations in domains like Advanced Machine
                  Learning and AI. Since then, I've expanded into
                  <span className="text-secondary font-medium">
                    {" "}
                    Full-Stack Development
                  </span>
                  ,<span className="text-accent font-medium"> DevOps</span>, and
                  <span className="text-highlight font-medium">
                    {" "}
                    Cloud Technologies
                  </span>
                  .
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to{" "}
                  <span className="text-primary font-medium">
                    open-source projects
                  </span>
                  , reading{" "}
                  <span className="text-secondary font-medium">
                    technical blogs on system design and scalable architectures
                  </span>
                  , or exploring the latest in
                  <span className="text-accent font-medium"> AI and LLMs</span>.
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.subtext}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-strong rounded-2xl p-5 text-center group cursor-default"
                >
                  <fact.icon
                    className={`w-8 h-8 mx-auto mb-2 ${fact.color} group-hover:scale-110 transition-transform`}
                  />
                  <div
                    className={`text-3xl font-display font-bold ${fact.color}`}
                  >
                    {fact.text}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {fact.subtext}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display mb-6">
              Technical <span className="text-gradient">Arsenal</span>
            </h3>
            {Object.entries(skills).map(
              ([category, { icon: Icon, color, items }], index) => {
                const colors = getColorClasses(color);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`glass-strong rounded-2xl p-5 transition-all duration-300 ${colors.text} hover:glow-primary`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border}`}
                      >
                        <Icon className={`h-5 w-5 ${colors.text}`} />
                      </div>
                      <h4 className={`font-display text-lg ${colors.text}`}>
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg ${colors.bg} border ${colors.border} ${colors.text} cursor-default transition-all`}
                        >
                          <i className={skill.icon} />
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
