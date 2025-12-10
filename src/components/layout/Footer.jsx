import React from "react";
import { SOCIALS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-black/60">
      <div className="section-container py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Sumit Thakur. Crafted with React, R3F & a bit of obsession.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 hover:border-slate-500 hover:text-slate-50"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
