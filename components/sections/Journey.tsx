import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Code,
  Trophy,
  Lightbulb,
  Users,
  Target,
  Zap,
  Star,
  Heart,
  Flame,
} from "lucide-react";

const journeyMilestones = [
  {
    year: "2018",
    title: "The Spark",
    description:
      "Wrote my first line of code in Python. Built a simple calculator and got hooked.",
    icon: Lightbulb,
    color: "primary",
    achievement: "First Hello World",
  },
  {
    year: "2019",
    title: "Deep Dive",
    description:
      "Learned web development, built my first portfolio website using HTML, CSS, JS.",
    icon: Code,
    color: "secondary",
    achievement: "10+ Mini Projects",
  },
  {
    year: "2020",
    title: "Competitive Spirit",
    description:
      "Started competitive programming on Codeforces & LeetCode. Solved 500+ problems.",
    icon: Flame,
    color: "accent",
    achievement: "Specialist Rating",
  },
  {
    year: "2021",
    title: "First Recognition",
    description:
      "Won my first hackathon with an AI-powered health app. This changed everything.",
    icon: Trophy,
    color: "highlight",
    achievement: "Hackathon Winner",
  },
  {
    year: "2022",
    title: "New Chapter",
    description:
      "Joined IIT Bhilai for B.Tech CSE. Started exploring ML & deep learning.",
    icon: Rocket,
    color: "primary",
    achievement: "JEE Advanced Qualified",
  },
  {
    year: "2023",
    title: "Building Impact",
    description:
      "Led tech club, mentored 50+ juniors, contributed to open-source projects.",
    icon: Users,
    color: "secondary",
    achievement: "Community Leader",
  },
  {
    year: "2024",
    title: "Industry Experience",
    description:
      "Interned at top tech companies, worked on production-grade systems.",
    icon: Target,
    color: "accent",
    achievement: "Multiple Offers",
  },
  {
    year: "Now",
    title: "The Quest Continues",
    description:
      "Exploring AI/ML research, building startups, and creating meaningful impact.",
    icon: Star,
    color: "highlight",
    achievement: "Just Getting Started",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<
    string,
    { bg: string; text: string; border: string; glow: string; gradient: string }
  > = {
    primary: {
      bg: "bg-primary",
      text: "text-primary",
      border: "border-primary/30",
      glow: "shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
      gradient: "from-primary/20 to-transparent",
    },
    secondary: {
      bg: "bg-secondary",
      text: "text-secondary",
      border: "border-secondary/30",
      glow: "shadow-[0_0_30px_hsl(var(--secondary)/0.4)]",
      gradient: "from-secondary/20 to-transparent",
    },
    accent: {
      bg: "bg-accent",
      text: "text-accent",
      border: "border-accent/30",
      glow: "shadow-[0_0_30px_hsl(var(--accent)/0.4)]",
      gradient: "from-accent/20 to-transparent",
    },
    highlight: {
      bg: "bg-highlight",
      text: "text-highlight",
      border: "border-highlight/30",
      glow: "shadow-[0_0_30px_hsl(var(--highlight)/0.4)]",
      gradient: "from-highlight/20 to-transparent",
    },
  };
  return colors[color] || colors.primary;
};

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Story</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            <span className="text-foreground">The </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From{" "}
            <span className="text-primary font-medium">curious beginner</span>{" "}
            to{" "}
            <span className="text-secondary font-medium">
              passionate builder
            </span>{" "}
            — here's how it all{" "}
            <span className="text-accent font-medium">unfolded</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main connecting line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary via-secondary via-accent to-highlight origin-left rounded-full"
            />
          </div>

          {/* Main connecting line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-b from-primary via-secondary via-accent to-highlight origin-top rounded-full"
            />
          </div>

          {/* Desktop Timeline - Horizontal with alternating cards */}
          <div className="hidden lg:grid grid-cols-4 gap-4 relative">
            {journeyMilestones.map((milestone, index) => {
              const colors = getColorClasses(milestone.color);
              const Icon = milestone.icon;
              const isTop = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isTop ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative flex flex-col ${
                    isTop ? "items-center" : "items-center flex-col-reverse"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: isTop ? -5 : 5 }}
                    className={`relative w-full mb-8 ${!isTop && "mt-8 mb-0"}`}
                  >
                    <div
                      className={`glass-strong rounded-2xl p-5 border ${colors.border} hover:${colors.glow} transition-all duration-500 group relative overflow-hidden`}
                    >
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Year badge */}
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bg}/10 ${colors.text} text-xs font-bold tracking-wider mb-3`}
                        >
                          {milestone.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-display text-foreground mb-2 group-hover:text-gradient transition-all">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Achievement tag */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background/50 border ${colors.border}`}
                        >
                          <Heart className={`w-3 h-3 ${colors.text}`} />
                          <span
                            className={`text-xs font-medium ${colors.text}`}
                          >
                            {milestone.achievement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connector line */}
                  <div className={`w-0.5 h-8 ${colors.bg}/50`} />

                  {/* Icon Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`relative z-10 w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.glow} cursor-pointer`}
                    >
                      <Icon className="w-7 h-7 text-background" />
                    </motion.div>
                    {/* Pulse ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl ${colors.bg}/30 animate-ping`}
                      style={{ animationDuration: "2s" }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile/Tablet Timeline - Vertical */}
          <div className="lg:hidden space-y-8">
            {journeyMilestones.map((milestone, index) => {
              const colors = getColorClasses(milestone.color);
              const Icon = milestone.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Icon Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="relative shrink-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`relative z-10 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.glow}`}
                    >
                      <Icon className="w-6 h-6 text-background" />
                    </motion.div>
                    <div
                      className={`absolute inset-0 rounded-xl ${colors.bg}/30 animate-ping`}
                      style={{ animationDuration: "2.5s" }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex-1"
                  >
                    <div
                      className={`glass-strong rounded-2xl p-5 border ${colors.border} transition-all duration-500 group relative overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Year */}
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bg}/10 ${colors.text} text-xs font-bold tracking-wider mb-2`}
                        >
                          {milestone.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-display text-foreground mb-2">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-3">
                          {milestone.description}
                        </p>

                        {/* Achievement */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background/50 border ${colors.border}`}
                        >
                          <Heart className={`w-3 h-3 ${colors.text}`} />
                          <span
                            className={`text-xs font-medium ${colors.text}`}
                          >
                            {milestone.achievement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            This is just the{" "}
            <span className="text-primary font-medium">beginning</span>...
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <span>Let's Build Together</span>
            <Rocket className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
