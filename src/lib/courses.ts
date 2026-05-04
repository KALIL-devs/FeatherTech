export type CourseBadge = "popular" | "new" | "hot";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type CourseCategory =
  | "Technology"
  | "Competitive Exams"
  | "Design"
  | "Business";

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  /** Absolute path under /public or empty string (user will supply images). */
  image: string;
  /** CSS gradient shown when image is empty. */
  gradient: string;
  badge: CourseBadge;
  tags: string[];
  duration: string;
  level: CourseLevel;
  featured: boolean;
  weekendBatch: boolean;
  /** Fee in INR */
  fee: number;
  /** Number of enrolled students */
  enrolled: number;
}

export const courses: Course[] = [
  {
    id: "full-stack-web-dev",
    title: "Full-Stack Web Development",
    category: "Technology",
    description:
      "Master React, Node.js, and PostgreSQL to build production-grade applications from front to back.",
    image: "",
    gradient: "linear-gradient(135deg, #004B23 0%, #006B34 50%, #B5E48C 100%)",
    badge: "popular",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    duration: "6 Months",
    level: "Intermediate",
    featured: true,
    weekendBatch: true,
    fee: 28000,
    enrolled: 1240,
  },
  {
    id: "python-data-science",
    title: "Python & Data Science",
    category: "Technology",
    description:
      "From Python fundamentals to machine learning pipelines and data visualisation — the complete path.",
    image: "",
    gradient: "linear-gradient(135deg, #1a3a4a 0%, #2d6a8f 50%, #B5E48C 100%)",
    badge: "new",
    tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    duration: "4 Months",
    level: "Beginner",
    featured: false,
    weekendBatch: false,
    fee: 22000,
    enrolled: 890,
  },
  {
    id: "upsc-foundation",
    title: "UPSC Civil Services Foundation",
    category: "Competitive Exams",
    description:
      "Comprehensive GS coverage with expert mentors, mock tests, and current-affairs sessions every week.",
    image: "",
    gradient: "linear-gradient(135deg, #3d1c00 0%, #7a3800 50%, #f0b86e 100%)",
    badge: "hot",
    tags: ["GS I-IV", "CSAT", "Essay", "Mock Tests"],
    duration: "12 Months",
    level: "Advanced",
    featured: true,
    weekendBatch: true,
    fee: 45000,
    enrolled: 530,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Mastery",
    category: "Design",
    description:
      "Learn Figma, design systems, user research, and prototyping to craft world-class digital experiences.",
    image: "",
    gradient: "linear-gradient(135deg, #2d0047 0%, #6b21a8 50%, #e879f9 100%)",
    badge: "new",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    duration: "3 Months",
    level: "Beginner",
    featured: false,
    weekendBatch: true,
    fee: 18000,
    enrolled: 670,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    category: "Business",
    description:
      "Master Google Ads, Meta campaigns, SEO, and analytics to drive measurable business growth.",
    image: "",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 50%, #38bdf8 100%)",
    badge: "popular",
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    duration: "3 Months",
    level: "Intermediate",
    featured: false,
    weekendBatch: false,
    fee: 16000,
    enrolled: 980,
  },
  {
    id: "bank-po-prep",
    title: "Bank PO & Clerk Preparation",
    category: "Competitive Exams",
    description:
      "SBI, IBPS, and RRB exam prep with quantitative aptitude, reasoning, English, and GK modules.",
    image: "",
    gradient: "linear-gradient(135deg, #004B23 0%, #005f2e 50%, #78c87e 100%)",
    badge: "popular",
    tags: ["Quant", "Reasoning", "English", "GK"],
    duration: "5 Months",
    level: "Beginner",
    featured: false,
    weekendBatch: true,
    fee: 20000,
    enrolled: 1560,
  },
];

export const featuredCourses = courses.filter((c) => c.featured);
export const getCourseById = (id: string) =>
  courses.find((c) => c.id === id) ?? null;
