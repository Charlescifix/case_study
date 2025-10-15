import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, GaugeCircle, Sparkles, CheckCircle2, Quote } from "lucide-react";

// Replace logo src values with actual paths: /IUFP_LOGO.jpg and /ATHE_LOGO.png

export default function IUFPCaseStudy() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-gray-900 scroll-smooth">
      <JellyBackdrop />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Header />

        <Hero />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlackSquare title="Industry" kicker="Context" icon={<Globe2 className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">Education Technology</p>} />

          <BlackSquare title="Timeline" kicker="Duration" icon={<GaugeCircle className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">4 months</p>} />

          <BlackSquare title="Services" kicker="Scope" icon={<Sparkles className="h-5 w-5" />}
            body={<ul className="space-y-1 text-sm/6 text-gray-900 font-medium list-disc pl-4">
              <li>Multi-Tenant VLE Platform</li>
              <li>RAG Implementation</li>
              <li>Digital Transformation</li>
            </ul>} />
        </div>

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
            schools and students across diverse geographies while maintaining secure data isolation and localized
            customization. Coordinating admissions, payments, and academic progress tracking across different partner
            institutions added further technical and operational complexity.
          </p>
        </Section>

        <Section id="solution" title="The Solution">
          <div className="grid gap-6 md:grid-cols-2">
            <BlackSquare subtle title="Unified Multi‑Tenant VLE" body={
              <p className="text-gray-800 text-sm/6 font-medium">
                Centralizes student applications, partner management, admissions, and content delivery in a single secure portal.
              </p>
            } />

            <BlackSquare subtle title="Integrated Intelligence" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>Retrieval‑Augmented Generation (RAG) for student assistance</li>
                <li>AI dashboards for analytics and performance tracking</li>
                <li>Automated workflows for admissions, payments, verification</li>
                <li>Partner‑specific portals with secure data segregation</li>
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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src="/IUFP_LOGO.jpg"
          alt="IUFP"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.08)]"
        />
        <span className="hidden sm:inline-block h-6 w-px bg-gray-300" />
        <span className="text-xs text-gray-600 whitespace-nowrap">iufp-web.up.railway.app</span>
      </div>
      <div className="rounded-md bg-gray-100 p-2 border border-gray-200">
        <img
          src="/ATHE_LOGO.png"
          alt="ATHE Endorsed Programme"
          className="h-6 sm:h-7 w-auto object-contain"
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative mt-6 sm:mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-10 shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-100" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] text-indigo-700">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Case Study</span>
          </div>
          <h1 className="mt-4 text-2xl/tight font-bold sm:text-3xl md:text-4xl lg:text-5xl text-gray-950">
            IUFP: Digital Transformation for International Education
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-xl font-medium">
            A modern multi‑tenant VLE unifying global operations with AI‑powered assistance, analytics, and automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[240px]">
          <Stat title="Industry" value="EdTech" />
          <Stat title="Timeline" value="4 months" />
          <Stat title="Scope" value="VLE • RAG • DX" />
          <Stat title="Global" value="10+ countries" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-8 sm:mt-12">
      <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-950">{title}</h2>
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
      "group relative rounded-xl border p-6",
      subtle ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200",
      "shadow-md",
      "hover:shadow-lg",
      "transition-shadow",
    ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl [background:radial-gradient(60px_60px_at_20px_20px,rgba(99,102,241,0.03),transparent),radial-gradient(60px_60px_at_calc(100%-20px)_calc(100%-20px),rgba(99,102,241,0.03),transparent)]" />

      <div className="relative">
        {(kicker || icon) && (
          <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-500">
            {icon}
            {kicker && <span>{kicker}</span>}
          </div>
        )}
        {title && <h3 className="text-lg font-bold text-gray-950">{title}</h3>}

        <div className="mt-2">{body || children}</div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-lg border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 p-3 text-left">
      <div className="text-[11px] uppercase tracking-wide text-indigo-600/70">{title}</div>
      <div className="text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="mt-12 sm:mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-8 md:p-10 shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-indigo-100" />
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-4 py-1.5 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Key Outcomes</span>
          </div>
          <h2 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
            The Results
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 max-w-2xl font-medium">
            Measurable impact across operations, scalability, and efficiency
          </p>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "5× faster application processing",
              "10+ countries in partner network",
              "Multi‑tenant architecture for independent ops",
              "Manual → automated digital workflows",
              "Real‑time progress & admissions tracking",
              "Fewer admin hours & data errors",
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
    <div className="group relative flex items-start gap-3 rounded-xl border border-indigo-200 bg-white p-4 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 ring-1 ring-indigo-200 group-hover:bg-indigo-200 transition-colors">
        <CheckCircle2 className="h-4 w-4 text-indigo-600" />
      </div>
      <p className="text-sm font-medium text-gray-800 leading-relaxed">{text}</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6">
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
    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-100 p-5 text-xs text-gray-600 sm:flex-row">
      <div>© {new Date().getFullYear()} IUFP · International University Foundation Programme</div>
      <a href="https://iufp-web.up.railway.app" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">
        iufp-web.up.railway.app
      </a>
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
