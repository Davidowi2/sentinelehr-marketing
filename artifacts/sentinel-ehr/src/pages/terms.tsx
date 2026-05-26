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
            
            <p className="text-sm text-muted-foreground mb-12">Last Updated: May 26, 2026</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the SentinelEHR marketing website, requesting an operational demonstration, or evaluating our pilot workflows, you agree to comply with these standard operating terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Nature of Evaluation Platform</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR provides risk analysis software frameworks. Demonstration environments, pilot systems, and sandbox accounts are intended exclusively for workflow evaluation purposes. Users agree not to connect production clinical databases containing active Protected Health Information (PHI) to non-production evaluation environments.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR acts strictly as a passive behavioral analysis overlay reading system metadata logs. Under no circumstances shall SentinelEHR, its developers, or its team be held liable for any data infrastructure service interruptions, external security vulnerabilities originating from target environments, or regulatory penalties incurred due to pre-existing hospital network configurations.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The visual assets, custom behavioral isolation monitoring logic schemas, UI design elements, and marketing materials displayed on this site are the exclusive property of SentinelEHR.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Updates to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these operational terms at any time as our enterprise architecture and integrations evolve. Continued inquiry or use of our software signifies acceptance of updated frameworks.
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
