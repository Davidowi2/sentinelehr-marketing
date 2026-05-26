import React, { useState } from "react";
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
  BarChart, 
  ClipboardCheck, 
  Building2, 
  MessageSquare, 
  Code2, 
  AlertTriangle 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg tracking-tight text-foreground">SentinelEHR</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("platform")} className="hover:text-primary transition-colors">Platform</button>
          <button onClick={() => scrollTo("intelligence")} className="hover:text-primary transition-colors">Intelligence</button>
          <button onClick={() => scrollTo("compliance")} className="hover:text-primary transition-colors">Compliance</button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">Login</Button>
          <Button onClick={() => scrollTo("demo")} className="bg-primary text-primary-foreground hover:bg-primary/90">Request Demo</Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="platform" className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary gap-1.5 py-1 px-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              HIPAA §164.312(b) Compliant
            </Badge>
            <Badge variant="outline" className="border-border bg-muted text-muted-foreground gap-1.5 py-1 px-3">
              0 PHI Stored
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Healthcare Insider <br className="hidden md:block" />
            Risk Intelligence
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Real-time behavioral monitoring for Epic EHR. Detect unauthorized access before it becomes a breach. Built for the modern compliance team.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" onClick={() => {
              const el = document.getElementById("demo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted px-8 text-foreground">
              Explore Platform
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">325K</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Events Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">PHI Stored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">86%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Alert Precision</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10">
          <Card className="border-border bg-card shadow-2xl relative overflow-hidden">
            <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4">
              <div className="text-xs font-medium text-muted-foreground">SentinelEHR Dashboard — Overview</div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Total Alerts</div>
                  <div className="text-2xl font-bold text-foreground">47</div>
                </div>
                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <div className="text-sm text-destructive mb-1 font-medium">High Risk</div>
                  <div className="text-2xl font-bold text-destructive">12</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Resolved</div>
                  <div className="text-2xl font-bold text-foreground">35</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-foreground mb-4">Event Volume (7 Days)</div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 30, 85, 45, 90, 50].map((height, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-4">
                <Card className="bg-card border-destructive shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                  <div className="flex items-start gap-3 p-4">
                    <div className="p-2 bg-destructive/10 rounded-full text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-destructive text-sm">Critical Alert</div>
                      <div className="text-sm text-muted-foreground mt-1">Bulk Export Detected · Dr. K. Wu · 3m ago</div>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your compliance team is drowning in alerts</h2>
            <p className="text-lg text-muted-foreground">
              Legacy monitoring generates noise, not insight. SentinelEHR cuts through the volume to protect what matters most.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <Card className="bg-card border-border hover:border-primary transition-colors duration-300 h-full">
              <CardContent className="p-8">
                <BellOff className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Alert Fatigue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thousands of alerts per day. Most are noise. Real threats hide inside the queue, waiting for the one minute you look away.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="bg-card border-border hover:border-primary transition-colors duration-300 h-full">
              <CardContent className="p-8">
                <History className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Slow Investigations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The average insider breach goes undetected for months. Manual log review takes days per incident, losing critical time.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="bg-card border-border hover:border-primary transition-colors duration-300 h-full">
              <CardContent className="p-8">
                <ShieldAlert className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Sensitive Record Risk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  HIV records, behavioral health notes, VIP patients — these require protection beyond standard monitoring protocols.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "alerts" | "investigate">("alerts");

  return (
    <section id="intelligence" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SentinelEHR surfaces what matters</h2>
            <p className="text-lg text-muted-foreground">
              Advanced machine learning isolates true anomalous behavior, presenting plain-English context so you can take immediate action.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <Card className="bg-card border-border shadow-xl overflow-hidden">
            <div className="flex border-b border-border bg-muted/30">
              <button 
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'overview' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab("alerts")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'alerts' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Alerts Queue
              </button>
              <button 
                onClick={() => setActiveTab("investigate")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'investigate' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Investigation
              </button>
            </div>
            
            <div className="p-0 bg-[#161618] min-h-[400px]">
              {activeTab === "overview" && (
                <div className="p-8 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-semibold">System Status</h3>
                    <div className="flex items-center gap-2 text-sm text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-full border border-[#10B981]/20">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      Connected to Epic Clarity
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-secondary/30 p-6 rounded-xl border border-border flex items-center justify-center">
                      <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-[16px] border-secondary border-t-destructive border-r-warning border-b-primary transform rotate-45">
                        <div className="absolute inset-0 m-auto flex flex-col items-center justify-center transform -rotate-45">
                          <span className="text-3xl font-bold">47</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Recent High Priority</h4>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-secondary/50 p-4 rounded-lg border border-border flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Pattern Anomaly: After Hours</div>
                            <div className="text-xs text-muted-foreground mt-1">14 records accessed in 2 mins</div>
                          </div>
                          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Critical</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "alerts" && (
                <div className="p-0 overflow-x-auto animate-in fade-in duration-300">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                      <tr>
                        <th className="px-6 py-4 font-medium">User</th>
                        <th className="px-6 py-4 font-medium">Department</th>
                        <th className="px-6 py-4 font-medium">Action Detected</th>
                        <th className="px-6 py-4 font-medium">Risk Score</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="bg-destructive/5 hover:bg-secondary/40 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">Dr. K. Wu</td>
                        <td className="px-6 py-4 text-muted-foreground">Oncology</td>
                        <td className="px-6 py-4">Bulk Record Export</td>
                        <td className="px-6 py-4"><span className="text-destructive font-bold">94</span></td>
                        <td className="px-6 py-4"><Badge className="bg-destructive hover:bg-destructive text-destructive-foreground">CRITICAL</Badge></td>
                      </tr>
                      <tr className="hover:bg-secondary/40 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">M. Rodriguez</td>
                        <td className="px-6 py-4 text-muted-foreground">Admin</td>
                        <td className="px-6 py-4">Off-hours Access (VIP)</td>
                        <td className="px-6 py-4"><span className="text-warning font-bold">67</span></td>
                        <td className="px-6 py-4"><Badge variant="outline" className="bg-warning/10 text-warning border-warning/20 hover:bg-warning/20">HIGH</Badge></td>
                      </tr>
                      <tr className="hover:bg-secondary/40 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">J. Smith, RN</td>
                        <td className="px-6 py-4 text-muted-foreground">Emergency</td>
                        <td className="px-6 py-4">Unusual Chart View</td>
                        <td className="px-6 py-4"><span className="text-primary font-bold">42</span></td>
                        <td className="px-6 py-4"><Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">ELEVATED</Badge></td>
                      </tr>
                      <tr className="hover:bg-secondary/40 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">A. Patel</td>
                        <td className="px-6 py-4 text-muted-foreground">Cardiology</td>
                        <td className="px-6 py-4">Cross-department Access</td>
                        <td className="px-6 py-4"><span className="text-muted-foreground font-bold">18</span></td>
                        <td className="px-6 py-4"><Badge variant="outline" className="bg-muted text-muted-foreground border-border">LOW</Badge></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "investigate" && (
                <div className="p-8 animate-in fade-in duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Incident #4928 - Bulk Record Export</h3>
                        <p className="text-muted-foreground text-sm">Subject: Dr. K. Wu (Oncology) • Detected: Today, 14:32</p>
                      </div>
                      
                      <div className="relative pl-6 border-l-2 border-border space-y-8">
                        <div className="relative">
                          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                          <div className="text-sm font-semibold text-primary mb-1">14:28 - 14:30</div>
                          <div className="bg-secondary/40 p-3 rounded-lg border border-border text-sm">
                            Accessed 14 discrete patient records across 3 different departments (Oncology, Pediatrics, Emergency).
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-destructive ring-4 ring-background" />
                          <div className="text-sm font-semibold text-destructive mb-1">14:32</div>
                          <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/20 text-sm">
                            Initiated bulk export function on accessed records. Action blocked by policy, alert generated.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-80">
                      <div className="bg-secondary/30 p-5 rounded-xl border border-border flex flex-col h-full">
                        <label className="text-sm font-medium mb-2 block">Investigation Notes</label>
                        <textarea 
                          className="w-full bg-background border border-border rounded-md p-3 text-sm flex-1 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          placeholder="Document findings here..."
                          defaultValue="Reviewed access logs. User does not have scheduled patients in Pediatrics or Emergency today."
                        />
                        <div className="space-y-2 mt-auto">
                          <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">Escalate to HR</Button>
                          <Button variant="outline" className="w-full">Mark Resolved</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps to total visibility</h2>
            <p className="text-lg text-muted-foreground">
              A frictionless deployment model designed specifically for Epic environments.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <FadeIn delay={0.1} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <Network className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Read-only access to Epic Clarity via the CLARITY_EMP and ACCESS_LOG tables. No PHI ever leaves your hospital's secure environment.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <BarChart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Analyze</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SentinelEHR's Isolation Forest ML model scores every event for anomalous patterns across shifts, locations, and departments.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <ClipboardCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Act</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Compliance officers review prioritized, plain-English alerts and manage full investigations in one unified workflow.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Why = () => {
  return (
    <section id="compliance" className="py-24">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-secondary/30 border-border">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Zero PHI Stored</h4>
                <p className="text-sm text-muted-foreground">We analyze behavioral patterns, not patient records. Your data stays yours, guaranteed by our architecture.</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-border">
              <CardContent className="p-6">
                <Building2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Built for Community</h4>
                <p className="text-sm text-muted-foreground">Designed for compliance teams of 1-3 people, not enterprise SOC centers with dedicated threat analysts.</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-border">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Explainable Alerts</h4>
                <p className="text-sm text-muted-foreground">Every flag includes a plain-English explanation. No black-box scores that require a data scientist to decode.</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-border">
              <CardContent className="p-6">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Epic-Native</h4>
                <p className="text-sm text-muted-foreground">Built against real Epic Clarity table structures. Drop-in compatible with standard Epic environments.</p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy-first security for mission-driven healthcare</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We understand that community health centers operate with limited resources but face massive regulatory pressure. SentinelEHR provides enterprise-grade detection at community hospital scale.
          </p>
          <Card className="bg-card border-l-4 border-l-primary border-y-border border-r-border rounded-l-none">
            <CardContent className="p-6">
              <blockquote className="text-foreground font-medium text-lg leading-relaxed italic mb-4">
                "Our zero-PHI architecture is the strongest differentiator for procurement departments. We don't just secure your data — we avoid taking it in the first place."
              </blockquote>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                — SentinelEHR Architecture Team
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  organization: z.string().min(2, "Organization is required"),
  email: z.string().email("Valid business email is required"),
  role: z.string().min(2, "Role is required"),
});

const DemoForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      role: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const subject = encodeURIComponent("Request Demo: SentinelEHR");
    const body = encodeURIComponent(
      `Name: ${values.name}\nOrganization: ${values.organization}\nEmail: ${values.email}\nRole: ${values.role}\n\nI would like to request a live demonstration.`
    );
    window.location.href = `mailto:demo@sentinelehr.com?subject=${subject}&body=${body}`;
    toast({
      title: "Request Prepared",
      description: "Opening your default email client...",
    });
    form.reset();
  };

  return (
    <section id="demo" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Live Demonstration</h2>
            <p className="text-lg text-muted-foreground">
              See how SentinelEHR can transform your compliance workflow in 30 minutes.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="max-w-md mx-auto">
          <Card className="bg-card border-border shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-input border-border" {...field} />
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
                        <FormLabel>Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Community General Hospital" className="bg-input border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@hospital.org" type="email" className="bg-input border-border" {...field} />
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
                        <FormLabel>Your Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-input border-border">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Compliance Officer">Compliance Officer</SelectItem>
                            <SelectItem value="IT Director">IT Director</SelectItem>
                            <SelectItem value="CISO">CISO</SelectItem>
                            <SelectItem value="Privacy Officer">Privacy Officer</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Schedule Demo
                  </Button>
                </form>
              </Form>
              <p className="text-xs text-center text-muted-foreground mt-6">
                We respect your inbox. No marketing spam, ever.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0F] pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg tracking-tight text-foreground">SentinelEHR</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Insider risk intelligence platform built exclusively for community health systems using Epic EHR.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Detection Engine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Epic Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Trust & Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Architecture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="mailto:demo@sentinelehr.com" className="hover:text-primary transition-colors">Contact Sales</a></li>
              <li><a href="https://github.com/sentinelehr" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex gap-2">
            <span>© 2025 SentinelEHR Intelligence. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Currently in Design Partner Phase</span>
          </div>
          <div className="text-center md:text-right font-medium">
            HIPAA §164.312(b) Audit Controls Compliant. Zero PHI storage architecture. Read-only Epic Clarity integration.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
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