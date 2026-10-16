"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function HeaderPart1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    { name: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
    { name: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
    { name: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
    { name: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
    { name: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
    { name: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
    { name: "Chad Flores, AMFT", href: "/chad-flores" },
    { name: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
    { name: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
  ];

  const specialties = [
    { name: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
    { name: "Trauma", href: "/trauma-counseling-newbury-park" },
    { name: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
    { name: "Couples", href: "/couples-therapy" },
    { name: "Children & Teens", href: "/children-and-teens" },
    { name: "Anxiety & Depression", href: "/anxiety-depression" },
    { name: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
  ];

  const methods = [
    { name: "EMDR", href: "/emdr-therapy-newbury-park" },
    { name: "Brainspotting", href: "/brainspotting" },
    { name: "Somatic Therapy", href: "/somatic-therapy" },
    { name: "Parts Work Therapy", href: "/parts-work-therapy" },
  ];

  return (
    <header
      className={`w-full z-50 transition-colors duration-200 bg-[#FBF9F4] ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/part-1" className="inline-block transition-opacity hover:opacity-90">
          <img
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png"
            alt="Conejo Valley Family Counseling"
            className="h-[60px] sm:h-[70px] lg:h-[75px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[0.8125rem] font-sans font-medium tracking-[0.1em] uppercase text-[#2B2B2B]">
          {/* About Link */}
          <Link
            href="/therapists-newbury-park"
            className="hover:opacity-65 transition-opacity"
          >
            About
          </Link>

          {/* Our Team Dropdown */}
          <div className="relative group py-2">
            <span className="inline-flex items-center cursor-pointer hover:opacity-65 transition-opacity">
              <span>Our Team</span>
            </span>
            <div className="absolute top-full left-0 w-72 bg-white shadow-lg border border-[#E2DDD6]/60 py-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {teamMembers.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[0.8125rem] capitalize text-neutral-700 hover:bg-[#F8F6F1] hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Specialties Dropdown */}
          <div className="relative group py-2">
            <span className="inline-flex items-center cursor-pointer hover:opacity-65 transition-opacity">
              <span>Specialties</span>
            </span>
            <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-[#E2DDD6]/60 py-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {specialties.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[0.8125rem] capitalize text-neutral-700 hover:bg-[#F8F6F1] hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Methods Dropdown */}
          <div className="relative group py-2">
            <span className="inline-flex items-center cursor-pointer hover:opacity-65 transition-opacity">
              <span>Methods</span>
            </span>
            <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-[#E2DDD6]/60 py-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {methods.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[0.8125rem] capitalize text-neutral-700 hover:bg-[#F8F6F1] hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQs Link */}
          <Link
            href="/faqs"
            className="hover:opacity-65 transition-opacity"
          >
            FAQs
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#2B2B2B] rounded-full px-5 py-2 text-[0.75rem] font-sans font-medium tracking-[0.1em] uppercase text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-all"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="p-2 text-[#2B2B2B] hover:opacity-75 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FBF9F4] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD6]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png"
                  alt="Conejo Valley Family Counseling"
                  className="h-10 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-neutral-600 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 space-y-4 text-sm font-sans tracking-wider uppercase text-[#2B2B2B]">
                <Link
                  href="/therapists-newbury-park"
                  className="block py-2 border-b border-[#E2DDD6]/40"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Specialties Accordion */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 border-b border-[#E2DDD6]/40 text-left uppercase"
                    onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                  >
                    <span>Specialties</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${specialtiesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {specialtiesOpen && (
                    <div className="pl-4 py-2 space-y-2 bg-white/60 rounded-md mt-1">
                      {specialties.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-1 text-xs normal-case text-neutral-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Methods Accordion */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 border-b border-[#E2DDD6]/40 text-left uppercase"
                    onClick={() => setMethodsOpen(!methodsOpen)}
                  >
                    <span>Methods</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${methodsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {methodsOpen && (
                    <div className="pl-4 py-2 space-y-2 bg-white/60 rounded-md mt-1">
                      {methods.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-1 text-xs normal-case text-neutral-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/faqs"
                  className="block py-2 border-b border-[#E2DDD6]/40"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 border-b border-[#E2DDD6]/40"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E2DDD6] mt-8">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center border border-[#2B2B2B] rounded-full py-3 text-xs tracking-widest uppercase text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
