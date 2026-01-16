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
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 rounded-xl p-1">
            <BlackSquare title="Industry" kicker="Context" icon={<HeartHandshake className="h-5 w-5" />}
              body={<p className="text-sm/6 text-gray-900 font-semibold">Social Support · Charity Tech</p>} />
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50/30 rounded-xl p-1">
            <BlackSquare title="Timeline" kicker="Status" icon={<GaugeCircle className="h-5 w-5" />}
              body={<p className="text-sm/6 text-gray-900 font-semibold">Ongoing (Updated Nov 2025)</p>} />
          </div>

          <div className="bg-gradient-to-br from-violet-50 via-purple-50/50 to-pink-50/30 rounded-xl p-1">
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
            Unity in Diversity (UiD) supports men facing challenges across employment, housing, addiction, emotional wellbeing, relationships and loneliness. Previously, a single contact form fed a shared inbox with no way to see all referrals, prioritise urgent cases, track outcomes, or produce reliable data for trustees and funders.
          </p>
        </Section>

        <Section id="objectives" title="Objectives">
          <div className="grid gap-4 md:grid-cols-2">
            <BlackSquare subtle title="From Static Site → Assistance Platform" body={<p className="text-gray-800 text-sm/6 font-medium">Transform the public website into a structured, supportive intake experience.</p>} />
            <BlackSquare subtle title="Risk‑Aware Triage" body={<p className="text-gray-800 text-sm/6 font-medium">Introduce scoring and priority levels so urgent cases are never missed.</p>} />
            <BlackSquare subtle title="Operational Cockpit" body={<p className="text-gray-800 text-sm/6 font-medium">Provide an admin portal for case management and assignment.</p>} />
            <BlackSquare subtle title="Secure Data Foundation" body={<p className="text-gray-800 text-sm/6 font-medium">Build compliant, auditable data flows for future analytics and growth.</p>} />
          </div>
        </Section>

        <Section id="solution" title="Solution Overview">
          <div className="grid gap-6 md:grid-cols-2">
            <BlackSquare subtle title="User Intake (5‑Step Flow)" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Safe, mobile‑first multi‑page form with real‑time validation & accessibility.</li>
              <li>Trauma‑informed language and reassuring micro‑copy.</li>
            </ul>} />

            <BlackSquare subtle title="Triage Engine" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Weighted scoring from concerns, risk flags, and situational factors.</li>
              <li>Priority levels: Immediate, High, Medium, Low with response targets.</li>
            </ul>} />

            <BlackSquare subtle title="Secure Backend & Data Store" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Node.js/Express API, structured validation & logging.</li>
              <li>PostgreSQL with ORM; tables for submissions, users, cases, notes, orgs, audit.</li>
            </ul>} />

            <BlackSquare subtle title="Admin Portal" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Live queue sorted by priority and submission time; rich filtering.</li>
              <li>Case workspace with notes timeline, status, and assignments.</li>
              <li>RBAC permissions; audit logging; retention settings.</li>
            </ul>} />
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
            <li>HTTPS end‑to‑end; separated environments; least‑privilege access.</li>
            <li>Data minimisation; defined retention; SAR & deletion processes.</li>
            <li>Regular review of access rights and audit logs.</li>
          </ul>} />
        </Section>

        <Section id="outcomes" title="Outcomes & Benefits">
          <div className="grid gap-4 md:grid-cols-3">
            <BlackSquare subtle title="For Men" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Clear, kinder intake that sets expectations.</li>
              <li>Confidential handling of information.</li>
              <li>Faster responses for highest‑risk cases.</li>
            </ul>} />
            <BlackSquare subtle title="For Staff" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>Single prioritised queue; less inbox hunting.</li>
              <li>Clear ownership; timeline of actions and outcomes.</li>
              <li>Safeguarding guardrails embedded in workflow.</li>
            </ul>} />
            <BlackSquare subtle title="For Leadership" body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
              <li>On‑demand insight into demand patterns and risk levels.</li>
              <li>Visibility of outcomes and progression.</li>
              <li>Scalable foundation for partnerships and future services.</li>
            </ul>} />
          </div>
        </Section>

        <Section id="blueprint" title="Re‑usable Blueprint">
          <BlackSquare body={<p className="text-gray-800 text-sm/6 font-medium">Pattern can be adapted for women's services, youth/student support, local authority advice teams, and community organisations needing structured intake and triage.</p>} />
        </Section>

        <Section id="next" title="Next Evolution">
          <BlackSquare body={<ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
            <li>Deeper outcome measurement over time.</li>
            <li>Partner integrations for warm referrals.</li>
            <li>Self‑service digital resources alongside human support.</li>
            <li>Additional languages and accessibility improvements.</li>
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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-gray-50/50 via-blue-50/30 to-indigo-50/40 rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm">
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
    { id: 'intake', label: 'Intake Journey' },
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
    <div className="relative mt-4 sm:mt-6 md:mt-10 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/40 p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-indigo-100/50" />

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
          <Stat title="Status" value="Ongoing" />
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
    background: "bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30",
    objectives: "bg-gradient-to-br from-purple-50/40 via-white to-pink-50/30",
    solution: "bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30",
    intake: "bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30",
    governance: "bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30",
    outcomes: "bg-gradient-to-br from-rose-50/40 via-white to-pink-50/30",
    blueprint: "bg-gradient-to-br from-violet-50/40 via-white to-purple-50/30",
    next: "bg-gradient-to-br from-cyan-50/40 via-white to-sky-50/30",
    impact: "bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30"
  };

  const bgColor = sectionColors[id] || "bg-white";

  return (
    <section id={id} className={`mt-6 sm:mt-8 md:mt-12 scroll-mt-24 rounded-2xl p-4 sm:p-6 md:p-8 ${bgColor} border border-gray-100 shadow-sm`}>
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
    <div className="rounded-lg border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 p-2 sm:p-2.5 md:p-3 text-left">
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
              "Structured intake replacing untracked inbox referrals",
              "Risk‑scored triage with clear response targets",
              "Single operational view of live cases",
              "Auditable governance with RBAC and retention policies",
              "Foundational data model for reporting and funding",
              "Blueprint that can be replicated across services",
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
    <div className="relative overflow-hidden rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-white p-6 shadow-md">
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
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-100 via-blue-50/30 to-indigo-50/30 p-5 text-xs text-gray-600 sm:flex-row shadow-sm">
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
          className="group flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-all duration-500"
        >
          <span className="font-normal">Powered by</span>
          <span className="font-semibold text-gray-600 group-hover:text-indigo-600/80 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]">
            Gen3block AI
          </span>
          <Sparkles className="h-3.5 w-3.5 text-gray-400 group-hover:text-indigo-400 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]" />
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
            "radial-gradient(closest-side, rgba(99,102,241,0.22), rgba(99,102,241,0.10) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        initial={{ scale: 1.05, opacity: 0.5 }}
        animate={{ scale: 0.95, opacity: 0.8 }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -bottom-32 -right-28 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.22), rgba(59,130,246,0.10) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:14px_14px]" />
    </div>
  );
}
