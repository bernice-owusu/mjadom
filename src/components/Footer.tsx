import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronUp,
  Scale,
  FileText,
} from "lucide-react";

interface FooterProps {
  onOpenCOA: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCOA, onOpenInquiry }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative text-white bg-black overflow-hidden border-t border-white/10"
    >
      {/* Main Footer Widgets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Corporate Profile (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Mjadom Limited"
                className="h-20 w-auto object-contain shrink-0 invert brightness-0"
              />
            </div>

            <p className="text-xs sm:text-sm text-white leading-relaxed">
              Mjadom Limited is a legally registered Ghanaian company focused on
              the cultivation, processing, and regulated distribution of
              pharmaceutical-grade medical cannabis and standardized botanical
              extracts. Operating strictly within the statutory mandate of
              Ghana’s Narcotics Control Commission (NACOC).
            </p>

            <div className="space-y-2 text-xs text-white pt-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>
                  Head Office: 14 Senchi Street, Airport Residential Area,
                  Accra, Ghana
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+233 (0) 30 298 4421 / +233 (0) 24 518 9033</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>regulatory@mjadom.com · offtake@mjadom.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Regulatory & Licensing (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-white/10 pb-3">
              Ghana Regulatory Architecture
            </h3>
            <ul className="space-y-2.5 text-xs text-white">
              <li>
                <a
                  href="#regulatory"
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white">›</span>
                  <span>Narcotics Control Act, 2020 (Act 1019)</span>
                </a>
              </li>
              <li>
                <a
                  href="#regulatory"
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white">›</span>
                  <span>Amendment Act, 2023 (Act 1100)</span>
                </a>
              </li>
              <li>
                <a
                  href="#regulatory"
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white">›</span>
                  <span>NACOC Regulations (L.I. 2475)</span>
                </a>
              </li>
              <li>
                <a
                  href="#regulatory"
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white">›</span>
                  <span>Fees &amp; Charges Regulations (L.I. 2512)</span>
                </a>
              </li>
              <li>
                <a
                  href="#licensing-categories"
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white">›</span>
                  <span>11 Statutory Licensing Categories</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCOA}
                  className="cursor-pointer hover:text-primary transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-white">›</span>
                  <span>Accredited Batch COA Standards</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Off-Take & Newsletter (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-white/10 pb-3">
              Regulated Off-Take Updates
            </h3>
            <p className="text-xs text-white leading-relaxed">
              Subscribe to Mjadom Limited’s clinical monographs, seasonal
              harvest schedules, and Ghana medical cannabis regulatory
              briefings.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-primary/20 border border-primary text-accent-gold flex items-center gap-2.5 text-xs font-semibold">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>Subscribed to Mjadom Limited regulatory briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/15 focus:outline-hidden focus:border-primary text-xs"
                />
                <button
                  type="submit"
                  className="cursor-pointer w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white agro-gradient-btn flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Regulatory Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="cursor-pointer w-full py-2.5 rounded-xl border border-primary/40 text-accent-gold hover:bg-primary hover:text-white text-xs font-semibold transition-all"
              >
                Direct Institutional Off-Take Portal
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-white leading-relaxed space-y-2">
          <p className="font-bold text-accent-gold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Legal Disclaimer · Republic of Ghana</span>
          </p>
          <p>
            Mjadom Limited is a legally registered company in the Republic of
            Ghana operating strictly within the licensing and regulatory
            provisions of the Narcotics Control Commission Act, 2020 (Act 1019),
            the Narcotics Control Commission (Amendment) Act, 2023 (Act 1100),
            and the Narcotics Control Commission Regulations (L.I. 2475 &amp;
            L.I. 2512). Products are strictly designated for registered health
            clinics, pharmaceutical manufacturing, authorized research
            institutions, and regulated international wholesale export. Unlawful
            possession or recreational use remains prohibited under Ghanaian
            law.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 text-xs text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Mjadom Limited. All Rights Reserved. Accra, Ghana.</p>

          <div className="flex items-center gap-6">
            <a
              href="#regulatory"
              className="cursor-pointer hover:text-white transition-colors"
            >
              NACOC Compliance
            </a>
            <a
              href="#therapeutic-areas"
              className="cursor-pointer hover:text-white transition-colors"
            >
              Clinical Guidelines
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
          className="cursor-pointer fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all hover:scale-105 animate-in fade-in"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
