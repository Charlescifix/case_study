import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, School, Bot, ExternalLink, Calendar } from "lucide-react";
import { InlineWidget } from "react-calendly";

export default function CaseStudiesHome() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-gray-900 scroll-smooth">
      <JellyBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-indigo-600/70">Case Studies</p>
            <h1 className="mt-1 text-3xl font-bold sm:text-4xl md:text-5xl text-gray-950">Selected Work</h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-700 font-medium">
              Deep dives into real implementations across education and fintech—built with scalable AI, strong security, and clean UX.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-100 transition-colors font-medium"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <main className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
          <StudyCard
            href="/iufp"
            logoSrc="/IUFP_LOGO.jpg"
            title="IUFP: Digital Transformation for International Education"
            subtitle="Multi‑tenant VLE · RAG · Automation"
            bullets={[
              "5× faster application processing",
              "10+ countries served",
              "Real‑time progress & admissions tracking",
            ]}
            tagIcon={<School className="h-4 w-4" />}
            tagText="EdTech"
            footerHref="https://iufp-web.up.railway.app"
            footerText="iufp-web.up.railway.app"
          />

          <StudyCard
            href="/teep"
            logoSrc="/TEEP_LOGO.jpg"
            title="TEEP: Enterprise RAG System for Fintech"
            subtitle="Sub‑300 ms retrieval · 99.9% uptime"
            bullets={[
              "RAG on FastAPI + Postgres float[]",
              "Seamless payment‑surface integration",
              "Guardrails for payments domains",
            ]}
            tagIcon={<Bot className="h-4 w-4" />}
            tagText="FinTech"
            footerHref="https://teep.africa"
            footerText="teep.africa"
          />
        </main>

        <section id="contact" className="mt-16 sm:mt-20 scroll-mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-lg">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-100" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(80px_80px_at_50%_0%,rgba(99,102,241,0.04),transparent)]" />

            <div className="relative text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs text-indigo-700 font-medium mb-4">
                <Calendar className="h-4 w-4" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">Schedule a Discovery Call</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-700 font-medium max-w-2xl mx-auto">
                Discuss your project needs and explore how we can work together to build scalable solutions.
              </p>
            </div>

            <div className="relative">
              <InlineWidget
                url={import.meta.env.VITE_CALENDLY_URL}
                styles={{
                  height: '700px',
                  minWidth: '100%'
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StudyCard({
  href,
  logoSrc,
  title,
  subtitle,
  bullets,
  tagIcon,
  tagText,
  footerHref,
  footerText
}) {
  return (
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-100" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(60px_60px_at_20px_20px,rgba(99,102,241,0.03),transparent),radial-gradient(60px_60px_at_calc(100%-20px)_calc(100%-20px),rgba(99,102,241,0.03),transparent)]" />

      <div className="relative flex items-start justify-between gap-4">
        <img
          src={logoSrc}
          alt="logo"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.08)]"
        />
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] text-indigo-700 font-medium">
          {tagIcon}
          <span>{tagText}</span>
        </div>
      </div>

      <h2 className="relative mt-4 text-lg sm:text-xl font-bold leading-snug text-gray-950">
        {title}
      </h2>
      <p className="relative mt-1 text-sm text-gray-700 font-medium">{subtitle}</p>

      <ul className="relative mt-4 grid gap-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-gray-800 font-medium flex items-start gap-2">
            <span className="text-indigo-600 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="inline-flex items-center gap-2 text-sm text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
          View case
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
        <a
          href={footerHref}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
        >
          {footerText} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </Link>
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
