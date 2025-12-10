import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ShimmerCard } from "@/components/misc/ShimmerCard";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { MapPin, Sparkles, TrendingUp, Code2, Award, Coffee, Rocket, Heart, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export function About() {
  const { preset } = useAccent();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  const interests = [
    { icon: <Code2 className="h-4 w-4" />, label: "3D Web Graphics" },
    { icon: <Rocket className="h-4 w-4" />, label: "AI & ML" },
    { icon: <Coffee className="h-4 w-4" />, label: "UI/UX Design" },
    { icon: <Heart className="h-4 w-4" />, label: "Open Source" },
  ];

  return (
    <Section
      id="about"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Zap className={cn("h-3.5 w-3.5", preset.text)} />
          <span>About Me</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Engineering meets creativity
        </span>
      }
      kicker="Building scalable digital products with precision, design thinking, and a passion for immersive experiences."
    >
      <motion.div style={{ opacity }}>
        <motion.div 
          className="grid gap-6 lg:grid-cols-2 xl:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        >
        {/* Left Column */}
        <div className="space-y-6">
          {/* Main Bio Card */}
          <motion.div variants={fadeIn} whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
            <ShimmerCard className="border-slate-800/40">
              <div className="space-y-6 p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={cn(
                      "mt-1 flex h-14 w-14 items-center justify-center rounded-2xl border-2",
                      preset.soft,
                      preset.border,
                      "opacity-20 backdrop-blur-sm bg-slate-950/50"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5, opacity: 0.3 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  >
                    <Code2 className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-4 text-lg font-bold text-slate-100">
                      Full-Stack Engineer & AI Enthusiast
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      I'm <span className="font-semibold text-slate-100">Sumit Thakur</span> — a B.Tech student specializing in AI & ML, 
                      with a passion for crafting polished digital experiences. I thrive at the intersection of{" "}
                      <span className={cn("font-medium", preset.text)}>
                        interaction design, 3D web graphics, and robust system architecture
                      </span>.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-l-2 border-slate-800/60 pl-6">
                  <p className="text-sm leading-relaxed text-slate-300">
                    My approach is end-to-end: from concept and user flows to pixel-perfect UI, 
                    API integration, and smooth animations. I believe great products come from the 
                    perfect balance of <span className="font-medium text-slate-100">performance, aesthetics, and functionality</span>.
                  </p>
                  
                  <p className="text-sm leading-relaxed text-slate-300">
                    Recent work spans <span className={cn("font-medium", preset.text)}>healthcare tech, 
                    EdTech platforms, and sustainability solutions</span> — always with a focus on 
                    creating intuitive, responsive experiences that scale.
                  </p>
                </div>
              </div>
            </ShimmerCard>
          </motion.div>

          {/* Quick Facts */}
          <motion.div variants={fadeIn}>
            <ShimmerCard>
              <div className="space-y-4 p-6">
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
                    <MapPin className="h-4 w-4 text-white" />
                  </motion.div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Quick Facts
                  </h4>
                </div>
                
                <div className="space-y-3 text-sm">
                  <motion.div 
                    className="flex items-center justify-between group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-slate-400">Based in</span>
                    <span className="font-medium text-slate-100 group-hover:text-white transition-colors">India (IST)</span>
                  </motion.div>
                  <div className="h-px bg-slate-800/40" />
                  
                  <motion.div 
                    className="flex items-center justify-between group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-slate-400">Specialization</span>
                    <span className={cn("font-medium", preset.text)}>Full-Stack + 3D + AI</span>
                  </motion.div>
                  <div className="h-px bg-slate-800/40" />
                  
                  <motion.div 
                    className="flex items-center justify-between group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-slate-400">Availability</span>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className={cn("h-2 w-2 rounded-full", preset.soft)}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="font-medium text-slate-100 group-hover:text-white transition-colors">Open for work</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ShimmerCard>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Interests Grid */}
          <motion.div variants={fadeIn}>
            <ShimmerCard>
              <div className="space-y-4 p-6">
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
                    <Sparkles className="h-4 w-4 text-white" />
                  </motion.div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Interests
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, i) => (
                    <motion.div
                      key={interest.label}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-xl border border-white/10",
                        "bg-gradient-to-br from-white/[0.03] to-transparent p-3.5",
                        "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                      )}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <div className={cn("transition-colors duration-300", preset.text)}>
                        {interest.icon}
                      </div>
                      <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                        {interest.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ShimmerCard>
          </motion.div>

          {/* Currently Learning */}
          <motion.div variants={fadeIn}>
            <ShimmerCard>
              <div className="space-y-4 p-6">
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
                    <TrendingUp className="h-4 w-4 text-white" />
                  </motion.div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Currently Learning
                  </h4>
                </div>
                
                <div className="space-y-3 text-sm text-slate-300">
                  {[
                    "Advanced Three.js & React Three Fiber techniques",
                    "Motion design systems & micro-interactions",
                    "Scalable system architecture patterns"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start gap-2.5 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                    >
                      <Sparkles className={cn("mt-0.5 h-3.5 w-3.5 flex-shrink-0", preset.text)} />
                      <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ShimmerCard>
          </motion.div>

          {/* Achievement Badge */}
          <motion.div variants={fadeIn}>
            <motion.div 
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500",
                "border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent",
                "hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
              )}
              whileHover={{ y: -2 }}
            >
              <div className={cn(
                "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]",
                preset.soft
              )} />
              
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl",
                      preset.soft
                    )}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Milestone
                    </div>
                    <div className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                      #100DaysOfCode
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  Completed #100DaysOfDSA and now building in public with #365DaysOfCode
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      </motion.div>
    </Section>
  );
}
