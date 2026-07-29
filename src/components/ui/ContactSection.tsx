"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  onOpenModal: () => void;
}

export function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section id="iletisim" className="relative py-24 sm:py-36 md:py-48 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-20 z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
            Ziyaret &amp; İletişim
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
            Sizi Şanlıurfa&apos;da <br />
            <span className="text-[#C85A32]">Ağırlamaktan Onur Duyarız.</span>
          </h2>
          <p className="text-base sm:text-xl text-stone-600 font-light">
            E-ticaret veya sipariş sistemi yok; sadece yerinde yaşanacak kusursuz bir kahve ve mekan deneyimi.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">

          {/* LEFT: INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-2xl shadow-stone-200/60 flex flex-col justify-between space-y-8 sm:space-y-10"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* ADRES */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase font-extrabold tracking-wider">Lokasyon</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1615] mt-0.5">{BRAND.address}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
                    Otopark ve vale hizmeti mevcut.
                  </p>
                </div>
              </div>

              {/* ÇALIŞMA SAATLERİ */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase font-extrabold tracking-wider">Çalışma Saatleri</span>
                  <div className="space-y-1 mt-1.5 text-xs sm:text-sm text-stone-700 font-semibold">
                    {BRAND.workingHours.map((wh, idx) => (
                      <p key={idx}>
                        <span className="text-[#C85A32] font-extrabold">{wh.days}:</span> {wh.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* TELEFON */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-stone-100 text-[#1A1615] shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase font-extrabold tracking-wider">Telefon / İletişim</span>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#1A1615] mt-0.5 block hover:text-[#C85A32] transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="pt-6 sm:pt-8 border-t border-stone-100 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenModal}
                className="flex-1 px-5 py-4 rounded-full bg-[#1A1615] hover:bg-[#C85A32] text-white text-xs uppercase font-extrabold tracking-widest shadow-xl transition-all flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Yol Tarifi Al</span>
              </button>

              <a
                href="https://www.instagram.com/the_mia_homeliving/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Hesabımızı Ziyaret Edin"
                className="flex items-center gap-2 px-5 py-4 rounded-full bg-stone-100 hover:bg-stone-200 text-xs font-bold text-[#1A1615] transition-all min-h-[48px]"
              >
                <svg className="w-4 h-4 text-[#C85A32]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>{BRAND.instagram}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: GOOGLE MAPS EMBED */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-stone-200/80 shadow-2xl shadow-stone-200/60 min-h-[400px] sm:min-h-[500px]"
          >
            {/* OVERLAY BADGE */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1A1615]">
                The Mia — Haliliye, Şanlıurfa
              </span>
            </div>

            {/* GOOGLE MAPS IFRAME */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.182306194449!2d38.801536811388104!3d37.21964694382714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bf338154d27419d%3A0x967258a1d07bcd0b!2sThe%20Mia%20Home%26Living%20%C5%9Eanl%C4%B1urfa!5e0!3m2!1str!2str!4v1785320928778!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="The Mia Home & Living Şanlıurfa Konum Haritası"
              className="absolute inset-0 w-full h-full"
            />

            {/* BOTTOM ACTION */}
            <a
              href="https://maps.google.com/?q=The+Mia+Home+Living+Şanlıurfa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps'te Büyük Haritayı Aç"
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-md text-[11px] font-bold text-[#1A1615] hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Google Maps&apos;te Aç</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
