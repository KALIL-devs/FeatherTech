"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    tag: "Online Store",
    title: "E-Commerce Website",
    desc: "Delivering seamless e-commerce solutions to grow your online business — reliable, scalable, and tailored to your brand from design to launch.",
    features: ["Custom storefront design", "Scalable & secure architecture", "Seamless checkout experience"],
    accent: "#C8F135",
    accentText: "#1F3D2E",
    duration: "4–6 weeks",
    level: "Business",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    tag: "Growth",
    title: "Digital Marketing",
    desc: "Data-driven strategies to maximise reach, engagement, and growth — SEO, social media, content creation, and paid advertising, all under one roof.",
    features: ["SEO & content creation", "Social media marketing", "Paid ads & analytics"],
    accent: "#1F3D2E",
    accentText: "#C8F135",
    duration: "Ongoing",
    level: "All Stages",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tag: "Development",
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites built to your exact needs — combining innovative design, robust technology, and seamless UX.",
    features: ["Responsive & fast websites", "Innovative UI/UX design", "Performance-optimised builds"],
    accent: "#C8F135",
    accentText: "#1F3D2E",
    duration: "3–8 weeks",
    level: "Custom",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    tag: "Mobile",
    title: "Mobile App Development",
    desc: "High-quality, user-centric mobile applications that drive engagement and accelerate growth — expertly crafted for both iOS and Android.",
    features: ["iOS & Android development", "User-centric design", "End-to-end delivery"],
    accent: "#1F3D2E",
    accentText: "#C8F135",
    duration: "8–16 weeks",
    level: "Enterprise",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    tag: "Branding",
    title: "Logo & Brand Design",
    desc: "Impactful logos and brand identities that capture your vision and connect with your audience — built to make your business stand out memorably.",
    features: ["Logo design & brand identity", "Visual style guidelines", "Memorable brand presence"],
    accent: "#C8F135",
    accentText: "#1F3D2E",
    duration: "1–2 weeks",
    level: "Starter",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    tag: "Creative",
    title: "Video Editing",
    desc: "Professional editing that transforms raw footage into compelling, high-quality videos — engaging your audience and amplifying your brand's story.",
    features: ["Professional video editing", "Brand storytelling", "Creative precision & impact"],
    accent: "#1F3D2E",
    accentText: "#C8F135",
    duration: "3–7 days",
    level: "Any Project",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Research Project",
    desc: "Empowering your vision through strategic research and innovation.",
  },
  {
    number: "02",
    title: "Evaluate Plans",
    desc: "Ensure every plan is aligned, efficient, and effective to unlock smarter, faster growth.",
  },
  {
    number: "03",
    title: "Best Results",
    desc: "Focused on delivering the best results, where every detail drives your success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "88px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p style={{
              fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase",
              color: "#C8F135", fontWeight: 500, marginBottom: "14px",
            }}>
              Our Services
            </p>
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700,
              color: "#FCFBF7", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "20px",
            }}>
              End-to-End Digital Solutions<br />
              <span style={{ color: "#C8F135", fontStyle: "italic" }}>Built for Your Growth.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(252,251,247,0.7)", lineHeight: 1.85 }}>
              From e-commerce and web development to digital marketing, branding, and video editing —
              everything your business needs to grow and succeed, under one roof.
            </p>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            {/* Section header */}


            <div
              className="services-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  className="service-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #E8E4DC",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.22s ease",
                    position: "relative",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 44px rgba(31,61,46,0.11)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* ── Coloured top bar ── */}
                  <div style={{
                    height: "5px",
                    backgroundColor: s.accent,
                    flexShrink: 0,
                  }} />

                  {/* ── Card body ── */}
                  <div style={{ padding: "28px 26px 30px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>

                    {/* Icon + tag row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{
                        width: "46px", height: "46px", borderRadius: "13px",
                        backgroundColor: s.accent,
                        color: s.accentText,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        {s.icon}
                      </div>
                      <span style={{
                        fontSize: "10.5px", fontWeight: 700, letterSpacing: "1.4px",
                        textTransform: "uppercase", color: "#9CA3AF",
                        backgroundColor: "#F3F4F6",
                        padding: "4px 10px", borderRadius: "20px",
                      }}>
                        {s.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "19px", fontWeight: 700, color: "#1F3D2E", margin: 0,
                    }}>
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
                      {s.desc}
                    </p>

                    {/* Meta row — timeline & level */}
                    <div style={{
                      display: "flex", gap: "10px", flexWrap: "wrap",
                    }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        fontSize: "11.5px", color: "#6B7280",
                        backgroundColor: "#F9F8F5", border: "1px solid #E8E4DC",
                        padding: "4px 10px", borderRadius: "20px",
                      }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {s.duration}
                      </span>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        fontSize: "11.5px", color: "#6B7280",
                        backgroundColor: "#F9F8F5", border: "1px solid #E8E4DC",
                        padding: "4px 10px", borderRadius: "20px",
                      }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        {s.level}
                      </span>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", backgroundColor: "#F0EFE9" }} />

                    {/* Features */}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
                      {s.features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13px", color: "#374151" }}>
                          <span style={{
                            width: "18px", height: "18px", borderRadius: "50%",
                            backgroundColor: "#C8F135",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <polyline points="20,6 9,17 4,12" stroke="#1F3D2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="/contact"
                      style={{
                        marginTop: "auto",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        gap: "7px",
                        padding: "11px 0",
                        borderRadius: "10px",
                        backgroundColor: "#1F3D2E",
                        color: "#C8F135",
                        fontSize: "13px", fontWeight: 700,
                        textDecoration: "none",
                        transition: "background 0.18s ease",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#162d21"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1F3D2E"; }}
                    >
                      Get Started <span style={{ fontSize: "15px" }}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Free Consultation Banner ──────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "60px 28px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8F135", fontWeight: 500, marginBottom: "10px" }}>
                Get a Free Consultation
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#FCFBF7", margin: 0, lineHeight: 1.2 }}>
                Let&apos;s Talk About Your Project
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(252,251,247,0.6)", marginTop: "8px" }}>
                We are committed to providing prompt and professional support.
              </p>
            </div>
            <a
              href="tel:+91 93618 06594"  
              style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "18px 36px", borderRadius: "12px", backgroundColor: "#C8F135", color: "#1F3D2E", textDecoration: "none", flexShrink: 0, transition: "background 0.18s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8e02a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C8F135"; }}
            >
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>Call Us Now</span>
              <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "0.5px" }}>+91 93618 06594</span>
            </a>
          </div>
        </section>

        {/* ── Our Process ──────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FCFBF7", padding: "88px 28px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1F3D2E", fontWeight: 500, marginBottom: "10px" }}>
                Our Process
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.5px", marginBottom: "14px" }}>
                Process We Follow
              </h2>
              <p style={{ fontSize: "14.5px", color: "#6B7280", maxWidth: "620px", margin: "0 auto", lineHeight: 1.75 }}>
                We deliver complete creative solutions — from stunning logo design and powerful digital marketing
                to cutting-edge web development, e-commerce excellence, and dynamic video editing.
              </p>
            </div>

            <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "20px", padding: "36px 28px", position: "relative", overflow: "hidden", textAlign: "center", transition: "box-shadow 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(31,61,46,0.10)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <span style={{ position: "absolute", bottom: "-16px", right: "12px", fontSize: "80px", fontWeight: 900, color: "rgba(200,241,53,0.25)", fontFamily: "var(--font-playfair), Georgia, serif", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                    {step.number}
                  </span>
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "#1F3D2E", color: "#C8F135", fontSize: "13px", fontWeight: 800, marginBottom: "18px", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {step.number}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "19px", fontWeight: 700, color: "#1A1A1A", marginBottom: "12px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Strip ────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "72px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "14px" }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
              Book an appointment and let&apos;s build something great together.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a href="/contact" style={{ padding: "13px 30px", borderRadius: "9px", backgroundColor: "#C8F135", color: "#1F3D2E", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Make an Appointment
              </a>
              <a href="/courses" style={{ padding: "13px 30px", borderRadius: "9px", border: "1.5px solid #1F3D2E", color: "#1F3D2E", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
                Explore Courses
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}