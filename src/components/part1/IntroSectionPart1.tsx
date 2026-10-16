import React from "react";

export default function IntroSectionPart1() {
  return (
    <section className="bg-[#FBF9F4] w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Text Area */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-[#2B2B2B] mb-10 max-w-3xl">
              You’re holding onto hope that life can be better than it is right now.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-700 leading-relaxed">
              <div className="space-y-4">
                <p className="font-sans text-[0.8125rem] sm:text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[#2B2B2B] leading-snug">
                  AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
                </p>
                <p>
                  Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Portrait Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                alt="Hope and healing through counseling"
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
