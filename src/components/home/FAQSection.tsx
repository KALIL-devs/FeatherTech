"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need prior experience to enroll in these courses?",
      answer: "Most of our foundation courses are beginner-friendly and require no prior experience. However, for advanced certifications, we recommend having a basic understanding of the subject or completing our introductory modules first.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes! Upon successful completion of all course requirements and projects, you will receive an industry-recognized digital certificate from Feather Tech Institute that you can share on LinkedIn or your resume.",
    },
    {
      question: "Are the classes live or pre-recorded?",
      answer: "We offer a hybrid model. You'll get access to high-quality pre-recorded lessons for self-paced learning, supplemented by weekly live Q&A sessions and workshops with our expert mentors.",
    },
    {
      question: "What kind of career support do you provide?",
      answer: "We provide comprehensive career support including resume building, portfolio reviews, mock interviews, and exclusive access to our partner hiring network.",
    },
    {
      question: "Is there a refund policy if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee. If you feel the course isn't the right fit for you within the first week of enrollment, we will provide a full refund, no questions asked.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F0EFE9] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex -space-x-1">
              <div className="w-3.5 h-3.5 rounded-full bg-[#D2FF3A]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#1F3D2E]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#1F3D2E]">Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3D2E] mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] text-[15px] leading-relaxed max-w-lg mx-auto">
            Everything you need to know about our training programs and how to get started on your tech journey.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                ? 'border-[#D2FF3A] bg-white shadow-md'
                : 'border-[#E8E4DC] bg-white hover:border-[#D2FF3A]/50'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-[#D2FF3A] text-[#1F3D2E]' : 'bg-[#F0EFE9] text-[#6B7280]'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className={`text-[15px] font-semibold ${openIndex === index ? 'text-[#1F3D2E]' : 'text-[#1A1A1A]'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 shrink-0 ml-4 text-[#6B7280] transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#1F3D2E]' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 ml-12 text-[#6B7280] text-[14px] leading-relaxed border-t border-[#E8E4DC] pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-[#1F3D2E] rounded-[2rem] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-white/70 text-[14px] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>
            <button className="bg-[#D2FF3A] text-[#1F3D2E] px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors">
              Get in Touch
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default FAQSection;