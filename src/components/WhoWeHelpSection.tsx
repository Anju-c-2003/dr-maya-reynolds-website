import React from "react";

export default function WhoWeHelpSection() {
  const cards = [
    {
      title: "Thoughtful & High-Achieving Adults",
      image: "/images/who_adults.jpg",
      description:
        "You appear capable and composed on the outside, but internally feel exhausted, overwhelmed by constant worry, or stuck in cycles of overthinking and physical tension.",
    },
    {
      title: "Professionals, Creatives & Entrepreneurs",
      image: "/images/who_professionals.jpg",
      description:
        "High internal pressure, perfectionism, and career burnout can leave you feeling disconnected. Therapy offers a space to slow down and create sustainable rhythms for living and working.",
    },
    {
      title: "Adults Navigating Trauma & Past Stress",
      image: "/images/who_trauma.jpg",
      description:
        "Whether processing single-incident trauma or complex, long-standing experiences from earlier in life, our work is paced carefully with an emphasis on safety and regulation.",
    },
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light text-brand-dark">
            Who this work is <span className="script-accent text-[1.25em]">for</span>
          </h2>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Card Image */}
              <div className="relative w-full aspect-square overflow-hidden mb-6 bg-neutral-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-[1.75rem] font-serif font-light text-brand-dark mb-3">
                {card.title}
              </h3>

              {/* Card Text */}
              <p className="text-[0.9375rem] sm:text-base text-neutral-700 font-sans font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
