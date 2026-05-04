"use client";

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "300+", label: "Sessions Delivered" },
  { value: "10+", label: "Courses Offered" },
  { value: "5+", label: "Expert Mentors" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#004B23] py-20 px-6 overflow-hidden">
      {/* Radial glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[10%] w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(181,228,140,0.08)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(181,228,140,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[3px] text-[#B5E48C] mb-3 opacity-90">
          Our Impact
        </p>

        {/* Heading */}
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-[#FCFBF7] mb-14 leading-tight">
          Accomplished with Feather Tech Institute
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="animate-fade-up text-center bg-white/[0.03] backdrop-blur-sm border border-[#B5E48C]/10 rounded-2xl px-6 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B5E48C]/40 hover:bg-white/[0.06]"
            >
              <p className="font-serif text-5xl font-bold text-[#B5E48C] leading-none mb-3"
                style={{ textShadow: "0 4px 10px rgba(181,228,140,0.2)" }}>
                {s.value}
              </p>
              <div className="h-px w-10 mx-auto bg-gradient-to-r from-transparent via-[#B5E48C] to-transparent opacity-50 mb-3" />
              <p className="text-[13px] font-medium uppercase tracking-[1.5px] text-[#FCFBF7]/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}