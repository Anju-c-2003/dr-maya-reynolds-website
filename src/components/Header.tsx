"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [approachOpen, setApproachOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Anxiety & Panic Therapy", href: "#services" },
    { name: "Trauma-Informed Therapy & EMDR", href: "#services" },
    { name: "Burnout & Perfectionism Support", href: "#services" },
  ];

  const approaches = [
    { name: "Cognitive-Behavioral Therapy (CBT)", href: "#approach" },
    { name: "EMDR Therapy", href: "#approach" },
    { name: "Mindfulness-Based Practices", href: "#approach" },
    { name: "Body-Oriented & Somatic Techniques", href: "#approach" },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-200 bg-[#FAF8F5] sticky top-0 ${
        isScrolled ? "shadow-sm border-b border-[#E2DDD5]/60" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 md:py-5 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <Link href="/" className="inline-block transition-opacity hover:opacity-85 text-left">
          <span className="block font-serif text-[1.4rem] sm:text-[1.65rem] lg:text-[1.8rem] font-normal tracking-[-0.01em] text-brand-dark leading-tight">
            Dr. Maya Reynolds<span className="text-xs font-sans font-normal tracking-widest text-brand-mutedText ml-1.5 uppercase">PsyD</span>
          </span>
          <span className="block text-[0.6875rem] sm:text-[0.75rem] font-sans font-medium tracking-[0.16em] uppercase text-brand-mutedText mt-0.5">
            Licensed Clinical Psychologist • Santa Monica, CA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[0.8125rem] font-sans font-medium tracking-[0.1em] uppercase text-brand-dark">
          {/* About Link */}
          <Link
            href="#about"
            className="hover:text-brand-sage transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <button
              type="button"
              className="inline-flex items-center cursor-pointer hover:text-brand-sage focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:outline-none rounded px-1 transition-colors uppercase tracking-[0.1em]"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white shadow-lg border border-brand-border/70 py-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-[0.8125rem] normal-case text-neutral-700 hover:bg-[#FAF8F5] hover:text-brand-dark focus-visible:bg-[#FAF8F5] focus-visible:outline-none transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Approach Dropdown */}
          <div className="relative group py-2">
            <button
              type="button"
              className="inline-flex items-center cursor-pointer hover:text-brand-sage focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:outline-none rounded px-1 transition-colors uppercase tracking-[0.1em]"
              aria-expanded={approachOpen}
            >
              <span>Approach</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 w-80 bg-white shadow-lg border border-brand-border/70 py-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
              {approaches.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-[0.8125rem] normal-case text-neutral-700 hover:bg-[#FAF8F5] hover:text-brand-dark focus-visible:bg-[#FAF8F5] focus-visible:outline-none transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Office Link */}
          <Link
            href="#office"
            className="hover:text-brand-sage transition-colors"
          >
            Office
          </Link>

          {/* FAQs Link */}
          <Link
            href="#faq"
            className="hover:text-brand-sage transition-colors"
          >
            FAQs
          </Link>

          {/* Contact Link */}
          <Link
            href="#contact"
            className="hover:text-brand-sage transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex btn-outline text-xs"
          >
            BOOK A SESSION
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-brand-dark hover:opacity-75 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <span className="font-serif text-lg font-light text-brand-dark">
                  Dr. Maya Reynolds, PsyD
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-600 hover:text-black focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-8 space-y-4 text-sm font-sans tracking-wider uppercase text-brand-dark">
                <Link
                  href="#about"
                  className="block py-2 border-b border-brand-border/40 hover:text-brand-sage transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Services Accordion */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 border-b border-brand-border/40 text-left uppercase focus:outline-none"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 py-2 space-y-2 bg-white/60 rounded-md mt-1 mb-2">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-1 text-xs normal-case text-neutral-700 hover:text-brand-dark"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Approach Accordion */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 border-b border-brand-border/40 text-left uppercase focus:outline-none"
                    onClick={() => setApproachOpen(!approachOpen)}
                  >
                    <span>Approach</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        approachOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {approachOpen && (
                    <div className="pl-4 py-2 space-y-2 bg-white/60 rounded-md mt-1 mb-2">
                      {approaches.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-1 text-xs normal-case text-neutral-700 hover:text-brand-dark"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#office"
                  className="block py-2 border-b border-brand-border/40 hover:text-brand-sage transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Office
                </Link>

                <Link
                  href="#faq"
                  className="block py-2 border-b border-brand-border/40 hover:text-brand-sage transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>

                <Link
                  href="#contact"
                  className="block py-2 border-b border-brand-border/40 hover:text-brand-sage transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-8 border-t border-brand-border mt-8">
              <Link
                href="#contact"
                className="w-full btn-outline justify-center text-xs py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK A SESSION
              </Link>
              <p className="text-center text-[0.75rem] text-neutral-500 mt-4">
                Santa Monica, CA • California Telehealth
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
