"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Layers,
  Rocket,
  Target,
  Cpu,
  Globe,
  TrendingUp,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Users,
  Zap,
  ArrowUpRight,
  MessageSquare,
  BarChart3,
  Phone,
  Search,
  Shield,
  Building2,
  Heart,
  ShoppingBag,
  CheckCircle2,
  Circle,
  ClipboardList,
  Puzzle,
  Settings,
  LineChart,
} from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { CursorFollower } from "@/components/CursorFollower";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import type { Variants } from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────────

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "tween", ease: "easeOut" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: "tween", ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: "tween", ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

// ─── Animated Section Wrapper ──────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Animated Headline ─────────────────────────────────────────────────────────

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: 0.3 + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { href: "#architecture", label: "Architecture" },
  { href: "#modules", label: "Modules" },
  { href: "#industries", label: "Industries" },
  { href: "#linkrcap", label: "Linkrcap" },
  { href: "https://www.business.lamrik.com", label: "Business OS" },
  { href: "#deployment", label: "Deployment" },
];

const painPoints = [
  { icon: Search, label: "Distributed lead sources" },
  { icon: Users, label: "Manual follow-ups" },
  { icon: Layers, label: "CRM underutilization" },
  { icon: MessageSquare, label: "Communication silos" },
  { icon: BarChart3, label: "Limited analytics" },
  { icon: Target, label: "Reactive decisions" },
];

const capabilities = [
  { icon: Search, label: "Centralized Lead Capture" },
  { icon: Shield, label: "Intelligent CRM Framework" },
  { icon: MessageSquare, label: "WhatsApp Automation Layer" },
  { icon: Phone, label: "AI Voice Interaction Systems" },
  { icon: LineChart, label: "Revenue & Performance Analytics" },
  { icon: Users, label: "Scalable Multi-User Infrastructure" },
];

const coreModules = [
  {
    icon: Search,
    title: "Lead Intelligence Layer",
    features: [
      "Meta & Google Ads integration",
      "Website form tracking",
      "WhatsApp lead capture",
      "Automated lead routing",
    ],
  },
  {
    icon: Shield,
    title: "Relationship Management Layer",
    features: [
      "Pipeline management",
      "Opportunity tracking",
      "Customer lifecycle management",
      "Multi-user access controls",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Automation Layer",
    features: [
      "Automated WhatsApp responses",
      "Drip campaigns",
      "Appointment reminders",
      "Two-way intelligent chat",
    ],
  },
  {
    icon: Phone,
    title: "AI Voice Interaction Layer",
    features: [
      "Automated follow-up calls",
      "Lead qualification",
      "Appointment confirmations",
      "After-hours response systems",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insight Layer",
    features: [
      "Conversion tracking",
      "Lead source ROI",
      "Team productivity monitoring",
      "Revenue forecasting",
    ],
  },
];

const industryData = [
  {
    id: "real-estate",
    label: "Real Estate & Builders",
    icon: Building2,
    content: [
      "Centralized lead management across channels",
      "Site visit scheduling automation",
      "Channel partner tracking & attribution",
      "AI-powered follow-up calling",
      "Campaign ROI monitoring & diagnostics",
    ],
    seoLine:
      "Purpose-built CRM and automation infrastructure for real estate agencies and builders across India.",
  },
  {
    id: "healthcare",
    label: "Healthcare Clinics",
    icon: Heart,
    content: [
      "Patient lead tracking & intake automation",
      "Appointment scheduling & reminders",
      "Treatment pipeline visibility",
      "AI-driven patient communication",
      "Multi-location clinic management",
    ],
    seoLine:
      "Healthcare CRM software and clinic automation systems designed for medical practices in India.",
  },
  {
    id: "d2c",
    label: "D2C & Consumer Brands",
    icon: ShoppingBag,
    content: [
      "Customer lifecycle automation",
      "WhatsApp commerce workflows",
      "Abandoned cart recovery systems",
      "AI-assisted customer support",
      "Revenue tracking dashboards",
    ],
    seoLine:
      "D2C CRM platform and ecommerce automation system with WhatsApp integration for consumer brands.",
  },
];

const deploymentPhases = [
  {
    phase: "Phase 01",
    title: "Operational Audit",
    description:
      "We map your lead flow, sales cycle, communication stack, and data systems to identify friction points.",
  },
  {
    phase: "Phase 02",
    title: "Architecture Blueprint",
    description:
      "A customized system architecture is designed, aligned with your revenue goals and operational workflow.",
  },
  {
    phase: "Phase 03",
    title: "System Deployment",
    description:
      "CRM, automation layers, AI agents, and dashboards are deployed as a fully integrated infrastructure.",
  },
  {
    phase: "Phase 04",
    title: "Continuous Optimization",
    description:
      "Performance analysis, iterative improvement, and scaling support to ensure sustained growth.",
  },
];

// ─── Pillars (How We Build) ────────────────────────────────────────────────────

const pillars = [
  {
    icon: Target,
    title: "Product Strategy & Direction",
    description:
      "We design product journeys from concept to commercialization, grounded in real-world adoption and long-term value.",
  },
  {
    icon: Cpu,
    title: "Technology Architecture",
    description:
      "We engineer robust, scalable systems built on modern infrastructure and enterprise-grade development practices.",
  },
  {
    icon: Globe,
    title: "Platform Development",
    description:
      "We shape digital ecosystems that support organic growth, network effects, and community engagement.",
  },
  {
    icon: TrendingUp,
    title: "Market Incubation",
    description:
      "We launch products through structured sprints, iteration cycles, and early traction frameworks that accelerate adoption.",
  },
];

// ─── LinkrCap / Vision Data ────────────────────────────────────────────────────

const focusAreas = [
  { icon: Sparkles, label: "Creator economy tools" },
  { icon: Users, label: "Community platforms" },
  { icon: Layers, label: "SaaS products" },
  { icon: Zap, label: "Generative AI tools" },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("real-estate");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentIndustry = industryData.find((i) => i.id === activeIndustry)!;

  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary">
      {/* Background Effects */}
      <InteractiveGrid />
      <CursorFollower />
      <ScrollProgress />

      {/* Floating Shapes */}
      <div
        className="floating-shape shape-hexagon"
        style={{ top: "15%", right: "10%", animationDelay: "0s" }}
      />
      <div
        className="floating-shape shape-circle"
        style={{ top: "60%", left: "5%", animationDelay: "-2s" }}
      />
      <div
        className="floating-shape shape-square"
        style={{ bottom: "20%", right: "15%", animationDelay: "-4s" }}
      />

      {/* ─── Header ────────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled
          ? "header-blur border-theme-primary shadow-lg"
          : "border-transparent bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:h-20">
          <motion.a
            href="#top"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="md" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`link-hover relative px-4 py-2 text-sm font-medium ${activeSection === link.href.slice(1) ? "active" : ""
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-theme-primary bg-theme-card"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-theme-primary bg-theme-primary md:hidden"
            >
              <div className="flex flex-col px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-theme-secondary transition-colors hover:bg-theme-secondary hover:text-theme-primary"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ─── SECTION 1: Hero ─────────────────────────────────────────────── */}
        <section
          id="top"
          className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:py-32"
        >
          <div className="hero-gradient-mesh" />
          <div className="relative z-10 mx-auto max-w-[1200px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-4 text-xs uppercase tracking-[0.2em] text-theme-muted sm:text-sm"
              >
                Lamrik Labs Product Studio
              </motion.p>

              <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-theme-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                <AnimatedHeadline text="AI-Powered Business Operating System for High-Growth Companies in India" />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mb-4 text-base leading-relaxed text-theme-muted sm:text-lg"
              >
                Unified CRM, WhatsApp automation, AI voice agents and analytics
                infrastructure for scalable enterprises.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mb-8 text-sm text-theme-subtle"
              >
                Built by the team behind{" "}
                <a
                  href="https://www.linkrcap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-gold transition-colors hover:text-theme-primary"
                >
                  Linkrcap
                </a>
                .
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <MagneticButton href="#deployment" variant="primary">
                  Schedule Strategy Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton href="#architecture" variant="secondary">
                  Explore Architecture
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 2: Context (Professional Tone) ──────────────────────── */}
        <AnimatedSection
          id="context"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1000px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              The Challenge
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Growth Requires Operational Intelligence
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              As businesses scale beyond early-stage operations, fragmentation
              becomes the primary growth constraint. Lead sources multiply,
              communication becomes inconsistent, and decision-making shifts from
              proactive to reactive. The underlying systems were never designed
              to operate at scale.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 rounded-xl border border-theme-primary bg-theme-card p-4 transition-colors hover:border-theme-secondary"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-theme-secondary">
                    <point.icon className="h-5 w-5 text-theme-muted" />
                  </div>
                  <span className="text-sm font-medium text-theme-secondary">
                    {point.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-theme-gold bg-[var(--accent-gold-light)] px-6 py-5"
            >
              <p className="text-sm font-medium leading-relaxed text-theme-primary sm:text-base">
                Lamrik Business OS™ unifies these layers into a single,
                intelligent operating architecture — purpose-built for
                lead-driven, revenue-focused businesses.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 3: What Is Lamrik Business OS ───────────────────────── */}
        <AnimatedSection
          id="architecture"
          className="px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <motion.div variants={fadeInUp} className="badge-gold mb-4">
                  <Cpu className="h-4 w-4" />
                  Product Studio
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
                >
                  A Vertical-Ready Operational Architecture
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="mb-8 text-base leading-relaxed text-theme-muted sm:text-lg"
                >
                  Lamrik Business OS™ is a centralized, AI-enabled operating
                  system designed to capture every lead, structure every
                  follow-up, automate communication, track every opportunity,
                  monitor team performance, and deliver real-time intelligence.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-sm font-medium italic text-theme-subtle"
                >
                  Not off-the-shelf software. Engineered infrastructure.
                </motion.p>
              </div>

              <motion.div variants={fadeInRight}>
                <TiltCard>
                  <div className="card-base card-hover p-6 md:p-8">
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      {capabilities.map((cap, i) => (
                        <motion.li
                          key={i}
                          variants={fadeInUp}
                          className="flex items-center gap-4"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-gold-light)]">
                            <cap.icon className="h-5 w-5 text-theme-gold" />
                          </div>
                          <span className="text-sm font-medium text-theme-primary sm:text-base">
                            {cap.label}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 4: Core Modules ─────────────────────────────────────── */}
        <AnimatedSection
          id="modules"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1200px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              Core System Modules
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Five Integrated Layers of Operational Control
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              Each module operates independently, yet functions as part of a
              unified intelligence layer — giving your team complete visibility
              and control.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {coreModules.map((mod, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="card-base module-card flex h-full flex-col p-6">
                      <div className="icon-container mb-4">
                        <mod.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-theme-primary">
                        {mod.title}
                      </h3>
                      <ul className="space-y-2">
                        {mod.features.map((feat, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-theme-muted"
                          >
                            <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-theme-gold" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 5: Industry Solutions (Tabbed) ──────────────────────── */}
        <AnimatedSection
          id="industries"
          className="px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1000px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              Industry Solutions
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Built for Lead-Driven Businesses
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              Lamrik Business OS™ can be configured for any business that
              depends on leads, sales teams, follow-ups, and customer retention.
            </motion.p>

            {/* Tabs */}
            <motion.div variants={fadeInUp} className="industry-tabs">
              {industryData.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`industry-tab ${activeIndustry === industry.id ? "active" : ""
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <industry.icon className="h-4 w-4" />
                    {industry.label}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard>
                  <div className="card-base p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="icon-container">
                        <currentIndustry.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-theme-primary">
                        {currentIndustry.label}
                      </h3>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {currentIndustry.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-theme-gold" />
                          <span className="text-sm text-theme-muted">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs leading-relaxed text-theme-subtle">
                      {currentIndustry.seoLine}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-center text-sm text-theme-subtle"
            >
              Additional vertical deployments available upon request.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 6: Why Lamrik ───────────────────────────────────────── */}
        <AnimatedSection
          id="why-lamrik"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1000px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              Our Approach
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Systems Thinking Over Software Installation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              Most CRM vendors deploy tools and move on. Lamrik Product Studio
              architects operational infrastructure that evolves with your
              business.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* Most Vendors */}
              <motion.div variants={fadeInLeft}>
                <div className="comparison-column h-full">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-theme-subtle">
                    Most Vendors
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Deploy tools",
                      "Limited customization",
                      "Short onboarding window",
                      "Minimal post-launch support",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-theme-muted"
                      >
                        <Circle className="h-3 w-3 shrink-0 text-theme-subtle" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Lamrik Product Studio */}
              <motion.div variants={fadeInRight}>
                <div className="comparison-column highlighted h-full">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-theme-gold">
                    Lamrik Product Studio
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Diagnose workflow & operational flow",
                      "Architect customized systems",
                      "Integrate AI automation layers",
                      "Deploy unified infrastructure",
                      "Optimize continuously",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-theme-primary"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-theme-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ─── LinkrCap Section (Flagship Preservation) ────────────────────── */}
        <AnimatedSection id="linkrcap" className="px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div variants={fadeInUp} className="badge-gold mb-4">
                <Rocket className="h-4 w-4" />
                Flagship Platform
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
              >
                Linkrcap
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mb-6 text-base leading-relaxed text-theme-muted sm:text-lg"
              >
                Linkrcap transforms ideas into reality through innovation
                sprints, prototype building, and structured incubation pathways.
                The platform enables creators, builders, and emerging communities
                to test concepts, validate demand, and accelerate launch
                timelines through guided digital processes.
              </motion.p>

              <motion.ul
                variants={staggerContainer}
                className="mb-8 space-y-3 text-theme-muted"
              >
                {[
                  "Guided innovation workflows",
                  "Faster validation cycles",
                  "Structured launch readiness",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-gold-light)]">
                      <ChevronRight className="h-4 w-4 text-theme-gold" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp}>
                <MagneticButton
                  href="https://www.linkrcap.com/"
                  variant="secondary"
                >
                  Explore Linkrcap
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div variants={fadeInRight}>
              <TiltCard>
                <div className="card-base card-hover p-6 md:p-8">
                  {[
                    {
                      step: "01",
                      icon: ClipboardList,
                      title: "Explore",
                      description:
                        "Identify and validate opportunities through guided discovery.",
                    },
                    {
                      step: "02",
                      icon: Puzzle,
                      title: "Prototype",
                      description:
                        "Build and iterate rapidly with structured sprint frameworks.",
                    },
                    {
                      step: "03",
                      icon: Rocket,
                      title: "Launch",
                      description:
                        "Scale to market readiness with incubation support.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-4 ${i > 0
                        ? "border-t border-theme-primary pt-6"
                        : ""
                        } ${i < 2 ? "pb-6" : ""}`}
                    >
                      <div className="icon-container shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-widest text-theme-subtle">
                          Step {item.step}
                        </p>
                        <h4 className="mb-1 text-lg font-semibold text-theme-primary">
                          {item.title}
                        </h4>
                        <p className="text-sm text-theme-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION X: Business OS ───────────────────────────────────────── */}
        <AnimatedSection
          id="business-os"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <motion.div variants={fadeInUp} className="badge-gold mb-4">
                  <Layers className="h-4 w-4" />
                  Product Studio Expansion
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
                >
                  <AnimatedHeadline text="Lamrik Business Operating System™" />
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="mb-4 text-base font-medium text-theme-primary sm:text-lg"
                >
                  AI-Powered Operational Infrastructure for Growth-Focused Enterprises
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="mb-6 text-base leading-relaxed text-theme-muted sm:text-lg"
                >
                  As businesses scale, operational complexity increases. Lamrik Business OS™ unifies CRM, lead capture, WhatsApp automation, AI voice agents, and performance analytics into a structured system designed for clarity and control.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="mb-8 text-sm italic text-theme-subtle"
                >
                  Engineered by the team behind LinkrCap, it extends Lamrik’s systems expertise into multi-industry business infrastructure.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <MagneticButton
                    href="https://www.business.lamrik.com"
                    variant="primary"
                  >
                    Explore Business OS
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </motion.div>
              </div>

              <motion.div variants={fadeInRight}>
                <TiltCard>
                  <div className="card-base card-hover p-6 md:p-8">
                    <motion.ul variants={staggerContainer} className="space-y-4">
                      {[
                        { icon: Cpu, label: "Centralized Lead Capture" },
                        { icon: Search, label: "Structured CRM Architecture" },
                        { icon: MessageSquare, label: "WhatsApp Automation" },
                        { icon: Phone, label: "AI Voice Systems" },
                        { icon: BarChart3, label: "Revenue Analytics" },
                        { icon: Shield, label: "Enterprise-Grade Security" },
                      ].map((item, i) => (
                        <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-gold-light)]">
                            <item.icon className="h-5 w-5 text-theme-gold" />
                          </div>
                          <span className="text-sm font-medium text-theme-primary sm:text-base">
                            {item.label}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Vision Section ──────────────────────────────────────────────── */}
        <AnimatedSection
          id="vision"
          className="px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1000px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              Vision
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Expanding Our Ecosystem
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              Lamrik Labs is in active exploration of new digital ecosystems
              across emerging technologies. Our pipeline focuses on long-term
              product ownership — not trend-driven experiments.
            </motion.p>

            <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-sm leading-relaxed text-theme-muted sm:text-base"
              >
                <p>
                  We believe the next wave of transformative digital products
                  will emerge at the intersection of community infrastructure,
                  creator tools, and intelligent automation.
                </p>
                <p>
                  Our investment thesis centers on platforms that compound value
                  over time — building moats through network effects and user
                  ownership.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid gap-4 sm:grid-cols-2"
              >
                {focusAreas.map((area, i) => (
                  <motion.div key={i} variants={scaleIn}>
                    <TiltCard>
                      <div className="card-base card-hover flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-gold-light)]">
                          <area.icon className="h-5 w-5 text-theme-gold" />
                        </div>
                        <span className="text-sm font-medium text-theme-primary">
                          {area.label}
                        </span>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 7: Deployment Framework ─────────────────────────────── */}
        <AnimatedSection
          id="deployment"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1000px]">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <motion.p
                  variants={fadeInUp}
                  className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
                >
                  Deployment Framework
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
                >
                  Structured Implementation
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="mb-6 text-base leading-relaxed text-theme-muted sm:text-lg"
                >
                  Every Lamrik Business OS™ deployment follows a structured
                  four-phase framework to ensure seamless integration and
                  measurable outcomes.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-xs text-theme-subtle"
                >
                  Deployment cycles are limited to ensure quality
                  implementation.
                </motion.p>
              </div>

              <motion.div variants={fadeInRight}>
                <div className="deployment-stepper">
                  {deploymentPhases.map((phase, i) => (
                    <div key={i} className="stepper-step">
                      <div className="stepper-dot" />
                      <p className="stepper-number">{phase.phase}</p>
                      <h4 className="mb-1 text-lg font-semibold text-theme-primary">
                        {phase.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-theme-muted">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── SECTION 8: Final CTA ────────────────────────────────────────── */}
        <AnimatedSection
          id="cta"
          className="px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px] text-center">
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Build a Controlled, Intelligent Revenue Infrastructure
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-8 text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              For businesses serious about structured growth.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4"
            >
              <MagneticButton href="mailto:contact@lamrik.com" variant="primary">
                Book Executive Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <p className="text-xs text-theme-subtle">
                Enterprise-grade deployment. Limited onboarding capacity per
                quarter.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
