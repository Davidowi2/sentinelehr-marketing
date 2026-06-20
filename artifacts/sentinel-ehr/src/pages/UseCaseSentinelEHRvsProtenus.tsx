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

export default function SentinelEHRvsProtenusPage() {
  useCanonical("/use-cases/SentinelEHR-vs-Protenus");
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Product Comparison</p>
            <h1 className="text-4xl font-bold text-foreground mb-6">SentinelEHR vs Protenus: comparison for community hospitals</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Protenus is the market leader in healthcare privacy monitoring. SentinelEHR is the design partner alternative built specifically for community hospitals and FQHCs. Here's how they compare on architecture, scope, and pricing.</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About Protenus</h2>
                <p className="text-muted-foreground leading-relaxed">Protenus is a healthcare compliance analytics company founded in 2014. The company publishes an annual Breach Barometer report (in partnership with databreaches.net) that tracks healthcare data breaches. Protenus's platform is used by large health systems and academic medical centers for privacy monitoring, diversion detection (controlled substance tracking), and compliance analytics. Their customer base skews toward large enterprise organizations — regional health systems with multiple hospitals, complex Epic environments, and dedicated compliance and privacy analytics staff.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Protenus is venture-funded and positioned as a premium enterprise product. Pricing is not publicly disclosed but is generally consistent with enterprise healthcare software contracts — typically six figures annually for larger organizations.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About SentinelEHR</h2>
                <p className="text-muted-foreground leading-relaxed">SentinelEHR is a healthcare insider risk intelligence platform currently in design partner phase. It is built specifically for the segment of the healthcare market that Protenus is not designed for: community hospitals, critical access hospitals, and federally qualified health centers (FQHCs) with compliance teams of 1–3 people and limited IT resources. SentinelEHR is not attempting to compete with Protenus for enterprise health system contracts. It is addressing a different market segment that is currently underserved.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Architecture comparison</h2>
                <p className="text-muted-foreground leading-relaxed"><strong>Protenus:</strong> Protenus's architecture is not publicly documented in detail. Based on published materials and industry reporting, Protenus integrates with EHR systems including Epic through data feeds that include clinical context. The platform processes patient access data alongside scheduling and care team information to determine whether access was clinically appropriate.</p>
                <p className="text-muted-foreground leading-relaxed mt-4"><strong>SentinelEHR:</strong> SentinelEHR uses a zero-PHI architecture. The clarity_extractor.py script runs inside the hospital's network with read-only SQL credentials, extracts behavioral metadata only (access patterns, not clinical content), and transmits that metadata to the SentinelEHR API over HTTPS. Patient record content never leaves the hospital's environment. The extractor script is open source and reviewable by the hospital's IT team before deployment.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The architectural distinction matters for procurement. A zero-PHI architecture does not create a secondary PHI repository, may reduce the scope of a Business Associate Agreement, and is easier to approve in conservative hospital IT security policies.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Target market comparison</h2>
                <p className="text-muted-foreground leading-relaxed"><strong>Protenus target market:</strong> Large regional health systems, academic medical centers, and hospital networks with multiple facilities. Organizations with dedicated compliance analytics staff, existing data governance infrastructure, and the budget and IT capacity for enterprise software implementation.</p>
                <p className="text-muted-foreground leading-relaxed mt-4"><strong>SentinelEHR target market:</strong> Community hospitals (typically 50–300 beds), critical access hospitals, and FQHCs. Organizations with a single compliance officer or a small compliance team, limited IT staff, and budget constraints that make enterprise pricing inaccessible. Organizations that need a defensible, documented audit control program but cannot justify or afford an enterprise analytics platform to achieve it.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Feature comparison</h2>
                <p className="text-muted-foreground leading-relaxed"><strong>Protenus capabilities:</strong> Privacy monitoring (patient record access analysis), diversion detection (controlled substance monitoring), compliance analytics and reporting, integration with scheduling and HR systems for clinical context, and enterprise reporting dashboards. Designed for organizations with analysts who can work with complex data.</p>
                <p className="text-muted-foreground leading-relaxed mt-4"><strong>SentinelEHR capabilities:</strong> Patient record access monitoring via Epic Clarity behavioral metadata, Isolation Forest ML anomaly detection with eight configurable detection rules, prioritized plain-English alert queue, case management for investigation documentation, exportable HR-ready reports, and a zero-PHI architecture designed for easy procurement approval. Designed for a compliance officer who needs to start and complete an investigation in 15 minutes.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">SentinelEHR does not currently include diversion detection. This is a deliberate scope decision — controlled substance monitoring is a separate compliance domain with different data requirements and regulatory frameworks (DEA, state pharmacy boards), and adding it would complicate the deployment and procurement process for an organization that needs basic HIPAA audit control support first.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Pricing comparison</h2>
                <p className="text-muted-foreground leading-relaxed"><strong>Protenus:</strong> Pricing is not publicly disclosed. Enterprise healthcare software at this scale typically ranges from $50,000 to several hundred thousand dollars annually, depending on organization size and scope.</p>
                <p className="text-muted-foreground leading-relaxed mt-4"><strong>SentinelEHR:</strong> Currently in design partner phase at no cost. Post-design-partner pricing is projected at $100–500/month for small clinics, $10,000–$30,000/year for community hospitals, and $50,000–$100,000/year for mid-size regional organizations. These are indicative ranges, not final pricing — actual pricing will be determined based on design partner feedback and organizational needs.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Which is right for your organization?</h2>
                <p className="text-muted-foreground leading-relaxed">If you are a large health system with multiple facilities, dedicated compliance analytics staff, and a budget for enterprise software, Protenus and similar enterprise platforms (Imprivata, FairWarning) are appropriate to evaluate. They provide deep integration, rich analytics, and the scale required for complex multi-facility environments.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">If you are a community hospital, critical access hospital, or FQHC with a small compliance team, limited IT resources, and a genuine need for HIPAA audit control documentation that you cannot currently achieve, SentinelEHR is designed for you. The no clinical content extraction architecture makes procurement simpler. The plain-English alert queue is designed for a single compliance officer, not an analytics team. And the pricing is designed to be accessible without a capital budget.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">The honest answer is that the market Protenus serves and the market SentinelEHR serves have very limited overlap. The question is not which enterprise platform to choose — it is whether your organization has access to any systematic compliance monitoring at all.</p>
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
