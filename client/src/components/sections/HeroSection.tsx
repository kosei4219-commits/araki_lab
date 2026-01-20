/**
 * Hero Section Component
 * Design: Scientific Precision
 * Features: Full-screen hero with crystal structure visual, animated text
 */

import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-crystal.png`}
          alt="Crystal Structure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-900)]/80 via-[var(--navy-900)]/70 to-[var(--navy-900)]/90" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Lab Name */}
          <div
            className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-sm md:text-base font-mono text-[var(--electric-blue)] tracking-widest mb-4">
              OSAKA UNIVERSITY · GRADUATE SCHOOL OF ENGINEERING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              荒木研究室
            </h1>
          </div>

          {/* Main Catchphrase */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-4">
              原子・電子レベルの
              <span className="text-[var(--electric-blue)] font-medium">
                『格子欠陥』
              </span>
              制御で、
              <br className="hidden md:block" />
              材料機能の核心に迫る。
            </h2>
          </div>

          {/* Sub Catchphrase */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              陽電子消滅法 × 計算科学。
              <br />
              世界をリードする解析技術で、未踏の材料設計へ。
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/90 text-white px-8"
            >
              研究内容を見る
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#education");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              研究室に参加する
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
    </section>
  );
}
