import { cp, rm, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await cp(path.join(root, 'index.html'), path.join(dist, 'index.html'));
await cp(path.join(root, 'src'), path.join(dist, 'src'), { recursive: true });

// Copy all download pages (lc_ds_*_download.html) to dist/
const files = await readdir(root);
for (const file of files) {
  if (file.endsWith('_download.html') && file.startsWith('lc_ds_')) {
    await cp(path.join(root, file), path.join(dist, file));
  }
}

const cnameSrc = path.join(root, 'CNAME');
const cnameDist = path.join(dist, 'CNAME');
try {
  await cp(cnameSrc, cnameDist);
} catch {
  // optional file during local drafting
}

const pdbfilesSrc = path.join(root, 'pdbfiles');
const pdbfilesDist = path.join(dist, 'pdbfiles');
try {
  await cp(pdbfilesSrc, pdbfilesDist, { recursive: true });
} catch {
  // optional folder
}

console.log('Build complete: dist/');
