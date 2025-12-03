import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lamrik Labs Pvt Ltd. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://lamrik.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary">
      <div className="mx-auto max-w-[800px] px-4 py-16 sm:px-6 md:py-24">
        {/* Back Link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-theme-muted transition-colors hover:text-theme-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-semibold text-theme-primary md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-theme-muted">
            Last updated: December 3, 2025
          </p>
        </header>

        {/* Content */}
        <article className="prose-custom space-y-8 text-theme-secondary">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Lamrik Labs Pvt Ltd (&quot;Lamrik Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lamrik.com and use our services.
            </p>
            <p className="leading-relaxed">
              We are headquartered in Hyderabad, Telangana, India, and operate in compliance with applicable data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              2. Information We Collect
            </h2>
            
            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              2.1 Personal Information
            </h3>
            <p className="leading-relaxed">
              When you contact us or use our services, we may collect personal information that you voluntarily provide, including:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>Name and contact information (email address, phone number)</li>
              <li>Organization or company name</li>
              <li>Professional title or role</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide in correspondence</li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              2.2 Automatically Collected Information
            </h3>
            <p className="leading-relaxed">
              When you access our website, we may automatically collect certain information, including:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and approximate geographic location</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To evaluate partnership and collaboration opportunities</li>
              <li>To improve our website and services</li>
              <li>To send administrative communications</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              4. Information Sharing and Disclosure
            </h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and services</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              5. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              6. Data Retention
            </h2>
            <p className="leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              7. Your Rights
            </h2>
            <p className="leading-relaxed">
              Under applicable data protection laws, you may have the following rights:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
              <li><strong>Grievance Redressal:</strong> Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:contact@lamrik.com" className="text-theme-gold hover:underline">
                contact@lamrik.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              9. Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites, including our subsidiary platform Linkrcap (linkrcap.com). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              10. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              11. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              12. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 rounded-xl border border-theme-primary bg-theme-card p-6">
              <p className="font-medium text-theme-primary">Lamrik Labs Pvt Ltd</p>
              <p className="mt-2 text-theme-muted">Hyderabad, Telangana, India</p>
              <p className="mt-2">
                <a href="mailto:contact@lamrik.com" className="text-theme-gold hover:underline">
                  contact@lamrik.com
                </a>
              </p>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <footer className="mt-16 border-t border-theme-primary pt-8">
          <div className="flex flex-wrap gap-6 text-sm text-theme-muted">
            <Link href="/" className="hover:text-theme-primary">
              Home
            </Link>
            <Link href="/terms" className="hover:text-theme-primary">
              Terms of Service
            </Link>
            <a href="mailto:contact@lamrik.com" className="hover:text-theme-primary">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

