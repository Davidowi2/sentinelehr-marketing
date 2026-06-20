import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import SecurityPage from "@/pages/Security";
import ArchitecturePage from "@/pages/Architecture";
import HealthcareComplianceMonitoringPage from "@/pages/UseCaseHealthcareComplianceMonitoring";
import HIPAAAuditControlsPage from "@/pages/UseCaseHIPAAAuditControls";
import InsiderThreatDetectionPage from "@/pages/UseCaseInsiderThreatDetection";
import EHRAccessMonitoringPage from "@/pages/UseCaseEHRAccessMonitoring";
import EpicClarityExtractorPage from "@/pages/UseCaseEpicClarityExtractor";
import SentinelEHRvsProtenusPage from "@/pages/UseCaseSentinelEHRvsProtenus";
import HIPAABreachNotificationPage from "@/pages/UseCaseHIPAABreachNotification";
import AboutPage from "@/pages/About";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Fallback component that handles unknown routes by rendering Home
// This ensures SPA routing works on direct navigation
function RouteFallback() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Let wouter handle the current path - don't redirect, just render
    // The Switch will catch known routes, and this acts as a safety net
  }, []);
  
  return <Home />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/architecture" component={ArchitecturePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/use-cases/healthcare-compliance-monitoring" component={HealthcareComplianceMonitoringPage} />
      <Route path="/use-cases/HIPAA-audit-controls" component={HIPAAAuditControlsPage} />
      <Route path="/use-cases/insider-threat-detection" component={InsiderThreatDetectionPage} />
      <Route path="/use-cases/EHR-access-monitoring" component={EHRAccessMonitoringPage} />
      <Route path="/use-cases/Epic-Clarity-extractor" component={EpicClarityExtractorPage} />
      <Route path="/use-cases/SentinelEHR-vs-Protenus" component={SentinelEHRvsProtenusPage} />
      <Route path="/use-cases/HIPAA-breach-notification" component={HIPAABreachNotificationPage} />
      {/* Catch-all: render Home for any unmatched route to prevent 404 */}
      <Route component={RouteFallback} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
