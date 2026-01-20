/**
 * Education Page (Detail)
 * Design: Scientific Precision - Swiss International Style
 * 教育・メンバーの詳細ページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    BookOpen,
    Users,
    Calendar,
    Award,
    MessageSquare,
    Globe,
} from "lucide-react";
import { Link } from "wouter";

interface ScheduleItem {
    month: string;
    events: string[];
}

const annualSchedule: ScheduleItem[] = [
    { month: "4月", events: ["新年度スタート", "新メンバー歓迎会"] },
    { month: "6月", events: ["日本金属学会（春期）", "研究室BBQ"] },
    { month: "8月", events: ["夏季休暇", "集中実験期間"] },
    { month: "9月", events: ["日本金属学会（秋期）", "学会発表", "後期開始準備"] },
    { month: "10月", events: ["後期開始", "研究室配属説明会"] },
    { month: "11月", events: ["卒論・修論中間発表", "産学連携ミーティング"] },
    { month: "12月", events: ["研究室忘年会", "年末大掃除"] },
    { month: "1月", events: ["修士論文提出", "卒業論文執筆"] },
    { month: "2月", events: ["修士論文発表", "卒業論文発表"] },
    { month: "3月", events: ["卒業式", "追いコン", "春季休暇"] },
];

const educationFeatures = [
    {
        icon: <BookOpen className="h-6 w-6" />,
        title: "月次リサーチレポート",
        description:
            "毎月の研究進捗を報告し、教員からのフィードバックを受けることで、研究の方向性を常に確認します。",
        detail:
            "スライドでの発表で研究の進捗を報告。教員と学生全体との報告会で詳細な議論を行います。",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "個別指導体制",
        description:
            "教員と学生の距離が近く、研究の疑問点や課題について気軽に相談できる環境を整えています。",
        detail:
            "オープンドア方式で、いつでも教員に相談可能。週1回の個別ミーティングに加え、日常的なディスカッションを重視しています。",
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "国際学会発表",
        description:
            "国内外の学会での発表機会を積極的に設け、国際的に通用する研究者・技術者を育成します。",
        detail:
            "修士課程で国内学会2回以上、国際学会1回以上の発表を目標。旅費は研究室でサポートします。",
    },
    {
        icon: <Award className="h-6 w-6" />,
        title: "学会賞受賞支援",
        description:
            "優秀な研究成果に対しては、学会での受賞を目指した発表準備を全面的にサポートします。",
        detail:
            "ポスター作成、口頭発表のリハーサルを繰り返し実施。過去5年間で10件以上の学会賞を受賞しています。",
    },
    {
        icon: <Calendar className="h-6 w-6" />,
        title: "親睦イベント",
        description:
            "研究だけでなく、BBQや忘年会など、メンバー間の交流を深めるイベントも定期的に開催しています。",
        detail:
            "春のBBQ、夏合宿（隔年）、忘年会、追いコンなど。研究室の垣根を越えた交流も盛んです。",
    },
];

export default function EducationPage() {
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
                            Education & Members
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            教育と研究環境
                        </h1>
                        <div className="w-20 h-1 bg-[var(--electric-blue)]" />
                        <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
                            物理的メカニズムを解明する論理的思考力を育成し、
                            国際的に通用する研究者・技術者を養成します。
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section ref={sectionRef} className="py-16 md:py-24 bg-background">
                    <div className="container">
                        {/* Education Philosophy */}
                        <div
                            className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                教育方針
                            </h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-4xl">
                                <p className="text-xl text-foreground font-semibold">
                                    物理的メカニズムを解明する
                                    <br />
                                    <span className="text-[var(--electric-blue)]">
                                        論理的思考力の育成
                                    </span>
                                </p>

                                <p>
                                    当研究室では、実験結果の解釈だけでなく、
                                    <strong className="text-foreground">
                                        『なぜそのような現象が起きるのか』
                                    </strong>
                                    を原子・電子レベルまで掘り下げて考察する力を養います。
                                </p>

                                <p>
                                    週ごとのリサーチレポートや雑誌会を通じて、論理的なプレゼンテーション能力と、
                                    国際的に通用する研究者・技術者としての素養を磨きます。
                                </p>

                                <p>
                                    研究室の雰囲気は真剣かつ和やかで、先輩後輩の垣根なく活発な議論が行われています。
                                    困ったときには気軽に相談でき、互いに高め合える環境です。
                                </p>
                            </div>
                        </div>

                        {/* Education Features Grid */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                                教育の特徴
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {educationFeatures.map((feature, index) => (
                                    <Card
                                        key={index}
                                        className="border-border hover:border-[var(--electric-blue)]/50 transition-all hover:shadow-lg group"
                                    >
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 rounded-lg bg-[var(--navy-700)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </div>
                                            <h5 className="font-bold text-foreground mb-2 text-lg">
                                                {feature.title}
                                            </h5>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                {feature.description}
                                            </p>
                                            <p className="text-xs text-muted-foreground/80 leading-relaxed pt-3 border-t border-border">
                                                {feature.detail}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Annual Schedule */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Calendar className="h-8 w-8 text-[var(--electric-blue)]" />
                                年間スケジュール
                            </h2>
                            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-[60px] top-0 bottom-0 w-px bg-border hidden md:block" />

                                    <div className="space-y-6">
                                        {annualSchedule.map((item, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="w-14 text-right flex-shrink-0">
                                                    <span className="text-sm font-mono font-bold text-[var(--navy-700)]">
                                                        {item.month}
                                                    </span>
                                                </div>
                                                <div className="relative hidden md:block">
                                                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--navy-700)] border-2 border-background" />
                                                </div>
                                                <div className="flex-1 pl-4 md:pl-0">
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.events.map((event, eventIndex) => (
                                                            <span
                                                                key={eventIndex}
                                                                className="text-sm bg-background px-4 py-2 rounded-full text-foreground border border-border hover:border-[var(--electric-blue)]/50 transition-colors"
                                                            >
                                                                {event}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lab Atmosphere */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                研究室の雰囲気
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        title: "オープンな議論",
                                        description:
                                            "先輩後輩の垣根なく、自由に意見を交換できる雰囲気。疑問点は遠慮なく質問し、互いに教え合う文化が根付いています。",
                                    },
                                    {
                                        title: "真剣さと楽しさの両立",
                                        description:
                                            "研究に対しては真剣に取り組みますが、適度にリフレッシュする時間も大切にしています。BBQや忘年会などのイベントも充実。",
                                    },
                                    {
                                        title: "個人のペースを尊重",
                                        description:
                                            "各自の研究テーマや進捗に応じて、柔軟にスケジュールを調整。自主性を重んじながら、必要なサポートは惜しみません。",
                                    },
                                    {
                                        title: "産学連携・国際交流",
                                        description:
                                            "企業との共同研究や海外研究機関との交流も盛ん。実社会との接点を持ちながら、広い視野を養うことができます。",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-muted/50 to-transparent border border-border rounded-xl p-6"
                                    >
                                        <h3 className="text-xl font-bold text-foreground mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Members Note */}
                        <div
                            className={`p-8 md:p-12 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white rounded-2xl transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">メンバー構成</h3>
                            <p className="text-white/90 leading-relaxed mb-6">
                                現在、教授1名、准教授1名、修士課程学生11名、学部生8名が在籍しています。
                                <br />
                                詳細なメンバー情報や研究室見学をご希望の方は、お気軽にお問い合わせください。
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                                {[
                                    { label: "教員", value: "2名" },
                                    { label: "修士課程", value: "11名" },
                                    { label: "学部生", value: "8名" },
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-3xl font-bold text-[var(--electric-blue)] mb-1">
                                            {item.value}
                                        </p>
                                        <p className="text-sm text-white/70">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
