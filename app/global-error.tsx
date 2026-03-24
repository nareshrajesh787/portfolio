"use client";

import { useEffect } from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 w-full bg-slate-50">
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-red-100 shadow-sm">
            <AlertOctagon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-center">Something went wrong!</h2>
          <p className="text-lg text-slate-500 mb-10 text-center max-w-md">
            A critical application error occurred. We've been notified.
          </p>
          <Button 
            onClick={() => reset()}
            size="lg" 
            className="rounded-2xl h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Try again <RotateCcw className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </body>
    </html>
  );
}
