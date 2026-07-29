"use client";

import { useState, useEffect } from "react";
import { BRAND } from "@/lib/constants";
import { MapPin, Navigation, Menu, X } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onOpenModal: () => void;
  activeSection: string;
}

export function Header({ onOpenModal, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hikaye", href: "#hikaye", id: "hikaye" },
    { name: "Atmosfer", href: "#atmosfer", id: "atmosfer" },
    { name: "Kahve Deneyimi", href: "#kahve", id: "kahve" },
    { name: "Lezzetler", href: "#lezzetler", id: "lezzetler" },
    { name: "Mekan", href: "#mekan", id: "mekan" },
    { name: "İletişim", href: "#iletisim", id: "iletisim" },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-stone-200/80 py-3 shadow-sm"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* BRAND LOGO — logo.png */}
        <a href="#" className="group flex items-center" aria-label="The Mia Ana Sayfa">
          <div className="relative w-[100px] sm:w-[120px] h-[52px] sm:h-[62px] transition-opacity duration-300 group-hover:opacity-80">
            <Image
              src="/logo.png"
              alt="The Mia Home & Living Store & Cafe Şanlıurfa Logosu"
              fill
              sizes="(max-width: 640px) 100px, 120px"
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Ana Navigasyon"
          className="hidden lg:flex items-center gap-8 bg-white border border-stone-200/80 px-8 py-3.5 rounded-full shadow-lg shadow-stone-200/40"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative py-1 ${
                  isActive
                    ? "text-[#C85A32]"
                    : "text-[#1A1615]/70 hover:text-[#1A1615]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C85A32] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200/80 text-xs text-[#1A1615] shadow-sm">
            <MapPin className="w-4 h-4 text-[#C85A32]" aria-hidden="true" />
            <span className="font-medium">{BRAND.district}, Şanlıurfa</span>
          </div>

          <button
            onClick={onOpenModal}
            aria-label="Mağaza Konumunu Göster"
            className="group px-6 py-3 rounded-full bg-[#1A1615] hover:bg-[#C85A32] text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 flex items-center gap-2.5 shadow-md min-h-[44px]"
          >
            <Navigation className="w-3.5 h-3.5 transition-transform group-hover:rotate-45 duration-300" aria-hidden="true" />
            <span>Mağazayı Keşfet</span>
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 rounded-full bg-white border border-stone-200 text-[#1A1615] shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 space-y-3 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest text-[#1A1615] font-semibold py-3 border-b border-stone-200/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-4 rounded-full bg-[#C85A32] text-white text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              <span>Yol Tarifi & Konum</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
