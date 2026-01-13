/**
 * Research Section Component
 * Design: Scientific Precision
 * Features: Three research themes with tab navigation
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { Car, Atom, Calculator } from "lucide-react";

interface ResearchTheme {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  keywords: string[];
  image: string;
}

const researchThemes: ResearchTheme[] = [
  {
    id: "structural",
    icon: <Car className="h-5 w-5" />,
    title: "輸送機器の軽量化・高強度化",
    subtitle: "構造材料",
    description:
      "自動車や航空機の燃費向上に直結するアルミニウム合金や鉄鋼材料の研究を行っています。材料の軽量化と高強度化を両立させることで、持続可能な社会の実現に貢献します。",
    details: [
      "Al-Mg-Si系アルミニウム合金の時効析出メカニズム解明",
      "SUS430フェライト系ステンレス鋼の水素脆化特性評価",
      "高強度鋼の疲労特性と欠陥構造の相関解析",
      "軽金属材料の加工熱処理プロセス最適化",
    ],
    keywords: ["脱炭素", "省エネルギー", "時効析出", "水素脆化特性"],
    image: "/images/materials-research.png",
  },
  {
    id: "functional",
    icon: <Atom className="h-5 w-5" />,
    title: "先進機能材料の創製",
    subtitle: "機能材料",
    description:
      "高エントロピー合金、アモルファス合金、水素吸蔵合金などの次世代材料の探索と機能発現メカニズムの解明に取り組んでいます。",
    details: [
      "高エントロピー合金の格子欠陥と機械的特性の関係解明",
      "アモルファス合金の構造緩和と結晶化過程の追跡",
      "水素吸蔵合金の水素トラップサイトの同定",
      "ナノ結晶材料の粒界構造と特性制御",
    ],
    keywords: ["水素社会", "次世代エネルギー", "ナノ結晶材料", "高エントロピー合金"],
    image: "/images/research-lab.png",
  },
  {
    id: "computational",
    icon: <Calculator className="h-5 w-5" />,
    title: "計算科学と理論解析",
    subtitle: "マテリアルDX",
    description:
      "実験データと計算機シミュレーション（第一原理計算など）を融合させたメカニズム解明を行い、材料設計の効率化と高度化を推進しています。",
    details: [
      "第一原理計算による欠陥形成エネルギーの算出",
      "陽電子寿命の理論計算と実験値の比較検証",
      "機械学習を用いた材料特性予測モデルの構築",
      "マルチスケールシミュレーションによる組織形成予測",
    ],
    keywords: [
      "マテリアルズ・インフォマティクス",
      "電子状態計算",
      "欠陥構造シミュレーション",
      "第一原理計算",
    ],
    image: "/images/seminar-discussion.png",
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
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

        {/* Tabs */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Tabs defaultValue="structural" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0 mb-12">
              {researchThemes.map((theme) => (
                <TabsTrigger
                  key={theme.id}
                  value={theme.id}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background data-[state=active]:bg-[var(--navy-700)] data-[state=active]:text-white data-[state=active]:border-[var(--navy-700)] transition-all"
                >
                  {theme.icon}
                  <span className="hidden sm:inline">{theme.subtitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {researchThemes.map((theme) => (
              <TabsContent key={theme.id} value={theme.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-[var(--electric-blue)]">
                        Theme
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {theme.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {theme.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {theme.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-4 mb-8">
                      {theme.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[var(--navy-700)] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Keywords */}
                    <div>
                      <p className="text-sm font-mono text-muted-foreground mb-3">
                        Keywords
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {theme.keywords.map((keyword, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-[var(--navy-700)]/10 text-[var(--navy-700)] hover:bg-[var(--navy-700)]/20"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-2xl" />
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="relative w-full rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* SDGs Connection */}
        <div
          className={`mt-20 p-8 bg-background rounded-2xl border border-border transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
