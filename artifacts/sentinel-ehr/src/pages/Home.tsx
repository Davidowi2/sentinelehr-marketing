import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  BellOff,
  History,
  Network,
  BarChart2,
  ClipboardCheck,
  Building2,
  MessageSquare,
  Code2,
  Lock,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          data-testid="nav-logo"
        >
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg tracking-tight text-foreground">SentinelEHR</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("platform")} className="hover:text-primary transition-colors" data-testid="nav-platform">Platform</button>
          <button onClick={() => scrollTo("intelligence")} className="hover:text-primary transition-colors" data-testid="nav-intelligence">Intelligence</button>
          <button onClick={() => scrollTo("compliance")} className="hover:text-primary transition-colors" data-testid="nav-compliance">Compliance</button>
          <button onClick={() => scrollTo("demo")} className="hover:text-primary transition-colors" data-testid="nav-resources">Resources</button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground text-sm" data-testid="btn-login">
            Login
          </Button>
          <Button
            onClick={() => scrollTo("demo")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
            data-testid="btn-request-demo-nav"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

/* ─── Hero ────────────────────────────────────────────────────────────────── */
const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const trustPoints = [
    {
      icon: Lock,
      label: "Zero PHI Storage",
      desc: "We analyze access behavior, never patient records. PHI never leaves your network.",
    },
    {
      icon: Eye,
      label: "Read-Only Integration",
      desc: "Connects to Epic Clarity in read-only mode. No write permissions, no risk.",
    },
    {
      icon: ShieldCheck,
      label: "HIPAA §164.312(b)",
      desc: "Built to satisfy Audit Controls requirements out of the box.",
    },
    {
      icon: Zap,
      label: "86% Alert Precision",
      desc: "Isolation Forest ML cuts noise so your team focuses on real threats.",
    },
  ];

  return (
    <section id="platform" className="relative pt-20 pb-28 overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Blue glow top-right */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/8 text-primary gap-1.5 py-1 px-3 font-medium"
              data-testid="badge-hipaa"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              HIPAA §164.312(b) Compliant
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-muted text-muted-foreground gap-1.5 py-1 px-3 font-medium"
              data-testid="badge-phi"
            >
              0 PHI Stored
            </Badge>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground mb-6 leading-[1.12]"
            data-testid="hero-heading"
          >
            Healthcare Insider<br className="hidden md:block" /> Risk Intelligence
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Real-time behavioral monitoring for Epic EHR. Detect unauthorized access before it becomes a breach — built for the compliance officer, not the data scientist.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2"
              onClick={() => scrollTo("demo")}
              data-testid="btn-request-demo-hero"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-foreground border-border hover:bg-muted"
              onClick={() => scrollTo("intelligence")}
              data-testid="btn-explore"
            >
              How It Works
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border" data-testid="hero-stats">
            <div>
              <div className="text-3xl font-extrabold text-primary mb-1">325K</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Events Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary mb-1">0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">PHI Stored</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary mb-1">86%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Alert Precision</div>
            </div>
          </div>
        </FadeIn>

        {/* Right — Trust architecture card */}
        <FadeIn delay={0.18} className="relative">
          <div className="relative rounded-2xl border border-border bg-white shadow-xl overflow-hidden">
            {/* Header stripe */}
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm tracking-wide">SentinelEHR — Trust Architecture</span>
            </div>

            <div className="p-6 grid grid-cols-1 gap-0 divide-y divide-border">
              {trustPoints.map(({ icon: Icon, label, desc }, i) => (
                <div key={i} className="flex items-start gap-4 py-5 first:pt-3 last:pb-3" data-testid={`trust-point-${i}`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">{label}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Epic integration note */}
            <div className="border-t border-border bg-muted/60 px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs text-muted-foreground font-medium">
                Connects read-only to Epic Clarity — ACCESS_LOG, CLARITY_EMP, ZC_ACS_ACTION
              </span>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
        </FadeIn>
      </div>
    </section>
  );
};

/* ─── Problem ─────────────────────────────────────────────────────────────── */
const Problem = () => {
  const pains = [
    {
      icon: BellOff,
      title: "Alert Fatigue",
      body: "Thousands of alerts per day. Most are noise. Real threats hide inside the queue, waiting for the one minute you look away.",
    },
    {
      icon: History,
      title: "Slow Investigations",
      body: "The average insider breach goes undetected for months. Manual log review takes days per incident, losing critical time.",
    },
    {
      icon: ShieldAlert,
      title: "Sensitive Record Risk",
      body: "HIV records, behavioral health notes, VIP patients — these require protection beyond what standard monitoring can provide.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Your compliance team is drowning in alerts</h2>
            <p className="text-lg text-muted-foreground">
              Legacy monitoring generates noise, not insight. SentinelEHR cuts through the volume to protect what matters most.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <Card
                className="bg-white border-border hover:border-primary hover:shadow-md transition-all duration-300 h-full"
                data-testid={`problem-card-${i}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Product / Intelligence ──────────────────────────────────────────────── */
const Product = () => {
  const features = [
    {
      icon: BarChart2,
      title: "Behavioral AI Detection",
      subtitle: "Isolation Forest ML",
      points: [
        "8 configurable detection rules",
        "Anomaly scoring across shifts, locations & departments",
        "Flags off-hours access, bulk exports, cross-department snooping",
        "Baseline personalized to each employee's normal pattern",
      ],
    },
    {
      icon: Eye,
      title: "Prioritized Alert Queue",
      subtitle: "Signal, not noise",
      points: [
        "Alerts ranked by severity and risk probability",
        "Plain-English explanation for every flag — no scores to decode",
        "Surfaces the 1% of alerts that need human eyes",
        "VIP and sensitive record categories get elevated weighting",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Investigation Workflow",
      subtitle: "End-to-end case management",
      points: [
        "Document findings, escalate to HR, mark resolved in one place",
        "Full audit trail for every action taken on an incident",
        "Supports OCR and HIPAA breach reporting requirements",
        "Built for a team of 1 — no dedicated analyst needed",
      ],
    },
  ];

  return (
    <section id="intelligence" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">SentinelEHR surfaces what matters</h2>
            <p className="text-lg text-muted-foreground">
              Precision detection, clear context, and a streamlined workflow — so a one-person compliance team can operate at enterprise scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, subtitle, points }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <Card className="bg-white border-border h-full hover:shadow-lg hover:border-primary/40 transition-all duration-300" data-testid={`feature-card-${i}`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{subtitle}</div>
                  <h3 className="text-xl font-bold mb-5 text-foreground">{title}</h3>
                  <ul className="space-y-3 mt-auto">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── How It Works ────────────────────────────────────────────────────────── */
const HowItWorks = () => {
  const steps = [
    {
      icon: Network,
      number: "01",
      title: "Connect to Epic Clarity",
      body: "SentinelEHR connects to your Epic Clarity database in read-only mode using standard SQL access to ACCESS_LOG and CLARITY_EMP. No PHI is ever transmitted outside your network.",
    },
    {
      icon: BarChart2,
      number: "02",
      title: "Analyze Behavior",
      body: "Our Isolation Forest ML model scores every access event against each employee's normal behavioral baseline — detecting anomalies across time, location, and department.",
    },
    {
      icon: ClipboardCheck,
      number: "03",
      title: "Review Prioritized Alerts",
      body: "Your compliance officer reviews a ranked queue of plain-English alerts, investigates with full context, and resolves or escalates — all in one unified workflow.",
    },
  ];

  return (
    <section id="howitworks" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Three steps to total visibility</h2>
            <p className="text-lg text-muted-foreground">
              A frictionless deployment designed specifically for Epic Clarity environments.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-0.5 bg-border z-0" />

          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map(({ icon: Icon, number, title, body }, i) => (
              <FadeIn key={number} delay={i * 0.15} className="flex flex-col items-center text-center">
                <div
                  className="w-28 h-28 rounded-full bg-white border-2 border-primary/40 flex flex-col items-center justify-center mb-6 shadow-md"
                  data-testid={`step-${i}`}
                >
                  <span className="text-xs font-bold text-primary/60 mb-1 tracking-widest">{number}</span>
                  <Icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Why SentinelEHR ─────────────────────────────────────────────────────── */
const Why = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Zero PHI Stored",
      body: "We analyze behavioral patterns, not patient records. Your data stays in your hospital, guaranteed by our architecture.",
    },
    {
      icon: Building2,
      title: "Built for Community",
      body: "Designed for compliance teams of 1–3 people, not enterprise SOC centers with dedicated threat analysts.",
    },
    {
      icon: MessageSquare,
      title: "Explainable Alerts",
      body: "Every flag includes a plain-English explanation. No black-box risk scores that require a data scientist to interpret.",
    },
    {
      icon: Code2,
      title: "Epic-Native",
      body: "Built against real Epic Clarity table structures. Drop-in compatible with standard Epic environments.",
    },
  ];

  return (
    <section id="compliance" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-6 rounded-xl border border-border bg-slate-50 hover:border-primary/50 hover:bg-white transition-all duration-200" data-testid={`why-card-${i}`}>
                <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Why SentinelEHR</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Privacy-first security for mission-driven healthcare
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Community health centers and hospitals operate with limited resources but face the same regulatory pressure as large systems. SentinelEHR delivers enterprise-grade detection at a scale and price that works for your organization.
          </p>
          <Card className="border-l-4 border-l-primary border-y-border border-r-border rounded-l-none bg-slate-50">
            <CardContent className="p-6">
              <blockquote className="text-foreground font-medium text-base leading-relaxed italic mb-3" data-testid="blockquote">
                "Our zero-PHI architecture is the strongest differentiator for procurement departments. We don't just secure your data — we avoid taking it in the first place."
              </blockquote>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                — SentinelEHR Architecture Team
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─── Demo Form ───────────────────────────────────────────────────────────── */
const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  organization: z.string().min(2, "Organization is required"),
  email: z.string().email("Valid business email is required"),
  role: z.string().min(2, "Please select a role"),
});

const DemoForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", organization: "", email: "", role: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const subject = encodeURIComponent("Demo Request — SentinelEHR");
    const body = encodeURIComponent(
      `Name: ${values.name}\nOrganization: ${values.organization}\nEmail: ${values.email}\nRole: ${values.role}\n\nI would like to request a live demonstration of SentinelEHR.`
    );
    window.location.href = `mailto:demo@sentinelehr.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast({ title: "Request prepared", description: "Opening your email client..." });
    form.reset();
  };

  return (
    <section id="demo" className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Request a Live Demonstration</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              See how SentinelEHR transforms your compliance workflow in 30 minutes — tailored to your hospital's Epic environment.
            </p>
            <div className="space-y-4">
              {[
                "30-minute live walkthrough with a product specialist",
                "Tailored to your Epic Clarity environment",
                "Zero obligation — no sales pressure",
                "Includes a HIPAA compliance architecture overview",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.18}>
            {submitted ? (
              <Card className="bg-white border-border shadow-lg">
                <CardContent className="p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Email draft ready</h3>
                  <p className="text-muted-foreground text-sm">Your email client should have opened. We'll respond within one business day.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Submit another request</Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white border-border shadow-lg">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="bg-muted border-border" data-testid="input-name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Community General Hospital" className="bg-muted border-border" data-testid="input-org" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Business Email</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@hospital.org" type="email" className="bg-muted border-border" data-testid="input-email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="role"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Role</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-muted border-border" data-testid="select-role">
                                    <SelectValue placeholder="Select a role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Compliance Officer">Compliance Officer</SelectItem>
                                  <SelectItem value="Privacy Officer">Privacy Officer</SelectItem>
                                  <SelectItem value="IT Director">IT Director</SelectItem>
                                  <SelectItem value="CISO">CISO</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 font-bold"
                        data-testid="btn-submit-demo"
                      >
                        Schedule Demo
                      </Button>
                    </form>
                  </Form>
                  <p className="text-xs text-center text-muted-foreground mt-5">
                    We respect your inbox. No marketing spam, ever.
                  </p>
                </CardContent>
              </Card>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ──────────────────────────────────────────────────────────────── */
const Footer = () => {
  return (
    <footer className="dark bg-[#0D1117] pt-20 pb-10 border-t border-[#21262d]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Shield className="w-6 h-6 text-[#38BDF8]" />
              <span className="font-bold text-lg tracking-tight text-white">SentinelEHR</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Insider risk intelligence for community health systems using Epic EHR.
            </p>
            <div className="text-xs text-slate-500 leading-relaxed">
              Currently in Design Partner Phase
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#intelligence" className="hover:text-[#38BDF8] transition-colors">Detection Engine</a></li>
              <li><a href="#intelligence" className="hover:text-[#38BDF8] transition-colors">Case Management</a></li>
              <li><a href="#howitworks" className="hover:text-[#38BDF8] transition-colors">Epic Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Trust & Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Security Architecture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:demo@sentinelehr.com" className="hover:text-[#38BDF8] transition-colors">
                  demo@sentinelehr.com
                </a>
              </li>
              <li>
                <a href="https://github.com/sentinelehr" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#21262d] flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-slate-500">
          <span>© 2025 SentinelEHR Intelligence. All rights reserved.</span>
          <span className="text-right max-w-sm">
            HIPAA §164.312(b) Audit Controls Compliant — Zero PHI storage architecture — Read-only Epic Clarity integration
          </span>
        </div>
      </div>
    </footer>
  );
};

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <Why />
      <DemoForm />
      <Footer />
    </div>
  );
}
