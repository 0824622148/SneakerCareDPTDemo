"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import SectionHeader from "./ui/SectionHeader";
import GlowButton from "./ui/GlowButton";
import { INSTAGRAM_URL } from "@/lib/utils";

const posts = [
  { src: "/images/sneaker-jordan-bred.png", likes: "1.2K", views: "8.4K" },
  { src: "/images/promo-3for2.png", likes: "943", views: "6.1K" },
  { src: "/images/promo-r99.png", likes: "2.1K", views: "12K" },
  { src: "/images/restoration-work.png", likes: "789", views: "5.3K" },
  { src: "/images/vault-cologne.png", likes: "1.5K", views: "9.7K" },
  { src: "/images/vault-jordan4.png", likes: "2.8K", views: "18K" },
];

export default function InstagramFeed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instagram" className="relative py-24 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeader
            tag="📱 Instagram"
            title="See The Work"
            subtitle="Feel the culture. Follow us for daily drops, transformations and deals."
            tagColor="blue"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="relative aspect-square rounded-xl overflow-hidden group block"
            >
              <Image
                src={post.src}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-1 text-white text-sm font-semibold">
                  <Heart size={16} className="fill-white" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1 text-white text-sm font-semibold">
                  <Eye size={16} />
                  {post.views}
                </div>
              </div>

              {/* Instagram icon corner */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5">
                  <InstagramIcon size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
          >
            <InstagramIcon size={18} />
            Follow @weluvsneakercare
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
