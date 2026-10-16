import React from "react";
import Link from "next/link";

export default function HowWeWorkSectionPart1() {
  return (
    <section className="bg-[#DFD5C6] w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Content Area (cols 1-8) */}
          <div className="order-1 lg:col-span-8 flex flex-col justify-start">
            <span className="eyebrow-text mb-4 sm:mb-5 block text-neutral-600">
              HOW WE WORK
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-[#2B2B2B] mb-8 lg:mb-10 max-w-3xl">
              We’re here to make a difference.
            </h2>

            {/* Two-Column Copy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-800 leading-relaxed mb-10">
              <div className="space-y-4">
                <p className="font-sans text-[0.8125rem] sm:text-[0.875rem] font-medium uppercase tracking-[0.08em] text-neutral-900 leading-snug">
                  THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT’S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
                </p>
                <p>
                  Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                href="/therapists-newbury-park"
                className="btn-link-underline !text-[#2B2B2B] !border-[#515151]"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>

          {/* Right Portrait Photo */}
          <div className="order-2 lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[380px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[10/14] overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
                alt="Therapist in session supporting client"
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
