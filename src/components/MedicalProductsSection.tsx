import React, { useState } from "react";
import { MEDICAL_PRODUCTS, MedicalProduct } from "../data/mjadomData";
import { Pill, FileCheck, ArrowRight, Activity, X } from "lucide-react";

interface MedicalProductsSectionProps {
  onOpenCOA: () => void;
  onOpenInquiry: (productName: string) => void;
}

export const MedicalProductsSection: React.FC<MedicalProductsSectionProps> = ({
  onOpenCOA,
  onOpenInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "thc" | "balanced" | "cbd" | "extract"
  >("all");
  const [inspectedProduct, setInspectedProduct] =
    useState<MedicalProduct | null>(null);

  const filteredProducts = MEDICAL_PRODUCTS.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "thc")
      return p.thcCbdRatio.toLowerCase().includes("thc 22");
    if (activeCategory === "balanced")
      return p.name.toLowerCase().includes("harmony");
    if (activeCategory === "cbd")
      return p.thcCbdRatio.toLowerCase().includes("cbd 18");
    if (activeCategory === "extract")
      return p.name.toLowerCase().includes("extract");
    return true;
  });

  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-cream border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--primary)">
              <Pill className="w-4 h-4 text-(--primary-dark)" />
              <span>Pharmaceutical-Grade Medical Strains</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-(--text-main) tracking-tight text-balance">
              Cannabis Supply Built for Healthcare &amp; Regulated Markets
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Mjadom Limited provides licensed healthcare buyers, hospitals, and
              clinical compounding facilities with documented, traceable,
              GACP-compliant medical cannabis flower and standardized
              full-spectrum botanical extracts.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenCOA}
              className="cursor-pointer px-4 py-2.5 rounded-full border border-[var(--primary-dark)]/20 bg-white hover:border-[var(--primary)] text-xs font-semibold text-[var(--primary-dark)] flex items-center gap-2 transition-all shadow-sm"
            >
              <FileCheck className="w-4 h-4 text-[var(--primary)]" />
              <span>Inspect Sample Batch COA</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: "all", label: "All Formulations" },
            { id: "thc", label: "High-THC (Pain & Palliative)" },
            { id: "balanced", label: "Balanced 1:1 (Neurology)" },
            { id: "cbd", label: "High-CBD (Epilepsy / Low-THC)" },
            { id: "extract", label: "Supercritical CO2 API" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[var(--primary-dark)] text-white shadow-md"
                  : "bg-white text-[var(--text-muted)] hover:bg-black/5 border border-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/images/mjadom_hero_cultivation_1792075722248.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[var(--dark-teal)]/90 backdrop-blur-md text-[var(--accent-gold)] text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {product.grade}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--primary)] font-mono">
                    <span>{product.thcCbdRatio}</span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-sans font-bold">
                      GACP Phase 1
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] leading-snug group-hover:text-[var(--primary-dark)] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2 border-t border-black/5 text-[11px] text-[var(--primary-dark)] font-medium space-y-1">
                    <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70">
                      Active Formulation:
                    </p>
                    <p className="truncate text-xs font-semibold text-[var(--text-main)]">
                      {product.form}
                    </p>
                    <p className="text-[11px] text-[var(--primary)] font-medium truncate">
                      {product.terpeneScore}
                    </p>
                  </div>

                  {/* Indications list */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 mb-1.5">
                      Therapeutic Focus:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.indications.map((ind, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-cream text-[var(--text-main)] border border-black/5"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <button
                  onClick={() => setInspectedProduct(product)}
                  className="cursor-pointer w-full py-2 px-3 rounded-xl text-xs font-semibold text-[var(--primary-dark)] bg-cream hover:bg-[var(--primary-dark)] hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>View Technical Specs</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(product.name)}
                  className="cursor-pointer w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white agro-gradient-btn transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Product Allocation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Spec Sheet Modal */}
      {inspectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl relative border border-black/10 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setInspectedProduct(null)}
              aria-label="Close dialog"
              className="cursor-pointer absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-[var(--text-main)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={inspectedProduct.image}
                  alt={inspectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                  {inspectedProduct.grade}
                </span>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  {inspectedProduct.name}
                </h3>
                <p className="text-xs font-bold text-[var(--primary-dark)] font-mono mt-0.5">
                  {inspectedProduct.thcCbdRatio}
                </p>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {inspectedProduct.description}
              </p>

              <div className="p-3.5 rounded-xl bg-cream border border-black/5 space-y-1.5 text-xs">
                <p>
                  <strong>Physical Specification:</strong>{" "}
                  {inspectedProduct.form}
                </p>
                <p>
                  <strong>Terpenes Profile:</strong>{" "}
                  {inspectedProduct.terpeneScore}
                </p>
                <p>
                  <strong>Target Indications:</strong>{" "}
                  {inspectedProduct.indications.join(", ")}
                </p>
                <p>
                  <strong>Quality Assurance:</strong> Verified under NACOC Act
                  1019 &amp; L.I. 2475 statutory parameters.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-black/10">
                <button
                  onClick={() => {
                    setInspectedProduct(null);
                    onOpenCOA();
                  }}
                  className="cursor-pointer px-4 py-2 rounded-full text-xs font-semibold text-[var(--primary-dark)] border border-[var(--primary-dark)]/20 hover:border-[var(--primary)] flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4 text-[var(--primary)]" />
                  <span>Inspect Official Batch COA</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setInspectedProduct(null)}
                    className="cursor-pointer px-4 py-2 rounded-full text-xs font-semibold text-[var(--text-muted)] hover:bg-black/5"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const name = inspectedProduct.name;
                      setInspectedProduct(null);
                      onOpenInquiry(name);
                    }}
                    className="cursor-pointer px-5 py-2 rounded-full text-xs font-semibold text-white agro-gradient-btn flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Request Allocation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
