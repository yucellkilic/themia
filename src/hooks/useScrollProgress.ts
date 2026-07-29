"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Section calculation based on progress
      if (progress < 0.12) setActiveSection("hero");
      else if (progress < 0.25) setActiveSection("hikaye");
      else if (progress < 0.40) setActiveSection("atmosfer");
      else if (progress < 0.55) setActiveSection("kahve");
      else if (progress < 0.70) setActiveSection("lezzetler");
      else if (progress < 0.82) setActiveSection("mekan");
      else if (progress < 0.92) setActiveSection("neden-mia");
      else setActiveSection("iletisim");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, activeSection };
}
