"use client";
import Link from "next/link";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Courses: [
    { label: "Full-Stack Web Dev", href: "/courses" },
    { label: "Python & Data Science", href: "/courses" },
    { label: "UPSC Foundation", href: "/courses" },
    { label: "UI/UX Design", href: "/courses" },
    { label: "Bank PO Prep", href: "/courses" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1F3D2E", color: "#FCFBF7" }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "60px 28px 48px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "40px",
      }}>
        {/* Brand */}
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "18px" }}>
            <span style={{
              width: "36px", height: "36px", borderRadius: "9px",
              background: "rgba(210,255,58,0.15)",
              border: "1px solid rgba(210,255,58,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"
                  stroke="#D2FF3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="8" x2="2" y2="22" stroke="#D2FF3A" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, fontSize: "16px", color: "#FCFBF7" }}>FeatherTech</span>
              <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "9px", color: "#D2FF3A", letterSpacing: "1.8px", textTransform: "uppercase" }}>Institute</span>
            </span>
          </Link>
          <p style={{ fontSize: "13.5px", color: "rgba(252,251,247,0.65)", lineHeight: 1.85, maxWidth: "280px", marginBottom: "24px" }}>
            Empowering students through expert, career-focused learning. From coding to competitive exams — we elevate potential.
          </p>
          {/* Socials */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "Twitter", href: "#", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.16 17.52h1.833L7.084 4.126H5.117L17.084 19.77z" },
              { label: "LinkedIn", href: "#", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
              { label: "Instagram", href: "#", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} style={{
                width: "34px", height: "34px", borderRadius: "8px",
                border: "1px solid rgba(210,255,58,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.18s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(210,255,58,0.15)"; e.currentTarget.style.borderColor = "#D2FF3A"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(210,255,58,0.25)"; }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(252,251,247,0.7)"><path d={s.d} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 600, fontSize: "14px", color: "#D2FF3A",
              marginBottom: "18px",
            }}>{heading}</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: "13px", color: "rgba(252,251,247,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#FCFBF7"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(252,251,247,0.6)"; }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(210,255,58,0.15)",
        padding: "18px 28px",
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "8px",
      }}>
        <p style={{ fontSize: "12px", color: "rgba(252,251,247,0.4)", margin: 0 }}>
          © {new Date().getFullYear()} FeatherTech Institute. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Privacy Policy", "Terms of Use"].map((label) => (
            <Link key={label} href="#" style={{ fontSize: "12px", color: "rgba(252,251,247,0.4)", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.color = "rgba(252,251,247,0.75)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(252,251,247,0.4)"; }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
