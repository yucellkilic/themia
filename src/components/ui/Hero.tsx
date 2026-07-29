"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { BRAND } from "@/lib/constants";
import { ArrowRight, Compass } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* LIGHT WARM AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-[#C85A32]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#D4AF37]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10">
        {/* LEFT COLUMN: MASSIVE TYPOGRAPHY & EDITORIAL CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 sm:space-y-10"
        >

          {/* MASSIVE BOLD HEADLINE */}
          <h1 className="font-serif text-4xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-extrabold tracking-tight text-[#1A1615] leading-[1.05] sm:leading-[1.02]">
            Kadim Şehirde <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1615] via-[#C85A32] to-[#8C3416]">
              Lüks Yaşam Ritmi.
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-xl md:text-2xl text-stone-700 font-light leading-relaxed max-w-2xl">
            The Mia Store & Cafe; Şanlıurfa’nın zengin kültürünü modern İtalyan kahve disiplini, mimari incelik ve gurme fırın seçkisiyle buluşturan rafine bir sosyal kaçış noktası.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
            <MagneticButton onClick={onOpenModal}>
              <div className="relative group overflow-hidden px-7 sm:px-9 py-4 sm:py-5 rounded-full bg-[#1A1615] hover:bg-[#C85A32] text-white text-xs uppercase font-extrabold tracking-widest shadow-xl transition-all duration-300 flex items-center gap-3 min-h-[48px]">
                <span>Mağazayı Keşfet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" aria-hidden="true" />
              </div>
            </MagneticButton>

            <a
              href="#hikaye"
              className="px-7 sm:px-8 py-4 sm:py-5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-xs uppercase font-bold tracking-widest text-[#1A1615] transition-all flex items-center gap-2.5 shadow-sm min-h-[48px]"
            >
              <Compass className="w-4 h-4 text-[#C85A32]" aria-hidden="true" />
              <span>Marka Deneyimi</span>
            </a>
          </div>

          {/* KEY PILLARS METRICS */}
          <div className="pt-8 sm:pt-10 border-t border-stone-200/80 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
            <div>
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#C85A32]">100%</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-stone-500 mt-1 block">Nitelikli Arabica</span>
            </div>
            <div>
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#1A1615]">450 m²</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-stone-500 mt-1 block">Özel İç Mimari</span>
            </div>
            <div>
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">Gurme</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-stone-500 mt-1 block">Artisanal Bakery</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CLEAN HIGH-IMPACT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          {/* MAIN HERO IMAGE CONTAINER — 4:3 ratio, clean */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-400/40 border border-white p-2.5 sm:p-3 bg-white">
            {/* 4:3 aspect ratio wrapper */}
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <Image
                src="/hero.jpg"
                alt="The Mia Home & Living Şanlıurfa Mağazası Dış Cephesi"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                className="object-cover rounded-[1.5rem] sm:rounded-[2rem] transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
