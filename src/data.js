export const DATA_VERSION = '2026-04-04.lungcancer-mvp.v1';
export const DETERMINISTIC_SEED = 20260404;

export const siteMeta = {
  siteId: 'lungcancer',
  label: 'lungcancer',
  title: 'Lung Cancer Atlas',
  githubPagesUrl: 'https://chichaumiao-openclaw.github.io/lungcancer/',
  customDomain: 'lungcancer.gznl.org',
  strapline:
    'A single-cell atlas of lung cancer, covering malignant ecosystems, immune remodeling, and clinical heterogeneity.',
  heroIntro:
    'Map how malignant, immune, and stromal cell states reorganize across adenocarcinoma, squamous, neuroendocrine, treated, and resistant lung cancer contexts.',
  mission:
    'Build an atlas-centered resource for understanding malignant cell states, tumor microenvironment remodeling, and clinical heterogeneity in lung cancer.',
  release: 'Prototype release 0.1',
  coverage: 'Subtype and clinical-feature MVP',
  focus:
    'Tumor ecosystems, subtype-specific malignant programs, biomarker search, and clinically stratified comparisons.',
  defaultTheme: 'lungcancer'
};

export const databasePortfolio = [
  {
    id: 'lungdev',
    label: 'lungdev',
    axis: 'Development',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungdev/',
    customDomain: 'lungdev.gznl.org',
    summary: 'Stage-resolved developmental atlas from early fetal lung to mature adulthood.'
  },
  {
    id: 'lunginf',
    label: 'lunginf',
    axis: 'Infection / inflammation',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lunginf/',
    customDomain: 'lunginf.gznl.org',
    summary: 'Host response, pathogen-specific remodeling, and injury-repair programs.'
  },
  {
    id: 'lungcancer',
    label: 'lungcancer',
    axis: 'Cancer',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungcancer/',
    customDomain: 'lungcancer.gznl.org',
    summary: 'Malignant ecosystems, microenvironment remodeling, and clinical heterogeneity.'
  },
  {
    id: 'lungevo',
    label: 'lungevo',
    axis: 'Evolution',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungevo/',
    customDomain: 'lungevo.gznl.org',
    summary: 'Cross-species respiratory programs, homology, and lineage innovation.'
  }
];

export const navigationItems = [
  { id: 'home', label: 'Home', kicker: 'Cancer atlas overview' },
  { id: 'cohorts', label: 'Cohorts', kicker: 'Study design and cohort framing' },
  { id: 'subtypes', label: 'Subtypes', kicker: 'Subtype-centered malignant states' },
  { id: 'biomarkers', label: 'Biomarkers', kicker: 'Gene programs and marker search' },
  { id: 'clinical', label: 'Clinical', kicker: 'Stage, treatment, and response lenses' },
  { id: 'datasets', label: 'Datasets', kicker: 'Release scope and provenance' },
  { id: 'about', label: 'About', kicker: 'Mission, scope, and roadmap' }
];

export const subtypeBackbone = [
  {
    rank: 1,
    id: 'luad',
    label: 'LUAD',
    color: '#3b82f6',
    ink: '#ffffff',
    cohort: 'Adenocarcinoma',
    state: 'Alveolar-lineage malignant programs',
    headline: 'Adenocarcinoma anchors distal epithelial and targetable oncogenic states',
    summary:
      'LUAD serves as the dominant epithelial-lineage anchor for comparing malignant plasticity, alveolar-lineage identity, and oncogenic pathway heterogeneity.',
    traits: ['Adenocarcinoma', 'Alveolar lineage', 'Targetable programs'],
    question: 'Which LUAD malignant programs track differentiation versus therapy-associated stress?'
  },
  {
    rank: 2,
    id: 'lusc',
    label: 'LUSC',
    color: '#8b5cf6',
    ink: '#ffffff',
    cohort: 'Squamous carcinoma',
    state: 'Basal and keratinizing malignant states',
    headline: 'Squamous tumors highlight basal-like malignant architecture and stromal remodeling',
    summary:
      'LUSC emphasizes basal-like malignant programs, epithelial stress, and stromal-immune remodeling distinct from adenocarcinoma lineage logic.',
    traits: ['Squamous identity', 'Basal-like states', 'Stromal remodeling'],
    question: 'How do squamous malignant ecosystems diverge from adenocarcinoma and therapy-linked states?'
  },
  {
    rank: 3,
    id: 'sclc',
    label: 'SCLC',
    color: '#ec4899',
    ink: '#ffffff',
    cohort: 'Neuroendocrine / small-cell',
    state: 'Neuroendocrine malignant plasticity',
    headline: 'Neuroendocrine tumors capture highly proliferative and lineage-flexible malignant states',
    summary:
      'SCLC provides the neuroendocrine anchor for high-proliferation malignant programs, lineage plasticity, and distinct immune exclusion patterns.',
    traits: ['Neuroendocrine', 'High proliferation', 'Immune exclusion'],
    question: 'Which neuroendocrine malignant programs are preserved versus reconfigured under treatment pressure?'
  },
  {
    rank: 4,
    id: 'treated',
    label: 'Treated',
    color: '#f97316',
    ink: '#ffffff',
    cohort: 'On-treatment residual disease',
    state: 'Residual and stress-adapted malignant states',
    headline: 'Treated tumors reveal residual malignant states under targeted or systemic therapy pressure',
    summary:
      'Treated contexts highlight cell-state adaptation, survival programs, and microenvironment remodeling linked to ongoing clinical intervention.',
    traits: ['On-treatment', 'Residual disease', 'Stress adaptation'],
    question: 'Which malignant and immune states persist under therapy before frank resistance emerges?'
  },
  {
    rank: 5,
    id: 'resistant',
    label: 'Resistant',
    color: '#ef4444',
    ink: '#ffffff',
    cohort: 'Resistant / metastatic disease',
    state: 'Aggressive and escape-associated programs',
    headline: 'Resistance-focused tumors capture clinically aggressive ecosystem rewiring',
    summary:
      'Resistant and metastatic disease states expose therapy escape, immune suppression, stromal exclusion, and highly plastic malignant programs.',
    traits: ['Resistance', 'Metastatic spread', 'Immune suppression'],
    question: 'Which escape-associated states track progression, therapy failure, and metastatic competence?'
  }
];

export const heroMetrics = [
  { label: 'Subtype anchors', value: '5', detail: 'LUAD to resistant disease' },
  { label: 'Clinical frames', value: '5', detail: 'stage, treatment, response, site, progression' },
  { label: 'Biomarker markers', value: '10', detail: 'searchable malignant and TME signals' },
  { label: 'Prototype datasets', value: '5', detail: 'cohort-scoped release rows' }
];

export const cohortMatrix = [
  {
    name: 'Resected early-stage NSCLC cohort',
    category: 'Primary cohort',
    comparison: 'Localized, treatment-naive disease',
    summary:
      'Anchors malignant versus non-malignant ecosystem comparisons before systemic therapy and metastatic spread reshape the tissue landscape.',
    evidence: 'Useful as the baseline cohort for comparing progression-linked ecosystem remodeling.',
    anchors: ['Primary tumor', 'Early stage', 'Treatment-naive']
  },
  {
    name: 'Advanced LUAD therapy-stratified cohort',
    category: 'Subtype-enriched cohort',
    comparison: 'Advanced adenocarcinoma across treatment states',
    summary:
      'Captures LUAD heterogeneity across treatment-naive, on-treatment, and progressive disease contexts.',
    evidence: 'Best suited for linking malignant plasticity to oncogenic and therapeutic context.',
    anchors: ['LUAD', 'Advanced stage', 'Targeted therapy']
  },
  {
    name: 'Smoking-associated squamous cohort',
    category: 'Subtype-enriched cohort',
    comparison: 'Squamous disease with stromal and immune remodeling',
    summary:
      'Highlights basal-like malignant states, stromal remodeling, and immune context characteristic of squamous disease.',
    evidence: 'Useful for comparing squamous tumor ecosystems against adenocarcinoma lineage logic.',
    anchors: ['LUSC', 'Smoking-associated', 'Basal-like programs']
  },
  {
    name: 'Neuroendocrine / SCLC cohort',
    category: 'Lineage-specialized cohort',
    comparison: 'Highly proliferative neuroendocrine disease',
    summary:
      'Frames high-proliferation malignant states, neuroendocrine markers, and distinctive immune exclusion patterns.',
    evidence: 'Separates neuroendocrine malignant programs from non-small-cell states.',
    anchors: ['SCLC', 'Neuroendocrine', 'High proliferation']
  },
  {
    name: 'Resistant and metastatic cohort',
    category: 'Progression cohort',
    comparison: 'Post-treatment escape and dissemination',
    summary:
      'Tracks resistant malignant states, metastatic spread, and therapy-linked microenvironment suppression.',
    evidence: 'Supports progression and resistance-focused comparison rather than baseline subtype classification.',
    anchors: ['Resistance', 'Metastasis', 'Escape programs']
  }
];

export const biomarkerCatalog = [
  {
    gene: 'EGFR',
    subtypeFocus: 'LUAD',
    interpretation: 'Oncogenic driver-associated marker',
    compartment: 'Malignant cells',
    program: 'Targetable adenocarcinoma signaling',
    summary: 'Links LUAD malignant programs to targetable receptor signaling and therapy context.'
  },
  {
    gene: 'KRAS',
    subtypeFocus: 'LUAD',
    interpretation: 'Driver-associated malignant marker',
    compartment: 'Malignant cells',
    program: 'MAPK-linked malignant identity',
    summary: 'Useful for comparing driver-associated adenocarcinoma states against treatment-adapted programs.'
  },
  {
    gene: 'SOX2',
    subtypeFocus: 'LUSC',
    interpretation: 'Squamous lineage marker',
    compartment: 'Malignant cells',
    program: 'Basal-like squamous identity',
    summary: 'Anchors squamous malignant programs and basal-like lineage identity.'
  },
  {
    gene: 'ASCL1',
    subtypeFocus: 'SCLC',
    interpretation: 'Neuroendocrine lineage marker',
    compartment: 'Malignant cells',
    program: 'Neuroendocrine malignant identity',
    summary: 'Tracks classical neuroendocrine small-cell programs and subtype plasticity.'
  },
  {
    gene: 'EPCAM',
    subtypeFocus: 'LUAD / treated',
    interpretation: 'Broad epithelial malignant marker',
    compartment: 'Malignant cells',
    program: 'Epithelial tumor identity',
    summary: 'Useful for separating epithelial tumor states from surrounding microenvironment compartments.'
  },
  {
    gene: 'KRT19',
    subtypeFocus: 'LUAD / LUSC',
    interpretation: 'Epithelial stress and lineage marker',
    compartment: 'Malignant cells',
    program: 'Epithelial remodeling',
    summary: 'Supports comparison of epithelial differentiation and stress states across NSCLC subtypes.'
  },
  {
    gene: 'MKI67',
    subtypeFocus: 'SCLC / resistant',
    interpretation: 'Proliferation marker',
    compartment: 'Malignant cells',
    program: 'Cell-cycle expansion',
    summary: 'Highlights rapidly cycling malignant states associated with aggressive growth.'
  },
  {
    gene: 'CXCL13',
    subtypeFocus: 'Clinical immunotherapy context',
    interpretation: 'Inflamed immune microenvironment marker',
    compartment: 'Immune microenvironment',
    program: 'Immune-inflamed ecosystem',
    summary: 'Links tumor ecosystems to lymphoid-rich or immunotherapy-responsive contexts.'
  },
  {
    gene: 'COL1A1',
    subtypeFocus: 'LUSC / resistant',
    interpretation: 'Stromal remodeling marker',
    compartment: 'Stromal microenvironment',
    program: 'Fibrotic exclusion',
    summary: 'Captures extracellular matrix-rich stromal states that may reinforce immune exclusion.'
  },
  {
    gene: 'SPP1',
    subtypeFocus: 'Treated / resistant',
    interpretation: 'Myeloid remodeling marker',
    compartment: 'Myeloid microenvironment',
    program: 'Suppressive myeloid remodeling',
    summary: 'Useful for comparing treatment-linked myeloid remodeling and immune suppression.'
  }
];

export const biomarkerSearchSuggestions = ['EGFR', 'KRAS', 'SOX2', 'ASCL1', 'CXCL13'];

export const clinicalFeatureCatalog = [
  {
    name: 'Stage-linked malignant expansion',
    category: 'Clinical frame',
    comparison: 'Early stage -> advanced disease',
    summary:
      'Malignant proliferation and ecosystem disruption intensify with advanced disease burden and broader tissue invasion.',
    evidence:
      'Frames how stage changes both malignant-state abundance and non-malignant compartment remodeling.',
    anchors: ['Stage', 'MKI67', 'Invasion']
  },
  {
    name: 'Targeted therapy adaptation',
    category: 'Treatment frame',
    comparison: 'Treatment-naive -> on-treatment',
    summary:
      'Residual malignant states under therapy reveal stress-adapted transcriptional programs and altered tumor-supportive niches.',
    evidence:
      'Useful for separating baseline subtype identity from therapy-induced survival states.',
    anchors: ['EGFR', 'Residual disease', 'Stress response']
  },
  {
    name: 'Immunotherapy-inflamed ecosystem',
    category: 'Response frame',
    comparison: 'Immune-cold -> immune-inflamed',
    summary:
      'Some tumors display lymphoid-rich or antigen-presentation-associated ecosystems linked to clinically relevant immune context.',
    evidence:
      'Helps compare inflamed immune states against excluded or suppressed tumor microenvironments.',
    anchors: ['CXCL13', 'HLA-DRA', 'T cell state']
  },
  {
    name: 'Fibrotic stromal exclusion',
    category: 'Microenvironment frame',
    comparison: 'Less remodeled -> highly excluded stroma',
    summary:
      'Matrix-rich stromal states can intensify with progression and contribute to immune exclusion or therapy resistance.',
    evidence:
      'Tracks how stromal architecture changes alongside malignant-state evolution.',
    anchors: ['COL1A1', 'ACTA2', 'Fibrosis']
  },
  {
    name: 'Metastatic escape and resistant dissemination',
    category: 'Progression frame',
    comparison: 'Primary -> resistant/metastatic disease',
    summary:
      'Aggressive disease states combine malignant plasticity, immune suppression, and clinically adverse ecosystem rewiring.',
    evidence:
      'Best used to interpret escape-associated tumor programs rather than baseline subtype biology.',
    anchors: ['SPP1', 'Resistance', 'Metastasis']
  }
];

export const datasetReleases = [
  {
    id: 'LC-DS-001',
    title: 'Resected early-stage NSCLC atlas',
    cohortScope: 'Primary early-stage cohort',
    structure: 'Tumor plus adjacent tissue',
    cells: '61,400 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Reference cohort for malignant versus non-malignant ecosystem comparison before systemic therapy.'
  },
  {
    id: 'LC-DS-002',
    title: 'Advanced LUAD treatment-stratified panel',
    cohortScope: 'LUAD advanced cohort',
    structure: 'Primary and biopsy tumor tissue',
    cells: '57,900 cells',
    assays: 'scRNA-seq + clinical annotation',
    status: 'Prototype metadata',
    note: 'Supports subtype and treatment-linked comparison of adenocarcinoma malignant states.'
  },
  {
    id: 'LC-DS-003',
    title: 'Squamous tumor ecosystem reference',
    cohortScope: 'LUSC cohort',
    structure: 'Tumor and stromal compartments',
    cells: '46,200 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Anchors squamous malignant states and matrix-heavy microenvironment remodeling.'
  },
  {
    id: 'LC-DS-004',
    title: 'Neuroendocrine / SCLC malignant atlas',
    cohortScope: 'SCLC cohort',
    structure: 'High-grade neuroendocrine tumor tissue',
    cells: '34,700 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Provides the neuroendocrine anchor for proliferative malignant and immune-excluded states.'
  },
  {
    id: 'LC-DS-005',
    title: 'Resistant and metastatic lung cancer cohort',
    cohortScope: 'Post-treatment resistant cohort',
    structure: 'Metastatic and progressive lesions',
    cells: '41,900 cells',
    assays: 'scRNA-seq + treatment history',
    status: 'Prototype metadata',
    note: 'Frames escape-associated malignant states, suppressed immunity, and clinically aggressive progression.'
  }
];

export const evidenceHighlights = [
  { label: 'Subtype anchors', value: '5', detail: 'LUAD, LUSC, SCLC, treated, resistant' },
  { label: 'Primary filters', value: '6', detail: 'subtype, stage, treatment, primary/metastatic, cell type, dataset' },
  { label: 'Clinical lenses', value: '5', detail: 'stage, therapy, response, microenvironment, progression' },
  { label: 'Assumption notes', value: '5', detail: 'each release states cohort framing and prototype clinical scope' }
];

export const coreQuestions = [
  'How is tumor cell heterogeneity organized across major lung cancer subtypes and treatment contexts?',
  'How do immune and stromal compartments change across lung cancer ecosystems?',
  'Which malignant and microenvironment states are linked to progression, therapy response, and resistance?',
  'How do tumor ecosystems differ by subtype, stage, treatment status, and metastatic spread?'
];

export const targetUsers = [
  'Cancer biologists',
  'Thoracic oncology researchers',
  'Immuno-oncology researchers',
  'Translational and clinical scientists'
];

export const scopeBoundaries = [
  'The MVP focuses on lung cancer single-cell atlases rather than infectious disease or developmental datasets.',
  'Subtype and treatment contexts are included to organize tumor ecosystems, not to replace full clinical registries.',
  'Current subtype groups are prototype anchors rather than a complete taxonomy of all lung cancer entities.'
];

export const metadataPriorities = [
  'Cancer subtype',
  'Stage',
  'Treatment status',
  'Primary or metastatic site',
  'Cell type',
  'Malignant cell state',
  'Immune microenvironment',
  'Dataset / source'
];

export const methodsResources = [
  {
    title: 'Malignant versus non-malignant comparison notes',
    detail: 'Summarizes how the MVP distinguishes malignant programs from tumor-associated microenvironment states.'
  },
  {
    title: 'Subtype and treatment interpretation guide',
    detail: 'Defines the launch subtype and clinical frames used to compare lung cancer ecosystems.'
  },
  {
    title: 'Cohort provenance cards',
    detail: 'Expose cohort scope, assay footprint, and current clinical interpretation limits for each release.'
  }
];

export const provenanceHistory = [
  '2026-03-18 four-database scientific program defined',
  '2026-04-04 lungcancer selected for prototype implementation',
  '2026-04-04 lungcancer cancer-atlas MVP workspace created'
];

export const routeCopy = {
  home: {
    eyebrow: 'Cancer axis',
    title: 'Compare malignant ecosystems across lung cancer subtypes and clinical contexts',
    description:
      'Use the homepage to orient around cohort framing, subtype anchors, biomarker programs, and clinically stratified tumor ecosystem comparisons.'
  },
  cohorts: {
    eyebrow: 'Cohort overview',
    title: 'Primary, advanced, and resistant cohort framing',
    description:
      'Browse the cancer axis through cohorts that distinguish early disease, subtype-enriched studies, treatment exposure, and resistant progression.'
  },
  subtypes: {
    eyebrow: 'Subtype explorer',
    title: 'Subtype-centered malignant and microenvironment states',
    description:
      'Use the subtype route to compare adenocarcinoma, squamous, neuroendocrine, treated, and resistant ecosystem states.'
  },
  biomarkers: {
    eyebrow: 'Biomarker workspace',
    title: 'Malignant and tumor-microenvironment biomarker programs',
    description:
      'Search biomarker genes and programs without collapsing malignant lineage states, immune context, and stromal remodeling into a single axis.'
  },
  clinical: {
    eyebrow: 'Clinical features',
    title: 'Stage, treatment, response, and progression lenses',
    description:
      'Inspect the launch clinical frames that organize the MVP across stage, therapy exposure, immune context, and resistant progression.'
  },
  datasets: {
    eyebrow: 'Dataset releases',
    title: 'Release-scoped cohort tables and provenance',
    description:
      'Review the current prototype cancer datasets, their assay scope, and the comparison logic behind the subtype and clinical framing of the portal.'
  },
  about: {
    eyebrow: 'Mission and scope',
    title: 'Why lungcancer exists inside the four-database program',
    description:
      'Clarify the scientific mission, target users, scope boundaries, and how lungcancer stays distinct from development, infection, and evolution portals.'
  }
};

export const bundleCrossLinks = {
  home: [
    {
      siteId: 'lunginf',
      route: 'immune-states',
      title: 'Compare tumor ecosystems with infection-driven immune remodeling',
      summary: 'Use immune-state modules to ask which myeloid and lymphoid programs are shared between cancer and infection.'
    },
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Anchor malignant plasticity against normal developmental state structure',
      summary: 'Jump to the developmental atlas to compare tumor lineages with stage-resolved epithelial and stromal maturation.'
    },
    {
      siteId: 'lungevo',
      route: 'programs',
      title: 'Check whether malignant programs intersect conserved respiratory biology',
      summary: 'Use comparative programs to see which tumor-associated states may reactivate broader respiratory logic.'
    }
  ],
  cohorts: [
    {
      siteId: 'lunginf',
      route: 'conditions',
      title: 'Contrast cohort framing with healthy-versus-infected comparison',
      summary: 'Move from tumor cohort design into condition-based infectious disease organization.'
    },
    {
      siteId: 'lungdev',
      route: 'datasets',
      title: 'Compare cohort releases with developmental provenance',
      summary: 'Use development releases to contrast cancer cohort logic with stage-resolved normal lung datasets.'
    }
  ],
  subtypes: [
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Compare subtype UMAP shifts with normal developmental state space',
      summary: 'Use the developmental atlas to interpret lineage-like and stress-like malignant positions against normal tissue structure.'
    },
    {
      siteId: 'lunginf',
      route: 'conditions',
      title: 'Compare subtype ecosystems with infection condition states',
      summary: 'Jump to infection conditions to separate malignant remodeling from pathogen-driven injury and repair.'
    }
  ],
  biomarkers: [
    {
      siteId: 'lungdev',
      route: 'markers',
      title: 'Map tumor biomarkers against developmental marker catalogs',
      summary: 'Use marker search to test which cancer biomarkers also serve as developmental lineage anchors.'
    },
    {
      siteId: 'lungevo',
      route: 'orthologs',
      title: 'Check biomarker genes against cross-species ortholog context',
      summary: 'Use the evolution portal to see whether tumor-associated genes remain interpretable in a comparative respiratory frame.'
    }
  ],
  clinical: [
    {
      siteId: 'lunginf',
      route: 'immune-states',
      title: 'Compare clinical stratification with infection immune modules',
      summary: 'Use immune-state modules to contrast therapy-linked tumor inflammation with pathogen-driven host response.'
    },
    {
      siteId: 'lungdev',
      route: 'lineages',
      title: 'Relate progression and resistance to lineage and maturation logic',
      summary: 'Jump to developmental lineages to keep cell-state origin questions visible while reading clinical heterogeneity.'
    }
  ],
  datasets: [
    {
      siteId: 'lunginf',
      route: 'datasets',
      title: 'Inspect the infection release table',
      summary: 'Compare cohort-scoped cancer releases with condition-scoped infectious disease releases.'
    },
    {
      siteId: 'lungevo',
      route: 'datasets',
      title: 'Inspect the comparative evolution release table',
      summary: 'Use evolution releases to contrast cancer dataset provenance with species and homology assumptions.'
    }
  ],
  about: [
    {
      siteId: 'lungdev',
      route: 'home',
      title: 'See how development keeps time as the primary axis',
      summary: 'The development portal stays organized around stage progression, lineage emergence, and normal tissue maturation.'
    },
    {
      siteId: 'lunginf',
      route: 'home',
      title: 'See how infection keeps pathogen and host response in focus',
      summary: 'The infection portal centers condition comparison, immune remodeling, and inflammatory signal interpretation.'
    },
    {
      siteId: 'lungevo',
      route: 'home',
      title: 'See how evolution reframes the same shell comparatively',
      summary: 'The evolution portal keeps species anchors and homolog reasoning primary instead of subtype and clinical filters.'
    }
  ]
};

export const launchChecklist = [
  'Route-complete MVP across home, cohorts, subtypes, biomarkers, clinical, datasets, and about',
  'Cancer-atlas MVP homepage narrative tied to subtype anchors and clinical frames',
  'Searchable biomarker catalog with subtype- and microenvironment-aware interpretation',
  'Cohort-scoped dataset table with provenance and evidence framing',
  'Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring',
  'Build and regression checks updated for lungcancer'
];
