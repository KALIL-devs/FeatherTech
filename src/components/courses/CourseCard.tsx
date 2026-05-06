import Link from "next/link";
import { Course } from "@/lib/courses";

const badgeConfig = {
  popular: { label: "⭐ Most Popular", bg: "#1F3D2E", color: "#C8F135" },
  new:     { label: "✦ New Batch",    bg: "#C8F135", color: "#1F3D2E" },
  hot:     { label: "🔥 In Demand",   bg: "#f59e0b", color: "#1c1100" },
};

const levelColor = {
  Beginner:     { bg: "rgba(210,255,58,0.2)", color: "#1F3D2E" },
  Intermediate: { bg: "rgba(251,191,36,0.15)", color: "#92400e" },
  Advanced:     { bg: "rgba(239,68,68,0.1)",   color: "#991b1b" },
};

type Props = { course: Course; featured?: boolean };

export default function CourseCard({ course, featured = false }: Props) {
  const badge = badgeConfig[course.badge];
  const level = levelColor[course.level];

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      borderRadius: "20px",
      border: "1px solid #E8E4DC",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 2px 16px rgba(31,61,46,0.06)",
      overflow: "hidden",
      transition: "all 0.25s ease",
      ...(featured ? { gridColumn: "span 2" } : {}),
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(31,61,46,0.13)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(31,61,46,0.06)";
      }}>

      {/* Image / Gradient placeholder */}
      <div style={{
        position: "relative",
        height: featured ? "200px" : "160px",
        background: course.image ? undefined : course.gradient,
        overflow: "hidden", flexShrink: 0,
      }}>
        {course.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={course.image} alt={course.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        )}
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45))",
        }} />
        {/* Badge */}
        <span style={{
          position: "absolute", top: "12px", left: "12px",
          borderRadius: "99px", padding: "4px 10px",
          fontSize: "10px", fontWeight: 600,
          backgroundColor: badge.bg, color: badge.color,
        }}>{badge.label}</span>
        {/* Duration */}
        <span style={{
          position: "absolute", bottom: "10px", right: "12px",
          borderRadius: "99px", padding: "4px 10px",
          fontSize: "10px", color: "#FCFBF7",
          backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)",
        }}>⏱ {course.duration}</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "18px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: "#1F3D2E" }}>
            {course.category}
          </p>
          <span style={{
            fontSize: "10px", padding: "3px 8px", borderRadius: "99px",
            backgroundColor: level.bg, color: level.color, fontWeight: 500,
          }}>{course.level}</span>
        </div>
        <h3 style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "16px", fontWeight: 700, color: "#1A1A1A",
          lineHeight: 1.3, marginBottom: "8px",
        }}>{course.title}</h3>
        <p style={{ fontSize: "12.5px", color: "#6B7280", lineHeight: 1.7, flex: 1, marginBottom: "14px" }}>
          {course.description}
        </p>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
          {course.tags.map((tag) => (
            <span key={tag} style={{
              borderRadius: "99px", padding: "3px 10px",
              fontSize: "10px", color: "#374151",
              backgroundColor: "rgba(31,61,46,0.06)",
              border: "1px solid rgba(31,61,46,0.1)",
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderTop: "1px solid #E8E4DC", padding: "12px 20px",
      }}>
        <div>
          <p style={{ fontSize: "17px", fontWeight: 700, color: "#1F3D2E", margin: 0 }}>
            ₹{course.fee.toLocaleString("en-IN")}
          </p>
          <p style={{ fontSize: "10.5px", color: "#6B7280", margin: "2px 0 0" }}>
            {course.enrolled.toLocaleString()} enrolled
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {course.weekendBatch && (
            <span style={{ fontSize: "10px", color: "#6B7280", alignSelf: "center" }}>📅 Weekend</span>
          )}
          <Link href={`/courses/${course.id}`} style={{
            borderRadius: "9px", padding: "8px 18px",
            fontSize: "12px", fontWeight: 600, textDecoration: "none",
            backgroundColor: course.featured ? "#1F3D2E" : "#1F3D2E",
            color: course.featured ? "#C8F135" : "#C8F135",
            transition: "all 0.18s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
            {course.featured ? "Enroll Now" : "Know More"}
          </Link>
        </div>
      </div>
    </div>
  );
}
