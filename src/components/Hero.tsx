"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowButton from "./ui/GlowButton";

const marqueeItems = [
  "FREE COLLECTION & DELIVERY",
  "3 FOR 2 DEAL",
  "R99 DEEP CLEAN",
  "CREASE GUARDS R99",
  "JOHANNESBURG",
  "RESTORATION EXPERTS",
  "FREE COLLECTION & DELIVERY",
  "3 FOR 2 DEAL",
  "R99 DEEP CLEAN",
  "CREASE GUARDS R99",
  "JOHANNESBURG",
  "RESTORATION EXPERTS",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const lineVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg-primary">
      {/* Background radial glows — blue tones */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-brand/6 blur-[140px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-light/5 blur-[100px] translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-brand/4 blur-[80px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,159,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,159,245,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="z-10">
            {/* Badge */}
            <motion.div variants={lineVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand/30 text-brand text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Johannesburg's #1 Sneaker Studio
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1 variants={lineVariants} className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                From
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1 variants={lineVariants} className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                Beaters
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={lineVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-glow-green"
              >
                to Heat 🔥
              </motion.h1>
            </div>

            <motion.p variants={lineVariants} className="text-smoke text-lg leading-relaxed max-w-md mb-8">
              Premium sneaker cleaning &amp; restoration. We bring your kicks back to life — with free collection and delivery across Johannesburg.
            </motion.p>

            <motion.div variants={lineVariants} className="flex flex-col sm:flex-row gap-4">
              <GlowButton href="#booking" size="lg">Book Now</GlowButton>
              <GlowButton href="#gallery" variant="ghost" size="lg">View Transformations</GlowButton>
            </motion.div>

            {/* Stats */}
            <motion.div variants={lineVariants} className="flex gap-8 mt-10 pt-8 border-t border-white/8">
              {[
                { value: "500+", label: "Pairs Restored" },
                { value: "R99",  label: "Deep Clean" },
                { value: "FREE", label: "Collection & Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-brand">{stat.value}</div>
                  <div className="text-xs text-smoke uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sneaker image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute w-80 h-80 rounded-full bg-brand/10 blur-[80px]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
              style={{ animation: "float 3.2s ease-in-out infinite" }}
              className="relative z-10 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]"
            >
              <Image
                src="/images/sneaker-jordan-bred.png"
                alt="Sneaker Care Department — Jordan 1 Bred Toe"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating info badges */}
            <motion.div
              className="absolute top-8 left-4 glass rounded-xl px-4 py-3 border border-brand/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <div className="text-xs text-smoke">Current Deal</div>
              <div className="text-sm font-bold text-brand">3 For 2 🔥</div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-4 glass rounded-xl px-4 py-3 border border-brand/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-xs text-smoke">Deep Clean</div>
              <div className="text-sm font-bold text-white">From R99</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative w-full border-y border-brand/20 bg-brand/5 overflow-hidden py-3">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 text-sm font-bold tracking-widest text-brand uppercase">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
