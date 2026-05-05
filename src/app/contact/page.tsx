"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  { icon: "📍", label: "Address", value: "42, Knowledge Park, Anna Nagar, Chennai — 600 040" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210" },
  { icon: "✉️", label: "Email", value: "admissions@feathertech.in" },
  { icon: "🕐", label: "Hours", value: "Mon – Sat, 9 AM – 7 PM IST" },
];

const courseOptions = [
  "Full-Stack Web Development",
  "Python & Data Science",
  "UPSC Civil Services Foundation",
  "UI/UX Design Mastery",
  "Digital Marketing & SEO",
  "Bank PO & Clerk Preparation",
  "Other / Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: "9px",
    border: "1.5px solid #E8E4DC", backgroundColor: "#FCFBF7",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "14px", color: "#1A1A1A", outline: "none",
    transition: "border-color 0.18s ease", boxSizing: "border-box",
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px" }}>
        {/* Hero */}
        <section style={{ backgroundColor: "#1F3D2E", padding: "80px 28px", textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "11.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D2FF3A", fontWeight: 500, marginBottom: "14px" }}>
              Get In Touch
            </p>
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 700,
              color: "#FCFBF7", letterSpacing: "-1px", lineHeight: 1.1,
            }}>
              We&apos;d Love to<br />
              <span style={{ color: "#D2FF3A", fontStyle: "italic" }}>Hear From You.</span>
            </h1>
          </div>
        </section>

        {/* Contact body */}
        <section style={{ backgroundColor: "#F0EFE9", padding: "72px 28px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px", alignItems: "start" }}>

            {/* Info column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ backgroundColor: "#1F3D2E", borderRadius: "18px", padding: "32px 28px" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", fontWeight: 700, color: "#FCFBF7", marginBottom: "24px" }}>
                  Contact Information
                </h2>
                {contactInfo.map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: "10.5px", letterSpacing: "1px", textTransform: "uppercase", color: "#D2FF3A", marginBottom: "3px" }}>{item.label}</p>
                      <p style={{ fontSize: "13.5px", color: "rgba(252,251,247,0.85)", lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{
                borderRadius: "14px", overflow: "hidden",
                border: "1px solid #E8E4DC", backgroundColor: "#E8E4DC",
                height: "180px", display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "8px",
              }}>
                <span style={{ fontSize: "32px" }}>🗺️</span>
                <p style={{ fontSize: "12px", color: "#6B7280" }}>Anna Nagar, Chennai</p>
              </div>
            </div>

            {/* Form column */}
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", border: "1px solid #E8E4DC", padding: "40px 36px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>✅</span>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1F3D2E", marginBottom: "10px" }}>
                    Message Received!
                  </h2>
                  <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#1A1A1A", marginBottom: "28px" }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11.5px", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.3px" }}>Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = "#1F3D2E"; }}
                          onBlur={e => { e.target.style.borderColor = "#E8E4DC"; }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11.5px", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.3px" }}>Email Address *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="you@email.com" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = "#1F3D2E"; }}
                          onBlur={e => { e.target.style.borderColor = "#E8E4DC"; }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11.5px", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.3px" }}>Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 00000 00000" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "#1F3D2E"; }}
                        onBlur={e => { e.target.style.borderColor = "#E8E4DC"; }} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11.5px", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.3px" }}>Course of Interest</label>
                      <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}
                        style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                        onFocus={e => { e.target.style.borderColor = "#1F3D2E"; }}
                        onBlur={e => { e.target.style.borderColor = "#E8E4DC"; }}>
                        <option value="">Select a course…</option>
                        {courseOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11.5px", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.3px" }}>Message *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your goals or any questions you have…"
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                        onFocus={e => { e.target.style.borderColor = "#1F3D2E"; }}
                        onBlur={e => { e.target.style.borderColor = "#E8E4DC"; }} />
                    </div>

                    <button type="submit" style={{
                      padding: "14px 32px", borderRadius: "9px", border: "none",
                      backgroundColor: "#D2FF3A", color: "#1F3D2E",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "14px", fontWeight: 700, cursor: "pointer",
                      transition: "all 0.18s ease", alignSelf: "flex-start",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#BCEB2E"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(210,255,58,0.5)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D2FF3A"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}>
                      Submit Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
