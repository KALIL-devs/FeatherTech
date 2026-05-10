import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        {/* <CourseOfferings />  */}
        <WhyChooseUs />
        <TestimonialsSection />
        <FAQSection />
        {/* <FeaturesSection /> */}
      </main>
      <Footer />
    </>
  );
}