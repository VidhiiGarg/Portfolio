import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeInUp, floatingAnimation } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/misc/MagneticButton";
import { ParticlesBackground } from "@/components/misc/ParticlesBackground";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight, Cpu, Zap, Code, CpuIcon as Brain } from "lucide-react";

export function Hero() {
  const { preset } = useAccent();
  const [isHovered, setIsHovered] = useState(false);
  
  // Smooth parallax mouse values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });
  
  const parallaxX = useTransform(springX, [-1000, 1000], [20, -20]);
  const parallaxY = useTransform(springY, [-1000, 1000], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2000;
      const y = (clientY / window.innerHeight - 0.5) * 2000;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Smooth gradient transition
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    "from-cyan-400 via-blue-300 to-violet-400",
    "from-emerald-400 via-teal-300 to-cyan-400",
    "from-violet-400 via-purple-300 to-fuchsia-400",
    "from-rose-400 via-pink-300 to-orange-400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Dot Pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={cn("absolute h-1 w-1 rounded-full", preset.soft)}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating Circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/5"
            style={{
              width: 40 + Math.random() * 100,
              height: 40 + Math.random() * 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 40, 0],
              x: [0, 20 - Math.random() * 40, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-800/10 via-transparent to-transparent" />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ x: parallaxX, y: parallaxY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </motion.div>

        {/* Animated Diagonal Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className={cn("absolute h-px w-full", preset.soft)}
              style={{
                top: `${20 + i * 20}%`,
                opacity: 0.1,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}
        </div>
        
        {/* Large Animated Orbs */}
        <motion.div
          className={cn(
            "absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full blur-3xl opacity-[0.15]",
            preset.soft
          )}
          animate={{
            x: [0, 25, 0],
            y: [0, 35, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full blur-3xl opacity-10 bg-gradient-to-r from-cyan-500/20 to-violet-500/20"
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing Rings */}
        <div className="absolute top-1/4 left-1/4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className={cn("absolute rounded-full border", preset.border)}
              style={{
                width: 100 + i * 50,
                height: 100 + i * 50,
                left: -(50 + i * 25),
                top: -(50 + i * 25),
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.05, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <ParticlesBackground />

      <div className="section-container relative z-10 flex min-h-screen flex-col items-center justify-center pt-28 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="relative flex-1 max-w-2xl space-y-8">
          {/* Sleek Animated Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/0 px-5 py-2.5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Smooth Pulsing Indicator */}
            <div className="relative flex items-center justify-center">
              <motion.div 
                className={cn("h-2 w-2 rounded-full", preset.soft)}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className={cn("absolute h-2 w-2 rounded-full", preset.soft)}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <span className="text-sm font-medium tracking-[0.15em] text-slate-300">
              CRAFTING 3D EXPERIENCES
            </span>
            
            {/* Smooth Rotating Sparkle */}
            <motion.div
              className="absolute -right-1.5 -top-1.5"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Sparkles className={cn("h-3.5 w-3.5", preset.text)} />
            </motion.div>
          </motion.div>

          {/* Refined Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl leading-tight sm:text-6xl md:text-7xl md:leading-[1.1] font-bold tracking-tight">
              <span className="block text-slate-200">Building The</span>
              <motion.span
                key={gradientIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "block bg-gradient-to-r bg-clip-text text-transparent",
                  gradients[gradientIndex]
                )}
              >
                Future of Web
              </motion.span>
              <span className="block text-slate-300">
                With <span className={cn("bg-gradient-to-r bg-clip-text text-transparent font-extrabold", preset.text)}>AI & 3D</span>
              </span>
            </h1>

            <motion.p 
              className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              I'm <span className="font-semibold text-slate-200">Sumit Thakur</span>, a full-stack engineer 
              specializing in immersive 3D interfaces and AI-powered applications. 
              I transform ambitious visions into{" "}
              <span className="text-slate-200">seamless, scalable experiences</span>.
            </motion.p>
          </motion.div>

          {/* Refined Tech Stack Pills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: <Brain className="h-4 w-4" />, label: "AI/ML" },
              { icon: <Code className="h-4 w-4" />, label: "3D Graphics" },
              { icon: <Cpu className="h-4 w-4" />, label: "Real-time" },
              { icon: <Zap className="h-4 w-4" />, label: "Performance" },
            ].map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + 0.08 * i, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className={cn("transition-colors duration-300", preset.text)}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-slate-100">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Polished CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton intensity={0.4}>
              <Button
                onClick={() => handleScrollTo("projects")}
                className="group relative overflow-hidden rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                size="lg"
              >
                {/* Smooth Gradient Background */}
                <motion.div
                  className={cn("absolute inset-0 rounded-xl", preset.soft)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                <span className="relative z-10 flex items-center gap-2.5">
                  View My Work
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
              </Button>
            </MagneticButton>

            <MagneticButton intensity={0.25}>
              <Button
                variant="outline"
                onClick={() => handleScrollTo("contact")}
                className="group rounded-xl border-white/15 bg-white/[0.03] px-8 py-6 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
                size="lg"
              >
                <span className="flex items-center gap-2.5">
                  Let's Collaborate
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                </span>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Elegant Stats Display */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.45 }}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            {[
              { value: "15+", label: "Projects Shipped" },
              { value: "3+", label: "Years Coding" },
              { value: "∞", label: "Passion Level" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
              >
                <div className="text-3xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-white">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {stat.label}
                </div>
                {/* Subtle Hover Glow */}
                <motion.div 
                  className={cn("absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]", preset.soft)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Circular Hero Image */}
        <motion.div
          className="relative mt-12 flex-1 md:mt-0 w-full max-w-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floating Animation Container */}
          <motion.div
            className="relative w-full aspect-square max-w-md"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rotating Outer Ring */}
            <motion.div
              className={cn("absolute inset-0 rounded-full border-2 opacity-20", preset.border)}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ padding: 20 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className={cn("h-3 w-3 rounded-full", preset.soft)}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Second Rotating Ring */}
            <motion.div
              className="absolute inset-4 rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                <motion.div
                  className={cn("h-2 w-2 rounded-full", preset.soft)}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* Outer Glow */}
            <motion.div 
              className={cn(
                "absolute inset-0 rounded-full blur-3xl opacity-20",
                preset.soft
              )}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main Circular Image Container */}
            <div className="relative w-full h-full">
              {/* Animated Border */}
              <motion.div
                className={cn("absolute inset-0 rounded-full p-[3px]", preset.soft)}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full bg-slate-950" />
              </motion.div>

              {/* Image Circle */}
              <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-slate-900/50 bg-gradient-to-br from-slate-800/40 to-black/60 shadow-2xl shadow-black/60 backdrop-blur-xl">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80" 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

              {/* Orbiting Dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 8,
                    height: 8,
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                >
                  <motion.div
                    className={cn("h-2 w-2 rounded-full", preset.soft)}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: -140,
                      marginLeft: -4,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className={cn(
                "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border backdrop-blur-md px-6 py-3",
                "border-white/10 bg-black/80 shadow-xl"
              )}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4, repeat: Infinity, ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className={cn("h-2.5 w-2.5 rounded-full", preset.soft)}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <div className="text-sm font-semibold text-slate-100 whitespace-nowrap">Available for Work</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 45}%`,
                  top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 45}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className={cn("h-4 w-4", preset.text)} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-500 tracking-[0.15em] font-medium">
            SCROLL
          </span>
          <motion.div
            className="h-10 w-[2px] rounded-full overflow-hidden bg-white/5"
          >
            <motion.div
              className={cn("w-full rounded-full", preset.soft)}
              animate={{ 
                height: ["30%", "70%", "30%"],
                y: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}