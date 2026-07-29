"use client";

import { BRAND } from "@/lib/constants";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F4F0EA] border-t border-stone-200/80 pt-24 pb-12 overflow-hidden text-[#1A1615]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">

        {/* TOP BRAND STATEMENT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="relative w-[160px] sm:w-[200px] h-[82px] sm:h-[102px]">
              <Image
                src="/logo.png"
                alt="The Mia Home & Living Şanlıurfa Logosu"
                fill
                sizes="(max-width: 640px) 160px, 200px"
                className="object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C85A32] font-extrabold">
              {BRAND.tagline} • {BRAND.subtitle}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-5 rounded-full bg-white hover:bg-stone-100 text-[#1A1615] transition-all border border-stone-200/80 shadow-md group"
            aria-label="Yukarı Çık"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* MIDDLE LINKS & INFO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-stone-300/60 text-xs text-stone-600">
          <div>
            <span className="text-[#C85A32] font-extrabold uppercase tracking-wider block mb-3">Adres</span>
            <p className="leading-relaxed">{BRAND.address}</p>
          </div>

          <div>
            <span className="text-[#C85A32] font-extrabold uppercase tracking-wider block mb-3">İletişim</span>
            <p className="font-semibold text-[#1A1615]">{BRAND.phone}</p>
            <p className="mt-1 font-semibold text-[#1A1615]">{BRAND.instagram}</p>
          </div>

          <div>
            <span className="text-[#C85A32] font-extrabold uppercase tracking-wider block mb-3">Çalışma Saatleri</span>
            <p>Hafta İçi: 08:00 - 24:00</p>
            <p className="mt-1">Hafta Sonu: 08:00 - 01:00</p>
          </div>

          <div>
            <span className="text-[#C85A32] font-extrabold uppercase tracking-wider block mb-3">Marka Vizyonu</span>
            <p className="leading-relaxed">
              Şanlıurfa&apos;da kahve sanatını ve rafine mimari estetiği buluşturan lüks buluşma alanı.
            </p>
          </div>
        </div>

        {/* INSTAGRAM BUTTON */}
        <div className="flex justify-center pt-2">
          <a
            href="https://www.instagram.com/the_mia_homeliving/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Mia Instagram Hesabını Ziyaret Et"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs uppercase font-extrabold tracking-widest shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram&apos;da Takip Edin</span>
            <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-medium">
          <p>© {new Date().getFullYear()} {BRAND.name} {BRAND.tagline}. Tüm Hakları Saklıdır.</p>
          <p className="tracking-widest uppercase text-[11px] font-bold text-[#1A1615]">Şanlıurfa • Haliliye</p>
        </div>

        {/* DEVELOPER CREDIT */}
        <div className="pt-5 flex justify-center">
          <a
            href="https://yucelkilic.tr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Geliştirici: Yücel Kılıç"
            className="group inline-flex items-center gap-2 text-[11px] text-stone-400 hover:text-[#C85A32] transition-colors duration-300 font-medium"
          >
            <span className="w-4 h-[1px] bg-stone-300 group-hover:bg-[#C85A32] transition-colors duration-300" />
            <span>Yücel Kılıç Tarafından Yapılmıştır</span>
            <span className="w-4 h-[1px] bg-stone-300 group-hover:bg-[#C85A32] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
