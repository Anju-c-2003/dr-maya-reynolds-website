import React from "react";
import Link from "next/link";

export default function SpecialtiesSectionPart1() {
  const specialties = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
      href: "/trauma-counseling-newbury-park",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
      href: "/emdr-therapy-newbury-park",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
      href: "/counseling-special-needs-parents-newbury-park",
    },
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h3 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-serif font-light text-[#2B2B2B] leading-[1.15] sticky top-28">
              Our <span className="script-accent text-[1.25em] !text-[#86B3B3]">specialties</span><br />
              include…
            </h3>
          </div>

          {/* Right Column: 2x2 Grid of 4 Specialty Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {specialties.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl sm:text-[1.75rem] font-serif font-light text-[#2B2B2B] mb-4">
                      {item.title}
                    </h4>
                    <p className="text-[0.9375rem] sm:text-base text-neutral-700 font-sans font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={item.href}
                      className="btn-link-underline !text-[#2B2B2B] !border-[#515151]"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
