"use client";

import { motion } from "framer-motion";
import { Flame, Droplets, RefreshCw, CheckCircle2 } from "lucide-react";

export function CoffeeExperience() {
  const steps = [
    {
      num: "01",
      title: "Seçkin Nitelikli Çekirdekler",
      desc: "Etiyopya, Kolombiya ve Guatemala'nın yüksek rakımlı micro-lot çiftliklerinden adil ticaretle toplanan %100 Arabica çekirdekler.",
      icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#C85A32]" aria-hidden="true" />
    },
    {
      num: "02",
      title: "Sıcaklık & Mineral Dengeli Su",
      desc: "Demleme suyunun mineral seviyesi ve 92°C-94°C derece arası ideal sıcaklık değeri dijital sensörlerle sabit tutulur.",
      icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" aria-hidden="true" />
    },
    {
      num: "03",
      title: "Artisan Pour-Over & V60",
      desc: "Paper filter ile el demlemesi veya aeropress; çekirdeğin doğasında var olan tüm aromatik profilleri açığa çıkarır.",
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" aria-hidden="true" />
    }
  ];

  return (
    <section id="kahve" className="relative py-24 sm:py-36 md:py-48 bg-[#F4F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
              Ustalık & Disiplin
            </span>
            <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615] leading-tight">
              Artisan Kahve Kültürü: <br />
              <span className="text-[#C85A32]">Bardağa Yansıyan Sanat.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-xl text-stone-600 font-light leading-relaxed">
              Kahve bizim için sadece bir içecek değil, topraktan bardağa uzanan titiz bir simyadır. Baristalarımızın her demlemesi bir ritüeldir.
            </p>
          </div>
        </div>

        {/* CONTENT & SHOWCASE IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* STEPS COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 sm:gap-6 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-lg shadow-stone-200/40 hover:border-[#C85A32]/40 transition-all duration-300"
              >
                <div className="p-3 sm:p-4 rounded-2xl bg-stone-50 border border-stone-200/60 shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-extrabold text-[#C85A32]">{step.num}.</span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1A1615]">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1.5 sm:mt-2 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-stone-200/80 text-xs font-bold text-[#1A1615] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>SCA Sertifikalı Baristalar</span>
              </div>
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-stone-200/80 text-xs font-bold text-[#1A1615] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" aria-hidden="true" />
                <span>Günlük Taze Kavrum</span>
              </div>
            </div>
          </motion.div>

          {/* SHOWCASE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-300/60 border border-white p-2.5 sm:p-3 bg-white"
          >
            <div className="h-[380px] sm:h-[480px] md:h-[550px] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan V60 Pour Over Coffee Process"
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
