import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe2,
  GaugeCircle,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  Play,
  MapPin,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

export default function BoldMunchCaseStudy() {
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

        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlackSquare
            title="Industry"
            kicker="Context"
            icon={<Globe2 className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">Food & E-Commerce</p>}
          />
          <BlackSquare
            title="Timeline"
            kicker="Duration"
            icon={<GaugeCircle className="h-5 w-5" />}
            body={<p className="text-sm/6 text-gray-900 font-semibold">Idea → Live platform</p>}
          />
          <BlackSquare
            title="Services"
            kicker="Scope"
            icon={<Sparkles className="h-5 w-5" />}
            body={
              <ul className="space-y-1 text-sm/6 text-gray-900 font-medium list-disc pl-4">
                <li>Custom ordering platform</li>
                <li>WhatsApp order integration</li>
                <li>Social media expansion</li>
              </ul>
            }
          />
        </div>

        <Section id="about" title="About Bold Munch">
          <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            Bold Munch is a premium home bakery specialising in handmade banana breads, meat pies, and
            puff puff — baked fresh to order and delivered locally every Saturday. What started
            as a passion project became a fully operational food business powered by a custom digital
            platform designed and built by Gen3block.
          </p>
        </Section>

        <Section id="situation" title="The Situation">
          <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            Bold Munch began as just an idea — a talented baker with exceptional products but no digital
            presence, relying entirely on word-of-mouth and manual messaging to take orders. There was no
            way for customers to browse the menu, place orders independently, or track their purchases.
            Everything was handled through informal conversations, creating friction for both the customer
            and the business owner.
          </p>
        </Section>

        <Section id="challenge" title="The Challenge">
          <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            The business needed a professional ordering experience that felt premium and was easy enough
            for any customer to use on mobile. It also required delivery zone enforcement to ensure orders
            only came from serviceable postcodes, a way to communicate orders instantly without complex
            payment infrastructure, and an admin layer for the owner to manage and track everything — all
            without expensive third-party platforms eating into margins.
          </p>
        </Section>

        <Section id="solution" title="The Solution">
          <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
            <BlackSquare
              subtle
              title="Custom Ordering Platform"
              icon={<ShoppingBag className="h-4 w-4 text-amber-600" />}
              body={
                <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                  <li>Interactive menu with size and variety options per item</li>
                  <li>Cart system with running total and order summary</li>
                  <li>Mobile-first, glass morphism UI built in Vanilla JS</li>
                  <li>WCAG 2.1 Level AA accessible touch targets (44px minimum)</li>
                </ul>
              }
            />

            <BlackSquare
              subtle
              title="Delivery Zone Validation"
              icon={<MapPin className="h-4 w-4 text-amber-600" />}
              body={
                <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                  <li>Real-time postcode-based delivery zone checking</li>
                  <li>Native point-in-polygon validation — no external APIs</li>
                  <li>Saturday delivery window with Friday 9AM order cut-off</li>
                  <li>Minimum order of £20 with £4.90 shipping displayed upfront</li>
                </ul>
              }
            />

            <BlackSquare
              subtle
              title="WhatsApp Order Integration"
              icon={<MessageCircle className="h-4 w-4 text-amber-600" />}
              body={
                <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                  <li>Seamless order confirmation sent via WhatsApp Business API</li>
                  <li>Instant notification to the baker on every new order</li>
                  <li>Removes need for a payment gateway at launch</li>
                </ul>
              }
            />

            <BlackSquare
              subtle
              title="Admin Dashboard"
              icon={<LayoutDashboard className="h-4 w-4 text-amber-600" />}
              body={
                <ul className="space-y-1 text-sm/6 text-gray-800 font-medium list-disc pl-4">
                  <li>Comprehensive order management and analytics view</li>
                  <li>SQLite database with migration support</li>
                  <li>Node.js + Express backend — lightweight and self-hosted</li>
                </ul>
              }
            />
          </div>
        </Section>

        <ResultsSection />

        <Section id="expansion" title="Social Media Expansion">
          <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            With the digital platform established and operations running smoothly, Gen3block supported
            Bold Munch's expansion onto social media — bringing the brand in front of a wider audience.
            The move to social commerce enabled Bold Munch to reach customers beyond local delivery zones,
            driving consistent order volume with over 100 products sold in just 60 days. Orders now come in regularly
            through multiple channels, with the platform handling fulfilment coordination seamlessly.
          </p>
        </Section>

        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-amber-50 via-orange-50/60 to-yellow-50/70 rounded-xl p-3 sm:p-4 border border-amber-200 shadow-sm">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
        <img
          src="/Bold_Munch_logo.png"
          alt="Bold Munch"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0 drop-shadow-[0_6px_24px_rgba(180,83,9,0.15)]"
        />
        <span className="hidden sm:inline-block h-6 w-px bg-amber-300 flex-shrink-0" />
        <span className="text-[10px] sm:text-xs text-amber-800 font-medium leading-snug">
          Premium Bakery · Food E-Commerce
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 flex-shrink-0 rounded-full border border-amber-300 bg-amber-100 px-3 py-1.5 text-[10px] sm:text-xs text-amber-800 font-semibold">
        <ShoppingBag className="h-3 w-3 flex-shrink-0" />
        <span>100+ sold in 60 days</span>
      </div>
    </div>
  );
}

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "situation", label: "Situation" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
    { id: "expansion", label: "Expansion" },
  ];

  return (
    <nav className="mt-4 sm:mt-6 sticky top-0 z-20 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm">
      <div
        className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 overflow-x-auto custom-scrollbar"
        style={{ overscrollBehavior: "contain", touchAction: "pan-x pinch-zoom" }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="touch-target flex-shrink-0 flex items-center justify-center px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors whitespace-nowrap"
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
    <div className="relative mt-4 sm:mt-6 md:mt-10 overflow-hidden rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-200" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-300 bg-amber-100 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] text-amber-800 font-medium">
            <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
            <span>Case Study</span>
          </div>
          <h1 className="mt-3 sm:mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-gray-950">
            Bold Munch: From Idea to a Thriving Digital Bakery
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-xl">
            Gen3block transformed a home bakery concept into a fully operational ordering platform —
            then scaled it to social media with 100+ products sold in just 60 days and consistent weekly orders.
          </p>
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://www.boldmunch.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium shadow-sm"
            >
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>Visit Website</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full sm:w-64 md:w-56 lg:w-64 flex-shrink-0">
          <Stat title="Industry" value="Food & E-Com" />
          <Stat title="Orders" value="100+ in 60 days" />
          <Stat title="Min. Order" value="£20 + £4.90" />
          <Stat title="Channel" value="Web · Social" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  const sectionColors = {
    about: "bg-gradient-to-br from-amber-50 via-white to-yellow-50/60",
    situation: "bg-gradient-to-br from-orange-50 via-white to-amber-50/60",
    challenge: "bg-gradient-to-br from-red-50 via-white to-orange-50/60",
    solution: "bg-gradient-to-br from-amber-50 via-white to-orange-50/60",
    expansion: "bg-gradient-to-br from-emerald-50 via-white to-teal-50/60",
  };

  const bgColor = sectionColors[id] || "bg-white";

  return (
    <section
      id={id}
      className={`mt-6 sm:mt-8 md:mt-10 scroll-mt-20 rounded-2xl p-4 sm:p-6 md:p-8 ${bgColor} border border-gray-200 shadow-sm`}
    >
      <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-950">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BlackSquare({ title, kicker, icon, body, subtle, children }) {
  return (
    <div
      className={[
        "group relative rounded-xl border p-4 sm:p-5 md:p-6",
        subtle ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200",
        "shadow-md hover:shadow-lg transition-shadow",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl [background:radial-gradient(60px_60px_at_20px_20px,rgba(217,119,6,0.04),transparent),radial-gradient(60px_60px_at_calc(100%-20px)_calc(100%-20px),rgba(217,119,6,0.04),transparent)]" />
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
    <div className="rounded-lg border border-amber-200 bg-gradient-to-br from-amber-100/70 to-orange-100/60 p-2.5 sm:p-3 text-left">
      <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-amber-700/80 font-medium">
        {title}
      </div>
      <div className="mt-0.5 text-xs sm:text-sm font-semibold text-gray-900 leading-snug">{value}</div>
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="mt-6 sm:mt-8 md:mt-10 scroll-mt-20">
      <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-100" />
        <div className="relative">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-300 bg-amber-100 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-amber-800">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Key Outcomes</span>
          </div>
          <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            The Results
          </h2>
          <p className="mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl font-medium leading-relaxed">
            A real business — running, selling, and growing
          </p>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "100+ products sold across web and social media in just 60 days",
              "Minimum £20 order value with transparent £4.90 shipping",
              "Postcode-validated delivery zones — zero out-of-area orders",
              "WhatsApp Business integration for instant order notifications",
              "Orders fulfilled every Saturday with Friday 9AM cut-off",
              "Admin dashboard giving full visibility of all orders and metrics",
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
    <div className="group relative flex items-start gap-2 sm:gap-3 rounded-xl border border-amber-200 bg-white p-3 sm:p-4 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
      <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 ring-1 ring-amber-200 group-hover:bg-amber-200 transition-colors">
        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600" />
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 space-y-4">
      <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 rounded-xl border border-gray-200 bg-gradient-to-r from-amber-50 via-orange-50/60 to-yellow-50/60 p-4 sm:p-5 text-xs text-gray-600 shadow-sm">
        <div>© {new Date().getFullYear()} Bold Munch · Premium Bakery</div>
        <span className="text-amber-700 font-medium">Handmade with love · Delivered fresh every Saturday</span>
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
            "radial-gradient(closest-side, rgba(217,119,6,0.22), rgba(217,119,6,0.10) 40%, transparent 70%)",
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
            "radial-gradient(closest-side, rgba(234,88,12,0.20), rgba(234,88,12,0.08) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:14px_14px]" />
    </div>
  );
}
