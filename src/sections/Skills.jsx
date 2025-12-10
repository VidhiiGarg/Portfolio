import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SkillGrid } from "@/components/skills/SkillGrid";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Code, Layers } from "lucide-react";

export function Skills() {
  const { preset } = useAccent();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);
  
  return (
    <Section
      id="skills"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Layers className={cn("h-3.5 w-3.5", preset.text)} />
          <span>Tech Arsenal</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Full-stack versatility.
        </span>
      }
      kicker="From low-level DSA foundations to high-level product thinking — building with modern tools and frameworks."
    >
      <motion.div style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillGrid />
        </motion.div>
      </motion.div>
    </Section>
  );
}
