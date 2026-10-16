import React, { useState } from "react";
import {
  Calculator,
  Plane,
  Package,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface OffTakeCalculatorProps {
  onOpenInquiry: (presetString: string) => void;
}

export const OffTakeCalculator: React.FC<OffTakeCalculatorProps> = ({
  onOpenInquiry,
}) => {
  const [volumeKg, setVolumeKg] = useState<number>(250);
  const [formulation, setFormulation] = useState<
    "high-thc" | "balanced" | "high-cbd" | "extract"
  >("high-thc");
  const [destination, setDestination] = useState<string>(
    "Frankfurt, Germany (FRA)",
  );

  const destinations: Record<
    string,
    { airport: string; transitTime: string; customsLane: string }
  > = {
    "Frankfurt, Germany (FRA)": {
      airport: "FRA Cold-Chain Pharma Bay",
      transitTime: "6h 15m direct",
      customsLane: "BfArM Regulated Import",
    },
    "London Heathrow, UK (LHR)": {
      airport: "LHR WorldCargo Pharma",
      transitTime: "6h 35m direct",
      customsLane: "Home Office Regulated",
    },
    "Toronto Pearson, Canada (YYZ)": {
      airport: "YYZ Air Canada Cargo Cold",
      transitTime: "11h 20m",
      customsLane: "Health Canada Section 56",
    },
    "Amsterdam Schiphol, Netherlands (AMS)": {
      airport: "AMS Pharma Gateway",
      transitTime: "6h 40m direct",
      customsLane: "BMC Import Permit",
    },
    "Sydney Kingsford, Australia (SYD)": {
      airport: "SYD Qantas Freight Cool",
      transitTime: "21h scheduled",
      customsLane: "TGA SAS Pathway",
    },
  };

  const currentDest =
    destinations[destination] || destinations["Frankfurt, Germany (FRA)"];

  // Calculations
  const batchSizeKg = 25;
  const batchesPerYear = Math.ceil(volumeKg / batchSizeKg);
  const packagingType =
    formulation === "extract"
      ? `${Math.round(volumeKg * 1.05)} x 1,000ml Certified Amber Glass API Bottles`
      : `${Math.round(volumeKg / 5)} x 5.0kg Nitrogen-Flushed Multi-Barrier Pharma Pouches`;

  const getFormulationName = () => {
    switch (formulation) {
      case "high-thc":
        return "Ghana Gold Med-1 (High-THC 22.5%)";
      case "balanced":
        return "Mjadom Harmony 10:10 (Balanced)";
      case "high-cbd":
        return "AfriPure CBD (High-CBD 18.2%)";
      case "extract":
        return "Supercritical CO2 Botanical Extract API";
    }
  };

  return (
    <section
      id="calculator"
      className="py-20 lg:py-28 bg-cream border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <Calculator className="w-4 h-4 text-[var(--primary-dark)]" />
              <span>Institutional Procurement &amp; Off-Take Planner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight text-balance">
              Model Your Medical Cannabis Off-Take Allocation
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Calculate commercial batch frequency, primary packaging
              configurations, and cold-chain air freight transit from Accra
              directly to your regulated pharmaceutical hub.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[var(--primary-dark)] bg-white px-4 py-2 rounded-full border border-black/5 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
            <span>NACOC Act 1019 Export Alignment</span>
          </div>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Controls Column (Col 1-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-black/5 shadow-md space-y-6">
            {/* Step 1: Formulation */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] block">
                1. Select Target Botanical Chemotype
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: "high-thc",
                    label: "Ghana Gold Med-1",
                    sub: "High-THC 22.5% Flower",
                  },
                  {
                    id: "balanced",
                    label: "Mjadom Harmony 10:10",
                    sub: "Balanced THC:CBD Flos",
                  },
                  {
                    id: "high-cbd",
                    label: "AfriPure CBD",
                    sub: "High-CBD 18.2% Flower",
                  },
                  {
                    id: "extract",
                    label: "Supercritical CO2 API",
                    sub: "Decarboxylated Resin Extract",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFormulation(item.id as any)}
                    className={`cursor-pointer p-3.5 rounded-2xl border text-left transition-all ${
                      formulation === item.id
                        ? "bg-[var(--primary-dark)] text-white border-[var(--primary)] shadow-xs"
                        : "bg-cream hover:bg-black/5 text-[var(--text-main)] border-black/5"
                    }`}
                  >
                    <span className="font-bold text-xs block">
                      {item.label}
                    </span>
                    <span
                      className={`text-[11px] block mt-0.5 ${formulation === item.id ? "text-[var(--accent-gold)]" : "text-[var(--text-muted)]"}`}
                    >
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Volume Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                  2. Annual Supply Commitment (Kilograms)
                </label>
                <div className="px-3.5 py-1 rounded-full bg-[var(--primary-dark)] text-[var(--accent-gold)] font-mono font-bold text-sm">
                  {volumeKg.toLocaleString()} kg / Year
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="25"
                max="2000"
                step="25"
                value={volumeKg}
                onChange={(e) => setVolumeKg(Number(e.target.value))}
                className="w-full accent-[var(--primary)] h-2.5 bg-black/10 rounded-lg cursor-pointer"
              />

              {/* Quick Presets */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
                {[
                  { label: "Pilot (50 kg)", val: 50 },
                  { label: "Quarterly (250 kg)", val: 250 },
                  { label: "Semi-Annual (750 kg)", val: 750 },
                  { label: "Commercial (1,500 kg)", val: 1500 },
                  { label: "Multi-Ton (2,000 kg)", val: 2000 },
                ].map((p) => (
                  <button
                    key={p.val}
                    onClick={() => setVolumeKg(p.val)}
                    className={`cursor-pointer px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors shrink-0 ${
                      volumeKg === p.val
                        ? "bg-[var(--primary)] text-white"
                        : "bg-black/5 text-[var(--text-muted)] hover:bg-black/10"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Destination Airport */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] block">
                3. Destination Regulated Pharma Corridor
              </label>

              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] font-medium bg-white focus:outline-hidden focus:border-[var(--primary)]"
              >
                {Object.keys(destinations).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Inclusions Checkmarks */}
            <div className="p-4 rounded-2xl bg-cream border border-black/5 space-y-2 text-xs">
              <span className="font-bold text-[var(--primary-dark)] block text-[11px] uppercase tracking-wider">
                Every Mjadom Batch Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span>ISO 17025 Certified HPLC Potency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span>68-Pesticide Residue Clearance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span>ICP-MS Heavy Metals Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span>Phytosanitary Export Passports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card (Col 8-12) */}
          <div className="lg:col-span-5 bg-[var(--primary-dark)] p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between border border-white/10">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)]">
                  Supply Specifications
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-sm bg-white text-[var(--primary-dark)] font-extrabold uppercase">
                  Contract Model
                </span>
              </div>

              <div>
                <span className="text-[11px] text-white/70 block uppercase">
                  Product Allocation:
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5 leading-snug">
                  {getFormulationName()}
                </h3>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-white" />
                    <span className="text-white/80">Batch Releases:</span>
                  </div>
                  <span className="font-mono font-bold text-white text-sm">
                    {batchesPerYear} batches ({batchSizeKg} kg / batch)
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-white/80">
                    <Package className="w-4 h-4 text-white" />
                    <span>Primary Packaging Spec:</span>
                  </div>
                  <p className="font-semibold text-white text-xs pl-6">
                    {packagingType}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80">
                      <Plane className="w-4 h-4 text-white" />
                      <span>Air Freight Corridor:</span>
                    </div>
                    <span className="text-[10px] text-[var(--accent-gold)] font-mono font-bold">
                      ACC Airport
                    </span>
                  </div>
                  <p className="font-semibold text-white text-xs pl-6">
                    Kotoka (ACC) → {currentDest.airport} (
                    {currentDest.transitTime})
                  </p>
                  <p className="text-[10px] text-white/60 pl-6">
                    Regulatory Pathway: {currentDest.customsLane}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/80 leading-relaxed">
                Mjadom Limited handles all domestic Ghanaian export clearance,
                NACOC escort seals, and phytosanitary certificates for every
                flight shipment.
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 mt-6 border-t border-white/15">
              <button
                onClick={() => {
                  const inquiryStr = `Off-Take Inquiry: ${volumeKg} kg/year of ${getFormulationName()} to ${destination}`;
                  onOpenInquiry(inquiryStr);
                }}
                className="cursor-pointer w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm bg-white text-[var(--primary-dark)] hover:bg-cream flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
              >
                <span>Request Custom Off-Take Term Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
