/**
 * News Page (Detail)
 * Design: Scientific Precision - Swiss International Style
 * ニュースの詳細ページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, FileText, Award, Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface NewsItem {
    date: string;
    category: "publication" | "award" | "event";
    title: string;
    description?: string;
}

const newsItems: NewsItem[] = [
    {
        date: "2025.01.10",
        category: "publication",
        title:
            "陽電子寿命法による高エントロピー合金の空孔移動エンタルピーに関する論文が Acta Materialia に掲載されました。",
        description:
            "CoCrFeNi高エントロピー合金における空孔移動エネルギーを世界で初めて実験的に測定。第一原理計算との比較により、合金中の空孔挙動を原子レベルで解明しました。",
    },
    {
        date: "2024.12.15",
        category: "award",
        title:
            "M2の山田さんが日本金属学会秋期講演大会にて優秀ポスター賞を受賞しました。",
        description:
            "Al-Mg-Si合金の自然時効メカニズムに関する研究が高く評価されました。陽電子消滅法により空孔-溶質原子クラスターの形成過程を明らかにしました。",
    },
    {
        date: "2024.11.20",
        category: "event",
        title: "研究室忘年会を開催しました。",
        description:
            "大阪市内の居酒屋で研究室忘年会を実施。1年間の研究成果を振り返りながら、メンバー間の親睦を深めました。",
    },
    {
        date: "2024.10.05",
        category: "publication",
        title:
            "Al-Mg-Si合金の時効析出に関する論文が Journal of Alloys and Compounds に掲載されました。",
        description:
            "異なる時効条件下での析出物形成と空孔挙動の関係を詳細に解析。最適な熱処理条件の設計指針を提案しました。",
    },
    {
        date: "2024.09.18",
        category: "award",
        title:
            "D2の佐藤さんが国際会議 ICPA-19 にて Best Poster Award を受賞しました。",
        description:
            "水素吸蔵合金における水素トラップサイトの同定に関する研究が国際的に高く評価されました。スペイン・バルセロナで開催された国際会議での受賞です。",
    },
    {
        date: "2024.09.10",
        category: "event",
        title: "日本金属学会2024年秋期講演大会にて4件の発表を行いました。",
        description:
            "富山大学で開催された学会にて、構造材料・機能材料・計算科学の各分野から合計4件の発表を実施しました。",
    },
    {
        date: "2024.08.25",
        category: "publication",
        title:
            "水素吸蔵合金の陽電子消滅特性に関する論文が International Journal of Hydrogen Energy に掲載されました。",
        description:
            "水素吸蔵によるTiNi合金の欠陥構造変化を陽電子消滅法により追跡。水素原子のトラップサイトを特定しました。",
    },
    {
        date: "2024.07.15",
        category: "event",
        title: "前期中間発表会を開催しました。",
        description:
            "全メンバーが前期の研究成果を発表。活発な質疑応答が行われ、後期の研究方針を確認しました。",
    },
    {
        date: "2024.06.20",
        category: "award",
        title: "M1の田中さんが日本金属学会春期講演大会にて優秀発表賞を受賞しました。",
        description:
            "フェライト系ステンレス鋼の水素脆化に関する研究で、明快なプレゼンテーションと深い考察が評価されました。",
    },
    {
        date: "2024.06.05",
        category: "event",
        title: "研究室BBQを開催しました。",
        description:
            "大学近くの河川敷にてBBQを実施。新メンバーとの交流を深め、リフレッシュする良い機会となりました。",
    },
    {
        date: "2024.05.10",
        category: "publication",
        title:
            "第一原理計算による欠陥形成エネルギーの研究が Computational Materials Science に掲載されました。",
        description:
            "VASP を用いた第一原理計算により、Al合金中の空孔形成エネルギーと陽電子寿命を予測。実験値との良好な一致を確認しました。",
    },
    {
        date: "2024.04.10",
        category: "event",
        title: "新年度がスタートしました。新メンバー歓迎会を開催。",
        description:
            "学部4年生5名、修士1年生3名が新たに研究室に配属されました。先輩からのアドバイスを受けながら、研究をスタートしています。",
    },
    {
        date: "2024.03.25",
        category: "event",
        title: "卒業式・修了式が行われました。追いコンを開催。",
        description:
            "学部4年生3名、修士2年生4名、博士後期課程1名が卒業・修了しました。それぞれの新天地での活躍を期待しています。",
    },
    {
        date: "2024.02.20",
        category: "publication",
        title:
            "アモルファス合金の構造緩和に関する論文が Journal of Non-Crystalline Solids に掲載されました。",
        description:
            "陽電子消滅法によりアモルファス合金の自由体積変化を追跡。構造緩和と機械的性質の相関を解明しました。",
    },
    {
        date: "2024.02.15",
        category: "event",
        title: "修士論文発表会・卒業論文発表会を開催しました。",
        description:
            "2年間（4年間）の研究成果を発表。全員が無事に審査を通過し、修了・卒業が決定しました。",
    },
];

const categoryConfig = {
    publication: {
        label: "論文",
        labelEn: "Publication",
        icon: <FileText className="h-4 w-4" />,
        color: "bg-blue-500/10 text-blue-600",
    },
    award: {
        label: "受賞",
        labelEn: "Award",
        icon: <Award className="h-4 w-4" />,
        color: "bg-amber-500/10 text-amber-600",
    },
    event: {
        label: "イベント",
        labelEn: "Event",
        icon: <Calendar className="h-4 w-4" />,
        color: "bg-green-500/10 text-green-600",
    },
};

export default function NewsPage() {
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

    const filterNews = (category: string) => {
        if (category === "all") return newsItems;
        return newsItems.filter((item) => item.category === category);
    };

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
                            News & Achievements
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            活動実績
                        </h1>
                        <div className="w-20 h-1 bg-[var(--electric-blue)]" />
                        <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
                            研究室の最新の活動報告、論文掲載情報、学会発表・受賞などをお知らせします。
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section ref={sectionRef} className="py-16 md:py-24 bg-background">
                    <div className="container">
                        {/* Summary Stats */}
                        <div
                            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

                        {/* Tabs */}
                        <div
                            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0 mb-8">
                                    <TabsTrigger
                                        value="all"
                                        className="px-6 py-3 rounded-lg border border-border bg-background data-[state=active]:bg-[var(--navy-700)] data-[state=active]:text-white data-[state=active]:border-[var(--navy-700)] transition-all"
                                    >
                                        すべて
                                    </TabsTrigger>
                                    {Object.entries(categoryConfig).map(([key, config]) => (
                                        <TabsTrigger
                                            key={key}
                                            value={key}
                                            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background data-[state=active]:bg-[var(--navy-700)] data-[state=active]:text-white data-[state=active]:border-[var(--navy-700)] transition-all"
                                        >
                                            {config.icon}
                                            <span>{config.label}</span>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {["all", "publication", "award", "event"].map((category) => (
                                    <TabsContent key={category} value={category} className="mt-0">
                                        <div className="space-y-4">
                                            {filterNews(category).map((item, index) => (
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
                                                                <p className="text-foreground leading-relaxed group-hover:text-[var(--navy-700)] transition-colors font-medium mb-2">
                                                                    {item.title}
                                                                </p>
                                                                {item.description && (
                                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                                        {item.description}
                                                                    </p>
                                                                )}
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
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>

                        {/* Research Highlights */}
                        <div
                            className={`mt-20 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                主な研究成果
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        year: "2024-2025",
                                        title: "高エントロピー合金の研究",
                                        description:
                                            "世界初の空孔移動エネルギー測定に成功し、Acta Materialia に掲載",
                                        impact: "被引用数: 期待大",
                                    },
                                    {
                                        year: "2023-2024",
                                        title: "水素吸蔵合金の解析",
                                        description:
                                            "水素トラップサイトの同定により、国際会議でBest Poster Award受賞",
                                        impact: "国際的評価",
                                    },
                                    {
                                        year: "2022-2024",
                                        title: "計算科学との融合",
                                        description:
                                            "マテリアルズインフォマティクスを活用した材料開発期間の大幅短縮",
                                        impact: "産学連携成果",
                                    },
                                ].map((highlight, index) => (
                                    <Card
                                        key={index}
                                        className="border-[var(--electric-blue)]/20 bg-gradient-to-br from-muted/30 to-transparent hover:shadow-lg transition-all"
                                    >
                                        <CardContent className="p-6">
                                            <p className="text-sm font-mono text-[var(--electric-blue)] mb-2">
                                                {highlight.year}
                                            </p>
                                            <h3 className="text-xl font-bold text-foreground mb-3">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                {highlight.description}
                                            </p>
                                            <Badge variant="secondary" className="bg-[var(--navy-700)]/10 text-[var(--navy-700)]">
                                                {highlight.impact}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div
                            className={`mt-20 p-8 md:p-12 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white rounded-2xl text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">研究室見学のご案内</h3>
                            <p className="text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
                                当研究室に興味をお持ちの方は、お気軽にご連絡ください。
                                <br />
                                研究設備の見学や、学生との交流の機会を設けております。
                            </p>
                            <Link href="/">
                                <Button
                                    variant="outline"
                                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                                >
                                    ホームページへ戻る
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
