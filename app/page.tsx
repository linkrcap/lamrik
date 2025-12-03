"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  Rocket,
  Target,
  Lightbulb,
  Cpu,
  Globe,
  TrendingUp,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Building2,
  ChevronRight,
  Sparkles,
  Users,
  Blocks,
  Zap,
  ArrowUpRight,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { CursorFollower } from "@/components/CursorFollower";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

// Animated section wrapper
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

// Word-by-word animated text
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

// Pillar data
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

// Focus areas
const focusAreas = [
  { icon: Sparkles, label: "Creator economy tools" },
  { icon: Users, label: "Community platforms" },
  { icon: Blocks, label: "SaaS products" },
  { icon: Zap, label: "Generative AI tools" },
];

// Navigation
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#how-we-build", label: "How We Build" },
  { href: "#linkrcap", label: "Linkrcap" },
  { href: "#vision", label: "Vision" },
  { href: "#partner", label: "Partner" },
];

// Web3Forms access key - get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your actual key

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll and active section
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Lamrik Labs Website",
          subject: `Partnership Inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormState("success");
        setFormData({ name: "", organization: "", email: "", message: "" });
        // Reset form state after 5 seconds
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary">
      {/* Background Effects */}
      <InteractiveGrid />
      <CursorFollower />
      <ScrollProgress />

      {/* Floating Shapes */}
      <div className="floating-shape shape-hexagon" style={{ top: "15%", right: "10%", animationDelay: "0s" }} />
      <div className="floating-shape shape-circle" style={{ top: "60%", left: "5%", animationDelay: "-2s" }} />
      <div className="floating-shape shape-square" style={{ bottom: "20%", right: "15%", animationDelay: "-4s" }} />

      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "header-blur border-theme-primary shadow-lg" 
          : "border-transparent bg-transparent"
      }`}>
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
                className={`link-hover relative px-4 py-2 text-sm font-medium ${
                  activeSection === link.href.slice(1) ? "active" : ""
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
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
        {/* Hero Section */}
        <section id="top" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInLeft}
                className="mb-4 text-xs uppercase tracking-[0.2em] text-theme-muted sm:text-sm"
              >
                Technology Holding Company &amp; Product Studio
              </motion.p>
              
              <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-theme-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                <AnimatedHeadline text="Lamrik Labs — Designing the Digital Platforms of Tomorrow" />
          </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mb-8 max-w-xl text-base leading-relaxed text-theme-muted sm:text-lg"
              >
                A technology holding company and product studio headquartered in
                Hyderabad, India. We build, incubate, and scale digital ecosystems
                for the future.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <MagneticButton href="#partner" variant="primary">
                  Partner with Lamrik Labs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton href="https://www.linkrcap.com/" variant="secondary">
                  Explore Linkrcap
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <TiltCard className="ml-auto w-full max-w-sm">
                <div className="card-base card-hover p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="icon-container">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-theme-muted">
                        Flagship Platform
                      </p>
                      <h3 className="text-xl font-semibold text-theme-primary">
                        Linkrcap
                      </h3>
                    </div>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-theme-muted">
                    Transform ideas into market-ready products through guided
                    processes.
                  </p>
                  <div className="border-t border-theme-primary pt-5">
                    <ul className="space-y-3 text-sm text-theme-muted">
                      {["Innovation sprints", "Prototype building", "Structured incubation pathways"].map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-gold-light)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
                            </span>
                            {item}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-[900px]">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              About Lamrik Labs
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mb-12 space-y-4 text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              <p>
                Lamrik Labs Pvt Ltd is a technology holding company headquartered
                in Hyderabad, India.
              </p>
              <p>
                We design, incubate, and accelerate digital platforms that empower
                communities and organizations to unlock new forms of value.
              </p>
              <p>
                Founded in 2025, we operate with a long-term mindset: build
                foundational products, scale sustainably, and create ecosystem-wide
                impact.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: Building2, label: "Founded", value: "2025" },
                { icon: MapPin, label: "Headquarters", value: "Hyderabad, India" },
                { icon: Layers, label: "Focus", value: "Digital Platforms" },
              ].map((stat, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <TiltCard>
                    <div className="card-base card-hover p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-theme-secondary">
                        <stat.icon className="h-5 w-5 text-theme-gold" />
                      </div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-theme-muted">
                        {stat.label}
                      </p>
                      <p className="text-lg font-medium text-theme-primary">
                        {stat.label === "Founded" ? (
                          <AnimatedCounter value={2025} />
                        ) : (
                          stat.value
                        )}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* How We Build Section */}
        <AnimatedSection
          id="how-we-build"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[1200px]">
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
              How We Build
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              We operate as an innovation studio—identifying opportunities,
              prototyping solutions, and transforming them into market-ready
              platforms.
            </motion.p>
            
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {pillars.map((pillar, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="card-base card-hover flex h-full flex-col p-6">
                      <div className="icon-container mb-4">
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-theme-primary">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-theme-muted">
                        {pillar.description}
          </p>
        </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Linkrcap Section */}
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
                Linkrcap transforms ideas into reality through innovation sprints,
                prototype building, and structured incubation pathways. The platform
                enables creators, builders, and emerging communities to test concepts,
                validate demand, and accelerate launch timelines through guided digital
                processes.
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
                <MagneticButton href="https://www.linkrcap.com/" variant="secondary">
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
                      icon: Compass,
                      title: "Explore",
                      description: "Identify and validate opportunities through guided discovery.",
                    },
                    {
                      step: "02",
                      icon: Lightbulb,
                      title: "Prototype",
                      description: "Build and iterate rapidly with structured sprint frameworks.",
                    },
                    {
                      step: "03",
                      icon: Rocket,
                      title: "Launch",
                      description: "Scale to market readiness with incubation support.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-4 ${i > 0 ? "border-t border-theme-primary pt-6" : ""} ${i < 2 ? "pb-6" : ""}`}
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
                        <p className="text-sm text-theme-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Vision Section */}
        <AnimatedSection
          id="vision"
          className="bg-theme-secondary px-4 py-20 sm:px-6 md:py-28"
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
              Lamrik Labs is in active exploration of new digital ecosystems across
              emerging technologies. Our pipeline focuses on long-term product
              ownership — not trend-driven experiments.
            </motion.p>
            
            <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-sm leading-relaxed text-theme-muted sm:text-base"
              >
                <p>
                  We believe the next wave of transformative digital products will
                  emerge at the intersection of community infrastructure, creator
                  tools, and intelligent automation.
                </p>
                <p>
                  Our investment thesis centers on platforms that compound value over
                  time—building moats through network effects and user ownership.
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

        {/* Partner Section */}
        <AnimatedSection id="partner" className="px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-[1200px] text-center">
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-xs uppercase tracking-[0.2em] text-theme-muted"
            >
              Partnerships &amp; Collaborations
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold text-theme-primary sm:text-3xl md:text-4xl"
            >
              Partner with Lamrik Labs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg"
            >
              We engage with forward-thinking partners, institutions, and innovators
              to build enduring digital ecosystems. If your organization is exploring
              strategic collaboration, incubation, or investment opportunities, we
              would be glad to connect.
            </motion.p>
            
            <motion.a
              variants={fadeInUp}
              href="mailto:contact@lamrik.com"
              className="mb-10 inline-flex items-center gap-2 text-lg font-medium text-theme-gold transition-colors hover:text-theme-primary sm:text-xl"
            >
              <Mail className="h-5 w-5" />
              contact@lamrik.com
            </motion.a>

            {/* Contact Form */}
            <motion.form
              variants={scaleIn}
              onSubmit={handleSubmit}
              className="mx-auto mt-8 max-w-xl"
            >
              <TiltCard>
                <div className="card-base p-6 text-left md:p-8">
                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-8 text-center"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-theme-primary">
                        Message Sent Successfully
                      </h3>
                      <p className="text-theme-muted">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  ) : formState === "error" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-8 text-center"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                        <AlertCircle className="h-8 w-8 text-red-500" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-theme-primary">
                        Something Went Wrong
                      </h3>
                      <p className="text-theme-muted">
                        Please try again or email us directly at contact@lamrik.com
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-xs uppercase tracking-widest text-theme-muted"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="input-base"
                            placeholder="Your name"
                            disabled={formState === "submitting"}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="organization"
                            className="mb-2 block text-xs uppercase tracking-widest text-theme-muted"
                          >
                            Organization
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({ ...formData, organization: e.target.value })
                            }
                            className="input-base"
                            placeholder="Company or institution"
                            disabled={formState === "submitting"}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs uppercase tracking-widest text-theme-muted"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="input-base"
                          placeholder="you@example.com"
                          disabled={formState === "submitting"}
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="mb-2 block text-xs uppercase tracking-widest text-theme-muted"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="input-base resize-none"
                          placeholder="Tell us about your collaboration interest"
                          disabled={formState === "submitting"}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-primary flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all disabled:opacity-70"
                      >
                        {formState === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </>
                  )}
                </div>
              </TiltCard>
            </motion.form>
        </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
