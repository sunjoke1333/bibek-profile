"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-black tracking-tighter text-foreground group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        BP<span className="text-primary group-hover:animate-pulse">.</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-all hover:tracking-[0.3em]"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-foreground/60 hover:text-primary transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-12"
          >
             <button 
              className="absolute top-8 right-8 text-foreground/40 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-black tracking-tighter text-foreground/40 hover:text-primary transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
