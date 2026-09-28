"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-bg text-ink font-sans">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <p className="font-mono text-sm text-accent mb-4">Error</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">Something went wrong</h1>
          <p className="text-lg text-muted mb-10 max-w-md">An unexpected error occurred. Please try again.</p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center h-12 px-6 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition"
          >
            Try again <RotateCcw className="ml-2 h-4 w-4" />
          </button>
        </div>
      </body>
    </html>
  );
}
