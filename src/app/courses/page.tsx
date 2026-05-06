"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";

// ─── Types ────────────────────────────────────────────────────────────────────
type CourseCategory = "All" | "Design" | "Development" | "Digital Marketing" | "Testing" | "DevOps";

interface Course {
  id: string;
  title: string;
  category: Exclude<CourseCategory, "All">;
  duration: string;
  level: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  badge?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const courses: Course[] = [
  {
    id: "uiux",
    title: "UI/UX Design Mastery",
    category: "Design",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviewCount: 27,
    featured: true,
    badge: "Top Pick",
  },
  {
    id: "mern",
    title: "MERN/MEAN Full Stack",
    category: "Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewCount: 27,
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Program",
    category: "Digital Marketing",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    rating: 4.7,
    reviewCount: 27,
  },
  {
    id: "testing",
    title: "Software Testing",
    category: "Testing",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviewCount: 27,
  },
  {
    id: "devops",
    title: "DevOps",
    category: "DevOps",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewCount: 27,
    badge: "High Demand",
  },
];

const categories: CourseCategory[] = [
  "All", "Design", "Development", "Digital Marketing", "Testing", "DevOps",
];

// ─── How It Works steps ───────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    description:
      "Step into the future with top trending courses — whether you're into design, coding, system operations, or digital marketing. There's a perfect path waiting for you. Start learning now, build a future-ready profession.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Learn By Doing",
    description:
      "Hands-on learning helps you understand concepts faster and retain knowledge longer. By working on real projects, you gain practical experience and build confidence. Turn theory into action and master skills that truly matter.",
    icon: "🛠️",
  },
  {
    number: "03",
    title: "Recordings of Live Sessions",
    description:
      "All our live sessions are recorded so you can review them whenever you need. Perfect for revising tough topics or catching up on missed classes.",
    icon: "🎥",
  },
  {
    number: "04",
    title: "Job Placement Guide",
    description:
      "Our job placement program covers interview preparation, freelancing guide, resume building, and internship opportunities with our partnered companies — guiding you step by step to help you crack interviews and secure your dream job.",
    icon: "💼",
  },
  {
    number: "05",
    title: "Certified to Succeed",
    description:
      "Earn both a course completion certificate and an internship certificate to showcase your skills and practical experience. Step into the professional world with confidence and recognition.",
    icon: "🏆",
  },
  {
    number: "06",
    title: "Lifetime Mentorship",
    description:
      "Get continuous support through our lifetime mentorship program, guiding you every step of your career journey. Enjoy unlimited support anytime you need it.",
    icon: "🌱",
  },
];

// ─── Category pill colours ────────────────────────────────────────────────────
const categoryColor: Record<string, { bg: string; text: string }> = {
  Design:            { bg: "rgba(168,85,247,0.12)", text: "#7c3aed" },
  Development:       { bg: "rgba(59,130,246,0.12)", text: "#1d4ed8" },
  "Digital Marketing": { bg: "rgba(249,115,22,0.12)", text: "#c2410c" },
  Testing:           { bg: "rgba(236,72,153,0.12)", text: "#be185d" },
  DevOps:            { bg: "rgba(20,184,166,0.12)", text: "#0f766e" },
};

// ─── Inline CourseCard (override if you prefer to keep the component file) ────
function InlineCourseCard({ course }: { course: Course }) {
  const colors = categoryColor[course.category] ?? { bg: "#f3f4f6", text: "#374151" };
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E4DC",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(31,61,46,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Coloured top strip */}
      <div style={{ height: "6px", backgroundColor: "#1F3D2E" }} />

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        {/* Category + Badge row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.6px",
            padding: "4px 12px", borderRadius: "99px",
            backgroundColor: colors.bg, color: colors.text,
          }}>
            {course.category}
          </span>
          {course.badge && (
            <span style={{
              fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.5px",
              padding: "4px 10px", borderRadius: "99px",
              backgroundColor: "#C8F135", color: "#1F3D2E",
            }}>
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "19px", fontWeight: 700, color: "#1A1A1A",
          lineHeight: 1.3, margin: 0,
        }}>
          {course.title}
        </h3>

        {/* Level */}
        <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
          {course.level}
        </p>

        {/* Rating + Duration */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#FBBF24", fontSize: "14px" }}>★★★★★</span>
            <span style={{ fontSize: "12.5px", color: "#374151", fontWeight: 600 }}>
              {course.rating}
            </span>
            <span style={{ fontSize: "12px", color: "#9CA3AF" }}>
              ({course.reviewCount})
            </span>
          </div>
          <span style={{ fontSize: "12.5px", color: "#6B7280", fontWeight: 500 }}>
            🕐 {course.duration}
          </span>
        </div>

        {/* CTA */}
        <a
          href={`/contact`}
          style={{
            display: "block", textAlign: "center",
            padding: "12px", borderRadius: "10px",
            backgroundColor: "#1F3D2E", color: "#C8F135",
            fontSize: "13.5px", fontWeight: 700,
            letterSpacing: "0.4px", textDecoration: "none",
            transition: "background 0.18s ease",
            marginTop: "4px",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#162e20"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1F3D2E"; }}
        >
          Join Now →
        </a>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CoursesPage() {
  const [active, setActive] = useState<CourseCategory>("All");
  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "72px 28px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase",
              color: "#C8F135", marginBottom: "12px", fontWeight: 500,
            }}>
              Top Picks for Your Career Journey
            </p>
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700,
              color: "#FCFBF7", letterSpacing: "-1px", lineHeight: 1.1,
              marginBottom: "18px",
            }}>
              Master High-Demand Skills<br />
              <span style={{ color: "#C8F135", fontStyle: "italic" }}>With Our Online Courses.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.65)", maxWidth: "480px", margin: "0 auto" }}>
              Beginner to Advanced programs. Practical training. Real outcomes.
            </p>
          </div>
        </section>

        {/* ── Filter Tabs ───────────────────────────────────────────────────── */}
        <div style={{
          backgroundColor: "#FCFBF7", borderBottom: "1px solid #E8E4DC",
           top: "68px", zIndex: 40,
        }}>
          <div style={{
            maxWidth: "1200px", margin: "0 auto", padding: "0 28px",
            display: "flex", gap: "4px", overflowX: "auto",
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "14px 20px", borderRadius: 0, border: "none", cursor: "pointer",
                  whiteSpace: "nowrap", fontSize: "13px",
                  fontWeight: active === cat ? 600 : 400,
                  color: active === cat ? "#1F3D2E" : "#6B7280",
                  backgroundColor: "transparent",
                  borderBottom: active === cat ? "2.5px solid #1F3D2E" : "2.5px solid transparent",
                  transition: "all 0.18s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Course Grid ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "56px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Results count */}
            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "28px" }}>
              Showing <strong style={{ color: "#1A1A1A" }}>{filtered.length}</strong> course{filtered.length !== 1 ? "s" : ""}
              {active !== "All" ? ` in ${active}` : ""}
            </p>

            <div
              className="courses-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
            >
              {filtered.map((course) => (
                <InlineCourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "80px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{
                fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase",
                color: "#1F3D2E", marginBottom: "10px", fontWeight: 500,
              }}>
                Step Into Your Learning Journey
              </p>
              <h2 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700,
                color: "#1A1A1A", letterSpacing: "-0.5px", margin: 0,
              }}>
                Discover How It Works
              </h2>
            </div>

            {/* Steps grid */}
            <div
              className="steps-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E4DC",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(31,61,46,0.10)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Step number watermark */}
                  <span style={{
                    position: "absolute", top: "12px", right: "16px",
                    fontSize: "48px", fontWeight: 800, color: "rgba(200,241,53,0.3)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    lineHeight: 1, userSelect: "none",
                  }}>
                    {step.number}
                  </span>

                  {/* Icon */}
                  <span style={{ fontSize: "28px", lineHeight: 1 }}>{step.icon}</span>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "17px", fontWeight: 700,
                    color: "#1A1A1A", margin: 0, lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "13.5px", color: "#6B7280",
                    lineHeight: 1.65, margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid   { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .courses-grid { grid-template-columns: 1fr !important; }
          .steps-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}