import React, { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  FileText,
  Award,
  Sparkles,
  Sun,
} from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenCOA: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onOpenCOA,
}) => {
  const [activeMetricTab, setActiveMetricTab] = useState<
    "capacity" | "quality" | "logistics"
  >("capacity");

  return (
    <section
      id="home"
      className="relative bg-(--dark-teal) text-white min-h-145 lg:min-h-180 flex items-center overflow-hidden"
    >
      {/* Background Photography with High-Tech Greenhouse */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mjadom_hero_cultivation_1792075722248.jpg"
          alt="Mjadom Limited pharmaceutical medical cannabis cultivation greenhouse in Ghana"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradients & Scrim */}
        <div className="absolute inset-0 bg-linear-to-r from-(--dark-teal)/85 via-(--dark-teal)/55 to-(--dark-teal)/25" />
        <div className="absolute inset-0 bg-linear-to-t from-(--dark-teal)/90 via-transparent to-(--dark-teal)/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Copy (Col 1-8) */}
          <div className="lg:col-span-8">
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-7 lg:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4 sm:space-y-6">
              {/* Display Headline */}
              <h1 className="text-2xl sm:text-4xl xl:text-4xl font-bold tracking-tight text-white leading-[1.14] text-balance">
                Pharmaceutical-Grade Cannabis Cultivated in Ghana for Global
                Healthcare
              </h1>

              {/* Narrative description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
                <strong>Mjadom Limited</strong> is a legally registered Ghanaian
                company cultivating GACP-compliant medical cannabis flower and
                standardized botanical extracts under Ghana’s NACOC regulatory
                framework for healthcare therapies and regulated international
                pharmaceutical off-take.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="cursor-pointer w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-white text-xs sm:text-sm md:text-base agro-gradient-btn flex items-center justify-center gap-2 shadow-xl group transition-all"
                >
                  <span>Begin Supply Partnership Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenCOA}
                  className="cursor-pointer w-full sm:w-auto px-5 py-3 rounded-full font-semibold text-white text-xs sm:text-sm md:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>Inspect Batch COA &amp; Specs</span>
                </button>
              </div>

              {/* Regulatory trust badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-white/15 text-white/80 text-[11px] sm:text-xs">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>NACOC Statutory Licensing</span>
                </div>
                <div className="h-3 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent-gold shrink-0" />
                  <span>WHO-GACP Phase 1 Compliant</span>
                </div>
                <div className="h-3 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-white shrink-0" />
                  <span>ISO/IEC 17025 Batch Validation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specifications Interactive Card (Col 9-12) */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-accent-gold block">
                    Production Snapshot
                  </span>
                  <span className="text-[10px] text-white/70">
                    Mjadom Operational Parameters
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-sm bg-primary text-white font-extrabold uppercase font-mono">
                  Active 2026
                </span>
              </div>

              {/* Segmented mini switcher */}
              <div className="flex items-center gap-1 p-1 bg-black/20 rounded-xl">
                {[
                  { id: "capacity", label: "Capacity" },
                  { id: "quality", label: "Quality" },
                  { id: "logistics", label: "Export" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveMetricTab(t.id as any)}
                    className={`cursor-pointer flex-1 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                      activeMetricTab === t.id
                        ? "bg-primary text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeMetricTab === "capacity" && (
                <div className="space-y-2.5 text-[11px] sm:text-xs animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">
                      Annual Pilot Capacity:
                    </span>
                    <span className="font-bold text-white font-mono">
                      50,000 kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">
                      Cultivation Structure:
                    </span>
                    <span className="font-semibold text-white">
                      Hybrid Greenhouse
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Photoperiod:</span>
                    <span className="font-semibold text-accent-gold">
                      12h Natural Sun (Year-Round)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Minimum Order (MOQ):</span>
                    <span className="font-bold text-white font-mono">
                      25 kg per Batch
                    </span>
                  </div>
                </div>
              )}

              {activeMetricTab === "quality" && (
                <div className="space-y-2.5 text-[11px] sm:text-xs animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Cultivation Standard:</span>
                    <span className="font-bold text-white">
                      WHO-GACP Guidelines
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Analytical Lab:</span>
                    <span className="font-semibold text-white">
                      ISO/IEC 17025 Accredited
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Pesticide Screening:</span>
                    <span className="font-semibold text-emerald-400">
                      68 Compounds Cleared
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Data Integrity:</span>
                    <span className="font-bold text-white font-mono">
                      ALCOA+ Compliant
                    </span>
                  </div>
                </div>
              )}

              {activeMetricTab === "logistics" && (
                <div className="space-y-2.5 text-[11px] sm:text-xs animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Departure Airport:</span>
                    <span className="font-bold text-white">
                      Kotoka (ACC) Accra
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Cold-Chain Corridor:</span>
                    <span className="font-semibold text-accent-gold">
                      Direct 6h to Frankfurt / UK
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Export Certification:</span>
                    <span className="font-semibold text-white">
                      Single Convention &amp; MoFA
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Packaging:</span>
                    <span className="font-bold text-white">
                      Nitrogen-Flushed 5kg Bags
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-white/15">
                <button
                  onClick={onOpenCOA}
                  className="cursor-pointer w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Inspect Certified Batch Monograph</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
