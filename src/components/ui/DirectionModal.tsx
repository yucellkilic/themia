"use client";

import { BRAND } from "@/lib/constants";
import { X, MapPin, Phone, Clock, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface DirectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DirectionModal({ isOpen, onClose }: DirectionModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BRAND.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-stone-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-[#1A1615]">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL HEADER */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative w-[90px] h-[46px]">
              <Image
                src="/logo.png"
                alt="The Mia Logosu"
                fill
                sizes="90px"
                className="object-contain"
              />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#C85A32]">
              Mağaza &amp; Cafe Ziyareti
            </span>
          </div>
          <p className="text-xs text-stone-600 font-light">
            Şanlıurfa Haliliye'deki premium kahve ve yaşam alanımızda sizi ağırlamaktan onur duyarız.
          </p>
        </div>

        {/* DETAILS GRID */}
        <div className="space-y-5">
          {/* ADDRESS */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
            <div className="p-3 rounded-xl bg-[#C85A32]/10 text-[#C85A32]">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-stone-500 uppercase font-extrabold">Adres</span>
              <p className="text-sm font-semibold mt-0.5 text-[#1A1615]">{BRAND.address}</p>
            </div>
            <button
              onClick={handleCopyAddress}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-[#C85A32] flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "Kopyalandı" : "Kopyala"}</span>
            </button>
          </div>

          {/* WORKING HOURS */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
            <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-stone-500 uppercase font-extrabold">Çalışma Saatleri</span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {BRAND.workingHours.map((wh, i) => (
                  <div key={i} className="text-xs font-medium">
                    <span className="text-stone-500">{wh.days}:</span>{" "}
                    <span className="font-extrabold text-[#1A1615]">{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
            <div className="p-3 rounded-xl bg-stone-100 text-[#1A1615]">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-stone-500 uppercase font-extrabold">Rezervasyon & Bilgi</span>
              <p className="text-base font-extrabold mt-0.5 text-[#1A1615]">{BRAND.phone}</p>
            </div>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
              className="px-5 py-2.5 rounded-xl bg-[#1A1615] hover:bg-[#C85A32] text-xs font-bold text-white transition-all"
            >
              Ara
            </a>
          </div>
        </div>

        {/* MAP ACTION BUTTONS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={BRAND.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-6 rounded-2xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#C85A32]/20 transition-all"
          >
            <span>Google Maps'te Aç</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`https://maps.apple.com/?q=${encodeURIComponent(BRAND.name + " " + BRAND.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-6 rounded-2xl bg-white hover:bg-stone-100 border border-stone-200 text-[#1A1615] text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <span>Apple Maps'te Aç</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
