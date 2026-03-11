import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, GaugeCircle, ShieldCheck, ClipboardList, CheckCircle2, Quote, Layers, BarChart3, Sparkles, ArrowLeft, ExternalLink, Play } from "lucide-react";

// Unity in Diversity (UiD) – Digital Assistance Platform
// NOTE: Replace the logo src with your actual path (e.g., /UID_LOGO.png). Website is optional.

export default function UIDCaseStudy() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-gray-900 scroll-smooth">
      <JellyBackdrop />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>
        <Header />

        <Navigation />
        <Hero />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-100/80 via-indigo-50 to-purple-50/60 rounded-xl p-1">
            <BlackSquare title="Industry" kicker="Context" icon={<HeartHandshake className="h-5 w-5" />}
              body={<p className="text-sm/6 text-gray-900 font-semibold">Social Support · Charity Tech</p>} />
          </div>

          <div className="bg-gradient-to-br from-emerald-100/80 via-teal-50 to-cyan-50/60 rounded-xl p-1">
            <BlackSquare title="Timeline" kicker="Duration" icon={<GaugeCircle className="h-5 w-5" />}
              body={<p className="text-sm/6 text-gray-900 font-semibold">6 - 8 weeks</p>} />
          </div>

          <div className="bg-gradient-to-br from-violet-100/80 via-purple-50 to-pink-50/60 rounded-xl p-1">
            <BlackSquare title="Services" kicker="Scope" icon={<Layers className="h-5 w-5" />}
              body={<ul className="space-y-1 text-sm/6 text-gray-900 font-medium list-disc pl-4">
                <li>Digital Assistance Platform (SPA)</li>
                <li>Risk‑Aware Triage Engine</li>
                <li>Admin Portal & Case Management</li>
                <li>Data Protection by Design</li>
              </ul>} />
          </div>
        </div>

        <Section id="background" title="Background">
          <p className="text-gray-800 font-medium leading-relaxed">
            Unity in Diversity (UiD) supports men facing challenges across employment, housing, mental health, substance misuse and loneliness. With high-risk topics such as self-harm, domestic abuse and addiction in the mix, UiD's previous approach—a single contact form feeding unstructured email—made manual triage difficult and responses frequently delayed. There was no way to identify urgent cases, track outcomes, or produce reliable data for trustees and funders.
          </p>
        </Section>

        <Section id="objectives" title="Objectives">
          <div className="grid gap-4 md:grid-cols-2">
            <BlackSquare subtle title="Structured Intake" body={<p className="text-gray-800 text-sm/6 font-medium">Replace unstructured email with a multi-step form that collects personal details, circumstances, support needs, risk indicators and consent up-front.</p>} />
            <BlackSquare subtle title="Risk‑Aware Triage" body={<p className="text-gray-800 text-sm/6 font-medium">Automatically score submissions based on risk factors—self-harm, domestic abuse, substance misuse, financial distress—so urgent cases are never missed.</p>} />
            <BlackSquare subtle title="Case Management Dashboard" body={<p className="text-gray-800 text-sm/6 font-medium">Give administrators a secure portal to filter, prioritise, annotate and resolve cases with a full notes timeline.</p>} />
            <BlackSquare subtle title="Partner Engagement & GDPR Foundation" body={<p className="text-gray-800 text-sm/6 font-medium">Enable external organisations to register as partners and build a compliant, auditable data architecture for future growth and funding reporting.</p>} />
          </div>
        </Section>

        <Section id="solution" title="Solution Overview">
          <div className="grid gap-6 md:grid-cols-2">
            <BlackSquare subtle title="Public Intake Form (5‑Step)" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Mobile-first, multi-step form with real-time validation and accessible design.</li>
              <li>Trauma-informed language guides users through sensitive questions; explicit consent captured before submission.</li>
            </ul>} />

            <BlackSquare subtle title="Risk‑Aware Triage Engine" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Server-side weighted scoring across risk factors: self-harm, domestic abuse, substance misuse, financial distress.</li>
              <li>Categorises each submission (high / medium / low) to direct administrator attention to the most urgent cases.</li>
            </ul>} />

            <BlackSquare subtle title="Case Management Dashboard" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Filterable queue by triage level, status and date; detailed submission view with notes and status updates.</li>
              <li>CSRF-protected, session-authenticated admin portal with audit trail.</li>
            </ul>} />

            <BlackSquare subtle title="Partner Registration & Blog CMS" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Dedicated form for external organisations to submit partnership requests with contact and type details.</li>
              <li>Lightweight CMS for Markdown blog posts; admin studio to create, edit and publish; DOMPurify sanitisation and tag filtering on the public side.</li>
            </ul>} />
          </div>
        </Section>

        <Section id="architecture" title="System Architecture">
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-6 font-semibold text-gray-700 whitespace-nowrap">Component</th>
                  <th className="py-2 font-semibold text-gray-700">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Backend", "Node.js (Express 4.x) — server-rendered HTML shells + REST API"],
                  ["Database", "PostgreSQL — submissions, partner registrations, blog, cookie consent, audit"],
                  ["Frontend", "React 18 (CDN) + Tailwind CSS (CDN) — mobile-first, dynamic interactions"],
                  ["Security", "Helmet.js, CSRF tokens (csurf), rate limiting, Joi validation, signed httpOnly cookies"],
                  ["Deployment", "Single Railway service — auto-build, restart-on-failure, max 20 DB connections"],
                ].map(([comp, detail]) => (
                  <tr key={comp} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-6 font-semibold text-gray-900 whitespace-nowrap align-top">{comp}</td>
                    <td className="py-3 text-gray-700 font-medium leading-relaxed">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="intake" title="Intake Journey Design">
          <div className="grid gap-4 md:grid-cols-2">
            <BlackSquare subtle title="Step 1 – About You" body={<p className="text-gray-800 text-sm/6 font-medium">Core details plus optional demographics with clear data‑use explanations.</p>} />
            <BlackSquare subtle title="Step 2 – Your Situation" body={<p className="text-gray-800 text-sm/6 font-medium">Employment, housing, relationships, dependants, GP and local connection.</p>} />
            <BlackSquare subtle title="Step 3 – Your Concerns" body={<p className="text-gray-800 text-sm/6 font-medium">Ten concern areas with severity; risk flags for self‑harm, domestic abuse, homelessness and safeguarding.</p>} />
            <BlackSquare subtle title="Step 4 – Support Preferences" body={<p className="text-gray-800 text-sm/6 font-medium">Preferred contact method/time, access needs, and free‑text narrative.</p>} />
            <BlackSquare subtle title="Step 5 – Consent & Data Use" body={<p className="text-gray-800 text-sm/6 font-medium">Transparent storage, access and retention; explicit contact consent; optional anonymised reporting consent.</p>} />
          </div>
        </Section>

        <Section id="governance" title="Data Protection & Compliance">
          <BlackSquare body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
            <li><strong>Helmet.js</strong> enforces strict HTTP security headers on every response.</li>
            <li><strong>CSRF tokens</strong> (csurf) protect all form submissions; signed httpOnly cookies handle session authentication.</li>
            <li><strong>Rate limiting</strong> and <strong>Joi schema validation</strong> guard all API endpoints; sensitive triage logic runs server-side only.</li>
            <li>Cookie consent is explicitly captured and logged in a dedicated <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">cookie_consent</code> table.</li>
            <li>Data minimisation, defined retention periods, and SAR & deletion processes are built in from day one.</li>
          </ul>} />
        </Section>

        <Section id="outcomes" title="Outcomes">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BlackSquare subtle title="Structured Intake" body={<p className="text-gray-800 text-sm/6 font-medium">Unstructured email referrals replaced by a comprehensive, consistent data capture that gives staff everything they need before first contact.</p>} />
            <BlackSquare subtle title="Risk‑Aware Triage" body={<p className="text-gray-800 text-sm/6 font-medium">High-risk submissions—self-harm, domestic abuse, substance misuse—are surfaced immediately with clear priority scores and response targets.</p>} />
            <BlackSquare subtle title="Centralised Case Management" body={<p className="text-gray-800 text-sm/6 font-medium">The team has a live view of all submissions, eliminating manual tracking and giving clear ownership through notes and status updates.</p>} />
            <BlackSquare subtle title="Partner Engagement" body={<p className="text-gray-800 text-sm/6 font-medium">External organisations can register as partners through a dedicated form, streamlining collaboration and extending UiD's network.</p>} />
            <BlackSquare subtle title="GDPR Compliance by Design" body={<p className="text-gray-800 text-sm/6 font-medium">Secure session handling, Joi input validation, CSRF protection, and consent logging are built into the architecture—not bolted on.</p>} />
          </div>
        </Section>

        <Section id="blueprint" title="Re‑usable Blueprint">
          <BlackSquare body={<p className="text-gray-800 text-sm/6 font-medium">Pattern can be adapted for women's services, youth/student support, local authority advice teams, and community organisations needing structured intake and triage.</p>} />
        </Section>

        <Section id="next" title="Suggested Enhancements">
          <BlackSquare body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
            <li><strong>Multi-admin & RBAC:</strong> Support multiple case managers with distinct permission levels.</li>
            <li><strong>Email / SMS notifications:</strong> Automatically alert administrators when high-risk submissions arrive.</li>
            <li><strong>Analytics & reporting:</strong> Dashboards covering submission volumes, triage outcomes and response times to inform funding and policy decisions.</li>
            <li><strong>Architecture diagram:</strong> Visual representation of browser → backend → database flow for onboarding and documentation.</li>
          </ul>} />
        </Section>

        <ResultsSection />

        <Section id="impact" title="Client Impact">
          <Testimonial />
        </Section>

        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-gray-50 via-blue-50/60 to-indigo-50/70 rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img
          src="/UID_LOGO.png" // replace with actual path
          alt="Unity in Diversity"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.08)]"
        />
        <span className="hidden sm:inline-block h-6 w-px bg-gray-300" />
        <a href="https://www.theuid.uk" target="_blank" rel="noreferrer" className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors">Unity in Diversity</a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-600">
        <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="hidden xs:inline">Data</span>
        <span className="hidden sm:inline">Protection</span>
        <span className="h-3 w-px bg-gray-300" />
        <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="hidden sm:inline">Analytics</span>
      </div>
    </div>
  );
}

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'background', label: 'Background' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'solution', label: 'Solution' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'intake', label: 'Intake' },
    { id: 'results', label: 'Results' },
    { id: 'impact', label: 'Impact' },
  ];

  return (
    <nav className="mt-6 sticky top-0 z-20 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm">
      <div
        className="flex items-center justify-center gap-2 p-2 sm:p-3 overflow-x-auto custom-scrollbar"
        style={{ overscrollBehavior: 'contain', touchAction: 'pan-x pinch-zoom' }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors whitespace-nowrap touch-target"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative mt-4 sm:mt-6 md:mt-10 overflow-hidden rounded-2xl border border-indigo-300 bg-gradient-to-br from-indigo-50 via-white to-blue-50/70 p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-indigo-200" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 md:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] text-indigo-700">
            <ClipboardList className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Case Study</span>
          </div>
          <h1 className="mt-3 sm:mt-4 text-xl/tight font-bold sm:text-2xl/tight md:text-3xl lg:text-4xl xl:text-5xl text-gray-950">
            Unity in Diversity (UiD): Digital Assistance Platform
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 max-w-xl font-medium leading-relaxed">
            Turning a static site into a risk‑aware, auditable case management platform with accessible intake, intelligent triage and a secure data backbone.
          </p>
          {/* Quick Links */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://www.theuid.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium shadow-sm"
            >
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Visit Website</span>
            </a>
            {/* YouTube Demo Link - Add URL when available */}
            {false && (
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-red-700 hover:bg-red-100 hover:text-red-800 transition-colors font-medium shadow-sm"
              >
                <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Watch Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full md:w-auto md:min-w-[220px] lg:min-w-[240px]">
          <Stat title="Industry" value="Social Support" />
          <Stat title="Status" value="Completed" />
          <Stat title="Scope" value="Platform • Triage" />
          <Stat title="Focus" value="GDPR Compliant" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  // Color scheme rotation for sections
  const sectionColors = {
    background: "bg-gradient-to-br from-blue-50 via-white to-indigo-50/60",
    objectives: "bg-gradient-to-br from-purple-50 via-white to-pink-50/60",
    solution: "bg-gradient-to-br from-indigo-50 via-white to-blue-50/60",
    architecture: "bg-gradient-to-br from-slate-50 via-white to-gray-50/60",
    intake: "bg-gradient-to-br from-emerald-50 via-white to-teal-50/60",
    governance: "bg-gradient-to-br from-amber-50 via-white to-orange-50/60",
    outcomes: "bg-gradient-to-br from-rose-50 via-white to-pink-50/60",
    blueprint: "bg-gradient-to-br from-violet-50 via-white to-purple-50/60",
    next: "bg-gradient-to-br from-cyan-50 via-white to-sky-50/60",
    impact: "bg-gradient-to-br from-indigo-50 via-white to-blue-50/60"
  };

  const bgColor = sectionColors[id] || "bg-white";

  return (
    <section id={id} className={`mt-6 sm:mt-8 md:mt-12 scroll-mt-24 rounded-2xl p-4 sm:p-6 md:p-8 ${bgColor} border border-gray-200 shadow-sm`}>
      <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-950">{title}</h2>
      <BlackSquare>{children}</BlackSquare>
    </section>
  );
}

function BlackSquare({
  title,
  kicker,
  icon,
  body,
  subtle,
  children,
}) {
  return (
    <div className={[
      "group relative rounded-xl border p-4 sm:p-5 md:p-6",
      subtle ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200",
      "shadow-md",
      "hover:shadow-lg",
      "transition-shadow",
    ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl [background:radial-gradient(60px_60px_at_20px_20px,rgba(99,102,241,0.03),transparent),radial-gradient(60px_60px_at_calc(100%-20px)_calc(100%-20px),rgba(99,102,241,0.03),transparent)]" />

      <div className="relative">
        {(kicker || icon) && (
          <div className="mb-2 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
            {icon}
            {kicker && <span>{kicker}</span>}
          </div>
        )}
        {title && <h3 className="text-base sm:text-lg font-bold text-gray-950">{title}</h3>}

        <div className="mt-2">{body || children}</div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-100/70 to-blue-100/60 p-2 sm:p-2.5 md:p-3 text-left">
      <div className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wide text-indigo-600/70">{title}</div>
      <div className="text-xs sm:text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="mt-8 sm:mt-12 md:mt-16 scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-indigo-100" />
        <div className="relative">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-indigo-700">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Key Outcomes</span>
          </div>
          <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
            The Results
          </h2>
          <p className="mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl font-medium leading-relaxed">
            Measurable impact across operations, safeguarding, and data governance
          </p>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Structured multi-step intake replacing untracked email referrals",
              "Server-side risk scoring for self-harm, domestic abuse & substance misuse",
              "Centralised case dashboard with live queue, notes and status tracking",
              "Partner organisation registration built into the platform",
              "GDPR-compliant: Helmet.js, CSRF, rate limiting, Joi, consent logging",
              "Deployed on Railway with PostgreSQL — production-ready from day one",
            ].map((t, i) => (
              <ResultBadge key={i} text={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultBadge({ text }) {
  return (
    <div className="group relative flex items-start gap-2 sm:gap-3 rounded-xl border border-indigo-200 bg-white p-3 sm:p-4 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
      <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 ring-1 ring-indigo-200 group-hover:bg-indigo-200 transition-colors">
        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600" />
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{text}</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-indigo-300 bg-gradient-to-br from-indigo-50 via-blue-50/60 to-white p-6 shadow-md">
      <Quote className="h-8 w-8 text-indigo-300 mb-3" />
      <p className="text-gray-800 text-base font-medium leading-relaxed">
        "The platform turns website visits into structured, trackable support journeys—and gives us the data to keep improving our service."
      </p>
      <div className="mt-4 text-sm text-gray-600 font-medium">— Allan Johnson-Mwangi, UID Director</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 space-y-4">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-100 via-blue-50/60 to-indigo-50/60 p-5 text-xs text-gray-600 sm:flex-row shadow-sm">
        <div>© {new Date().getFullYear()} Unity in Diversity · Digital Assistance Platform</div>
        <div className="flex items-center gap-3">
          <a href="https://www.theuid.uk" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">theuid.uk</a>
          <span className="h-3 w-px bg-gray-300" />
          <a href="#results" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">See Results</a>
          <span className="h-3 w-px bg-gray-300" />
          <a href="#solution" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">Architecture</a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-4">
        <a
          href="https://www.gen3block.com"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-xs text-amber-700/70 hover:text-amber-800 transition-all duration-500"
        >
          <span className="font-medium">Powered by</span>
          <span className="font-bold bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-500">
            Gen3block AI
          </span>
          <Sparkles className="h-4 w-4 text-amber-400 group-hover:text-yellow-300 transition-all duration-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
        </a>
      </div>
    </div>
  );
}

function JellyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.30), rgba(99,102,241,0.14) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        initial={{ scale: 1.05, opacity: 0.5 }}
        animate={{ scale: 0.95, opacity: 0.8 }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -bottom-32 -right-28 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.30), rgba(59,130,246,0.14) 40%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:14px_14px]" />
    </div>
  );
}
