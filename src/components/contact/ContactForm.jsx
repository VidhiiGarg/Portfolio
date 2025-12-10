import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  return (
    <form
      className="glass grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 md:grid-cols-2 md:gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-3 md:col-span-1">
        <div>
          <label className="text-xs font-medium text-slate-300">Name</label>
          <input
            className={cn(
              "mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500",
              "focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/70"
            )}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-300">Email</label>
          <input
            type="email"
            className={cn(
              "mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500",
              "focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/70"
            )}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-300">
            Project Type
          </label>
          <select
            className={cn(
              "mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none",
              "focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/70"
            )}
          >
            <option>End-to-end product</option>
            <option>Frontend only</option>
            <option>Backend / APIs</option>
            <option>3D interface & visuals</option>
            <option>AI/ML integration</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 md:col-span-1">
        <div className="h-full">
          <label className="text-xs font-medium text-slate-300">Message</label>
          <textarea
            rows={6}
            className={cn(
              "mt-1 h-[140px] w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500",
              "focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/70"
            )}
            placeholder="Tell me a bit about your idea, timeline, and budget."
            required
          />
        </div>
        <Button className="group mt-1 w-full justify-center text-sm">
          <span className="mr-1.5">Send message</span>
          <span className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </Button>
      </div>
    </form>
  );
}
