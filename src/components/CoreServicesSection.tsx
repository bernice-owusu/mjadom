import React from "react";
import { CORE_SERVICES, CoreService } from "../data/mjadomData";
import {
  ShieldCheck,
  Sprout,
  TrendingUp,
  Plane,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[var(--primary)]" />,
  Sprout: <Sprout className="w-6 h-6 text-[var(--primary)]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[var(--primary)]" />,
  Plane: <Plane className="w-6 h-6 text-[var(--primary)]" />,
};

interface CoreServicesSectionProps {
  onSelectService: (service: CoreService) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-dark)]" />
              <span>Commercial Structuring &amp; Seed-To-Sale Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl  font-bold text-[var(--text-main)] tracking-tight text-balance">
              Services Built for Ghana’s Regulated Cannabis Sector
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Mjadom Limited advises investors, operators, healthcare providers,
              and international off-takers seeking structured, fully compliant
              participation in Ghana’s medical cannabis market.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-semibold px-4 py-2 bg-cream rounded-full border border-black/5 text-[var(--primary-dark)]">
              Seed-To-Sale Commercial Integration
            </span>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-5 sm:p-8 rounded-3xl bg-cream border border-black/5 hover:border-[var(--primary)]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[var(--primary)]/30 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    <div className="group-hover:[&_svg]:text-white">
                      {iconMap[srv.icon]}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--primary-dark)] text-[var(--accent-gold)]">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary-dark)] transition-colors mb-2.5">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                  {srv.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-black/5">
                  <p className="text-[10px] uppercase font-bold text-[var(--primary-dark)]/70">
                    Key Deliverables:
                  </p>
                  {srv.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--primary)]">
                  Statutory &amp; Trade Alignment
                </span>
                <button
                  onClick={() => onSelectService(srv)}
                  className="cursor-pointer px-5 py-2 rounded-full text-xs font-bold text-white bg-[var(--primary-dark)] group-hover:bg-[var(--primary)] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
