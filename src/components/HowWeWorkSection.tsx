import React from "react";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#D8CEBF] w-full py-16 sm:py-20 lg:py-24 scroll-mt-24" id="about">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Content Area (cols 1-8) */}
          <div className="order-1 lg:col-span-8 flex flex-col justify-start">
            <span className="eyebrow-text mb-4 sm:mb-5 block text-[#486F6B]">
              ABOUT DR. MAYA REYNOLDS, PSYD
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] font-serif font-light leading-[1.12] text-brand-dark mb-8 lg:mb-10 max-w-3xl">
              Warm, collaborative, and grounded care.
            </h2>

            {/* Two-Column Copy on Tablet/Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[0.9375rem] sm:text-base font-sans font-light text-neutral-800 leading-relaxed mb-10">
              <div className="space-y-4">
                <p className="font-sans text-[0.8125rem] sm:text-[0.875rem] font-medium uppercase tracking-[0.08em] text-neutral-900 leading-snug">
                  SESSIONS ARE STRUCTURED ENOUGH TO FEEL SUPPORTIVE, WHILE LEAVING SPACE FOR REFLECTION AND DEPTH.
                </p>
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
                </p>
                <p>
                  Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                href="#contact"
                className="btn-link-underline"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </div>
          </div>

          {/* Right Portrait Photo of Dr. Maya Reynolds (cols 9-12) */}
          <div className="order-2 lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[380px] lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[10/14] overflow-hidden shadow-sm">
              <img
                src="/images/dr_maya_reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
