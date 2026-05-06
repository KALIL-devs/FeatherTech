"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CourseOfferings = () => {
  const courses = [
    {
      title: "UI/UX Design Masterclass",
      description: "Master the art of creating intuitive digital experiences with industry-standard tools and workflows.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80",
      highlight: false,
    },
    {
      title: "Full-Stack Development",
      description: "Build robust scalable applications from scratch using modern frameworks like React, Node, and Next.js.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      highlight: true,
    },
    {
      title: "Digital Growth Strategy",
      description: "Learn the data-driven techniques used by top tech companies to scale products and acquire users.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#1F3D2E] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-1">
                <div className="w-3.5 h-3.5 rounded-full bg-[#C8F135]" />
                <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#C8F135]">Our Courses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Empower Your Career <br /> with Tech Expertise
            </h2>
          </div>

          <button className="self-start md:self-auto bg-white text-[#1F3D2E] px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#C8F135] transition-colors group">
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-6 flex flex-col transition-transform hover:-translate-y-2 duration-300 ${course.highlight
                ? 'bg-[#C8F135] text-[#1F3D2E]'
                : 'bg-white/5 border border-white/10 text-white'
                }`}
            >
              {course.highlight ? (
                <>
                  <div className="mb-8 px-2">
                    <h4 className="text-2xl font-bold mb-3">{course.title}</h4>
                    <p className="opacity-75 text-sm leading-relaxed mb-6 border-t border-[#1F3D2E]/10 pt-4">
                      {course.description}
                    </p>
                    <button className="flex items-center gap-2 font-bold text-sm group">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="mt-auto h-56 rounded-3xl overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale" />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8 h-56 rounded-3xl overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="px-2">
                    <h4 className="text-2xl font-bold mb-3">{course.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 border-t border-white/10 pt-4">
                      {course.description}
                    </p>
                    <button className="flex items-center gap-2 text-[#C8F135] font-bold text-sm group">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;