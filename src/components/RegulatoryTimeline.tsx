import React from "react";
import { REGULATORY_TIMELINE } from "../data/mjadomData";
import { Scale, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface RegulatoryTimelineProps {
  onLearnMoreServices: () => void;
}

export const RegulatoryTimeline: React.FC<RegulatoryTimelineProps> = ({
  onLearnMoreServices,
}) => {
  return (
    <section
      id="regulatory"
      className="py-20 lg:py-28 bg-cream border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--primary)">
            <Scale className="w-4 h-4 text-(--primary-dark)" />
            <span>Ghana's Legal Framework · Narcotics Control Commission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl  font-bold text-(--text-main) tracking-tight text-balance">
            Ghana: The Journey to Regulated Medicinal Cannabis
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
            Ghana established a modern, activity-specific statutory framework
            governing medicinal and industrial cannabis.{" "}
            <strong>Mjadom Limited</strong> operates within this purpose-built
            regime, guaranteeing full regulatory compliance across every stage
            of the value chain.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {REGULATORY_TIMELINE.map((item, index) => (
            <div
              key={item.year}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Year Marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-(--primary-dark) group-hover:text-(--primary) transition-colors font-mono">
                    {item.year}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-cream border border-black/5 flex items-center justify-center text-(--primary)">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Law Title */}
                <h3 className="text-base font-bold text-(--text-main) mb-3 leading-snug">
                  {item.law}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-semibold text-[var(--primary-dark)]/70 flex items-center justify-between">
                <span>Phase {index + 1} Approved</span>
                <span className="text-[var(--primary)]">
                  Statutory In Force
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Callout Banner */}
        <div className="mt-12 bg-[var(--primary-dark)] rounded-3xl p-8 sm:p-10 text-white border border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)]">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)]" />
              <span>Full Value Chain Integrity</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Operating Across Ghana's 11 Statutory Licensing Categories
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Ghana's framework is intentionally structured around discrete,
              activity-specific licenses. Mjadom Limited provides end-to-end
              integration connecting cultivation, testing, and licensed export.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onLearnMoreServices}
              className="cursor-pointer px-6 py-3 rounded-full text-xs font-semibold bg-white text-[var(--primary-dark)] hover:bg-cream flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <span>Explore Our Licensing Alignment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
