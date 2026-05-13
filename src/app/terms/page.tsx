"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFBF7] min-h-screen pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Terms & Conditions
            </h1>
            <p className="text-[15px] text-[#6B7280] font-medium">
              For Feathertech Institute • Last Updated: May 13, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[#4B5563]">
            <p>Welcome to Feathertech Institute. By accessing or using our website, training programs, digital services, or any related platforms, you agree to comply with and be bound by the following Terms & Conditions.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">1. About Us</h2>
            <p>Feathertech Institute provides:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>IT Training Courses</li>
              <li>Software & IT Services</li>
              <li>Digital Marketing Services</li>
              <li>Web Development & Design</li>
              <li>Technical Consulting & Support</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">2. Acceptance of Terms</h2>
            <p>By using our website or enrolling in our services/courses, you agree to these Terms & Conditions. If you do not agree, please do not use our website or services.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">3. Course Enrollment & Payments</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Course fees must be paid as per the agreed schedule.</li>
              <li>Fees once paid are generally non-refundable unless otherwise stated.</li>
              <li>Feathertech Institute reserves the right to modify course schedules, trainers, or content when necessary.</li>
              <li>Certificates will be issued only after successful course completion and required attendance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">4. User Responsibilities</h2>
            <p>Users agree:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Not to misuse the website or services</li>
              <li>Not to copy, distribute, or resell course materials without permission</li>
              <li>To provide accurate information during registration</li>
              <li>Not to engage in any unlawful activities through our platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">5. Intellectual Property</h2>
            <p>All website content including:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Logos</li>
              <li>Course materials</li>
              <li>Videos</li>
              <li>Graphics</li>
              <li>Text content</li>
              <li>Branding elements</li>
            </ul>
            <p>are the intellectual property of Feathertech Institute and may not be copied or reproduced without written permission.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">6. Digital Marketing & IT Services</h2>
            <p>For client projects:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Project timelines depend on client cooperation and content approvals.</li>
              <li>Additional changes beyond agreed scope may involve extra charges.</li>
              <li>Feathertech Institute is not responsible for third-party platform issues (Google, Meta, hosting providers, etc.).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">7. Limitation of Liability</h2>
            <p>We strive to provide accurate and high-quality services. However, Feathertech Institute shall not be held liable for:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Business loss</li>
              <li>Data loss</li>
              <li>Website downtime</li>
              <li>Indirect or incidental damages arising from use of our services or website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those websites.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">9. Privacy</h2>
            <p>Use of our website is also governed by our <Link href="/privacy" className="text-[#1F3D2E] underline font-medium">Privacy Policy</Link>.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">10. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms & Conditions at any time without prior notice.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">11. Contact Information</h2>
            <p>For any questions regarding these Terms & Conditions, contact:</p>
            <div className="bg-white p-6 rounded-xl border border-[#E8E4DC] mt-6">
              <p className="font-bold text-[#1A1A1A] mb-2">Feathertech Institute</p>
              <p className="mb-1">Email: <a href="mailto:feathertechinstitute@gmail.com" className="text-[#1F3D2E] hover:underline">feathertechinstitute@gmail.com</a></p>
              <p className="mb-1">Phone: +91 93618 06594</p>
              <p>Address: 46A, V.P.Sithan Nagar, Vedar Puliyankulam, Thiru Nagar, Madurai - 625006</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
