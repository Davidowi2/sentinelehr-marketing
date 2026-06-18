import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#0D1117]/95 backdrop-blur-md">
    <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
      <a href="/" className="flex items-center gap-2">
        <div style={{backgroundColor:'#0D1117', padding:'4px 8px', borderRadius:'6px', display:'inline-flex', alignItems:'center'}}>
          <img src="/sentinelehr-logo.png" style={{height:'32px', objectFit:'contain'}} alt="SentinelEHR logo" />
        </div>
        <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="/about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => window.location.href = "/#demo-section"} className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 text-sm">Request Demo</Button>
        </div>
    </div>
  </nav>
);

export default function HIPAABreachNotificationPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">HIPAA Breach Notification</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">HIPAA breach notification: the 60-day rule explained</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Under the HITECH Act, covered entities must notify the Secretary of HHS of a breach of unsecured PHI within 60 days of discovery. Individual notice is required within 60 days. Media notice is required for breaches affecting 500 or more individuals in a state or jurisdiction.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The regulatory framework</h2>
                <p className="text-muted-foreground leading-relaxed">The HIPAA Breach Notification Rule is codified at 45 CFR Part 164, Subpart D (§§164.400–164.414). It was enacted as part of the Health Information Technology for Economic and Clinical Health (HITECH) Act of 2009 and applies to HIPAA covered entities and their business associates. The rule establishes mandatory notification requirements when a breach of "unsecured protected health information" (PHI) is discovered.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The rule distinguishes between "secured" PHI (encrypted or destroyed per NIST standards, which falls outside the notification requirement) and "unsecured" PHI (not encrypted or rendered unreadable per HHS guidance). For most insider threat scenarios — an employee accessing records they should not access, viewing them on screen, or printing them — the PHI accessed is unsecured, and the breach notification obligations apply.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What constitutes a "breach"</h2>
                <p className="text-muted-foreground leading-relaxed">Under §164.402, a breach is defined as "the acquisition, access, use, or disclosure of protected health information in a manner not permitted under subpart E of this part [the Privacy Rule] which compromises the security or privacy of the protected health information." The Privacy Rule (45 CFR Part 164, Subpart E) prohibits use or disclosure of PHI without patient authorization except in defined circumstances.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">There is a presumption of breach: unless a covered entity can demonstrate that there is a low probability that the PHI has been compromised, the incident is treated as a breach. The low-probability exception requires a documented risk assessment considering four factors: the nature and extent of the PHI involved, who accessed it and whether the person is likely to re-identify it, whether the PHI was actually acquired or viewed, and the extent to which the risk has been mitigated.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">In the insider threat context, an employee accessing a VIP patient's record out of curiosity — with no indication the information was shared or used beyond the viewing — may qualify for the low-probability exception depending on the risk assessment. An employee who printed records and took them home does not. The burden of documenting the risk assessment and demonstrating low probability falls on the covered entity.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The 60-day clock: discovery vs. occurrence</h2>
                <p className="text-muted-foreground leading-relaxed">The notification deadlines run from the date of "discovery," not the date the breach occurred. Under §164.404(a)(2), a breach is treated as discovered "as of the first day on which such breach is known to the covered entity, or, by exercising reasonable diligence would have been known to the covered entity." This is the constructive knowledge standard: if a covered entity could have discovered the breach through reasonable monitoring and did not, the discovery clock begins when they should have known.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This standard has significant implications for compliance monitoring programs. An organization that conducts regular, documented review of EHR access logs and discovers a breach promptly has a clear discovery date. An organization that never reviews logs and only learns of a breach when a patient complains months later faces the argument that the discovery date was actually much earlier — when reasonable diligence would have revealed the breach.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">OCR has cited this standard in enforcement actions. Organizations with inadequate monitoring programs that discovered breaches late have faced scrutiny for the gap between when the breach occurred and when it was discovered, and the question of whether reasonable diligence would have surfaced it sooner.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The three notification obligations</h2>
                <p className="text-muted-foreground leading-relaxed">When a breach is confirmed, the covered entity has three separate notification obligations under different timelines:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3 mt-3">
                  <li>
                    <strong>Individual notice (§164.404):</strong> Written notice to each affected individual within 60 days of discovery. Notice must include a description of what happened, the types of PHI involved, steps the individual should take to protect themselves, what the covered entity is doing to investigate and prevent recurrence, and contact information. First-class mail is the default; email is permitted if the individual has agreed to receive notices electronically.
                  </li>
                  <li>
                    <strong>HHS notification (§164.408):</strong> For breaches affecting 500 or more individuals, simultaneous notification to HHS Secretary (via the HHS online portal) within 60 days. For breaches affecting fewer than 500 individuals, the covered entity logs the breach and submits an annual report to HHS no later than 60 days after the end of the calendar year in which the breach occurred.
                  </li>
                  <li>
                    <strong>Media notice (§164.406):</strong> For breaches affecting 500 or more individuals in a single state or jurisdiction, notice to prominent media outlets serving that state or jurisdiction within 60 days. The intent is to provide substitute notice for individuals whose contact information the covered entity may not have.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Business associate obligations</h2>
                <p className="text-muted-foreground leading-relaxed">Business associates who discover a breach must notify the covered entity "without unreasonable delay and in no case later than 60 days following the discovery of a breach" (§164.410). The covered entity's 60-day clock for notifying individuals and HHS does not begin until the covered entity itself discovers the breach or receives notification from the business associate. However, the business associate's failure to notify promptly can create liability for both parties.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">For monitoring tools that process PHI, the business associate's notification obligation is part of the BAA framework. A zero-PHI monitoring architecture — one that processes only behavioral metadata, not clinical content — may reduce or eliminate the BAA requirement, since a system that does not process PHI is not a business associate under HIPAA's definition.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The role of monitoring in breach notification compliance</h2>
                <p className="text-muted-foreground leading-relaxed">Effective EHR access monitoring directly supports breach notification compliance in two ways. First, it reduces the time between breach occurrence and discovery — earlier detection means earlier notification and reduced OCR exposure for tardiness. Second, it produces the documentation needed to support the risk assessment that determines whether notification is required at all.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">A well-documented investigation produces: the specific access events that occurred, the employee's role and care panel assignment, the risk assessment under the four-factor test, the breach/no-breach determination with rationale, and the notification steps taken if a breach was confirmed. This documentation is what OCR requests when reviewing a breach notification and is the organization's defense against a finding of inadequate response.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">SentinelEHR's case management workflow is designed to produce this documentation automatically as investigations are conducted. Each case includes an audit trail of all investigation activity, a risk assessment checklist aligned with the HIPAA four-factor test, and exportable reports suitable for HR, legal, or OCR review.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Zero-PHI monitoring and the breach surface</h2>
                <p className="text-muted-foreground leading-relaxed">A monitoring system that stores behavioral metadata rather than PHI creates a significantly smaller breach surface than one that stores clinical content. If SentinelEHR's infrastructure were compromised, the data exposed would be access patterns — employee IDs, patient IDs as integers, timestamps, action codes — not medical records. While any unauthorized access to personal information is serious, the breach notification analysis for a behavioral metadata exposure is different from a clinical record exposure.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This is one of the practical arguments for no clinical content extraction monitoring architecture: it supports HIPAA audit controls and breach notification workflows without creating an additional clinical content repository that itself represents a breach risk and requires its own safeguards under the HIPAA Security Rule.</p>
              </section>

              <section className="mb-10">
                <p className="text-muted-foreground leading-relaxed">Learn more about SentinelEHR's zero-PHI architecture at <a href="/architecture" className="text-primary hover:underline">/architecture</a>.</p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <Button onClick={() => window.location.href = "/"} className="bg-primary text-primary-foreground">← Back to Home</Button>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
