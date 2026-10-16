"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function SpecialtiesSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      title: "Anxiety & Panic Therapy",
      description:
        "Support for adults experiencing constant worry, panic sensations, muscle tension, difficulty sleeping, or the exhausting feeling of always bracing for something to go wrong. Integrating CBT, mindfulness, and body-oriented techniques to understand your nervous system and cultivate grounded relief.",
      href: "#contact",
      tag: "Adult Therapy • Evidence-Based",
    },
    {
      title: "Trauma-Informed Therapy & EMDR",
      description:
        "Care for adults navigating single-incident trauma as well as complex, long-standing patterns stemming from earlier life experiences or chronic stress. Paced carefully with an emphasis on safety, stabilization, and EMDR to help you feel regulated in daily life—not just during sessions.",
      href: "#contact",
      tag: "EMDR • Paced & Grounded",
    },
    {
      title: "Burnout & Perfectionism Support",
      description:
        "Dedicated therapeutic support for entrepreneurs, creatives, and professionals feeling disconnected or exhausted after years of pushing through stress. Therapy provides an intentional space to slow down, reconnect, and develop sustainable ways of living and working.",
      href: "#contact",
      tag: "Professionals & Creatives",
    },
  ];

  const faqs = [
    {
      question: "What concerns does Dr. Maya work with?",
      answer:
        "Dr. Maya specializes in therapy for adults navigating anxiety, panic, trauma, professional burnout, perfectionism, and high internal pressure. Many clients she supports are high-achieving, thoughtful, and self-aware individuals who feel 'functional' on the outside while quietly struggling with exhaustion, constant worry, or emotional overwhelm.",
    },
    {
      question: "Which therapeutic approaches does she use?",
      answer:
        "Dr. Maya takes a warm, collaborative, and grounded approach. She integrates evidence-based methods including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological aspects of their experiences.",
    },
    {
      question: "Does she offer in-person and online sessions?",
      answer:
        "Yes. Dr. Maya offers both in-person therapy at her Santa Monica, California office and secure telehealth sessions. Her Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
    },
    {
      question: "Who can access her telehealth sessions?",
      answer:
        "Telehealth sessions are conducted via secure, HIPAA-compliant video and are available to adult clients located anywhere in the state of California.",
    },
    {
      question: "How is trauma therapy paced?",
      answer:
        "Trauma work is paced carefully, with a central emphasis on safety, stabilization, and helping clients feel regulated in their daily lives—not just during sessions. Dr. Maya supports adults with single-incident trauma as well as more complex, long-standing relational and developmental stress.",
    },
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-28 scroll-mt-24" id="services">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Services Subsection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 lg:mb-28">
          {/* Left Column: Heading (cols 1-4) */}
          <div className="lg:col-span-4">
            <span className="eyebrow-text mb-3 block text-brand-sage">
              CLINICAL SPECIALTIES
            </span>
            <h3 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-serif font-light text-brand-dark leading-[1.15] sticky top-28">
              Primary <span className="script-accent text-[1.25em]">services</span><br />
              for adults.
            </h3>
          </div>

          {/* Right Column: 3 Primary Service Cards (cols 5-12) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-7 rounded-lg bg-[#FAF8F5] border border-[#E2DDD5]/70 hover:border-brand-sage/50 transition-colors"
                >
                  <div>
                    <span className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.12em] text-brand-sage block mb-3">
                      {service.tag}
                    </span>
                    <h4 className="text-xl sm:text-[1.35rem] font-serif font-light text-brand-dark mb-4 leading-snug">
                      {service.title}
                    </h4>
                    <p className="text-[0.875rem] text-neutral-700 font-sans font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={service.href}
                      className="btn-link-underline text-xs"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Subsection (Section 8 Continuation) */}
        <div className="pt-12 border-t border-[#E2DDD5] scroll-mt-24" id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: FAQ Heading */}
            <div className="lg:col-span-4">
              <span className="eyebrow-text mb-3 block text-brand-sage">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[2.85rem] font-serif font-light text-brand-dark leading-[1.15]">
                Common <span className="script-accent text-[1.25em]">questions</span><br />
                &amp; clarity.
              </h3>
              <p className="mt-4 text-sm font-sans font-light text-brand-mutedText leading-relaxed">
                Clear answers based directly on Dr. Maya’s practice model, qualifications, and session options.
              </p>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;
                return (
                  <div
                    key={index}
                    className="border border-[#E2DDD5] rounded-md bg-[#FAF8F5] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      id={questionId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left font-serif text-lg sm:text-xl text-brand-dark hover:text-brand-sage focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:outline-none transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="font-light pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-brand-sage transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        className="px-6 pb-6 pt-1 text-[0.9375rem] text-neutral-700 font-sans font-light leading-relaxed border-t border-[#E2DDD5]/40"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
