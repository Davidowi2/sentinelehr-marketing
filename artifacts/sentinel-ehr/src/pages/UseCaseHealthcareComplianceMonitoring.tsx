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
      <div className="flex items-center gap-3">
        <Button onClick={() => window.location.href = "/#demo-section"} className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 text-sm">Request Demo</Button>
      </div>
    </div>
  </nav>
);

export default function HealthcareComplianceMonitoringPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Healthcare Compliance</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">What is healthcare compliance monitoring?</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Healthcare compliance monitoring is the systematic review of how staff access and use patient health records inside an electronic health record system, to detect unauthorized access that violates HIPAA, state privacy laws, or internal policy.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Definition and scope</h2>
                <p className="text-muted-foreground leading-relaxed">Healthcare compliance monitoring refers to the ongoing process of reviewing electronic health record (EHR) access logs to identify access that is unauthorized, inappropriate, or potentially abusive. It is a required component of HIPAA's Technical Safeguard requirements under 45 CFR §164.312(b), which mandates that covered entities implement mechanisms to record and examine activity in systems containing electronic protected health information (ePHI).</p>
                <p className="text-muted-foreground leading-relaxed mt-4">In practice, compliance monitoring means answering a specific question on a continuous basis: did any employee access a patient record they had no clinical reason to access? That question sounds simple. At a hospital with hundreds of employees and tens of thousands of access events per day, answering it without automated tooling is operationally impossible.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Why it matters</h2>
                <p className="text-muted-foreground leading-relaxed">Unauthorized access to patient records is one of the most common categories of healthcare privacy violation. The HHS Office for Civil Rights (OCR) receives thousands of breach reports annually, many involving workforce members accessing records without authorization — sometimes out of curiosity, sometimes due to personal relationships with patients, and sometimes for financial or other malicious purposes.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The consequences of discovered violations include OCR civil monetary penalties, state attorney general enforcement actions, reputational damage, and — in severe cases — criminal charges under HIPAA. For covered entities, the obligation to monitor is not optional. The question is only how effectively it is done.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Beyond regulatory penalties, there is a patient trust dimension. Patients who discover that a hospital employee accessed their HIV status, behavioral health notes, or substance abuse records without authorization are not just potential complainants — they are patients who may lose trust in the institution and disengage from care.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What compliance monitoring covers</h2>
                <p className="text-muted-foreground leading-relaxed">Effective healthcare compliance monitoring typically covers several categories of access behavior:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>Out-of-panel access:</strong> An employee accessing records of patients who are not under their care or in their department.</li>
                  <li><strong>VIP and sensitive record access:</strong> Access to records flagged as high-profile (public figures, employees, executives) or specially protected (HIV, behavioral health, substance abuse treatment).</li>
                  <li><strong>Off-hours access:</strong> Access occurring outside an employee's normal shift pattern, which may indicate unauthorized remote access or credential compromise.</li>
                  <li><strong>Bulk access:</strong> An employee accessing an unusually large number of records in a short period, which may indicate data exfiltration.</li>
                  <li><strong>Cross-department snooping:</strong> Access to records in departments entirely unrelated to the employee's role.</li>
                  <li><strong>Post-termination access:</strong> Access by employees whose credentials were not properly deactivated after leaving the organization.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The challenge for compliance teams</h2>
                <p className="text-muted-foreground leading-relaxed">Most healthcare organizations run Epic, Cerner, or another major EHR that produces detailed audit logs. The problem is not data availability — it is scale and signal-to-noise ratio. A mid-size community hospital with 500 clinical staff might generate 50,000 to 200,000 access events per day. Manual review of these logs is not feasible for a compliance team of 1–3 people.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Legacy approaches — periodic sampling, ad hoc queries, spreadsheet-based review — leave large blind spots. Alert fatigue is a real operational problem: when monitoring tools generate hundreds of undifferentiated flags per week, compliance officers spend their time triaging noise rather than investigating real risk. The violations that matter get buried.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Effective compliance monitoring requires prioritization. Not all access anomalies are equal. An employee accessing a celebrity patient's record once is a different risk profile than an employee exporting 3,000 records over a weekend. A monitoring system needs to rank alerts by severity and provide context that allows a compliance officer to make a quick, informed judgment.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The role of behavioral analysis</h2>
                <p className="text-muted-foreground leading-relaxed">Modern compliance monitoring systems go beyond simple rule-based alerting to incorporate behavioral baseline analysis. Rather than flagging every out-of-panel access, a behavioral system learns each employee's normal access pattern — their typical departments, their usual hours, their typical volume of record access — and flags deviations from that baseline. This dramatically reduces false positive rates and surfaces anomalies that rule-based systems miss.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Isolation Forest and similar machine learning approaches are well-suited to this problem. They identify data points that are statistically anomalous relative to a learned baseline, without requiring labeled training data or pre-specified rules for every violation type.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Privacy architecture considerations</h2>
                <p className="text-muted-foreground leading-relaxed">A monitoring tool that analyzes EHR access necessarily interfaces with healthcare data infrastructure. The architecture of that interface matters significantly from a compliance and procurement standpoint. There are two broad approaches: tools that extract and store patient-level data externally, and tools that extract and analyze behavioral metadata only.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Behavioral metadata includes: employee identifiers, patient identifiers (as integers), access timestamps, action types, and department codes. It does not include patient names, clinical notes, diagnoses, medications, or any content from the medical record. A monitoring tool that operates exclusively on behavioral metadata can provide complete access analysis without creating a secondary repository of PHI — which would itself be subject to HIPAA safeguard requirements and expand the organization's compliance surface area.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">SentinelEHR's approach</h2>
                <p className="text-muted-foreground leading-relaxed">SentinelEHR is a healthcare compliance monitoring platform built specifically for community hospitals and federally qualified health centers. It uses a zero-PHI architecture: a lightweight Python extractor script runs inside the hospital's network with read-only SQL credentials, extracts behavioral metadata from Epic Clarity tables (ACCESS_LOG, CLARITY_EMP, PAT_ENC), and sends that metadata — not patient record content — to the detection pipeline. Patient record content never leaves the hospital's environment.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The detection engine applies an Isolation Forest ML model against each employee's behavioral baseline, combined with eight configurable detection rules covering out-of-panel access, VIP record access, off-hours patterns, bulk exports, and cross-department snooping. Alerts are ranked by severity and presented to the compliance officer with plain-English explanations — no data science background required to interpret them.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">SentinelEHR is currently in design partner phase, working with community health centers to validate detection accuracy against real Epic environments.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">Healthcare compliance monitoring is a required operational practice under HIPAA, not an optional investment. The challenge for most compliance teams is not access to audit log data — EHR systems produce it abundantly — but the ability to process that data at scale, surface genuine risk, and document investigations in a defensible way. Behavioral analysis and zero-PHI monitoring architectures represent the current state of the art for this problem.</p>
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
