"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative mx-auto mt-6 w-[90%] z-50">
      {/* Main Navbar */}
      <nav
        className="flex items-center justify-between rounded-full px-4 py-2.5"
        style={{
          backgroundColor: "#1F3D2E",
          border: "0.5px solid rgba(200, 241, 53, 0.18)",
          boxShadow:
            "0 0 40px rgba(200, 241, 53, 0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 px-2 py-1">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              transform: "rotate(45deg)",
              boxShadow: "0 0 16px rgba(200, 241, 53, 0.4)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/featurelogo.png"
              alt="FeatherTech Logo"
              width={55}
              height={55}
              style={{
                transform: "rotate(-45deg)",
                objectFit: "contain",
                display: "block",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "17px",
              fontWeight: 500,
              color: "#f0f5ec",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            FeatherTech
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block px-4 py-2 rounded-full text-[13.5px] font-light tracking-wide transition-all duration-200 text-[rgba(220,240,225,0.72)] hover:text-[#C8F135] hover:bg-[rgba(200,241,53,0.08)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block flex-shrink-0 text-[13px] font-medium tracking-wide rounded-full px-5 py-2.5 transition-all duration-200 hover:brightness-110"
          style={{
            color: "#0d1a10",
            background: "#C8F135",
            boxShadow: "0 0 20px rgba(200, 241, 53, 0.25)",
            whiteSpace: "nowrap",
          }}
        >
          Get Started →
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-full transition-all duration-200"
          style={{
            background: menuOpen
              ? "rgba(200, 241, 53, 0.12)"
              : "rgba(255,255,255,0.06)",
            border: "0.5px solid rgba(200, 241, 53, 0.2)",
          }}
          aria-label="Toggle menu"
        >
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: "16px",
              height: "1.5px",
              backgroundColor: "#C8F135",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: "16px",
              height: "1.5px",
              backgroundColor: "#C8F135",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: "16px",
              height: "1.5px",
              backgroundColor: "#C8F135",
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu — absolute so it floats over hero without pushing layout */}
      <div
        className="md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-300 ease-in-out pointer-events-none"
        style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          visibility: menuOpen ? "visible" : "hidden",
          zIndex: 50,
        }}
      >
        <div
          className="rounded-2xl px-4 py-4 flex flex-col gap-1 pointer-events-auto"
          style={{
            backgroundColor: "#1F3D2E",
            border: "0.5px solid rgba(200, 241, 53, 0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          {navLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-[14px] font-light tracking-wide transition-all duration-200 text-[rgba(220,240,225,0.72)] hover:text-[#C8F135] hover:bg-[rgba(200,241,53,0.08)]"
              style={{
                borderBottom:
                  i < navLinks.length - 1
                    ? "0.5px solid rgba(200, 241, 53, 0.08)"
                    : "none",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-[13px] font-medium tracking-wide rounded-full px-5 py-3 transition-all duration-200 hover:brightness-110"
            style={{
              color: "#0d1a10",
              background: "#C8F135",
              boxShadow: "0 0 20px rgba(200, 241, 53, 0.2)",
            }}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
}