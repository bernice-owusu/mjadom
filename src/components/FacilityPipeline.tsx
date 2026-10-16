import React, { useState } from "react";
import {
  Microscope,
  Sun,
  Droplets,
  FlaskConical,
  ShieldCheck,
  Plane,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PipelineStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  icon: React.ReactNode;
  image: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "stage-1",
    step: "Stage 01",
    title: "Genetics & Micropropagation",
    subtitle: "Tissue Culture Laboratory",
    description:
      "We maintain certified mother stock in a sterile cleanroom tissue culture environment. Disease-free clones guarantee batch-to-batch genetic stability and standardized cannabinoid ratios across every growth cycle.",
    metrics: "100% Virus-Free · Phenotype Stabilized",
    icon: <Microscope className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_medical_research_1792075724033.jpg",
  },
  {
    id: "stage-2",
    step: "Stage 02",
    title: "Automated Hybrid Greenhouse",
    subtitle: "Controlled Equatorial Cultivation",
    description:
      "Combining Ghana’s intense natural 12-hour solar irradiance with automated blackout screens, precision drip fertigation, and continuous climate sensors that monitor VPD, temperature, and substrate moisture.",
    metrics: "50,000 kg Annual Capacity · Zero Solar Deficit",
    icon: <Sun className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_hero_cultivation_1792075722248.jpg",
  },
  {
    id: "stage-3",
    step: "Stage 03",
    title: "Cleanroom Curing & Processing",
    subtitle: "Cold-Cure Atmospheric Control",
    description:
      "Harvested flowers are hand-trimmed and slowly cured in medical cleanrooms at 18°C and 55% relative humidity for 21 days, preserving delicate monoterpenes and achieving the European Pharmacopoeia 8-12% moisture window.",
    metrics: "21-Day Slow Cure · <11% Target Moisture",
    icon: <Droplets className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_medical_flower_1792075722123.jpg",
  },
  {
    id: "stage-4",
    step: "Stage 04",
    title: "Supercritical CO2 Extraction",
    subtitle: "Pharmaceutical API Refining",
    description:
      "Our state-of-the-art closed-loop supercritical fluid extraction suite extracts full-spectrum resin without toxic hydrocarbons. Multi-stage fractional separation isolates target phytocannabinoids with surgical purity.",
    metrics: "Solventless CO2 · 98% Extraction Efficiency",
    icon: <FlaskConical className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_extraction_lab_1792075722295.jpg",
  },
  {
    id: "stage-5",
    step: "Stage 05",
    title: "In-House HPLC Quality Testing",
    subtitle: "Accredited Batch Validation",
    description:
      "Every batch is tested via High Performance Liquid Chromatography (HPLC) for potency and certified free of heavy metals, pesticides, and microbial pathogens under ALCOA+ data integrity guidelines.",
    metrics: "Full Batch COA · ALCOA+ Data Integrity",
    icon: <ShieldCheck className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_medical_research_1792075724033.jpg",
  },
  {
    id: "stage-6",
    step: "Stage 06",
    title: "Cold-Chain Global Export Vault",
    subtitle: "Kotoka Airport Pharma Corridor",
    description:
      "Stored in Class-A biometric vaults with 24/7 security. Transported via GPS-tracked temperature-controlled escorts to Kotoka International Airport (ACC) for scheduled air freight directly to consignee facilities worldwide.",
    metrics: "Single Convention Permits · 48h to Europe",
    icon: <Plane className="w-5 h-5 text-[var(--primary)]" />,
    image: "/images/mjadom_ghana_facility_1792075723769.jpg",
  },
];

interface FacilityPipelineProps {
  onOpenInquiry: (stageName: string) => void;
}

export const FacilityPipeline: React.FC<FacilityPipelineProps> = ({
  onOpenInquiry,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(1);
  const activeStage = PIPELINE_STAGES[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % PIPELINE_STAGES.length);
  };

  const handlePrev = () => {
    setActiveStageIndex(
      (prev) => (prev - 1 + PIPELINE_STAGES.length) % PIPELINE_STAGES.length,
    );
  };

  return (
    <section
      id="facility"
      className="py-20 lg:py-28 bg-(--dark-teal) text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-(--primary)/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)]">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <span>Seed-to-Sale Infrastructure Tour</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              The 6 Stages of Mjadom Pharmaceutical Excellence
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Explore how Mjadom Limited integrates cleanroom science, Ghanaian
              equatorial sunlight, and GACP rigor to produce documented,
              export-ready medical cannabis raw materials.
            </p>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous facility stage"
              className="cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-white/80 px-2">
              Stage {activeStageIndex + 1} of {PIPELINE_STAGES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next facility stage"
              className="cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stage Selector Ribbon - responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {PIPELINE_STAGES.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`cursor-pointer p-3 sm:p-4 rounded-2xl border text-left transition-all ${
                activeStageIndex === idx
                  ? "bg-white text-[#1a1a1a] border-[var(--primary)] shadow-lg ring-2 ring-[var(--primary)]"
                  : "bg-white/90 hover:bg-white text-[#1a1a1a]/70 border-white/70 hover:text-[#1a1a1a]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-[var(--primary-dark)]">
                  {stage.step}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${activeStageIndex === idx ? "bg-[var(--primary)]" : "bg-[#1a1a1a]/20"}`}
                />
              </div>
              <h4 className="text-xs font-bold text-[#1a1a1a] line-clamp-2 leading-tight">
                {stage.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Detailed Stage Feature View */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-black/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column (Col 1-6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-2xl border-2 border-black/10 bg-black/40">
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/images/mjadom_hero_cultivation_1792075722248.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-[var(--text-main)]">
                  <span className="font-semibold text-[var(--primary-dark)] text-[11px] sm:text-xs">
                    {activeStage.subtitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary)] text-white font-extrabold text-[10px]">
                    Phase Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Col 7-12) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-cream flex items-center justify-center shrink-0">
                  {activeStage.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                  {activeStage.step} of 06 · {activeStage.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-[var(--text-main)] leading-snug">
                {activeStage.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {activeStage.description}
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-cream border border-black/5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--primary-dark)]">
                  {activeStage.metrics}
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    onOpenInquiry(`Stage Inquiry: ${activeStage.title}`)
                  }
                  className="cursor-pointer w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white agro-gradient-btn flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
                >
                  <span>Inquire Regarding This Facility Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
