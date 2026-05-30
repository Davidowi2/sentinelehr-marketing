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

            <p className="text-sm text-muted-foreground mb-12">Last updated: May 30, 2026</p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Who we are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SentinelEHR is a healthcare insider risk intelligence platform built for compliance officers at community hospitals and federally qualified health centers. We are currently operating in design partner phase.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What information we collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you submit a demo request through our website, we collect your full name, business email address, organization name, job role, EHR system, and compliance team size. We collect only what you voluntarily provide.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not collect, store, or process any patient health information. SentinelEHR's architecture is designed so that patient records never leave your organization's environment.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">How we use your information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use your contact information solely to respond to your demo request and schedule a walkthrough of the SentinelEHR platform. We do not use your information for marketing, we do not sell it, and we do not share it with third parties except as described below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Third parties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Demo request forms on this website are processed by Formspree (formspree.io). When you submit a form, your information passes through Formspree's servers before reaching us. Formspree's privacy policy is available at{" "}
                  <a href="https://formspree.io/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a>.
                  {" "}We do not use any advertising networks, tracking pixels, or analytics services on this website.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Data retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your contact information for as long as necessary to conduct our design partner evaluation process. You may request deletion of your information at any time by emailing us and we will remove it within 14 days.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Your rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may request access to, correction of, or deletion of your personal information at any time by contacting us directly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="mailto:david.sentinelehr@gmail.com" className="text-primary hover:underline">
                    david.sentinelehr@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2 text-sm italic">
                  (This will update to david@sentinelehr.org when our domain is active)
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
