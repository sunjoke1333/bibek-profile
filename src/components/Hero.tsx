"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Vibrant Mesh Background */}
      <div className="absolute inset-0 z-0 vibrant-mesh opacity-30 blur-3xl animate-pulse" />
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-48 h-48 md:w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-[#4f46e5] to-[#ec4899] shadow-2xl overflow-hidden"
        >
          <img 
            src="/profile.png" 
            alt="Bibek Poudyal" 
            className="w-full h-full object-cover rounded-full border-4 border-background shadow-inner hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-lg md:text-xl text-primary font-bold tracking-[0.2em] uppercase">
            Operations Manager & Tech Visionary
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tighter leading-none text-foreground drop-shadow-sm">
            Bibek Poudyal.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
        >
          Sunlit moments. Strategic results. Bold innovation. <br/>
          Crafting high-impact digital experiences rooted in engineering.
        </motion.p>
      </div>

    </section>
  );
}
