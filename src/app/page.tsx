import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <Projects />
      <Contact />
      
      <footer className="w-full border-t border-border/20 py-12 text-center text-foreground/40 mt-20">
        <p className="text-sm font-medium tracking-tight">
          © {new Date().getFullYear()} Bibek Poudyal. Engineered for Excellence, Designed for Life.
        </p>
      </footer>
    </main>
  );
}

