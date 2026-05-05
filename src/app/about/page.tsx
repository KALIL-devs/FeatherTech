"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";


const values = [
  { icon: "🎯", title: "Career-First Curriculum", desc: "Every course is built around industry outcomes — not just theory. Our content evolves with the market." },
  { icon: "🧑‍🏫", title: "Expert Instructors", desc: "Learn from practitioners with 8+ years of real-world experience who've walked the path before you." },
  { icon: "🤝", title: "Personalised Mentorship", desc: "You're never a number here. Each student receives dedicated guidance tailored to their goals." },
  { icon: "📜", title: "Proven Track Record", desc: "Over 5,000 students trained, 92% placement rate — results that speak louder than promises." },
];

const team = [
  { name: "Dr. S. Rajan", role: "Principal & Founder", expertise: "Computer Science, 18 yrs", avatar: "SR" },
  { name: "P. Venkatesh", role: "Course Director — Tech", expertise: "Full-Stack & Cloud, 12 yrs", avatar: "PV" },
  { name: "Meena Krishnaswamy", role: "Head — Competitive Exams", expertise: "UPSC & Banking, 10 yrs", avatar: "MK" },
  { name: "Arun Sundaram", role: "Lead — Design Division", expertise: "UI/UX & Branding, 9 yrs", avatar: "AS" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>
        {/* Hero */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D2FF3A", fontWeight: 500, marginBottom: "14px" }}>Who We Are</p>
              <h1 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700,
                color: "#FCFBF7", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "22px",
              }}>
                Rooted in Knowledge,<br />
                <span style={{ color: "#D2FF3A", fontStyle: "italic" }}>Driven by Purpose.</span>
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.7)", lineHeight: 1.85, marginBottom: "32px", maxWidth: "440px" }}>
                Founded in 2016, FeatherTech Institute has been a trusted destination for students seeking
                career-defining skills in technology, competitive examinations, and professional design.
              </p>
              <Link href="/courses" style={{
                display: "inline-block", padding: "12px 28px", borderRadius: "9px",
                backgroundColor: "#D2FF3A", color: "#1F3D2E",
                fontWeight: 600, fontSize: "14px", textDecoration: "none",
              }}>
                Explore Our Courses
              </Link>
            </div>

            {/* Stats block */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { val: "5,000+", label: "Students Trained" },
                { val: "8+ Yrs", label: "Industry Experience" },
                { val: "40+", label: "Active Courses" },
                { val: "92%", label: "Placement Rate" },
              ].map((s) => (
                <div key={s.label} style={{
                  backgroundColor: "rgba(210,255,58,0.08)",
                  border: "1px solid rgba(210,255,58,0.2)",
                  borderRadius: "14px", padding: "24px 20px",
                }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#D2FF3A", margin: "0 0 6px", lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontSize: "12px", color: "rgba(252,251,247,0.6)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "14px" }}>Our Mission</p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, fontStyle: "italic",
              color: "#1A1A1A", lineHeight: 1.3, marginBottom: "20px",
            }}>
              &ldquo;To make expert-level education accessible to every ambitious learner — regardless of background.&rdquo;
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.85 }}>
              We believe that the right guidance, at the right time, can transform a student&apos;s life. That conviction is the foundation of everything we do at FeatherTech Institute.
            </p>
          </div>
        </section>

        {/* Values */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "10px" }}>Why Choose Us</p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700,
              color: "#1A1A1A", marginBottom: "48px",
            }}>Our Core Values</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {values.map((v) => (
                <div key={v.title} style={{
                  backgroundColor: "#FFFFFF", borderRadius: "18px",
                  border: "1px solid #E8E4DC", padding: "28px 24px",
                  transition: "all 0.22s ease",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(31,61,46,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: "28px", display: "block", marginBottom: "14px" }}>{v.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", fontWeight: 700, color: "#1F3D2E", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "10px" }}>The People Behind It</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "48px" }}>
              Our Faculty
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {team.map((member) => (
                <div key={member.name} style={{
                  textAlign: "center", backgroundColor: "#FFFFFF",
                  borderRadius: "18px", border: "1px solid #E8E4DC", padding: "32px 20px",
                }}>
                  <div style={{
                    width: "68px", height: "68px", borderRadius: "50%",
                    backgroundColor: "#1F3D2E", margin: "0 auto 16px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "18px", color: "#D2FF3A",
                  }}>{member.avatar}</div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>{member.name}</h3>
                  <p style={{ fontSize: "12px", color: "#1F3D2E", fontWeight: 500, marginBottom: "6px" }}>{member.role}</p>
                  <p style={{ fontSize: "11.5px", color: "#6B7280" }}>{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
