import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Timeline } from "@/components/timeline/Timeline";
import { TestimonialsStrip } from "@/components/testimonials/TestimonialsStrip";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Briefcase, Route } from "lucide-react";

export function Experience() {
  const { preset } = useAccent();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);
  
  return (
    <Section
      id="experience"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Route className={cn("h-3.5 w-3.5", preset.text)} />
          <span>Journey</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          The path forward.
        </span>
      }
      kicker="A snapshot of milestones, learning experiences, and the people who shaped my journey."
    >
      <motion.div style={{ opacity }}>
        <motion.div 
          className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
        <Timeline />
        <div className="space-y-4">
          <motion.p 
            className="text-xs uppercase tracking-[0.2em] text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Words from people I worked with
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TestimonialsStrip />
          </motion.div>
        </div>
      </motion.div>
      </motion.div>
    </Section>
  );
}
