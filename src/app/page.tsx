import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0a0a0a]">
      <Hero />
      <BentoGrid />
      <Projects />
      <Contact />
      
      <footer className="w-full border-t border-[#f5f5f7]/10 py-12 text-center text-[#f5f5f7]/30 bg-[#0a0a0a]">
        <p className="text-sm font-medium tracking-tight">© {new Date().getFullYear()} Bibek Poudyal. Designed with Soul.</p>
      </footer>
    </main>
  );
}

