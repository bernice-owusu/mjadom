/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FacilityPipeline } from "./components/FacilityPipeline";
import { RegulatoryTimeline } from "./components/RegulatoryTimeline";
import { LicensingCategories } from "./components/LicensingCategories";
import { MedicalProductsSection } from "./components/MedicalProductsSection";
import { WhyMjadom } from "./components/WhyMjadom";
import { OffTakeCalculator } from "./components/OffTakeCalculator";
import { CoreServicesSection } from "./components/CoreServicesSection";
import { Footer } from "./components/Footer";

import { COAModal } from "./components/COAModal";
import { InquiryModal } from "./components/InquiryModal";
import { SearchModal } from "./components/SearchModal";

import { CoreService, CORE_SERVICES } from "./data/mjadomData";
import { CheckCircle2, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function App() {
  const [isCOAOpen, setIsCOAOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryPreset, setInquiryPreset] = useState<string>("");
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<CoreService | null>(null);

  const handleOpenInquiryWithPreset = (preset?: string) => {
    setInquiryPreset(preset || "");
    setIsInquiryOpen(true);
  };

  const handleSelectSearchResult = (
    title: string,
    type: "product" | "service" | "license",
  ) => {
    if (type === "product") {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (type === "service") {
      const match = CORE_SERVICES.find((s) => s.title === title);
      if (match) setSelectedServiceModal(match);
      else {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const el = document.getElementById("licensing-categories");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-(--body) text-(--text-main) selection:bg-primary selection:text-white">
      {/* 1. Official Ghana Accreditation Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Header
        onOpenInquiry={handleOpenInquiryWithPreset}
        onOpenCOA={() => setIsCOAOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section - Pharmaceutical Cannabis Supply & Cultivation */}
        <HeroSection
          onOpenInquiry={() => handleOpenInquiryWithPreset()}
          onOpenCOA={() => setIsCOAOpen(true)}
        />

        {/* 4. 6-Stage Seed-to-Sale Greenhouse & Extraction Pipeline Tour */}
        <FacilityPipeline
          onOpenInquiry={(stageName) => handleOpenInquiryWithPreset(stageName)}
        />

        {/* 5. Medical Cannabis Products (High-THC, 1:1 Balanced, High-CBD, CO2 Extracts) */}
        <MedicalProductsSection
          onOpenCOA={() => setIsCOAOpen(true)}
          onOpenInquiry={(productName) =>
            handleOpenInquiryWithPreset(productName)
          }
        />

        {/* 6. Interactive Institutional Off-Take & Logistics Calculator */}
        <OffTakeCalculator
          onOpenInquiry={(preset) => handleOpenInquiryWithPreset(preset)}
        />

        {/* 7. Ghana Regulatory Timeline (Act 1019, Act 1100, L.I. 2475, L.I. 2512) */}
        <RegulatoryTimeline
          onLearnMoreServices={() => {
            const el = document.getElementById("licensing-categories");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 8. 11 Statutory NACOC Licensing Categories */}
        <LicensingCategories
          onSelectCategory={(categoryTitle) => {
            handleOpenInquiryWithPreset(
              `Inquiry regarding NACOC License: ${categoryTitle}`,
            );
          }}
        />

        {/* 9. Why Mjadom Limited - Strategic West African Advantages */}
        <WhyMjadom
          onOpenInquiry={() =>
            handleOpenInquiryWithPreset("Institutional Off-Take Agreement")
          }
        />

        {/* 10. Core Commercial Structuring & Seed-to-Sale Services */}
        <CoreServicesSection
          onSelectService={(srv) => setSelectedServiceModal(srv)}
        />
      </main>

      {/* 11. Comprehensive Footer with Ghana Statutory Disclaimers & Accra Office */}
      <Footer
        onOpenCOA={() => setIsCOAOpen(true)}
        onOpenInquiry={() => handleOpenInquiryWithPreset()}
      />

      {/* Interactive Modals */}
      <COAModal
        isOpen={isCOAOpen}
        onClose={() => setIsCOAOpen(false)}
        onRequestWholesale={(batchLabel) => {
          setIsCOAOpen(false);
          handleOpenInquiryWithPreset(
            batchLabel || "Certified Batch Allocation",
          );
        }}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        presetProduct={inquiryPreset}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-black/10 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedServiceModal(null)}
              aria-label="Close modal"
              className="cursor-pointer absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[var(--text-main)]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-primary-dark text-accent-gold text-xs font-bold">
                {selectedServiceModal.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                {selectedServiceModal.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {selectedServiceModal.details}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-dark mb-2.5">
                  Scope of Execution:
                </h4>
                <div className="space-y-2">
                  {selectedServiceModal.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)] p-2 rounded-lg bg-cream"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Supervised under Narcotics Control Commission Act, 2020 (Act
                  1019) regulations.
                </span>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-black/10">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="cursor-pointer px-4 py-2 rounded-full text-xs font-semibold text-[var(--text-muted)] hover:bg-black/5"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    handleOpenInquiryWithPreset(title);
                  }}
                  className="cursor-pointer px-5 py-2 rounded-full text-xs font-semibold text-white agro-gradient-btn flex items-center gap-1.5 shadow-xs"
                >
                  <span>Engage Mjadom Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
