"use client";

import { useEffect } from "react";

/**
 * Placeholder component for site analytics.
 * Drop in your preferred provider here (e.g., Vercel Analytics, PostHog, Google Analytics, Plausible)
 */
export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // TODO: Initialize your analytics tracking here
      // console.log("Analytics initialized");
    }
  }, []);

  return null;
}
