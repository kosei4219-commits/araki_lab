/**
 * Career Section Component (Summary)
 * Design: Scientific Precision
 * Features: Brief overview with link to detail page
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Car, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const industryHighlights = [
  {
    icon: <Factory className="h-6 w-6" />,
    title: "鉄鋼・金属素材",
    companies: ["JFEスチール", "神戸製鋼所", "UACJ"],
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "輸送機・機械",
    companies: ["マツダ", "シマノ", "日本車輌製造"],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "インフラ・エネルギー",
    companies: ["住友電気工業", "大阪ガス"],
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "その他製造業・研究機関",
    companies: ["大学院進学", "研究機関", "その他製造業"],
  },
];

export default function CareerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--navy-900)] text-white"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--electric-blue)] mb-4 font-mono">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            卒業後の進路
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
        </div>

        {/* Main Message */}
        <div
          className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
            素材メーカーから完成車メーカー、インフラ企業まで、
            <br className="hidden md:block" />
            <span className="text-[var(--electric-blue)] font-medium">
              基幹産業の第一線
            </span>
            で卒業生が活躍しています。
          </p>
        </div>

        {/* Industry Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {industryHighlights.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[var(--electric-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/20 flex items-center justify-center text-[var(--electric-blue)] mb-3">
                {category.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.companies.slice(0, 2).map((company, companyIndex) => (
                  <span
                    key={companyIndex}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80"
                  >
                    {company}
                  </span>
                ))}
                {category.companies.length > 2 && (
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80">
                    他
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link href="/career">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
            >
              進路の詳細を見る
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            { value: "100%", label: "就職率" },
            { value: "多数", label: "大手企業への就職" },
            { value: "充実", label: "キャリアサポート" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[var(--electric-blue)] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
