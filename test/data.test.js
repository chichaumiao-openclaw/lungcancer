import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DATA_VERSION,
  DETERMINISTIC_SEED,
  biomarkerCatalog,
  bundleCrossLinks,
  databasePortfolio,
  datasetReleases,
  navigationItems,
  provenanceHistory,
  siteMeta,
  subtypeBackbone
} from '../src/data.js';

test('portfolio exposes the four orthogonal lung database axes', () => {
  assert.equal(databasePortfolio.length, 4);
  assert.deepEqual(
    databasePortfolio.map((site) => site.id),
    ['lungdev', 'lunginf', 'lungcancer', 'lungevo']
  );
  assert.ok(
    databasePortfolio.every(
      (site) => /^https:\/\/chichaumiao-openclaw\.github\.io\/lung/.test(site.url) && /\.gznl\.org$/.test(site.customDomain)
    )
  );
});

test('lungcancer navigation uses the planned MVP routes', () => {
  assert.deepEqual(
    navigationItems.map((item) => item.id),
    ['home', 'cohorts', 'subtypes', 'biomarkers', 'clinical', 'datasets', 'about']
  );
});

test('subtype backbone is ordered from LUAD to resistant disease', () => {
  assert.equal(subtypeBackbone.length, 5);
  assert.deepEqual(subtypeBackbone.map((subtype) => subtype.rank), [1, 2, 3, 4, 5]);
  assert.deepEqual(subtypeBackbone.map((subtype) => subtype.label), [
    'LUAD',
    'LUSC',
    'SCLC',
    'Treated',
    'Resistant'
  ]);
});

test('biomarker catalog exposes searchable tumor ecosystem markers', () => {
  assert.ok(biomarkerCatalog.length >= 10);
  assert.ok(
    biomarkerCatalog.every(
      (marker) =>
        marker.gene &&
        marker.subtypeFocus &&
        marker.interpretation &&
        marker.compartment &&
        marker.program
    )
  );
});

test('dataset releases describe cohort scope, assay, and scale', () => {
  assert.ok(
    datasetReleases.every(
      (dataset) => dataset.id && dataset.cohortScope && dataset.assays && dataset.cells && dataset.structure
    )
  );
});

test('site metadata identifies the lungcancer workspace', () => {
  assert.equal(siteMeta.siteId, 'lungcancer');
  assert.equal(siteMeta.defaultTheme, 'lungcancer');
  assert.equal(siteMeta.githubPagesUrl, 'https://chichaumiao-openclaw.github.io/lungcancer/');
  assert.equal(siteMeta.customDomain, 'lungcancer.gznl.org');
});

test('bundle cross-links cover the route-level cancer entry points', () => {
  assert.deepEqual(Object.keys(bundleCrossLinks), ['home', 'cohorts', 'subtypes', 'biomarkers', 'clinical', 'datasets', 'about']);
  assert.ok(bundleCrossLinks.subtypes.some((link) => link.siteId === 'lungdev' && link.route === 'atlas'));
  assert.ok(bundleCrossLinks.biomarkers.some((link) => link.siteId === 'lungevo' && link.route === 'orthologs'));
});

test('provenance history is chronological', () => {
  const dates = provenanceHistory.map((event) => event.slice(0, 10));
  const sorted = [...dates].sort();
  assert.deepEqual(dates, sorted);
});

test('data versioning metadata is present for reproducibility', () => {
  assert.match(DATA_VERSION, /^\d{4}-\d{2}-\d{2}\./);
  assert.equal(DETERMINISTIC_SEED, 20260404);
});
