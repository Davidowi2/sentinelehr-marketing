import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
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
