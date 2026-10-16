import React, { useState } from 'react';
import { Search, X, ArrowRight, Pill, Layers, Scale } from 'lucide-react';
import { MEDICAL_PRODUCTS, CORE_SERVICES, LICENSING_CATEGORIES } from '../data/mjadomData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string, type: 'product' | 'service' | 'license') => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? MEDICAL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.thcCbdRatio.toLowerCase().includes(query.toLowerCase())
      )
    : MEDICAL_PRODUCTS.slice(0, 3);

  const filteredServices = query.trim()
    ? CORE_SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.summary.toLowerCase().includes(query.toLowerCase())
      )
    : CORE_SERVICES.slice(0, 3);

  const filteredLicenses = query.trim()
    ? LICENSING_CATEGORIES.filter(
        (l) =>
          l.title.toLowerCase().includes(query.toLowerCase()) ||
          l.description.toLowerCase().includes(query.toLowerCase())
      )
    : LICENSING_CATEGORIES.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden relative">
        {/* Header & Input */}
        <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
          <div className="flex items-center gap-3 w-full">
            <Search className="w-5 h-5 text-[var(--primary)] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medical strains, NACOC licenses, GACP protocols, extracts..."
              autoFocus
              className="w-full text-sm sm:text-base text-[var(--text-main)] placeholder-black/40 focus:outline-hidden"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="cursor-pointer p-1.5 rounded-full hover:bg-black/5 text-[var(--text-main)] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto space-y-6 pr-1">
          {/* Medical Products */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
              <Pill className="w-4 h-4 text-[var(--primary-dark)]" />
              <span>Medical Products &amp; Strains</span>
            </div>
            <div className="space-y-1.5">
              {filteredProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onSelectResult(p.name, 'product');
                    onClose();
                  }}
                  className="cursor-pointer w-full p-3 rounded-xl hover:bg-cream border border-transparent hover:border-black/5 transition-all text-left flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)]">{p.thcCbdRatio} · {p.grade}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
              <Layers className="w-4 h-4 text-[var(--primary-dark)]" />
              <span>Commercial &amp; Regulatory Services</span>
            </div>
            <div className="space-y-1.5">
              {filteredServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectResult(s.title, 'service');
                    onClose();
                  }}
                  className="cursor-pointer w-full p-3 rounded-xl hover:bg-cream border border-transparent hover:border-black/5 transition-all text-left flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)] line-clamp-1">{s.summary}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>
          </div>

          {/* NACOC Licensing Tiers */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
              <Scale className="w-4 h-4 text-[var(--primary-dark)]" />
              <span>Ghana Statutory Licensing Tiers</span>
            </div>
            <div className="space-y-1.5">
              {filteredLicenses.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    onSelectResult(l.title, 'license');
                    onClose();
                  }}
                  className="cursor-pointer w-full p-3 rounded-xl hover:bg-cream border border-transparent hover:border-black/5 transition-all text-left flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                      {l.number}. {l.title}
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)] line-clamp-1">{l.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
          <span>Mjadom Limited · Operating under Ghana NACOC Act 1019 &amp; L.I. 2475</span>
          <span className="font-mono">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
