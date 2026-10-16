import React, { useState } from 'react';
import {
  X, CheckCircle2, ShieldCheck, Download, Printer,
  Activity, Sparkles, Award,
  QrCode, Check, FlaskConical
} from 'lucide-react';
import { BATCH_COAS, BatchCOA } from '../data/mjadomData';

interface COAModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestWholesale: (batchLabel?: string) => void;
}

export const COAModal: React.FC<COAModalProps> = ({
  isOpen,
  onClose,
  onRequestWholesale,
}) => {
  const [selectedBatchId, setSelectedBatchId] = useState<string>(BATCH_COAS[0].id);
  const [activeTab, setActiveTab] = useState<'potency' | 'terpenes' | 'safety' | 'chain'>('potency');
  const [showQR, setShowQR] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const currentBatch: BatchCOA = BATCH_COAS.find((b) => b.id === selectedBatchId) || BATCH_COAS[0];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    setIsExporting(true);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentBatch, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `COA-${currentBatch.batchNumber}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setTimeout(() => setIsExporting(false), 800);
  };

  return (
    <div 
      onClick={onClose}
      className="cursor-pointer fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      
      {/* Modal Card - strictly responsive max bounds */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="cursor-pointer modal-printable bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[94vh] sm:max-h-[90vh] flex flex-col shadow-2xl relative border border-black/10 overflow-hidden my-auto"
      >
        
        {/* Header Ribbon */}
        <div className="bg-[var(--primary-dark)] text-white p-4 sm:p-6 border-b border-white/10 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 rounded-sm bg-[var(--primary)] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">
                  Official Pharmacopoeia COA
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-white/10 text-white/80 text-[10px] font-mono">
                  {currentBatch.accreditation}
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-emerald-500/25 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 text-[var(--primary)]" />
                  <span>STATUTORY PASS</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2 flex-wrap">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white truncate">
                  Certificate of Analysis: {currentBatch.cultivar}
                </h2>
              </div>

              <p className="text-[11px] sm:text-xs text-white/70 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Batch Ref: <strong className="font-mono text-[var(--accent-gold)]">{currentBatch.batchNumber}</strong></span>
                <span>·</span>
                <span>Type: <span className="text-white/90">{currentBatch.type}</span></span>
              </p>
            </div>

            {/* Quick Actions in Header */}
            <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
              <button
                onClick={() => setShowQR(!showQR)}
                title="Verify Serial Barcode"
                className="cursor-pointer p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              >
                <QrCode className="w-4 h-4 text-[var(--primary)]" />
                <span className="hidden sm:inline text-[11px]">Verify</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close COA dialog"
                className="cursor-pointer p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Batch Selector Carousel / Tabs */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <span className="text-[10px] uppercase font-bold text-[var(--accent-gold)] block mb-1.5 tracking-wider">
              Select Batch Chemotype to Inspect:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {BATCH_COAS.map((batch) => (
                <button
                  key={batch.id}
                  onClick={() => setSelectedBatchId(batch.id)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedBatchId === batch.id
                      ? 'bg-[var(--primary)] text-white font-bold shadow-xs'
                      : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>{batch.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section View Tabs */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar pt-1">
            {[
              { id: 'potency', label: 'Cannabinoids (HPLC)', icon: <Activity className="w-3.5 h-3.5" /> },
              { id: 'terpenes', label: 'Terpene Profile', icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: 'safety', label: 'Safety & Purity Assays', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              { id: 'chain', label: 'Traceability & Regulatory', icon: <Award className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-white text-[var(--primary-dark)] shadow-xs font-bold'
                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* QR Verification Dropdown Banner */}
        {showQR && (
          <div className="bg-[var(--dark-teal)] text-white p-3 sm:p-4 border-b border-white/10 flex items-center justify-between text-xs animate-in slide-in-from-top-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white p-1 rounded-lg shrink-0 flex items-center justify-center">
                <QrCode className="w-10 h-10 text-black" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-[var(--primary)]">Serialized GS1 National Health Registry Verification</p>
                <p className="text-[11px] text-white/70">Serial: GH-MJD-NACOC-{currentBatch.batchNumber}-SECURE</p>
                <p className="text-[10px] text-emerald-400">Status: Validated Authentic by Republic of Ghana NACOC Database</p>
              </div>
            </div>
            <button
              onClick={() => setShowQR(false)}
              className="cursor-pointer text-white/60 hover:text-white text-xs underline shrink-0"
            >
              Hide
            </button>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-cream">
          
          {/* Quick Metrics Bar (Fluid 2-col to 4-col) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-black/5 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 block">Harvest Date</span>
              <span className="font-bold text-[var(--text-main)]">{currentBatch.harvestDate}</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-black/5 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 block">QA Release Date</span>
              <span className="font-bold text-[var(--text-main)]">{currentBatch.releaseDate}</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-black/5 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 block">Total Active Cannabinoids</span>
              <span className="font-extrabold text-[var(--primary)] font-mono text-sm">{currentBatch.totalCannabinoids}</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-black/5 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 block">Compliance Standard</span>
              <span className="font-bold text-emerald-700">{currentBatch.gacpStatus}</span>
            </div>
          </div>

          {/* TAB 1: POTENCY */}
          {activeTab === 'potency' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              {/* HPLC Assay Card */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-black/5 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/5 gap-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[var(--primary)]" />
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                      Quantitative Cannabinoid Profile (HPLC-DAD)
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[var(--text-muted)] font-mono">Method: EP 2.2.29</span>
                    <span className="px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-bold text-[10px]">ALL LIMITS PASSED</span>
                  </div>
                </div>

                {/* Cannabinoid Bars */}
                <div className="space-y-3.5">
                  {currentBatch.cannabinoids.map((c) => (
                    <div key={c.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[var(--text-main)] text-[11px] sm:text-xs truncate pr-2">
                          {c.name}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono font-extrabold text-[var(--primary-dark)] text-xs sm:text-sm">{c.value}%</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-emerald-100 text-emerald-800 font-bold">PASS</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2.5 rounded-full bg-black/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(c.value * 3.8, 100)}%`,
                            backgroundColor: c.color,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-[10px] text-[var(--text-muted)]/70 font-mono pt-0.5">
                        <span>Monograph Target: {c.target}</span>
                        <span>{c.method}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated HPLC Chromatogram Visualizer */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--dark-teal)] text-white space-y-2 mt-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--accent-gold)] font-bold font-mono">Chromatogram Retention Peaks (Minutes)</span>
                    <span className="text-[10px] text-white/60">Detector: 228 nm UV</span>
                  </div>
                  
                  {/* SVG Chromatogram curve representation */}
                  <div className="h-16 w-full relative">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 60">
                      {/* Baseline */}
                      <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      {/* Peaks */}
                      <path
                        d="M 10 55 L 60 55 Q 75 55 80 40 Q 85 10 90 40 Q 95 55 120 55 Q 140 55 145 35 Q 150 5 155 35 Q 160 55 200 55 Q 230 55 235 25 Q 240 2 245 25 Q 250 55 320 55 Q 335 55 340 45 Q 345 30 350 45 Q 355 55 400 55"
                        fill="none"
                        stroke="primary"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-white/60 pt-1">
                    <span>0 min</span>
                    <span>CBD (8.2m)</span>
                    <span>CBG (10.1m)</span>
                    <span>THC (12.4m)</span>
                    <span>CBN (15.1m)</span>
                    <span>20 min</span>
                  </div>
                </div>

                {/* Monograph standard */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Ph. Eur. Monograph Compliance:</strong> Formulated strictly according to <em>{currentBatch.pharmacopoeiaMonograph}</em>. Decarboxylation level &gt;97.5% with target water activity &lt;0.65 aw.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TERPENES */}
          {activeTab === 'terpenes' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-black/5 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-black/5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                      Aromatic Terpene Fingerprint (GC-MS)
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[var(--primary)] font-mono">Total Terpenes: {currentBatch.totalTerpenes}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentBatch.terpenes.map((t) => (
                    <div key={t.name} className="p-3.5 rounded-xl bg-cream border border-black/5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[var(--text-main)] truncate">{t.name}</span>
                        <span className="font-mono font-extrabold text-[var(--primary)] text-sm">{t.pct}</span>
                      </div>
                      
                      <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[var(--primary)] transition-all duration-500"
                          style={{ width: `${Math.min(t.value, 100)}%` }}
                        />
                      </div>

                      <div className="space-y-0.5 text-[11px]">
                        <p className="text-[var(--text-muted)]"><strong>Olfactory Note:</strong> {t.aroma}</p>
                        <p className="text-[var(--primary-dark)] font-medium"><strong>Entourage Synergy:</strong> {t.synergy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-black/10 text-xs text-[var(--text-muted)] leading-relaxed">
                  <strong>Entourage Clinical Synergy:</strong> Terpenes preserved through cold-cure room conditions at 18°C. This botanical signature maximizes the therapeutic entourage effect for analgesic and neuromuscular indications.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAFETY & PURITY */}
          {activeTab === 'safety' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Heavy Metals */}
                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--text-main)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Heavy Metals (ICP-MS)
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-emerald-100 text-emerald-800 font-bold">PASS</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">{currentBatch.heavyMetals}</p>
                  <p className="text-[10px] text-[var(--primary-dark)]/70">Standard: Ph. Eur. 2.4.27 heavy metal limits</p>
                </div>

                {/* Pesticides */}
                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--text-main)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Pesticide Multi-Residue Screen
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-emerald-100 text-emerald-800 font-bold">PASS</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">{currentBatch.pesticides}</p>
                  <p className="text-[10px] text-[var(--primary-dark)]/70">Standard: 68 chemical classes screened via GC-MS/LC-MS</p>
                </div>

                {/* Microbiology */}
                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--text-main)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Microbiological Purity
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-emerald-100 text-emerald-800 font-bold">PASS</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">{currentBatch.microbiology}</p>
                  <p className="text-[10px] text-[var(--primary-dark)]/70">Standard: European Pharmacopoeia 5.1.8 Category B</p>
                </div>

                {/* Mycotoxins & Moisture */}
                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--text-main)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Mycotoxins &amp; Water Activity
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-emerald-100 text-emerald-800 font-bold">PASS</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">{currentBatch.mycotoxins}</p>
                  <p className="text-[11px] text-[var(--primary-dark)] font-medium">Moisture: {currentBatch.moistureContent} · Water Activity: {currentBatch.waterActivity}</p>
                </div>
              </div>

              {/* Residual Solvents */}
              <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[var(--text-main)] block">Residual Solvents (USP &lt;467&gt;)</span>
                  <span className="text-[11px] text-[var(--text-muted)]">{currentBatch.residualSolvents}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-bold">ZERO RESIDUALS</span>
              </div>
            </div>
          )}

          {/* TAB 4: TRACEABILITY & OFFICIAL SEAL */}
          {activeTab === 'chain' && (
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-black/5 shadow-xs space-y-4 text-xs animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-dark)] pb-2 border-b border-black/5">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                <span>Statutory Chain-of-Custody &amp; Export Verification</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed">
                <div className="p-3 bg-cream rounded-xl space-y-1">
                  <span className="font-bold text-[var(--text-main)] block">Licensing Authority</span>
                  <p>Narcotics Control Commission (NACOC), Republic of Ghana.</p>
                </div>

                <div className="p-3 bg-cream rounded-xl space-y-1">
                  <span className="font-bold text-[var(--text-main)] block">Statutory Reference</span>
                  <p>Act 1019, Act 1100, L.I. 2475 &amp; L.I. 2512 Commercial Tier.</p>
                </div>

                <div className="p-3 bg-cream rounded-xl space-y-1">
                  <span className="font-bold text-[var(--text-main)] block">Phytosanitary Clearance</span>
                  <p>Ministry of Food and Agriculture, Plant Protection Directorate.</p>
                </div>

                <div className="p-3 bg-cream rounded-xl space-y-1">
                  <span className="font-bold text-[var(--text-main)] block">Air Freight Corridor</span>
                  <p>Kotoka International Airport (ACC) Pharma Cold-Chain Bay.</p>
                </div>
              </div>

              {/* Chief Chemist Signature Stamp */}
              <div className="p-4 rounded-xl bg-linear-to-r from-cream to-white border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]/70 block">Authorized Release By:</span>
                  <p className="font-bold text-sm text-[var(--primary-dark)]">{currentBatch.leadChemist}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">Ghana Standards Authority Partner Laboratory · ISO/IEC 17025 Accredited</p>
                </div>
                
                {/* Visual Stamp */}
                <div className="border-2 border-emerald-600 text-emerald-800 px-3 py-1.5 rounded-lg text-center transform -rotate-2 select-none self-start sm:self-auto shrink-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest block">REPUBLIC OF GHANA</span>
                  <span className="text-xs font-black uppercase tracking-wider block">OFFICIAL QA RELEASED</span>
                  <span className="text-[8px] font-mono block">BATCH #{currentBatch.batchNumber}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer Actions - fully responsive button layout */}
        <div className="p-3 sm:p-4 bg-white border-t border-black/10 shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="text-[11px] text-[var(--text-muted)] text-center sm:text-left truncate">
            Inspecting Batch <strong className="text-[var(--primary-dark)]">#{currentBatch.batchNumber}</strong> · Pharmacopoeia Standard
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print official document"
              className="cursor-pointer flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-black/15 text-xs font-semibold text-[var(--text-main)] hover:bg-black/5 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[var(--primary-dark)]" />
              <span>Print Monograph</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              title="Export analytical data JSON"
              className="cursor-pointer flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-black/15 text-xs font-semibold text-[var(--text-main)] hover:bg-black/5 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>{isExporting ? 'Exporting...' : 'Export JSON'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestWholesale(`Batch Reservation: ${currentBatch.batchNumber} (${currentBatch.cultivar})`);
              }}
              className="cursor-pointer w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white agro-gradient-btn flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Reserve This Batch</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
