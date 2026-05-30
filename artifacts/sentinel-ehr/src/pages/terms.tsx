import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
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
          <img src="/sentinelehr-logo.png" style={{height:'32px', objectFit:'contain'}} alt="SentinelEHR logo" />
          <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="/#demo-section" className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium hidden sm:inline-block">
            Get Started
          </a>
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

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">SentinelEHR Terms of Service</h1>
            </div>

            <p className="text-sm text-muted-foreground mb-12">Last updated: May 30, 2026</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Acceptance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By submitting a demo request or accessing the SentinelEHR platform, you agree to these terms. If you do not agree, do not use the platform.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What SentinelEHR is</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR is currently in design partner phase. The platform is provided for evaluation purposes. Design partners receive access to the platform at no cost in exchange for feedback on detection accuracy and compliance workflow fit.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">No warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR is provided as-is. We make no warranties, express or implied, regarding uptime, accuracy of detection, fitness for a particular purpose, or compliance with any regulatory standard. You are responsible for your own compliance obligations.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">No PHI processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR does not store patient health information. The platform analyzes access behavioral patterns only. You remain responsible for ensuring that any connection to your Epic Clarity environment complies with your organization's policies and your Epic license agreement.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Acceptable use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may not attempt to access data belonging to other organizations. You may not reverse engineer, copy, or redistribute the SentinelEHR platform. You may not use the platform for any purpose other than healthcare compliance monitoring within your own organization.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate access to the platform at any time, for any reason, with reasonable notice where practicable.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including but not limited to regulatory penalties, data breaches, or missed detections.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Governing law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms as the platform evolves from design partner phase toward general availability. We will notify active design partners of material changes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="mailto:david.sentinelehr@gmail.com" className="text-primary hover:underline">
                    david.sentinelehr@gmail.com
                  </a>
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
