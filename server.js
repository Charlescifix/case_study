/**
 * server.js — Production static server for Gen3block case studies.
 *
 * Replaces `vite preview` (which uses sirv in SPA-only mode and always
 * serves dist/index.html for every route, bypassing our prerendered files).
 *
 * Routing priority:
 *   1. Static assets (JS, CSS, images, fonts) — served with long-term cache headers
 *   2. Prerendered index.html for that route (e.g. dist/case_study/uid/index.html)
 *   3. SPA fallback: dist/index.html (for any future routes without prerendered HTML)
 */

import express from 'express';
import { join, dirname, resolve, sep } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

const app = express();

// ── 1. Static assets ──────────────────────────────────────────────────────────
// Serve hashed JS/CSS/image assets with a 1-year cache.
// index:false means we handle HTML routing ourselves below.
app.use(express.static(dist, {
  index: false,
  redirect: false, // prevent 301 on directory paths; our handler resolves index.html
  maxAge: '1y',
  immutable: true,
}));

// ── 2. Prerendered HTML routes + SPA fallback ─────────────────────────────────
const distResolved = resolve(dist);

app.use((req, res) => {
  const decoded = decodeURIComponent(req.path);
  // Build candidate path, resolve() normalises separators and removes traversal
  const candidate = resolve(dist, '.' + decoded, 'index.html');

  // Security: candidate must sit inside dist
  if (!candidate.startsWith(distResolved + sep)) {
    return res.status(403).end();
  }

  if (existsSync(candidate)) {
    // Serve prerendered page — no-cache so endorsement bodies always get fresh content
    res.setHeader('Cache-Control', 'no-cache');
    return res.sendFile(candidate);
  }

  // SPA fallback for any route without a prerendered file
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(join(dist, 'index.html'));
});

const port = process.env.PORT || 4173;
app.listen(port, '0.0.0.0', () => {
  console.log(`Gen3block case studies serving on :${port}`);
});
