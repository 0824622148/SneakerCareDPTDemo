"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <motion.div
            className="w-24 h-24 mb-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <Image
              src="/images/logo.png"
              alt="Sneaker Care Department"
              width={96}
              height={96}
              className="object-contain"
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-2xl font-black tracking-tight">
              Sneaker<span className="text-brand"> Care</span>
            </p>
            <p className="text-smoke text-xs tracking-[0.3em] uppercase mt-1">Department</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-brand"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 12px rgba(74,159,245,0.9)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
