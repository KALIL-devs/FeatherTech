export type CourseBadge = "popular" | "new" | "hot";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type CourseCategory =
  | "Technology"
  | "Design"
  | "Business"
  | "Testing"
  | "DevOps";

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  image: string;
  gradient: string;
  badge: CourseBadge;
  tags: string[];
  duration: string;
  level: CourseLevel;
  featured: boolean;
  weekendBatch: boolean;
  fee: number;
  enrolled: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "mern-stack-development",
    title: "MERN Stack Development",
    category: "Technology",
    description:
      "Build full-stack web applications using MongoDB, Express.js, React, and Node.js with hands-on real-world projects.",
    image: "",
    gradient: "linear-gradient(135deg, #1F3D2E 0%, #2A5140 50%, #C8F135 100%)",
    badge: "popular",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    duration: "5 Months",
    level: "Intermediate",
    featured: true,
    weekendBatch: true,
    fee: 28000,
    enrolled: 1240,
    rating: 3.8,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    description:
      "Master Figma, Adobe XD, wireframing, prototyping, and user research to craft world-class digital experiences.",
    image: "",
    gradient: "linear-gradient(135deg, #2d0047 0%, #6b21a8 50%, #e879f9 100%)",
    badge: "new",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    duration: "4 Months",
    level: "Beginner",
    featured: true,
    weekendBatch: true,
    fee: 18000,
    enrolled: 870,
    rating: 4.6,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Business",
    description:
      "Master SEO, Google Ads, Meta campaigns, content marketing, and analytics to drive real business growth.",
    image: "",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 50%, #38bdf8 100%)",
    badge: "popular",
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    duration: "3 Months",
    level: "Beginner",
    featured: false,
    weekendBatch: false,
    fee: 16000,
    enrolled: 980,
    rating: 4.2,
  },
  {
    id: "software-testing",
    title: "Software Testing",
    category: "Testing",
    description:
      "Learn manual testing, automation with Selenium, test planning, bug reporting, and SDLC best practices.",
    image: "",
    gradient: "linear-gradient(135deg, #3d1c00 0%, #7a3800 50%, #f0b86e 100%)",
    badge: "hot",
    tags: ["Manual Testing", "Selenium", "JIRA", "Agile"],
    duration: "3 Months",
    level: "Beginner",
    featured: false,
    weekendBatch: true,
    fee: 18000,
    enrolled: 640,
    rating: 4.3,
  },
  {
    id: "devops",
    title: "DevOps",
    category: "DevOps",
    description:
      "Gain hands-on expertise in CI/CD pipelines, Docker, Kubernetes, Jenkins, and cloud infrastructure automation.",
    image: "",
    gradient: "linear-gradient(135deg, #1a3a4a 0%, #2d6a8f 50%, #C8F135 100%)",
    badge: "new",
    tags: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    duration: "4 Months",
    level: "Intermediate",
    featured: false,
    weekendBatch: false,
    fee: 24000,
    enrolled: 510,
    rating: 4.7,
  },
];

export const featuredCourses = courses.filter((c) => c.featured);
export const getCourseById = (id: string) =>  
  courses.find((c) => c.id === id) ?? null;