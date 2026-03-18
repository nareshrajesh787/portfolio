"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const directionOffset = {
    up: 20,
    down: -20,
    left: 20,
    right: -20,
    none: 0,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
        x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
