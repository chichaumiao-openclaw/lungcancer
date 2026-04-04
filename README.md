# lungcancer

`lungcancer` is the cancer axis of the four-database lung single-cell program:

- `lungdev`: development
- `lunginf`: infection / inflammation
- `lungcancer`: cancer
- `lungevo`: evolution

## Mission

Lung Cancer Atlas is an atlas-centered resource for understanding malignant cell states, tumor microenvironment remodeling, and clinical heterogeneity in lung cancer.

This site is the **Cancer-atlas MVP** for the cancer portal. The navigation, modules, and dataset framing are organized around cohort design, subtype-centered malignant programs, biomarker interpretation, and clinically stratified ecosystem comparison rather than developmental time, infection state, or species homology.

## MVP routes

- `home`
- `cohorts`
- `subtypes`
- `biomarkers`
- `clinical`
- `datasets`
- `about`

## Working scope

- LUAD, LUSC, SCLC, treated, and resistant subtype anchors
- Subtype-centered single-cell viewer using simulated subsets until curated cancer datasets are integrated
- Cohort overview cards and clinical feature lenses
- Searchable biomarker catalog spanning malignant and microenvironment programs
- Cohort-scoped dataset release table with provenance and evidence framing
- Cross-linked bundle navigation to `lungdev`, `lunginf`, and `lungevo`
- Mobile-friendly header, route navigation, and footer shell
- About page describing mission, scope, and portfolio role

## Bundle and domains

- GitHub Pages target: `https://chichaumiao-openclaw.github.io/lungcancer/`
- Custom domain: `https://lungcancer.gznl.org/`
- Build output includes `dist/CNAME` with `lungcancer.gznl.org`

## Local development

From `/Users/chichau/current_projects/database4/lungcancer`:

```bash
npm install
npm test
cd singlecell-viewer
npm install
npm run build
cd ..
npm run build
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/dist/
```

## Validation

```bash
npm test
npm run build
npm run verify:mvp
```
