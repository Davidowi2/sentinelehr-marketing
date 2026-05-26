import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
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
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#0D1117]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
        <a href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-transparent overflow-hidden">
            <div className="absolute inset-1 bg-white rounded-full scale-95 transform -translate-y-0.5"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0D1117] rounded-t-full transform translate-y-1"></div>
            <div className="absolute bottom-1 right-1.5 w-3 h-2 bg-white rotate-12 rounded-full skew-x-12"></div>
            <div className="absolute bottom-1 left-2 w-2 h-1.5 bg-white -rotate-12 rounded-full"></div>
            <div className="absolute bottom-0 w-5 h-1 bg-[#0D1117] blur-[0.5px] rounded-full"></div>
          </div>
          <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="/#demo" className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium hidden sm:inline-block">
            Get Started
          </a>
          <Button
            onClick={() => window.location.href = "/#demo"}
            className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 text-sm"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">SentinelEHR Privacy Policy</h1>
            </div>
            
            <p className="text-sm text-muted-foreground mb-12">Effective Date: May 26, 2026</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Scope and Zero-PHI Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR is built specifically to interface with internal healthcare data systems (specifically Epic Clarity databases) via localized, read-only structures. Our operational architecture enforces a Zero-PHI transmission guarantee. SentinelEHR does not copy, mirror, store, or transmit Protected Health Information (PHI) outside of your local network infrastructure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Data Access and Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All behavioral auditing, anomaly detection, and access analysis are performed within your system perimeter. The platform reads raw audit logs (<code className="bg-muted px-2 py-1 rounded">ACCESS_LOG</code>, <code className="bg-muted px-2 py-1 rounded">CLARITY_EMP</code>) solely to compile risk metrics and prioritize alerts. No patient names, medical histories, diagnostic data, or financial details are extracted or archived by our processing pipelines.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information We Collect via This Marketing Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For visitors utilizing our "Request a Live Demonstration" or contact forms, we collect basic corporate metadata: Name, Professional/Business Email, Organization Name, and Core Role. This information is used strictly to coordinate platform walkthroughs and is never shared, rented, or sold to third-party marketing entities.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Regulatory Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our architecture is meticulously mapped to comply directly with HIPAA §164.312(b) Audit Controls. Because no sensitive patient databases are externalized, utilizing SentinelEHR minimizes your external attack surface and respects institutional BAAs (Business Associate Agreements).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding data processing frameworks, contact our security administration team at:{" "}
                  <a href="mailto:david.sentinelehr@gmail.com" className="text-primary hover:underline">
                    david.sentinelehr@gmail.com
                  </a>
                  .
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
