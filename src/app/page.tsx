"use client";

import { useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { BrandStory } from "@/components/ui/BrandStory";
import { Atmosphere } from "@/components/ui/Atmosphere";
import { CoffeeExperience } from "@/components/ui/CoffeeExperience";
import { Delicacies } from "@/components/ui/Delicacies";
import { ArchitectureSpace } from "@/components/ui/ArchitectureSpace";
import { WhyTheMia } from "@/components/ui/WhyTheMia";
import { Gallery } from "@/components/ui/Gallery";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/ui/Footer";
import { DirectionModal } from "@/components/ui/DirectionModal";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function Home() {
  const { activeSection } = useScrollProgress();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#1A1615] selection:bg-[#C85A32] selection:text-white">
      {/* HEADER NAVBAR */}
      <Header onOpenModal={handleOpenModal} activeSection={activeSection} />

      {/* SECTIONS */}
      <Hero onOpenModal={handleOpenModal} />
      <BrandStory />
      <Atmosphere />
      <CoffeeExperience />
      <Delicacies />
      <ArchitectureSpace />
      <WhyTheMia />
      <Gallery />
      <ContactSection onOpenModal={handleOpenModal} />
      <Footer />

      {/* FLOATING CONTACT FAB */}
      <FloatingContact onOpenDirections={handleOpenModal} />

      {/* LOCATION & DIRECTION MODAL */}
      <DirectionModal isOpen={modalOpen} onClose={handleCloseModal} />
    </main>
  );
}
