"use client";

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "300+", label: "Sessions Delivered" },
  { value: "10+", label: "Courses Offered" },
  { value: "5+", label: "Expert Mentors" },
];

export default function StatsSection() {
  return (
    /* Added 'pb-32' to give room for the curve and 'relative' */
    <section className="relative bg-[#1F3D2E] pt-20 pb-32 px-6 overflow-hidden ">
      
      {/* Radial glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[10%] w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(210,255,58,0.08)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(210,255,58,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[3px] text-[#D2FF3A] mb-3 opacity-90">
          Here's what we've
        </p>

        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-[#FCFBF7] mb-14 leading-tight">
          Accomplished with Feather Tech Institute
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="animate-fade-up text-center bg-white/[0.03] backdrop-blur-sm border border-[#D2FF3A]/10 rounded-2xl px-6 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D2FF3A]/40 hover:bg-white/[0.06]"
            >
              <p className="font-serif text-5xl font-bold text-[#D2FF3A] leading-none mb-3"
                style={{ textShadow: "0 4px 10px rgba(210,255,58,0.2)" }}>
                {s.value}
              </p>
              <div className="h-px w-10 mx-auto bg-gradient-to-r from-transparent via-[#D2FF3A] to-transparent opacity-50 mb-3" />
              <p className="text-[13px] font-medium uppercase tracking-[1.5px] text-[#FCFBF7]/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#1F3D2E]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.67,54.1,124,66.52,201.27,66.52,258.12,66.52,291,62,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}