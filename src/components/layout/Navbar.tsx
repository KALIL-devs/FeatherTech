import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto mt-6 flex w-[85%] items-center justify-around rounded-full bg-[#004B23] px-10 py-5">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 font-semibold text-white">
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#B5E48C]">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z"
              fill="#004B23"
            />
          </svg>
        </span>
        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          FeatherTech
        </span>
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center gap-20">
        <li>
          <Link href="/about" className="text-[14px] font-light text-[#eee] cursor-pointer hover:text-white transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/courses" className="text-[14px] font-light text-[#eee] cursor-pointer hover:text-white transition-colors">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-[14px] font-light text-[#eee] cursor-pointer hover:text-white transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-[14px] font-light text-[#eee] cursor-pointer hover:text-white transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}