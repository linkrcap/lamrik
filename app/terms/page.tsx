import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Lamrik Labs Pvt Ltd. Read our terms and conditions for using our website and services.",
  alternates: {
    canonical: "https://lamrik.com/terms",
  },
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-theme-muted">
            Last updated: December 3, 2025
          </p>
        </header>

        {/* Content */}
        <article className="prose-custom space-y-8 text-theme-secondary">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              Welcome to Lamrik Labs Pvt Ltd (&quot;Lamrik Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website at lamrik.com (&quot;Website&quot;) and any services offered by Lamrik Labs (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
            </p>
            <p className="leading-relaxed">
              If you do not agree to these Terms, please do not use our Website or Services. We reserve the right to modify these Terms at any time, and your continued use of the Website constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              2. About Lamrik Labs
            </h2>
            <p className="leading-relaxed">
              Lamrik Labs Pvt Ltd is a technology holding company and product innovation studio headquartered in Hyderabad, Telangana, India. We design, incubate, and scale digital platforms for creators, communities, and institutions.
            </p>
            <p className="leading-relaxed">
              Our flagship platform, Linkrcap, provides innovation sprints, prototype building, and structured incubation pathways for emerging ventures.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              3. Use of Website and Services
            </h2>
            
            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              3.1 Eligibility
            </h3>
            <p className="leading-relaxed">
              You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our Services. By using our Website, you represent and warrant that you meet these requirements.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              3.2 Permitted Use
            </h3>
            <p className="leading-relaxed">
              You agree to use our Website and Services only for lawful purposes and in accordance with these Terms. You shall not:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Website or Services</li>
              <li>Use automated systems to access the Website without permission</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              4. Intellectual Property Rights
            </h2>
            
            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              4.1 Our Intellectual Property
            </h3>
            <p className="leading-relaxed">
              All content, features, and functionality on our Website, including but not limited to text, graphics, logos, trademarks, images, software, and design elements, are owned by Lamrik Labs Pvt Ltd or our licensors and are protected by intellectual property laws.
            </p>
            <p className="leading-relaxed">
              The &quot;Lamrik Labs&quot; name, logo, and all related marks are trademarks of Lamrik Labs Pvt Ltd. You may not use our trademarks without our prior written consent.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-theme-primary">
              4.2 Limited License
            </h3>
            <p className="leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Website for personal or internal business purposes. This license does not include the right to modify, reproduce, distribute, or create derivative works from our content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              5. User Submissions
            </h2>
            <p className="leading-relaxed">
              When you submit information through our contact forms or other communication channels, you grant us a non-exclusive, royalty-free license to use, process, and respond to your submissions for the purposes of providing our Services and evaluating potential partnerships.
            </p>
            <p className="leading-relaxed">
              You represent that you have the right to share any information you submit and that such information does not violate any third-party rights or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              6. Confidentiality
            </h2>
            <p className="leading-relaxed">
              Any business discussions, partnership proposals, or proprietary information shared between parties shall be treated as confidential. Neither party shall disclose confidential information to third parties without prior written consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              7. Disclaimer of Warranties
            </h2>
            <p className="leading-relaxed">
              OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="leading-relaxed">
              We do not warrant that our Website will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We make no representations regarding the accuracy, reliability, or completeness of any content on our Website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              8. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LAMRIK LABS PVT LTD, ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF OUR WEBSITE OR SERVICES.
            </p>
            <p className="leading-relaxed">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              9. Indemnification
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless Lamrik Labs Pvt Ltd, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or related to:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>Your use of our Website or Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or information you submit</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              10. Third-Party Links and Services
            </h2>
            <p className="leading-relaxed">
              Our Website may contain links to third-party websites or services, including our subsidiary platform Linkrcap. We are not responsible for the content, privacy practices, or terms of these external sites. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              12. Dispute Resolution
            </h2>
            <p className="leading-relaxed">
              Before initiating any legal proceedings, parties agree to attempt to resolve disputes through good-faith negotiation. If a dispute cannot be resolved within thirty (30) days, either party may pursue arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India, with the seat of arbitration in Hyderabad.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              13. Termination
            </h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your access to our Website and Services at any time, with or without cause, and with or without notice. Upon termination, your right to use our Website and Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              14. Severability
            </h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              15. Entire Agreement
            </h2>
            <p className="leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Lamrik Labs Pvt Ltd regarding your use of our Website and Services, and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-theme-primary">
              16. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about these Terms of Service, please contact us:
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
            <Link href="/privacy" className="hover:text-theme-primary">
              Privacy Policy
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

