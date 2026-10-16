import React from "react";

export default function IntroSection() {
  return (
    <section className="bg-[#FAF8F5] w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Text Area (cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-brand-dark mb-10 max-w-3xl">
              You feel “functional” on the outside, but internally feel exhausted, overwhelmed, or constantly on edge.
            </h2>

            {/* Two-column text on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-700 leading-relaxed">
              <div className="space-y-4">
                <p className="font-sans text-[0.8125rem] sm:text-[0.875rem] font-medium uppercase tracking-[0.08em] text-brand-dark leading-snug">
                  A WARM, GROUNDED APPROACH TO SUSTAINABLE RELIEF AND REGULATION.
                </p>
                <p>
                  Many of the people I work with are high-achieving, thoughtful, and self-aware—yet quietly struggle with constant worry, tension in their body, difficulty sleeping, or a persistent sense that they are always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Therapy provides an intentional space to slow down, reconnect, and understand both the emotional and physiological sides of what you are experiencing. By integrating evidence-based methods—including CBT, EMDR, mindfulness-based practices, and body-oriented techniques—we work collaboratively at a pace that honors your safety and builds lasting internal resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Serene Image (cols 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src="/images/intro_calm.jpg"
                alt="Calm, mindful presence and grounding"
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
