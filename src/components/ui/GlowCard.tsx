"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "brand" | "red" | "none";
  onClick?: () => void;
}

const glowMap = {
  brand: "hover:shadow-[0_0_40px_rgba(74,159,245,0.15)] hover:border-brand/30",
  red:   "hover:shadow-[0_0_40px_rgba(255,59,59,0.15)]  hover:border-neon-red/30",
  none:  "",
};

export default function GlowCard({
  children,
  className,
  glowColor = "brand",
  onClick,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-bg-card rounded-2xl border border-white/8 transition-all duration-300",
        glowMap[glowColor],
        onClick && "cursor-pointer",
        className
      )}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
