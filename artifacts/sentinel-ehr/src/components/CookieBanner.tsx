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
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#0D1117",
        borderTop: "1px solid #21262d",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}
      role="dialog"
      aria-label="Cookie notice"
    >
      <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: "1.5" }}>
        This site uses cookies to process demo requests via Formspree. By continuing you accept our{" "}
        <a
          href="/privacy"
          style={{ color: "#38BDF8", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={dismiss}
        style={{
          background: "#1e293b",
          border: "1px solid #334155",
          color: "#e2e8f0",
          borderRadius: "6px",
          padding: "6px 16px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
