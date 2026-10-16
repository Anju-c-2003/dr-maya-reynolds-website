import React from "react";
import Link from "next/link";

export default function AppointmentSectionPart1() {
  return (
    <section className="bg-[#FAF8F5] w-full py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Narrow Accent Photo (cols 1-3 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-3 hidden sm:flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[260px] aspect-[2/3] lg:aspect-[9/14] overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                alt="Conejo Valley Counseling office details"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center Copy (cols 4-8 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center text-center lg:text-left px-2 sm:px-4">
            <span className="eyebrow-text mb-4 sm:mb-5 block !text-[#86B3B3]">
              SCHEDULE AN APPOINTMENT
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-[#2B2B2B] mb-6">
              Find a therapist who is the<br className="hidden sm:inline" />{" "}
              right fit for{" "}
              <span className="script-accent text-[1.25em] !text-[#86B3B3]">you.</span>
            </h2>
            <div className="space-y-4 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-700 leading-relaxed mb-8">
              <p>
                Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference in whether therapy feels helpful or not. We know how important it is to find someone you truly feel comfortable with, and we’re here to help you do just that.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-outline !border-[#2B2B2B] !text-[#2B2B2B] hover:!bg-[#2B2B2B] hover:!text-white"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Right Main Photo (cols 9-12 on desktop) */}
          <div className="order-3 lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                alt="Counseling office room in Newbury Park"
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
