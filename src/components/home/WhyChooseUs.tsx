"use client";

import React from 'react';
import { Users, ClipboardCheck, Trophy, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Industry-Expert Trainers",
      description: "Our instructors are working professionals with hands-on experience in UI/UX, MERN Stack, DevOps, and more — bringing real projects into every class.",
      icon: <Users className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "100% Placement Support",
      description: "From resume building to mock interviews, we guide every student until they land their dream job in top tech companies.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "Recognised Excellence",
      description: "Feathertech Institute is recognized as one of Madurai's top tech training institutes for curriculum quality and career outcomes.",
      icon: <Trophy className="w-5 h-5 text-[#D2FF3A]" />,
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with structured milestones, mentor feedback, and project-based assessments throughout the course.",
      icon: <BarChart3 className="w-5 h-5 text-[#D2FF3A]" />,
    },
  ];

  return (
    <div className="bg-[#F0EFE9]" suppressHydrationWarning>
      <section className="bg-[#1F3D2E] py-20 px-6 rounded-b-[36px]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-1">
                <div className="w-3.5 h-3.5 rounded-full bg-white" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#D2FF3A]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D2FF3A]">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              Why Learners Choose Feathertech
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left: Image Mosaic */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[380px] border border-white/10">
                <img
                  src="/images/home/students_collaborating.png"
                  alt="Feathertech students collaborating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-8 -left-3 bg-white p-2 rounded-full rotate-12 shadow-lg">
                  <Trophy className="w-5 h-5 text-[#1F3D2E]" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-3xl overflow-hidden flex-1 border border-white/10">
                  <img
                    src="/images/home/training_session.png"
                    alt="Training session at Feathertech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-3xl flex-1 flex flex-col items-center justify-center relative overflow-hidden p-4">
                  <p className="text-[#1F3D2E] text-3xl font-black leading-none">500+</p>
                  <p className="text-[#1F3D2E]/60 text-xs font-semibold uppercase tracking-widest mt-1 text-center">Students Placed</p>
                </div>
              </div>
            </div>

            {/* Right: Feature Points */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2FF3A]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

              {points.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-start">
                  <div className="bg-[#1F3D2E] p-3 rounded-xl mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-[#1A1A1A] text-xl font-bold mb-2">{item.title}</h4>
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