/**
 * test-routes.js — Smoke test for the Express server routing.
 * Run: node test-routes.js
 * Starts the server, checks each route, then shuts down.
 */

import { createServer } from 'http';
import { get } from 'http';

const PORT = 4174; // use a different port to avoid conflicts
process.env.PORT = PORT;

// Dynamically import the server (it starts on import)
const serverModule = await import('./server.js');

await new Promise(r => setTimeout(r, 500)); // wait for listen

const routes = [
  { path: '/',                     expect: 'Selected Work' },
  { path: '/case_study/uid',        expect: 'Unity in Diversity' },
  { path: '/case_study/iufp',       expect: 'IUFP' },
  { path: '/case_study/bold-munch', expect: 'Bold Munch' },
  { path: '/case_study/teep',       expect: 'TEEP' },
  { path: '/case_study/ai-launchpad', expect: 'AI Launchpad' },
];

let pass = 0, fail = 0;

for (const route of routes) {
  await new Promise((resolve) => {
    get(`http://localhost:${PORT}${route.path}`, (res) => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        const ok = res.statusCode === 200 && body.includes(route.expect);
        const status = ok ? '✓ PASS' : '✗ FAIL';
        if (ok) pass++; else fail++;
        console.log(`${status}  ${route.path} (${res.statusCode}) — looking for "${route.expect}"`);
        if (!ok) {
          const titleMatch = body.match(/<title>([^<]*)<\/title>/);
          console.log(`       got title: ${titleMatch ? titleMatch[1] : '(no title found)'}`);
        }
        resolve();
      });
    }).on('error', (e) => {
      console.log(`✗ FAIL  ${route.path} — ${e.message}`);
      fail++;
      resolve();
    });
  });
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
