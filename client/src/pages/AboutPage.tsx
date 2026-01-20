/**
 * About Page (Detail)
 * Design: Scientific Precision - Swiss International Style
 * 研究室紹介の詳細ページ
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import positronImage from "@/assets/images/positron-annihilation.png";

export default function AboutPage() {
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
                            About Us
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            研究室紹介
                        </h1>
                        <div className="w-20 h-1 bg-[var(--electric-blue)]" />
                        <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
                            当研究室では、陽電子消滅法を主軸とした先端的な材料解析技術により、
                            金属・半導体材料の微細構造を原子レベルで解明しています。
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section ref={sectionRef} className="py-16 md:py-24 bg-background">
                    <div className="container">
                        {/* About Positron Annihilation */}
                        <div
                            className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                陽電子消滅法とは
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <p>
                                        材料の機能（強度、電気伝導性など）は、原子の配列とその乱れである
                                        <strong className="text-foreground">『格子欠陥』</strong>
                                        によって決定されます。当研究室では、電子の反粒子である
                                        <strong className="text-foreground">『陽電子（ポジトロン）』</strong>
                                        を材料に入射し、電子と対消滅する際に放出されるガンマ線を測定する
                                        <strong className="text-foreground">『陽電子消滅法』</strong>
                                        を主軸としています。
                                    </p>

                                    <p>
                                        この手法により、電子顕微鏡では観察困難な原子空孔やナノスケールの欠陥を高感度で検出することが可能です。
                                        アインシュタインの E=mc² の原理を工学的に応用し、金属・半導体の微細構造解析において世界的な成果を上げています。
                                    </p>

                                    <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
                                        <h4 className="font-mono text-sm text-[var(--electric-blue)] mb-4">
                                            KEY FEATURES
                                        </h4>
                                        <ul className="space-y-3">
                                            {[
                                                "原子空孔の高感度検出（ppmレベル）",
                                                "非破壊での内部欠陥評価",
                                                "電子状態の直接観測",
                                                "計算科学との融合解析",
                                                "時間分解測定による動的過程の追跡",
                                                "温度可変測定による熱力学的解析",
                                            ].map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2 flex-shrink-0" />
                                                    <span className="text-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric-blue)]/10 to-transparent rounded-2xl" />
                                    <img
                                        src={positronImage}
                                        alt="陽電子消滅プロセスの図解"
                                        className="relative w-full rounded-xl shadow-2xl"
                                    />
                                    <div className="absolute -bottom-4 -right-4 bg-[var(--navy-900)] text-white px-4 py-2 rounded-lg text-sm font-mono">
                                        e⁺ + e⁻ → 2γ
                                    </div>
                                    <p className="mt-8 text-sm text-muted-foreground text-center">
                                        陽電子（e⁺）と電子（e⁻）の対消滅により放出される
                                        <br />
                                        ガンマ線（γ線）を測定し、材料内部の欠陥を検出
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Research Equipment */}
                        <div
                            className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                研究設備
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        title: "陽電子寿命測定システム",
                                        description:
                                            "高速デジタルオシロスコープを用いた陽電子寿命の精密測定装置。時間分解能100ps以下を実現。",
                                    },
                                    {
                                        title: "ドップラー拡がり測定装置",
                                        description:
                                            "高純度Ge検出器による消滅ガンマ線のエネルギー分光装置。電子運動量分布の高精度測定が可能。",
                                    },
                                    {
                                        title: "陽電子ビーム装置",
                                        description:
                                            "低速陽電子ビームによる深さ方向分析装置。表面から数μmの範囲で欠陥分布を評価。",
                                    },
                                    {
                                        title: "計算機シミュレーション環境",
                                        description:
                                            "第一原理計算（VASP等）による陽電子パラメータの理論計算環境を完備。",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-muted/30 border border-border rounded-xl p-6 hover:border-[var(--electric-blue)]/50 transition-colors"
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

                        {/* Statistics */}
                        <div
                            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            {[
                                { value: "30+", label: "年以上の研究実績" },
                                { value: "100+", label: "査読付き論文" },
                                { value: "ppm", label: "レベルの検出感度" },
                                { value: "世界", label: "トップレベルの解析技術" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-3xl md:text-4xl font-bold text-[var(--navy-700)] mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Research Philosophy */}
                        <div
                            className={`mt-20 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white rounded-2xl p-8 md:p-12 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                研究理念
                            </h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    材料の性能は、その内部に潜む微細な欠陥構造によって大きく左右されます。
                                    しかし、これらの欠陥は電子顕微鏡でも観察が困難なほど小さく、従来の手法では評価が難しいものでした。
                                </p>
                                <p>
                                    当研究室では、量子力学の原理に基づく陽電子消滅法という独自の解析技術を駆使し、
                                    <span className="text-[var(--electric-blue)] font-semibold">
                                        「見えないものを見る」
                                    </span>
                                    ことに挑戦し続けています。
                                </p>
                                <p>
                                    原子・電子レベルでの物理的メカニズムの解明を通じて、次世代材料の開発に貢献し、
                                    持続可能な社会の実現を目指します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
