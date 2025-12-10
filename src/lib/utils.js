export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export const accentPresets = {
  cyan: {
    name: "Cyan",
    pill: "from-cyan-500/80 to-sky-500/60",
    glow: "shadow-[0_0_40px_rgba(56,189,248,0.65)]",
    border: "border-cyan-500/60",
    text: "text-cyan-400",
    soft: "bg-cyan-500/10",
    ring: "ring-cyan-500/70"
  },
  violet: {
    name: "Violet",
    pill: "from-violet-500/80 to-fuchsia-500/60",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.65)]",
    border: "border-violet-500/60",
    text: "text-violet-400",
    soft: "bg-violet-500/10",
    ring: "ring-violet-500/70"
  },
  emerald: {
    name: "Emerald",
    pill: "from-emerald-500/80 to-teal-500/60",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.65)]",
    border: "border-emerald-500/60",
    text: "text-emerald-400",
    soft: "bg-emerald-500/10",
    ring: "ring-emerald-500/70"
  },
  rose: {
    name: "Rose",
    pill: "from-rose-500/80 to-orange-500/60",
    glow: "shadow-[0_0_40px_rgba(244,63,94,0.65)]",
    border: "border-rose-500/60",
    text: "text-rose-400",
    soft: "bg-rose-500/10",
    ring: "ring-rose-500/70"
  }
};
