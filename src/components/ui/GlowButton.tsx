"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "green" | "blue" | "red" | "ghost";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const variantStyles: Record<Variant, string> = {
  green:
    "bg-neon-green text-black border-neon-green hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:bg-white",
  blue: "bg-neon-blue text-black border-neon-blue hover:shadow-[0_0_30px_rgba(0,194,255,0.6)] hover:bg-white",
  red: "bg-neon-red text-white border-neon-red hover:shadow-[0_0_30px_rgba(255,59,59,0.6)]",
  ghost:
    "bg-transparent text-white border-white/30 hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function GlowButton({
  children,
  variant = "green",
  href,
  onClick,
  className,
  size = "md",
  target,
  rel,
}: GlowButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
