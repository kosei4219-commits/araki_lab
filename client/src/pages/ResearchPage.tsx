/**
 * Research Page (Detail)
 * Design: Scientific Precision - Swiss International Style
 * 研究内容の詳細ページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Car, Atom, Calculator } from "lucide-react";
import { Link } from "wouter";

interface ResearchTheme {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    keywords: string[];
    image: string;
    additionalInfo?: string;
    achievements?: string[];
}

const researchThemes: ResearchTheme[] = [
    {
        id: "structural",
        icon: <Car className="h-6 w-6" />,
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
        additionalInfo:
            "輸送機器の軽量化は、CO2排出削減に直結する重要な技術課題です。当研究室では、陽電子消滅法により析出物周辺の空孔クラスターを検出し、時効硬化のメカニズムを原子レベルで解明しています。これにより、より効率的な熱処理条件の設計が可能となります。",
        achievements: [
            "Al-Mg-Si合金の自然時効メカニズムを世界で初めて解明（Acta Materialia, 2024）",
            "フェライト系ステンレス鋼の水素トラップサイトの同定に成功（Scripta Materialia, 2023）",
            "自動車メーカーとの共同研究により実用材料への適用を実現",
        ],
    },
    {
        id: "functional",
        icon: <Atom className="h-6 w-6" />,
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
        keywords: [
            "水素社会",
            "次世代エネルギー",
            "ナノ結晶材料",
            "高エントロピー合金",
        ],
        image: "/images/research-lab.png",
        additionalInfo:
            "次世代のエネルギー社会を支える機能材料の開発において、材料内部の欠陥構造の理解は不可欠です。特に水素吸蔵合金における水素原子のトラップサイトの解明は、水素社会実現に向けた重要な基礎研究です。",
        achievements: [
            "高エントロピー合金の空孔移動エネルギーを世界で初めて測定（Acta Materialia, 2025）",
            "アモルファス合金の自由体積と機械的性質の相関を解明（Journal of Non-Crystalline Solids, 2024）",
            "水素吸蔵合金の理想的なトラップサイト設計指針を提案（Int. J. Hydrogen Energy, 2024）",
        ],
    },
    {
        id: "computational",
        icon: <Calculator className="h-6 w-6" />,
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
        additionalInfo:
            "計算科学の発展により、実験だけでは困難だった原子レベルの現象解明が可能になりました。当研究室では、VASPやOpenMXなどの第一原理計算コードを用いて、陽電子寿命や電子-陽電子対消滅率を理論的に予測し、実験結果との比較により材料中の欠陥種を同定しています。",
        achievements: [
            "第一原理計算による陽電子パラメータのデータベースを構築",
            "機械学習を用いた欠陥構造予測モデルの開発（Computational Materials Science, 2024）",
            "理論と実験の融合により、従来1年かかっていた材料開発期間を3ヶ月に短縮",
        ],
    },
];

export default function ResearchPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16 md:pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white">
                    <div className="container">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                className="text-white hover:text-[var(--electric-blue)] hover:bg-white/10 mb-8"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                ホームに戻る
                            </Button>
                        </Link>
                        <p className="text-sm font-medium tracking-widest uppercase text-[var(--electric-blue)] mb-4 font-mono">
                            Research
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            研究内容
                        </h1>
                        <div className="w-20 h-1 bg-[var(--electric-blue)]" />
                        <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
                            専門的な研究が、社会の課題（SDGs、脱炭素など）と
                            どのように結びついているかを示します。
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section ref={sectionRef} className="py-16 md:py-24 bg-background">
                    <div className="container">
                        <div className="space-y-24">
                            {researchThemes.map((theme, themeIndex) => (
                                <div
                                    key={theme.id}
                                    className={`transition-all duration-700 ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{ transitionDelay: `${themeIndex * 200}ms` }}
                                >
                                    {/* Theme Header */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-lg bg-[var(--navy-700)] text-white flex items-center justify-center">
                                            {theme.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-mono text-[var(--electric-blue)]">
                                                {theme.subtitle}
                                            </p>
                                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                                {theme.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Theme Content Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                        {/* Left: Description and Details */}
                                        <div className="space-y-8">
                                            <p className="text-muted-foreground leading-relaxed text-lg">
                                                {theme.description}
                                            </p>

                                            {theme.additionalInfo && (
                                                <div className="bg-muted/30 border border-border rounded-lg p-6">
                                                    <p className="text-foreground leading-relaxed">
                                                        {theme.additionalInfo}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Details List */}
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground mb-4">
                                                    研究テーマ
                                                </h3>
                                                <div className="space-y-3">
                                                    {theme.details.map((detail, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <span className="w-6 h-6 rounded-full bg-[var(--navy-700)] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                {index + 1}
                                                            </span>
                                                            <span className="text-foreground">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
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

                                        {/* Right: Image */}
                                        <div>
                                            <div className="relative mb-6">
                                                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-2xl" />
                                                <img
                                                    src={theme.image}
                                                    alt={theme.title}
                                                    className="relative w-full rounded-xl shadow-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    {theme.achievements && theme.achievements.length > 0 && (
                                        <Card className="border-[var(--electric-blue)]/20">
                                            <CardContent className="p-6">
                                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)]" />
                                                    主な研究成果
                                                </h3>
                                                <ul className="space-y-3">
                                                    {theme.achievements.map((achievement, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-3 text-muted-foreground"
                                                        >
                                                            <span className="text-[var(--electric-blue)] mt-1">
                                                                •
                                                            </span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Divider */}
                                    {themeIndex < researchThemes.length - 1 && (
                                        <div className="mt-20 border-t border-border" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* SDGs Connection */}
                        <div
                            className={`mt-24 p-8 md:p-12 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white rounded-2xl transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-4">
                                        持続可能な社会への貢献
                                    </h3>
                                    <p className="text-white/90 leading-relaxed">
                                        当研究室の研究は、SDGs目標7（エネルギーをみんなに
                                        そしてクリーンに）、目標9（産業と技術革新の基盤をつくろう）、
                                        目標13（気候変動に具体的な対策を）に貢献しています。
                                        材料の高性能化により、エネルギー効率の向上や環境負荷の低減を実現し、
                                        持続可能な社会の実現を目指しています。
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    {["7", "9", "13"].map((num) => (
                                        <div
                                            key={num}
                                            className="w-16 h-16 rounded-lg bg-[var(--electric-blue)]/20 border-2 border-[var(--electric-blue)] flex items-center justify-center font-bold text-xl"
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
