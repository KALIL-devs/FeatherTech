"use client";

import React from 'react';
import { Users, ClipboardCheck, Trophy, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Certified Experts",
      description: "Our instructors hold industry certifications and bring real-world project experience to every session.",
      // Icon is now white to sit on the dark green background or green to sit on white
      icon: <Users className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "Proven Results",
      description: "Hundreds of students have landed jobs and cracked competitive exams after training with us.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "Award Winning",
      description: "Recognized as one of the top ed-tech institutes for curriculum quality and student outcomes.",
      icon: <Trophy className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "Transparent Reporting",
      description: "Track your learning progress and milestones with detailed dashboards and mentor feedback.",
      icon: <BarChart3 className="w-5 h-5 text-[#D2FF3A]" />,
    },
  ];

  return (
    // Swapped: bg-white -> bg-[#1F3D2E]
    <div className="bg-[#F0EFE9]" suppressHydrationWarning>
    <section className="bg-[#1F3D2E] py-20 px-6 rounded-b-[36px]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-1">
              {/* Swapped dot colors */}
              <div className="w-3.5 h-3.5 rounded-full bg-white" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#D2FF3A]" />
            </div>
            {/* Swapped: text-[#1F3D2E] -> text-[#D2FF3A] */}
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D2FF3A]">Why Choose Us</span>
          </div>
          {/* Swapped: text-[#1A1A1A] -> text-white */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Why Our Students Believe We&apos;re Different
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left: Image Mosaic */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[380px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team working"
                // Removed grayscale to make images pop against the dark bg, or keep if you prefer the aesthetic
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 -left-3 bg-white p-2 rounded-full rotate-12 shadow-lg">
                <Trophy className="w-5 h-5 text-[#1F3D2E]" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden flex-1 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Swapped: bg-[#B5E48C] -> bg-white */}
              <div className="bg-white rounded-3xl flex-1 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-36 border-4 border-[#1F3D2E]/10 rounded-full flex flex-col items-center justify-around py-4">
                  <div className="w-2 h-2 rounded-full bg-[#1F3D2E]" />
                  <div className="w-full h-[2px] bg-[#1F3D2E] rotate-12" />
                  <div className="w-2 h-2 rounded-full bg-[#1F3D2E]" />
                  <div className="w-full h-[2px] bg-[#1F3D2E] -rotate-12" />
                  <div className="w-2 h-2 rounded-full bg-[#1F3D2E]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Points */}
          {/* Swapped: bg-[#1F3D2E] -> bg-white */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 shadow-2xl relative overflow-hidden">
            {/* Accent Blur: Adjusted to be light green instead of white for the white background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2FF3A]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            {points.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start">
                {/* Swapped: bg-[#B5E48C] -> bg-[#1F3D2E] */}
                <div className="bg-[#1F3D2E] p-3 rounded-xl mb-4 shadow-sm">
                  {item.icon}
                </div>
                {/* Swapped: text-white -> text-[#1A1A1A] */}
                <h4 className="text-[#1A1A1A] text-xl font-bold mb-2">{item.title}</h4>
                {/* Swapped: text-white/70 -> text-gray-600 */}
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>



    </div>

  );
};

export default WhyChooseUs;