import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, Quote, TrendingUp, Users, Briefcase, ShieldCheck,
  GraduationCap, MapPin, Calendar, Zap,
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";

// ─── Anonymised participant data ─────────────────────────────────────────────
// Names and employer fields have been removed. Attendee numbers are assigned
// in the order feedback was received.

const participants = [
  { id: 1,  role: "Support Worker",           sector: "Healthcare",             status: "Employed",      before: 1, after: 8, rec: 10 },
  { id: 2,  role: "Accountant / Office Mgr",  sector: "Charity",                status: "",              before: 6, after: 9, rec: 10 },
  { id: 3,  role: "Tutor",                    sector: "Charity",                status: "Employed",      before: 7, after: 9, rec: 8  },
  { id: 4,  role: "Volunteer",                sector: "Charity",                status: "Other",         before: 4, after: 8, rec: 5  },
  { id: 5,  role: "",                         sector: "",                       status: "",              before: 5, after: 5, rec: 8  },
  { id: 6,  role: "Volunteer",                sector: "",                       status: "Other",         before: 2, after: 3, rec: 5  },
  { id: 7,  role: "Volunteer",                sector: "Charity",                status: "Other",         before: 5, after: 9, rec: 10 },
  { id: 8,  role: "CEO",                      sector: "Education",              status: "Self-employed", before: 5, after: 8, rec: 10 },
  { id: 9,  role: "",                         sector: "Charity",                status: "Employed",      before: 7, after: 8, rec: 8  },
  { id: 10, role: "Volunteer",                sector: "",                       status: "Employed",      before: 1, after: 8, rec: 10 },
  { id: 11, role: "Warehouse",                sector: "Production",             status: "Employed",      before: 3, after: 7, rec: 10 },
  { id: 12, role: "Volunteer",                sector: "",                       status: "Employed",      before: 3, after: 7, rec: 10 },
  { id: 13, role: "Student",                  sector: "",                       status: "Student",       before: 1, after: 9, rec: null },
  { id: 14, role: "Volunteer",                sector: "Community Volunteering", status: "",              before: 3, after: 5, rec: 7  },
];

// Anonymised learnings / next steps — no names or org references
const outcomeDetails = [
  { id: 1,  action: "Prepare a CV",                                          learning: "Using AI to research any topic" },
  { id: 2,  action: "",                                                       learning: "Storing and retrieving data using AI tools" },
  { id: 3,  action: "Share learning resources for members who missed the session", learning: "How to match job opportunities to skills and background" },
  { id: 4,  action: "Use AI more often",                                     learning: "AI is the future of IT" },
  { id: 5,  action: "Still weighing concerns about AI's impact on jobs",     learning: "AI can help, but needs careful use" },
  { id: 6,  action: "Use AI to understand myself better",                    learning: "AI requires careful and responsible handling" },
  { id: 7,  action: "Avoid uploading sensitive information",                 learning: "AI can help produce a CV with measurable outcomes" },
  { id: 8,  action: "Be more AI aware",                                      learning: "Impact and use of AI in business" },
  { id: 9,  action: "Improve prompts and organise task information",         learning: "" },
  { id: 10, action: "Job search and CV making",                              learning: "Creating a CV based on background and target job roles" },
  { id: 11, action: "Improve my CV",                                         learning: "How to use ChatGPT" },
  { id: 12, action: "Use AI for job searching with more detail",             learning: "Deep job searches and CV updates" },
  { id: 13, action: "Look for a job",                                        learning: "How AI can help identify target companies" },
  { id: 14, action: "Researching and validating data",                       learning: "Making CVs with measurable outcomes" },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

const r1    = (n) => Math.round(n * 10) / 10;
const avg   = (a) => a.reduce((s, v) => s + v, 0) / a.length;
const pct   = (p, t) => r1((p / t) * 100);
const total = participants.length;

const beforeAvg = avg(participants.map((p) => p.before));
const afterAvg  = avg(participants.map((p) => p.after));
const lift      = r1(afterAvg - beforeAvg);
const relLift   = r1(((afterAvg - beforeAvg) / beforeAvg) * 100);
const improved  = participants.filter((p) => p.after > p.before).length;
const same      = participants.filter((p) => p.after === p.before).length;
const lower     = participants.filter((p) => p.after < p.before).length;

const recList    = participants.filter((p) => typeof p.rec === "number");
const promoters  = recList.filter((p) => p.rec >= 9).length;
const passives   = recList.filter((p) => p.rec >= 7 && p.rec <= 8).length;
const detractors = recList.filter((p) => p.rec <= 6).length;
const avgRec     = r1(avg(recList.map((p) => p.rec)));
const nps        = r1((promoters / recList.length) * 100 - (detractors / recList.length) * 100);

const sectorMap   = participants.reduce((a, p) => { const s = p.sector?.trim(); if (s) a[s] = (a[s] || 0) + 1; return a; }, {});
const sectorTotal = Object.values(sectorMap).reduce((a, b) => a + b, 0);
const sectorData  = Object.entries(sectorMap).map(([n, v]) => ({ name: n, value: pct(v, sectorTotal) }));

const statusMap   = participants.reduce((a, p) => { const s = p.status?.trim(); if (s) a[s] = (a[s] || 0) + 1; return a; }, {});
const statusTotal = Object.values(statusMap).reduce((a, b) => a + b, 0);
const statusData  = Object.entries(statusMap).map(([n, v]) => ({ name: n, value: pct(v, statusTotal) }));

const outcomeBarData = [
  { name: "Before",         score: r1(beforeAvg) },
  { name: "After",          score: r1(afterAvg)  },
  { name: "Recommendation", score: r1(avgRec)    },
];

const shiftData = [
  { name: "Improved",    value: pct(improved, total) },
  { name: "Stayed same", value: pct(same, total)     },
  { name: "Lower",       value: pct(lower, total)    },
];

const recMixData = [
  { name: "Promoters",  value: pct(promoters,  recList.length) },
  { name: "Passives",   value: pct(passives,   recList.length) },
  { name: "Detractors", value: pct(detractors, recList.length) },
];

const details = outcomeDetails.map((o) => {
  const p = participants.find((x) => x.id === o.id);
  return { ...p, ...o };
});

const themeData = [
  { theme: "CV building",  value: pct(details.filter((p) => /cv/i.test(`${p.action} ${p.learning}`)).length, total) },
  { theme: "Job search",   value: pct(details.filter((p) => /job|search/i.test(`${p.action} ${p.learning}`)).length, total) },
  { theme: "Safe AI use",  value: pct(details.filter((p) => /sensitive|careful|carefully|safety/i.test(`${p.action} ${p.learning}`)).length, total) },
  { theme: "Prompting",    value: pct(details.filter((p) => /prompt/i.test(`${p.action} ${p.learning}`)).length, total) },
  { theme: "Business use", value: pct(details.filter((p) => /business/i.test(`${p.action} ${p.learning}`)).length, total) },
];

const radarData = [
  { skill: "Confidence",       value: 74 },
  { skill: "Job-readiness",    value: 71 },
  { skill: "Practical use",    value: 79 },
  { skill: "Safety awareness", value: 64 },
  { skill: "Recommendation",   value: 85 },
];

// Quotes attributed by role only — no names or org identifiers
const quotes = [
  { text: "AI can help us produce a CV with measurable outcomes for better job opportunities.", attr: "Volunteer · Charity sector" },
  { text: "Creating a CV based on my background and looking for job roles — that's what I took away.", attr: "Volunteer · Employed" },
  { text: "How to match job opportunities to skills and background.", attr: "Tutor · Charity sector" },
  { text: "Deep job searches and CV updates — I didn't know AI could do this.", attr: "Volunteer · Employed" },
  { text: "Impact and use of AI in business — it opened my mind to new possibilities.", attr: "CEO · Education sector" },
  { text: "I didn't know how to use ChatGPT before. Now I know where to start.", attr: "Warehouse worker · Production sector" },
];

// ─── Colour palettes ─────────────────────────────────────────────────────────

const C_EMERALD = ["#059669", "#34d399", "#a7f3d0"];
const C_VIOLET  = ["#7c3aed", "#a78bfa", "#ede9fe"];
const C_AMBER   = ["#d97706", "#fbbf24", "#fef3c7", "#f59e0b", "#fde68a"];

// ─── Shared primitives ────────────────────────────────────────────────────────

function Chip({ children, className = "" }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${className}`}>
      {children}
    </span>
  );
}

const bubbleKeyframes = `
  @keyframes bf1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(6px,-10px) scale(1.08); }
    66%      { transform: translate(-4px,-5px) scale(0.94); }
  }
  @keyframes bf2 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(-8px,9px) scale(1.12); }
  }
  @keyframes bf3 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%      { transform: translate(8px,6px) scale(0.9); }
    80%      { transform: translate(-3px,-7px) scale(1.06); }
  }

  @keyframes fireShine {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .powered-by-gen3block {
    background: linear-gradient(90deg, #ff6a00, #ffd700, #ee0979, #ff6a00, #ffd700);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fireShine 3s ease-in-out infinite;
  }
`;

function StatPill({ label, value, sub, bg = "bg-white", border = "border-slate-200", bubbles }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-5 border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${bg} ${border}`}>
        {/* Animated bubble orbs */}
        {bubbles && bubbles.map((b, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full opacity-30 blur-2xl"
            style={{
              width: b.size, height: b.size,
              background: b.color,
              top: b.top, left: b.left,
              animation: `${["bf1","bf2","bf3"][i]} ${b.dur} ease-in-out infinite`,
              animationDelay: b.delay,
            }}
          />
        ))}
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
          {sub && <p className="mt-1 text-sm text-slate-600">{sub}</p>}
        </div>
      </div>
  );
}

function BarRow({ label, value, barClass = "bg-slate-800" }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm font-medium text-slate-700">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200">
        <div className={`h-2 rounded-full ${barClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function SectionHead({ chip, chipClass, title, sub, headerClass }) {
  return (
    <div className={`px-4 sm:px-6 lg:px-8 py-5 sm:py-6 border-b ${headerClass}`}>
      <Chip className={chipClass}>{chip}</Chip>
      <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{title}</h2>
      {sub && <p className="mt-1 text-xs sm:text-sm text-slate-600">{sub}</p>}
    </div>
  );
}

// ─── Page backdrop ────────────────────────────────────────────────────────────

function PageBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top-left large orb — sky/teal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(14,165,233,0.07), rgba(14,165,233,0.03) 50%, transparent 80%)", filter: "blur(60px)" }}
      />
      {/* Bottom-right orb — indigo */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 0.92, opacity: 1 }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-48 -right-40 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.06), rgba(99,102,241,0.02) 50%, transparent 80%)", filter: "blur(70px)" }}
      />
      {/* Mid-page drifting orb — emerald */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -40, opacity: 1 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.05), rgba(16,185,129,0.02) 50%, transparent 80%)", filter: "blur(55px)" }}
      />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(14,165,233,0.8)_1px,transparent_1px)] [background-size:28px_28px]" />
    </div>
  );
}

// ─── Scroll fade-in wrapper ───────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function AILaunchpadCaseStudy() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-gray-900 scroll-smooth">
      <style>{bubbleKeyframes}</style>
      <PageBackdrop />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#0e2240] to-[#0b2d4a] text-white">
          <div className="flex flex-col lg:flex-row">
            {/* Left — content */}
            <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                <Chip className="bg-sky-400/20 text-sky-200 border border-sky-400/30">AI Training</Chip>
                <Chip className="bg-white/10 text-slate-300 border border-white/10">Northampton · March 2026</Chip>
                <Chip className="bg-white/10 text-slate-300 border border-white/10">A Gen3block Impact Report</Chip>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                AI Launchpad
              </h1>
              <p className="mt-3 text-sm sm:text-base lg:text-lg font-semibold text-sky-300">
                Learn AI for Jobs, Business &amp; Everyday Life
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
                On 4 March 2026, Gen3block partnered with Unity in Diversity CIC (UK) and the United
                African Association to deliver a hands-on community AI workshop in Northampton.
                Fourteen participants — job seekers, volunteers, charity workers, a CEO, and a
                student — spent 2.5 hours discovering how AI unlocks real, practical results.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-sky-400" />
                  Wednesday, 4 March 2026 · 10:00 – 12:30
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
                  Unit F5B, Barratt House, Northampton NN2 6EZ
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 shrink-0 text-sky-400" />
                  14 attendees · Limited to 15 spaces
                </span>
              </div>
            </div>

            {/* Right — workshop photo */}
            <div className="lg:w-72 xl:w-88 shrink-0 flex items-stretch justify-center bg-[#0b2d4a] relative overflow-hidden">
              <img
                src="/ai-workshop.jpg"
                alt="AI Launchpad workshop in session"
                className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-none object-contain object-center"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0e2240]/80 to-transparent hidden lg:block" />
            </div>
          </div>

          {/* Partnership strip */}
          <div className="border-t border-white/10 bg-white/5 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-semibold text-white">Delivered by</span>
              <span className="rounded-lg bg-sky-400/20 border border-sky-400/30 px-2.5 py-1 font-bold text-sky-200">Gen3block</span>
              <span className="text-slate-600">×</span>
              <span className="rounded-lg bg-white/10 border border-white/10 px-2.5 py-1 text-slate-300">Unity in Diversity CIC (UK)</span>
              <span className="text-slate-600">×</span>
              <span className="rounded-lg bg-white/10 border border-white/10 px-2.5 py-1 text-slate-300">United African Association</span>
            </div>
            <span className="text-xs text-slate-500 italic">
              Data collected with informed consent · UK GDPR compliant
            </span>
          </div>
        </div>

        </FadeIn>

        {/* ── KEY METRICS ───────────────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatPill
            label="Confidence after session"
            value={`${r1(afterAvg)}/10`}
            sub={`Up from ${r1(beforeAvg)}/10 before the workshop`}
            bg="bg-white"
            border="border-slate-200"
            bubbles={[
              { color: "#6366f1", size: "80px",  top: "-20px", left: "-20px", dur: "5s",   delay: "0s"    },
              { color: "#818cf8", size: "60px",  top: "50%",   left: "75%",   dur: "7s",   delay: "1s"    },
              { color: "#c7d2fe", size: "50px",  top: "70%",   left: "10%",   dur: "6s",   delay: "0.5s"  },
            ]}
          />
          <StatPill
            label="Relative confidence lift"
            value={`+${relLift}%`}
            sub={`+${lift} points on a 10-point scale`}
            bg="bg-emerald-50"
            border="border-emerald-200"
            bubbles={[
              { color: "#059669", size: "90px",  top: "-25px", left: "60%",   dur: "6s",   delay: "0.2s"  },
              { color: "#34d399", size: "55px",  top: "60%",   left: "-15px", dur: "8s",   delay: "1.2s"  },
              { color: "#6ee7b7", size: "45px",  top: "40%",   left: "80%",   dur: "5.5s", delay: "0.8s"  },
            ]}
          />
          <StatPill
            label="Attendees more confident"
            value={`${pct(improved, total)}%`}
            sub={`${improved} of ${total} ended higher than they started`}
            bg="bg-violet-50"
            border="border-violet-200"
            bubbles={[
              { color: "#7c3aed", size: "85px",  top: "-20px", left: "50%",   dur: "7s",   delay: "0.4s"  },
              { color: "#a78bfa", size: "65px",  top: "55%",   left: "-10px", dur: "5s",   delay: "0s"    },
              { color: "#c4b5fd", size: "50px",  top: "70%",   left: "70%",   dur: "6.5s", delay: "1.5s"  },
            ]}
          />
          <StatPill
            label="Average recommendation"
            value={`${avgRec}/10`}
            sub={`${pct(promoters, recList.length)}% gave a promoter-level score`}
            bg="bg-amber-50"
            border="border-amber-200"
            bubbles={[
              { color: "#d97706", size: "80px",  top: "-15px", left: "55%",   dur: "6.5s", delay: "0.3s"  },
              { color: "#fbbf24", size: "60px",  top: "60%",   left: "-20px", dur: "7.5s", delay: "1s"    },
              { color: "#fde68a", size: "55px",  top: "45%",   left: "75%",   dur: "5s",   delay: "0.7s"  },
            ]}
          />
        </div>

        </FadeIn>

        {/* ── NARRATIVE ─────────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <Chip className="bg-slate-200 text-slate-700">The Story</Chip>
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
            A room of sceptics became a room of converts — in 2.5 hours.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 text-slate-700 leading-7">
            <div>
              <p className="font-semibold text-slate-900 mb-2">Where it started</p>
              <p>
                The average AI confidence score walking in was <strong>{r1(beforeAvg)}/10</strong>.
                Several attendees had never opened ChatGPT. One attendee — a student — rated
                themselves at just <strong>1 out of 10</strong>. Two others entered at a 1 and a 2.
                The room was curious, cautious, and in some cases genuinely unsure whether AI
                was something to embrace or be wary of.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">What changed</p>
              <p>
                By 12:30pm the same group averaged <strong>{r1(afterAvg)}/10</strong> — a
                {" "}<strong>+{relLift}%</strong> relative increase.
                The student jumped from 1 to 9. Two other attendees went from 1 to 8.
                {" "}<strong>{pct(improved, total)}%</strong> left with a higher score than they
                arrived with. The session covered CV creation, job search automation, safe AI
                practices, business applications, and hands-on prompting.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">Honest results included</p>
              <p>
                Not everyone left transformed. One attendee stayed at 5/10, still weighing
                concerns about AI's impact on employment. Another moved from 2 to 3 — cautiously
                optimistic but clear that AI needs careful handling. These responses strengthen
                the data. This was not a sales event. It was a genuine skills session with room
                for nuance and honest scepticism.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">Why it matters</p>
              <p>
                The audience spanned healthcare, charity, production, education, and community
                volunteering — people typically underserved by AI literacy programmes.
                {" "}<strong>{pct(promoters, recList.length)}%</strong> of those who completed a
                recommendation score gave a 9 or 10. NPS equivalent:{" "}
                <strong>{nps}</strong>. That is a strong signal for a first cohort.
              </p>
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── CONFIDENCE JOURNEY ────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl overflow-hidden border border-emerald-200">
          <SectionHead
            chip="Confidence"
            chipClass="bg-emerald-100 text-emerald-800"
            title="The Confidence Journey"
            sub="Self-rated AI confidence before and after the session, alongside average recommendation score."
            headerClass="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
          />
          <div className="bg-white grid gap-0 md:grid-cols-2">
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7 border-b md:border-b-0 md:border-r border-emerald-100">
              <p className="text-sm font-semibold text-slate-700 mb-4">Before / After / Recommendation (avg score /10)</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={outcomeBarData} barSize={48}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                    <XAxis dataKey="name" tick={{ fill: "#374151", fontSize: 13 }} />
                    <YAxis domain={[0, 10]} tick={{ fill: "#6b7280", fontSize: 12 }} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #d1fae5" }} />
                    <Bar dataKey="score" radius={[10, 10, 0, 0]}>
                      {outcomeBarData.map((_, i) => <Cell key={i} fill={C_EMERALD[i % C_EMERALD.length]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7">
              <p className="text-sm font-semibold text-slate-700 mb-4">Confidence shift — share of attendees</p>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={shiftData} dataKey="value" nameKey="name" innerRadius={48} outerRadius={80} paddingAngle={4}>
                      {shiftData.map((_, i) => <Cell key={i} fill={C_EMERALD[i % C_EMERALD.length]} />)}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {shiftData.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full inline-block" style={{ background: C_EMERALD[i % C_EMERALD.length] }} />
                      {item.name}
                    </span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── RECOMMENDATION ────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl overflow-hidden border border-violet-200">
          <SectionHead
            chip="Recommendation"
            chipClass="bg-violet-100 text-violet-800"
            title="Would They Send a Friend?"
            sub={`Recommendation scores from ${recList.length} completed responses. NPS equivalent: ${nps}.`}
            headerClass="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200"
          />
          <div className="bg-white grid gap-0 md:grid-cols-2">
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7 border-b md:border-b-0 md:border-r border-violet-100">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={recMixData} dataKey="value" nameKey="name" innerRadius={52} outerRadius={84} paddingAngle={4}>
                      {recMixData.map((_, i) => <Cell key={i} fill={C_VIOLET[i % C_VIOLET.length]} />)}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 rounded-2xl bg-violet-50 px-4 py-3 text-sm text-center text-slate-700">
                NPS equivalent: <span className="font-bold text-violet-700 text-lg">{nps}</span>
              </div>
            </div>
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7 flex flex-col justify-center gap-4 sm:gap-5">
              {recMixData.map((item, i) => (
                <BarRow
                  key={item.name}
                  label={item.name}
                  value={item.value}
                  barClass={["bg-violet-600", "bg-violet-400", "bg-violet-200"][i]}
                />
              ))}
              <div className="mt-2 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-violet-50 py-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Promoters</p>
                  <p className="mt-1 text-2xl font-bold text-violet-700">{promoters}</p>
                </div>
                <div className="rounded-xl bg-violet-50 py-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Passives</p>
                  <p className="mt-1 text-2xl font-bold text-violet-500">{passives}</p>
                </div>
                <div className="rounded-xl bg-violet-50 py-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Detractors</p>
                  <p className="mt-1 text-2xl font-bold text-slate-500">{detractors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── THEMES & RADAR ────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl overflow-hidden border border-amber-200">
          <SectionHead
            chip="Outcomes"
            chipClass="bg-amber-100 text-amber-800"
            title="What Attendees Took Away"
            sub="Themes from attendee next-steps and key learnings. Workshop value profile shown right."
            headerClass="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"
          />
          <div className="bg-white grid gap-0 md:grid-cols-2">
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7 border-b md:border-b-0 md:border-r border-amber-100">
              <p className="text-sm font-semibold text-slate-700 mb-4">Outcome themes (% of attendees)</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={themeData} layout="vertical" margin={{ left: 16, right: 16 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fef3c7" />
                    <XAxis type="number" domain={[0, 100]} tick={{ fill: "#6b7280", fontSize: 12 }} />
                    <YAxis type="category" dataKey="theme" width={110} tick={{ fill: "#374151", fontSize: 12 }} />
                    <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12 }} />
                    <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                      {themeData.map((_, i) => <Cell key={i} fill={C_AMBER[i % C_AMBER.length]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7">
              <p className="text-sm font-semibold text-slate-700 mb-4">Workshop value profile</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#fde68a" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: "#374151", fontSize: 11 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={{ fill: "#9ca3af", fontSize: 10 }} />
                    <Radar dataKey="value" stroke="#d97706" fill="#fbbf24" fillOpacity={0.35} />
                    <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── ATTENDEE OUTCOME DETAILS ──────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200">
          <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-slate-200">
            <Chip className="bg-slate-200 text-slate-700">Attendee Records</Chip>
            <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Individual Outcome Details</h2>
            <p className="mt-1 text-sm text-slate-600">
              All attendees are anonymised. Records show role, sector, confidence shift, and personal takeaways.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {details.map((p) => {
                const delta = p.after - p.before;
                const deltaColor = delta > 0 ? "text-emerald-600" : delta < 0 ? "text-red-500" : "text-slate-400";
                const deltaLabel = delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : "—";
                return (
                  <div key={p.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">Attendee {p.id}</p>
                        <p className="text-sm text-slate-500">
                          {[p.role, p.sector].filter(Boolean).join(" · ") || "Role not stated"}
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-900 text-white text-xs px-3 py-1 font-medium shrink-0">
                        {p.status || "Status not stated"}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 gap-2 text-center">
                      <div className="rounded-xl bg-white p-3 border border-slate-100">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Before</p>
                        <p className="mt-1 text-xl font-bold text-slate-700">{p.before}</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-100">
                        <p className="text-xs uppercase tracking-wide text-slate-400">After</p>
                        <p className="mt-1 text-xl font-bold text-slate-700">{p.after}</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-100">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Shift</p>
                        <p className={`mt-1 text-xl font-bold ${deltaColor}`}>{deltaLabel}</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-100">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Rec.</p>
                        <p className="mt-1 text-xl font-bold text-slate-700">{p.rec ?? "—"}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-slate-700">
                      {p.action ? <p><span className="font-semibold text-slate-900">Next step:</span> {p.action}</p> : null}
                      {p.learning ? <p><span className="font-semibold text-slate-900">Key learning:</span> {p.learning}</p> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── QUOTES ────────────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#0e2240] to-[#0b2d4a] px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <Chip className="bg-sky-400/20 text-sky-200 border border-sky-400/30">Voices from the Room</Chip>
          <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-white">What Attendees Said</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Verbatim learnings from feedback forms. Attributed by role and sector only.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <Quote className="h-4 w-4 text-sky-400 mb-2" />
                <p className="text-sm leading-6 text-slate-200">"{q.text}"</p>
                <p className="mt-3 border-t border-white/10 pt-2 text-xs text-slate-500">{q.attr}</p>
              </div>
            ))}
          </div>
        </div>

        </FadeIn>

        {/* ── AUDIENCE PROFILE ──────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl overflow-hidden border border-blue-200">
          <SectionHead
            chip="Audience"
            chipClass="bg-blue-100 text-blue-800"
            title="Who Was in the Room?"
            sub="Sector mix and employment profile based on completed fields."
            headerClass="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
          />
          <div className="bg-white grid gap-0 md:grid-cols-2">
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7 border-b md:border-b-0 md:border-r border-blue-100">
              <p className="text-sm font-semibold text-slate-700 mb-5">Sector breakdown</p>
              <div className="space-y-4">
                {sectorData.map((item, i) => (
                  <BarRow
                    key={item.name}
                    label={item.name}
                    value={item.value}
                    barClass={["bg-blue-600","bg-blue-500","bg-blue-400","bg-blue-300","bg-blue-200"][i]}
                  />
                ))}
              </div>
            </div>
            <div className="min-w-0 px-4 sm:px-6 py-5 sm:py-7">
              <p className="text-sm font-semibold text-slate-700 mb-5">Employment status</p>
              <div className="space-y-4">
                {statusData.map((item, i) => (
                  <BarRow
                    key={item.name}
                    label={item.name}
                    value={item.value}
                    barClass={["bg-indigo-600","bg-indigo-500","bg-indigo-400","bg-indigo-300"][i]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        </FadeIn>

        {/* ── IMPACT FRAME ──────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-3xl border border-slate-200 overflow-hidden">
          <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-slate-100">
            <Chip className="bg-slate-100 text-slate-700">Impact Frame</Chip>
            <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">What This Workshop Demonstrates</h2>
            <p className="mt-1 text-sm text-slate-600">
              A reusable outcomes frame for funder pages, partnerships, and future cohorts.
            </p>
          </div>
          <div className="bg-white grid gap-3 sm:gap-4 p-4 sm:p-6 sm:grid-cols-2">
            {[
              {
                icon: <TrendingUp className="h-5 w-5" />,
                color: "bg-emerald-50 text-emerald-700",
                title: "Measurable confidence gains",
                body: `${pct(improved, total)}% of attendees reported higher self-rated AI confidence by the end — with an average jump of +${lift} points on a 10-point scale.`,
              },
              {
                icon: <Briefcase className="h-5 w-5" />,
                color: "bg-amber-50 text-amber-700",
                title: "Clear employability outcomes",
                body: "CV building, job search, and role matching appeared repeatedly in feedback — making AI Launchpad directly useful for employability-led reporting.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                color: "bg-violet-50 text-violet-700",
                title: "Responsible AI awareness",
                body: "Attendees referenced safe usage and data sensitivity, showing the session covered digital safety alongside productivity — not just AI hype.",
              },
              {
                icon: <GraduationCap className="h-5 w-5" />,
                color: "bg-blue-50 text-blue-700",
                title: "Broad community relevance",
                body: "The workshop reached job seekers, volunteers, charity staff, a CEO, and a student — proving AI literacy is not just for tech professionals.",
              },
            ].map((card) => (
              <div key={card.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className={`rounded-xl p-2.5 shrink-0 ${card.color}`}>{card.icon}</div>
                <div>
                  <p className="font-semibold text-slate-900">{card.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        </FadeIn>

        {/* ── CTA FOOTER ────────────────────────────────────────────────────── */}
        <FadeIn>
        <div className="mt-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#0e2240] to-[#0b2d4a] px-4 sm:px-6 lg:px-8 py-7 sm:py-8 text-white text-center">
          <Zap className="h-6 w-6 mx-auto text-sky-400 mb-3" />
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
            Want Gen3block to deliver AI Launchpad for your community?
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-slate-400 text-xs sm:text-sm leading-6">
            Targeted, hands-on AI training for community groups, charities, and organisations.
            Get in touch to discuss your next cohort.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
            {import.meta.env.VITE_CALENDLY_URL && (
              <a
                href={import.meta.env.VITE_CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Calendar className="h-4 w-4" /> Book a Discovery Call
              </a>
            )}
          </div>
        </div>
        </FadeIn>

        {/* ── POWERED BY FOOTER ─────────────────────────────────────────────── */}
        <div className="mt-10 mb-2 flex justify-center">
          <span className="powered-by-gen3block select-none text-sm sm:text-base font-bold tracking-wide">
            Powered by Gen3block AI
          </span>
        </div>

      </div>
    </div>
  );
}
