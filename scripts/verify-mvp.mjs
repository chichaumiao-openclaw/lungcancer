import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
for (const rel of ['src/main.js', 'src/site-content.js', 'src/router.js', 'dist/index.html']) {
  if (!existsSync(resolve(root, rel))) {
    console.error(`Missing required artifact: ${rel}`);
    process.exit(1);
  }
}
const main = readFileSync(resolve(root, 'src/main.js'), 'utf8');
const content = readFileSync(resolve(root, 'src/site-content.js'), 'utf8');
for (const token of ['cohorts', 'subtypes', 'biomarkers', 'clinical', 'LungCancer']) {
  if (!main.includes(token) && !content.includes(token)) {
    console.error(`Missing required LungCancer token: ${token}`);
    process.exit(1);
  }
}
console.log('LungCancer MVP verification passed.');
