"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/utils";

export default function WhatsAppFAB() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-black text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap"
          >
            Chat on WhatsApp 💬
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={buildWhatsAppURL("Hi! I'd like to book a sneaker cleaning or restoration service.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setTooltipVisible(true)}
        onHoverEnd={() => setTooltipVisible(false)}
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={26} className="relative z-10" />
      </motion.a>
    </div>
  );
}
