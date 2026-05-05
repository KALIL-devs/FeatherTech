"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: "🎓",
    title: "Academic Courses",
    desc: "Structured, industry-aligned courses across technology, competitive exams, design, and business. From beginner to advanced — we have a path for you.",
    features: ["Live & recorded lectures", "Weekly assessments", "Certificate of completion"],
  },
  {
    icon: "🧑‍💻",
    title: "One-on-One Mentorship",
    desc: "Personalised guidance sessions with expert faculty. Whether you need career advice, doubt resolution, or study strategy — we're here.",
    features: ["Scheduled 1:1 sessions", "Career roadmap planning", "Resume & interview prep"],
  },
  {
    icon: "📝",
    title: "Mock Tests & Assessments",
    desc: "Simulate real exam conditions with our curated test series. Detailed performance analytics help you identify and fix weak areas fast.",
    features: ["Subject-wise mock tests", "All-India rank comparison", "Detailed solution PDFs"],
  },
  {
    icon: "📅",
    title: "Weekend Batches",
    desc: "Designed for working professionals and college students. Same rigorous curriculum, scheduled around your week.",
    features: ["Saturday & Sunday classes", "Recorded session access", "Flexible rescheduling"],
  },
  {
    icon: "🚀",
    title: "Placement Support",
    desc: "We don't stop at teaching. Our placement cell actively connects students with hiring partners across top companies.",
    features: ["Resume review", "Mock interviews", "Direct company referrals"],
  },
  {
    icon: "🎧",
    title: "Student Support",
    desc: "A dedicated support team available to resolve queries, handle administrative requests, and ensure you have a smooth learning experience.",
    features: ["Doubt resolution portal", "Administrative help", "Emergency academic support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>
        {/* Hero */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "88px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D2FF3A", fontWeight: 500, marginBottom: "14px" }}>
              What We Offer
            </p>
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700,
              color: "#FCFBF7", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "20px",
            }}>
              Services Built Around<br />
              <span style={{ color: "#D2FF3A", fontStyle: "italic" }}>Student Success</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.7)", lineHeight: 1.85 }}>
              From structured courses to placement support — every service at FeatherTech Institute is designed to help you go further, faster.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {services.map((s) => (
                <div key={s.title} style={{
                  backgroundColor: "#FFFFFF", borderRadius: "20px",
                  border: "1px solid #E8E4DC", padding: "32px 28px",
                  display: "flex", flexDirection: "column", gap: "16px",
                  transition: "all 0.22s ease",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(31,61,46,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    backgroundColor: "rgba(210,255,58,0.2)",
                    border: "1px solid rgba(31,61,46,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
                  }}>{s.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "18px", fontWeight: 700, color: "#1F3D2E", marginBottom: "10px",
                    }}>{s.title}</h3>
                    <p style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: 1.75 }}>{s.desc}</p>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                        <span style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#D2FF3A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20,6 9,17 4,12" stroke="#1F3D2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "72px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "14px" }}>
              Ready to Begin?
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
              Explore our courses or reach out to an advisor — we&apos;ll help you find the right path.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a href="/courses" style={{ padding: "13px 30px", borderRadius: "9px", backgroundColor: "#D2FF3A", color: "#1F3D2E", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Explore Courses
              </a>
              <a href="/contact" style={{ padding: "13px 30px", borderRadius: "9px", border: "1.5px solid #1F3D2E", color: "#1F3D2E", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
                Talk to an Advisor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
