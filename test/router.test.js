import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, routeFromHash } from '../src/router.js';

test('normalizeRoute accepts supported lungcancer routes only', () => {
  assert.equal(normalizeRoute('HOME'), 'home');
  assert.equal(normalizeRoute('cohorts'), 'cohorts');
  assert.equal(normalizeRoute('SUBTYPES'), 'subtypes');
  assert.equal(normalizeRoute('biomarkers'), 'biomarkers');
  assert.equal(normalizeRoute('clinical'), 'clinical');
  assert.equal(normalizeRoute('datasets'), 'datasets');
  assert.equal(normalizeRoute('about'), 'about');
  assert.equal(normalizeRoute('unknown'), 'home');
});

test('routeFromHash parses lungcancer hash routes safely', () => {
  assert.equal(routeFromHash('#cohorts'), 'cohorts');
  assert.equal(routeFromHash('#SUBTYPES'), 'subtypes');
  assert.equal(routeFromHash('#biomarkers'), 'biomarkers');
  assert.equal(routeFromHash('#clinical'), 'clinical');
  assert.equal(routeFromHash('#datasets'), 'datasets');
  assert.equal(routeFromHash(''), 'home');
  assert.equal(routeFromHash('#not-a-route'), 'home');
});
