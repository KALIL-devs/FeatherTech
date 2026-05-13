"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFBF7] min-h-screen pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Privacy Policy
            </h1>
            <p className="text-[15px] text-[#6B7280] font-medium">
              For Feathertech Institute • Last Updated: May 13, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[#4B5563]">
            <p>Feathertech Institute values your privacy and is committed to protecting your personal information.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Course inquiries</li>
              <li>Payment details</li>
              <li>Business information for service projects</li>
              <li>Website usage data</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Provide training and services</li>
              <li>Contact you regarding inquiries</li>
              <li>Process payments</li>
              <li>Improve our website and services</li>
              <li>Send updates, offers, or announcements</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">4. Sharing of Information</h2>
            <p>We do not sell or rent your personal information. Information may be shared only:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>With trusted service providers</li>
              <li>For legal compliance</li>
              <li>When required to deliver services</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">5. Cookies</h2>
            <p>Our website may use cookies to improve user experience and analyze website traffic.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">6. Third-Party Services</h2>
            <p>We may use third-party platforms such as:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Google Analytics</li>
              <li>Meta Ads</li>
              <li>Payment gateways</li>
              <li>Hosting providers</li>
            </ul>
            <p>These services may collect information according to their own privacy policies.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">7. User Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">8. Children&apos;s Privacy</h2>
            <p>Our services are not intended for children under 13 years of age.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">9. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. Updated versions will be posted on this page.</p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-serif">10. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, contact:</p>
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
