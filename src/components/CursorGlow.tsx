"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <div 
      className="fixed inset-0 z-[0] pointer-events-none transition-opacity duration-300 mix-blend-screen"
      style={{
        opacity: isVisible ? 0.4 : 0,
        background: `radial-gradient(1000px at ${mousePos.x}px ${mousePos.y}px, oklch(0.7 0.2 260 / 12%), transparent 80%)`
      }}
    />
  );
}
