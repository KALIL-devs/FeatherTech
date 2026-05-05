"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses, CourseCategory } from "@/lib/courses";

const categories: (CourseCategory | "All")[] = [
  "All", "Technology", "Competitive Exams", "Design", "Business",
];

export default function CoursesPage() {
  const [active, setActive] = useState<CourseCategory | "All">("All");
  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>
        {/* Hero */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "72px 28px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D2FF3A", marginBottom: "12px", fontWeight: 500 }}>
              Curriculum
            </p>
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700,
              color: "#FCFBF7", letterSpacing: "-1px", lineHeight: 1.1,
            }}>
              Every Course,<br />
              <span style={{ color: "#D2FF3A", fontStyle: "italic" }}>Every Ambition.</span>
            </h1>
          </div>
        </section>

        {/* Filter Tabs */}
        <div style={{ backgroundColor: "#FCFBF7", borderBottom: "1px solid #E8E4DC", top: "68px", zIndex: 40 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px", display: "flex", gap: "4px", overflowX: "auto" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "14px 20px", borderRadius: 0, border: "none", cursor: "pointer",
                whiteSpace: "nowrap", fontSize: "13px", fontWeight: active === cat ? 600 : 400,
                color: active === cat ? "#1F3D2E" : "#6B7280",
                backgroundColor: "transparent",
                borderBottom: active === cat ? "2.5px solid #1F3D2E" : "2.5px solid transparent",
                transition: "all 0.18s ease",
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "56px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} featured={course.featured} />
              ))}
            </div>
          </div>
        </section>

        {/* Fee Table */}
        {/* <section style={{ backgroundColor: "#F0EFE9", padding: "72px 28px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", marginBottom: "10px", fontWeight: 500 }}>Transparent Pricing</p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700,
              color: "#1A1A1A", marginBottom: "36px",
            }}>Course Fee Schedule</h2>

            <div style={{ borderRadius: "16px", border: "1px solid #E8E4DC", overflow: "hidden", backgroundColor: "#FFFFFF" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                <thead>
                  <tr style={{ backgroundColor: "#1F3D2E" }}>
                    {["Course", "Category", "Duration", "Level", "Fee (INR)"].map((h) => (
                      <th key={h} style={{
                        padding: "14px 20px", textAlign: "left",
                        fontSize: "11px", fontWeight: 600, letterSpacing: "1px",
                        textTransform: "uppercase", color: "#D2FF3A",
                        borderBottom: "none",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c, i) => (
                    <tr key={c.id} style={{
                      backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAF8",
                      borderBottom: "1px solid #F0EFE9",
                      transition: "background 0.15s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "rgba(210,255,58,0.1)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = i % 2 === 0 ? "#FFFFFF" : "#FAFAF8"; }}>
                      <td style={{ padding: "14px 20px", fontSize: "13.5px", fontWeight: 500, color: "#1A1A1A" }}>{c.title}</td>
                      <td style={{ padding: "14px 20px", fontSize: "12.5px", color: "#6B7280" }}>{c.category}</td>
                      <td style={{ padding: "14px 20px", fontSize: "12.5px", color: "#6B7280" }}>{c.duration}</td>
                      <td style={{ padding: "14px 20px" }}>
                        <span style={{
                          fontSize: "11px", padding: "3px 10px", borderRadius: "99px",
                          backgroundColor: c.level === "Beginner" ? "rgba(210,255,58,0.25)" : c.level === "Intermediate" ? "rgba(251,191,36,0.2)" : "rgba(239,68,68,0.1)",
                          color: c.level === "Beginner" ? "#1F3D2E" : c.level === "Intermediate" ? "#92400e" : "#991b1b",
                        }}>{c.level}</span>
                      </td>
                      <td style={{ padding: "14px 20px", fontSize: "14px", fontWeight: 700, color: "#1F3D2E" }}>
                        ₹{c.fee.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "14px", fontSize: "12px", color: "#6B7280" }}>
              * EMI options available. Contact us for scholarship details.
            </p>
          </div>
        </section> */}
      </main>
      <Footer />
      <style>{`@media(max-width:900px){.courses-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.courses-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
