import React from "react";
import Link from "next/link";

export default function OurOfficeSection() {
  return (
    <section
      className="bg-white w-full py-16 sm:py-20 lg:py-28 border-t border-[#E2DDD5]/70 scroll-mt-24"
      id="office"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="eyebrow-text mb-3 block text-brand-sage">
            SANTA MONICA PRACTICE SPACE
          </span>
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-brand-dark mb-6">
            A quiet, private space designed for{" "}
            <span className="script-accent text-[1.25em]">calm</span> &amp; grounding.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-sans font-light leading-relaxed">
            Located in Santa Monica, California, the office is a quiet, private space designed to feel calm and grounding. With generous natural light and a comfortable, uncluttered environment, the setting itself helps clients feel more at ease from the moment they arrive.
          </p>
        </div>

        {/* Two Verified Office Photographs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16">
          {/* Office Photo 1: Large Windows & Brick Setting */}
          <div className="flex flex-col group">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 border border-[#E2DDD5]/80 shadow-sm">
              <img
                src="/images/office_1.jpg"
                alt="Sunlit private therapy office in Santa Monica with exposed brick, tall windows, and comfortable seating"
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-serif font-light text-brand-dark mb-1">
                Natural Light &amp; Warmth
              </h3>
              <p className="text-sm font-sans font-light text-brand-mutedText leading-relaxed">
                Large, sunlit windows and a serene arrangement designed to encourage safety and ease.
              </p>
            </div>
          </div>

          {/* Office Photo 2: Reading Space & Comfortable Seating */}
          <div className="flex flex-col group">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 border border-[#E2DDD5]/80 shadow-sm">
              <img
                src="/images/office_2.jpg"
                alt="Quiet counseling space with comfortable gray sofa, curated bookshelf, and natural wood floors"
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-serif font-light text-brand-dark mb-1">
                Comfortable &amp; Uncluttered
              </h3>
              <p className="text-sm font-sans font-light text-brand-mutedText leading-relaxed">
                An intentional, private environment suited for deep reflection and steady clinical pacing.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Format Information Card */}
        <div className="bg-[#FAF8F5] border border-[#E2DDD5] rounded-md p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Details (cols 1-8) */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.14em] text-brand-sage block">
                IN-PERSON &amp; STATEWIDE TELEHEALTH
              </span>
              <h3 className="text-2xl sm:text-[1.75rem] font-serif font-light text-brand-dark">
                Visiting the Santa Monica Office
              </h3>
              <p className="text-[0.9375rem] sm:text-base font-sans font-light text-neutral-700 leading-relaxed max-w-2xl">
                In-person appointments take place at{" "}
                <span className="font-normal text-brand-dark">123th Street 45 W, Santa Monica, CA 90401</span>. For clients located anywhere in California, secure virtual sessions provide consistent, accessible care.
              </p>
            </div>

            {/* CTA Link (cols 9-12) */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="#contact"
                className="btn-outline"
              >
                SCHEDULE A VISIT
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
