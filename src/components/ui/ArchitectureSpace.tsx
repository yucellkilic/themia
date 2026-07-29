"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function ArchitectureSpace() {
  const spaces = [
    {
      title: "VIP Lounge & Görüşme Salonu",
      desc: "İş ortaklıklarınız ve özel toplantılarınız için ses yalıtımlı, konforlu oturma düzeni.",
      size: "80 m²"
    },
    {
      title: "Peyzajlı Açık Hava Terası",
      desc: "Şanlıurfa akşamlarının esintisini yaşatan su ögeleri ve yeşil bitki duvarları.",
      size: "150 m²"
    },
    {
      title: "Artisan Barista & Demleme Barı",
      desc: "Mermer kaplama uzun tezgahta kahvenizin hazırlanışını canlı izleme imkanı.",
      size: "45 m²"
    }
  ];

  return (
    <section id="mekan" className="relative py-24 sm:py-36 md:py-48 bg-[#F4F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
            İç Mimari & Estetik
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
            Mekansal Ayrıcalık: <span className="text-[#C85A32]">450 m² Lüks Yaşam</span>
          </h2>
          <p className="text-base sm:text-xl text-stone-600 font-light leading-relaxed">
            The Mia'nın mimarisi; brüt beton, mermer, ahşap ve sıcak aydınlatmanın dengeli uyumuyla şekillendi.
          </p>
        </div>

        {/* SPACES & IMAGE SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* CARDS */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {spaces.map((space, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg shadow-stone-200/40 hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#C85A32]" aria-hidden="true" />
                  <span className="px-3 sm:px-3.5 py-1 rounded-full bg-stone-100 text-xs font-extrabold text-[#1A1615]">
                    {space.size}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615]">{space.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-light">
                  {space.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-300/60 border border-white p-2.5 sm:p-3 bg-white"
          >
            <div className="h-[380px] sm:h-[480px] md:h-[580px] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                alt="The Mia Interior Space Architecture and Lounge"
                width={1000}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
