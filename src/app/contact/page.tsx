"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  { icon: "📍", label: "Address", value: "46A, V.P.Sithan Nagar, Vedar Puliyankulam, Thiru Nagar, Madurai - 625006" },
  { icon: "📞", label: "Phone", value: "+91 99449 15740" },
  { icon: "✉️", label: "Email", value: "feathertechinstitute@gmail.com" },
  // { icon: "🕐", label: "Hours", value: "Mon – Sat, 9 AM – 7 PM IST" },
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

  return (
    <>
      <Navbar />
      <main className="pt-5">

        {/* Hero */}
        <section className="bg-[#1F3D2E] px-5 sm:px-7 py-14 sm:py-20 text-center">
          <div className="max-w-[640px] mx-auto">
            <p className="text-[10.5px] sm:text-[11.5px] tracking-[2.5px] uppercase text-[#C8F135] font-medium mb-3 sm:mb-4">
              Get In Touch
            </p>
            <h1
              className="font-serif font-bold text-[#FCFBF7] tracking-[-1px] leading-[1.1]"
              style={{ fontSize: "clamp(28px, 5vw, 50px)" }}
            >
              We&apos;d Love to<br />
              <span className="text-[#C8F135] italic">Hear From You.</span>
            </h1>
          </div>
        </section>

        {/* Contact body */}
        <section className="bg-[#F0EFE9] px-4 sm:px-7 py-12 sm:py-16 lg:py-[72px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* Info column — order-2 on mobile (below form), order-1 on desktop (left column) */}
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              <div className="bg-[#1F3D2E] rounded-[16px] sm:rounded-[18px] p-6 sm:p-7 lg:p-8">
                <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#FCFBF7] mb-5 sm:mb-6">
                  Contact Information
                </h2>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3 sm:gap-4 mb-4 sm:mb-5 last:mb-0">
                    <span className="text-[18px] sm:text-[20px] shrink-0 mt-[1px]">{item.icon}</span>
                    <div>
                      <p className="text-[10px] sm:text-[10.5px] tracking-[1px] uppercase text-[#C8F135] mb-1">{item.label}</p>
                      <p className="text-[13px] sm:text-[13.5px] text-[rgba(252,251,247,0.85)] leading-[1.5]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              {/* <div className="rounded-[12px] sm:rounded-[14px] overflow-hidden border border-[#E8E4DC] bg-[#E8E4DC] h-[140px] sm:h-[180px] flex flex-col items-center justify-center gap-2">
                <span className="text-[28px] sm:text-[32px]">🗺️</span>
                <p className="text-[11px] sm:text-[12px] text-[#6B7280]">Anna Nagar, Chennai</p>
              </div> */}
            </div>

            {/* Form column — order-1 on mobile (appears first), order-2 on desktop (right column) */}
            <div className="bg-white rounded-[16px] sm:rounded-[20px] border border-[#E8E4DC] p-5 sm:p-8 lg:p-10 order-1 lg:order-2">
              {submitted ? (
                <div className="text-center py-10">
                  <span className="text-[44px] sm:text-[48px] block mb-4">✅</span>
                  <h2 className="font-serif text-[20px] sm:text-[24px] font-bold text-[#1F3D2E] mb-2.5">
                    Message Received!
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-[#6B7280] leading-[1.7]">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-[19px] sm:text-[22px] font-bold text-[#1A1A1A] mb-5 sm:mb-7">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-[18px]" suppressHydrationWarning>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-semibold text-[#374151] mb-1.5 tracking-[0.3px]">Full Name *</label>
                        <input
                          required value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-[9px] border-[1.5px] border-[#E8E4DC] bg-[#FCFBF7] text-[13.5px] text-[#1A1A1A] outline-none transition-colors duration-150 focus:border-[#1F3D2E] placeholder:text-[#9CA3AF]"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-semibold text-[#374151] mb-1.5 tracking-[0.3px]">Email Address *</label>
                        <input
                          required type="email" value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-[9px] border-[1.5px] border-[#E8E4DC] bg-[#FCFBF7] text-[13.5px] text-[#1A1A1A] outline-none transition-colors duration-150 focus:border-[#1F3D2E] placeholder:text-[#9CA3AF]"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-semibold text-[#374151] mb-1.5 tracking-[0.3px]">Phone Number</label>
                      <input
                        type="tel" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-[9px] border-[1.5px] border-[#E8E4DC] bg-[#FCFBF7] text-[13.5px] text-[#1A1A1A] outline-none transition-colors duration-150 focus:border-[#1F3D2E] placeholder:text-[#9CA3AF]"
                        suppressHydrationWarning
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-semibold text-[#374151] mb-1.5 tracking-[0.3px]">Course of Interest</label>
                      <select
                        value={form.course}
                        onChange={e => setForm({ ...form, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-[9px] border-[1.5px] border-[#E8E4DC] bg-[#FCFBF7] text-[13.5px] text-[#1A1A1A] outline-none transition-colors duration-150 focus:border-[#1F3D2E] cursor-pointer appearance-none"
                        suppressHydrationWarning
                      >
                        <option value="">Select a course…</option>
                        {courseOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-semibold text-[#374151] mb-1.5 tracking-[0.3px]">Message *</label>
                      <textarea
                        required rows={5} value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your goals or any questions you have…"
                        className="w-full px-4 py-3 rounded-[9px] border-[1.5px] border-[#E8E4DC] bg-[#FCFBF7] text-[13.5px] text-[#1A1A1A] outline-none transition-colors duration-150 focus:border-[#1F3D2E] placeholder:text-[#9CA3AF] resize-y leading-[1.65]"
                        suppressHydrationWarning
                      />
                    </div>

                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full sm:w-auto self-start px-7 sm:px-8 py-3.5 rounded-[9px] bg-[#C8F135] text-[#1F3D2E] text-[13.5px] sm:text-[14px] font-bold transition-all duration-150 hover:bg-[#BCEB2E] hover:shadow-[0_6px_20px_rgba(200,241,53,0.45)] cursor-pointer border-none"
                    >
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