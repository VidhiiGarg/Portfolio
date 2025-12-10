import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import { useAccent } from "@/context/AccentContext";
import { AccentSwitcher } from "@/components/misc/AccentSwitcher";
import { cn } from "@/lib/utils";
import { Sparkles, ChevronRight, Menu, X, Circle } from "lucide-react";

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const { preset } = useAccent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* New Design: Floating Orb Concept */}
        <div
          className={cn(
            "relative mt-6 overflow-hidden rounded-3xl",
            scrolled ? "scale-95" : "scale-100",
            "transition-all duration-500"
          )}
        >
          {/* Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-950/40 to-black/50 backdrop-blur-3xl" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
          
          {/* Main Container */}
          <div className="relative flex items-center justify-between p-3">
            {/* Logo Section - Orb Design */}
            <button
              onClick={() => handleNavClick("hero")}
              onMouseEnter={() => setHoveredId("orb")}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative ml-2 flex items-center gap-3"
            >
              {/* Orb Container */}
              <div className="relative">
                {/* Outer Ring */}
                <div className="absolute -inset-4 animate-spin-slow rounded-full border border-slate-700/50 opacity-0 group-hover:opacity-100" />
                
                {/* Middle Ring */}
                <div className={cn(
                  "absolute -inset-2 rounded-full border opacity-20 transition-all duration-700",
                  preset.soft,
                  hoveredId === "orb" ? "scale-110 opacity-40" : ""
                )} />
                
                {/* Core Orb */}
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <div className={cn(
                    "absolute inset-0 rounded-full blur-xl transition-all duration-500",
                    preset.soft,
                    "opacity-30 group-hover:opacity-50"
                  )} />
                  <div className={cn(
                    "relative h-8 w-8 rounded-full",
                    preset.soft,
                    "transition-transform duration-500 group-hover:scale-110"
                  )}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <Sparkles className="absolute inset-0 m-auto h-4 w-4 text-white/70" />
                  </div>
                </div>
              </div>
              
              {/* Logo Text with Glitch Effect */}
              <div className="overflow-hidden">
                <div className="flex flex-col items-start transition-all duration-500 group-hover:translate-x-1">
                  <div className="relative">
                    <span className="text-lg font-bold tracking-tighter text-slate-100">
                      Sumit
                    </span>
                    <span className={cn(
                      "absolute -right-1 -top-1 text-xs font-bold",
                      preset.text
                    )}>
                      •
                    </span>
                  </div>
                  <span className="text-xs font-medium tracking-wider text-slate-400">
                    Digital Craft
                  </span>
                </div>
              </div>
            </button>

            {/* Navigation - Minimal Dots */}
            <nav className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative flex flex-col items-center"
                >
                  {/* Dot Navigation */}
                  <div className="relative mb-2">
                    {/* Hover Effect Ring */}
                    <div className={cn(
                      "absolute -inset-3 rounded-full transition-all duration-500",
                      preset.soft,
                      "opacity-0 group-hover:opacity-10"
                    )} />
                    
                    {/* Dot */}
                    <div className={cn(
                      "relative h-3 w-3 rounded-full transition-all duration-500",
                      activeId === item.id 
                        ? cn(preset.soft, "scale-125")
                        : "bg-slate-600 group-hover:bg-slate-500",
                      hoveredId === item.id && "scale-150"
                    )}>
                      {/* Glow Effect */}
                      {activeId === item.id && (
                        <div className={cn(
                          "absolute inset-0 rounded-full blur-md",
                          preset.soft,
                          "animate-pulse"
                        )} />
                      )}
                    </div>
                  </div>
                  
                  {/* Label - Appears on Hover */}
                  <div className="absolute -bottom-8">
                    <div className={cn(
                      "relative overflow-hidden rounded-lg px-3 py-1.5",
                      "bg-slate-900/90 backdrop-blur-sm",
                      "transition-all duration-300",
                      hoveredId === item.id 
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    )}>
                      <span className="text-xs font-medium text-slate-200">
                        {item.label}
                      </span>
                      {/* Pointer */}
                      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900/90" />
                    </div>
                  </div>
                </button>
              ))}
            </nav>

            {/* Right Section - Split Layout */}
            <div className="flex items-center gap-3">
              {/* Accent Line */}
              <div className={cn(
                "hidden h-8 w-px opacity-30 md:block",
                preset.soft
              )} />
              
              {/* CTA with Floating Effect */}
              <a
                href="mailto:contact@sumit.dev"
                className={cn(
                  "group relative hidden overflow-hidden rounded-full px-5 py-2.5 md:flex",
                  "items-center gap-2 text-sm font-medium",
                  "bg-gradient-to-r from-slate-900/50 to-black/50",
                  "border border-white/10",
                  "transition-all duration-500 hover:scale-[1.02]"
                )}
              >
                {/* Animated Background */}
                <div className={cn(
                  "absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-20",
                  preset.soft
                )} />
                
                {/* Text */}
                <span className="relative z-10 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Let's Connect
                </span>
                
                {/* Animated Arrow */}
                <ChevronRight className={cn(
                  "h-4 w-4 transition-all duration-300",
                  preset.text,
                  "group-hover:translate-x-1"
                )} />
                
                {/* Floating Dots */}
                <div className="absolute -right-1 -top-1 h-2 w-2">
                  <div className={cn(
                    "h-full w-full rounded-full",
                    preset.soft,
                    "animate-ping opacity-20"
                  )} />
                </div>
              </a>

              {/* Theme Switcher - Integrated */}
              <div className="hidden md:block">
                <AccentSwitcher />
              </div>

              {/* Mobile Menu Button - Futuristic */}
              <button
                className={cn(
                  "group relative flex h-12 w-12 items-center justify-center",
                  "rounded-2xl border border-white/10",
                  "bg-gradient-to-br from-slate-900/50 to-black/50",
                  "transition-all duration-500 md:hidden",
                  open ? "rotate-90" : ""
                )}
                onClick={() => setOpen((v) => !v)}
              >
                {/* Background Animation */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20",
                  preset.soft
                )} />
                
                {/* Icon */}
                {open ? (
                  <X className="h-5 w-5 text-slate-100" strokeWidth={2.5} />
                ) : (
                  <Menu className="h-5 w-5 text-slate-100" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Futuristic Slide-out */}
        {open && (
          <div className="animate-in slide-in-from-top-5 duration-300 mt-4">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Menu Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-3xl" />
              
              {/* Animated Orbs */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-10" style={{ background: preset.color }} />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-10" style={{ background: preset.color }} />
              
              <div className="relative p-6">
                {/* Menu Header */}
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">Navigation</h3>
                    <p className="text-sm text-slate-400">Explore my portfolio</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">Theme</span>
                    <AccentSwitcher />
                  </div>
                </div>
                
                {/* Menu Items - Circular Layout */}
                <div className="grid grid-cols-2 gap-3">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "group relative flex flex-col items-center justify-center",
                        "rounded-2xl p-5 transition-all duration-300",
                        "bg-gradient-to-br from-slate-900/50 to-black/50",
                        "border border-white/10",
                        activeId === item.id && "ring-1 ring-white/20"
                      )}
                    >
                      {/* Active Indicator */}
                      {activeId === item.id && (
                        <div className={cn(
                          "absolute -top-1 -right-1 h-3 w-3 rounded-full",
                          preset.soft,
                          "animate-pulse"
                        )} />
                      )}
                      
                      {/* Icon Placeholder */}
                      <div className={cn(
                        "mb-3 flex h-10 w-10 items-center justify-center rounded-full",
                        "transition-all duration-300",
                        activeId === item.id
                          ? cn(preset.soft, "scale-110")
                          : "bg-slate-800 group-hover:bg-slate-700"
                      )}>
                        <Circle className="h-4 w-4 text-slate-300" fill="currentColor" />
                      </div>
                      
                      {/* Label */}
                      <span className={cn(
                        "text-sm font-medium",
                        activeId === item.id ? "text-slate-100" : "text-slate-400"
                      )}>
                        {item.label}
                      </span>
                      
                      {/* Hover Effect */}
                      <div className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-10",
                        preset.soft
                      )} />
                    </button>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <a
                  href="mailto:contact@sumit.dev"
                  className={cn(
                    "mt-6 flex w-full items-center justify-center gap-3",
                    "rounded-2xl px-6 py-4 text-sm font-medium",
                    "bg-gradient-to-r from-slate-900 to-black",
                    "border border-white/10",
                    "transition-all duration-300 hover:scale-[1.02]"
                  )}
                >
                  <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                    Start a Conversation
                  </span>
                  <ChevronRight className={cn("h-4 w-4", preset.text)} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Add this to your global CSS for the slow spin animation
// @keyframes spin-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// .animate-spin-slow { animation: spin-slow 20s linear infinite; }