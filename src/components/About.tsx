"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Globe, Layout, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    { icon: <Layout className="w-5 h-5" />, name: "Frontend Development", desc: "React, Next.js, Vue" },
    { icon: <Code2 className="w-5 h-5" />, name: "Backend Architecture", desc: "Node.js, Python, Go" },
    { icon: <Smartphone className="w-5 h-5" />, name: "Responsive Design", desc: "Tailwind CSS, SCSS" },
    { icon: <Globe className="w-5 h-5" />, name: "Cloud & Devops", desc: "AWS, Vercel, Docker" },
  ];

  return (
    <section id="about" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a computer engineering professional with over 14 years of experience as a freelance Computer Sub Engineer. My journey blends technical expertise in networking and IP systems with a strong background in sales strategy and supervision.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently, I serve as an Area Sales Supervisor at Tech Advantage (Ncell project), where I leverage my Diploma in Computer Engineering from Oxford Advanced Engineering College to bridge the gap between technical infrastructure and business growth.
          </p>
          
          <div className="pt-4">
            <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
              View My Resume <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skills.map((skill, index) => (
            <Card key={index} className="bg-secondary/20 border-secondary/50 hover:bg-secondary/40 transition-colors">
              <CardContent className="p-6 space-y-3">
                <div className="p-3 bg-primary/10 w-fit rounded-lg text-primary">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
