import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SERVICES } from "@/lib/data";
import { ShimmerCard } from "@/components/misc/ShimmerCard";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Code, Sparkles, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const icons = [Code, Sparkles, Cpu];

export function Services() {
  const { preset } = useAccent();

  return (
    <Section
      id="services"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Sparkles className={cn("h-3.5 w-3.5", preset.text)} />
          <span>What I Offer</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Expertise you can leverage.
        </span>
      }
      kicker="Perfect for early-stage ideas, MVPs, dashboards, and visual-heavy apps — delivered with precision and polish."
    >
      <motion.div 
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
      >
        {SERVICES.map((s, idx) => {
          const Icon = icons[idx];
          return (
            <motion.div key={s.title} variants={cardVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
              <ShimmerCard className="group h-full relative overflow-hidden border-slate-800/40">
                {/* Hover Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500",
                  preset.soft
                )} />
                
                <motion.div 
                  className="relative flex h-full flex-col gap-5 p-7"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl border-2",
                      preset.soft,
                      preset.border,
                      "opacity-20 backdrop-blur-sm bg-slate-950/50 group-hover:opacity-30 transition-opacity duration-500"
                    )}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-50 transition-colors group-hover:text-white">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {s.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {s.tags.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className={cn(
                          "rounded-lg bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium",
                          "uppercase tracking-[0.15em] text-slate-400",
                          "border border-white/5 group-hover:border-white/10",
                          "transition-all duration-300 hover:text-slate-300"
                        )}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ShimmerCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
