import React from "react";

export function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-40" />
      <div className="absolute -left-40 top-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="absolute bottom-[-20%] left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
    </div>
  );
}
