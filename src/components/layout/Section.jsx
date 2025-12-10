import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, kicker, className, children }) {
  const { preset } = useAccent();
  return (
    <section id={id} className={cn("section-padding relative", className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid-sm opacity-10" />
      <div className="section-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl space-y-3">
            {eyebrow && (
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-[0.2em]",
                  preset.soft,
                  preset.border
                )}
              >
                <span className={cn("inline-block h-1.5 w-1.5 rounded-full", preset.text, preset.soft)} />
                <span className="text-slate-300">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {kicker && <p className="text-sm text-muted md:text-base">{kicker}</p>}
          </motion.div>
          <motion.div variants={fadeInUp}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
