import React from "react";

export function TermsContent() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Terms of Service</p>
      <h1 className="text-4xl font-bold text-foreground mb-4">SentinelEHR Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 8, 2026</p>

      <div className="prose prose-slate max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">
            By submitting a demo request or accessing the SentinelEHR platform, you agree to these terms. If you do not agree, do not use the platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. What SentinelEHR Is</h2>
          <p className="text-muted-foreground leading-relaxed">
            SentinelEHR is a healthcare insider risk intelligence platform, currently operating in design partner phase. The platform is provided for evaluation purposes. Design partners receive access to the platform at no cost in exchange for feedback on detection accuracy and compliance workflow fit.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. No PHI Processing</h2>
          <p className="text-muted-foreground leading-relaxed">
            SentinelEHR does not store, process, or transmit patient health information. The platform analyzes access behavioral patterns only. You remain responsible for ensuring that any connection to your Epic Clarity environment complies with your organization's policies and your Epic license agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Acceptable Use</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may not attempt to access data belonging to other organizations. You may not reverse engineer, copy, or redistribute the SentinelEHR platform. You may not use the platform for any purpose other than healthcare compliance monitoring within your own organization.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            The SentinelEHR platform, detection engine, and code are the intellectual property of SentinelEHR. You retain ownership of all data you submit through the platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to terminate access to the platform at any time, for any reason, with reasonable notice where practicable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. No Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">
            The platform is provided 'as is' without warranty of any kind. We do not warrant that the platform will be uninterrupted, error-free, or that it will detect all violations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by law, SentinelEHR's liability is limited to the fees paid for the platform in the 12 months preceding any claim. SentinelEHR is not liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms are governed by the laws of the State of Delaware, United States. Any disputes will be resolved in the courts of Delaware.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these terms as the platform evolves from design partner phase toward general availability. We will notify active design partners of material changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these terms, contact{" "}
            <a href="mailto:hello@sentinelhr.org" className="text-primary hover:underline">
              hello@sentinelhr.org
            </a>.
          </p>
        </section>
      </div>
    </>
  );
}
