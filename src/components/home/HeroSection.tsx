"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#004B23]" suppressHydrationWarning>
      <section className="relative overflow-hidden bg-[#FCFBF7] rounded-b-[36px] max-h-[820px] min-h-[640px]">

        {/* Radial Scholar Green glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,75,35,0.12)_0%,transparent_70%)]" />
        </div>

        {/* Decorative bursts */}
        <div className="absolute left-14 top-16 z-10 flex h-8 w-8 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-[10px] bg-[#B5E48C]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#004B23" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute right-14 top-20 z-10 flex h-8 w-8 animate-[float_5s_ease-in-out_1.5s_infinite] items-center justify-center rounded-[10px] bg-[#B5E48C]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#004B23" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* IMAGE — bottom-0 so it sits flush */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] w-[500px] h-[100%]">
          <Image
            src="/hero/hero-section.png"
            alt="Instructor"
            fill
            sizes="100vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* HEADLINE */}
        <div className="relative z-10 flex flex-col items-center pt-10 text-center px-6">

          <h1 className="mb-3 max-w-[800px] animate-[fadeUp_0.7s_0.2s_cubic-bezier(0.16,1,0.3,1)_both] font-serif text-[62px] font-normal leading-[1.05] tracking-[-2px] text-[#004B23]">
            Empowering Students
            <br />
            Through{" "}
            <span className="relative italic after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-[#B5E48C] after:origin-left after:scale-x-0 after:animate-[lineReveal_0.5s_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              Expert
            </span>{" "}
            Learning
          </h1>

          <p className="max-w-[360px] animate-[fadeUp_0.7s_0.3s_cubic-bezier(0.16,1,0.3,1)_both] text-[13.5px] font-light leading-[1.85] text-[#004B23]">
            From coding to competitive exams, we deliver proven training that elevates your career.
          </p>
        </div>

        {/* LEFT STAT CARD */}
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 z-20 flex items-center gap-3 rounded-[18px] border border-white/90 bg-white/60 px-4 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.07)] backdrop-blur-xl animate-[fadeUp_0.7s_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#B5E48C] text-lg">🎓</span>
          <div>
            <p className="text-[20px] font-medium leading-none tracking-tight text-[#004B23]">5000+</p>
            <p className="mt-1 text-[11px] font-light text-[#999]">Students Trained</p>
          </div>
        </div>

        {/* RIGHT STAT CARD */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 z-20 rounded-[18px] border border-white/90 bg-white/60 px-4 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.07)] backdrop-blur-xl animate-[fadeUp_0.7s_0.6s_cubic-bezier(0.16,1,0.3,1)_both]">
          <p className="mb-1 text-[11px] tracking-[2px] text-[#B5E48C]">★★★★★</p>
          <p className="text-[20px] font-medium leading-none tracking-tight text-[#004B23]">8+ Yrs</p>
          <p className="mt-1 text-[11px] font-light text-[#999]">Experience</p>
        </div>

        {/* CTA BAR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-0.5 rounded-full border border-white/80 bg-white/85 p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-2xl whitespace-nowrap animate-[fadeUp_0.7s_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
          <Link
            href="/courses"
            className="rounded-full bg-[#B5E48C] px-7 py-2.5 text-[13px] font-semibold text-[#004B23] transition-opacity hover:opacity-80"
          >
            Explore Courses
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-6 py-2.5 text-[13px] font-light text-[#444] transition-colors hover:text-[#004B23]"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Keyframe animations are defined globally in globals.css */}

      </section>
    </div>
  );
}