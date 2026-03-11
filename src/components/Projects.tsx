"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Visionary Commerce",
      subtitle: "The future of retail, delivered.",
      description: "A high-performance full-stack platform built with Next.js, Stripe, and a focus on sub-100ms interactions.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      github: "https://github.com/bibekpoudyal",
      demo: "#",
      image: "linear-gradient(135deg, #1c1c1e 0%, #0a0a0a 100%)",
      accent: "#f5f5f7"
    },
    {
      title: "Flow State",
      subtitle: "Management, simplified.",
      description: "A collaborative workspace with real-time sync and a minimalist interface inspired by digital zen.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/bibekpoudyal",
      demo: "#",
      image: "linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%)",
      accent: "#f5f5f7"
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 w-full max-w-7xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left space-y-4"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#f5f5f7]">
          Exceptional Work.
        </h2>
        <div className="w-24 h-1.5 bg-[#f5f5f7]/10 rounded-full" />
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[3rem] border border-[#f5f5f7]/10 bg-[#0a0a0a]"
          >
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
              style={{ background: project.image }}
            />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-24 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#f5f5f7]/40 uppercase tracking-[0.3em]">
                    Featured Project
                  </h4>
                  <h3 className="text-4xl md:text-6xl font-bold text-[#f5f5f7] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-2xl text-[#f5f5f7]/60 font-medium tracking-tight italic">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-xl text-[#f5f5f7]/40 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href={project.github} 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f5f5f7] text-[#0a0a0a] rounded-full font-bold hover:scale-[1.05] transition-transform active:scale-95"
                  >
                    View Project <ChevronRight className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.github} 
                    className="inline-flex items-center justify-center p-4 border border-[#f5f5f7]/20 rounded-full text-[#f5f5f7] hover:bg-[#f5f5f7]/5 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="hidden md:block relative h-[400px] w-full rounded-2xl overflow-hidden bg-[#1c1c1e] border border-[#f5f5f7]/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transform group-hover:-rotate-1 group-hover:scale-[1.02] transition-transform duration-1000">
                {/* Visual placeholder for project capture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f5f5f7]/5 to-[#f5f5f7]/10" />
                <div className="absolute bottom-8 left-8 right-8 h-1/2 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl border border-[#f5f5f7]/5 p-6 flex flex-col justify-end">
                   <div className="flex gap-2">
                     {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f7]/40 py-1 px-2 border border-[#f5f5f7]/10 rounded-md bg-[#0a0a0a]">
                          {tag}
                        </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
