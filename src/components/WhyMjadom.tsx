import React, { useState } from "react";
import {
  Sun,
  ShieldCheck,
  Database,
  TrendingUp,
  CheckCircle,
  Award,
  Zap,
} from "lucide-react";

interface WhyMjadomProps {
  onOpenInquiry: () => void;
}

export const WhyMjadom: React.FC<WhyMjadomProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<
    "climate" | "regulatory" | "quality" | "scale"
  >("climate");

  return (
    <section
      id="why-mjadom"
      className="py-20 lg:py-28 bg-cream border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Impact Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20">
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/5 shadow-sm text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-dark)] font-mono tracking-tight">
              $133B
            </span>
            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-semibold">
              Global Medical Cannabis Market by 2030
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/5 shadow-sm text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)] font-mono tracking-tight">
              50,000 kg
            </span>
            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-semibold">
              Annual Pilot Cultivation Capacity
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/5 shadow-sm text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-dark)] font-mono tracking-tight">
              365 Days
            </span>
            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-semibold">
              Year-Round Equatorial Photoperiod
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/5 shadow-sm text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono tracking-tight">
              100% GACP
            </span>
            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-semibold">
              Documented ALCOA+ Batch Purity
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--primary)">
            <Award className="w-4 h-4 text-(--primary-dark)" />
            <span>Strategic Advantages · West African Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-main) tracking-tight text-balance">
            Pharmaceutical-Grade Cannabis from Africa’s Most Compliant Producer
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
            First-mover positioning under Ghana’s purpose-built NACOC regulatory
            framework, backed by advanced botanical scientific infrastructure
            and a cultivation team built for regulated healthcare markets.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Facility Imagery Column (Col 1-5) */}
          <div className="lg:col-span-5 relative space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="/images/mjadom_ghana_facility_1792075723769.jpg"
                alt="Mjadom Limited Ghana Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-teal)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold mb-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  NACOC Licensed High-Security Facility
                </span>
                <p className="text-sm font-semibold">
                  Eastern &amp; Volta Agricultural Basin, Republic of Ghana
                </p>
              </div>
            </div>

            {/* Equatorial vs European Comparison Strip */}
            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-dark)]">
                <Zap className="w-4 h-4 text-[var(--primary)]" />
                <span>The Equatorial Economic &amp; Climate Advantage</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                European and Canadian indoor growers face exorbitant electricity
                and carbon bills heating and lighting sealed warehouses. In
                Ghana, Mjadom harnesses{" "}
                <strong>
                  unlimited natural tropical photosynthetic irradiance
                </strong>
                , cutting cultivation costs by over 60% while operating with
                near-zero carbon footprint.
              </p>
              <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--primary-dark)] pt-1">
                <span>Lower Cost of Goods Sold (COGS)</span>
                <span className="text-[var(--primary)]">
                  Unmatched Global Pricing
                </span>
              </div>
            </div>
          </div>

          {/* Core Advantages List (Col 6-12) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Point 1 */}
              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-2.5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-cream border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Regulatory First Mover
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Ghana’s NACOC Act 1019, Act 1100, and LI 2475 created the
                  premier statutory licensing framework in West Africa. Mjadom
                  Limited operates in 100% full alignment with national
                  oversight.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-2.5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-cream border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Equatorial Climate Advantage
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Ghana’s natural 12-hour equatorial photoperiod allows
                  year-round continuous cultivation cycles with a dramatically
                  lower energy footprint and production cost than European
                  indoor operations.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-2.5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-cream border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Pharmaceutical Precision
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  We are a pharmaceutical-grade producer from day one. Every
                  protocol — sanitation, microclimate control, post-harvest
                  cure, and ALCOA+ record-keeping — meets regulated
                  pharmaceutical supply chain standards.
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-2.5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-cream border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Scalable Supply Capacity
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  From an initial defined pilot capacity of 50,000 kg annually,
                  Mjadom Limited commands extensive landholdings and expansion
                  infrastructure, allowing global partners to contract long-term
                  multi-ton off-take.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenInquiry}
                className="cursor-pointer w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-white text-xs sm:text-sm agro-dark-btn inline-flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <span>Initiate Institutional Off-Take Discussion</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
