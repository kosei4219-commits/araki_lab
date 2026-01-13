/**
 * Education & Members Section Component
 * Design: Scientific Precision
 * Features: Education philosophy, annual schedule, lab atmosphere
 */

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Users,
  Calendar,
  Award,
  MessageSquare,
  Globe,
} from "lucide-react";

interface ScheduleItem {
  month: string;
  events: string[];
}

const annualSchedule: ScheduleItem[] = [
  { month: "4月", events: ["新年度スタート", "研究テーマ決定"] },
  { month: "5月", events: ["中間発表準備"] },
  { month: "6月", events: ["日本金属学会（春期）"] },
  { month: "7月", events: ["前期中間発表"] },
  { month: "8月", events: ["夏季休暇", "集中実験期間"] },
  { month: "9月", events: ["日本金属学会（秋期）", "学会発表"] },
  { month: "10月", events: ["後期開始", "研究室配属説明会"] },
  { month: "11月", events: ["卒論・修論中間発表"] },
  { month: "12月", events: ["研究室忘年会"] },
  { month: "1月", events: ["修士論文提出", "卒業論文執筆"] },
  { month: "2月", events: ["修士論文発表", "卒業論文発表"] },
  { month: "3月", events: ["卒業式", "追いコン"] },
];

const educationFeatures = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "週次リサーチレポート",
    description:
      "毎週の研究進捗を報告し、教員からのフィードバックを受けることで、研究の方向性を常に確認します。",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "雑誌会・輪講",
    description:
      "最新の論文を読み解き、発表することで、専門知識の深化とプレゼンテーション能力を養います。",
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
  {
    icon: <Award className="h-6 w-6" />,
    title: "学会賞受賞支援",
    description:
      "優秀な研究成果に対しては、学会での受賞を目指した発表準備を全面的にサポートします。",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "親睦イベント",
    description:
      "研究だけでなく、BBQや忘年会など、メンバー間の交流を深めるイベントも定期的に開催しています。",
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
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-title">Education & Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            教育と研究環境
          </h2>
          <div className="w-20 h-1 bg-[var(--electric-blue)]" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Philosophy */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
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
                研究室の雰囲気は真剣かつ和やかで、先輩後輩の垣根なく活発な議論が行われています。困ったときには気軽に相談でき、互いに高め合える環境です。
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

          {/* Annual Schedule */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[var(--electric-blue)]" />
              年間スケジュール
            </h4>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-px bg-border" />

              <div className="space-y-4">
                {annualSchedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-14 text-right">
                      <span className="text-sm font-mono text-muted-foreground">
                        {item.month}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--navy-700)] border-2 border-background" />
                    </div>
                    <div className="flex-1 pl-4 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.events.map((event, eventIndex) => (
                          <span
                            key={eventIndex}
                            className="text-sm bg-muted px-3 py-1 rounded-full text-foreground"
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

        {/* Education Features Grid */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h4 className="text-lg font-bold text-foreground mb-8 text-center">
            教育の特徴
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-[var(--electric-blue)]/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--navy-700)]/10 flex items-center justify-center text-[var(--navy-700)] mb-4">
                    {feature.icon}
                  </div>
                  <h5 className="font-bold text-foreground mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Members Note */}
        <div
          className={`mt-16 p-8 bg-muted/50 rounded-2xl border border-border text-center transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground">
            現在、教授1名、准教授1名、助教1名、博士課程学生、修士課程学生、学部4年生が在籍しています。
            <br />
            詳細なメンバー情報については、研究室見学時にご案内いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
