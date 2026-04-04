import test from 'node:test';
import assert from 'node:assert/strict';
import {
  renderBiomarkersPage,
  renderClinicalPage,
  renderDatasetsPage,
  renderHomePage,
  renderSubtypesPage
} from '../src/modules.js';

test('home page includes the core lungcancer MVP modules', () => {
  const html = renderHomePage();
  const requiredIds = [
    'LC-HERO-001',
    'LC-COHORT-001',
    'LC-SUBTYPE-001',
    'LC-BIOMARKER-001',
    'LC-CLINICAL-001',
    'LC-DATASET-001',
    'LC-BRIDGE-001',
    'LC-PORTFOLIO-001'
  ];

  for (const id of requiredIds) {
    assert.ok(html.includes(id), `missing module: ${id}`);
  }

  assert.match(html, /Lung Cancer Atlas/);
  assert.match(html, /malignant ecosystems/i);
  assert.match(html, /Four Lung Database Bundle/);
  assert.match(html, /Open subtype explorer/);
  assert.match(html, /https:\/\/chichaumiao-openclaw\.github\.io\/lunginf\/#immune-states/);
});

test('biomarkers page exposes searchable tumor biomarker UI', () => {
  const html = renderBiomarkersPage();

  assert.match(html, /Search malignant, immune, and stromal programs by gene and subtype/);
  assert.match(html, /data-biomarker-search-root/);
  assert.match(html, /EGFR/);
  assert.match(html, /CXCL13/);
});

test('datasets page includes evidence and provenance rails', () => {
  const html = renderDatasetsPage();

  assert.match(html, /LC-EVIDENCE-001/);
  assert.match(html, /LC-BRIDGE-001/);
  assert.match(html, /Lung cancer cohort release table/);
  assert.match(html, /Resected early-stage NSCLC atlas/);
  assert.match(html, /<table class="data-table">/);
  assert.match(html, /Provenance timeline/);
});

test('subtypes page centers on the five-subtype comparative backbone', () => {
  const html = renderSubtypesPage();

  assert.match(html, /LC-UMAP-001/);
  assert.match(html, /LC-SUBTYPE-001/);
  assert.match(html, /singlecell-viewer/);
  assert.match(html, /<iframe/);
  assert.match(html, /subtype=luad/);
  assert.match(html, /LUAD/);
  assert.match(html, /LUSC/);
  assert.match(html, /SCLC/);
  assert.match(html, /Resistant/);
  assert.match(html, /Follow complementary routes across the four lung databases/);
});

test('clinical page presents stage and treatment comparison logic', () => {
  const html = renderClinicalPage();

  assert.match(html, /LC-CLINICAL-001/);
  assert.match(html, /Targeted therapy adaptation/);
  assert.match(html, /Clinical context should reorganize tumor ecosystems/);
});
