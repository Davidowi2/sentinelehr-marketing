import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCanonical } from "@/lib/useCanonical";

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
          <img src="/sentinelehr-logo.png" style={{height:'36px', objectFit:'contain'}} alt="SentinelEHR logo" />
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

export default function SecurityPage() {
  useCanonical("/security");
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Security</p>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Security architecture</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              What a hospital CISO needs to know before approving SentinelEHR for their environment. Technical, specific, defensible.
            </p>

            <div className="prose prose-slate max-w-none">

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">No clinical content extraction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR stores behavioral metadata only. The fields extracted from your Epic Clarity database are: employee ID (integer), patient ID (integer), action type (1–11), access timestamp, department ID, in-panel status (boolean), VIP status (boolean), sensitive record flag (boolean). No patient names. No clinical content. No diagnoses, medications, notes, or financial data. The extractor script (clarity_extractor.py) is open-source and can be reviewed by your IT team before deployment.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Data flow</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your Epic Clarity database contains behavioral metadata tables (ACCESS_LOG, CLARITY_EMP, PAT_ENC) and clinical content tables (CLARITY.PATIENT, clinical notes, etc.). SentinelEHR's clarity_extractor.py runs inside your network with read-only SQL credentials. It queries only the metadata tables. The extracted data leaves your network through a single outbound HTTPS connection to the SentinelEHR API. The connection is authenticated with an API key, scoped to your organization_id, and never accepts organization_id from the request body — it is always derived from the API key lookup.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Authentication and session security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  bcrypt password hashing for all user accounts. JWT access tokens with 8-hour expiry, stored in React memory only (not localStorage). httpOnly refresh token cookies. Account-based rate limiting: 5 failed login attempts triggers a 10-minute lockout. IP-based rate limiting on all authentication endpoints. No secrets in the codebase — all credentials in environment variables. No PHI in error messages — server logs contain actual errors, HTTP responses return generic 500.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Multi-tenant isolation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every data table in SentinelEHR includes an organization_id column. Every API endpoint filters queries by organization_id from the JWT token. Hospital A's compliance officer cannot read, write, or modify Hospital B's data — even by guessing record IDs.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Multi-tenancy isolation is verified by automated end-to-end test suite covering:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
                  <li>Read isolation (6 of 6 endpoints PASS)</li>
                  <li>Write isolation (5 of 5 mutation endpoints PASS)</li>
                  <li>Ingestion path isolation (api_key scoped to org, org_id in body ignored — PASS)</li>
                  <li>Admin cross-org access (5 of 5 admin endpoints properly return 403 — PASS)</li>
                  <li>Audit log and notification cross-org (PASS)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">Test results reproducible on request.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Audit trail</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every status change, every dismissal, every note is logged with timestamp, actor, and reason. The audit log is forensically defensible. Cases can be exported as printable HR-ready reports. For OCR Phase 2 audits, the system can produce: who accessed which record, every investigation that resulted, and the documented rationale for each decision.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Hosting and infrastructure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Current: Vercel (frontend), Render (backend), Neon (database), all on free tiers. Planned: VPS migration with nginx, gunicorn, PostgreSQL on the server, SSL via Let's Encrypt, UFW firewall, Fail2ban, DNS pointing sentinelhr.org to the server IP. The no clinical content extraction architecture means our hosting infrastructure handles only behavioral metadata — there is no clinical content to secure in the traditional sense.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Compliance posture and SOC 2</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR does NOT claim HIPAA certification. The product is designed to support HIPAA §164.312(b) audit control workflows through its no clinical content extraction architecture. The hospital is responsible for ensuring their Epic Clarity connection complies with their own Epic license agreement.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For design partner conversations, we provide equivalent security assurances: no clinical content extraction architecture (no patient clinical content leaves your environment), bcrypt authentication, JWT tokens with 8-hour expiry, full audit log, multi-tenant isolation verified by automated end-to-end test suite, forensically defensible audit trail.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  SOC 2 Type 2 is on our 12-month roadmap. For a production deployment post-design-partner, SOC 2 Type 2 certification would be a prerequisite.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Vulnerability reporting</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you discover a security issue, contact{" "}
                  <a href="mailto:hello@sentinelhr.org" className="text-primary hover:underline">hello@sentinelhr.org</a>
                  {" "}with subject line 'Security inquiry.' We commit to acknowledging within 48 hours and providing a remediation timeline within 5 business days.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Last reviewed</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Last reviewed: June 8, 2026. Reviewed by: SentinelEHR.
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
