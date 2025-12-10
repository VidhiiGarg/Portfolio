import React from "react";
import { cn } from "@/lib/utils";

export function ShimmerCard({ className, children }) {
  return (
    <div
      className={cn(
        "shimmer glass relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-black/20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
