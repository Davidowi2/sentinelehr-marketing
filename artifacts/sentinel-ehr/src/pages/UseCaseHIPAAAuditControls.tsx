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

export default function HIPAAAuditControlsPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">HIPAA Compliance</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">HIPAA §164.312(b): Audit Controls Explained</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">HIPAA Technical Safeguard §164.312(b) requires covered entities to implement hardware, software, and procedural mechanisms that record and examine activity in information systems containing electronic protected health information.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The regulatory text</h2>
                <p className="text-muted-foreground leading-relaxed">45 CFR §164.312(b) reads: "Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information." This is one of five required Technical Safeguards under the HIPAA Security Rule. Unlike some Security Rule provisions, audit controls is not an addressable standard — it is required. Every covered entity and business associate must implement it.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The regulation is deliberately technology-neutral. It does not specify what form the audit mechanism must take, how frequently logs must be reviewed, or what a covered entity must do when an anomaly is found. The guidance from HHS is that covered entities must document their approach, implement it consistently, and be able to demonstrate compliance during an OCR audit or investigation.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What "record and examine" means in practice</h2>
                <p className="text-muted-foreground leading-relaxed">The two-part obligation — record and examine — is important. Recording alone is insufficient. A covered entity that captures detailed audit logs but never reviews them for anomalies has not satisfied the standard. OCR has cited organizations in enforcement actions specifically for failing to conduct regular reviews of their audit logs, not merely for failing to capture them.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Examination means active, regular review with a documented process. That process should include: what triggers a review, how frequently baseline reviews occur, who is responsible for reviewing, how findings are documented, and what escalation path exists when a potential violation is identified.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">In the context of EHR systems, the most relevant audit data is the access log: a record of every instance in which an employee accessed a patient record, including the employee identifier, the patient identifier, the time of access, the type of action performed, and the workstation or location from which access occurred. Epic's implementation of this is the ACCESS_LOG table in the Epic Clarity database.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The scale problem</h2>
                <p className="text-muted-foreground leading-relaxed">A compliance team attempting to satisfy §164.312(b) through manual log review faces an operational impossibility at most healthcare organizations. A 300-bed community hospital with 400 clinical staff may generate between 30,000 and 150,000 EHR access events per day. Weekly manual review of a week's worth of logs — even a statistical sample — is a full-time job, and sampling introduces the risk of missing systematic violations that occur on an irregular schedule.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This is why automated compliance monitoring tools exist. They apply rules and anomaly detection against the full access log, reduce the review surface to a prioritized alert queue, and allow a compliance officer to focus investigative time on the cases most likely to represent genuine violations.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">OCR enforcement and audit controls</h2>
                <p className="text-muted-foreground leading-relaxed">OCR enforcement actions frequently cite failures related to audit controls. The most common pattern involves an organization that had audit logging enabled in their EHR system but had no regular review process — and a violation was only discovered after a patient complaint or media report, months or years after the unauthorized access occurred. At that point, the audit log evidence is available, but the organization faces scrutiny for the time elapsed and the lack of proactive monitoring.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">OCR's Phase 2 audit protocol specifically examines whether covered entities have implemented audit controls and whether they conduct regular reviews. Organizations subject to a Phase 2 desk audit are asked to produce policies, procedures, and evidence of log review activity. A policy without documented evidence of review creates vulnerability.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What a defensible audit control program looks like</h2>
                <p className="text-muted-foreground leading-relaxed">A defensible §164.312(b) program has several components:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>Comprehensive logging:</strong> All access to ePHI-containing systems is logged, including workstation access, remote access, and administrative access.</li>
                  <li><strong>Regular automated review:</strong> Logs are processed automatically against defined rules and behavioral baselines, not just stored. Review occurs at least weekly, ideally continuously.</li>
                  <li><strong>Prioritized alert queue:</strong> Anomalies are surfaced to a responsible person with context sufficient to make an investigation decision.</li>
                  <li><strong>Documented investigation process:</strong> When an alert is reviewed, the review is documented: who reviewed it, what was found, what action was taken, and why.</li>
                  <li><strong>Escalation path:</strong> Clear procedures for escalating potential violations to HR, legal, or law enforcement as appropriate.</li>
                  <li><strong>Retention policy:</strong> Audit logs and investigation records are retained for a minimum of six years per HIPAA's documentation requirement (45 CFR §164.316(b)(2)(i)).</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Audit controls and the breach notification clock</h2>
                <p className="text-muted-foreground leading-relaxed">§164.312(b) has a direct relationship with HIPAA's Breach Notification Rule (45 CFR Part 164, Subpart D). When a breach of unsecured PHI is discovered, the 60-day clock for notifying affected individuals and HHS begins running. The date of discovery — not the date the breach occurred — starts the clock. A robust audit control program can compress the time between breach occurrence and discovery, which is both a regulatory and an ethical obligation.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">An organization that reviews logs daily catches a violation sooner than one that reviews monthly. Earlier detection means earlier notification, lower OCR exposure (tardiness is itself a violation under §164.412), and a shorter window during which the affected patient remains unaware that their records were accessed without authorization.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">How SentinelEHR supports §164.312(b) workflows</h2>
                <p className="text-muted-foreground leading-relaxed">SentinelEHR is designed to support HIPAA §164.312(b) audit control workflows. It provides automated, continuous monitoring of Epic access logs, a ranked and explained alert queue, a case management workflow for documenting investigations, and exportable audit trail reports for OCR or internal review. The platform does not claim HIPAA certification — compliance is the covered entity's responsibility — but it provides the tooling a compliance team needs to demonstrate active, documented audit control activity.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Critically, SentinelEHR uses a zero-PHI architecture. The monitoring system analyzes behavioral metadata — access patterns, not record content — so implementing the monitoring tool does not create a new PHI repository subject to its own safeguard requirements. This matters for organizations evaluating whether a third-party monitoring tool requires a Business Associate Agreement and what additional compliance obligations it creates.</p>
              </section>

              <section className="mb-10">
                <p className="text-muted-foreground leading-relaxed">Learn more about SentinelEHR's architecture at <a href="/architecture" className="text-primary hover:underline">/architecture</a>.</p>
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
