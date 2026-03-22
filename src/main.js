import { cssVarsFor } from './theme.js';
import { renderGlobalSearch } from './modules.js';
import { siteConfig } from './site-content.js';
import { normalizeRoute, routeFromHash } from './router.js';

let route = routeFromHash(window.location.hash);
let mode = 'light';

function setTheme() {
  const styleTag = document.getElementById('theme-vars') ?? document.createElement('style');
  styleTag.id = 'theme-vars';
  styleTag.textContent = `:root { ${cssVarsFor(siteConfig.themeKey, mode)} }`;
  document.head.appendChild(styleTag);
}

function nav() {
  return `<header><div class="black-nav"><a href="#home">${siteConfig.siteName}</a><span>${siteConfig.tagline}</span></div><div class="top-nav"><strong>${siteConfig.siteName}</strong><nav>${siteConfig.routes.map((key) => `<button class="nav-btn ${route === key ? 'active' : ''}" data-route="${key}">${siteConfig.navLabels[key]}</button>`).join('')}</nav><div class="theme-controls"><label>Mode<select id="mode-switcher"><option value="light" ${mode === 'light' ? 'selected' : ''}>Light</option><option value="dark" ${mode === 'dark' ? 'selected' : ''}>Dark</option></select></label></div></div></header>`;
}

function metricCards() { return siteConfig.metrics.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join(''); }

function homePage() {
  return `<main class="page-home"><section class="hero card"><div><span class="eyebrow">${siteConfig.hero.eyebrow}</span><h1>${siteConfig.hero.title}</h1><p>${siteConfig.hero.description}</p><div class="actions"><button data-route="cohorts">Open cohorts</button><button class="ghost" data-route="biomarkers">View biomarkers</button></div></div><div class="hero-metrics">${metricCards()}</div></section><section class="stats-grid">${siteConfig.spotlightCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</section><section class="card"><h2>Core modules</h2><div class="stats-grid compact">${siteConfig.moduleCards.map((item) => `<article class="mini-card"><strong>${item.title}</strong><span>${item.text}</span></article>`).join('')}</div></section>${renderGlobalSearch()}</main>`;
}
function cohortsPage() { return `<main class="page-browse"><section class="card"><h1>Cohorts</h1><p>Catalog cohorts by histology, modality, sample depth, and clinical annotation.</p></section><section class="stats-grid compact">${siteConfig.moduleCards.map((item) => `<article class="mini-card"><strong>${item.title}</strong><span>${item.text}</span></article>`).join('')}</section></main>`; }
function subtypesPage() { return `<main class="page-browse"><section class="card"><h1>Subtypes</h1><p>Compare molecular programs across major histologic and transcriptional subtypes.</p></section><section class="stats-grid">${siteConfig.spotlightCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</section></main>`; }
function biomarkersPage() { return `<main class="page-browse"><section class="card"><h1>Biomarkers</h1><p>Review actionable biomarkers, resistance pathways, and translational signatures.</p></section>${renderGlobalSearch()}</main>`; }
function clinicalPage() { return `<main class="page-browse"><section class="card"><h1>Clinical</h1><ul>${siteConfig.datasets.map((item) => `<li>${item}</li>`).join('')}</ul></section></main>`; }
function aboutPage() { return `<main class="page-browse"><section class="card"><h1>About ${siteConfig.siteName}</h1><p>${siteConfig.about}</p></section></main>`; }
function renderPage() { switch (route) { case 'cohorts': return cohortsPage(); case 'subtypes': return subtypesPage(); case 'biomarkers': return biomarkersPage(); case 'clinical': return clinicalPage(); case 'about': return aboutPage(); default: return homePage(); } }
function render() { setTheme(); document.body.innerHTML = `${nav()}${renderPage()}`; document.querySelectorAll('[data-route]').forEach((node) => node.addEventListener('click', () => { window.location.hash = normalizeRoute(node.getAttribute('data-route')); })); document.getElementById('mode-switcher')?.addEventListener('change', (event) => { mode = event.target.value; render(); }); }
window.addEventListener('hashchange', () => { route = routeFromHash(window.location.hash); render(); });
render();
