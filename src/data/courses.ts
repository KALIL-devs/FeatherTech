// Re-export everything from the canonical source so existing imports keep working.
export type { Course, CourseBadge, CourseLevel, CourseCategory } from "@/lib/courses";
export { courses, featuredCourses, getCourseById } from "@/lib/courses";
