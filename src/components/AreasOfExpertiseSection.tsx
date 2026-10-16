import React from "react";
import Link from "next/link";

export default function AreasOfExpertiseSection() {
  const col1 = [
    { text: "ANXIETY & WORRY", href: "#services" },
    { text: "PANIC & SOMATIC TENSION", href: "#services" },
    { text: "TRAUMA & PTSD", href: "#services" },
    { text: "EMDR THERAPY", href: "#approach" },
    { text: "PROFESSIONAL BURNOUT", href: "#services" },
    { text: "PERFECTIONISM", href: "#services" },
  ];

  const col2 = [
    { text: "HIGH INTERNAL PRESSURE", href: "#services" },
    { text: "NERVOUS SYSTEM REGULATION", href: "#approach" },
    { text: "COGNITIVE BEHAVIORAL THERAPY (CBT)", href: "#approach" },
    { text: "MINDFULNESS-BASED PRACTICES", href: "#approach" },
    { text: "BODY-ORIENTED TECHNIQUES", href: "#approach" },
    { text: "...AND DEPTH-ORIENTED WORK.", href: "#about" },
  ];

  const renderItem = (item: { text: string; href: string | null }, index: number) => (
    <div
      key={index}
      className="py-4 sm:py-5 border-b border-[#E2DDD5]/70"
    >
      {item.href ? (
        <Link
          href={item.href}
          className="text-[0.875rem] sm:text-[0.9375rem] font-sans font-medium tracking-[0.08em] text-brand-dark hover:text-brand-sage transition-colors block"
        >
          {item.text}
        </Link>
      ) : (
        <span className="text-[0.875rem] sm:text-[0.9375rem] font-sans font-medium tracking-[0.08em] text-brand-dark block">
          {item.text}
        </span>
      )}
    </div>
  );

  return (
    <section className="bg-[#FAF8F5] w-full py-16 sm:py-20 lg:py-24 scroll-mt-24" id="approach">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light text-brand-dark leading-[1.12]">
              Areas of<br />
              <span className="script-accent text-[1.35em]">focus</span>
            </h2>
          </div>

          {/* Right Column: 2 Sub-Columns Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div className="flex flex-col">
                {col1.map((item, idx) => renderItem(item, idx))}
              </div>
              <div className="flex flex-col">
                {col2.map((item, idx) => renderItem(item, idx))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
