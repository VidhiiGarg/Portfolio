import React from "react";
import { EXPERIENCE } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ShimmerCard } from "@/components/misc/ShimmerCard";

export function Timeline() {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative space-y-6 border-l border-slate-800/80 pl-6"
    >
      {EXPERIENCE.map((item, idx) => (
        <motion.li key={idx} variants={fadeInUp} className="relative">
          <span className="absolute -left-[11px] mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(8,47,73,0.9)]" />
          <ShimmerCard className="px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {item.type}
              </p>
              <p className="text-xs text-slate-400">
                {item.start} — {item.end}
              </p>
            </div>
            <h3 className="mt-1 text-sm font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400">{item.org}</p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {item.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </ShimmerCard>
        </motion.li>
      ))}
    </motion.ol>
  );
}
