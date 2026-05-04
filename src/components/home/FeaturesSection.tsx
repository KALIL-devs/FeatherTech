"use client";

import React from 'react';
import { BookOpen, Users, Smartphone, Briefcase, Share2, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { title: "High Demand Courses", icon: <BookOpen className="w-8 h-8 text-[#004B23]" /> },
    { title: "Experienced Mentors", icon: <Users className="w-8 h-8 text-[#004B23]" /> },
    { title: "More Learning Options", icon: <Smartphone className="w-8 h-8 text-[#004B23]" /> },
    { title: "Career Support", icon: <Briefcase className="w-8 h-8 text-[#004B23]" /> },
    { title: "Community Support", icon: <Share2 className="w-8 h-8 text-[#004B23]" /> },
    { title: "Certification Programs", icon: <Award className="w-8 h-8 text-[#004B23]" /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#004B23] via-[#003d1e] to-[#012b15] text-white py-20 px-6 overflow-hidden">
      {/* Decorative glow blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-[#B5E48C] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-[#B5E48C] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B5E48C] mb-3 opacity-90">
          What We Offer
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold italic mb-4 leading-tight">
          Accomplished with Feather Tech Institute
        </h2>

        {/* Sub-heading */}
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Your Pathway to Success Starts Here
        </h3>
        <p className="max-w-2xl mx-auto text-[15px] leading-relaxed text-white/75 mb-14">
          We provide practical, affordable online courses to help you build real-world skills and launch your career with confidence.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 flex flex-col items-center justify-center shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-[#B5E48C] p-4 rounded-2xl mb-6 shadow-lg transition-transform duration-300 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white tracking-wide">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;