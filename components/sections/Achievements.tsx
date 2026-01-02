"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Users,
  ExternalLink,
  LucideIcon,
} from "lucide-react";

interface AchievementItem {
  title: string;
  description: string;
  year: string;
  link?: string;
}

interface AchievementCategory {
  category: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent";
  items: AchievementItem[];
}

const achievements: AchievementCategory[] = [
  {
    category: "Competitions",
    icon: Trophy,
    color: "primary",
    items: [
      {
        title: "Trustathon 2025",
        description: "1st Place in App Development Hackathon, IIT Bhilai",
        year: "2025",
      },
      {
        title: "WebWave Hackathon 2024",
        description: "Secured 2nd Place at OpenLake, IIT Bhilai",
        year: "2024",
      },
      {
        title: "Smart India Hackathon 2024",
        description: "Pre-finalist at National Level",
        year: "2024",
      },
      {
        title: "Inter IIT Tech Meet 13.0",
        description: "Represented IIT Bhilai in MP1 Product Development",
        year: "2024",
      },
    ],
  },

  {
    category: "Academic & Competitive Exams",
    icon: Award,
    color: "secondary",
    items: [
      {
        title: "JEE Advanced 2023",
        description: "Ranked in Top 1% among 1.5 million candidates",
        year: "2023",
      },
      {
        title: "Competitive Programming",
        description: "Achieved Codeforces rating of 931",
        year: "2025",
      },
    ],
  },

  {
    category: "Programs & Fellowships",
    icon: Users,
    color: "accent",
    items: [
      {
        title: "IBITF Fellowship",
        description: "6-month Technology Innovation Fellowship under TIH",
        year: "2024",
      },
    ],
  },

  {
    category: "Open Source",
    icon: Star,
    color: "primary",
    items: [
      {
        title: "FOSS Overflow 2025",
        description: "Selected for Open-Source Contribution Program",
        year: "2025",
      },
    ],
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/30",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          text: "text-secondary",
          border: "border-secondary/30",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/30",
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/30",
        };
    }
  };

  return (
    <section id="achievements" className="section-padding bg-card/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${colors.bg}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + itemIndex * 0.1,
                      }}
                      className={`p-4 rounded-xl border ${colors.border} hover:bg-muted/30 transition-colors`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-foreground">
                              {item.title}
                            </h4>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${colors.text} hover:opacity-80`}
                                aria-label={`Open ${item.title} certificate`}
                              >
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono px-2 py-1 rounded ${colors.bg} ${colors.text}`}
                        >
                          {item.year}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
