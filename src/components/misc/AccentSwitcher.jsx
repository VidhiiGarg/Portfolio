import React from "react";
import { useAccent } from "@/context/AccentContext";
import { accentPresets, cn } from "@/lib/utils";

export function AccentSwitcher() {
  const { accent, setAccent } = useAccent();

  return (
    <div className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/80 px-1 py-1 md:flex">
      {Object.entries(accentPresets).map(([key, value]) => (
        <button
          key={key}
          onClick={() => setAccent(key)}
          className={cn(
            "relative flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-slate-200 transition-all",
            accent === key ? "bg-slate-100 text-slate-900" : "hover:bg-slate-800"
          )}
        >
          <span
            className={cn(
              "absolute inset-[3px] rounded-full bg-gradient-to-tr opacity-70",
              value.pill
            )}
          />
          <span className="relative z-10 capitalize text-[9px] font-semibold">
            {key[0]}
          </span>
        </button>
      ))}
    </div>
  );
}
