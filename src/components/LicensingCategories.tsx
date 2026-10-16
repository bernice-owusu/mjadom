import React, { useState } from "react";
import { LICENSING_CATEGORIES } from "../data/mjadomData";
import { Layers, ShieldCheck, ArrowRight } from "lucide-react";

interface LicensingCategoriesProps {
  onSelectCategory?: (title: string) => void;
}

export const LicensingCategories: React.FC<LicensingCategoriesProps> = ({
  onSelectCategory,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section
      id="licensing-categories"
      className="py-20 lg:py-28 bg-white border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <Layers className="w-4 h-4 text-[var(--primary-dark)]" />
              <span>Value Chain Coordination</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight text-balance">
              Ghana's 11 Licensing Categories
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Ghana’s legal architecture separates cannabis operations into
              distinct statutory licenses. Commercially viable ventures depend
              on connecting these functions into a seamless pathway from seed to
              sale.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[var(--primary-dark)] bg-cream px-4 py-2 rounded-full border border-black/5">
            <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
            <span>NACOC Activity-Specific Architecture</span>
          </div>
        </div>

        {/* 11 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {LICENSING_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedId(cat.id);
                onSelectCategory?.(cat.title);
              }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedId === cat.id
                  ? "bg-[var(--primary-dark)] text-white border-[var(--primary)] shadow-xl"
                  : "bg-cream hover:bg-white text-[var(--text-main)] border-black/5 hover:border-[var(--primary)]/40 shadow-xs hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-2xl font-bold font-mono ${selectedId === cat.id ? "text-[var(--accent-gold-dark)]" : "text-[var(--primary-dark)]/40"}`}
                  >
                    {cat.number}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      selectedId === cat.id
                        ? "bg-[var(--primary)] text-white"
                        : "bg-black/5 text-[var(--text-muted)]"
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-2">{cat.title}</h3>

                <p
                  className={`text-xs leading-relaxed ${selectedId === cat.id ? "text-white/80" : "text-[var(--text-muted)]"}`}
                >
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
                <span
                  className={
                    selectedId === cat.id
                      ? "text-[var(--accent-gold)]"
                      : "text-[var(--primary)]"
                  }
                >
                  Regulated Tier
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
