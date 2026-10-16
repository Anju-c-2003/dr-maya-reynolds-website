import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteSection1 from "@/components/QuoteSection1";
import AreasOfExpertiseSection from "@/components/AreasOfExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import QuoteSection2 from "@/components/QuoteSection2";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import OurOfficeSection from "@/components/OurOfficeSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-brand-dark overflow-x-hidden">
      {/* Header & Navigation */}
      <Header />

      {/* Section 1: Hero (Dr. Maya Reynolds, Santa Monica & CA Telehealth) */}
      <HeroSection />

      {/* Section 2: Intro (Grounding, validation, evidence-based tools) */}
      <IntroSection />

      {/* Section 3: Who This Work Is For (Thoughtful Adults, Creatives/Professionals, Trauma) */}
      <WhoWeHelpSection />

      {/* Section 4: Quote 1 (Therapy philosophy & respect) */}
      <QuoteSection1 />

      {/* Section 5: Areas of Focus (12 clinical focus areas from PDF) */}
      <AreasOfExpertiseSection />

      {/* Section 6: About Dr. Maya Reynolds, PsyD (Authentic portrait & clinical bio) */}
      <HowWeWorkSection />

      {/* Section 7: Quote 2 (Depth-oriented & practical tools) */}
      <QuoteSection2 />

      {/* Section 8: Primary Services (Anxiety/Panic, Trauma, Burnout) & FAQs */}
      <SpecialtiesSection />

      {/* Section 9 (Part 3): Our Office Space in Santa Monica */}
      <OurOfficeSection />

      {/* Section 10: Session Formats & Booking (Santa Monica & CA Telehealth) */}
      <AppointmentSection />

      {/* Section 11 & 12: Footer & Practice Attribution */}
      <Footer />
    </main>
  );
}
