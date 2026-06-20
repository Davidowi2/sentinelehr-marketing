import React, { useState, useEffect } from "react";

const STORAGE_KEY = "sentinel_cookie_dismissed";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 md:bottom-8 z-50 bg-white border border-slate-200 shadow-lg rounded-xl p-4 flex items-center justify-between gap-4 max-w-3xl mx-auto"
      role="dialog"
      aria-label="Cookie notice"
    >
      <p className="text-sm text-slate-700 leading-relaxed">
        We use cookies to improve your experience and understand how the site is used.{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Read our privacy policy
        </a>
      </p>
      <button
        onClick={dismiss}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
      >
        Got it
      </button>
    </div>
  );
}
