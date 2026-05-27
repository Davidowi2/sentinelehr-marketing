import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#0D1117]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
        <a href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 text-white" fill="currentColor" aria-hidden="true">
  <path d="M50 5C25.1 5 5 25.1 5 50c0 11.2 4.1 21.4 10.9 29.3.6.7 1.7.5 2.1-.3 2.1-4.2 5.5-8.2 10.2-11.2 5.8-3.7 13.1-5.3 20.3-4.5 1.1.1 1.9-.8 1.7-1.9-.6-3.7-2.1-7.2-4.5-10.1-1-.1-1.9.6-2 1.6-.4 3.1-1.8 5.9-4.2 8-1.5 1.3-3.5 1.9-5.5 1.7-3.6-.4-6.2-3.6-5.8-7.2.3-2.9 2.1-5.4 4.8-6.4.9-.3 1.3-1.4.9-2.3-2.6-5.6-3.2-12.1-1.4-18.2.3-1.1-.4-2.2-1.5-2.4-1-.2-2.1.4-2.3 1.5-2.1 7.2-1.5 14.8 1.6 21.4-2.7 1.9-4.5 5.1-4.9 8.8-.6 5.2 3.1 9.9 8.3 10.5 2.7.3 5.4-.5 7.5-2.2 1.6-1.3 2.7-3.2 3.2-5.3 2.9 3.2 4.9 7.2 5.5 11.6.2 1.4-1 2.6-2.4 2.4-9.3-1.1-18.7 1-26.2 5.9-4.9 3.2-8.6 7.6-10.7 12.3-.4.9.2 1.9 1.2 2.1.2 0 .4 0 .6-.1 8.8-3.4 18.5-4.4 27.9-2.8 12.8 2.1 24.3 9.4 31.9 19.7.6.9 1.9 1 2.7.4.9-.6 1-1.9.4-2.7C75.2 83.2 62.1 75 47.7 73.1c-8.6-1.1-17.3-.1-25.3 2.8 2.2-3.5 5.2-6.5 9-8.7 6.9-4.1 15.3-5.8 23.6-4.9 1.1.1 2-.7 2.1-1.8.4-3.6 1.7-7 3.9-9.8 1.7 1.8 3.9 3.1 6.4 3.6 4 .9 8.1-.8 10.3-4.2 1.6-2.5 2-5.5 1.2-8.3-.3-1 .4-2.1 1.5-2.4 1.1-.3 2.2.4 2.5 1.5 1.1 3.9.6 8.2-1.6 11.7-2 3.2-5.4 5.2-9.1 5.4.1.6.2 1.2.2 1.8 0 1.1.9 2 2 2 13.1 0 25.5-5.9 33.7-16 .6-.8.5-2-.3-2.6-.8-.6-2-.5-2.6.3-7.5 9.2-18.7 14.6-30.7 14.6H71c-.7-2.3-2.1-4.3-4.1-5.7 2.7-2.9 4.3-6.8 4.3-11 0-8.8-7.2-16-16-16-4.8 0-9.1 2.1-12.1 5.5-.9-4.5-3-8.6-6.1-11.9.8-1.5 2.1-2.7 3.7-3.4 3.7-1.6 8.1-.7 10.9 2.2.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8-3.9-3.9-9.9-5.1-15.1-2.9-2.5 1-4.5 2.9-5.6 5.3-3.6-4.5-8.4-7.8-13.9-9.5-1-.3-2.1.2-2.4 1.2-.3 1 .2 2.1 1.2 2.4 4.8 1.5 9.1 4.3 12.3 8.1-4.5 4.1-7.1 10.1-7.1 16.4 0 5.6 2.1 10.8 5.6 14.8-.4 1-.5 2.1-.4 3.2.1 1.1 1.1 1.9 2.2 1.8 1.1-.1 1.9-1.1 1.8-2.2v-.6c2.6-3.1 4.2-7 4.2-11.3 0-5.8-2.8-11-7.1-14.3 2.5-2.7 6.1-4.4 10-4.4 7.7 0 14 6.3 14 14 0 3.3-1.1 6.3-3.1 8.7-2-2.1-4.9-3.3-7.9-3.3-6.1 0-11 4.9-11 11 0 1 .1 2 .4 3-6.9-.9-13.8.5-19.8 4.1-2.4 1.4-4.5 3.2-6.3 5.3 1.9-4.4 4.8-8.3 8.5-11.3.8-.7.9-1.9.3-2.7-.7-.8-1.9-.9-2.7-.3-4.3 3.4-7.6 7.9-9.6 13-1.6-4.3-2.4-8.9-2.4-13.6 0-22.6 18.4-41 41-41s41 18.4 41 41c0 8.2-2.4 16-6.9 22.6-.6.9-.4 2.1.5 2.7.3.2.6.3.9.3.6 0 1.3-.3 1.7-.9 5.1-7.4 7.8-16.2 7.8-25.3C95 25.1 74.9 5 50 5z"/>
  <path d="M50 20c-16.5 0-30 13.5-30 30 0 5.2 1.3 10.1 3.7 14.5.5.9 1.6 1.2 2.5.7.9-.5 1.2-1.6.7-2.5-2.1-3.9-3.2-8.3-3.2-13 0-14.3 11.7-26 26-26s26 11.7 26 26c0 10.7-6.5 20.3-16.4 24.2-.9.4-1.4 1.4-1 2.3.3.8 1.1 1.3 1.9 1.3.1 0 .3 0 .4-.1 11-4.3 18.1-15 18.1-26.9.1-16.5-13.4-30-30.1-30z"/>
</svg>
          <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="/#demo-section" className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium hidden sm:inline-block">
            Get Started
          </a>
          <Button
            onClick={() => window.location.href = "/#demo-section"}
            className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 text-sm"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">SentinelEHR Privacy Policy</h1>
            </div>
            
            <p className="text-sm text-muted-foreground mb-12">Effective Date: May 27, 2026</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Scope and Zero-PHI Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR is built specifically to interface with internal healthcare data systems (specifically Epic Clarity databases) via localized, read-only structures. Our operational architecture enforces a Zero-PHI transmission guarantee. SentinelEHR does not copy, mirror, store, or transmit Protected Health Information (PHI) outside of your local network infrastructure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Data Access and Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All behavioral auditing, anomaly detection, and access analysis are performed within your system perimeter. The platform reads raw audit logs (<code className="bg-muted px-2 py-1 rounded">ACCESS_LOG</code>, <code className="bg-muted px-2 py-1 rounded">CLARITY_EMP</code>) solely to compile risk metrics and prioritize alerts. No patient names, medical histories, diagnostic data, or financial details are extracted or archived by our processing pipelines.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information We Collect via This Marketing Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For visitors utilizing our "Request a Live Demonstration" or contact forms, we collect basic corporate metadata:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                  <li>Name</li>
                  <li>Professional/Business Email</li>
                  <li>Organization Name</li>
                  <li>Core Role/Title</li>
                  <li>IP address and browser information (automatically collected)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  This information is used strictly to coordinate platform walkthroughs and is never shared, rented, or sold to third-party marketing entities.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Information collected through our website is used to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                  <li>Schedule and conduct product demonstrations</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send relevant product updates and security advisories</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Demonstration request data is retained for 24 months from the date of submission or until you request deletion. Audit logs and security incident records related to platform usage are maintained for a minimum of six years in compliance with HIPAA requirements under 45 CFR §164.316(b)(2)(i). You may request deletion of your contact information at any time by emailing us at the address below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, contact us at david.sentinelehr@gmail.com. We will respond to verified requests within 30 days.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses essential cookies to ensure proper functionality. We do not use third-party advertising cookies or tracking pixels. Session cookies are automatically deleted when you close your browser. You can configure your browser to refuse cookies, though this may limit website functionality.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR does not share your information with third-party service providers for marketing purposes. Any third-party services used for essential operations (such as email delivery or hosting infrastructure) are bound by strict data processing agreements and are prohibited from using your data for their own purposes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Security Measures</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures including encryption in transit (TLS 1.3), access controls, regular security audits, and employee training on data protection. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but maintain commercially reasonable safeguards.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Breach Notification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of a data breach affecting your personal information, we will notify affected individuals within 72 hours of discovery as required by applicable regulations. Notifications will include the nature of the breach, types of information involved, steps taken to mitigate harm, and recommended actions for affected individuals.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child under 18, we will take steps to delete such information promptly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All data processing occurs within your local network infrastructure. Marketing website data is stored on servers located in the United States. By submitting information through our website, you consent to this storage location. We do not transfer data internationally without appropriate safeguards.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">13. Regulatory Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our architecture is meticulously mapped to comply directly with HIPAA §164.312(b) Audit Controls, §164.308(a)(1)(ii)(D) Information System Activity Review, and §164.312(d) Person or Entity Authentication. Because no sensitive patient databases are externalized, utilizing SentinelEHR minimizes your external attack surface and respects institutional BAAs (Business Associate Agreements). We also maintain compliance with applicable state privacy laws including CCPA where relevant.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">14. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated via email to registered contacts at least 30 days before taking effect. The "Effective Date" at the top of this page indicates when the policy was last revised. Continued use of our services after changes take effect constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding data processing frameworks, privacy rights requests, or security concerns, contact our security administration team at:{" "}
                  <a href="mailto:david.sentinelehr@gmail.com" className="text-primary hover:underline">
                    david.sentinelehr@gmail.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <Button onClick={() => window.location.href = "/"} className="bg-primary text-primary-foreground">
                ← Back to Home
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
