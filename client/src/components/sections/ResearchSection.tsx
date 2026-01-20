/**
 * Research Section Component (Summary)
 * Design: Scientific Precision
 * Features: Brief overview cards with link to detail page
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, Atom, Calculator } from "lucide-react";
import { Link } from "wouter";

const researchHighlights = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "輸送機器の軽量化・高強度化",
    subtitle: "構造材料",
    description:
      "自動車や航空機の燃費向上に直結するアルミニウム合金や鉄鋼材料の研究を行っています。",
  },
  {
    icon: <Atom className="h-8 w-8" />,
    title: "先進機能材料の創製",
    subtitle: "機能材料",
    description:
      "高エントロピー合金、アモルファス合金、水素吸蔵合金などの次世代材料の探索と機能発現メカニズムの解明に取り組んでいます。",
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "計算科学と理論解析",
    subtitle: "マテリアルDX",
    description:
      "実験データと計算機シミュレーションを融合させたメカニズム解明を行い、材料設計の効率化と高度化を推進しています。",
  },
];

export default function ResearchSection() {
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
      id="research"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/30"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="section-title">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            社会課題への貢献
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            専門的な研究が、どのように社会の課題（SDGs、脱炭素など）と結びついているかを示します。
          </p>
        </div>

        {/* Research Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {researchHighlights.map((theme, index) => (
            <Card
              key={index}
              className="border-border hover:border-[var(--electric-blue)]/50 transition-all hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-[var(--navy-700)] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {theme.icon}
                </div>
                <p className="text-sm font-mono text-[var(--electric-blue)] mb-2">
                  {theme.subtitle}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {theme.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link href="/research">
            <Button className="bg-[var(--navy-700)] hover:bg-[var(--navy-600)] text-white">
              研究内容の詳細を見る
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* SDGs Connection */}
        <div
          className={`mt-16 p-8 bg-background rounded-2xl border border-border transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                持続可能な社会への貢献
              </h4>
              <p className="text-muted-foreground">
                当研究室の研究は、SDGs目標7（エネルギーをみんなに そしてクリーンに）、
                目標9（産業と技術革新の基盤をつくろう）、目標13（気候変動に具体的な対策を）
                に貢献しています。
              </p>
            </div>
            <div className="flex gap-3">
              {["7", "9", "13"].map((num) => (
                <div
                  key={num}
                  className="w-12 h-12 rounded-lg bg-[var(--navy-700)] text-white flex items-center justify-center font-bold"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
