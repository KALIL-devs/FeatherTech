"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "🌐",
    title: "Your Brand's Digital Growth Partner",
    desc: "We specialize in creating dynamic, user-friendly, and scalable websites tailored to your business needs. We're your creative partner in the digital world — offering expert freelancing services in web development, WordPress customization, and more.",
    image: "/images/about/service-digital.jpg", // replace with your image
  },
  {
    icon: "🎓",
    title: "Level Up with the Learning Hub",
    desc: "Unlock your potential with a transformative learning experience tailored for future tech leaders. At our Learning Hub, we equip you with in-demand skills, hands-on training, and real-world knowledge to thrive in today's competitive world.",
    image: "/images/about/service-learning.jpg", // replace with your image
  },
];

const leadership = [
  { name: "Atchaya Priya.G", role: "CEO",               avatar: "AP", image: "/images/team/atchaya-priya.jpg" },
  { name: "Udhaya Raj.P",    role: "Managing Director",  avatar: "UR", image: "/images/team/udhaya-raj.jpg"    },
  { name: "Tamizhamuthan.G", role: "Director",           avatar: "TG", image: "/images/team/tamizhamuthan.jpg" },
];

// ─── Reusable placeholder ─────────────────────────────────────────────────────
function ImgPlaceholder({
  path,
  label,
  height = "100%",
  bg = "#D4E8D0",
  radius = "0px",
}: {
  path: string;
  label: string;
  height?: string;
  bg?: string;
  radius?: string;
}) {
  return (
    <div style={{
      width: "100%", height,
      backgroundColor: bg,
      borderRadius: radius,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "8px",
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(31,61,46,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span style={{ fontSize: "10.5px", fontWeight: 600, color: "rgba(31,61,46,0.4)", letterSpacing: "1px", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: "9.5px", color: "rgba(31,61,46,0.28)", fontFamily: "monospace" }}>
        {path}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "88px 28px" }}>
          <div
            className="hero-grid"
            style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}
          >
            <div>
              <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8F135", fontWeight: 500, marginBottom: "14px" }}>
                Who We Are
              </p>
              <h1 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700,
                color: "#FCFBF7", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "22px",
              }}>
                Feather Tech Institute<br />
                <span style={{ color: "#C8F135", fontStyle: "italic" }}>Shaping Futures Through<br />Affordable Learning.</span>
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.7)", lineHeight: 1.85, marginBottom: "32px", maxWidth: "440px" }}>
                We believe top-quality tech education should be within everyone's reach — affordable, accessible, and impactful. Our mission is to empower students, freshers, and passionate learners with practical skills to thrive in today's competitive world.
              </p>
              <Link href="/courses" style={{
                display: "inline-block", padding: "12px 28px", borderRadius: "9px",
                backgroundColor: "#C8F135", color: "#1F3D2E",
                fontWeight: 600, fontSize: "14px", textDecoration: "none",
              }}>
                Explore Our Courses
              </Link>
            </div>

            {/* Video placeholder */}
            <div style={{
              position: "relative", borderRadius: "20px", overflow: "hidden",
              aspectRatio: "16/9", backgroundColor: "#1F3D2E",
              border: "1px solid #E8E4DC",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "12px",
            }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                backgroundColor: "#C8F135",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 0 0 12px rgba(200,241,53,0.15)",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#1F3D2E">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              {/* <span style={{ fontSize: "12px", color: "rgba(252,251,247,0.5)", letterSpacing: "1px", textTransform: "uppercase" }}>
                Watch Our Story
              </span> */}
              {/* Replace with your video embed: */}
              <iframe src="/about/video.mp4" style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }} allowFullScreen />
             
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#162e20", padding: "32px 28px" }}>
          <div style={{
            maxWidth: "1200px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", textAlign: "center",
          }}>
            {[
              { val: "5,000+", label: "Students Trained" },
              { val: "Global", label: "Vibrant Community" },
              { val: "2+",     label: "Service Verticals" },
              { val: "100%",   label: "Practical-First" },
            ].map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#C8F135", margin: "0 0 4px", lineHeight: 1 }}>
                  {s.val}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(252,251,247,0.55)", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Meet Feather Tech — Video Section ────────────────────────────── */}
        {/* <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div
            className="meet-grid"
            style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
          >
            <div>
              <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "14px" }}>
                Meet Feather Tech Institute
              </p>
              <h2 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700,
                color: "#1A1A1A", lineHeight: 1.2, marginBottom: "20px",
              }}>
                More Than a Platform —<br />
                <span style={{ color: "#1F3D2E", fontStyle: "italic" }}>Your Stepping Stone.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.85 }}>
                At Feather Tech Institute, we believe top-quality tech education should be within everyone's reach. Backed by a vibrant global community, we're more than just an online platform — we're your stepping stone to a brighter, smarter future. Affordable, accessible, and impactful.
              </p>
            </div>


          </div>
        </section> */}

        {/* ── Our Services ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "10px" }}>
              Our Services
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700,
              color: "#1A1A1A", marginBottom: "48px",
            }}>
              Two Pillars of What We Do
            </h2>

            <div className="services-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {services.map((s, i) => (
                <div
                  key={s.title}
                  style={{
                    backgroundColor: "#FFFFFF", borderRadius: "20px",
                    border: "1px solid #E8E4DC", overflow: "hidden",
                    display: "flex", flexDirection: "column",
                    transition: "all 0.22s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(31,61,46,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Service image */}
                  <div style={{ height: "200px", overflow: "hidden", flexShrink: 0 }}>
                    {/* ↓ PLACEHOLDER */}
                    <ImgPlaceholder
                      path={s.image}
                      label={i === 0 ? "Digital Service" : "Learning Hub"}
                      height="200px"
                      bg={i === 0 ? "#D0DCF0" : "#D4E8D0"}
                    />
                    {/* ↑ PLACEHOLDER ends */}

                    {/* ↓ REAL IMAGE — uncomment when ready
                    <img src={s.image} alt={s.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                    */}
                  </div>

                  <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "19px", fontWeight: 700, color: "#1F3D2E", margin: 0 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.8, margin: 0 }}>
                      {s.desc}
                    </p>
                    <Link
                      href="/services"
                      style={{
                        marginTop: "auto",
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        fontSize: "13px", fontWeight: 600, color: "#1F3D2E",
                        textDecoration: "none", paddingTop: "12px",
                        borderTop: "1px solid #F0EFE9",
                        transition: "gap 0.18s ease",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = "6px"; }}
                    >
                      Show More <span style={{ fontSize: "15px" }}>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Leadership ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "10px" }}>
              Empowering Education Through Leadership
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700,
              color: "#1A1A1A", marginBottom: "48px",
            }}>
              The Minds Behind Feather Tech
            </h2>

            <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", maxWidth: "860px" }}>
              {leadership.map((member, i) => {
                const palettes = ["#D4E8D0", "#D0DCF0", "#F0E4D0"];
                return (
                  <div
                    key={member.name}
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid #E8E4DC",
                      overflow: "hidden",
                      textAlign: "center",
                      transition: "all 0.22s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(31,61,46,0.1)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Photo area */}
                    <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                      {/* ↓ PLACEHOLDER */}
                      <ImgPlaceholder
                        path={member.image}
                        label={member.name}
                        height="220px"
                        bg={palettes[i]}
                      />
                      {/* ↑ PLACEHOLDER ends */}

                      {/* ↓ REAL IMAGE — uncomment when ready
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top", display:"block" }}
                      />
                      */}

                      {/* Role badge overlaid on image bottom */}
                      <div style={{
                        position: "absolute", bottom: "12px", left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#1F3D2E",
                        padding: "4px 14px", borderRadius: "99px",
                        whiteSpace: "nowrap",
                      }}>
                        <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#C8F135", letterSpacing: "0.8px", textTransform: "uppercase" }}>
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <div style={{ padding: "18px 20px 24px" }}>
                      <h3 style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "17px", fontWeight: 700,
                        color: "#1A1A1A", margin: 0,
                      }}>
                        {member.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Strip ────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "72px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8F135", fontWeight: 500, marginBottom: "14px" }}>
              Ready to Begin?
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
              color: "#FCFBF7", marginBottom: "14px",
            }}>
              Your Future Starts Here.
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.65)", lineHeight: 1.8, marginBottom: "32px" }}>
              Join thousands of learners who've transformed their careers with Feather Tech Institute.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/courses" style={{
                padding: "13px 30px", borderRadius: "9px",
                backgroundColor: "#C8F135", color: "#1F3D2E",
                fontWeight: 700, fontSize: "14px", textDecoration: "none",
              }}>
                Explore Courses
              </Link>
              <Link href="/contact" style={{
                padding: "13px 30px", borderRadius: "9px",
                border: "1.5px solid rgba(252,251,247,0.3)", color: "#FCFBF7",
                fontWeight: 500, fontSize: "14px", textDecoration: "none",
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid           { grid-template-columns: 1fr !important; }
          .meet-grid           { grid-template-columns: 1fr !important; }
          .services-about-grid { grid-template-columns: 1fr !important; }
          .team-grid           { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}