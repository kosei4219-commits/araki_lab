/**
 * Home Page
 * Design: Scientific Precision - Swiss International Style
 * 荒木研究室 Webサイト メインページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import EducationSection from "@/components/sections/EducationSection";
import CareerSection from "@/components/sections/CareerSection";
import NewsSection from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <EducationSection />
        <CareerSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
