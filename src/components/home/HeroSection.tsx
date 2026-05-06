"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#1F3D2E]">
      <section className="relative  min-h-[550px] w-full overflow-hidden bg-[#FCFBF7] rounded-b-[40px] flex flex-col">
        
        {/* Radial Background Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.12)_0%,transparent_70%)]" />
        </div>

        {/* 1. TOP HALF: Text Content (50% Height) */}
        <div className="relative z-20 flex h-[40vh] flex-col items-center justify-center px-6 text-center">
          {/* Decorative Flowers - Positioned relative to text block */}
          <div className="absolute left-[10%] top-1/4 animate-float hidden md:flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8F135] shadow-sm">
            <span className="text-[#1F3D2E] text-xl font-bold">＊</span>
          </div>
          <div className="absolute right-[10%] top-1/3 animate-float hidden md:flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8F135] shadow-sm">
            <span className="text-[#1F3D2E] text-xl font-bold">＊</span>
          </div>

          <h1 className="font-serif font-medium leading-[1.1] tracking-tight text-[#1F3D2E] text-4xl sm:text-5xl lg:text-6xl animate-fade-up">
            Empowering Students
            <br />
            Through <span className="italic underline decoration-[#C8F135] decoration-4 underline-offset-4">Expert</span> Learning
          </h1>

          <p className="mt-4 max-w-md md:max-w-xl text-[#1F3D2E]/70 text-sm md:text-base font-light leading-relaxed animate-fade-up">
            Master high-demand skills and bridge the gap from learning to earning with Feathertech Institute.
          </p>
        </div>

        {/* 2. BOTTOM HALF: Image & Stats (50% Height) */}
        <div className="relative flex h-[32vh] w-full flex-col items-center justify-end mt-25">
          
          {/* Stats - Floating slightly higher to stay in view */}
          <div className="hidden lg:flex absolute left-[5%] xl:left-[12%] bottom-[30%] z-30 animate-fade-up">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8F135] text-lg">🎓</div>
              <div>
                <p className="text-xl font-bold text-[#1F3D2E]">5000+</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Students</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-[5%] xl:right-[12%] bottom-[30%] z-30 animate-fade-up">
            <div className="flex flex-col items-start rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
              <div className="flex gap-0.5 mb-1 text-[#C8F135] text-xs">★★★★★</div>
              <p className="text-xl font-bold text-[#1F3D2E]">8+ Years</p>
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Experience</p>
            </div>
          </div>

          {/* Large Hero Image - Overflows container for massive look */}
          <div className="relative h-full w-full max-w-4xl flex items-end justify-center">
            <div className="relative h-[110%] w-full z-10">
              <Image
                src="/hero/hero-section.png"
                alt="Instructor"
                fill
                className="object-contain object-bottom scale-125 lg:scale-150 origin-bottom"
                priority
              />
              {/* Soft background circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] aspect-square bg-gray-100/50 rounded-full -z-10" />
            </div>
          </div>

          {/* Fixed Bottom CTA Bar - Positioned to end exactly with the display */}
          <div className="absolute bottom-6 z-40 flex items-center gap-1 rounded-full bg-white/90 p-1.5 shadow-2xl backdrop-blur-md border border-white animate-fade-up">
            <Link href="/courses" className="rounded-full bg-[#C8F135] px-8 py-3 text-sm font-bold text-[#1F3D2E] transition-all hover:scale-105">
              Explore Courses
            </Link>
            <Link href="/contact" className="rounded-full px-6 text-sm font-semibold text-[#1F3D2E]">
              Let&apos;s Connect
            </Link>
          </div>
        </div>

      </section>

      {/* <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style> */}
    </div>
  );
}