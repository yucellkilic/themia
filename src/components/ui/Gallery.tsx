"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<{ url: string; title: string; category: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="galeri" className="relative py-24 sm:py-36 md:py-48 bg-[#F4F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full space-y-12 sm:space-y-16 z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#C85A32]">
            Estetik &amp; Kareler
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1615]">
            Visual <span className="text-[#C85A32]">Masterpieces</span>
          </h2>
          <p className="text-base sm:text-xl text-stone-600 font-light">
            The Mia Şanlıurfa Store &amp; Cafe atmosferinden özel anlar ve sunumlar.
          </p>
        </div>

        {/* MASONRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedImg(img)}
              className="group relative h-64 sm:h-80 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer border border-white shadow-xl shadow-stone-300/50 bg-white p-2"
            >
              <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
                <Image
                  src={img.url}
                  alt={`${img.title} - The Mia Şanlıurfa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white z-10">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#E5C384] font-extrabold">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold">{img.title}</h3>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <button
            onClick={() => setSelectedImg(null)}
            aria-label="Görseli Kapat"
            className="absolute top-6 right-6 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
            <div className="relative w-full h-[65vh]">
              <Image
                src={selectedImg.url}
                alt={selectedImg.title}
                fill
                sizes="100vw"
                className="object-contain mx-auto"
              />
            </div>
            <div className="p-6 bg-[#1A1615] text-center text-white">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">{selectedImg.category}</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">{selectedImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
