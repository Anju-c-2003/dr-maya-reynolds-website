import React from "react";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <section className="bg-[#FAF8F5] w-full py-16 sm:py-20 lg:py-28 overflow-hidden scroll-mt-24" id="contact">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Narrow Accent Photo (cols 1-3 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-3 hidden sm:flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[260px] aspect-[2/3] lg:aspect-[9/14] overflow-hidden">
              <img
                src="/images/appointment_accent.jpg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center Copy (cols 4-8 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center text-center lg:text-left px-2 sm:px-4">
            <span className="eyebrow-text mb-4 sm:mb-5 block text-brand-sage">
              SESSION FORMATS &amp; GETTING STARTED
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-brand-dark mb-6">
              A private, thoughtful space to<br className="hidden sm:inline" />{" "}
              begin your{" "}
              <span className="script-accent text-[1.25em]">healing.</span>
            </h2>
            <div className="space-y-4 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-700 leading-relaxed mb-8">
              <p>
                Taking the first step toward therapy is an intentional decision. Dr. Maya Reynolds provides in-person sessions at her Santa Monica office—a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <p>
                For clients located anywhere across California, secure telehealth sessions are offered to provide thoughtful, consistent care that fits your schedule.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="#contact"
                className="btn-outline"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Right Main Photo (cols 9-12 on desktop) */}
          <div className="order-3 lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
              <img
                src="/images/appointment_main.jpg"
                alt="Quiet, comfortable, and uncluttered session space"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
