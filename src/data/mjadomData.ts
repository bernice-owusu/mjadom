export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#why-mjadom' },
  { label: 'Products', href: '#products' },
  { label: 'Clinical Focus', href: '#therapeutic-areas' },
  { label: 'Services', href: '#services' },
  { label: 'Off-Take Calc', href: '#calculator' },
];

export interface RegulatoryMilestone {
  year: string;
  law: string;
  summary: string;
}

export const REGULATORY_TIMELINE: RegulatoryMilestone[] = [
  {
    year: '2020',
    law: 'Narcotics Control Commission Act, 2020 (Act 1019)',
    summary:
      'Introduced the original legal pathway in Ghana for special cultivation licenses for cannabis with low-THC for industrial and medicinal purposes.',
  },
  {
    year: '2023',
    law: 'Narcotics Control Commission (Amendment) Act, 2023 (Act 1100)',
    summary:
      'Parliament reinstated the legal cultivation framework, empowering the Minister of the Interior and NACOC to issue licenses for medical and industrial use.',
  },
  {
    year: '2024',
    law: 'Narcotics Control Commission Regulations (L.I. 2475)',
    summary:
      'Established the rigorous operational standards, seed-to-sale chain of custody, security requirements, and GACP cultivation guidelines for license holders.',
  },
  {
    year: '2025 / 2026',
    law: 'Fees and Charges Regulations (L.I. 2512)',
    summary:
      'Formalized the statutory fee architecture across all 11 licensing tiers, activating the fully operational commercial licensing regime for operators in Ghana.',
  },
];

export interface LicenseCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
}

export const LICENSING_CATEGORIES: LicenseCategory[] = [
  {
    id: 'lic-1',
    number: '01',
    title: 'Cultivation License',
    description:
      'Licensed production of pharmaceutical-grade medical cannabis under strict greenhouse and monitored outdoor microclimates in accordance with GACP guidelines.',
    badge: 'Core Production',
  },
  {
    id: 'lic-2',
    number: '02',
    title: 'Processing License',
    description:
      'Drying, curing, hand-trimming, and moisture equilibration in controlled cleanroom atmospheric conditions preserving volatile terpene profiles.',
    badge: 'Post-Harvest',
  },
  {
    id: 'lic-3',
    number: '03',
    title: 'Extraction & Refining',
    description:
      'Subcritical and supercritical CO2 extraction, winterization, and distillation yielding standardized medical botanical active pharmaceutical ingredients (APIs).',
    badge: 'Pharma API',
  },
  {
    id: 'lic-4',
    number: '04',
    title: 'Laboratory & Validation',
    description:
      'Mandatory accredited third-party and in-house testing for cannabinoid potency, pesticide residues, heavy metals, microbial limits, and mycotoxins.',
    badge: 'Quality Testing',
  },
  {
    id: 'lic-5',
    number: '05',
    title: 'Storage & Vault Security',
    description:
      'Class-A pharmaceutical vaulted storage with biometric access, 24/7 CCTV surveillance, and climate-controlled humidity and temperature regulation.',
    badge: 'Vault Custody',
  },
  {
    id: 'lic-6',
    number: '06',
    title: 'Secure Transport Logistics',
    description:
      'GPS-tracked, armored transport vehicles maintaining documented chain-of-custody between cultivation zones, extraction facilities, and international departure points.',
    badge: 'Chain of Custody',
  },
  {
    id: 'lic-7',
    number: '07',
    title: 'Genetics & Seed Import',
    description:
      'Authorized importation of stable, tissue-cultured genetics and certified seeds under Ministry of Food and Agriculture phytosanitary certification.',
    badge: 'Tissue Culture',
  },
  {
    id: 'lic-8',
    number: '08',
    title: 'Research & Clinical Trials',
    description:
      'Collaborative medical research with Ghanaian universities, the Noguchi Memorial Institute, and international medical teams investigating phytomedicines.',
    badge: 'Clinical R&D',
  },
  {
    id: 'lic-9',
    number: '09',
    title: 'Packaging & Labeling',
    description:
      'Pharmaceutical tamper-evident packaging with serialized GS1 barcodes, child-resistant seals, and bilingual medicinal patient instruction inserts.',
    badge: 'Pharma Packaging',
  },
  {
    id: 'lic-10',
    number: '10',
    title: 'Wholesale Distribution',
    description:
      'Licensed wholesale supply to certified hospitals, research pharmacies, oncology centers, and authorized pharmaceutical distribution networks.',
    badge: 'B2B Distribution',
  },
  {
    id: 'lic-11',
    number: '11',
    title: 'Regulated Export License',
    description:
      'Export authorization via NACOC and Ghana Customs for GACP/EU-GMP shipments directly to licensed distributors across Germany, the UK, Canada, and Australia.',
    badge: 'Global Off-Take',
  },
];

export interface CoreService {
  id: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
  deliverables: string[];
  icon: string;
}

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'srv-comp',
    title: 'Compliance & Regulatory Structuring',
    tag: 'Legal & NACOC',
    summary:
      'We structure medical cannabis ventures to meet Ghana’s NACOC licensing requirements and international pharmaceutical compliance standards from day one.',
    details:
      'Navigating Ghana’s dual regulatory framework (Act 1019, Act 1100, L.I. 2475) requires deep legal and operational alignment. Mjadom Limited advises stakeholders on licence tiering, facility security architecture, anti-diversion protocols, and statutory submission packages.',
    deliverables: [
      'NACOC License Application Preparation',
      'Security Architecture & Biometric SOPs',
      'Chain-of-Custody Documentation Matrix',
      'Ministry of the Interior Alignment',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'srv-cult',
    title: 'Cultivation & Operational Alignment',
    tag: 'GACP Agronomy',
    summary:
      'Aligning greenhouse cultivation, irrigation, and post-harvest operations with stringent WHO-GACP standards to guarantee consistent cannabinoid profiles.',
    details:
      'Pharmaceutical buyers demand batch-to-batch homogeneity. Mjadom Limited utilizes automated fertigation, biocontrol IPM strategies, and monitored environmental controls tailored to Ghana’s high-irradiance equatorial climate.',
    deliverables: [
      'GACP Phase 1 Protocol Implementation',
      'Tissue Culture & Phenotype Stabilization',
      'Automated Precision Drip & Climate Logging',
      'Zero Synthetic Chemical Pest Management',
    ],
    icon: 'Sprout',
  },
  {
    id: 'srv-offtake',
    title: 'Market Access & Off-Take Structuring',
    tag: 'International Trade',
    summary:
      'Connecting Ghanaian cultivation capacity to verified international pharmaceutical off-takers across Germany, the UK, Poland, and Canada.',
    details:
      'We structure binding multi-year advance off-take agreements, ensuring commercial production is anchored in firm international market demand with pre-negotiated volume, specification, and price schedules.',
    deliverables: [
      'Binding Off-Take Agreement Structuring',
      'EU Pharmacopoeia Monograph Matching',
      'Batch Pre-Clearance Sampling',
      'Letter of Intent (LOI) to Purchase Execution',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'srv-trade',
    title: 'Trade Facilitation & Export Logistics',
    tag: 'Air Freight & Customs',
    summary:
      'Managing the end-to-end pharmaceutical export pipeline from Ghanaian bonded packhouses to international consignee airports with cold-chain tracking.',
    details:
      'We orchestrate all export clearances, including NACOC inspection approvals, Ministry of Agriculture phytosanitary certificates, UN Single Convention export permits, and temperature-logged secure air freight out of Kotoka International Airport (ACC).',
    deliverables: [
      'Single Convention Export Permits',
      'Phytosanitary & Heavy Metal Passports',
      'Kotoka Airport Cold-Chain Air Freight',
      'Customs Bonded Escort Protocols',
    ],
    icon: 'Plane',
  },
];

export interface MedicalProduct {
  id: string;
  name: string;
  grade: string;
  thcCbdRatio: string;
  form: string;
  terpeneScore: string;
  description: string;
  indications: string[];
  image: string;
}

export const MEDICAL_PRODUCTS: MedicalProduct[] = [
  {
    id: 'prod-1',
    name: 'Ghana Gold Med-1 (High-THC)',
    grade: 'Pharmaceutical Flower · GACP',
    thcCbdRatio: 'THC 22.5% · CBD <1.0%',
    form: 'Cured Dried Flower (Buds)',
    terpeneScore: '2.85% Total Terpenes (Myrcene, Caryophyllene, Limonene)',
    description:
      'Specifically cultivated for severe neuropathic pain management and oncological palliative relief. Grown in sterile greenhouse conditions, hand-trimmed, cold-cured, with dense trichome density and documented chemical reproducibility.',
    indications: ['Chronic Intractable Pain', 'Palliative Oncology Relief', 'Severe Spasticity', 'Appetite Stimulation'],
    image: '/images/mjadom_medical_flower_1792075722123.jpg',
  },
  {
    id: 'prod-2',
    name: 'Mjadom Harmony 10:10 (Balanced)',
    grade: 'Pharmaceutical Flower · GACP',
    thcCbdRatio: 'THC 10.0% · CBD 10.5%',
    form: 'Cured Dried Flower / Milled Flos',
    terpeneScore: '2.40% Total Terpenes (Linalool, Pinene, Caryophyllene)',
    description:
      'A synergistic 1:1 cannabinoid balance engineered for neurological support and daytime symptom control without excessive psychotropic intensity. Optimized for vaporization or medical compounding.',
    indications: ['Multiple Sclerosis Spasticity', 'Fibromyalgia Syndrome', 'Anxiety & PTSD Modulation', 'Inflammatory Bowel'],
    image: '/images/mjadom_hero_cultivation_1792075722248.jpg',
  },
  {
    id: 'prod-3',
    name: 'AfriPure CBD Therapeutic (High-CBD)',
    grade: 'Pharmaceutical Flower · GACP',
    thcCbdRatio: 'CBD 18.2% · THC <0.3%',
    form: 'Cured Dried Flower / Medical Biomass',
    terpeneScore: '3.10% Total Terpenes (Beta-Myrcene, Terpinolene)',
    description:
      'Zero psychotropic high-CBD medical flower compliant with low-THC international export thresholds. Ideal for pediatric neuro-therapeutics, anti-inflammatory compounding, and full-spectrum extract distillation.',
    indications: ['Refractory Epilepsy', 'Lennox-Gastaut Syndrome', 'Rheumatoid Arthritis', 'Neuro-Inflammation'],
    image: '/images/mjadom_medical_flower_1792075722123.jpg',
  },
  {
    id: 'prod-4',
    name: 'Mjadom Standardized Botanical Extract',
    grade: 'Pharma API · Supercritical CO2',
    thcCbdRatio: 'Standardized Customizable Ratios',
    form: 'Refined Golden Liquid Oil (Pharma Bottle)',
    terpeneScore: 'Native Full-Spectrum Terpene Re-infusion',
    description:
      'Supercritical CO2 extracted botanical active pharmaceutical ingredient (API). Decarboxylated, winterized, and formulated in organic carrier MCT oil for standardized sublingual medical drop administration.',
    indications: ['Oral Drops Prescription', 'Clinical Compounding Formulations', 'Capsule Manufacturing', 'Targeted Dosing'],
    image: '/images/mjadom_extraction_lab_1792075722295.jpg',
  },
];

export interface CannabinoidItem {
  name: string;
  code: string;
  value: number;
  target: string;
  method: string;
  status: 'PASS';
  color: string;
}

export interface TerpeneItem {
  name: string;
  pct: string;
  value: number;
  aroma: string;
  synergy: string;
}

export interface BatchCOA {
  id: string;
  batchNumber: string;
  shortLabel: string;
  cultivar: string;
  type: string;
  harvestDate: string;
  releaseDate: string;
  testingLab: string;
  accreditation: string;
  gacpStatus: string;
  thc: string;
  cbd: string;
  cbg: string;
  cbn: string;
  thcv?: string;
  totalCannabinoids: string;
  totalTerpenes: string;
  heavyMetals: string;
  pesticides: string;
  microbiology: string;
  mycotoxins: string;
  moistureContent: string;
  residualSolvents: string;
  waterActivity: string;
  cannabinoids: CannabinoidItem[];
  terpenes: TerpeneItem[];
  leadChemist: string;
  pharmacopoeiaMonograph: string;
}

export const BATCH_COAS: BatchCOA[] = [
  {
    id: 'batch-high-thc',
    batchNumber: 'MJ-GH-2026-088-EXP',
    shortLabel: 'High-THC (22.5%)',
    cultivar: 'Ghana Gold Med-1 (Pheno #4)',
    type: 'Whole Dried Flower (Medical GACP)',
    harvestDate: 'January 14, 2026',
    releaseDate: 'February 22, 2026',
    testingLab: 'PharmaLab Accra / ISO/IEC 17025 Accredited',
    accreditation: 'ISO/IEC 17025:2017 #GH-LAB-4491',
    gacpStatus: 'GACP Phase 1 Certified · Batch Monitored',
    thc: '22.45% w/w',
    cbd: '1.18% w/w',
    cbg: '1.82% w/w',
    cbn: '0.04% w/w',
    thcv: '0.65% w/w',
    totalCannabinoids: '26.14% w/w',
    totalTerpenes: '2.85%',
    heavyMetals: 'Pb <0.1 ppm · Cd <0.05 ppm · Hg <0.01 ppm · As <0.1 ppm (PASS)',
    pesticides: '68-pesticide GC-MS/LC-MS multi-residue screen: None Detected (PASS)',
    microbiology: 'TAMC <100 CFU/g · TYMC <10 CFU/g · E. coli absent (PASS)',
    mycotoxins: 'Aflatoxins (B1+B2+G1+G2) <1 ppb · Ochratoxin A <1 ppb (PASS)',
    moistureContent: '10.2% (European Pharmacopoeia standard 8–12%)',
    residualSolvents: 'Not Applicable (Solventless whole flower curation)',
    waterActivity: '0.58 aw (Target <0.65 aw)',
    leadChemist: 'Dr. Kwame Osei-Boateng, Ph.D., Head of Analytical Chemistry',
    pharmacopoeiaMonograph: 'Ph. Eur. Monograph 3028 (Cannabis Flower)',
    cannabinoids: [
      { name: 'Delta-9-THC (Tetrahydrocannabinol)', code: 'THC', value: 22.45, target: '20.0% – 25.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#90c52d' },
      { name: 'Cannabidiol (CBD)', code: 'CBD', value: 1.18, target: '< 2.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#dce25a' },
      { name: 'Cannabigerol (CBG)', code: 'CBG', value: 1.82, target: '1.0% – 3.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#38bdf8' },
      { name: 'Cannabinol (CBN)', code: 'CBN', value: 0.04, target: '< 0.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#fb923c' },
      { name: 'Tetrahydrocannabivarin (THCV)', code: 'THCV', value: 0.65, target: '0.4% – 1.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#a855f7' },
    ],
    terpenes: [
      { name: 'Beta-Myrcene', pct: '1.40%', value: 70, aroma: 'Earthy, Herbal, Musky', synergy: 'Sedative, analgesic enhancement' },
      { name: 'Beta-Caryophyllene', pct: '0.90%', value: 45, aroma: 'Spicy, Black Pepper, Woody', synergy: 'CB2 agonist, anti-inflammatory' },
      { name: 'D-Limonene', pct: '0.55%', value: 28, aroma: 'Fresh Citrus, Zesty', synergy: 'Anxiolytic, mood elevation' },
      { name: 'Alpha-Pinene', pct: '0.22%', value: 15, aroma: 'Crisp Pine Needle', synergy: 'Bronchodilator, alert focus' },
    ],
  },
  {
    id: 'batch-balanced',
    batchNumber: 'MJ-GH-2026-092-BAL',
    shortLabel: 'Balanced 1:1 (10:10)',
    cultivar: 'Mjadom Harmony 10:10 (Pheno #2)',
    type: 'Whole Dried Flower / Milled Flos',
    harvestDate: 'January 28, 2026',
    releaseDate: 'March 04, 2026',
    testingLab: 'PharmaLab Accra / ISO/IEC 17025 Accredited',
    accreditation: 'ISO/IEC 17025:2017 #GH-LAB-4491',
    gacpStatus: 'GACP Phase 1 Certified · Batch Monitored',
    thc: '10.15% w/w',
    cbd: '10.82% w/w',
    cbg: '1.20% w/w',
    cbn: '0.02% w/w',
    thcv: '0.25% w/w',
    totalCannabinoids: '22.44% w/w',
    totalTerpenes: '2.40%',
    heavyMetals: 'Pb <0.1 ppm · Cd <0.05 ppm · Hg <0.01 ppm · As <0.1 ppm (PASS)',
    pesticides: '68-pesticide GC-MS/LC-MS multi-residue screen: None Detected (PASS)',
    microbiology: 'TAMC <100 CFU/g · TYMC <10 CFU/g · E. coli absent (PASS)',
    mycotoxins: 'Aflatoxins <1 ppb · Ochratoxin A <1 ppb (PASS)',
    moistureContent: '9.8% (Target 8–12%)',
    residualSolvents: 'Not Applicable',
    waterActivity: '0.56 aw (Target <0.65 aw)',
    leadChemist: 'Dr. Kwame Osei-Boateng, Ph.D., Head of Analytical Chemistry',
    pharmacopoeiaMonograph: 'Ph. Eur. Monograph 3028 & German DAB 1:1',
    cannabinoids: [
      { name: 'Delta-9-THC (Tetrahydrocannabinol)', code: 'THC', value: 10.15, target: '9.0% – 11.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#90c52d' },
      { name: 'Cannabidiol (CBD)', code: 'CBD', value: 10.82, target: '9.5% – 12.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#dce25a' },
      { name: 'Cannabigerol (CBG)', code: 'CBG', value: 1.20, target: '0.5% – 2.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#38bdf8' },
      { name: 'Cannabinol (CBN)', code: 'CBN', value: 0.02, target: '< 0.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#fb923c' },
      { name: 'Tetrahydrocannabivarin (THCV)', code: 'THCV', value: 0.25, target: '< 0.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#a855f7' },
    ],
    terpenes: [
      { name: 'Linalool', pct: '0.85%', value: 55, aroma: 'Floral, Lavender', synergy: 'Muscle spasm reduction & calming' },
      { name: 'Beta-Caryophyllene', pct: '0.75%', value: 48, aroma: 'Spicy, Cloves', synergy: 'Peripheral anti-inflammatory' },
      { name: 'Alpha-Pinene', pct: '0.45%', value: 30, aroma: 'Earthy Pine', synergy: 'Cognitive clarity & memory retention' },
      { name: 'Beta-Myrcene', pct: '0.35%', value: 22, aroma: 'Mild Herbal', synergy: 'Gentle relaxation' },
    ],
  },
  {
    id: 'batch-cbd',
    batchNumber: 'MJ-GH-2026-104-CBD',
    shortLabel: 'High-CBD (18.2%)',
    cultivar: 'AfriPure CBD Therapeutic (Pheno #1)',
    type: 'Whole Dried Flower / Medical Biomass',
    harvestDate: 'February 02, 2026',
    releaseDate: 'March 09, 2026',
    testingLab: 'PharmaLab Accra / ISO/IEC 17025 Accredited',
    accreditation: 'ISO/IEC 17025:2017 #GH-LAB-4491',
    gacpStatus: 'GACP Phase 1 Certified · Export Compliant',
    thc: '0.18% w/w (Non-Psychotropic)',
    cbd: '18.24% w/w',
    cbg: '0.94% w/w',
    cbn: '0.01% w/w',
    thcv: '0.08% w/w',
    totalCannabinoids: '19.45% w/w',
    totalTerpenes: '3.10%',
    heavyMetals: 'Pb <0.1 ppm · Cd <0.05 ppm · Hg <0.01 ppm · As <0.1 ppm (PASS)',
    pesticides: '68-pesticide GC-MS/LC-MS multi-residue screen: None Detected (PASS)',
    microbiology: 'TAMC <100 CFU/g · TYMC <10 CFU/g · E. coli absent (PASS)',
    mycotoxins: 'Aflatoxins <1 ppb · Ochratoxin A <1 ppb (PASS)',
    moistureContent: '10.5% (Target 8–12%)',
    residualSolvents: 'Not Applicable',
    waterActivity: '0.59 aw (Target <0.65 aw)',
    leadChemist: 'Dr. Kwame Osei-Boateng, Ph.D., Head of Analytical Chemistry',
    pharmacopoeiaMonograph: 'Ph. Eur. Monograph 3028 & Single Convention Low-THC Tier',
    cannabinoids: [
      { name: 'Cannabidiol (CBD)', code: 'CBD', value: 18.24, target: '16.0% – 20.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#90c52d' },
      { name: 'Delta-9-THC (Tetrahydrocannabinol)', code: 'THC', value: 0.18, target: '< 0.30% (Export Compliant)', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#fb923c' },
      { name: 'Cannabigerol (CBG)', code: 'CBG', value: 0.94, target: '0.5% – 1.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#38bdf8' },
      { name: 'Cannabinol (CBN)', code: 'CBN', value: 0.01, target: '< 0.1%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#64748b' },
      { name: 'Cannabichromene (CBC)', code: 'CBC', value: 0.42, target: '< 1.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#a855f7' },
    ],
    terpenes: [
      { name: 'Beta-Myrcene', pct: '1.60%', value: 80, aroma: 'Earthy, Sweet, Mango', synergy: 'Synergistic seizure-modulating entourage' },
      { name: 'Terpinolene', pct: '0.80%', value: 40, aroma: 'Woody, Herbal, Citrus', synergy: 'Antioxidant & neuroprotective' },
      { name: 'Beta-Caryophyllene', pct: '0.50%', value: 25, aroma: 'Peppery warmth', synergy: 'Gut barrier & immune modulation' },
      { name: 'Guaiol', pct: '0.20%', value: 10, aroma: 'Woody Rose', synergy: 'Anti-inflammatory terpene' },
    ],
  },
  {
    id: 'batch-extract',
    batchNumber: 'MJ-GH-2026-EXT-02',
    shortLabel: 'Supercritical CO2 API (78.5%)',
    cultivar: 'Standardized Botanical Extract API',
    type: 'Decarboxylated Full-Spectrum Botanical Resin',
    harvestDate: 'February 10, 2026',
    releaseDate: 'March 14, 2026',
    testingLab: 'PharmaLab Accra / ISO/IEC 17025 Accredited',
    accreditation: 'ISO/IEC 17025:2017 #GH-LAB-4491',
    gacpStatus: 'EU-GMP API Development Specification',
    thc: '55.20% w/w',
    cbd: '18.40% w/w',
    cbg: '3.60% w/w',
    cbn: '0.85% w/w',
    thcv: '1.10% w/w',
    totalCannabinoids: '79.15% w/w',
    totalTerpenes: '4.50%',
    heavyMetals: 'Pb <0.05 ppm · Cd <0.02 ppm · Hg <0.005 ppm · As <0.05 ppm (PASS)',
    pesticides: '68-pesticide GC-MS/LC-MS multi-residue screen: None Detected (PASS)',
    microbiology: 'Sterile formulation standard · TAMC <10 CFU/g · Pathogen Free (PASS)',
    mycotoxins: 'Aflatoxins <0.5 ppb · Ochratoxin A <0.5 ppb (PASS)',
    moistureContent: '<0.5% (Dense liquid resin)',
    residualSolvents: 'USP <467> Solventless Supercritical CO2: Zero Residual Solvents (PASS)',
    waterActivity: '0.35 aw',
    leadChemist: 'Dr. Kwame Osei-Boateng, Ph.D., Head of Analytical Chemistry',
    pharmacopoeiaMonograph: 'Ph. Eur. Cannabis Extractum Normatum',
    cannabinoids: [
      { name: 'Delta-9-THC (Standardized Resin)', code: 'THC', value: 55.20, target: '52.0% – 58.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#90c52d' },
      { name: 'Cannabidiol (CBD)', code: 'CBD', value: 18.40, target: '16.0% – 20.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#dce25a' },
      { name: 'Cannabigerol (CBG)', code: 'CBG', value: 3.60, target: '2.5% – 5.0%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#38bdf8' },
      { name: 'Cannabinol (CBN)', code: 'CBN', value: 0.85, target: '< 1.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#fb923c' },
      { name: 'Tetrahydrocannabivarin (THCV)', code: 'THCV', value: 1.10, target: '0.8% – 1.5%', method: 'HPLC-DAD EP 2.2.29', status: 'PASS', color: '#a855f7' },
    ],
    terpenes: [
      { name: 'Native Terpene Re-infusion', pct: '2.10%', value: 85, aroma: 'Natural full-spectrum terpene bouquet', synergy: 'Preserved native botanical ratio' },
      { name: 'Beta-Caryophyllene', pct: '1.20%', value: 50, aroma: 'Peppery spice', synergy: 'Potent cellular CB2 affinity' },
      { name: 'Myrcene', pct: '0.85%', value: 35, aroma: 'Earthy balsam', synergy: 'Blood-brain barrier permeability enhancer' },
      { name: 'Limonene', pct: '0.35%', value: 15, aroma: 'Sweet citrus', synergy: 'Sublingual absorption enhancer' },
    ],
  },
];

