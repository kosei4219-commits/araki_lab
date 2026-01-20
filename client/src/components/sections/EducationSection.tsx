/**
 * Education & Members Section Component (Summary)
 * Design: Scientific Precision
 * Features: Brief overview with link to detail page
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const educationHighlights = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "月次リサーチレポート",
    description:
      "毎月の研究進捗を報告し、教員からのフィードバックを受けることで、研究の方向性を常に確認します。",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "個別指導体制",
    description:
      "教員と学生の距離が近く、研究の疑問点や課題について気軽に相談できる環境を整えています。",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "国際学会発表",
    description:
      "国内外の学会での発表機会を積極的に設け、国際的に通用する研究者・技術者を育成します。",
  },
];

export default function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="section-title">Education & Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            教育と研究環境
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Philosophy */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
              }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              物理的メカニズムを解明する
              <br />
              <span className="text-[var(--electric-blue)]">
                論理的思考力の育成
              </span>
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                当研究室では、実験結果の解釈だけでなく、
                <strong className="text-foreground">
                  『なぜそのような現象が起きるのか』
                </strong>
                を原子・電子レベルまで掘り下げて考察する力を養います。
              </p>

              <p>
                週ごとのリサーチレポートや雑誌会を通じて、論理的なプレゼンテーション能力と、国際的に通用する研究者・技術者としての素養を磨きます。
              </p>

              <p>
                研究室の雰囲気は真剣かつ和やかで、先輩後輩の垣根なく活発な議論が行われています。
              </p>
            </div>

            {/* Image */}
            <div className="mt-8 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-2xl" />
              <img
                src="/images/seminar-discussion.png"
                alt="研究室でのディスカッション風景"
                className="relative w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Education Features */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
              }`}
          >
            <h4 className="text-lg font-bold text-foreground mb-6">
              教育の特徴
            </h4>
            <div className="space-y-4 mb-8">
              {educationHighlights.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--electric-blue)]/50 transition-colors"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--navy-700)]/10 flex items-center justify-center text-[var(--navy-700)] flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/education">
              <Button className="w-full bg-[var(--navy-700)] hover:bg-[var(--navy-600)] text-white">
                教育・メンバーの詳細を見る
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Members Note */}
        <div
          className={`p-8 bg-muted/50 rounded-2xl border border-border text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-muted-foreground">
            現在、教授1名、准教授1名、修士課程学生11名、学部生8名が在籍しています。
            <br />
            詳細なメンバー情報については、研究室見学時にご案内いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
