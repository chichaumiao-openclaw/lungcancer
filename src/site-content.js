export const siteConfig = {
  siteName: 'LungCancer',
  tagline: 'Tumor ecosystem and clinical translation portal for lung cancer multi-omics.',
  themeKey: 'purple',
  routes: ['home', 'cohorts', 'subtypes', 'biomarkers', 'clinical', 'about'],
  navLabels: {
    home: 'Home',
    cohorts: 'Cohorts',
    subtypes: 'Subtypes',
    biomarkers: 'Biomarkers',
    clinical: 'Clinical',
    about: 'About'
  },
  hero: {
    eyebrow: 'Cancer-focused prototype',
    title: 'Explore cohorts, subtypes, biomarkers, and therapy-linked signals in lung cancer',
    description:
      'LungCancer provides a precision-oncology-oriented shell for cohort stratification, tumor microenvironment analysis, and translational biomarker review.'
  },
  metrics: [
    { label: 'Cohorts indexed', value: '22' },
    { label: 'Subtypes tracked', value: '11' },
    { label: 'Biomarker panels', value: '37' },
    { label: 'Clinical endpoints', value: '19' }
  ],
  spotlightCards: [
    { title: 'Subtype explorer', text: 'Contrast LUAD/LUSC programs, neuroendocrine states, and hybrid phenotypes.' },
    { title: 'Tumor ecosystem map', text: 'Inspect malignant, stromal, and immune interactions across cohorts.' },
    { title: 'Therapy biomarker watchlist', text: 'Prioritize markers linked to targeted therapy and immunotherapy response.' }
  ],
  moduleCards: [
    { title: 'Cohort overview', text: 'Unified access to cohort composition, technology, sample size, and clinical depth.' },
    { title: 'Biomarker dashboard', text: 'Summarize driver alterations, resistance signals, and response-linked signatures.' },
    { title: 'Clinical translation', text: 'Bridge molecular findings to endpoints, response classes, and trial relevance.' }
  ],
  datasets: [
    'Tumor single-cell cohorts',
    'Bulk + clinical annotation cohorts',
    'Therapy response biomarker tables',
    'Microenvironment deconvolution references'
  ],
  about:
    'Prototype for the lung cancer database portal in the four-database lung program.'
};
