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

export default function InsiderThreatDetectionPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Insider Threats</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">How to detect insider threats in EHR systems</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Insider threats in healthcare include snooping on VIP patients, accessing records outside care panels, off-hours access, and exfiltrating sensitive data like HIV or behavioral health records. Detection requires behavioral analysis, not just access logs.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What is an insider threat in healthcare?</h2>
                <p className="text-muted-foreground leading-relaxed">An insider threat in healthcare is any misuse of authorized access to patient health records by a current or former employee, contractor, or business associate. The distinguishing characteristic is that the actor has legitimate credentials — they are not an external hacker who bypassed security controls. They accessed the system normally, using their own login, and abused the access they were granted.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Insider threats in healthcare fall into several categories. The most common is snooping: an employee accessing records of patients who are not under their care, typically driven by curiosity — checking on a neighbor, a family member, a public figure, or a coworker. Snooping is a fireable offense and, depending on the records accessed and the employee's intent, may be reportable to OCR under the HIPAA Breach Notification Rule.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">More serious forms include data exfiltration (an employee downloading or exporting large volumes of records for financial gain or to take to a competitor), inappropriate access to specially protected records (HIV status, behavioral health notes, substance abuse treatment records — which carry additional federal protections under 42 CFR Part 2), and post-termination access by employees whose credentials were not deactivated.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Why traditional access controls are insufficient</h2>
                <p className="text-muted-foreground leading-relaxed">Role-based access controls (RBAC) are the standard mechanism for limiting what a healthcare employee can access within an EHR system. A nurse in the cardiology unit is given access to cardiology patient records. The problem is that EHR RBAC is typically coarse-grained: it controls which departments and record types an employee can access, but it cannot prevent a nurse from pulling up the records of a patient who is in the cardiology department but is not assigned to that nurse's care panel.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The "treatment relationship" test — did this employee have a legitimate clinical reason to access this patient's record? — cannot be answered by an access control policy alone. It requires post-hoc analysis: reviewing who accessed which records against the roster of patients under active care, and flagging accesses that fall outside expected patterns.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This is why audit log analysis is required in addition to access controls. The logs capture what RBAC allows but cannot prevent: the nurse who reads 47 records in a department where they're treating 3 patients, or the administrator who pulls up the record of their estranged spouse.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The detection challenge: signal vs. noise</h2>
                <p className="text-muted-foreground leading-relaxed">The core operational challenge in insider threat detection is not data collection — modern EHR systems produce detailed access logs automatically — it is signal extraction. A hospital with 500 clinical staff generates tens of thousands to hundreds of thousands of access events per day. Most of them are legitimate. Identifying the small percentage that represent genuine violations requires a filtering mechanism that goes beyond simple rule application.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Rule-based systems flag every access that meets a defined criterion: any off-hours access, any access to a sensitive record, any access by an employee outside their primary department. The problem is that these rules generate hundreds of alerts per week at most hospitals, the vast majority of which are explained by legitimate clinical activities — a nurse working a double shift, a physician reviewing a colleague's patient in an emergency, an administrator with legitimate cross-department responsibilities.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Alert fatigue — the desensitization of compliance officers to a high volume of undifferentiated alerts — is a real and well-documented problem in healthcare compliance. When every alert looks equally important, the genuine violations get lost.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Behavioral baseline analysis</h2>
                <p className="text-muted-foreground leading-relaxed">The more effective approach is behavioral baseline analysis: building a model of each employee's normal access pattern and flagging deviations from that baseline rather than violations of fixed rules. An employee who routinely works night shifts does not generate an alert for off-hours access. An employee who normally accesses 20 records per day triggers an alert when they access 200. An employee who has never accessed the oncology floor generates an alert when they access 15 oncology patients in one afternoon.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Machine learning models such as Isolation Forest are well-suited to this problem. Isolation Forest identifies anomalous data points by measuring how easily they can be isolated from the rest of the dataset — anomalies require fewer splits to isolate, reflecting their statistical unusualness relative to the baseline population. Applied to EHR access logs, it assigns an anomaly score to each access event or cluster of events, which can be combined with rule-based signals to produce a composite risk score.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The key advantage of the baseline approach is personalization: the "normal" threshold for each employee reflects their actual behavior, not a one-size-fits-all organizational average. A hospitalist who legitimately accesses 80 patients per day does not generate daily alerts. A receptionist who accesses 80 patients in a day triggers immediate review.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">High-risk categories requiring elevated monitoring</h2>
                <p className="text-muted-foreground leading-relaxed">Certain categories of records warrant elevated monitoring priority regardless of behavioral baseline analysis:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>VIP patients:</strong> Public figures, hospital employees, executives, and others whose records are high-profile targets for snooping. Many EHR systems allow records to be flagged; access to flagged records should trigger heightened scrutiny regardless of the employee's role.</li>
                  <li><strong>HIV/AIDS records:</strong> Protected under many state laws and the federal ADA, in addition to HIPAA. Unauthorized disclosure carries penalties beyond the standard HIPAA framework.</li>
                  <li><strong>Behavioral health records:</strong> Separately protected under many state statutes, with access restrictions beyond standard clinical records.</li>
                  <li><strong>Substance abuse treatment records:</strong> Protected under 42 CFR Part 2, which imposes stricter disclosure restrictions than HIPAA in most circumstances.</li>
                  <li><strong>Reproductive health records:</strong> Some states have enacted laws providing additional protections for reproductive health data.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">Access to any of these record categories by an employee without a clear treatment relationship is not merely a policy violation — it may be a HIPAA reportable breach, a violation of state law, or both.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Investigation and documentation</h2>
                <p className="text-muted-foreground leading-relaxed">Detection is only half the problem. When a potential insider threat is identified, the compliance officer must investigate, document findings, make a determination of breach or non-breach, and — if a breach occurred — initiate the notification process under HIPAA's Breach Notification Rule. This process must be documented in a way that is defensible to OCR if the breach is later reported or investigated.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Good investigation documentation includes: the specific access events that triggered the alert, the employee's role and patient assignment at the time of access, any contextual factors reviewed (shift records, team assignments, previous incidents), the compliance officer's determination and rationale, and any HR or legal escalation that occurred. This documentation becomes the evidence trail if the employee contests a disciplinary action or if OCR requests records during a compliance review.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">SentinelEHR's zero-PHI detection approach</h2>
                <p className="text-muted-foreground leading-relaxed">SentinelEHR approaches insider threat detection with a zero-PHI architecture. The detection engine operates exclusively on behavioral metadata: who accessed what (as integer identifiers), when, from where, and what type of action was performed. Patient record content — names, clinical notes, diagnoses, medications — never leaves the hospital's environment and is never processed by the detection system. The monitoring tool cannot see what is in the records it monitors, only the patterns of who is accessing them.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This architecture matters for two reasons. First, it reduces the implementation barrier: the hospital's IT team can review the extractor script (open source, readable by anyone) and verify exactly what data leaves the network before any deployment decision. Second, it reduces the compliance surface area: a monitoring tool that processes only behavioral metadata does not create a secondary PHI repository subject to HIPAA safeguard requirements.</p>
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
