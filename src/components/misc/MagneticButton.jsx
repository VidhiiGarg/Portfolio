import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.2 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      className="magnetic-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="magnetic-inner inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
}
