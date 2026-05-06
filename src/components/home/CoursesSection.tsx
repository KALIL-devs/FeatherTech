"use client";
import Link from "next/link";
import { courses } from "@/lib/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesSection() {
  const preview = courses.slice(0, 3);

  return (
    <div className="bg-[#1F3D2E]">
      <section className="bg-[#FCFBF7] rounded-[36px] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-15">
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="flex flex-col gap-6 mb-10 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-4">
            <div>
              <p className="text-[11px] sm:text-[11.5px] font-medium tracking-[2.5px] uppercase text-[#1F3D2E] mb-2.5">
                What We Offer
              </p>
              <h2
                className="font-bold text-[#1A1A1A] leading-[1.1] tracking-[-0.5px] text-[clamp(26px,5vw,40px)]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Courses Designed for
                <br />
                <span className="text-[#1F3D2E] italic">Real Careers</span>
              </h2>
            </div>

            <Link
              href="/courses"
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] border-[1.5px] border-[#1F3D2E] text-[#1F3D2E] text-[13px] font-medium no-underline whitespace-nowrap transition-all duration-[180ms] ease-in-out hover:bg-[#1F3D2E] hover:text-[#FCFBF7]"
            >
              View All Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {preview.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}