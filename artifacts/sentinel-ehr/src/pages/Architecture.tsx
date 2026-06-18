import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
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
          <div style={{backgroundColor:'#0D1117', padding:'4px 8px', borderRadius:'6px', display:'inline-flex', alignItems:'center'}}>
            <img src="/sentinelehr-logo.png" style={{height:'32px', objectFit:'contain'}} alt="SentinelEHR logo" />
          </div>
          <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="/about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
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

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Architecture</p>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Zero PHI storage. By design.</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              SentinelEHR never stores, transmits, or processes patient health information. The platform analyzes access behavioral patterns only. Patient record content never leaves your environment.
            </p>

            <div className="prose prose-slate max-w-none">

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The architecture decision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR uses Option B extraction: the hospital never opens an inbound firewall port. A lightweight Python script (clarity_extractor.py) runs inside the hospital's network, extracts behavioral metadata, and sends it outward to SentinelEHR's API in batches. This is the only architecture that works in hospital procurement because it does not require your IT team to open the firewall to an external server.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What gets extracted</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  clarity_extractor.py queries the following Epic Clarity tables:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mb-4">
                  <li><strong>CLARITY_EMP</strong> — employee reference (role, department, shift hours)</li>
                  <li><strong>PAT_ENC</strong> — encounter and provider relationships (for in-panel determination)</li>
                  <li><strong>ACCESS_LOG</strong> — Epic's built-in audit log (every record access by every employee)</li>
                  <li><strong>PATIENT</strong> — for VIP and sensitive record flags (boolean indicators only)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-3">Extracted fields per audit event:</p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                  <li>audit_id (integer)</li>
                  <li>emp_id (integer) — links to CLARITY_EMP</li>
                  <li>pat_id (integer) — links to PATIENT</li>
                  <li>action_c (integer, 1–11) — Epic action code</li>
                  <li>action_datetime (timestamp)</li>
                  <li>dept_id (integer) — department</li>
                  <li>in_panel (boolean) — derived: was the patient in the employee's care panel?</li>
                  <li>is_vip_access (boolean) — derived: was the patient VIP-flagged?</li>
                  <li>is_sensitive_access (boolean) — derived: was the record sensitive (HIV, behavioral health)?</li>
                  <li>is_known_user (boolean) — derived: does this employee ID exist in CLARITY_EMP?</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What does NOT get extracted</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  SentinelEHR does NOT query, read, or transmit:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                  <li>Patient names</li>
                  <li>Patient dates of birth</li>
                  <li>Patient medical record numbers (MRNs)</li>
                  <li>Clinical notes, diagnoses, or medications</li>
                  <li>Financial data</li>
                  <li>Any content from the CLARITY.PATIENT clinical fields</li>
                  <li>Any field from clinical_encounters, problem_list, medication_order, or similar clinical tables</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The extractor script's SELECT statements explicitly list only the metadata fields above. A hospital IT director can read the script and verify.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">The batches</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Data is sent in batches of 5,000 records to the SentinelEHR API. On the final batch, the API triggers a background detection pipeline (5-step analysis: baselines, rules, anomaly scoring, severity adjustment, case creation). The extraction itself is incremental — only records newer than the last successful sync are sent, reducing bandwidth and processing.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Open source</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The clarity_extractor.py script is provided to the hospital for security review before deployment. Your IT team can read every line, verify what it queries, and confirm the no clinical content extraction claim. We encourage this. The script is the strongest evidence of our architecture — not a whitepaper, not a certification, but the actual code that runs in your network.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Try it before you buy it</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For design partner evaluation, we provide a synthetic dataset (90 days of mock Epic access events) so your IT team can run clarity_extractor.py against a test environment and verify the data flow before any real Epic connection is made.
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
