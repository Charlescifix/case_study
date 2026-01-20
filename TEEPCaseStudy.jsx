import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Gauge, Rocket, CheckCircle2, Quote, Zap, GitBranch, ArrowLeft, ExternalLink, Play } from "lucide-react";

export default function TEEPCaseStudy() {
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

        <Hero />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlackSquare title="Industry" kicker="Context" icon={<Server className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">Financial Technology</p>} />

          <BlackSquare title="Timeline" kicker="Duration" icon={<Gauge className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">45 days</p>} />

          <BlackSquare title="Services" kicker="Scope" icon={<Rocket className="h-5 w-5" />}
            body={<ul className="space-y-1 text-sm/6 text-gray-900 font-medium list-disc pl-4">
              <li>RAG Implementation</li>
              <li>MLOps</li>
              <li>Production System Architecture</li>
            </ul>} />
        </div>

        <Section id="situation" title="The Situation">
          <p className="text-gray-800 font-medium leading-relaxed">
            TEEP is a digital payments hub that consolidates airtime/data top-ups, TV/cable, tuition, and ticketing into one app.
            Support teams needed instant, accurate answers to policy, process, and transaction‑safety questions across a growing
            knowledge base. Traditional keyword search returned noisy or stale results and couldn't keep answers constrained to
            compliance‑safe guidance.
          </p>
        </Section>

        <Section id="challenge" title="The Challenge">
          <p className="text-gray-800 font-medium leading-relaxed">
            The system had to deliver low‑latency, high‑precision retrieval with financial‑grade reliability and clean
            integration to existing payment flows. Requirements included sub‑300 ms retrieval, 99.9% uptime, strict topic
            guardrails (payments only), and seamless embedding into web/mobile surfaces—without adding new managed vector
            infrastructure.
          </p>
        </Section>

        <Section id="solution" title="The Solution">
          <div className="grid gap-6 md:grid-cols-2">
            <BlackSquare subtle title="Production RAG Stack" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>FastAPI + PostgreSQL (<code className="text-gray-700 bg-gray-100 px-1 rounded">float[]</code> embeddings)</li>
                <li>NumPy cosine similarity for in‑memory vector scoring</li>
                <li>OpenAI GPT‑4 for grounded answer synthesis</li>
                <li>AWS containerized deployment</li>
              </ul>
            } />

            <BlackSquare subtle title="Performance & Guardrails" body={
              <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                <li>Chunked docs + lean prompts for <span className="font-bold">&lt;300 ms</span> retrieval</li>
                <li>Environment‑scoped secrets; least‑privileged DB roles</li>
                <li>HTTPS‑only, health checks, structured logging</li>
                <li>CORS rules; routing + prompt guardrails to payments domains</li>
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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img
          src="/TEEP_LOGO.jpg"
          alt="TEEP"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.08)]"
        />
        <span className="hidden sm:inline-block h-6 w-px bg-gray-300" />
        <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">teep.africa</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-600">
        <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="hidden xs:inline">&lt;300 ms</span>
        <span className="hidden sm:inline">Retrieval</span>
        <span className="h-3 w-px bg-gray-300" />
        <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span>99.9%</span>
        <span className="hidden sm:inline">Uptime</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative mt-4 sm:mt-6 md:mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-100" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 md:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] text-indigo-700">
            <GitBranch className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Case Study</span>
          </div>
          <h1 className="mt-3 sm:mt-4 text-xl/tight font-bold sm:text-2xl/tight md:text-3xl lg:text-4xl xl:text-5xl text-gray-950">
            TEEP: Enterprise RAG System for Fintech
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 max-w-xl font-medium leading-relaxed">
            Low‑latency, compliant retrieval‑augmented assistance embedded directly into payment flows—built for reliability and speed.
          </p>
          {/* Quick Links */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://teep.africa"
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
          <Stat title="Industry" value="FinTech" />
          <Stat title="Uptime" value="99.9%" />
          <Stat title="Retrieval" value="&lt;300 ms" />
          <Stat title="Users" value="3,500+" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-6 sm:mt-8 md:mt-12">
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
      <div className="text-xs sm:text-sm font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="mt-8 sm:mt-12 md:mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-indigo-100" />
        <div className="relative">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-indigo-700">
            <Rocket className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Key Outcomes</span>
          </div>
          <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
            The Results
          </h2>
          <p className="mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl font-medium leading-relaxed">
            Measurable impact across performance, reliability, and cost-efficiency
          </p>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "99.9% uptime maintained in production",
              "Sub‑300 ms average retrieval time",
              "~2.5k–5k queries/day via API & web widget",
              "Seamless payment‑surface integration",
              "High accuracy with grounded answers @ top‑K=3",
              "Lower cost vs managed vector DB",
            ].map((t, i) => (
              <ResultBadge key={i} text={t} />
            ))}
          </div>
          <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs text-gray-600 italic">
            *Estimation based on 3,500+ users, 1,000–4,000 daily transactions and typical support/query ratios; replace with live telemetry when available.
          </p>
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
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6">
      <p className="text-gray-800 text-base">
        "Customers now get instant, accurate guidance inside the payment flow—fewer handoffs, faster resolutions, and greater trust in every transaction."
      </p>
      <div className="mt-3 text-sm text-gray-600">— Teep CEO Chika Ibegbu</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-100 p-5 text-xs text-gray-600 sm:flex-row">
      <div>© {new Date().getFullYear()} TEEP · Enterprise RAG for Fintech</div>
      <div className="flex items-center gap-3">
        <a href="https://teep.africa" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">
          teep.africa
        </a>
        <span className="h-3 w-px bg-gray-300" />
        <a href="#results" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">
          See Results
        </a>
        <span className="h-3 w-px bg-gray-300" />
        <a href="#solution" className="underline decoration-dotted underline-offset-4 hover:text-gray-900">
          Architecture
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
