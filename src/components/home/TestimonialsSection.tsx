"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Thangaselvi",
    role: "UI/UX Student",
    course: "UI/UX Design",
    quote:
      "I had a great learning experience at Feather Tech Institute. The training was very practical, well-structured, and easy to understand. The trainers were knowledgeable and supportive, guiding us with real-time examples throughout.",
    avatar: "TH",
    rating: 5,
  },
  {
    name: "Priyanka Sundharesan",
    role: "UI/UX Student",
    course: "UI/UX Design",
    quote:
      "I joined because of my interest in art and creativity. At the beginning, I had no knowledge of UI/UX design or Figma. Through consistent daily assignments, I developed strong practical skills and real confidence.",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Freelance Marketer",
    course: "Digital Marketing",
    quote:
      "Never thought digital marketing could change my career path! In 60 days, I learned how to run ad campaigns, create reels & convert clients. My first client project gave me ₹22,000 profit. Thanks to my mentor for pushing me beyond limits.",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "VPM. Prithivi Rajan",
    role: "UI/UX Student",
    course: "UI/UX Design",
    quote:
      "I recently received my welcome kit from Feather Tech Institute and I truly appreciate it! The sketchbook, pens, and T-shirt are really motivating and make me feel more connected to the learning journey.",
    avatar: "PR",
    rating: 5,
  },
  {
    name: "Karthik",
    role: "Job Switcher → Freelancer",
    course: "Digital Marketing",
    quote:
      "Na oru normal sales job la irundhen — after this 60 days digital marketing course, I cracked my first client project worth ₹30K. Learned Meta Ads, content strategy, and client closing tips. Now full confidence to work as a freelancer! Thanks mentor.",
    avatar: "KA",
    rating: 5,
  },
  {
    name: "Anusha",
    role: "Work from Home Mom",
    course: "Digital Marketing",
    quote:
      "I wanted to restart my career after a 4-year gap. This course gave me confidence and skills. Now I manage 2 small business Instagram pages and earn ₹25K monthly. Thanks to the mentor for patient teaching and weekly client task support.",
    avatar: "AN",
    rating: 5,
  },
  {
    name: "Janani Selvapriya",
    role: "UI/UX Student",
    course: "UI/UX Design",
    quote:
      "Great experience! The UI/UX sessions were well-structured and beginner-friendly. Learning Figma felt smooth, and the hands-on practice gave me real confidence. This course truly helped me unlock my potential in design.",
    avatar: "JS",
    rating: 5,
  },
  {
    name: "Soundarya Vasudevan",
    role: "UI/UX Student",
    course: "UI/UX Design",
    quote:
      "Feather Tech Institute is a growing institute offering tech-focused programs. Their dedicated UI/UX course shows they're adapting to current industry needs — which is a great sign for learners like me.",
    avatar: "SV",
    rating: 5,
  },
  {
    name: "V. Deepak",
    role: "Freelancer",
    course: "Digital Marketing",
    quote:
      "From zero knowledge to closing a ₹35,000 client project in 2 months! This course taught me branding, ad setup, content planning — everything practical. Mentor oda feedback life changing da!",
    avatar: "VD",
    rating: 5,
  },
];

// Duplicate for seamless infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.45; // px per frame

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        // Reset when first half scrolled through (seamless loop)
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section className="bg-[#F0EFE9] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[3px] text-[#1F3D2E] mb-3">
          Student Stories
        </p>

        {/* Heading */}
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
          Voices of{" "}
          <span className="text-[#1F3D2E] italic">Success</span>
        </h2>

        {/* Google rating badge */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[#C8F135] text-lg">★</span>
            ))}
          </div>
          <span className="text-sm font-semibold text-[#1A1A1A]">5.0</span>
          <span className="text-sm text-[#6B7280]">· Google Reviews</span>
        </div>
      </div>

      {/* Scrolling track — full bleed */}
      <div
        className="relative w-full"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #F0EFE9, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #F0EFE9, transparent)" }} />

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 will-change-transform"
            style={{ width: "max-content" }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-[340px] shrink-0 bg-white rounded-2xl border border-[#E8E4DC] p-7 flex flex-col gap-5 shadow-[0_2px_20px_rgba(31,61,46,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(31,61,46,0.12)]"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-[#C8F135] text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-[15px] italic leading-[1.75] text-[#374151] border-l-[3px] border-[#C8F135] pl-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Course tag */}
                <span className="inline-block self-start px-3 py-1 rounded-full bg-[#C8F135]/20 border border-[#1F3D2E]/15 text-[11px] font-medium text-[#1F3D2E]">
                  {t.course}
                </span>

                {/* Person */}
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#1F3D2E] text-[#C8F135] flex items-center justify-center text-xs font-bold shrink-0">
                    {t.avatar}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-[12px] text-[#6B7280] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}