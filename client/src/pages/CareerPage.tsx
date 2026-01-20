/**
 * Career Page (Detail)
 * Design: Scientific Precision - Swiss International Style
 * 進路の詳細ページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Building2, Factory, Car, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

interface IndustryCategory {
    icon: React.ReactNode;
    title: string;
    companies: string[];
    description?: string;
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
            "住友金属鉱山",
        ],
        description:
            "材料科学の知識を活かし、次世代材料の開発や品質管理部門で活躍しています。",
    },
    {
        icon: <Car className="h-6 w-6" />,
        title: "輸送機・機械",
        companies: ["マツダ", "シマノ", "日本車輌製造", "栗本鐵工所", "三菱重工業"],
        description:
            "自動車や精密機械の設計・開発部門で、軽量化・高強度化に貢献しています。",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "インフラ・エネルギー",
        companies: ["住友電気工業", "大阪ガス", "関西電力", "中部電力"],
        description:
            "電力・ガスなどのインフラ企業で、エネルギー関連材料の研究開発を担当しています。",
    },
    {
        icon: <Building2 className="h-6 w-6" />,
        title: "その他製造業・研究機関",
        companies: ["大学院進学", "研究機関", "化学メーカー", "電機メーカー"],
        description:
            "博士課程進学や公的研究機関、その他幅広い製造業で専門性を発揮しています。",
    },
];

export default function CareerPage() {
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
                            Career
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            卒業後の進路
                        </h1>
                        <div className="w-20 h-1 bg-[var(--electric-blue)]" />
                        <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
                            素材メーカーから完成車メーカー、インフラ企業まで、
                            基幹産業の第一線で卒業生が活躍しています。
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section ref={sectionRef} className="py-16 md:py-24 bg-background">
                    <div className="container">
                        {/* Employment Stats */}
                        <div
                            className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                                就職実績
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    { value: "100%", label: "就職率", icon: <TrendingUp /> },
                                    { value: "多数", label: "大手企業への就職", icon: <Building2 /> },
                                    { value: "充実", label: "キャリアサポート", icon: <Users /> },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-[var(--navy-700)]/10 flex items-center justify-center text-[var(--navy-700)] mx-auto mb-4">
                                            {stat.icon}
                                        </div>
                                        <p className="text-3xl md:text-4xl font-bold text-[var(--navy-700)] mb-2">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Industry Categories */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                業種別就職先
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {industryCategories.map((category, index) => (
                                    <Card
                                        key={index}
                                        className="border-border hover:border-[var(--electric-blue)]/50 transition-all hover:shadow-lg"
                                    >
                                        <CardContent className="p-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-lg bg-[var(--navy-700)] flex items-center justify-center text-white">
                                                    {category.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-foreground">
                                                    {category.title}
                                                </h3>
                                            </div>
                                            {category.description && (
                                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                    {category.description}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap gap-2">
                                                {category.companies.map((company, companyIndex) => (
                                                    <span
                                                        key={companyIndex}
                                                        className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground hover:bg-[var(--navy-700)]/10 transition-colors"
                                                    >
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Career Support */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                就職活動サポート
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "OB/OG訪問",
                                        description:
                                            "各企業で活躍する卒業生との交流機会を設けています。実際の仕事内容や社風について直接聞くことができます。",
                                        details: [
                                            "年2回のOB/OG交流会開催",
                                            "個別訪問のアレンジ",
                                            "卒業生データベースの提供",
                                        ],
                                    },
                                    {
                                        title: "インターンシップ",
                                        description:
                                            "企業との連携により、インターンシップの機会を紹介しています。実務経験を通じて、適性を見極めることができます。",
                                        details: [
                                            "産学連携企業への優先紹介",
                                            "夏季・春季インターン情報提供",
                                            "事前準備・事後フォロー",
                                        ],
                                    },
                                    {
                                        title: "推薦制度",
                                        description:
                                            "大学推薦・学科推薦を活用した就職活動をサポートします。研究実績を評価してもらえる企業を紹介しています。",
                                        details: [
                                            "大学推薦枠の情報提供",
                                            "推薦書の作成サポート",
                                            "企業との事前マッチング",
                                        ],
                                    },
                                ].map((item, index) => (
                                    <Card
                                        key={index}
                                        className="border-border hover:border-[var(--electric-blue)]/50 transition-all"
                                    >
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold text-foreground mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {item.details.map((detail, detailIndex) => (
                                                    <li
                                                        key={detailIndex}
                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-1.5 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Graduate School Path */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                大学院進学
                            </h2>
                            <div className="bg-muted/30 border border-border rounded-2xl p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-4">
                                            修士課程への進学
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            学部4年生の約90%は修士課程に進学します。
                                            より深い専門知識と研究スキルを身につけ、
                                            大手企業の研究開発職や技術職への道が開けます。
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "2年間で国際学会発表を経験",
                                                "査読付き論文の執筆にチャレンジ",
                                                "産学連携プロジェクトへの参画",
                                                "最先端の研究設備を使用",
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-1.5 flex-shrink-0" />
                                                    <span className="text-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-4">
                                            博士課程への進学
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            さらに研究を深めたい学生は博士課程へ進学し、
                                            大学教員や公的研究機関の研究者を目指すことができます。
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "国際共同研究への参画",
                                                "学振DC取得のサポート",
                                                "海外留学の機会",
                                                "学会賞受賞を目指した研究",
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-1.5 flex-shrink-0" />
                                                    <span className="text-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
