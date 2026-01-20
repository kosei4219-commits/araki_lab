/**
 * Header Component
 * Design: Scientific Precision - Swiss International Style
 * Features: Sticky navigation, language toggle, mobile menu, multi-page support
 */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

interface NavItem {
  label: string;
  labelEn: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "ホーム", labelEn: "Home", path: "/" },
  { label: "研究室紹介", labelEn: "About Us", path: "/about" },
  { label: "研究内容", labelEn: "Research", path: "/research" },
  { label: "教育・メンバー", labelEn: "Education", path: "/education" },
  { label: "進路", labelEn: "Career", path: "/career" },
  { label: "ニュース", labelEn: "News", path: "/news" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="text-lg md:text-xl font-bold text-foreground">
                荒木研究室
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Araki Laboratory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {isEnglish ? item.labelEn : item.label}
                </span>
              </Link>
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
                      <Link key={item.path} href={item.path}>
                        <span
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
                        >
                          {isEnglish ? item.labelEn : item.label}
                        </span>
                      </Link>
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
