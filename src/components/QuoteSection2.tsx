import React from "react";

export default function QuoteSection2() {
  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Landscape Image (cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src="/images/quote2_landscape.jpg"
                alt="Coastal shoreline and horizon in California"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Heading (cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light leading-[1.18] text-brand-dark">
              Combining practical tools<br className="hidden sm:inline" />{" "}
              with depth-oriented<br className="hidden sm:inline" />{" "}
              <span className="script-accent text-[1.3em]">
                &amp;
              </span>{" "}
              grounded care.
            </h2>
            <p className="mt-6 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-600 leading-relaxed max-w-md">
              Therapy can become an intentional space to slow down, reconnect, and develop more sustainable ways of living and working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
