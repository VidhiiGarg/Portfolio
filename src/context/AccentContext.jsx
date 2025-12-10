import React, { createContext, useContext, useState, useMemo } from "react";
import { accentPresets } from "@/lib/utils";

const AccentContext = createContext(null);

export function AccentProvider({ children }) {
  const [accent, setAccent] = useState("cyan");

  const value = useMemo(
    () => ({
      accent,
      setAccent,
      preset: accentPresets[accent] ?? accentPresets.cyan
    }),
    [accent]
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
}

export function useAccent() {
  const ctx = useContext(AccentContext);
  if (!ctx) {
    throw new Error("useAccent must be used within AccentProvider");
  }
  return ctx;
}
