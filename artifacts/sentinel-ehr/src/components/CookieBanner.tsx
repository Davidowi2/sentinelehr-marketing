import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

const STORAGE_KEY = "sentinel_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    setConsent(stored);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 pointer-events-none"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-0.5">
                We value your privacy
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies and analytics only to improve your experience and
                understand how visitors use this site. No PHI is ever collected.
                See our{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 hover:text-primary transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={decline}
                className="flex-1 sm:flex-none text-xs font-medium text-muted-foreground border border-border rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none text-xs font-semibold text-white bg-primary rounded-lg px-5 py-2 hover:bg-primary/90 transition-colors"
              >
                Accept All
              </button>
            </div>

            <button
              onClick={decline}
              aria-label="Close"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors sm:hidden"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
