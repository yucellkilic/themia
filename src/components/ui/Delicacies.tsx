"use client";

import { motion } from "framer-motion";
import { MENU_HIGHLIGHTS } from "@/lib/constants";
import Image from "next/image";

export function Delicacies() {
  return (
    <section id="lezzetler" className="relative py-24 sm:py-36 md:py-48 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-stone-200/80 pb-8 sm:pb-12">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
              Fırın &amp; Patisserie Reçeteleri
            </span>
            <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
              Gurme <span className="text-[#C85A32]">Lezzet Seçkisi</span>
            </h2>
          </div>
          <p className="text-sm sm:text-lg text-stone-600 max-w-md font-light leading-relaxed">
            Tüm tatlı ve fırın ürünlerimiz, günlük taze hammaddeler ve Fransız tereyağı kullanılarak şeflerimizin özel reçeteleriyle hazırlanır.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {MENU_HIGHLIGHTS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-stone-200/80 overflow-hidden shadow-xl shadow-stone-200/50 hover:border-[#C85A32]/50 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <span className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-[10px] sm:text-[11px] uppercase font-bold text-[#1A1615] shadow-sm z-10">
                  {item.badge}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 sm:p-7 space-y-3.5 sm:space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#C85A32] font-extrabold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1615] group-hover:text-[#C85A32] transition-colors mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-stone-100 flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 sm:px-3 py-1 rounded-md bg-stone-100 text-[10px] sm:text-[11px] font-semibold text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
