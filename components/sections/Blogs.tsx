"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
  Sparkles,
} from "lucide-react";

type BlogColor = "primary" | "secondary" | "accent" | "highlight";

interface BaseBlog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  color: BlogColor;
  featured: boolean;
}

interface InternalBlog extends BaseBlog {
  external: false;
  slug: string;
}

interface ExternalBlog extends BaseBlog {
  external: true;
  externalUrl: string;
}

type Blog = InternalBlog | ExternalBlog;

const blogs: Blog[] = [
  {
    id: "1",
    title: "Building Scalable Microservices with Go and gRPC",
    excerpt:
      "Learn how to design and implement high-performance microservices using Go, gRPC, and best practices for distributed systems.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["Go", "Microservices", "Backend"],
    image: "/placeholder.svg",
    external: false,
    slug: "/blog/microservices-go-grpc",
    color: "primary",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Transformer Architectures: A Deep Dive",
    excerpt:
      "Comprehensive guide to transformer models, attention mechanisms, and their applications in modern NLP and computer vision.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["AI/ML", "Deep Learning", "NLP"],
    image: "/placeholder.svg",
    external: true,
    externalUrl: "https://medium.com",
    color: "secondary",
    featured: true,
  },
  {
    id: "3",
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Practical tips and techniques to improve React app performance, including memoization, code splitting, and bundle optimization.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    tags: ["React", "Performance", "Frontend"],
    image: "/placeholder.svg",
    external: false,
    slug: "/blog/react-performance",
    color: "accent",
    featured: false,
  },
  {
    id: "4",
    title: "Getting Started with Kubernetes: A Beginner's Guide",
    excerpt:
      "Step-by-step introduction to Kubernetes concepts, deployment strategies, and hands-on examples for container orchestration.",
    date: "Oct 25, 2024",
    readTime: "10 min read",
    tags: ["DevOps", "Kubernetes", "Cloud"],
    image: "/placeholder.svg",
    external: true,
    externalUrl: "https://dev.to",
    color: "highlight",
    featured: false,
  },
  {
    id: "5",
    title: "Implementing Authentication in Modern Web Apps",
    excerpt:
      "Complete guide to implementing secure authentication using JWT, OAuth 2.0, and best security practices.",
    date: "Oct 8, 2024",
    readTime: "9 min read",
    tags: ["Security", "Backend", "Web Dev"],
    image: "/placeholder.svg",
    external: false,
    slug: "/blog/authentication-guide",
    color: "primary",
    featured: false,
  },
  {
    id: "6",
    title: "Data Structures Every Developer Should Know",
    excerpt:
      "Essential data structures explained with real-world use cases, time complexities, and implementation tips.",
    date: "Sep 20, 2024",
    readTime: "7 min read",
    tags: ["DSA", "Algorithms", "CS Fundamentals"],
    image: "/placeholder.svg",
    external: false,
    slug: "/blog/data-structures",
    color: "secondary",
    featured: false,
  },
];

const allTags: string[] = Array.from(
  blogs.reduce<Set<string>>((set, blog) => {
    blog.tags.forEach((tag) => set.add(tag));
    return set;
  }, new Set())
);

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);

  const filteredBlogs = activeTag
    ? blogs.filter((blog) => blog.tags.includes(activeTag))
    : blogs;

  const getColorClasses = (color: string) => {
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
    <section
      id="blogs"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Sharing <span className="text-primary font-medium">knowledge</span>{" "}
            and <span className="text-secondary font-medium">insights</span>{" "}
            from my journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-10" />

          {/* Filter tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-xl font-display text-sm transition-all duration-300 ${
                activeTag === null
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              All
            </motion.button>
            {allTags.slice(0, 6).map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-xl font-display text-sm transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => {
            const colors = getColorClasses(blog.color);
            const isLarge = blog.featured && index < 2;

            return (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
                className={`group relative ${
                  isLarge ? "lg:col-span-1 lg:row-span-1" : ""
                }`}
              >
                <div
                  className={`h-full glass-strong rounded-3xl overflow-hidden transition-all duration-500 ${colors.glow} border border-border/50 hover:border-opacity-100`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredBlog === blog.id ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />

                    {/* Featured badge */}
                    {blog.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-xs font-display border border-accent/30"
                      >
                        <Sparkles className="w-3 h-3" /> Featured
                      </motion.div>
                    )}

                    {/* External indicator */}
                    {blog.external && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-sm text-xs font-display text-muted-foreground border border-border">
                        External
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />{" "}
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-secondary" />{" "}
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-display mb-3 line-clamp-2 group-hover:${colors.text} transition-colors`}
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                          <Tag className="w-3 h-3" /> {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Read more */}
                    {blog.external ? (
                      <a
                        href={blog.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-display ${colors.text} group/link`}
                      >
                        <BookOpen className="w-4 h-4" /> Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        href={blog.slug || "#"}
                        className={`inline-flex items-center gap-2 text-sm font-display ${colors.text} group/link`}
                      >
                        <BookOpen className="w-4 h-4" /> Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
