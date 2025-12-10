import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { motion } from "framer-motion";
import { ShimmerCard } from "@/components/misc/ShimmerCard";

export function TestimonialsStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <ShimmerCard className="h-full px-4 py-4">
            <p className="text-sm text-slate-200">“{t.quote}”</p>
            <div className="mt-3 text-xs text-slate-400">
              <p className="font-medium text-slate-100">{t.name}</p>
              <p>{t.title}</p>
            </div>
          </ShimmerCard>
        </motion.div>
      ))}
    </div>
  );
}
