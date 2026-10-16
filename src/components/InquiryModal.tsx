import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  presetProduct = '',
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    country: 'Ghana',
    contactPerson: '',
    email: '',
    phone: '',
    product: presetProduct || 'Ghana Gold Med-1 (High-THC)',
    volume: '25 kg – 100 kg (Pilot Batch)',
    licenseStatus: 'Licensed Pharmaceutical Importer / Distributor',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[94vh] overflow-y-auto p-4 sm:p-7 shadow-2xl relative border border-black/10">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="cursor-pointer absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full hover:bg-black/5 text-[var(--text-main)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">Supply Partnership Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactPerson}</strong> from <strong>{formData.companyName}</strong>.
              Mjadom Limited’s regulatory and export compliance team will review your credentials and dispatch
              the technical specification dossier within 24 hours.
            </p>
            <div className="p-3 bg-cream rounded-xl text-xs font-mono text-[var(--primary-dark)]">
              Inquiry Dossier Reference: #MJ-GH-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="cursor-pointer w-full sm:w-auto px-6 py-2.5 rounded-full bg-[var(--primary-dark)] text-white text-xs font-semibold hover:bg-[var(--primary)] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 pr-1 sm:pr-0">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--primary)]">
                <ShieldCheck className="w-4 h-4" />
                <span>Institutional &amp; Regulated Off-Take</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                Supply Partnership with Mjadom Limited
              </h3>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)]">
                Direct procurement inquiries for pharmaceutical-grade cannabis flower, extracts, and Ghana licensing advisory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Company / Facility Name</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. PharmaMed AG / Accra Clinic"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Country of Destination</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)] bg-white"
                >
                  <option>Ghana (Domestic Healthcare / Clinical)</option>
                  <option>Germany (BfArM Regulated Importer)</option>
                  <option>United Kingdom (Home Office Licensed)</option>
                  <option>Canada (Health Canada Licensed)</option>
                  <option>Australia (TGA SAS / GMP)</option>
                  <option>Poland / Czech Republic</option>
                  <option>Other Regulated Jurisdiction</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Contact Person &amp; Title</label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Dr. Kwame Mensah"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="procurement@pharmamed.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Product Formulation</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)] bg-white"
                >
                  <option>Ghana Gold Med-1 (High-THC Flower)</option>
                  <option>Mjadom Harmony 10:10 (Balanced Flower)</option>
                  <option>AfriPure CBD Therapeutic (High-CBD Flower)</option>
                  <option>Supercritical CO2 Botanical Extract API</option>
                  <option>Ghana NACOC Regulatory &amp; Licensing Structuring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">Volume Requirement</label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)] bg-white"
                >
                  <option>25 kg – 100 kg (Pilot Batch)</option>
                  <option>100 kg – 500 kg (Commercial Quarterly)</option>
                  <option>500 kg – 2,000 kg (Annual Supply Agreement)</option>
                  <option>2,000+ kg (Strategic Multi-Year Off-Take)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-main)] mb-1">
                Specific Medical Specifications &amp; Delivery Timeline
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention required monograph targets, import licensing timeline, or specific cannabinoid/terpene needs..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-xs text-[var(--text-main)] focus:outline-hidden focus:border-[var(--primary)]"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white agro-gradient-btn flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting Regulatory Dossier...' : 'Submit Supply Partnership Inquiry'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-1 text-center text-[10px] sm:text-[11px] text-[var(--text-muted)]">
              <span>Mjadom Limited complies strictly with Ghana NACOC Act 1019 &amp; Single Convention protocols.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
