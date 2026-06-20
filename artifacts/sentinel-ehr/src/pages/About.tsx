import React from "react";
import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const TeamMember = ({
  initials,
  name,
  role,
  bio,
  delay,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
  delay: number;
}) => (
  <FadeIn delay={delay}>
    <Card className="bg-white border-border hover:border-primary/30 transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-3">
            {initials}
          </div>
          <h4 className="text-lg font-bold text-foreground mb-1">{name}</h4>
          <p className="text-sm text-primary font-medium">{role}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{bio}</p>
      </CardContent>
    </Card>
  </FadeIn>
);

export default function AboutPage() {
  useCanonical("/about");
  const teamMembers = [
    {
      initials: "DO",
      name: "David Owi",
      role: "Founder & CEO",
      bio: "David founded SentinelEHR after seeing how insider risk was being handled at hospitals without dedicated security teams. He leads product, partnerships, and the technical direction of the platform.",
    },
    {
      initials: "BP",
      name: "B.P.",
      role: "Head of Engineering",
      bio: "Leads the engineering team. Background in healthcare data systems and infrastructure, with a focus on building tools that work reliably inside hospital networks.",
    },
    {
      initials: "SC",
      name: "S.C.",
      role: "Head of Security & Compliance",
      bio: "Owns the security and HIPAA compliance posture of the platform, including the multi-tenant isolation tests, the deployment guide, and the data architecture that keeps patient content inside the hospital.",
    },
    {
      initials: "CO",
      name: "C.O.",
      role: "Head of Customer Success",
      bio: "Works directly with design partner hospitals during onboarding and beyond. Ensures each deployment goes smoothly and that compliance teams get value from day one.",
    },
    {
      initials: "AO",
      name: "A.O.",
      role: "Head of Product",
      bio: "Drives product strategy and roadmap based on direct feedback from compliance officers, IT directors, and CISOs at design partner sites.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Hero Section */}
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">About SentinelEHR</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-[1.12]">
              Built by a team that's been in the room where it happens.
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              We're a small team that has spent the past year building a HIPAA-grade behavioral analytics platform for healthcare organizations that can't afford enterprise SOC tooling. We're in design partner phase with community hospitals and federally qualified health centers across the U.S.
            </p>
          </FadeIn>

          {/* Mission Statement */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 border border-border rounded-xl p-8 mb-16">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "SentinelEHR exists to give small and mid-size healthcare organizations the same insider-risk detection capabilities that large hospital systems have — without the cost, complexity, or data extraction that enterprise tools require. We believe a 1-person compliance team at a community hospital deserves the same early warning system as a 50-person security team at a health system. The product is built around that belief."
              </p>
            </div>
          </FadeIn>

          {/* Team Section */}
          <FadeIn delay={0.2} className="mb-16">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">The Team</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                We're a small, focused team. Most of us have worked in or with healthcare IT, and all of us have a personal stake in the problem we're solving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <TeamMember
                  key={member.name}
                  initials={member.initials}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  delay={0.1 * (i + 1)}
                />
              ))}
            </div>
          </FadeIn>

          {/* Design Partner Phase Context */}
          <FadeIn delay={0.3} className="mb-16">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Design partner phase</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SentinelEHR is currently in design partner phase. We work directly with a small number of community hospitals and FQHCs to validate the product against real Epic Clarity environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not yet a production SaaS — but we have a working product, a proven ingestion pipeline, and a team that responds to support emails within hours, not days. If you're a hospital considering becoming a design partner, we'd love to talk.
              </p>
            </section>
          </FadeIn>

          {/* Contact / CTA Section */}
          <FadeIn delay={0.4}>
            <section className="mb-10 bg-slate-50 border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold mb-2 text-foreground">Get in touch</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Email us at <a href="mailto:hello@sentinelhr.org" className="text-primary hover:underline font-medium">hello@sentinelhr.org</a>. We respond to every email. If you're a hospital evaluating compliance monitoring tools, ask us anything — including the technical questions.
              </p>
              <Button
                onClick={() => window.location.href = "mailto:hello@sentinelhr.org"}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send us an email
              </Button>
            </section>
          </FadeIn>

          <div className="mt-16 pt-8 border-t border-border">
            <Button onClick={() => window.location.href = "/"} className="bg-primary text-primary-foreground">
              ← Back to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
