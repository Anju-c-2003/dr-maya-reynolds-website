import React from "react";
import Link from "next/link";

export default function FooterPart1() {
  const teamMembers = [
    { name: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
    { name: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
    { name: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
    { name: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
    { name: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
    { name: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
    { name: "Chad Flores, AMFT", href: "/chad-flores" },
    { name: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
    { name: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
  ];

  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#E2DDD5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Logo & Statement (cols 1-4) */}
            <div className="lg:col-span-4 flex flex-col justify-start pr-0 lg:pr-6">
              <Link href="/part-1" className="inline-block mb-6">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png"
                  alt="Conejo Valley Family Counseling"
                  className="h-[65px] sm:h-[75px] w-auto object-contain"
                />
              </Link>
              <p className="text-[0.9375rem] font-sans font-light text-neutral-600 leading-relaxed max-w-sm">
                Conejo Valley Family Counseling is a group therapy practice based in Newbury Park, CA. We are proud to serve individuals, couples, children, and families throughout Ventura County and online across California.
              </p>
            </div>

            {/* Column 2: Navigate (cols 5-6) */}
            <div className="lg:col-span-2">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-[#2B2B2B] mb-4 sm:mb-6">
                Navigate
              </h4>
              <ul className="space-y-2.5 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700">
                <li>
                  <Link href="/part-1" className="hover:text-[#86B3B3] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/therapists-newbury-park" className="hover:text-[#86B3B3] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="hover:text-[#86B3B3] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#86B3B3] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Team (cols 7-9) */}
            <div className="lg:col-span-3">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-[#2B2B2B] mb-4 sm:mb-6">
                Our Team
              </h4>
              <ul className="space-y-2.5 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700">
                {teamMembers.map((member) => (
                  <li key={member.name}>
                    <Link
                      href={member.href}
                      className="hover:text-[#86B3B3] transition-colors"
                    >
                      {member.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact (cols 10-12) */}
            <div className="lg:col-span-3">
              <h4 className="text-[0.8125rem] font-sans font-medium tracking-[0.14em] uppercase text-[#2B2B2B] mb-4 sm:mb-6">
                Contact
              </h4>
              <div className="space-y-3 text-[0.875rem] sm:text-[0.9375rem] font-sans font-light text-neutral-700 leading-relaxed">
                <div>
                  <p>
                    925 Broadbeck Dr<br />
                    Suites 200 and 225<br />
                    Newbury Park, CA 91320
                  </p>
                </div>
                <div className="pt-2">
                  <p>
                    <a
                      href="mailto:info@conejovalleycounseling.com"
                      className="hover:text-[#86B3B3] transition-colors"
                    >
                      info@conejovalleycounseling.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:8052423120"
                      className="hover:text-[#86B3B3] transition-colors"
                    >
                      805.242.3120
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Sage Bar */}
      <div className="bg-[#86B3B3] text-white py-5 text-center text-xs sm:text-[0.8125rem] font-sans font-normal tracking-wide">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} Conejo Valley Family Counseling</span>
          <span className="opacity-60">|</span>
          <Link href="/terms-conditions" className="hover:opacity-85 transition-opacity">
            Terms &amp; Conditions
          </Link>
          <span className="opacity-60">|</span>
          <Link href="/privacy-policy" className="hover:opacity-85 transition-opacity">
            Privacy Policy
          </Link>
          <span className="opacity-60">|</span>
          <Link href="/disclaimer" className="hover:opacity-85 transition-opacity">
            Disclaimer
          </Link>
          <span className="opacity-60">|</span>
          <a
            href="https://www.walkerstrategyco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-85 transition-opacity"
          >
            Website by Walker Strategy Co.
          </a>
        </div>
      </div>
    </footer>
  );
}
