import React from "react";
import { CookieBanner } from "../components/CookieBanner";
import { motion } from "framer-motion";
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
  CheckCircle2,
  ArrowRight,
  ScanSearch,
  Quote,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#0D1117]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          data-testid="nav-logo"
        >
          <div className="flex items-center gap-2">
            <div style={{backgroundColor:'#0D1117', padding:'4px 8px', borderRadius:'6px', display:'inline-flex', alignItems:'center'}}>
              <img src="/sentinelehr-logo.png" style={{height:'32px', objectFit:'contain'}} alt="SentinelEHR logo" />
            </div>
            <span className="text-white font-bold text-lg tracking-wider">SENTINELEHR</span>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button onClick={() => scrollTo("platform")} className="hover:text-white transition-colors" data-testid="nav-platform">Platform</button>
          <button onClick={() => scrollTo("intelligence")} className="hover:text-white transition-colors" data-testid="nav-intelligence">Intelligence</button>
          <button onClick={() => scrollTo("compliance")} className="hover:text-white transition-colors" data-testid="nav-compliance">Compliance</button>
          <button onClick={() => scrollTo("demo-section")} className="hover:text-white transition-colors" data-testid="nav-resources">Resources</button>
          <a href="/security" className="hover:text-white transition-colors" data-testid="nav-security">Security</a>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("demo-section")}
            className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 text-sm"
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
              No Clinical Content Extraction
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-muted text-muted-foreground gap-1.5 py-1 px-3 font-medium"
              data-testid="badge-phi"
            >
              No Patient Data Leaves
            </Badge>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground mb-6 leading-[1.12]"
            data-testid="hero-heading"
          >
            Detect suspicious EHR access before it becomes a HIPAA breach.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            SentinelEHR is a behavioral analytics platform for Epic Clarity environments. It monitors who accesses what, when, and how often — without ever moving patient data out of your hospital. Built for community hospitals and FQHCs with 1-3 person compliance teams.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2"
              onClick={() => scrollTo("demo-section")}
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

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border" data-testid="hero-stats">
            <div>
              <div className="text-3xl font-extrabold text-primary mb-1">325K</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Events Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary mb-1">0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Clinical Content Extracted</div>
            </div>
          </div>
        </FadeIn>

        {/* Right — professional healthcare photo with floating badges */}
        <FadeIn delay={0.18} className="relative hidden lg:block">
          {/* Photo frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80&fit=crop&crop=top"
              alt="Healthcare compliance professional at a hospital"
              className="w-full h-full object-cover object-center"
              data-testid="hero-image"
            />
            {/* Subtle dark gradient at bottom for badge contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating badge — bottom left */}
          <div
            className="absolute -left-5 bottom-12 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3 min-w-[180px]"
            data-testid="floating-badge-phi"
          >
            <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">No Clinical Content Extracted</div>
              <div className="text-xs text-muted-foreground">Read-only access</div>
            </div>
          </div>

          {/* Floating badge — top right */}
          <div
            className="absolute -right-5 top-24 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3 min-w-[160px]"
            data-testid="floating-badge-verified"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Verified</div>
              <div className="text-xs text-muted-foreground">Multi-tenant isolation proven by 17 end-to-end security tests</div>
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
      body: "Thousands of alerts per week. Most are false positives. Your compliance officer spends hours triaging noise instead of investigating real risk. Alert fatigue is the number one reason insider threats go undetected — the signal is buried in the noise.",
    },
    {
      icon: History,
      title: "Slow Investigations",
      body: "The average insider breach takes 90 days to detect and another 60 to investigate. By the time you find it, the audit trail is cold, the employee may have left, and OCR notification deadlines are approaching. Speed of investigation is the difference between a caught breach and a reported one.",
    },
    {
      icon: ShieldAlert,
      title: "Sensitive Record Risk",
      body: "HIV records, behavioral health notes, substance abuse treatment — specially protected records under federal and state law. Snooping on these records is a fireable offense and an OCR-reportable event. Standard access logs don't flag it. Behavioral analysis does.",
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
      icon: ScanSearch,
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
      body: "SentinelEHR establishes a secure, read-only SQL pipeline targeting system metadata tables like ACCESS_LOG and CLARITY_EMP. Because it never processes clinical chart payloads, your core database integrity remains completely uncompromised.",
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
      title: "No Clinical Content Extraction",
      body: "Patient record content never leaves your organization. Behavioral metadata only — employee IDs, patient IDs, timestamps, and boolean access flags. No clinical content extracted, ever.",
    },
    {
      icon: Building2,
      title: "Read-Only Access",
      body: "Zero write permissions to your Epic database. SentinelEHR extracts behavioral metadata. It cannot modify, delete, or alter any patient record. Architecture guarantee, not policy.",
    },
    {
      icon: MessageSquare,
      title: "Explainable Alerts",
      body: "Every flag includes a plain-English explanation. No black-box risk scores that require a data scientist to interpret. Your CO understands the alert in 5 seconds.",
    },
    {
      icon: Code2,
      title: "Epic-Native",
      body: "Built against real Epic Clarity table structures. Drop-in compatible with standard Epic environments. No Epic customization required for deployment.",
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
        </FadeIn>
      </div>
    </section>
  );
};

/* ─── Demo Form ──────────────────────────────────────────────────────────────────────────── */
const FORMSPREE_STEP1 = 'https://formspree.io/f/xykvbwwj';
const FORMSPREE_STEP2 = 'https://formspree.io/f/xykvbwwj'; // same inbox, differentiated by _subject

const DemoForm = () => {

  const [step, setStep] = React.useState<1 | 2 | 'done'>(1);
  const [submitting1, setSubmitting1] = React.useState(false);
  const [error1, setError1] = React.useState<string | null>(null);
  const [savedEmail, setSavedEmail] = React.useState('');
  const [savedOrg, setSavedOrg] = React.useState('');

  const [email1, setEmail1] = React.useState('');
  const [org1, setOrg1] = React.useState('');

  const [submitting2, setSubmitting2] = React.useState(false);
  const [challenge, setChallenge] = React.useState('');
  const [tried, setTried] = React.useState('');
  const [ehr, setEhr] = React.useState('');
  const [employees, setEmployees] = React.useState('');
  const [stage, setStage] = React.useState('');

  const onSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting1(true);
    setError1(null);
    try {
      const response = await fetch(FORMSPREE_STEP1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `New demo request: ${email1} from ${org1}`,
          email: email1,
          organization: org1,
        }),
      });
      if (response.ok) {
        setSavedEmail(email1);
        setSavedOrg(org1);
        setStep(2);
      } else {
        setError1('Submission failed. Please try again or contact us directly.');
      }
    } catch {
      setError1('Submission failed. Please try again or contact us directly.');
    } finally {
      setSubmitting1(false);
    }
  };

  const submitSurvey = async () => {
    setSubmitting2(true);
    try {
      await fetch(FORMSPREE_STEP2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Demo request follow-up survey: ${savedEmail} from ${savedOrg}`,
          email: savedEmail,
          organization: savedOrg,
          biggest_challenge: challenge || '(skipped)',
          tried_so_far: tried || '(skipped)',
          ehr_system: ehr || '(skipped)',
          employee_count: employees || '(skipped)',
          evaluation_stage: stage || '(skipped)',
        }),
      });
    } catch {
      // survey failure is non-blocking
    } finally {
      setSubmitting2(false);
      setStep('done');
    }
  };

  const skipSurvey = () => setStep('done');

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', background: 'white', fontFamily: 'inherit' } as React.CSSProperties;
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '6px', color: '#64748b', textTransform: 'uppercase' } as React.CSSProperties;

  const Step1 = (
    <Card className="bg-white border-border shadow-lg">
      <CardContent className="p-8">
        {error1 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm font-medium">✗ {error1}</p>
          </div>
        )}
        <form onSubmit={onSubmitStep1} className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">Business Email</label>
              <Input
                placeholder="jane@hospital.org"
                type="email"
                required
                value={email1}
                onChange={e => setEmail1(e.target.value)}
                className="bg-muted border-border"
                data-testid="input-email"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">Organization</label>
              <Input
                placeholder="Community General Hospital"
                required
                value={org1}
                onChange={e => setOrg1(e.target.value)}
                className="bg-muted border-border"
                data-testid="input-org"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 font-bold"
              data-testid="btn-submit-demo"
              disabled={submitting1}
            >
              {submitting1 ? (
                <>
                  <span className="mr-2">Sending...</span>
                  <span style={{display:'inline-block', width:'14px', height:'14px', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid white', borderRadius:'50%', animation:'spin 0.8s linear infinite', marginLeft:'8px'}} />
                </>
              ) : (
                "Request Demo"
              )}
            </Button>
          </form>
        <p className="text-xs text-center text-muted-foreground mt-5">
          We respect your inbox. No marketing spam, ever.
        </p>
      </CardContent>
    </Card>
  );

  const Step2 = (
    <Card className="bg-white border-border shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-foreground mb-2">Thanks. Two quick questions to help us tailor your demo.</h3>
        <p className="text-sm text-muted-foreground mb-6">These are optional. Skip if you'd rather just wait for us to reach out.</p>
        <div className="space-y-5">
          <div>
            <label style={labelStyle}>What's your biggest compliance challenge right now?</label>
            <textarea rows={2} value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="e.g. Too many alerts, not enough context" style={{...inputStyle, resize:'vertical'} as React.CSSProperties} />
          </div>
          <div>
            <label style={labelStyle}>What have you tried so far?</label>
            <textarea rows={2} value={tried} onChange={e => setTried(e.target.value)} placeholder="e.g. Epic's built-in audit logs, manual reviews" style={{...inputStyle, resize:'vertical'} as React.CSSProperties} />
          </div>
          <div>
            <label style={labelStyle}>What EHR system do you use?</label>
            <select value={ehr} onChange={e => setEhr(e.target.value)} style={inputStyle}>
              <option value="">Select EHR</option>
              <option value="Epic">Epic</option>
              <option value="Cerner">Cerner</option>
              <option value="Athenahealth">Athenahealth</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>How many employees do you monitor for access?</label>
            <input type="number" value={employees} onChange={e => setEmployees(e.target.value)} placeholder="e.g. 250" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Are you evaluating vendors now or just researching?</label>
            <select value={stage} onChange={e => setStage(e.target.value)} style={inputStyle}>
              <option value="">Select stage</option>
              <option value="Researching">Researching</option>
              <option value="Evaluating">Evaluating</option>
              <option value="RFP">RFP</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>
        <Button
          onClick={submitSurvey}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 font-bold mt-6"
          disabled={submitting2}
        >
          {submitting2 ? (
            <>
              <span className="mr-2">Submitting...</span>
              <span style={{display:'inline-block', width:'14px', height:'14px', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid white', borderRadius:'50%', animation:'spin 0.8s linear infinite', marginLeft:'8px'}} />
            </>
          ) : (
            "Submit responses"
          )}
        </Button>
        <p className="text-xs text-center mt-4">
          <button onClick={skipSurvey} className="text-primary hover:underline cursor-pointer">
            Skip and just send my demo request →
          </button>
        </p>
      </CardContent>
    </Card>
  );

  const Done = (
    <Card className="bg-white border-border shadow-lg">
      <CardContent className="p-8">
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
          <p className="text-green-800 text-sm font-medium">✓ Demo request sent successfully!</p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Thanks! We'll be in touch within 1 business day with sandbox access. In the meantime, explore our{" "}
          <a href="/security" className="text-primary hover:underline font-medium">security architecture</a>
          {" "}— most procurement teams start there.
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section id="demo-section" className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Request a Self-Guided Demo</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              See how SentinelEHR transforms your compliance workflow in your own time. Tailored to your hospital's Epic environment.
            </p>
            <div className="space-y-4">
              {[
                "Self-guided sandbox access — explore on your schedule",
                "Tailored to your Epic Clarity environment",
                "Zero obligation — no sales pressure",
                "Includes a zero PHI storage architecture walkthrough",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — form steps */}
          <FadeIn delay={0.18}>
            {step === 1 && Step1}
            {step === 2 && Step2}
            {step === 'done' && Done}
          </FadeIn>
        </div>
      </div>
    </section>
  );

};


/* ─── Trust Bar ───────────────────────────────────────────────────────────── */
const TrustBar = () => {
  const items = [
    { label: "Epic Clarity", sub: "Native integration" },
    { label: "Read-Only Access", sub: "Zero write permissions" },
    { label: "0 PHI Stored", sub: "Architecture guarantee" },
    { label: "Community Hospitals", sub: "Designed for" },
    { label: "1–3 Person Teams", sub: "Right-sized for" },
  ];

  return (
    <section className="border-y border-border bg-slate-50 py-6" data-testid="trust-bar">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map(({ label, sub }, i) => (
            <div key={i} className="flex items-center gap-3 text-center sm:text-left" data-testid={`trust-item-${i}`}>
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-border" />}
              <div>
                <div className="text-sm font-bold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Testimonials ────────────────────────────────────────────────────────── */
const Testimonials = () => {
  return (
    <section className="py-24 bg-white" data-testid="testimonials">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">What Compliance Teams Say</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for people who protect patients</h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div style={{textAlign:'center', padding:'60px 20px', maxWidth:'600px', margin:'0 auto'}}>
            <p style={{fontSize:'18px', color:'#64748b', lineHeight:'1.7'}}>
              SentinelEHR is currently in design partner phase — working with community health centers to validate our detection engine against real Epic environments.
            </p>
            <p style={{marginTop:'16px', fontSize:'15px', color:'#94a3b8'}}>
              Interested in joining our design partner cohort? Request a demo below.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */
const FAQ = () => {
  const [open, setOpen] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "Does SentinelEHR store or transmit patient data (PHI)?",
      a: "No. SentinelEHR analyzes behavioral metadata only — who accessed what, when, and how often. Patient record content never leaves your Epic environment. The hospital owns and controls all data; SentinelEHR only sees access patterns. This is the core of our architecture, not a policy promise.",
    },
    {
      q: "What Epic tables does SentinelEHR access?",
      a: "SentinelEHR reads from system metadata tables: CLARITY_EMP (employee reference), PAT_ENC (encounter/provider relationships), and ACCESS_LOG (the Epic audit log). It does not access CLARITY.PATIENT, clinical notes, diagnoses, medications, or any table containing clinical content. Your IT director can verify this by reading the open-source clarity_extractor.py script before deployment.",
    },
    {
      q: "How long does setup take?",
      a: "Initial deployment: 2-4 hours for IT to deploy the extractor script and verify the connection. Calibration period: 7-14 days for the ML model to learn your hospital's specific access patterns. After calibration, full operational use. Rule-based detection (R1-R8) is reliable from day one.",
    },
    {
      q: "How does SentinelEHR support HIPAA audit control requirements?",
      a: "SentinelEHR supports HIPAA §164.312(b) audit control workflows through: documented access pattern monitoring, forensically defensible audit trails with actor/timestamp/justification, breach notification clock tracking, and exportable investigation reports. The no clinical content extraction architecture reduces the HIPAA surface area significantly — no clinical content leaves your environment.",
    },
    {
      q: "We have a small compliance team. Is this tool right for us?",
      a: "Yes. SentinelEHR is designed for compliance teams of 1-3 people, not enterprise SOC teams. The Morning Briefing surfaces your top 5 cases for the day. The case file includes pre-built explanations so you don't need a data analyst to interpret alerts. One person can review 30+ alerts per day with this tool — without it, the same person might review 5.",
    },
    {
      q: "What is your pricing model?",
      a: "For design partner phase, no cost — we work with you to validate the product against your environment. Post-design-partner pricing varies by hospital size, deployment scale, and support tier. We design our pricing to be accessible to community hospitals and FQHCs, not just large enterprise systems. A typical community hospital deployment is a fraction of the cost of a single HIPAA compliance audit, and a single caught insider violation that SentinelEHR surfaces can prevent OCR fines that begin at $100 per violation per day. Reach out to hello@sentinelhr.org for a conversation about what makes sense for your organization.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50" data-testid="faq">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Answers for your procurement team</h2>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                className="rounded-xl border border-border bg-white overflow-hidden"
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-foreground text-sm leading-snug">{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4" data-testid={`faq-answer-${i}`}>
                    {a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA Band ────────────────────────────────────────────────────────────── */
const CTABand = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden" data-testid="cta-band">
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to protect your patients<br className="hidden md:block" /> and your organization?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Built for community health centers that need serious monitoring without enterprise complexity. Currently in design partner phase with community health centers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-lg"
              onClick={() => scrollTo("demo-section")}
              data-testid="btn-cta-band-demo"
            >
              Request Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-10 bg-transparent"
              onClick={() => scrollTo("faq")}
              data-testid="btn-cta-band-faq"
            >
              Read FAQs
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/60">No obligation. No sales pressure. Currently in design partner phase with community health centers.</p>
        </FadeIn>
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
            <div className="mb-5">
              <div className="flex items-center gap-2">
                <div style={{backgroundColor:'#0D1117', padding:'4px 8px', borderRadius:'6px', display:'inline-flex', alignItems:'center'}}>
                  <img src="/sentinelehr-logo.png" style={{height:'32px', objectFit:'contain'}} alt="SentinelEHR logo" />
                </div>
                <span className="text-white font-bold text-xl tracking-wider">SENTINELEHR</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Insider risk intelligence built for community hospitals and FQHCs.
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
              <li><a href="/privacy" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#38BDF8] transition-colors">Terms of Service</a></li>
              <li><a href="/security" className="hover:text-[#38BDF8] transition-colors">Security Architecture</a></li>
              <li><a href="/architecture" className="hover:text-[#38BDF8] transition-colors">Zero PHI Architecture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="https://app.sentinelhr.org" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors">
                  Log in
                </a>
              </li>
              <li>
                <a href="mailto:hello@sentinelhr.org" className="hover:text-[#38BDF8] transition-colors">
                  hello@sentinelhr.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Health Case Studies — moved to main page content */}

        <div className="pt-8 border-t border-[#21262d] flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-slate-500">
          <span>© 2026 SentinelEHR Intelligence. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
          <span className="text-right max-w-sm">
            Zero PHI Storage Architecture — Read-only Epic Clarity integration
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
      <TrustBar />
      <Problem />
      <Product />
      <HowItWorks />
      <Why />
      <Testimonials />
      <FAQ />
      <CTABand />
      <DemoForm />
      <section className="py-20 bg-[#0D1117]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h3 className="text-2xl font-bold text-white mb-8">Designed for Your Hospital's Core Roles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#161B22] border-[#21262d]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">The Compliance Officer</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Streamlined alert workflows reduce the noise from thousands of weekly access events down to a handful of prioritized insider risk warnings. Each alert includes the employee, the records accessed, the reason it was flagged, and a one-click path to investigation. Your morning briefing is your queue — what needs you today, not what exists in the system.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#161B22] border-[#21262d]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">The Information Security Officer</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our no clinical content extraction architecture ensures sensitive patient databases never leave your premises, drastically minimizing your external threat landscape. SentinelEHR reads only behavioral metadata. It cannot exfiltrate clinical content because clinical content never crosses the boundary. Your HIPAA audit posture is stronger with a monitoring system that provably cannot access clinical content.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#161B22] border-[#21262d]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">The Privacy Officer</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Immediate context. Plain-English alert summaries enable lean teams to investigate and act on potential breaches without requiring dedicated data analysis. Every investigation is documented with threaded notes, audit trail, and printable HR-ready reports. When OCR asks, you have the evidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </div>
  );
}
