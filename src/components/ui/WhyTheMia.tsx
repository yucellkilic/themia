"use client";

import { motion } from "framer-motion";
import { WHY_THE_MIA } from "@/lib/constants";

export function WhyTheMia() {
  return (
    <section id="neden-mia" className="relative py-24 sm:py-36 md:py-48 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
            Marka Değerleri
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
            Neden <span className="text-[#C85A32]">The Mia Şanlıurfa?</span>
          </h2>
          <p className="text-base sm:text-xl text-stone-600 font-light leading-relaxed">
            Bizi Şanlıurfa'daki diğer mekanlardan ayıran temel 4 ayrıcalık.
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_THE_MIA.map((pillar, idx) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl shadow-stone-200/50 hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#C85A32] block mb-3 sm:mb-4">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615]">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 sm:mt-3 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
