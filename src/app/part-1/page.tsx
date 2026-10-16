import React from "react";
import type { Metadata } from "next";
import HeaderPart1 from "@/components/part1/HeaderPart1";
import HeroSectionPart1 from "@/components/part1/HeroSectionPart1";
import IntroSectionPart1 from "@/components/part1/IntroSectionPart1";
import WhoWeHelpSectionPart1 from "@/components/part1/WhoWeHelpSectionPart1";
import QuoteSection1Part1 from "@/components/part1/QuoteSection1Part1";
import AreasOfExpertiseSectionPart1 from "@/components/part1/AreasOfExpertiseSectionPart1";
import HowWeWorkSectionPart1 from "@/components/part1/HowWeWorkSectionPart1";
import QuoteSection2Part1 from "@/components/part1/QuoteSection2Part1";
import SpecialtiesSectionPart1 from "@/components/part1/SpecialtiesSectionPart1";
import AppointmentSectionPart1 from "@/components/part1/AppointmentSectionPart1";
import FooterPart1 from "@/components/part1/FooterPart1";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Conejo Valley Family Counseling provides compassionate, specialized therapy for individuals, couples, children, and families in Newbury Park, Thousand Oaks, and throughout California.",
};

export default function Part1Page() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#2B2B2B] overflow-x-hidden">
      {/* Navigation Header */}
      <HeaderPart1 />

      {/* Section 1: Hero */}
      <HeroSectionPart1 />

      {/* Section 2: Intro */}
      <IntroSectionPart1 />

      {/* Section 3: Who We Help (Adults, Couples, Children & Teens) */}
      <WhoWeHelpSectionPart1 />

      {/* Section 4: Quote 1 ("Nothing will be too heavy for us to carry together") */}
      <QuoteSection1Part1 />

      {/* Section 5: Areas of Expertise (12 Specialties Grid) */}
      <AreasOfExpertiseSectionPart1 />

      {/* Section 6: How We Work ("We're here to make a difference") */}
      <HowWeWorkSectionPart1 />

      {/* Section 7: Quote 2 ("Honoring where you’ve been & helping shape where you’re headed") */}
      <QuoteSection2Part1 />

      {/* Section 8: Specialties (Trauma, EMDR, Dissociation, Special Needs Parenting) */}
      <SpecialtiesSectionPart1 />

      {/* Section 9: Schedule an Appointment */}
      <AppointmentSectionPart1 />

      {/* Section 10 & Sub-Footer: Footer */}
      <FooterPart1 />
    </main>
  );
}
