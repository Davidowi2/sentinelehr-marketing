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

export default function EpicClarityExtractorPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Epic Integration</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">What is an Epic Clarity extractor?</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">An Epic Clarity extractor is a script that reads behavioral metadata from the Epic Clarity database — system tables like ACCESS_LOG — and sends it to a monitoring system for analysis. The extractor runs inside the hospital's network with read-only credentials.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Epic Clarity: the reporting layer</h2>
                <p className="text-muted-foreground leading-relaxed">Epic is the dominant EHR platform in US hospitals, used by over 350 health systems. The Epic platform has two main database layers: Chronicles (the operational database, which stores real-time clinical data in a proprietary format) and Clarity (a relational SQL database populated nightly from Chronicles via an ETL process, designed for reporting and analytics).</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Clarity is a standard SQL Server or Oracle database, accessible via standard SQL query tools with appropriate credentials. For compliance monitoring purposes, the most important tables are those that track user activity rather than clinical content: ACCESS_LOG (the audit trail of who accessed which records), CLARITY_EMP (employee reference data), and PAT_ENC (patient encounter and provider relationship data).</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What an extractor does</h2>
                <p className="text-muted-foreground leading-relaxed">A Clarity extractor is a script — typically written in Python or SQL — that executes SELECT queries against the Clarity database to retrieve behavioral metadata, then formats and transmits that data to an external system for analysis. The key design constraints for a compliant extractor are:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li><strong>Read-only access:</strong> The extractor credentials have SELECT permissions only. The script cannot modify, delete, or insert data in the Clarity database.</li>
                  <li><strong>Incremental extraction:</strong> The extractor tracks its last successful sync timestamp and retrieves only records newer than that timestamp, minimizing database load and network bandwidth.</li>
                  <li><strong>Metadata only:</strong> A zero-PHI extractor queries only system metadata tables (ACCESS_LOG, CLARITY_EMP, PAT_ENC) and extracts only behavioral fields (identifiers, timestamps, action codes, department codes). It does not query clinical content tables (CLARITY_PATIENT, problem_list, medications, notes).</li>
                  <li><strong>Outbound only:</strong> The extractor initiates an outbound HTTPS connection to the monitoring system's API. It does not open an inbound port on the hospital's firewall, which is a significant procurement advantage.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The architecture decision: inbound vs. outbound</h2>
                <p className="text-muted-foreground leading-relaxed">There are two broad architectures for connecting an external monitoring system to an EHR database. The first — inbound connection — has the external system connect directly to the hospital's database over a VPN or dedicated connection. The second — outbound extraction — has a script inside the hospital's network push data outward to the external system.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The outbound extractor approach is strongly preferred in hospital IT environments for a simple reason: it does not require the hospital's IT team to open an inbound firewall port to an external server. Opening inbound ports to production clinical infrastructure is a high bar in most hospital security policies, requiring security review, change management approval, and ongoing network monitoring. An outbound-only extractor sidesteps this entirely — the hospital's network initiates all connections, and the firewall rules remain unchanged.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">This architecture difference is often the deciding factor in whether a compliance monitoring product can actually be deployed in a hospital environment, especially at community hospitals and FQHCs where IT resources are limited and change management processes are conservative.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What fields a metadata-only extractor retrieves</h2>
                <p className="text-muted-foreground leading-relaxed">A zero-PHI extractor retrieves only the fields necessary to perform behavioral analysis. For each access event, the relevant fields are:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
                  <li>audit_id — unique identifier for the access event</li>
                  <li>emp_id — employee identifier (integer), links to CLARITY_EMP</li>
                  <li>pat_id — patient identifier (integer), links to patient tables for flag lookup only</li>
                  <li>action_c — action type code (integer, 1–11 in standard Epic configurations)</li>
                  <li>action_datetime — timestamp of the access event</li>
                  <li>dept_id — department identifier at time of access</li>
                  <li>in_panel — derived boolean: was the patient in this employee's active care panel?</li>
                  <li>is_vip_access — derived boolean: was the patient VIP-flagged in the EHR?</li>
                  <li>is_sensitive_access — derived boolean: was the record sensitive (HIV, behavioral health)?</li>
                  <li>is_known_user — derived boolean: does this employee ID exist in CLARITY_EMP?</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">Note what is absent: no patient names, no dates of birth, no medical record numbers, no clinical notes, no diagnoses, no medications, no financial data. The extractor uses patient identifiers only to derive the boolean flags above, then discards the identifier from the transmitted payload if the monitoring architecture permits. The monitoring system receives behavioral signals, not clinical content.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Deployment and IT requirements</h2>
                <p className="text-muted-foreground leading-relaxed">Deploying a Clarity extractor requires a small amount of IT preparation:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
                  <li>A read-only SQL account with SELECT permissions on the relevant Clarity tables (ACCESS_LOG, CLARITY_EMP, PAT_ENC, and the patient table for flag lookups only)</li>
                  <li>A server or VM inside the hospital's network where the extractor script can run on a schedule (cron job, Windows Task Scheduler, or similar)</li>
                  <li>Outbound HTTPS access from that server to the monitoring system's API endpoint</li>
                  <li>An API key from the monitoring system, scoped to the hospital's organization identifier</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">Initial deployment typically takes 2–4 hours for a database administrator to configure the SQL account, deploy the script, and verify the connection. After deployment, the extractor runs unattended, sending incremental batches of access metadata to the monitoring system on a configured schedule (typically hourly or daily depending on volume).</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Security review and open-source transparency</h2>
                <p className="text-muted-foreground leading-relaxed">A legitimate concern for hospital IT departments is: what does the extractor actually do, and how can we verify it? The best answer to this question is open-source code. If the extractor script is published and readable, the IT team can verify every SQL query, every field extracted, and every data transmission before deployment. This is a stronger assurance than any contractual representation or third-party audit.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">SentinelEHR's clarity_extractor.py script is provided to hospitals for security review before any deployment decision. The IT director or DBA can read every line, verify what it queries, and confirm that no clinical content is extracted. This transparency is the foundation of the zero-PHI architecture claim — not a policy promise, but verifiable code.</p>
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
