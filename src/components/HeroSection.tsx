import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#FAF8F5] w-full pt-4 pb-14 md:pt-6 md:pb-20 overflow-hidden relative">
      <div className="w-full max-w-[1600px] mx-auto px-0">
        {/* Responsive Hero Layout: Left Image (flush left) + Center Text + Right Image (flush right) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-6 min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Calm Reflection Image: Flush to the left on desktop/tablet */}
          <div className="order-2 lg:order-1 w-full lg:w-[35%] xl:w-[36%] shrink-0 flex justify-start pl-0">
            <div className="relative w-full max-w-[490px] sm:max-w-[420px] lg:max-w-none aspect-[1365/1246] sm:aspect-[4/5] lg:aspect-[1365/1246] overflow-hidden">
              <img
                src="/images/hero_calm.jpg"
                alt="Mindful adult reflection in warm natural light"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>

          {/* Center Copy & CTA: Carefully aligned and proportioned */}
          <div className="order-1 lg:order-2 flex-1 max-w-[620px] px-6 sm:px-10 lg:px-6 xl:px-8 py-4 flex flex-col justify-center text-center lg:text-left">
            <span className="eyebrow-text mb-4 sm:mb-6 block text-brand-sage leading-relaxed max-w-md mx-auto lg:mx-0">
              IN-PERSON IN SANTA MONICA &amp;<br className="hidden sm:inline" /> SECURE TELEHEALTH ACROSS CALIFORNIA
            </span>

            <h1 className="text-[2.5rem] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.15rem] font-serif font-light leading-[1.12] text-brand-dark mb-6 tracking-[-0.015em]">
              A warm, grounded space to slow down, heal, and find your{" "}
              <span className="script-accent text-[1.25em]">footing</span>.
            </h1>

            <p className="text-base sm:text-lg md:text-[1.0625rem] text-brand-mutedText font-sans font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Specialized clinical psychology for thoughtful adults, creatives, and professionals navigating anxiety, panic, trauma, and burnout.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#contact"
                className="btn-link-underline"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Right Pacific Ocean Image: Flush to the right on desktop/tablet, matching reference width */}
          <div className="order-3 hidden lg:flex justify-end w-[15%] xl:w-[17%] shrink-0 self-center pr-0">
            <div className="relative w-full aspect-[1/2.2] overflow-hidden">
              <img
                src="/images/hero_coast.jpg"
                alt="Pacific coastal water in Santa Monica"
                className="w-full h-full object-cover object-[80%_50%]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
