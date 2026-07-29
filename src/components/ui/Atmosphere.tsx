"use client";

import { motion } from "framer-motion";
import { ATMOSPHERE_FEATURES } from "@/lib/constants";
import { Sun, VolumeX, Shield, Trees } from "lucide-react";

export function Atmosphere() {
  const getIcon = (id: string) => {
    switch (id) {
      case "01": return <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[#C85A32]" aria-hidden="true" />;
      case "02": return <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" aria-hidden="true" />;
      case "03": return <Trees className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" aria-hidden="true" />;
      default: return <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-[#C85A32]" aria-hidden="true" />;
    }
  };

  return (
    <section id="atmosfer" className="relative py-24 sm:py-36 md:py-48 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
            Duyusal Deneyim
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
            Mekanın Ruhu: <span className="text-[#C85A32]">Atmosfer & Mimari</span>
          </h2>
          <p className="text-base sm:text-xl text-stone-600 font-light leading-relaxed">
            The Mia'da atılan her adım, ses yalıtımından ışık açısına kadar duyularınıza huzur ve konfor vermek üzere planlandı.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {ATMOSPHERE_FEATURES.map((feature, idx) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl shadow-stone-200/50 hover:border-[#C85A32]/50 hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-300 group-hover:text-[#C85A32] transition-colors">
                  {feature.id}
                </span>
                <div className="p-3 sm:p-4 rounded-2xl bg-stone-50 border border-stone-200/60 group-hover:bg-[#C85A32]/10 transition-colors">
                  {getIcon(feature.id)}
                </div>
              </div>

              <span className="inline-block px-3.5 py-1.5 rounded-full bg-stone-100 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#C85A32] mb-3 sm:mb-4">
                {feature.tag}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615] group-hover:text-[#C85A32] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-base text-stone-600 mt-3 sm:mt-4 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
