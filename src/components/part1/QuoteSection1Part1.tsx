import React from "react";

export default function QuoteSection1Part1() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#1E1E1E] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt="Serene landscape background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-95" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-serif font-normal leading-[1.18] text-[#F8F6F1] tracking-[-0.01em]">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <em className="italic font-normal">
              Nothing will be too heavy for us to carry together.
            </em>
          </h2>
        </div>
      </div>
    </section>
  );
}
