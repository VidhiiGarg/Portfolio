import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function Projects() {
  const [selected, setSelected] = useState(null);
  const { preset } = useAccent();
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  return (
    <>
      <Section
        id="projects"
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <Sparkles className={cn("h-3.5 w-3.5", preset.text)} />
            <span>Featured Work</span>
          </span>
        }
        title={
          <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Crafted with passion.
          </span>
        }
        kicker="A collection of impactful projects — from innovative hackathon builds to production-ready applications."
      >
        <motion.div 
          style={{ opacity, scale }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px">
            <div className={cn("h-full w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-20", preset.text)} />
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                whileHover={{ zIndex: 10 }}
                className="relative"
              >
                {/* Index Number */}
                <motion.div 
                  className="absolute -left-4 -top-4 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2",
                    "bg-slate-950/90 backdrop-blur-sm font-bold text-sm",
                    preset.border,
                    preset.text
                  )}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
                
                <ProjectCard
                  project={project}
                  onClick={(p) => setSelected(p)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decoration */}
          <motion.div 
            className="mt-16 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className={cn("h-[2px] w-20 rounded-full", preset.soft)} />
            <div className={cn("h-2 w-2 rounded-full", preset.soft)} />
            <div className={cn("h-[2px] w-20 rounded-full", preset.soft)} />
          </motion.div>
        </motion.div>
      </Section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
