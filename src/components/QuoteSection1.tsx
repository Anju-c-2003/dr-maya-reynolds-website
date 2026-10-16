import React from "react";

export default function QuoteSection1() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#162021] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/quote1_bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#162021]/65 backdrop-brightness-90" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-serif font-light leading-[1.18] text-[#FAF8F5] tracking-[-0.01em]">
            “I believe therapy works best when clients feel respected, understood, and actively involved in the process.{" "}
            <em className="italic font-light text-[#E5DFD5]">
              My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.”
            </em>
          </h2>
          <p className="mt-8 font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-brand-sand">
            — Dr. Maya Reynolds, PsyD • Licensed Clinical Psychologist
          </p>
        </div>
      </div>
    </section>
  );
}
