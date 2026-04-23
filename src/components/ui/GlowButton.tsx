"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "red" | "ghost" | "green";

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
  primary:
    "bg-brand text-white border-brand hover:bg-brand-light hover:border-brand-light hover:shadow-[0_0_32px_rgba(74,159,245,0.6)]",
  secondary:
    "bg-brand-light text-white border-brand-light hover:shadow-[0_0_32px_rgba(96,181,255,0.6)]",
  red:  "bg-neon-red text-white border-neon-red hover:shadow-[0_0_30px_rgba(255,59,59,0.6)]",
  ghost:
    "bg-transparent text-white border-white/25 hover:border-brand hover:text-brand hover:shadow-[0_0_20px_rgba(74,159,245,0.2)]",
  green:
    "bg-[#25D366] text-white border-[#25D366] hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  size = "md",
  target,
  rel,
}: GlowButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-bold tracking-wide transition-all duration-300 cursor-pointer select-none",
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
