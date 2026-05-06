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
    { label: "Full-Stack Web Dev", href: "/courses" },
    { label: "Python & Data Science", href: "/courses" },
    { label: "UPSC Foundation", href: "/courses" },
    { label: "UI/UX Design", href: "/courses" },
    { label: "Bank PO Prep", href: "/courses" },
  ],
};

const socials = [
  {
    label: "Twitter",
    href: "#",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.16 17.52h1.833L7.084 4.126H5.117L17.084 19.77z",
  },
  {
    label: "LinkedIn",
    href: "#",
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Instagram",
    href: "#",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
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
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[12px] text-[rgba(252,251,247,0.4)] no-underline transition-colors duration-150 hover:text-[rgba(252,251,247,0.75)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}