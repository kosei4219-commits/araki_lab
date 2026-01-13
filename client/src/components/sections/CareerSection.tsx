/**
 * Career Section Component
 * Design: Scientific Precision
 * Features: Employment record, company list by industry
 */

import { useEffect, useRef, useState } from "react";
import { Building2, Factory, Car, Zap } from "lucide-react";

interface IndustryCategory {
  icon: React.ReactNode;
  title: string;
  companies: string[];
}

const industryCategories: IndustryCategory[] = [
  {
    icon: <Factory className="h-6 w-6" />,
    title: "鉄鋼・金属素材",
    companies: [
      "JFEスチール",
      "神戸製鋼所",
      "淀川製鋼所",
      "UACJ",
      "大日精化工業",
    ],
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "輸送機・機械",
    companies: ["マツダ", "シマノ", "日本車輌製造", "栗本鐵工所"],
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
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

        {/* Industry Categories */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {industryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--electric-blue)]/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--electric-blue)]/20 flex items-center justify-center text-[var(--electric-blue)]">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.companies.map((company, companyIndex) => (
                  <span
                    key={companyIndex}
                    className="px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-white/15 transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "100%", label: "就職率" },
            { value: "90%+", label: "第一志望内定率" },
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

        {/* Additional Info */}
        <div
          className={`mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h4 className="text-lg font-bold text-white mb-4">
            就職活動サポート
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70">
            <div>
              <p className="font-medium text-white mb-2">OB/OG訪問</p>
              <p className="text-sm">
                各企業で活躍する卒業生との交流機会を設けています。
              </p>
            </div>
            <div>
              <p className="font-medium text-white mb-2">インターンシップ</p>
              <p className="text-sm">
                企業との連携により、インターンシップの機会を紹介しています。
              </p>
            </div>
            <div>
              <p className="font-medium text-white mb-2">推薦制度</p>
              <p className="text-sm">
                大学推薦・学科推薦を活用した就職活動をサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
