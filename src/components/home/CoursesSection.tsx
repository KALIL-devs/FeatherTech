"use client";
import Link from "next/link";
import { courses } from "@/lib/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesSection() {
  const preview = courses.slice(0, 3);
  return (
    <div className="bg-[#004B23]" suppressHydrationWarning>
    <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }} className="rounded-t-[36px] rounded-b-[36px]">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ fontSize: "11.5px", fontWeight: 500, letterSpacing: "2.5px", textTransform: "uppercase", color: "#004B23", marginBottom: "10px" }}>
              What We Offer
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700,
              color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.1,
            }}>
              Courses Designed for<br />
              <span style={{ color: "#004B23", fontStyle: "italic" }}>Real Careers</span>
            </h2>
          </div>
          <Link href="/courses" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "11px 24px", borderRadius: "9px",
            border: "1.5px solid #004B23", color: "#004B23",
            fontSize: "13px", fontWeight: 500, textDecoration: "none",
            transition: "all 0.18s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#004B23"; e.currentTarget.style.color = "#FCFBF7"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#004B23"; }}>
            View All Courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {preview.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){#courses-preview-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){#courses-preview-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
    </div>
  );
}
