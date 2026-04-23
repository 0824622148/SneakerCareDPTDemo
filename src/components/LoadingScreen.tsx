"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  const letters = ["S", "C", "D"];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo letters */}
          <div className="flex gap-3 mb-8">
            {letters.map((letter, i) => (
              <motion.span
                key={letter}
                className="text-7xl md:text-9xl font-bold text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              >
                {i === 1 ? (
                  <span className="text-neon-green" style={{ textShadow: "0 0 30px rgba(57,255,20,0.8)" }}>
                    {letter}
                  </span>
                ) : (
                  letter
                )}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="text-text-muted text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Sneaker Care Department
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-neon-green"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 12px rgba(57,255,20,0.8)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
