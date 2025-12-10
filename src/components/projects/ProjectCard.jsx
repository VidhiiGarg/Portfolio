import React from "react";
import { motion } from "framer-motion";
import { ShimmerCard } from "@/components/misc/ShimmerCard";
import { cn } from "@/lib/utils";
import { useAccent } from "@/context/AccentContext";
import { ExternalLink, Github, ArrowUpRight, Sparkle } from "lucide-react";

export function ProjectCard({ project, onClick }) {
  const { preset } = useAccent();

  return (
    <motion.button
      onClick={() => onClick(project)}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left group relative"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <ShimmerCard className="h-full overflow-hidden relative border-slate-800/40">
        {/* Animated Background Gradient */}
        <motion.div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700",
            preset.soft
          )}
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, currentColor 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, currentColor 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, currentColor 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Top Accent Line */}
        <motion.div 
          className={cn("absolute top-0 left-0 right-0 h-[2px]", preset.soft)}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="relative flex flex-col gap-5 p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <motion.span 
                  className="text-xs font-bold text-slate-400 group-hover:text-slate-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.year}
                </motion.span>
                <span className="h-1 w-1 rounded-full bg-slate-700" />
                <motion.span
                  className={cn(
                    "rounded-full border-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]",
                    preset.border,
                    preset.text,
                    "backdrop-blur-sm bg-slate-950/50"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {project.role}
                </motion.span>
              </div>
              <h3 className="text-2xl font-bold text-slate-50 group-hover:text-white transition-colors leading-tight">
                {project.title}
              </h3>
            </div>
            
            {/* Animated Icon */}
            <motion.div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl border-2",
                "bg-slate-950/80 backdrop-blur-sm shadow-lg",
                preset.border,
                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              )}
              whileHover={{ scale: 1.15, rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight className={cn("h-5 w-5", preset.text)} />
            </motion.div>
          </div>

          {/* Tagline */}
          <p className="text-sm leading-relaxed text-slate-300 group-hover:text-slate-100 transition-colors min-h-[3rem]">
            {project.tagline}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={cn(
                  "rounded-lg bg-slate-900/90 backdrop-blur-sm px-3.5 py-2 text-[11px] font-semibold",
                  "uppercase tracking-[0.12em] text-slate-400",
                  "border border-slate-800/60 group-hover:border-slate-700",
                  "transition-all duration-300 shadow-sm"
                )}
              >
                {tech}
              </motion.span>
            ))}
            {project.stack.length > 4 && (
              <motion.span
                className={cn(
                  "rounded-lg bg-slate-900/90 backdrop-blur-sm px-3.5 py-2 text-[11px] font-semibold",
                  "uppercase tracking-[0.12em]",
                  preset.text,
                  "border border-slate-800/60"
                )}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                +{project.stack.length - 4}
              </motion.span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-between border-t border-slate-800/60 pt-5">
            <span className="inline-flex items-center gap-3 text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
              <motion.span 
                className={cn("h-[3px] rounded-full", preset.soft)}
                initial={{ width: 32 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.3 }}
              />
              <span className="flex items-center gap-1.5">
                <Sparkle className="h-3 w-3" />
                View details
              </span>
            </span>
            <motion.div 
              className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <ExternalLink className="h-4 w-4 text-slate-400 hover:text-slate-300 transition-colors" />
              <Github className="h-4 w-4 text-slate-400 hover:text-slate-300 transition-colors" />
            </motion.div>
          </div>
        </div>
      </ShimmerCard>
    </motion.button>
  );
}
