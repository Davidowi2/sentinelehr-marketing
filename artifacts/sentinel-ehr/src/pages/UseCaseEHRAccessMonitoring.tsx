import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCanonical } from "@/lib/useCanonical";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#0D1117]/95 backdrop-blur-md">
    <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
      <a href="/" className="flex items-center gap-2">
        <img src="/sentinelehr-logo.png" style={{height:'36px', objectFit:'contain'}} alt="SentinelEHR logo" />
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

export default function EHRAccessMonitoringPage() {
  useCanonical("/use-cases/EHR-access-monitoring");
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">EHR Monitoring</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">EHR access monitoring: a guide for compliance officers</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">EHR access monitoring is the daily practice of reviewing who accessed which patient records, flagging anomalies, investigating cases, and documenting findings for HIPAA audit trails.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What EHR access monitoring involves</h2>
                <p className="text-muted-foreground leading-relaxed">Electronic health record access monitoring is the systematic review of who accessed patient records within an EHR system, with the goal of identifying access that was unauthorized, inappropriate, or potentially abusive. In an Epic environment, the primary data source is the ACCESS_LOG table in the Epic Clarity database, which captures every instance of a user opening a patient record: the user's identifier, the patient's identifier, the timestamp, the action type (view, edit, print, etc.), and the workstation or application from which the access occurred.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">For compliance officers, EHR access monitoring is a daily operational responsibility, not a periodic audit activity. The HIPAA Security Rule requires covered entities to implement mechanisms that record and examine activity in systems containing ePHI (§164.312(b)). The emphasis on "examine" — not just record — means that logging alone is insufficient. Regular, documented review is required.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The data sources: what Epic captures</h2>
                <p className="text-muted-foreground leading-relaxed">Epic's Clarity database is the reporting layer of the Epic EHR platform, populated from the operational Chronicles database via a nightly ETL process. The tables most relevant to access monitoring include:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>ACCESS_LOG:</strong> The primary audit table, recording individual access events. Key fields include user ID, patient ID, access time, action code, and workstation.</li>
                  <li><strong>CLARITY_EMP:</strong> Employee reference data, including name, department, role, and shift information. Used to build behavioral baselines and determine out-of-department access.</li>
                  <li><strong>PAT_ENC:</strong> Encounter and provider assignment data, used to determine whether a patient was in an employee's active care panel at the time of access.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">Together, these tables allow a monitoring system to answer the core question: was this employee's access to this patient's record consistent with a clinical treatment relationship? An access event where the patient was not assigned to the employee's department, was not under the employee's care, and occurred outside the employee's normal shift hours is a candidate for review.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What to flag: the eight core detection patterns</h2>
                <p className="text-muted-foreground leading-relaxed">Effective EHR access monitoring typically applies a combination of rule-based and behavioral detection. Common detection patterns include:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>Out-of-panel access:</strong> Employee accesses a patient not in their active care panel.</li>
                  <li><strong>Sensitive record access:</strong> Access to records flagged as VIP, HIV-related, behavioral health, or substance abuse treatment.</li>
                  <li><strong>Off-hours access:</strong> Access occurring outside the employee's established shift window.</li>
                  <li><strong>Bulk access:</strong> Accessing an unusually high number of records within a short time window.</li>
                  <li><strong>Cross-department access:</strong> Access to records in a department entirely unrelated to the employee's role.</li>
                  <li><strong>Terminated employee access:</strong> Access by an employee whose employment has ended or whose credentials should have been deactivated.</li>
                  <li><strong>Self or family access:</strong> An employee accessing their own record, a known family member's record, or a colleague's record.</li>
                  <li><strong>Repeated access without clinical context:</strong> An employee returning to the same non-panel patient's record multiple times without any clinical activity associated with those visits.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Building behavioral baselines</h2>
                <p className="text-muted-foreground leading-relaxed">Rule-based detection alone generates significant false positive rates, because legitimate clinical behavior varies widely between employees. A hospitalist who legitimately accesses 60 patients per day looks like a data exfiltrator under a simple volume threshold. A float nurse who works in multiple departments on different days generates cross-department flags constantly.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Behavioral baselines solve this by personalizing the detection threshold. After an initial calibration period (typically 7–14 days of access history), the system learns each employee's normal pattern: their usual departments, typical daily volume, shift schedule, and access frequency per patient. Alerts are generated when an employee's behavior deviates significantly from their own baseline — not from a population average.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This reduces false positives substantially while maintaining sensitivity to genuine anomalies. The float nurse doesn't trigger alerts for cross-department access because their baseline reflects their multi-department role. The receptionist who accesses 50 clinical records in a day (well below the hospitalist's baseline) triggers an alert because it's far above their own baseline.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The investigation workflow</h2>
                <p className="text-muted-foreground leading-relaxed">When a monitoring system surfaces an alert, the compliance officer's job is to investigate, document, and determine whether a breach occurred. A good investigation workflow includes:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li>Reviewing the specific access events that triggered the alert, with full context (time, records accessed, employee role and assignment)</li>
                  <li>Checking whether any clinical context explains the access (shift assignment, ad hoc consultation, patient transfer)</li>
                  <li>Interviewing the employee if context does not provide a clear explanation</li>
                  <li>Documenting the investigation: what was reviewed, what was found, what was determined, and why</li>
                  <li>Making a breach/no-breach determination and documenting the rationale</li>
                  <li>Escalating to HR or legal if a breach is confirmed, and initiating the notification process if required</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">All of these steps should be captured in a case management system that produces a defensible audit trail. If the case is later reviewed by OCR — in a complaint investigation, a breach report follow-up, or a Phase 2 audit — the organization needs to be able to produce a complete record of what happened and how it was handled.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Practical constraints for small compliance teams</h2>
                <p className="text-muted-foreground leading-relaxed">Many community hospitals and FQHCs operate with compliance teams of 1–3 people, often with responsibilities that extend well beyond EHR access monitoring. For these teams, manual log review is not a viable option at scale. A compliance officer with a 40-hour week who spends 10 hours per week on access log review still cannot meaningfully review more than a small fraction of the access events generated at a medium-size facility.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The practical goal for a small team is not zero-miss detection — which is unachievable — but documented, defensible, systematic review. A compliance program that processes all access logs through automated detection, reviews all surfaced alerts with documented outcomes, and maintains a complete investigation record satisfies the §164.312(b) "examine" requirement and demonstrates due diligence to OCR, even if not every individual access event receives manual review.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">SentinelEHR as an EHR access monitoring tool</h2>
                <p className="text-muted-foreground leading-relaxed">SentinelEHR is built specifically for compliance teams of 1–3 people at community hospitals and FQHCs. It connects to Epic Clarity with read-only credentials, extracts behavioral metadata (not clinical content), and applies behavioral analysis plus rule-based detection to produce a prioritized, plain-English alert queue. Investigations are documented within the platform and exportable as HR-ready reports. The no clinical content extraction architecture means the monitoring system itself does not create a new PHI repository — only behavioral metadata (access patterns, not record content) leaves the hospital's environment.</p>
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
