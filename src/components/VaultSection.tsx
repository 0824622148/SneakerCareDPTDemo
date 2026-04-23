"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import GlowButton from "./ui/GlowButton";
import { buildWhatsAppURL } from "@/lib/utils";

export default function VaultSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden bg-bg-secondary">
      {/* Blue glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand/6 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block border-2 border-white px-6 py-2 mb-6">
              <span className="text-3xl font-black tracking-widest">VAULT</span>
            </div>
            <p className="text-smoke text-sm uppercase tracking-widest mb-4">Minimal Size. Maximum Impression.</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Smell Like{" "}
              <span className="text-glow-green">Fresh Heat</span>
            </h2>
            <p className="text-smoke text-lg leading-relaxed mb-8 max-w-md">
              Introducing VAULT Sneaker Cologne — the finishing touch to every fresh pair. Asphalt Edge: bold, urban, unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GlowButton
                href={buildWhatsAppURL("Hi! I'd like to order a VAULT Sneaker Cologne.")}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Get VAULT Cologne
              </GlowButton>
              <GlowButton href="#booking" variant="ghost" size="lg">Add to Booking</GlowButton>
            </div>
          </motion.div>

          {/* Product images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-brand/8 blur-[60px]" />
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <Image src="/images/vault-cologne.png" alt="VAULT Sneaker Cologne" fill className="object-contain drop-shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 -left-4 w-28 h-28 rounded-xl overflow-hidden border-2 border-brand/30 shadow-[0_0_20px_rgba(74,159,245,0.2)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Image src="/images/vault-jordan4.png" alt="VAULT with Jordan 4" fill className="object-cover" />
            </motion.div>

            <motion.div
              className="absolute top-4 right-0 bg-bg-card rounded-xl px-4 py-3 border border-brand/30"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="text-xs text-smoke">New Product</div>
              <div className="text-sm font-bold text-brand">Asphalt Edge</div>
              <div className="text-xs text-smoke">25ml / 8.5 fl.oz</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
