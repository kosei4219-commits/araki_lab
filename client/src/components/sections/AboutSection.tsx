/**
 * About Section Component
 * Design: Scientific Precision
 * Features: Positron annihilation explanation with diagram
 */

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-title">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            独自の解析技術について
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              目に見えない原子の空孔を検知する
              <br />
              <span className="text-[var(--electric-blue)]">
                『陽電子プローブ』
              </span>
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                材料の機能（強度、電気伝導性など）は、原子の配列とその乱れである
                <strong className="text-foreground">『格子欠陥』</strong>
                によって決定されます。当研究室では、電子の反粒子である
                <strong className="text-foreground">
                  『陽電子（ポジトロン）』
                </strong>
                を材料に入射し、電子と対消滅する際に放出されるガンマ線を測定する
                <strong className="text-foreground">『陽電子消滅法』</strong>
                を主軸としています。
              </p>

              <p>
                この手法により、電子顕微鏡では観察困難な原子空孔やナノスケールの欠陥を高感度で検出することが可能です。アインシュタインの
                E=mc² の原理を工学的に応用し、金属・半導体の微細構造解析において世界的な成果を上げています。
              </p>

              <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
                <h4 className="font-mono text-sm text-[var(--electric-blue)] mb-3">
                  KEY FEATURES
                </h4>
                <ul className="space-y-3">
                  {[
                    "原子空孔の高感度検出（ppmレベル）",
                    "非破壊での内部欠陥評価",
                    "電子状態の直接観測",
                    "計算科学との融合解析",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Diagram */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric-blue)]/10 to-transparent rounded-2xl" />
              <img
                src="/images/positron-annihilation.png"
                alt="陽電子消滅プロセスの図解"
                className="relative w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[var(--navy-900)] text-white px-4 py-2 rounded-lg text-sm font-mono">
                e⁺ + e⁻ → 2γ
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-sm text-muted-foreground text-center">
              陽電子（e⁺）と電子（e⁻）の対消滅により放出される
              <br />
              ガンマ線（γ線）を測定し、材料内部の欠陥を検出
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      </div>
    </section>
  );
}
