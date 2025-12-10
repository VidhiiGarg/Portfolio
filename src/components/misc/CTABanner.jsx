import React from "react";
import { motion } from "framer-motion";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const { preset } = useAccent();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="section-container py-20 md:py-28">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Orbs */}
          <motion.div
            className={cn(
              "absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-20",
              preset.soft
            )}
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-violet-500/20 to-cyan-500/20"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
          <motion.div
            className="mx-auto max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <motion.div
                className={cn("h-2 w-2 rounded-full", preset.soft)}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                Ready to collaborate
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-slate-100">Have a vision?</span>
              <span className={cn("block bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400 bg-clip-text text-transparent")}>
                Let's bring it to life.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether it's a startup MVP, a creative portfolio, or an immersive 3D experience — 
              I craft digital products that stand out and <span className="font-semibold text-slate-100">scale beautifully</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => handleScrollTo("contact")}
                className="group relative overflow-hidden rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                size="lg"
              >
                <motion.div
                  className={cn("absolute inset-0 rounded-xl", preset.soft)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                <span className="relative z-10 flex items-center gap-2.5">
                  Start a Project
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => handleScrollTo("projects")}
                className="rounded-xl border-white/15 bg-white/5 px-8 py-6 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                size="lg"
              >
                <span className="flex items-center gap-2.5">
                  View My Work
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
