"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  company: [
    { label: "About", href: "/#about" },
    { label: "Our Approach", href: "/#how-we-build" },
    { label: "Vision", href: "/#vision" },
  ],
  platform: [
    { label: "Linkrcap", href: "https://www.linkrcap.com/", external: true },
  ],
  connect: [
    { label: "Partner with Us", href: "/#partner" },
    { label: "contact@lamrik.com", href: "mailto:contact@lamrik.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/lamriklabs", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/lamriklabs", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-theme-primary bg-theme-secondary">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block">
                <Logo size="md" />
              </Link>
              <p className="mb-4 mt-3 max-w-xs text-sm text-theme-muted">
                Technology Holding Company & Product Studio. We design, incubate, and scale digital platforms.
              </p>
              <div className="flex items-center gap-2 text-sm text-theme-muted">
                <MapPin className="h-4 w-4 text-theme-gold" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-theme-muted">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-theme-secondary transition-colors hover:text-theme-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-theme-muted">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-theme-secondary transition-colors hover:text-theme-gold"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-theme-primary bg-theme-card transition-all hover:border-theme-gold hover:bg-[var(--accent-gold-light)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-theme-muted" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-theme-muted">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-theme-secondary transition-colors hover:text-theme-primary"
                  >
                    {link.label.includes("@") && <Mail className="h-4 w-4 text-theme-gold" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-theme-primary" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-theme-muted">
              © {new Date().getFullYear()} Lamrik Labs Pvt Ltd. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-theme-subtle">
              CIN: Applied, awaiting issuance.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-theme-muted">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-theme-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
