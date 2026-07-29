"use client";

import { motion } from "framer-motion";
import { Coffee, Feather } from "lucide-react";

export function BrandStory() {
  return (
    <section id="hikaye" className="relative py-24 sm:py-36 md:py-48 bg-[#F4F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
              Marka Mimarisi & Vizyon
            </span>
            <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615] leading-tight">
              Sıradan Bir Kafe Değil, <br />
              <span className="text-[#C85A32]">Bir Yaşam Felsefesi.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              Şanlıurfa’nın binlerce yıllık cömert misafirperverliği ile İtalyan kahve ustalığını tek bir çatı altında buluşturan <strong className="text-[#1A1615]">The Mia</strong>; zamanın yavaşladığı rafine bir buluşma alanıdır.
            </p>
          </div>
        </div>

        {/* IMAGE & TEXT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* IMAGE SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-300/60 border border-white p-2.5 sm:p-3 bg-white"
          >
            <div className="h-[350px] sm:h-[480px] md:h-[550px] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                alt="The Mia Coffee Bar Atmosphere"
                width={1000}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* EDITORIAL VALUE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg text-stone-700 font-light leading-relaxed">
              Özenle seçilmiş tek köken (Single Origin) çekirdeklerden, 72 saat dinlendirilmiş taş fırın kruvasanlarına kadar attığımız her adımda kusursuzluğu hedefliyoruz.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <article className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg shadow-stone-200/40 hover:border-[#C85A32]/40 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center mb-4 sm:mb-5">
                  <Coffee className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615]">Artisan Kavrum Sanatı</h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed font-light">
                  Dünyanın en nitelikli çiftliklerinden tedarik edilen mikro-lot çekirdekler, baristalarımızın hassas demleme oranlarıyla bardağınıza taşınır.
                </p>
              </article>

              <article className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg shadow-stone-200/40 hover:border-[#C85A32]/40 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-4 sm:mb-5">
                  <Feather className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615]">Lüks & Dengeli İç Mimari</h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed font-light">
                  Doğal taşlar, ahşap dokular ve yumuşak aydınlatma; duyusal dinginlik sağlamak amacıyla özel akustik mühendisliği ile tasarlandı.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
