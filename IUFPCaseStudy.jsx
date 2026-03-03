import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, GaugeCircle, Sparkles, CheckCircle2, ArrowLeft, ExternalLink, Play } from "lucide-react";

// Replace logo src values with actual paths: /IUFP_LOGO.jpg and /ATHE_LOGO.png

export default function IUFPCaseStudy() {
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
          <BlackSquare title="Industry" kicker="Context" icon={<Globe2 className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">Education Technology</p>} />

          <BlackSquare title="Timeline" kicker="Duration" icon={<GaugeCircle className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">4 months</p>} />

          <BlackSquare title="Services" kicker="Scope" icon={<Sparkles className="h-5 w-5" />}
            body={<ul className="space-y-1 text-sm/6 text-gray-900 font-medium list-disc pl-4">
              <li>Multi‑Tenant VLE Platform</li>
              <li>Partner Onboarding Automation</li>
              <li>RBAC & Audit Compliance</li>
            </ul>} />
        </div>

        <Section id="about" title="About IUFP">
          <p className="text-gray-800 font-medium leading-relaxed">
            The IUFP is a pre-degree, full-time university foundation course offering a fast-track alternative route
            to first-year degree entry after 9–12 months of intensive study — as a focused alternative to the traditional
            A-Levels route.
          </p>
        </Section>

        <Section id="situation" title="The Situation">
          <p className="text-gray-800 font-medium leading-relaxed">
            Before the transformation, IUFP managed student applications, partner school coordination, and admissions
            manually through paper-based forms, spreadsheets, and email exchanges. This created delays in processing,
            inconsistencies in data tracking, and limited the ability to scale internationally. As IUFP expanded its
            academic partnerships across multiple countries, the existing workflow could no longer sustain the growing
            student volume or meet evolving compliance standards.
          </p>
        </Section>

        <Section id="challenge" title="The Challenge">
          <p className="text-gray-800 font-medium leading-relaxed">
            Off-the-shelf LMS or VLE solutions couldn't meet IUFP's complex requirements for a multi-tenant architecture,
            partner school onboarding, and compliance with international education standards. The platform needed to serve
            schools and students across diverse geographies while maintaining secure data isolation and localised
            customisation. Coordinating admissions, payments, and academic progress tracking across different partner
            institutions added further technical and operational complexity.
          </p>
        </Section>

        <Section id="solution" title="The Solution">
          <div className="grid gap-6 md:grid-cols-2">
            <BlackSquare subtle title="Multi‑Tenant VLE Platform" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>Categorised resource library with per‑school download tracking</li>
                <li>Partner‑specific portals with isolated VLE credentials</li>
                <li>30+ frontend pages serving students, partners, and admins</li>
              </ul>
            } />

            <BlackSquare subtle title="Structured Application Pipeline" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>Multi‑step status tracking: pending → under review → accepted/rejected</li>
                <li>Document upload to S3 with file‑type and 5 MB size validation</li>
                <li>Admin review dashboard with filtering and bulk actions</li>
              </ul>
            } />

            <BlackSquare subtle title="Automated Partner Onboarding" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>Self‑serve partner application with document submission</li>
                <li>Admin approve/reject workflow with one‑click action</li>
                <li>Auto‑provisioned VLE credentials and partner school record on approval</li>
              </ul>
            } />

            <BlackSquare subtle title="Security & Compliance" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>JWT authentication with bcrypt password hashing</li>
                <li>6 role tiers with RBAC (Student → Super Admin)</li>
                <li>Full audit logging, session management, and GDPR cookie consent</li>
              </ul>
            } />
          </div>
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
          src="/IUFP_LOGO.jpg"
          alt="IUFP"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.08)]"
        />
        <span className="hidden sm:inline-block h-6 w-px bg-gray-300" />
        <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">iufp.org.uk</span>
      </div>
      <div className="rounded-md bg-gray-100 p-1.5 sm:p-2 border border-gray-200">
        <img
          src="/ATHE_LOGO.png"
          alt="ATHE Endorsed Programme"
          className="h-5 sm:h-6 md:h-7 w-auto object-contain"
        />
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
    { id: 'about', label: 'About' },
    { id: 'situation', label: 'Situation' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
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
            <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Case Study</span>
          </div>
          <h1 className="mt-3 sm:mt-4 text-xl/tight font-bold sm:text-2xl/tight md:text-3xl lg:text-4xl xl:text-5xl text-gray-950">
            IUFP: Digital Transformation for International Education
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 max-w-xl font-medium leading-relaxed">
            A modern multi‑tenant VLE unifying global operations with AI‑powered assistance, analytics, and automated workflows.
          </p>
          {/* Quick Links */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://iufp.org.uk"
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
          <Stat title="Industry" value="EdTech" />
          <Stat title="Timeline" value="4 months" />
          <Stat title="Scope" value="VLE • RBAC • DX" />
          <Stat title="Scale" value="10+ partners" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  const sectionColors = {
    about: "bg-gradient-to-br from-blue-50 via-white to-indigo-50/60",
    situation: "bg-gradient-to-br from-purple-50 via-white to-pink-50/60",
    challenge: "bg-gradient-to-br from-amber-50 via-white to-orange-50/60",
    solution: "bg-gradient-to-br from-indigo-50 via-white to-blue-50/60",
    impact: "bg-gradient-to-br from-emerald-50 via-white to-teal-50/60"
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
            Measurable impact across operations, scalability, and efficiency
          </p>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "10+ partner schools supported with isolated multi‑tenant ops",
              "6 RBAC roles enforcing least‑privilege access across the platform",
              "Automated partner onboarding: apply → approve → VLE credentials provisioned",
              "Structured application pipeline with real‑time status tracking",
              "S3 + CloudFront CDN for secure document storage and delivery",
              "Full audit trail with session management and force‑logout capability",
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
      <p className="text-gray-800 text-base">
        "The IUFP VLE has completely transformed how we manage our global academic network. We now have full visibility
        of student applications, admissions, and partner operations—all within a single, intelligent system."
      </p>
      <div className="mt-3 text-sm text-gray-600">— IUFP CEO Bola Makinde</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 space-y-4">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-100 via-blue-50/60 to-indigo-50/60 p-5 text-xs text-gray-600 sm:flex-row shadow-sm">
        <div>© {new Date().getFullYear()} IUFP · International University Foundation Programme</div>
        <a href="https://iufp.org.uk" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">
          iufp.org.uk
        </a>
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
