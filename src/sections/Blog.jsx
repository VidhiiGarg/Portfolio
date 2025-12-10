import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { BLOG_POSTS } from "@/lib/data";
import { ShimmerCard } from "@/components/misc/ShimmerCard";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock, Tag, Sparkles } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function Blog() {
  const { preset } = useAccent();

  return (
    <Section
      id="blog"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Sparkles className={cn("h-3.5 w-3.5", preset.text)} />
          <span>Insights & Ideas</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Thoughts on code & design
        </span>
      }
      kicker="Exploring the intersection of engineering, creativity, and continuous learning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <motion.div
            key={post.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ShimmerCard className="border-slate-800/40">
              <motion.div 
                className="group relative h-full cursor-pointer overflow-hidden"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Refined Gradient Overlay */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]",
                  preset.soft
                )} />
                
                {/* Content */}
                <div className="relative flex h-full flex-col gap-5 p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <motion.div 
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg",
                          preset.soft,
                          "opacity-15"
                        )}
                        whileHover={{ scale: 1.1, opacity: 0.25 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Tag className="h-4 w-4 text-white" />
                      </motion.div>
                      <span className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        preset.text
                      )}>
                        {post.tag}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold leading-tight text-slate-100 transition-colors duration-300 group-hover:text-white">
                      {post.title}
                    </h3>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/40">
                    <span className="text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                      {post.date}
                    </span>
                    
                    <motion.div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border",
                        "border-white/10 bg-white/[0.03] transition-all duration-300",
                        "group-hover:border-white/20 group-hover:bg-white/[0.08]"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className={cn(
                        "h-4 w-4 text-slate-400 transition-all duration-300",
                        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        preset.text
                      )} />
                    </motion.div>
                  </div>
                </div>

                {/* Smooth Decorative Glow */}
                <motion.div
                  className={cn(
                    "absolute -top-8 -right-8 h-16 w-16 rounded-full blur-2xl opacity-0 transition-opacity duration-500",
                    preset.soft,
                    "group-hover:opacity-10"
                  )}
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </ShimmerCard>
          </motion.div>
        ))}

        {/* Elegant Coming Soon Card */}
        <motion.div
          custom={BLOG_POSTS.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div 
            className={cn(
              "group relative h-full overflow-hidden rounded-2xl border p-7",
              "border-dashed border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent",
              "transition-all duration-500 hover:border-white/20"
            )}
            whileHover={{ y: -3 }}
          >
            <div className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]",
              preset.soft
            )} />
            
            <div className="relative flex h-full flex-col items-center justify-center gap-5 text-center">
              <motion.div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl",
                  preset.soft,
                  "opacity-10 group-hover:opacity-15"
                )}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-300 group-hover:text-slate-200 transition-colors">
                  More Coming Soon
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                  Currently crafting new insights about modern web development
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
