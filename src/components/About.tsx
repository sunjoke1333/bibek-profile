"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Camera, TrendingUp } from "lucide-react";

export function About() {
  const experiences = [
    {
      year: "2020 - Present",
      role: "Manager",
      company: "Orange Fair Deal",
      desc: "Optimizing supply chain operations and managing a multi-disciplinary team. Successfully implemented a new inventory management system that reduced operational overhead by 18%."
    },
    {
      year: "2020",
      role: "Area Sales Manager",
      company: "Tech Advantage (Ncell Project)",
      desc: "Orchestrated the deployment of corporate SIM solutions across the Kathmandu valley. Led a team of 10+ field agents to capture key institutional accounts, exceeding quarterly targets by 120%."
    },
    {
      year: "2016 - 2020",
      role: "Samsung Experience Consultant",
      company: "Samsung",
      desc: "Specialized in high-end consumer technology ecosystem consulting. Consistently recognized for top-tier customer satisfaction and technical product demonstration excellence."
    },
    {
      year: "2015 - 2016",
      role: "Networking & IP System Intern",
      company: "Nepal Telecom",
      desc: "Contributed to the maintenance of core IP infrastructure. Gained deep hands-on experience in router configuration, network security protocols, and system troubleshooting."
    }
  ];

  return (
    <section id="about" className="py-32 px-4 w-full max-w-7xl mx-auto space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="space-y-4">
             <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">The Story</h4>
             <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground">
               Engineering <span className="text-primary italic">Success</span> in Every Pixel.
             </h2>
          </div>
          
          <p className="text-xl text-foreground/60 leading-relaxed">
            I am Bibek Poudyal—a solution architect at the intersection of technical engineering and strategic leadership. My journey has taken me from the technical trenches of <span className="text-foreground font-bold">Nepal Telecom</span> to leading high-growth sales operations at <span className="text-foreground font-bold">Tech Advantage</span>.
          </p>

          <p className="text-xl text-foreground/60 leading-relaxed">
            Whether I'm architecting a resilient networking infrastructure or building high-conversion digital platforms, my focus is on <span className="text-primary italic">performance, scalability, and impact</span>. I don't just write code; I design systems that solve real-world problems.
          </p>

          <div className="pt-6">
            <p className="text-xl text-foreground/70 leading-relaxed font-medium italic border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-2xl">
              "Excellence is not an accident; it's the result of intentional engineering. This digital space is a testament to that philosophy—built with precision, by my own hands."
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
            <h4 className="text-foreground/40 font-bold uppercase tracking-widest text-xs border-b border-foreground/10 pb-4">Professional Milestones</h4>
            <div className="space-y-8">
               {experiences.map((exp, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   viewport={{ once: true }}
                   className="relative pl-8 border-l border-primary/20 hover:border-primary transition-colors group"
                 >
                   <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                   <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{exp.year}</span>
                   <h3 className="text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                   <p className="text-foreground/40 font-medium text-sm">{exp.company}</p>
                   <p className="text-foreground/60 mt-3 leading-relaxed">{exp.desc}</p>
                 </motion.div>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
}
