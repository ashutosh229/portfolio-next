"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Data Science & Artificial Intelligence",
    institution: "Indian Institute of Technology, Bhilai",
    duration: "2023 - 2027 (Expected)",
    cgpa: "8.21 / 10.0",
    gradingType: "CGPA",
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Data Analytics and Visualization",
      "Computer Organization and Architecture",
      "Artificial Intelligence",
      "Database Systems",
      "Computer Networks",
    ],
    achievements: ["IBITF Fellowship Selection"],
  },
  {
    degree: "Senior Secondary (XII)",
    specialization: "Science - PCMB",
    institution: "Little Star High School",
    duration: "2021 - 2023",
    cgpa: "90.2%",
    gradingType: "Percentage",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    achievements: [
      "School Topper",
      "Jee Mains 99%ile+",
      "JEE Advanced Qualified",
    ],
  },
  {
    degree: "Secondary (X)",
    specialization: "Science",
    institution: "Little Star High School",
    duration: "2011 - 2021",
    cgpa: "92.4%",
    gradingType: "Percentage",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    achievements: [
      "School Topper",
      "Winner in Multiple Quizzes and Exhibitions",
      "Represented school in Inter School Level Science Fair",
      "Olympiad Awards",
    ],
  },
];

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block pointer-events-none" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block glow-primary pointer-events-none" />

                  <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 card-hover">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-secondary font-medium">
                            {edu.specialization}
                          </p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="space-y-3 mb-6">
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">📍</span>
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">📅</span>
                          {edu.duration}
                        </p>
                        <p className="text-foreground font-medium flex items-center gap-2">
                          <span className="text-primary">📊</span>
                          {edu.gradingType}: {edu.cgpa}
                        </p>
                      </div>

                      {/* Courses */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-secondary" />
                          <h4 className="font-medium text-sm text-secondary">
                            Relevant Courses
                          </h4>
                        </div>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {edu.courses.map((course) => (
                            <li
                              key={course}
                              className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-accent" />
                          <h4 className="font-medium text-sm text-accent">
                            Achievements
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <span className="text-primary">▹</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
