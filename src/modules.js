import {
  biomarkerCatalog,
  biomarkerSearchSuggestions,
  bundleCrossLinks,
  clinicalFeatureCatalog,
  cohortMatrix,
  coreQuestions,
  databasePortfolio,
  datasetReleases,
  evidenceHighlights,
  heroMetrics,
  launchChecklist,
  metadataPriorities,
  methodsResources,
  provenanceHistory,
  routeCopy,
  scopeBoundaries,
  siteMeta,
  subtypeBackbone,
  targetUsers
} from './data.js';

function renderChipList(items) {
  return `<div class="chip-row">${items.map((item) => `<span class="chip">${item}</span>`).join('')}</div>`;
}

function renderSectionHead(kicker, title, description) {
  return `<div class="section-head">
    <p class="eyebrow">${kicker}</p>
    <h2>${title}</h2>
    <p>${description}</p>
  </div>`;
}

function bundleSiteById(siteId) {
  return databasePortfolio.find((site) => site.id === siteId);
}

function bundleHref(siteId, route = 'home') {
  const site = bundleSiteById(siteId);
  if (!site) return '#';
  return route ? `${site.url}#${route}` : site.url;
}

function getSingleCellViewerUrl() {
  if (typeof window === 'undefined') return './singlecell-viewer/';
  const pathname = window.location.pathname || '';
  if (pathname.includes('/dist/') || pathname.endsWith('/dist') || pathname.endsWith('/dist/index.html')) {
    return './singlecell-viewer/';
  }
  return './singlecell-viewer/dist/';
}

function viewerUrlForConfig(subtypeId, mode = 'light') {
  const baseUrl = getSingleCellViewerUrl();
  const url = new URL(baseUrl, typeof window === 'undefined' ? 'http://localhost' : window.location.href);
  if (subtypeId) url.searchParams.set('subtype', subtypeId);
  url.searchParams.set('mode', mode === 'dark' ? 'dark' : 'light');
  if (typeof window === 'undefined') return `${url.pathname}${url.search}`;
  return `${url.pathname}${url.search}`;
}

function renderBiomarkerResults(items, options = {}) {
  const limit = Number(options.limit || 0);
  const visible = limit > 0 ? items.slice(0, limit) : items;

  if (!visible.length) {
    return `<div class="empty-state">No biomarkers match the current search.</div>`;
  }

  return visible
    .map(
      (marker) => `<article class="biomarker-card">
        <div class="marker-head">
          <strong>${marker.gene}</strong>
          <span>${marker.subtypeFocus}</span>
        </div>
        <p class="lineage-label">${marker.interpretation}</p>
        <p>${marker.summary}</p>
        <div class="marker-meta">${marker.compartment} · ${marker.program}</div>
      </article>`
    )
    .join('');
}

export function renderHeroSection() {
  return `<section class="hero-shell card" id="LC-HERO-001">
    <div class="hero-copy">
      <p class="eyebrow">Four Lung Database Bundle</p>
      <h1>${siteMeta.title}</h1>
      <p class="hero-strap">${siteMeta.strapline}</p>
      <p>${siteMeta.heroIntro}</p>
      <div class="action-row">
        <button type="button" data-route="subtypes">Open subtype explorer</button>
        <button type="button" class="ghost" data-route="biomarkers">Search biomarker programs</button>
      </div>
    </div>
    <div class="hero-side">
      <div class="release-panel">
        <span>Current build</span>
        <strong>${siteMeta.release}</strong>
        <p>${siteMeta.coverage}</p>
      </div>
      <div class="metric-grid">
        ${heroMetrics
          .map(
            (metric) => `<article class="metric-card">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
              <p>${metric.detail}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
    <div class="timeline-ribbon">
      ${subtypeBackbone
        .map(
          (subtype) => `<article class="timeline-stop">
            <span>${String(subtype.rank).padStart(2, '0')}</span>
            <strong>${subtype.label}</strong>
            <p>${subtype.cohort}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderCohortSection() {
  return `<section class="section-block" id="LC-COHORT-001">
    ${renderSectionHead(
      'Cohort matrix',
      'Five cohort frames organize the MVP around clinical and biological context',
      'Each cohort card defines a distinct tumor ecosystem comparison problem rather than a generic study listing.'
    )}
    <div class="cohort-grid">
      ${cohortMatrix
        .map(
          (cohort) => `<article class="cohort-card card">
            <p class="lineage-label">${cohort.category}</p>
            <h3>${cohort.name}</h3>
            <p class="subtype-comparison">${cohort.comparison}</p>
            <p>${cohort.summary}</p>
            ${renderChipList(cohort.anchors)}
            <p class="lineage-insight">${cohort.evidence}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderSubtypeSection(options = {}) {
  const compact = Boolean(options.compact);
  const visibleSubtypes = compact ? subtypeBackbone.slice(0, 3) : subtypeBackbone;

  return `<section class="section-block" id="LC-SUBTYPE-001">
    ${renderSectionHead(
      'Subtype backbone',
      'A five-subtype scaffold from LUAD to resistant disease',
      'Each subtype card anchors a malignant ecosystem question, treatment context, or progression state relevant to lung cancer biology.'
    )}
    <div class="subtype-grid ${compact ? 'compact' : ''}">
      ${visibleSubtypes
        .map(
          (subtype) => `<article class="subtype-card card">
            <div class="stage-meta">
              <span>${String(subtype.rank).padStart(2, '0')}</span>
              <p>${subtype.cohort}</p>
            </div>
            <h3>${subtype.label}</h3>
            <p class="stage-headline">${subtype.state}</p>
            <p>${subtype.summary}</p>
            ${renderChipList(subtype.traits)}
            <p class="stage-question">${subtype.question}</p>
          </article>`
        )
        .join('')}
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="subtypes">Inspect full subtype explorer</button></div>`
        : ''
    }
  </section>`;
}

export function renderSubtypeViewerSection(selectedSubtype = 'luad', mode = 'light') {
  const viewerUrl = viewerUrlForConfig(selectedSubtype, mode);

  return `<section class="section-block" id="LC-UMAP-001">
    ${renderSectionHead(
      'Single-cell viewer',
      'Subtype-centered UMAP exploration',
      'The Subtypes page is centered on the embedded single-cell viewer. Subtype buttons live inside the viewer so the embedding can stay wide and visually primary.'
    )}
    <article class="card atlas-viewer-card atlas-viewer-wide">
      <div class="atlas-viewer-head">
        <div>
          <p class="eyebrow">Single-cell Data Viewer</p>
          <h2>UMAP-first lung cancer subtype exploration</h2>
          <p>This viewer uses simulated subtype subsets derived from the bundled lungdev coordinates so the portal can use the same real viewer interface without showing static UMAP images.</p>
        </div>
        <a class="atlas-link" href="${viewerUrl}" target="_blank" rel="noopener noreferrer">Open viewer in new tab</a>
      </div>
      <iframe
        title="lungcancer single-cell subtype viewer"
        src="${viewerUrl}"
        class="atlas-viewer-frame"
        loading="lazy"
      ></iframe>
      <p class="atlas-note">If the panel is blank, build the viewer in <code>singlecell-viewer/</code> and then rerun the top-level build.</p>
    </article>
  </section>`;
}

export function renderBiomarkerSection(options = {}) {
  const compact = Boolean(options.compact);
  const limit = compact ? 4 : biomarkerCatalog.length;

  return `<section class="section-block" id="LC-BIOMARKER-001">
    ${renderSectionHead(
      'Biomarker workspace',
      'Search malignant, immune, and stromal programs by gene and subtype',
      'The launch biomarker catalog is meant to anchor ecosystem interpretation, not to stand in for a full mutation or pathway database.'
    )}
    <div class="card marker-search-panel" data-biomarker-search-root data-limit="${limit}">
      <div class="search-controls">
        <input
          type="text"
          class="search-input"
          data-biomarker-search
          placeholder="Search genes, subtype labels, compartments, or programs"
          aria-label="Search lung cancer biomarkers"
        />
        <button type="button" class="ghost" data-biomarker-reset>Reset</button>
      </div>
      <div class="chip-row">
        ${biomarkerSearchSuggestions
          .map(
            (gene) => `<button type="button" class="chip chip-button" data-biomarker-suggestion="${gene}">${gene}</button>`
          )
          .join('')}
      </div>
      <div class="marker-results" data-biomarker-results>${renderBiomarkerResults(biomarkerCatalog, { limit })}</div>
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="biomarkers">Open full biomarker workspace</button></div>`
        : ''
    }
  </section>`;
}

export function renderClinicalSection() {
  return `<section class="section-block" id="LC-CLINICAL-001">
    ${renderSectionHead(
      'Clinical feature lenses',
      'Clinical context should reorganize tumor ecosystems rather than sit as a secondary annotation',
      'The MVP clinical route makes stage, treatment, immune context, and resistant progression explicit biological entry points.'
    )}
    <div class="clinical-grid">
      ${clinicalFeatureCatalog
        .map(
          (feature) => `<article class="clinical-card card">
            <p class="lineage-label">${feature.category}</p>
            <h3>${feature.name}</h3>
            <p class="subtype-comparison">${feature.comparison}</p>
            <p>${feature.summary}</p>
            ${renderChipList(feature.anchors)}
            <p class="lineage-insight">${feature.evidence}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderDatasetSection(options = {}) {
  const compact = Boolean(options.compact);
  const visibleDatasets = compact ? datasetReleases.slice(0, 3) : datasetReleases;

  return `<section class="section-block" id="LC-DATASET-001">
    ${renderSectionHead(
      'Datasets and releases',
      'Cohort-scoped release rows make clinical framing explicit',
      'Each release states its cohort scope, respiratory structure emphasis, assay footprint, and current prototype interpretation limits.'
    )}
    <article class="card data-table-card">
      <div class="table-card-head">
        <div>
          <h3>Lung cancer cohort release table</h3>
          <p>${compact ? `Showing ${visibleDatasets.length} of ${datasetReleases.length} current prototype releases.` : `Showing all ${datasetReleases.length} current prototype releases.`}</p>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dataset</th>
              <th>Cohort</th>
              <th>Structure</th>
              <th>Cells</th>
              <th>Assays</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${visibleDatasets
              .map(
                (dataset) => `<tr>
                  <td>${dataset.id}</td>
                  <td><strong>${dataset.title}</strong></td>
                  <td>${dataset.cohortScope}</td>
                  <td>${dataset.structure}</td>
                  <td>${dataset.cells}</td>
                  <td>${dataset.assays}</td>
                  <td><span class="table-status">${dataset.status}</span></td>
                  <td>${dataset.note}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </article>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="datasets">Open full dataset table</button></div>`
        : ''
    }
  </section>`;
}

export function renderEvidenceSection() {
  return `<section class="section-block" id="LC-EVIDENCE-001">
    ${renderSectionHead(
      'Evidence and provenance',
      'Clinical cohort framing should stay explicit before broader atlas expansion',
      'The current prototype favors transparent subtype anchors, route logic, and release scope over synthetic completeness.'
    )}
    <div class="evidence-grid">
      <article class="card">
        <h3>Current evidence rails</h3>
        <div class="metric-grid">
          ${evidenceHighlights
            .map(
              (item) => `<article class="metric-card">
                <span>${item.label}</span>
                <strong>${item.value}</strong>
                <p>${item.detail}</p>
              </article>`
            )
            .join('')}
        </div>
      </article>
      <article class="card">
        <h3>Provenance timeline</h3>
        <ol class="timeline-list">
          ${provenanceHistory.map((item) => `<li>${item}</li>`).join('')}
        </ol>
      </article>
      <article class="card">
        <h3>Methods and resources</h3>
        <ul class="key-list">
          ${methodsResources.map((item) => `<li><strong>${item.title}:</strong> ${item.detail}</li>`).join('')}
        </ul>
      </article>
    </div>
  </section>`;
}

export function renderPortfolioSection() {
  const relatedSites = databasePortfolio.filter((site) => site.id !== siteMeta.siteId);

  return `<section class="section-block" id="LC-PORTFOLIO-001">
    ${renderSectionHead(
      'Portfolio context',
      'lungcancer is one axis of a four-database system',
      'The technical base can be shared, but the scientific mission, filters, and question framing must remain distinct.'
    )}
    <div class="portfolio-grid">
      ${relatedSites
        .map(
          (site) => `<a class="portfolio-card card" href="${bundleHref(site.id)}">
            <span>${site.axis}</span>
            <h3>${site.label}</h3>
            <p>${site.summary}</p>
            <strong>${site.status}</strong>
            <small>${site.customDomain}</small>
          </a>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderBundleBridgeSection(routeId, moduleId = 'LC-BRIDGE-001') {
  const links = bundleCrossLinks[routeId] ?? [];

  if (!links.length) return '';

  return `<section class="section-block" id="${moduleId}">
    ${renderSectionHead(
      'Bundle links',
      'Follow complementary routes across the four lung databases',
      'This page is cross-linked to the other portals so cancer questions can stay connected to development, infection, and evolution views.'
    )}
    <div class="bundle-bridge-grid">
      ${links
        .map((link) => {
          const site = bundleSiteById(link.siteId);
          if (!site) return '';
          return `<a class="bundle-bridge-card card" href="${bundleHref(link.siteId, link.route)}">
            <span>${site.axis} · ${site.label}</span>
            <h3>${link.title}</h3>
            <p>${link.summary}</p>
            <strong>${site.customDomain}</strong>
          </a>`;
        })
        .join('')}
    </div>
  </section>`;
}

export function renderPageBanner(routeId) {
  const copy = routeCopy[routeId];

  return `<section class="page-banner card">
    <p class="eyebrow">${copy.eyebrow}</p>
    <h1>${copy.title}</h1>
    <p>${copy.description}</p>
  </section>`;
}

export function renderHomePage() {
  return `<main class="page-shell page-home">
    ${renderHeroSection()}
    ${renderCohortSection()}
    ${renderSubtypeSection({ compact: true })}
    ${renderBiomarkerSection({ compact: true })}
    ${renderClinicalSection()}
    ${renderDatasetSection({ compact: true })}
    ${renderBundleBridgeSection('home')}
    ${renderPortfolioSection()}
  </main>`;
}

export function renderCohortsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('cohorts')}
    ${renderCohortSection()}
    <section class="section-block card" id="LC-QUESTION-001">
      ${renderSectionHead(
        'Core cancer atlas questions',
        'Cohort pages should answer concrete tumor ecosystem questions',
        'The cohort route exists to connect study framing, clinical context, and ecosystem interpretation.'
      )}
      <ul class="key-list">
        ${coreQuestions.map((question) => `<li>${question}</li>`).join('')}
      </ul>
    </section>
    ${renderBundleBridgeSection('cohorts')}
  </main>`;
}

export function renderSubtypesPage(selectedSubtype = 'luad', mode = 'light') {
  return `<main class="page-shell">
    ${renderPageBanner('subtypes')}
    ${renderSubtypeViewerSection(selectedSubtype, mode)}
    ${renderSubtypeSection()}
    <section class="section-block card" id="LC-ECOSYSTEM-001">
      ${renderSectionHead(
        'Subtype reading rules',
        'Subtype anchors should guide ecosystem interpretation, not erase treatment or progression context',
        'Subtype pages connect baseline malignant identity with therapy-linked adaptation and resistant progression.'
      )}
      <ul class="key-list">
        <li>Use subtype anchors to compare baseline malignant identity and lineage context.</li>
        <li>Use treated and resistant states to highlight adaptation and escape beyond baseline subtype identity.</li>
        <li>Keep microenvironment changes visible so malignant-state interpretation does not ignore immune and stromal remodeling.</li>
      </ul>
    </section>
    ${renderBundleBridgeSection('subtypes')}
  </main>`;
}

export function renderBiomarkersPage() {
  return `<main class="page-shell">
    ${renderPageBanner('biomarkers')}
    ${renderBiomarkerSection()}
    <section class="section-block card" id="LC-META-001">
      ${renderSectionHead(
        'Metadata priorities',
        'Biomarker interpretation depends on explicit clinical and ecosystem metadata',
        'These fields drive the MVP biomarker search, subtype framing, and future malignant-versus-microenvironment comparisons.'
      )}
      ${renderChipList(metadataPriorities)}
    </section>
    ${renderBundleBridgeSection('biomarkers')}
  </main>`;
}

export function renderClinicalPage() {
  return `<main class="page-shell">
    ${renderPageBanner('clinical')}
    ${renderClinicalSection()}
    ${renderBundleBridgeSection('clinical')}
  </main>`;
}

export function renderDatasetsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('datasets')}
    ${renderDatasetSection()}
    ${renderEvidenceSection()}
    ${renderBundleBridgeSection('datasets')}
  </main>`;
}

export function renderAboutPage() {
  return `<main class="page-shell">
    ${renderPageBanner('about')}
    <section class="split-grid">
      <article class="card">
        <h2>Scientific mission</h2>
        <p>${siteMeta.mission}</p>
        <p>${siteMeta.focus}</p>
      </article>
      <article class="card">
        <h2>Target users</h2>
        <ul class="key-list">
          ${targetUsers.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Scope boundaries</h2>
        <ul class="key-list">
          ${scopeBoundaries.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Launch checklist</h2>
        <ul class="key-list">
          ${launchChecklist.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    </section>
    ${renderBundleBridgeSection('about')}
    ${renderPortfolioSection()}
  </main>`;
}

function biomarkerMatches(marker, query) {
  const haystack = [
    marker.gene,
    marker.subtypeFocus,
    marker.interpretation,
    marker.compartment,
    marker.program,
    marker.summary
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export function initBiomarkerSearch() {
  const roots = document.querySelectorAll('[data-biomarker-search-root]');

  roots.forEach((root) => {
    if (root.dataset.bound === 'true') return;

    const input = root.querySelector('[data-biomarker-search]');
    const results = root.querySelector('[data-biomarker-results]');
    const reset = root.querySelector('[data-biomarker-reset]');
    const suggestionButtons = root.querySelectorAll('[data-biomarker-suggestion]');
    const limit = Number(root.dataset.limit || '0');

    if (!input || !results) return;

    function update(query = input.value.trim()) {
      const matches = query
        ? biomarkerCatalog.filter((marker) => biomarkerMatches(marker, query))
        : biomarkerCatalog;
      results.innerHTML = renderBiomarkerResults(matches, { limit });
    }

    input.addEventListener('input', () => update());
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        update();
      }
    });

    reset?.addEventListener('click', () => {
      input.value = '';
      update('');
    });

    suggestionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        input.value = button.dataset.biomarkerSuggestion || '';
        update(input.value);
      });
    });

    update();
    root.dataset.bound = 'true';
  });
}
