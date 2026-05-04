import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FeatherTech Institute | Expert Learning & Career Elevation",
  description:
    "FeatherTech Institute offers industry-leading courses in technology, competitive exams, and professional skills. Elevate your career with expert instructors.",
  keywords: [
    "FeatherTech Institute",
    "online courses",
    "tech education",
    "competitive exam coaching",
    "professional training",
  ],
  authors: [{ name: "FeatherTech Institute" }],
  openGraph: {
    title: "FeatherTech Institute | Expert Learning",
    description: "Empowering students through expert, career-focused learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFBF7]">{children}</body>
    </html>
  );
}
