import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { SKILLS } from "@/lib/data";
import { ShimmerCard } from "@/components/misc/ShimmerCard";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";

export function SkillGrid() {
  const { preset } = useAccent();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {SKILLS.map((skill, i) => (
        <motion.div
          key={skill}
          variants={fadeInUp}
          transition={{ delay: i * 0.02 }}
          onHoverStart={() => setHoveredIndex(i)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -4, scale: 1.02 }}
          className="relative"
        >
          <ShimmerCard className="group relative overflow-hidden">
            {/* Hover Gradient Background */}
            <div className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500",
              preset.soft,
              hoveredIndex === i && "opacity-[0.06]"
            )} />
            
            <div className="relative flex items-center justify-between gap-3 px-5 py-4">
              {/* Skill Name */}
              <span className={cn(
                "text-sm font-medium transition-all duration-300",
                hoveredIndex === i ? cn("text-white", preset.text) : "text-slate-200"
              )}>
                {skill}
              </span>
              
              {/* Number Badge */}
              <motion.div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg",
                  "border border-white/10 bg-slate-900/50 backdrop-blur-sm",
                  "transition-all duration-300",
                  hoveredIndex === i && cn("border-white/20", preset.soft, "bg-opacity-20")
                )}
                animate={hoveredIndex === i ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider transition-colors duration-300",
                  hoveredIndex === i ? preset.text : "text-slate-500"
                )}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </div>

            {/* Progress Bar Effect */}
            <motion.div
              className={cn("absolute bottom-0 left-0 h-[2px]", preset.soft)}
              initial={{ width: 0 }}
              animate={hoveredIndex === i ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </ShimmerCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
