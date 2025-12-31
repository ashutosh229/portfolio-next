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
        title: "Google Code Jam",
        description: "Qualified to Round 3 (Top 3000 globally)",
        year: "2024",
      },
      {
        title: "ICPC Regionals",
        description: "Ranked 45th in Asia-Pacific Region",
        year: "2023",
      },
      {
        title: "Smart India Hackathon",
        description: "National Finalist - Built AI healthcare solution",
        year: "2023",
      },
    ],
  },
  {
    category: "Certifications",
    icon: Award,
    color: "secondary",
    items: [
      {
        title: "AWS Solutions Architect Associate",
        description: "Cloud infrastructure and architecture design",
        year: "2024",
        link: "https://aws.amazon.com",
      },
      {
        title: "Google Cloud Professional Data Engineer",
        description: "Data processing and ML pipelines on GCP",
        year: "2024",
        link: "https://cloud.google.com",
      },
      {
        title: "Meta Frontend Developer Certificate",
        description: "Advanced React and frontend development",
        year: "2023",
        link: "https://coursera.org",
      },
    ],
  },
  {
    category: "Open Source",
    icon: Star,
    color: "accent",
    items: [
      {
        title: "Hacktoberfest Contributor",
        description: "50+ merged PRs across popular repositories",
        year: "2023-24",
      },
      {
        title: "TensorFlow Contributor",
        description: "Bug fixes and documentation improvements",
        year: "2023",
      },
      {
        title: "Published NPM Package",
        description: "React component library with 500+ downloads/week",
        year: "2024",
      },
    ],
  },
  {
    category: "Leadership",
    icon: Users,
    color: "primary",
    items: [
      {
        title: "Technical Lead - Coding Club",
        description: "Led 30+ member team, organized 10+ events",
        year: "2023-24",
      },
      {
        title: "DSA Mentor",
        description: "Mentored 50+ students for placement preparation",
        year: "2023-24",
      },
      {
        title: "Workshop Conductor",
        description: "Conducted ML/AI workshops for 200+ attendees",
        year: "2024",
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
