import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/mjadomData";
import { Menu, X, ArrowRight, FileText, Search } from "lucide-react";

interface HeaderProps {
  onOpenInquiry: (preset?: string) => void;
  onOpenCOA: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInquiry,
  onOpenCOA,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3"
          : "bg-[var(--body)] py-3 sm:py-4 border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Brand Zone - Mjadom Limited */}
          <a
            href="#home"
            className="cursor-pointer flex items-center gap-2 sm:gap-3 shrink min-w-0 group"
          >
            <img
              src="/logo.png"
              alt="Mjadom Limited"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-[var(--text-main)]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="cursor-pointer hover:text-primary transition-colors py-1 relative group whitespace-nowrap"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="cursor-pointer p-2 rounded-full hover:bg-black/5 text-[var(--text-main)] transition-colors"
              title="Search strains and regulations"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Inspect COA button */}
            <button
              onClick={onOpenCOA}
              className="cursor-pointer hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-dark/20 text-primary-dark hover:border-primary hover:bg-white text-xs font-semibold transition-all"
              title="Inspect Certified Batch COA"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Sample COA</span>
            </button>

            {/* Primary Supply Inquiry CTA (hidden on small mobile, prominent in drawer) */}
            <button
              onClick={() => onOpenInquiry()}
              className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-full agro-gradient-btn whitespace-nowrap shadow-xs"
            >
              <span>Supply Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="cursor-pointer lg:hidden p-2 text-[var(--text-main)] hover:text-primary rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="cursor-pointer lg:hidden fixed inset-0 top-[60px] sm:top-[65px] z-50 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer bg-white w-full max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border-t border-black/5"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer text-base font-semibold text-[var(--text-main)] hover:text-primary py-3 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-black/30 text-xs">›</span>
                </a>
              ))}

              <div className="pt-5 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCOA();
                  }}
                  className="cursor-pointer w-full py-3 text-xs font-semibold text-primary-dark bg-cream border border-black/10 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Inspect Batch COA Certificate</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="cursor-pointer w-full py-3.5 text-xs sm:text-sm font-semibold text-white rounded-xl agro-gradient-btn flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Begin Supply Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
