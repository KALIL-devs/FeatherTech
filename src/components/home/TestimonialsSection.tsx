"use client";

const testimonials = [
  {
    name: "Ananya Krishnan",
    role: "Software Engineer at Zoho",
    course: "Full-Stack Web Development",
    quote:
      "FeatherTech's structured curriculum and hands-on projects gave me the confidence to crack my first interview. The instructors are exceptional — patient and deeply knowledgeable.",
    avatar: "AK",
    rating: 5,
  },
  {
    name: "Rahul Subramaniam",
    role: "IRS Officer (UPSC 2024)",
    course: "UPSC Civil Services Foundation",
    quote:
      "The mock tests and current-affairs sessions were indispensable. The faculty's mentorship transformed my approach to GS preparation completely.",
    avatar: "RS",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Designer at Swiggy",
    course: "UI/UX Design Mastery",
    quote:
      "From zero design knowledge to a full-time offer in 4 months. The design system module alone was worth the entire fee — industry-level, practical, brilliant.",
    avatar: "PN",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F0EFE9] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[3px] text-[#1F3D2E] mb-3">
          Student Stories
        </p>

        {/* Heading */}
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-14 leading-tight">
          Voices of{" "}
          <span className="text-[#1F3D2E] italic">Success</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E8E4DC] p-7 flex flex-col gap-5 shadow-[0_2px_20px_rgba(31,61,46,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(31,61,46,0.12)]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-[#D2FF3A] text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-[15px] italic leading-[1.75] text-[#374151] border-l-[3px] border-[#D2FF3A] pl-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Course tag */}
              <span className="inline-block self-start px-3 py-1 rounded-full bg-[#D2FF3A]/20 border border-[#1F3D2E]/15 text-[11px] font-medium text-[#1F3D2E]">
                {t.course}
              </span>

              {/* Person */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#1F3D2E] text-[#D2FF3A] flex items-center justify-center text-xs font-bold shrink-0">
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
    </section>
  );
}
