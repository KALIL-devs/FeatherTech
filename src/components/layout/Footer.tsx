"use client";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Courses: [
    { label: "UI/UX Design Mastery", href: "/courses" },
    { label: "MERN/MEAN Full Stack", href: "/courses" },
    { label: "Digital Marketing Program", href: "/courses" },
    { label: "Software Testing", href: "/courses" },
    { label: "DevOps", href: "/courses" }, 
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/feather-tech-institute-a5637033a/",
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/feather_tech_institute/",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/919361806594",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2E] text-[#FCFBF7]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-14 pb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 no-underline mb-5">
            <span className="inline-flex items-center justify-center w-11 h-11 bg-white rounded-[10px] rotate-45 shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex-shrink-0 overflow-hidden">
              <Image
                src="/featurelogo.png"
                alt="FeatherTech Institute Logo"
                width={32}
                height={32}
                className="-rotate-45 object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-bold text-base text-[#FCFBF7]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                FeatherTech
              </span>
              <span className="text-[9px] text-[#C8F135] tracking-[1.8px] uppercase mt-0.5">
                Institute
              </span>
            </span>
          </Link>

          <p className="text-[13.5px] text-[rgba(252,251,247,0.65)] leading-[1.85] max-w-[300px] mb-6">
            Empowering students through expert, career-focused learning. From coding to competitive exams — we elevate potential.
          </p>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(200,241,53,0.25)] flex items-center justify-center transition-all duration-[180ms] hover:bg-[rgba(200,241,53,0.15)] hover:border-[#C8F135]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(252,251,247,0.7)">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[#C8F135] text-[13.5px] font-semibold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {heading}
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[rgba(252,251,247,0.6)] no-underline transition-colors duration-150 hover:text-[#FCFBF7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(200,241,53,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[rgba(252,251,247,0.4)] m-0 text-center sm:text-left">
            © {new Date().getFullYear()} FeatherTech Institute. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] text-[rgba(252,251,247,0.4)] no-underline transition-colors duration-150 hover:text-[rgba(252,251,247,0.75)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}