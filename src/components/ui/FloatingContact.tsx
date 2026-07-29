"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, X, MessageCircle } from "lucide-react";

interface FloatingContactProps {
  onOpenDirections: () => void;
}

export function FloatingContact({ onOpenDirections }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const items = [
    {
      id: "instagram",
      label: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bg: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      href: "https://www.instagram.com/the_mia_homeliving/",
      action: "link" as const,
    },
    {
      id: "directions",
      label: "Yol Tarifi",
      icon: <Navigation className="w-5 h-5" aria-hidden="true" />,
      bg: "bg-[#1A1615] hover:bg-[#C85A32]",
      action: "modal" as const,
    },
  ];

  return (
    <>
      {/* BACKDROP: closes menu when clicking outside */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            onClick={close}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* FIXED CONTAINER — bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" role="region" aria-label="Hızlı Erişim Menüsü">

        {/* ACTION ITEMS — appear above main button */}
        <AnimatePresence>
          {isOpen && items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.85 }}
              transition={{
                duration: 0.28,
                delay: isOpen ? (items.length - 1 - index) * 0.06 : index * 0.04,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex items-center gap-3"
            >
              {/* LABEL CHIP */}
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2, delay: isOpen ? (items.length - 1 - index) * 0.06 + 0.05 : 0 }}
                className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-lg text-xs font-bold text-[#1A1615] tracking-wide whitespace-nowrap"
              >
                {item.label}
              </motion.span>

              {/* ACTION BUTTON */}
              {item.action === "link" ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} sayfasına git`}
                  className={`${item.bg} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 min-w-[56px] min-h-[56px]`}
                >
                  {item.icon}
                </a>
              ) : (
                <button
                  onClick={() => { close(); onOpenDirections(); }}
                  aria-label="Yol tarifi modal penceresi aç"
                  className={`${item.bg} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 min-w-[56px] min-h-[56px]`}
                >
                  {item.icon}
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* MAIN FAB BUTTON */}
        <motion.button
          onClick={toggle}
          aria-label={isOpen ? "Menüyü Kapat" : "Hızlı İletişim Menüsünü Aç"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 min-w-[64px] min-h-[64px] ${
            isOpen
              ? "bg-[#1A1615] text-white"
              : "bg-[#C85A32] text-white"
          }`}
        >
          {/* PULSE RING — only when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#C85A32]/40 animate-ping" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
