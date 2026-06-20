import { useEffect } from "react";

/**
 * Sets the canonical URL for the current page.
 * Call this in every page component to ensure correct SEO canonicalization.
 */
export function useCanonical(path: string) {
  useEffect(() => {
    const base = "https://sentinelhr.org";
    const href = path === "/" ? base : `${base}${path}`;
    let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement("link");
      el.rel = "canonical";
      document.head.appendChild(el);
    }
    el.href = href;
    return () => {
      // cleanup — remove on unmount so next page starts fresh
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, [path]);
}
