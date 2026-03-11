/**
 * prerender.js — Build-time static HTML generation for all case study routes.
 *
 * Run after `vite build`. For each route, writes a full HTML file to
 * dist/case_study/{route}/index.html containing:
 *   - Per-page <title> and meta/OG tags
 *   - Full case study content as visible HTML inside #root (accessible without JS)
 *   - The built CSS/JS bundles so React takes over for interactive visitors
 *
 * vite preview serves the exact file when the path matches, so crawlers,
 * endorsement systems, and social scrapers receive real content on every route.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

// ─── Extract hashed asset tags from Vite's built index.html ───────────────────
const template = readFileSync(join(dist, 'index.html'), 'utf-8');

const assetTagMatches = template.match(
  /<(?:link|script)[^>]*(?:modulepreload|stylesheet|\/assets\/)[^>]*>(?:<\/script>)?/g
) || [];
const assetTags = assetTagMatches.join('\n    ');

// ─── Shared inline styles for static content ──────────────────────────────────
const CSS = `
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fff;color:#1e293b}
    #sc{max-width:900px;margin:0 auto;padding:40px 20px 80px}
    #sc .back{display:inline-flex;align-items:center;gap:6px;font-size:.85rem;color:#64748b;text-decoration:none;margin-bottom:28px}
    #sc .back:hover{color:#1e293b}
    #sc .tag{display:inline-block;background:#f1f5f9;border-radius:99px;padding:2px 10px;font-size:.73rem;font-weight:600;margin:0 6px 6px 0;color:#334155;border:1px solid #e2e8f0}
    #sc .badge-row{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}
    #sc .kpi{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 16px;font-weight:700;font-size:.85rem;color:#1e40af;white-space:nowrap}
    #sc h1{font-size:clamp(1.5rem,4vw,2.6rem);font-weight:800;line-height:1.15;margin:12px 0 10px;color:#0f172a}
    #sc .lead{font-size:1rem;line-height:1.7;color:#475569;max-width:680px;margin-bottom:20px}
    #sc h2{font-size:1.15rem;font-weight:700;margin:32px 0 8px;color:#0f172a;border-left:3px solid #6366f1;padding-left:10px}
    #sc p,#sc li{font-size:.92rem;line-height:1.75;color:#475569}
    #sc ul{padding-left:22px;margin:6px 0}
    #sc li{margin-bottom:4px}
    #sc .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:12px 0}
    #sc .card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px}
    #sc .card h3{font-size:.9rem;font-weight:700;color:#0f172a;margin-bottom:6px}
    #sc .quote{background:#eef2ff;border:1px solid #c7d2fe;border-left:4px solid #6366f1;border-radius:8px;padding:18px 20px;margin:12px 0}
    #sc .quote p{color:#312e81;font-style:italic;font-size:.95rem}
    #sc .quote cite{display:block;margin-top:8px;font-size:.82rem;color:#6366f1;font-weight:600;font-style:normal}
    #sc .visit-link{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid #e2e8f0;border-radius:99px;padding:8px 16px;font-size:.82rem;color:#374151;text-decoration:none;font-weight:500;margin:0 8px 8px 0}
    #sc .visit-link:hover{background:#f9fafb;color:#111827}
    #sc .footer{margin-top:48px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:.78rem;color:#94a3b8;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:center}
    #sc .footer a{color:#6366f1;text-decoration:none}
  </style>
`;

// ─── Page definitions ─────────────────────────────────────────────────────────
const routes = [
  // ── UID ──────────────────────────────────────────────────────────────────────
  {
    path: 'uid',
    title: 'Unity in Diversity (UiD) — Digital Assistance Platform | Gen3block',
    description:
      'How Gen3block turned a charity static site into a risk-aware, GDPR-compliant case management platform with triage, admin portal, and structured intake for men in crisis.',
    ogImage: 'https://casestudy.up.railway.app/UID_LOGO.png',
    body: `
      <a class="back" href="/case_study">&#8592; Back to Case Studies</a>

      <div class="badge-row">
        <span class="tag">Social Support</span>
        <span class="tag">Charity Tech</span>
        <span class="tag">6–8 weeks</span>
        <span class="tag">GDPR Compliant</span>
      </div>

      <h1>Unity in Diversity (UiD): Digital Assistance Platform</h1>
      <p class="lead">Turning a static site into a risk-aware, auditable case management platform with accessible intake, intelligent triage and a secure data backbone.</p>

      <div class="badge-row">
        <span class="kpi">Platform&thinsp;+&thinsp;Triage</span>
        <span class="kpi">GDPR Audit Trails</span>
        <span class="kpi">RBAC Permissions</span>
        <span class="kpi">Mobile-First Intake</span>
      </div>

      <p>
        <a class="visit-link" href="https://www.theuid.uk" target="_blank" rel="noreferrer">&#8599; theuid.uk</a>
        <a class="visit-link" href="/case_study">&#8592; All Case Studies</a>
      </p>

      <h2>Background</h2>
      <p>Unity in Diversity (UiD) supports men facing challenges across employment, housing, addiction, emotional wellbeing, relationships and loneliness. Previously, a single contact form fed a shared inbox with no way to see all referrals, prioritise urgent cases, track outcomes, or produce reliable data for trustees and funders.</p>

      <h2>Objectives</h2>
      <div class="grid">
        <div class="card"><h3>From Static Site &#8594; Assistance Platform</h3><p>Transform the public website into a structured, supportive intake experience.</p></div>
        <div class="card"><h3>Risk-Aware Triage</h3><p>Introduce scoring and priority levels so urgent cases are never missed.</p></div>
        <div class="card"><h3>Operational Cockpit</h3><p>Provide an admin portal for case management and assignment.</p></div>
        <div class="card"><h3>Secure Data Foundation</h3><p>Build compliant, auditable data flows for future analytics and growth.</p></div>
      </div>

      <h2>Solution Overview</h2>
      <div class="grid">
        <div class="card"><h3>User Intake (5-Step Flow)</h3><ul><li>Safe, mobile-first multi-page form with real-time validation &amp; accessibility</li><li>Trauma-informed language and reassuring micro-copy</li></ul></div>
        <div class="card"><h3>Triage Engine</h3><ul><li>Weighted scoring from concerns, risk flags, and situational factors</li><li>Priority levels: Immediate, High, Medium, Low with response targets</li></ul></div>
        <div class="card"><h3>Secure Backend &amp; Data Store</h3><ul><li>Node.js/Express API, structured validation &amp; logging</li><li>PostgreSQL with ORM; tables for submissions, users, cases, notes, audit</li></ul></div>
        <div class="card"><h3>Admin Portal</h3><ul><li>Live queue sorted by priority; rich filtering</li><li>Case workspace with notes timeline, status, and assignments</li><li>RBAC permissions; audit logging; retention settings</li></ul></div>
      </div>

      <h2>Intake Journey</h2>
      <div class="grid">
        <div class="card"><h3>Step 1 – About You</h3><p>Core details plus optional demographics with clear data-use explanations.</p></div>
        <div class="card"><h3>Step 2 – Your Situation</h3><p>Employment, housing, relationships, dependants, GP and local connection.</p></div>
        <div class="card"><h3>Step 3 – Your Concerns</h3><p>Ten concern areas with severity; risk flags for self-harm, domestic abuse, homelessness and safeguarding.</p></div>
        <div class="card"><h3>Step 4 – Support Preferences</h3><p>Preferred contact method/time, access needs, and free-text narrative.</p></div>
        <div class="card"><h3>Step 5 – Consent &amp; Data Use</h3><p>Transparent storage, access and retention; explicit contact consent; optional anonymised reporting consent.</p></div>
      </div>

      <h2>Data Protection &amp; Compliance</h2>
      <ul>
        <li>HTTPS end-to-end; separated environments; least-privilege access</li>
        <li>Data minimisation; defined retention; SAR &amp; deletion processes</li>
        <li>Regular review of access rights and audit logs</li>
      </ul>

      <h2>Key Results</h2>
      <ul>
        <li>Structured intake replacing untracked inbox referrals</li>
        <li>Risk-scored triage with clear response targets</li>
        <li>Single operational view of live cases</li>
        <li>Auditable governance with RBAC and retention policies</li>
        <li>Foundational data model for reporting and funding</li>
        <li>Blueprint replicable across services</li>
      </ul>

      <h2>Outcomes</h2>
      <div class="grid">
        <div class="card"><h3>For Men</h3><ul><li>Clear, kinder intake that sets expectations</li><li>Confidential handling of information</li><li>Faster responses for highest-risk cases</li></ul></div>
        <div class="card"><h3>For Staff</h3><ul><li>Single prioritised queue; less inbox hunting</li><li>Clear ownership; timeline of actions and outcomes</li><li>Safeguarding guardrails embedded in workflow</li></ul></div>
        <div class="card"><h3>For Leadership</h3><ul><li>On-demand insight into demand patterns and risk levels</li><li>Visibility of outcomes and progression</li><li>Scalable foundation for partnerships</li></ul></div>
      </div>

      <h2>Client Impact</h2>
      <div class="quote">
        <p>"The platform turns website visits into structured, trackable support journeys — and gives us the data to keep improving our service."</p>
        <cite>— Allan Johnson-Mwangi, UID Director</cite>
      </div>

      <div class="footer">
        <span>&copy; Unity in Diversity &middot; Digital Assistance Platform built by <a href="https://www.gen3block.com" target="_blank" rel="noreferrer">Gen3block</a></span>
        <a href="https://www.theuid.uk" target="_blank" rel="noreferrer">theuid.uk</a>
      </div>
    `,
  },

  // ── IUFP ─────────────────────────────────────────────────────────────────────
  {
    path: 'iufp',
    title: 'IUFP — Digital Transformation for International Education | Gen3block',
    description:
      'Multi-tenant VLE with RAG-powered search, automated admissions, RBAC compliance, and 5× faster application processing across 10+ partner countries. Built by Gen3block.',
    ogImage: 'https://casestudy.up.railway.app/IUFP_LOGO.jpg',
    body: `
      <a class="back" href="/case_study">&#8592; Back to Case Studies</a>

      <div class="badge-row">
        <span class="tag">EdTech</span>
        <span class="tag">Multi-Tenant VLE</span>
        <span class="tag">4 months</span>
        <span class="tag">ATHE Endorsed</span>
        <span class="tag">10+ countries</span>
      </div>

      <h1>IUFP: Digital Transformation for International Education</h1>
      <p class="lead">A modern multi-tenant Virtual Learning Environment unifying global operations with AI-powered assistance, analytics, and automated workflows.</p>

      <div class="badge-row">
        <span class="kpi">5&#215; faster processing</span>
        <span class="kpi">10+ partner schools</span>
        <span class="kpi">6 RBAC roles</span>
        <span class="kpi">S3 + CloudFront CDN</span>
      </div>

      <p>
        <a class="visit-link" href="https://iufp.org.uk" target="_blank" rel="noreferrer">&#8599; iufp.org.uk</a>
        <a class="visit-link" href="/case_study">&#8592; All Case Studies</a>
      </p>

      <h2>About IUFP</h2>
      <p>The International University Foundation Programme (IUFP) is a pre-degree, full-time university foundation course offering a fast-track alternative route to first-year degree entry after 9–12 months of intensive study — an ATHE-endorsed alternative to the traditional A-Levels route.</p>

      <h2>The Situation</h2>
      <p>Before the transformation, IUFP managed student applications, partner school coordination, and admissions manually through paper-based forms, spreadsheets, and email exchanges. This created delays in processing, inconsistencies in data tracking, and limited the ability to scale internationally across multiple partner countries.</p>

      <h2>The Challenge</h2>
      <p>Off-the-shelf LMS or VLE solutions couldn't meet IUFP's complex requirements for a multi-tenant architecture, partner school onboarding, and compliance with international education standards. The platform needed to serve schools and students across diverse geographies while maintaining secure data isolation and localised customisation.</p>

      <h2>The Solution</h2>
      <div class="grid">
        <div class="card"><h3>Multi-Tenant VLE Platform</h3><ul><li>Categorised resource library with per-school download tracking</li><li>Partner-specific portals with isolated VLE credentials</li><li>30+ frontend pages serving students, partners, and admins</li></ul></div>
        <div class="card"><h3>Structured Application Pipeline</h3><ul><li>Multi-step status tracking: pending &#8594; under review &#8594; accepted/rejected</li><li>Document upload to S3 with file-type and 5 MB size validation</li><li>Admin review dashboard with filtering and bulk actions</li></ul></div>
        <div class="card"><h3>Automated Partner Onboarding</h3><ul><li>Self-serve partner application with document submission</li><li>Admin approve/reject workflow with one-click action</li><li>Auto-provisioned VLE credentials on approval</li></ul></div>
        <div class="card"><h3>Security &amp; Compliance</h3><ul><li>JWT authentication with bcrypt password hashing</li><li>6 role tiers with RBAC (Student &#8594; Super Admin)</li><li>Full audit logging, session management, and GDPR cookie consent</li></ul></div>
      </div>

      <h2>Key Results</h2>
      <ul>
        <li>10+ partner schools supported with isolated multi-tenant operations</li>
        <li>6 RBAC roles enforcing least-privilege access across the platform</li>
        <li>Automated partner onboarding: apply &#8594; approve &#8594; VLE credentials provisioned</li>
        <li>Structured application pipeline with real-time status tracking</li>
        <li>S3 + CloudFront CDN for secure document storage and delivery</li>
        <li>Full audit trail with session management and force-logout capability</li>
      </ul>

      <h2>Client Impact</h2>
      <div class="quote">
        <p>"The IUFP VLE has completely transformed how we manage our global academic network. We now have full visibility of student applications, admissions, and partner operations — all within a single, intelligent system."</p>
        <cite>— Bola Makinde, IUFP CEO</cite>
      </div>

      <div class="footer">
        <span>&copy; IUFP &middot; International University Foundation Programme &middot; Platform built by <a href="https://www.gen3block.com" target="_blank" rel="noreferrer">Gen3block</a></span>
        <a href="https://iufp.org.uk" target="_blank" rel="noreferrer">iufp.org.uk</a>
      </div>
    `,
  },

  // ── Bold Munch ────────────────────────────────────────────────────────────────
  {
    path: 'bold-munch',
    title: 'Bold Munch — From Idea to a Thriving Digital Bakery | Gen3block',
    description:
      'Gen3block built Bold Munch\'s complete e-commerce stack from scratch: custom ordering, postcode-validated delivery zones, WhatsApp Business integration. 100+ products sold in 60 days.',
    ogImage: 'https://casestudy.up.railway.app/Bold_Munch_logo.png',
    body: `
      <a class="back" href="/case_study">&#8592; Back to Case Studies</a>

      <div class="badge-row">
        <span class="tag">Food &amp; E-Commerce</span>
        <span class="tag">Ordering Platform</span>
        <span class="tag">WhatsApp Integration</span>
        <span class="tag">Social Commerce</span>
      </div>

      <h1>Bold Munch: From Idea to a Thriving Digital Bakery</h1>
      <p class="lead">Gen3block transformed a home bakery concept into a fully operational ordering platform — then scaled it to social media with 100+ products sold in just 60 days and consistent weekly orders.</p>

      <div class="badge-row">
        <span class="kpi">100+ sold in 60 days</span>
        <span class="kpi">£20 min. order</span>
        <span class="kpi">Zero out-of-area orders</span>
        <span class="kpi">WhatsApp Business</span>
      </div>

      <p>
        <a class="visit-link" href="https://www.boldmunch.uk" target="_blank" rel="noreferrer">&#8599; boldmunch.uk</a>
        <a class="visit-link" href="/case_study">&#8592; All Case Studies</a>
      </p>

      <h2>About Bold Munch</h2>
      <p>Bold Munch is a premium home bakery specialising in handmade banana breads, meat pies, and puff puff — baked fresh to order and delivered locally every Saturday. What started as a passion project became a fully operational food business powered by a custom digital platform designed and built by Gen3block.</p>

      <h2>The Situation</h2>
      <p>Bold Munch began as just an idea — a talented baker with exceptional products but no digital presence, relying entirely on word-of-mouth and manual messaging to take orders. There was no way for customers to browse the menu, place orders independently, or track their purchases.</p>

      <h2>The Challenge</h2>
      <p>The business needed a professional ordering experience that felt premium and was easy enough for any customer to use on mobile. It also required delivery zone enforcement to ensure orders only came from serviceable postcodes, a way to communicate orders instantly without complex payment infrastructure, and an admin layer — all without expensive third-party platforms eating into margins.</p>

      <h2>The Solution</h2>
      <div class="grid">
        <div class="card"><h3>Custom Ordering Platform</h3><ul><li>Interactive menu with size and variety options per item</li><li>Cart system with running total and order summary</li><li>Mobile-first, glass morphism UI (Vanilla JS)</li><li>WCAG 2.1 Level AA accessible touch targets (44 px minimum)</li></ul></div>
        <div class="card"><h3>Delivery Zone Validation</h3><ul><li>Real-time postcode-based delivery zone checking</li><li>Native point-in-polygon validation — no external APIs</li><li>Saturday delivery window with Friday 9AM order cut-off</li><li>Minimum order of £20 with £4.90 shipping displayed upfront</li></ul></div>
        <div class="card"><h3>WhatsApp Order Integration</h3><ul><li>Seamless order confirmation sent via WhatsApp Business API</li><li>Instant notification to the baker on every new order</li><li>Removes need for a payment gateway at launch</li></ul></div>
        <div class="card"><h3>Admin Dashboard</h3><ul><li>Comprehensive order management and analytics view</li><li>SQLite database with migration support</li><li>Node.js + Express backend — lightweight and self-hosted</li></ul></div>
      </div>

      <h2>Key Results</h2>
      <ul>
        <li>100+ products sold across web and social media in just 60 days</li>
        <li>Minimum £20 order value with transparent £4.90 shipping</li>
        <li>Postcode-validated delivery zones — zero out-of-area orders</li>
        <li>WhatsApp Business integration for instant order notifications</li>
        <li>Orders fulfilled every Saturday with Friday 9AM cut-off</li>
        <li>Admin dashboard giving full visibility of all orders and metrics</li>
      </ul>

      <h2>Social Media Expansion</h2>
      <p>With the digital platform established and operations running smoothly, Gen3block supported Bold Munch's expansion onto social media — bringing the brand in front of a wider audience. The move to social commerce enabled Bold Munch to reach customers beyond local delivery zones, driving consistent order volume with over 100 products sold in just 60 days.</p>

      <div class="footer">
        <span>&copy; Bold Munch &middot; Premium Bakery &middot; Platform built by <a href="https://www.gen3block.com" target="_blank" rel="noreferrer">Gen3block</a></span>
        <span>Handmade with love &middot; Delivered fresh every Saturday</span>
      </div>
    `,
  },

  // ── TEEP ─────────────────────────────────────────────────────────────────────
  {
    path: 'teep',
    title: 'TEEP — Enterprise RAG System for Fintech | Gen3block',
    description:
      'Low-latency, compliant retrieval-augmented generation embedded directly into TEEP\'s payment flows. Sub-300ms retrieval, 99.9% uptime, 3,500+ users. Built by Gen3block.',
    ogImage: 'https://casestudy.up.railway.app/TEEP_LOGO.jpg',
    body: `
      <a class="back" href="/case_study">&#8592; Back to Case Studies</a>

      <div class="badge-row">
        <span class="tag">FinTech</span>
        <span class="tag">RAG System</span>
        <span class="tag">4–6 weeks</span>
        <span class="tag">FastAPI + PostgreSQL</span>
        <span class="tag">AWS</span>
      </div>

      <h1>TEEP: Enterprise RAG System for Fintech</h1>
      <p class="lead">Low-latency, compliant retrieval-augmented assistance embedded directly into payment flows — built for reliability and speed.</p>

      <div class="badge-row">
        <span class="kpi">&lt;300 ms retrieval</span>
        <span class="kpi">99.9% uptime</span>
        <span class="kpi">3,500+ users</span>
        <span class="kpi">~2.5k–5k queries/day</span>
      </div>

      <p>
        <a class="visit-link" href="https://teep.africa" target="_blank" rel="noreferrer">&#8599; teep.africa</a>
        <a class="visit-link" href="/case_study">&#8592; All Case Studies</a>
      </p>

      <h2>The Situation</h2>
      <p>TEEP is a digital payments hub that consolidates airtime/data top-ups, TV/cable, tuition, and ticketing into one app. Support teams needed instant, accurate answers to policy, process, and transaction-safety questions across a growing knowledge base. Traditional keyword search returned noisy or stale results and couldn't constrain answers to compliance-safe guidance.</p>

      <h2>The Challenge</h2>
      <p>The system had to deliver low-latency, high-precision retrieval with financial-grade reliability and clean integration to existing payment flows. Requirements included sub-300 ms retrieval, 99.9% uptime, strict topic guardrails (payments only), and seamless embedding into web/mobile surfaces — without adding new managed vector infrastructure.</p>

      <h2>The Solution</h2>
      <div class="grid">
        <div class="card"><h3>Production RAG Stack</h3><ul><li>FastAPI + PostgreSQL (float[] embeddings)</li><li>NumPy cosine similarity for in-memory vector scoring</li><li>OpenAI GPT-4 for grounded answer synthesis</li><li>AWS containerized deployment</li></ul></div>
        <div class="card"><h3>Performance &amp; Guardrails</h3><ul><li>Chunked docs + lean prompts for &lt;300 ms retrieval</li><li>Environment-scoped secrets; least-privileged DB roles</li><li>HTTPS-only, health checks, structured logging</li><li>CORS rules; routing + prompt guardrails to payments domains</li></ul></div>
      </div>

      <h2>Key Results</h2>
      <ul>
        <li>99.9% uptime maintained in production</li>
        <li>Sub-300 ms average retrieval time</li>
        <li>~2.5k–5k queries/day via API &amp; web widget</li>
        <li>Seamless payment-surface integration</li>
        <li>High accuracy with grounded answers (top-K=3)</li>
        <li>Lower cost vs. managed vector database</li>
      </ul>

      <h2>Client Impact</h2>
      <div class="quote">
        <p>"Customers now get instant, accurate guidance inside the payment flow — fewer handoffs, faster resolutions, and greater trust in every transaction."</p>
        <cite>— Chika Ibegbu, TEEP CEO</cite>
      </div>

      <div class="footer">
        <span>&copy; TEEP &middot; Enterprise RAG for Fintech &middot; Built by <a href="https://www.gen3block.com" target="_blank" rel="noreferrer">Gen3block</a></span>
        <a href="https://teep.africa" target="_blank" rel="noreferrer">teep.africa</a>
      </div>
    `,
  },

  // ── AI Launchpad ──────────────────────────────────────────────────────────────
  {
    path: 'ai-launchpad',
    title: 'AI Launchpad — Community AI Skills Workshop | Gen3block',
    description:
      'Gen3block\'s AI Launchpad community workshop: 14 attendees, average AI confidence +94% in one session, NPS +38.5. Delivered in partnership with UiD CIC and the United African Association, Northampton, March 2026.',
    ogImage: 'https://casestudy.up.railway.app/gen3block-uaa-community-workshop.jpg',
    body: `
      <a class="back" href="/case_study">&#8592; Back to Case Studies</a>

      <div class="badge-row">
        <span class="tag">AI Training</span>
        <span class="tag">Gen3block</span>
        <span class="tag">UiD CIC</span>
        <span class="tag">United African Association</span>
        <span class="tag">Northampton &middot; March 2026</span>
      </div>

      <h1>AI Launchpad — Community AI Skills Workshop</h1>
      <p class="lead">A measurable impact report from a hands-on community AI workshop held on 4 March 2026 in Northampton. 14 attendees from healthcare, charity, education, production, and community volunteering sectors.</p>

      <div class="badge-row">
        <span class="kpi">+94% confidence lift</span>
        <span class="kpi">85% more confident</span>
        <span class="kpi">NPS +38.5</span>
        <span class="kpi">14 attendees</span>
        <span class="kpi">2.5-hour session</span>
      </div>

      <p>
        <a class="visit-link" href="https://www.gen3block.com" target="_blank" rel="noreferrer">&#8599; gen3block.com</a>
        <a class="visit-link" href="/case_study">&#8592; All Case Studies</a>
      </p>

      <h2>About the Workshop</h2>
      <p>Delivered by Gen3block in partnership with Unity in Diversity (UiD) CIC and the United African Association, the AI Launchpad is a hands-on community workshop designed to make artificial intelligence accessible, practical, and safe for everyday professionals. The March 2026 session in Northampton brought together 14 participants spanning healthcare, charity, education, food production, and community volunteering.</p>

      <h2>Impact Metrics</h2>
      <ul>
        <li>Average AI confidence rose from <strong>3.8/10 to 7.4/10</strong> — a <strong>+94% relative lift</strong> in a single 2.5-hour session</li>
        <li><strong>85%</strong> of attendees ended more confident than they started</li>
        <li><strong>54%</strong> promoter-level recommendation scores (9 or 10 out of 10)</li>
        <li>NPS equivalent: <strong>+38.5</strong></li>
        <li>Zero participants left with lower confidence than they arrived</li>
      </ul>

      <h2>Top Outcome Themes</h2>
      <ul>
        <li>CV building and job search using AI tools</li>
        <li>Safe and responsible AI use</li>
        <li>Prompting techniques for everyday tasks</li>
        <li>AI for business and entrepreneurship</li>
        <li>Community and charity applications of AI</li>
      </ul>

      <h2>Attendee Sectors</h2>
      <div class="grid">
        <div class="card"><h3>Healthcare &amp; Support</h3><p>NHS professionals and community support workers exploring AI for patient communication and admin efficiency.</p></div>
        <div class="card"><h3>Charity &amp; Third Sector</h3><p>Charity workers learning to use AI for grant writing, reporting, and community engagement.</p></div>
        <div class="card"><h3>Education</h3><p>Educators discovering AI-assisted lesson planning and student support tools.</p></div>
        <div class="card"><h3>Food &amp; Production</h3><p>Food business owners using AI to streamline operations and marketing.</p></div>
        <div class="card"><h3>Community Volunteering</h3><p>Volunteers and community organisers learning practical AI applications for social impact.</p></div>
      </div>

      <h2>Data &amp; Ethics</h2>
      <p>All impact data was collected with informed participant consent and handled in accordance with UK GDPR. Data is anonymised in public reporting. Confidence scores are self-reported on a 1–10 scale at start and end of session.</p>

      <div class="footer">
        <span>&copy; Gen3block &middot; AI Launchpad Programme &middot; <a href="https://www.gen3block.com" target="_blank" rel="noreferrer">gen3block.com</a></span>
        <span>In partnership with UiD CIC &amp; United African Association</span>
      </div>
    `,
  },
];

// ─── HTML page template ───────────────────────────────────────────────────────
function buildPage({ title, description, ogImage, path: routePath, body }) {
  const canonicalUrl = `https://www.gen3block.com/case_study/${routePath}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/gen3block_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Gen3block" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Gen3block Case Studies" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />

    <!-- Canonical -->
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Static content styles (only used before React hydrates) -->
    ${CSS}

    <!-- Built CSS + JS from Vite (React takes over once JS executes) -->
    ${assetTags}
  </head>
  <body>
    <!--
      Static HTML below is visible immediately to crawlers, endorsement systems,
      social media scrapers, and any visitor before JavaScript executes.
      React replaces #root content once the JS bundle loads.
    -->
    <div id="root"><div id="sc">${body}</div></div>
  </body>
</html>`;
}

// ─── Write prerendered files ──────────────────────────────────────────────────
// Also copy dist/index.html → dist/case_study/index.html so the server never
// hits the SPA fallback for the home route (/case_study/). Without this, the
// server falls back to dist/index.html for that path, briefly flashing the
// 5-card static content while the JS bundle loads.
const homeDir = join(dist, 'case_study');
mkdirSync(homeDir, { recursive: true });
writeFileSync(join(homeDir, 'index.html'), template, 'utf-8');
console.log(`  ✓  /case_study  (home)`);

let count = 0;
for (const route of routes) {
  const dir = join(dist, 'case_study', route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), buildPage(route), 'utf-8');
  console.log(`  ✓  /case_study/${route.path}`);
  count++;
}

console.log(`\nPrerender complete: ${count} routes written to dist/case_study/\n`);
