const courses = [
  { title: "Full-Stack Web Development", progress: 68, total: 48, done: 33, batch: "Batch 12 · Sep 2024" },
  { title: "UPSC Civil Services Foundation", progress: 35, total: 120, done: 42, batch: "Batch 7 · Nov 2024" },
];

export default function CourseProgress() {
  return (
    <div>
      <h2 style={{
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontSize: "22px", fontWeight: 700,
        color: "#1A1A1A", marginBottom: "20px",
      }}>Course Progress</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {courses.map((c) => (
          <div key={c.title} style={{
            backgroundColor: "#FFFFFF", borderRadius: "14px",
            border: "1px solid #E8E4DC", padding: "22px 24px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px",
                }}>{c.title}</h3>
                <p style={{ fontSize: "11.5px", color: "#6B7280" }}>{c.batch}</p>
              </div>
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "22px", fontWeight: 700, color: "#1F3D2E",
              }}>{c.progress}%</span>
            </div>

            {/* Progress bar */}
            <div style={{ backgroundColor: "#F0EFE9", borderRadius: "99px", height: "8px", overflow: "hidden" }}>
              <div style={{
                height: "100%", borderRadius: "99px",
                width: `${c.progress}%`,
                background: "linear-gradient(90deg, #1F3D2E, #D2FF3A)",
                transition: "width 1s ease",
              }} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <span style={{ fontSize: "11.5px", color: "#6B7280" }}>{c.done} of {c.total} lectures completed</span>
              <span style={{ fontSize: "11.5px", color: c.progress >= 100 ? "#1F3D2E" : "#6B7280", fontWeight: c.progress >= 100 ? 600 : 400 }}>
                {c.progress >= 100 ? "✓ Completed" : `${c.total - c.done} remaining`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
