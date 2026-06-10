import React from "react";

export function PrivacyContent() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Privacy Policy</p>
      <h1 className="text-4xl font-bold text-foreground mb-4">SentinelEHR Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 8, 2026</p>

      <div className="prose prose-slate max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            SentinelEHR is a healthcare insider risk intelligence platform. We are currently operating in design partner phase. Contact:{" "}
            <a href="mailto:hello@sentinelhr.org" className="text-primary hover:underline">hello@sentinelhr.org</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. What Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit a demo request through our website, we collect: your full name, your business email address, your organization name, your role (if provided), your EHR system (if provided), your compliance team size (if provided), and any free-text responses to survey questions.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We do not collect, store, or process any patient health information through this website or through the SentinelEHR platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use your contact information solely to respond to your demo request and provide sandbox access to the SentinelEHR platform. We do not use your information for marketing, we do not sell it, and we do not share it with third parties except as described below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Third Parties</h2>
          <p className="text-muted-foreground leading-relaxed">
            Demo request forms on this website are processed by Formspree (formspree.io). When you submit a form, your information passes through Formspree's servers before reaching us. Formspree's privacy policy is available at{" "}
            <a href="https://formspree.io/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              formspree.io/legal/privacy-policy
            </a>. We do not use any advertising networks, tracking pixels, or analytics services on this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Server Logs</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our web server retains IP addresses in standard access logs for 30 days for security and abuse prevention. These logs are not shared with third parties and are not used for marketing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website does not use tracking cookies. We use only first-party cookies that are necessary for the site to function. No third-party cookies are set.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your contact information for as long as necessary to conduct our design partner evaluation process. You may request deletion of your information at any time by emailing us and we will remove it within 14 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access to, correction of, or deletion of your personal information at any time by contacting us directly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use industry-standard security measures to protect your information. Demo form submissions are transmitted over HTTPS. Our server is hosted on infrastructure with restricted access.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this privacy policy as our practices evolve. We will notify active design partners of material changes via email.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about this privacy policy, contact{" "}
            <a href="mailto:hello@sentinelhr.org" className="text-primary hover:underline">
              hello@sentinelhr.org
            </a>.
          </p>
        </section>
      </div>
    </>
  );
}
