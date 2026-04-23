"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import GlowButton from "./ui/GlowButton";
import { WHATSAPP_BASE } from "@/lib/utils";

const navLinks = [
  { label: "Specials", href: "#specials" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#booking" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1A1D29]/80 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand/30 group-hover:ring-brand/60 transition-all">
                <Image
                  src="/images/logo.png"
                  alt="Sneaker Care Department"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-black text-base tracking-tight leading-tight">
                Sneaker<span className="text-brand"> Care</span>
                <br />
                <span className="text-xs font-normal text-smoke tracking-widest uppercase">Department</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-smoke hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <GlowButton href="#booking" size="sm">
                Book Now
              </GlowButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 h-full w-72 bg-bg-secondary border-l border-white/8 flex flex-col p-8 pt-20 gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              {/* Logo in drawer */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand/30">
                  <Image src="/images/logo.png" alt="SCD" width={40} height={40} className="object-cover" />
                </div>
                <span className="font-black text-sm tracking-tight">
                  Sneaker<span className="text-brand"> Care</span>
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl font-bold text-white hover:text-brand transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4">
                <GlowButton href="#booking" className="w-full" onClick={() => setOpen(false)}>
                  Book Now
                </GlowButton>
              </div>
              <a
                href={`${WHATSAPP_BASE}?text=Hi!%20I'd%20like%20to%20book%20a%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-smoke hover:text-white mt-2"
              >
                <span className="text-lg">💬</span> Chat on WhatsApp
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
