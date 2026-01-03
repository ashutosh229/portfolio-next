import Container from "./Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Wrapper for scroll animation per section
export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="snap-start py-section"
    >
      <Container>{children}</Container>
    </motion.section>
  );
};
