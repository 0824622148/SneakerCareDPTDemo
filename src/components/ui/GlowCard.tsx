"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "green" | "blue" | "red" | "none";
  onClick?: () => void;
}

const glowMap = {
  green: "hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] hover:border-neon-green/30",
  blue: "hover:shadow-[0_0_40px_rgba(0,194,255,0.15)] hover:border-neon-blue/30",
  red: "hover:shadow-[0_0_40px_rgba(255,59,59,0.15)] hover:border-neon-red/30",
  none: "",
};

export default function GlowCard({
  children,
  className,
  glowColor = "green",
  onClick,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl border border-white/8 transition-all duration-300",
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
