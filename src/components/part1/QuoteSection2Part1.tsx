import React from "react";

export default function QuoteSection2Part1() {
  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Landscape Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Honoring your journey in counseling"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Heading */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light leading-[1.18] text-[#2B2B2B]">
              Honoring where you’ve<br className="hidden sm:inline" />{" "}
              been{" "}
              <span className="script-accent text-[1.3em] !text-[#86B3B3]">
                &amp;
              </span>{" "}
              helping shape<br className="hidden sm:inline" />{" "}
              where you’re headed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
