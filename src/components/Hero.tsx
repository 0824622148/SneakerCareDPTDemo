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
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg-primary">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[120px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-neon-blue/5 blur-[100px] translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-neon-green/3 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* Badge */}
            <motion.div variants={lineVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-green/30 text-neon-green text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Johannesburg's #1 Sneaker Studio
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={lineVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter"
              >
                From
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={lineVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter"
              >
                Beaters
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={lineVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-glow-green"
              >
                to Heat 🔥
              </motion.h1>
            </div>

            <motion.p
              variants={lineVariants}
              className="text-text-muted text-lg leading-relaxed max-w-md mb-8"
            >
              Premium sneaker cleaning & restoration. We bring your kicks back to life — with free collection and delivery across Johannesburg.
            </motion.p>

            <motion.div variants={lineVariants} className="flex flex-col sm:flex-row gap-4">
              <GlowButton href="#booking" size="lg">
                Book Now
              </GlowButton>
              <GlowButton href="#gallery" variant="ghost" size="lg">
                View Transformations
              </GlowButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={lineVariants}
              className="flex gap-8 mt-10 pt-8 border-t border-white/8"
            >
              {[
                { value: "500+", label: "Pairs Restored" },
                { value: "R99", label: "Deep Clean" },
                { value: "FREE", label: "Collection & Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-neon-green">{stat.value}</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sneaker image side */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow orb behind sneaker */}
            <div className="absolute w-80 h-80 rounded-full bg-neon-green/10 blur-[80px]" />

            {/* Floating sneaker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ animation: "float 3s ease-in-out infinite" }}
              className="relative z-10 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]"
            >
              <Image
                src="/images/sneaker-jordan-bred.png"
                alt="Jordan 1 Bred Toe — Sneaker Care Department"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating badge cards */}
            <motion.div
              className="absolute top-8 left-4 glass rounded-xl px-4 py-3 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <div className="text-xs text-text-muted">Current Deal</div>
              <div className="text-sm font-bold text-neon-green">3 For 2 🔥</div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-4 glass rounded-xl px-4 py-3 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-xs text-text-muted">Deep Clean</div>
              <div className="text-sm font-bold text-white">From R99</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative w-full border-y border-neon-green/20 bg-neon-green/5 overflow-hidden py-3">
        <div
          className="flex whitespace-nowrap gap-0"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 text-sm font-semibold tracking-widest text-neon-green uppercase">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
