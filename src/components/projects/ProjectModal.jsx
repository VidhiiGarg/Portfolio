import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";

export function ProjectModal({ project, onClose }) {
  const { preset } = useAccent();
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass relative max-w-lg w-full rounded-3xl border border-slate-800/90 bg-slate-950/95 p-6"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-slate-700/80 bg-slate-900/80 p-1 text-slate-300 hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="space-y-3">
              <p className="text-xs text-slate-500">{project.year}</p>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className={cn("text-sm", preset.text)}>{project.tagline}</p>
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-900/80 px-2.5 py-1 uppercase tracking-[0.18em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
