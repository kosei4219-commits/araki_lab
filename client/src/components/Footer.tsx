/**
 * Footer Component
 * Design: Scientific Precision - Minimal, informative footer
 */

import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-900)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Lab Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2">荒木研究室</h3>
            <p className="text-sm text-white/60 font-mono mb-4">
              Araki Laboratory
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              大阪大学大学院工学研究科
              <br />
              マテリアル生産科学専攻
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:araki@mat.eng.osaka-u.ac.jp"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">araki@mat.eng.osaka-u.ac.jp</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  〒565-0871 大阪府吹田市山田丘2-1
                  <br />
                  大阪大学工学部 M3棟
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-6 font-mono">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "研究室紹介", href: "#about" },
                { label: "研究内容", href: "#research" },
                { label: "教育・メンバー", href: "#education" },
                { label: "進路実績", href: "#career" },
                { label: "ニュース", href: "#news" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-6 font-mono">
              Related Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                {
                  label: "大阪大学",
                  href: "https://www.osaka-u.ac.jp/",
                },
                {
                  label: "工学研究科",
                  href: "https://www.eng.osaka-u.ac.jp/",
                },
                {
                  label: "マテリアル生産科学専攻",
                  href: "https://www.mat.eng.osaka-u.ac.jp/",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Araki Laboratory, Osaka University. All rights
              reserved.
            </p>
            <p className="text-white/40 text-xs font-mono">
              Graduate School of Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
