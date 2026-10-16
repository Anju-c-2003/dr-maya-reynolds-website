import React from "react";
import Link from "next/link";

export default function AreasOfExpertiseSectionPart1() {
  const col1 = [
    {
      text: "DISSOCIATION",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    {
      text: "TRAUMA",
      href: "/trauma-counseling-newbury-park",
    },
    {
      text: "FAMILY CONFLICT",
      href: null,
    },
    {
      text: "SPECIAL NEEDS PARENTING",
      href: "/counseling-special-needs-parents-newbury-park",
    },
    {
      text: "DEPRESSION",
      href: "/anxiety-depression",
    },
    {
      text: "MARRIAGE",
      href: "/couples-therapy",
    },
  ];

  const col2 = [
    {
      text: "ANXIETY",
      href: "/anxiety-depression",
    },
    {
      text: "RELATIONSHIPS",
      href: null,
    },
    {
      text: "CHILDREN",
      href: "/children-and-teens",
    },
    {
      text: "TEENS",
      href: "/children-and-teens",
    },
    {
      text: "INTIMACY & CONNECTION",
      href: "/couples-therapy",
    },
    {
      text: "...AND MORE.",
      href: null,
    },
  ];

  const renderItem = (item: { text: string; href: string | null }, index: number) => (
    <div
      key={index}
      className="py-4 sm:py-5 border-b border-[#E2DDD6]/70"
    >
      {item.href ? (
        <Link
          href={item.href}
          className="text-[0.875rem] sm:text-[0.9375rem] font-sans font-medium tracking-[0.08em] text-[#2B2B2B] hover:text-[#86B3B3] transition-colors block"
        >
          {item.text}
        </Link>
      ) : (
        <span className="text-[0.875rem] sm:text-[0.9375rem] font-sans font-medium tracking-[0.08em] text-[#2B2B2B] block">
          {item.text}
        </span>
      )}
    </div>
  );

  return (
    <section className="bg-[#FBF9F4] w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-serif font-light text-[#2B2B2B] leading-[1.12]">
              Our areas of<br />
              <span className="script-accent text-[1.35em] !text-[#86B3B3]">expertise</span>
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
