import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  const canvasRef = useRef(null);
  const { preset } = useAccent();
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();
    
    // Particle class for performance
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      
      draw(ctx, color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
    }
    
    // Create particles (fewer for better performance)
    const particleCount = Math.min(50, Math.floor((width * height) / 20000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());
    
    // Get accent color
    const getAccentColor = () => {
      const colors = {
        violet: '#8b5cf6',
        cyan: '#06b6d4',
        rose: '#f43f5e',
        amber: '#f59e0b',
        emerald: '#10b981'
      };
      return colors[preset.name] || colors.violet;
    };
    
    let time = 0;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      time += 0.001;
      const accentColor = getAccentColor();
      
      // Draw gradient orbs
      const drawOrb = (x, y, radius, opacity) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `${accentColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${accentColor}${Math.floor(opacity * 0.3 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${accentColor}00`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      };
      
      // Animated orbs
      const orb1X = width * (0.2 + Math.sin(time * 0.5) * 0.1);
      const orb1Y = height * (0.3 + Math.cos(time * 0.3) * 0.1);
      drawOrb(orb1X, orb1Y, 300, 0.03);
      
      const orb2X = width * (0.8 + Math.cos(time * 0.4) * 0.1);
      const orb2Y = height * (0.6 + Math.sin(time * 0.6) * 0.1);
      drawOrb(orb2X, orb2Y, 250, 0.025);
      
      const orb3X = width * (0.5 + Math.sin(time * 0.7) * 0.15);
      const orb3Y = height * (0.8 + Math.cos(time * 0.5) * 0.1);
      drawOrb(orb3X, orb3Y, 200, 0.02);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx, '#94a3b8');
      });
      
      // Draw connections between close particles
      ctx.strokeStyle = '#94a3b820';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.globalAlpha = (1 - distance / 150) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      setCanvasSize();
      
      // Reset particles on resize
      const newParticleCount = Math.min(50, Math.floor((width * height) / 20000));
      if (newParticleCount !== particlesRef.current.length) {
        particlesRef.current = Array.from({ length: newParticleCount }, () => new Particle());
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [preset.name]);
  
  return (
    <>
      {/* Canvas for particles and orbs */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional decorative animated elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Floating Circles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`bg-circle-${i}`}
            className="absolute rounded-full border border-white/5"
            style={{
              width: 60 + Math.random() * 120,
              height: 60 + Math.random() * 120,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60 - Math.random() * 40, 0],
              x: [0, 30 - Math.random() * 60, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Dots */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`bg-dot-${i}`}
            className={cn("absolute h-1 w-1 rounded-full", preset.soft)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Diagonal Animated Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-line-${i}`}
            className={cn("absolute h-px w-full", preset.soft)}
            style={{
              top: `${15 + i * 15}%`,
              opacity: 0.05,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}

        {/* Pulsing Rings */}
        <div className="absolute top-1/3 right-1/4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`bg-ring-top-${i}`}
              className={cn("absolute rounded-full border", preset.border)}
              style={{
                width: 120 + i * 60,
                height: 120 + i * 60,
                left: -(60 + i * 30),
                top: -(60 + i * 30),
                opacity: 0.05,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-1/4 left-1/3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`bg-ring-bottom-${i}`}
              className={cn("absolute rounded-full border", preset.border)}
              style={{
                width: 100 + i * 50,
                height: 100 + i * 50,
                left: -(50 + i * 25),
                top: -(50 + i * 25),
                opacity: 0.05,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </>
  );
}
