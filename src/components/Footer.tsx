import React from "react";
import Link from "next/link";

export default function Footer() {
  const focusAreas = [
    { name: "Anxiety & Panic Therapy", href: "#services" },
    { name: "Trauma-Informed Therapy", href: "#services" },
    { name: "Burnout & Perfectionism", href: "#services" },
    { name: "EMDR Therapy", href: "#approach" },
    { name: "Mindfulness & Somatics", href: "#approach" },
  ];

  return (
    <footer className="w-full">
      {/* Main Footer Section (Section 10) */}
      <div className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#E2DDD5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Logo & Mission Statement (cols 1-4) */}
            <div className="lg:col-span-4 flex flex-col justify-start pr-0 lg:pr-6">
              <Link href="/" className="inline-block mb-4">
                <span className="block font-serif text-[1.4rem] sm:text-[1.65rem] font-normal tracking-[-0.01em] text-brand-dark leading-tight">
                  Dr. Maya Reynolds<span className="text-xs font-sans font-normal tracking-widest text-brand-mutedText ml-1.5 uppercase">PsyD</span>
                </span>
                <span className="block text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-brand-mutedText mt-0.5">
                  Licensed Clinical Psychologist (Fictional Therapist)
                </span>
              </Link>
              <p className="text-[0.9375rem] font-sans font-light text-neutral-600 leading-relaxed max-w-sm">
                Providing warm, collaborative, and grounded therapy for adults in Santa Monica, California and secure telehealth sessions statewide across California.
              </p>
            </div>

            {/* Column 2: Navigate (cols 5-6) */}
            <div className="lg:col-span-2">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-brand-dark mb-4 sm:mb-6">
                Navigate
              </h4>
              <ul className="space-y-2.5 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700">
                <li>
                  <Link href="/" className="hover:text-brand-sage transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-brand-sage transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-brand-sage transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#approach" className="hover:text-brand-sage transition-colors">
                    Approach
                  </Link>
                </li>
                <li>
                  <Link href="#office" className="hover:text-brand-sage transition-colors">
                    Office
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-brand-sage transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-brand-sage transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinical Focus (cols 7-9 on desktop) */}
            <div className="lg:col-span-3">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-brand-dark mb-4 sm:mb-6">
                Clinical Focus
              </h4>
              <ul className="space-y-2.5 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700">
                {focusAreas.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-brand-sage transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Location & Office Details (cols 10-12 on desktop) */}
            <div className="lg:col-span-3">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-brand-dark mb-4 sm:mb-6">
                Office &amp; Formats
              </h4>
              <div className="space-y-3 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700 leading-relaxed">
                <div>
                  <p className="font-medium text-brand-dark text-xs uppercase tracking-wider mb-0.5">
                    Santa Monica Office
                  </p>
                  <p>
                    123th Street 45 W<br />
                    Santa Monica, CA 90401
                  </p>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-brand-dark text-xs uppercase tracking-wider mb-0.5">
                    Session Availability
                  </p>
                  <p>
                    • In-person at Santa Monica office<br />
                    • Secure telehealth across California
                  </p>
                </div>
                <p className="pt-2 text-xs text-neutral-500 italic">
                  Private, quiet practice space designed to feel calm and grounding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Legal & Attribution Bar (Section 11) */}
      <div className="bg-[#5E8A85] text-white py-5 text-center text-xs sm:text-[0.8125rem] font-sans font-normal tracking-wide">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD</span>
          <span className="opacity-60">|</span>
          <Link href="#terms" className="hover:opacity-85 transition-opacity">
            Terms of Use
          </Link>
          <span className="opacity-60">|</span>
          <Link href="#privacy" className="hover:opacity-85 transition-opacity">
            Privacy Policy
          </Link>
          <span className="opacity-60">|</span>
          <Link href="#disclaimer" className="hover:opacity-85 transition-opacity">
            Clinical Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
