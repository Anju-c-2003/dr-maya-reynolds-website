import React from "react";

export default function WhoWeHelpSectionPart1() {
  const cards = [
    {
      title: "Adults",
      image: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg",
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    },
    {
      title: "Couples",
      image: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    },
    {
      title: "Children & Teens",
      image: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg",
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    },
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light text-[#2B2B2B]">
            Who we <span className="script-accent text-[1.25em] !text-[#86B3B3]">help</span>
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
              <h3 className="text-2xl sm:text-[1.75rem] font-serif font-light text-[#2B2B2B] mb-3">
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
