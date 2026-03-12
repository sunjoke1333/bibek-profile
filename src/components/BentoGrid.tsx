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
  MessageCircle,
  Globe
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
    className={cn("group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-all hover:border-primary/20 hover:bg-card/80", className)}
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full p-8 relative z-10">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="p-3 w-fit rounded-2xl bg-background text-foreground border border-foreground/5 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              {title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
            </h3>
            <p className="text-foreground/50 mt-1 leading-snug">{description}</p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/30 group-hover:text-foreground/60 transition-colors">
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
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Digital Identity.
        </h2>
        <p className="text-xl text-foreground/40 max-w-xl">
          Blending professional expertise with creative passion in a unified space.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        {/* Management & Sales Tile */}
        <BentoTile 
          className="md:col-span-2"
          title="Sales & Operations"
          description="A track record of exceeding targets in high-stakes environments. Expert in team leadership, corporate sales, and market expansion strategy."
          icon={<TrendingUp className="w-6 h-6" />}
          accentColor="#98FB98"
          delay={0.1}
        />

        {/* Photography Portfolio */}
        <BentoTile 
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-background"
          title="Sunjoke Photography"
          description="Visual storytelling through the lens. Capturing the raw beauty of Nepal with a signature sunlit aesthetic."
          icon={<Camera className="w-8 h-8" />}
          link="https://www.instagram.com/thuldaji"
          accentColor="#FFB6C1"
          delay={0.2}
        />

        {/* Tech Tile */}
        <BentoTile 
          className="md:col-span-2"
          title="Network Infrastructure"
          description="Developing resilient IP systems since 2015. Deep expertise in enterprise-level networking and hardware-software integration."
          icon={<Code2 className="w-6 h-6" />}
          accentColor="#D8BFD8"
          delay={0.3}
        />

        {/* Social Links */}
        <BentoTile 
          title="LinkedIn"
          description="Professional network and career updates."
          icon={<ExternalLink className="w-6 h-6" />}
          link="https://www.linkedin.com/in/thuldaji"
          accentColor="#0077b5"
          delay={0.4}
        />

        <BentoTile 
          title="Facebook"
          description="Professional and personal updates from the community."
          icon={<Globe className="w-6 h-6" />}
          link="https://www.facebook.com/thuldaji"
          accentColor="#1877f2"
          delay={0.4}
        />


        {/* Linktree / Social Hub */}
        <BentoTile 
          className="md:col-span-2"
          title="Full Contact Hub"
          description="Direct access to my professional network, GitHub repositories, and visual portfolio."
          icon={<ExternalLink className="w-6 h-6" />}
          link="https://github.com/sunjoke1333/bibek-profile"
          accentColor="#43e660"
          delay={0.8}
        />

        {/* WhatsApp/Contact */}
        <BentoTile 
          title="Direct Contact"
          description="Available for high-impact collaborations and architectural consultations."
          icon={<MessageCircle className="w-6 h-6" />}
          link="#contact"
          accentColor="#25D366"
          delay={0.7}
        />
      </div>
    </section>
  );
}
