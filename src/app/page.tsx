import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CourseOfferings from "@/components/home/CourseOfferings";
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CourseOfferings />
        <WhyChooseUs />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />

        {/* <CoursesSection />
        <FeaturesSection /> */}



      </main>
      <Footer />
    </>
  );
}