/**
 * Header Component
 * Design: Scientific Precision - Swiss International Style
 * Features: Sticky navigation, language toggle, mobile menu
 */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "ホーム", labelEn: "Home", href: "#home" },
  { label: "研究室紹介", labelEn: "About Us", href: "#about" },
  { label: "研究内容", labelEn: "Research", href: "#research" },
  { label: "教育・メンバー", labelEn: "Education", href: "#education" },
  { label: "進路", labelEn: "Career", href: "#career" },
  { label: "ニュース", labelEn: "News", href: "#news" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex flex-col"
          >
            <span className="text-lg md:text-xl font-bold text-foreground">
              荒木研究室
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              Araki Laboratory
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {isEnglish ? item.labelEn : item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEnglish(!isEnglish)}
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span className="font-mono text-xs">
                {isEnglish ? "JP" : "EN"}
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <VisuallyHidden>
                  <SheetTitle>ナビゲーションメニュー</SheetTitle>
                  <SheetDescription>サイト内のセクションへ移動できます</SheetDescription>
                </VisuallyHidden>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">荒木研究室</span>
                    <span className="text-sm text-muted-foreground font-mono">
                      Araki Laboratory
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {isEnglish ? item.labelEn : item.label}
                      </a>
                    ))}
                  </nav>
                  <Button
                    variant="outline"
                    onClick={() => setIsEnglish(!isEnglish)}
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{isEnglish ? "日本語に切替" : "Switch to English"}</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
