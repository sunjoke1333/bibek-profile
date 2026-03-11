"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden w-full bg-[#0a0a0a]">
      {/* Apple-style Gradient/Sunlit Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 bg-[radial-gradient(circle_at_center,_var(--accent-lilac)_0%,_transparent_70%)]" 
             style={{ '--accent-lilac': '#D8BFD8' } as any} />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h2 className="text-lg md:text-xl text-[#f5f5f7]/60 font-semibold tracking-[0.2em] uppercase">
            Product of Nepal
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-[-0.04em] leading-[1.1] text-[#f5f5f7]">
            Bibek Poudyal.
          </h1>
          <div className="flex items-center justify-center gap-3">
             <span className="text-2xl md:text-4xl font-medium text-[#f5f5f7]/80">(Thuldaji)</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-xl md:text-2xl text-[#f5f5f7]/50 max-w-2xl mx-auto leading-relaxed tracking-tight"
        >
          Sunlit shots. Real moments. Rare posts. <br/>
          Building high-performance web experiences with an Apple soul.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-10 opacity-40 hover:opacity-80 transition-opacity"
        onClick={() => {
          document.getElementById("bento")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold text-[#f5f5f7] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#f5f5f7]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
