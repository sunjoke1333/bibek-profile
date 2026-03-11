"use client";

import { motion } from "framer-motion";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Camera, 
  Code2, 
  TrendingUp, 
  Smartphone,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const BentoTile = ({ 
  className, 
  title, 
  description, 
  icon, 
  link = "#",
  accentColor = "#D8BFD8",
  delay = 0 
}: { 
  className?: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link?: string;
  accentColor?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className={cn("group relative overflow-hidden rounded-3xl border border-[#f5f5f7]/10 bg-[#1c1c1e] transition-all hover:border-[#f5f5f7]/20 hover:bg-[#2c2c2e]", className)}
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full p-8 relative z-10">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="p-3 w-fit rounded-2xl bg-[#0a0a0a] text-[#f5f5f7] border border-[#f5f5f7]/5 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#f5f5f7] flex items-center gap-2">
              {title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
            </h3>
            <p className="text-[#f5f5f7]/50 mt-1 leading-snug">{description}</p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f5f5f7]/30 group-hover:text-[#f5f5f7]/60 transition-colors">
          View Details
        </div>
      </div>
    </a>
    <div 
      className="absolute bottom-[-20%] right-[-10%] w-40 h-40 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"
      style={{ backgroundColor: accentColor }}
    />
  </motion.div>
);

export function BentoGrid() {
  return (
    <section id="bento" className="py-32 px-4 w-full max-w-7xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f5f5f7]">
          Digital Identity.
        </h2>
        <p className="text-xl text-[#f5f5f7]/40 max-w-xl">
          Blending professional expertise with creative passion in a unified space.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        {/* Large Tile - Photography */}
        <BentoTile 
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1c1c1e] to-[#0a0a0a]"
          title="Sunlit Shots"
          description="A curated collection of real moments and landscape photography captured through my lens."
          icon={<Camera className="w-8 h-8" />}
          link="https://www.instagram.com/thuldaji"
          accentColor="#FFB6C1"
          delay={0.1}
        />
        
        {/* Web Development */}
        <BentoTile 
          className="md:col-span-2"
          title="Web Engineering"
          description="Crafting high-performance web experiences with Next.js, React, and an eye for design."
          icon={<Code2 className="w-6 h-6" />}
          accentColor="#D8BFD8"
          delay={0.2}
        />

        {/* Sales Supervisor */}
        <BentoTile 
          title="Strategy"
          description="Area Sales Supervisor at Tech Advantage."
          icon={<TrendingUp className="w-6 h-6" />}
          accentColor="#98FB98"
          delay={0.3}
        />

        {/* LinkedIn */}
        <BentoTile 
          title="LinkedIn"
          description="Professional network & career updates."
          icon={<Linkedin className="w-6 h-6" />}
          link="https://www.linkedin.com/in/thuldaji/"
          accentColor="#0077b5"
          delay={0.4}
        />

        {/* TikTok */}
        <BentoTile 
          title="TikTok"
          description="I don't post often. But when I do, it's real."
          icon={<Smartphone className="w-6 h-6" />}
          link="https://www.tiktok.com/@thuldaji"
          accentColor="#00f2ea"
          delay={0.5}
        />

        {/* Facebook */}
        <BentoTile 
          title="Facebook"
          description="Connecting with community & friends."
          icon={<MessageCircle className="w-6 h-6" />}
          link="https://www.facebook.com/thuldaji"
          accentColor="#1877f2"
          delay={0.6}
        />

        {/* Instagram/Threads */}
        <BentoTile 
          title="Gram"
          description="Daily snaps & stories. #sunjoke_photography"
          icon={<Instagram className="w-6 h-6" />}
          link="https://www.instagram.com/thuldaji"
          accentColor="#E1306C"
          delay={0.7}
        />

        {/* Linktree / Social Hub */}
        <BentoTile 
          className="md:col-span-2"
          title="Thuldaji Hub"
          description="Centralized access to all my digital spaces and creative projects."
          icon={<ExternalLink className="w-6 h-6" />}
          link="https://linktr.ee/thuldaji"
          accentColor="#43e660"
          delay={0.8}
        />

        {/* WhatsApp/Contact */}
        <BentoTile 
          title="Contact"
          description="Let's build something together."
          icon={<MessageCircle className="w-6 h-6" />}
          link="#contact"
          accentColor="#25D366"
          delay={0.7}
        />
      </div>
    </section>
  );
}
