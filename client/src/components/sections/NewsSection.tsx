/**
 * News & Achievements Section Component (Summary)
 * Design: Scientific Precision
 * Features: Latest news with link to detail page
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { FileText, Award, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface NewsItem {
  date: string;
  category: "publication" | "award" | "event";
  title: string;
}

const latestNews: NewsItem[] = [
  {
    date: "2025.01.10",
    category: "publication",
    title:
      "陽電子寿命法による高エントロピー合金の空孔移動エンタルピーに関する論文が Acta Materialia に掲載されました。",
  },
  {
    date: "2024.12.15",
    category: "award",
    title:
      "M2の山田さんが日本金属学会秋期講演大会にて優秀ポスター賞を受賞しました。",
  },
  {
    date: "2024.11.20",
    category: "event",
    title: "研究室忘年会を開催しました。",
  },
  {
    date: "2024.10.05",
    category: "publication",
    title:
      "Al-Mg-Si合金の時効析出に関する論文が Journal of Alloys and Compounds に掲載されました。",
  },
  {
    date: "2024.09.18",
    category: "award",
    title:
      "D2の佐藤さんが国際会議 ICPA-19 にて Best Poster Award を受賞しました。",
  },
];

const categoryConfig = {
  publication: {
    label: "論文",
    icon: <FileText className="h-4 w-4" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  award: {
    label: "受賞",
    icon: <Award className="h-4 w-4" />,
    color: "bg-amber-500/10 text-amber-600",
  },
  event: {
    label: "イベント",
    icon: <Calendar className="h-4 w-4" />,
    color: "bg-green-500/10 text-green-600",
  },
};

export default function NewsSection() {
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
      id="news"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/30"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="section-title">News & Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            活動実績
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            研究室の最新の活動報告、論文掲載情報、学会発表・受賞などをお知らせします。
          </p>
        </div>

        {/* News List */}
        <div
          className={`space-y-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {latestNews.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:border-[var(--electric-blue)]/50 transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Date */}
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex-shrink-0">
                    <Badge
                      variant="secondary"
                      className={`${categoryConfig[item.category].color
                        } flex items-center gap-1`}
                    >
                      {categoryConfig[item.category].icon}
                      {categoryConfig[item.category].label}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed group-hover:text-[var(--navy-700)] transition-colors">
                      {item.title}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden md:block">
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-[var(--electric-blue)] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link href="/news">
            <Button className="bg-[var(--navy-700)] hover:bg-[var(--navy-600)] text-white">
              すべてのニュースを見る
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Summary Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            { value: "100+", label: "査読付き論文" },
            { value: "50+", label: "国際会議発表" },
            { value: "20+", label: "学会賞受賞" },
            { value: "活発", label: "研究活動" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[var(--navy-700)] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
