import React from "react";
import { cn } from "@/lib/utils";
import { useAccent } from "@/context/AccentContext";

const baseStyles =
  "relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:opacity-60 disabled:pointer-events-none";

export const Button = React.forwardRef(
  ({ className, variant = "primary", asChild = false, children, ...props }, ref) => {
    const { preset } = useAccent();
    const Comp = asChild ? "span" : "button";

    if (variant === "ghost") {
      return (
        <Comp
          ref={ref}
          className={cn(
            baseStyles,
            "bg-white/0 border border-white/5 hover:bg-white/5 text-slate-200",
            className
          )}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    if (variant === "outline") {
      return (
        <Comp
          ref={ref}
          className={cn(
            baseStyles,
            "bg-white/0 border border-slate-700 hover:border-slate-500 text-slate-100",
            className
          )}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    // primary
    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          "bg-gradient-to-tr text-slate-900 shadow-glow",
          preset.pill,
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Comp>
    );
  }
);
Button.displayName = "Button";
