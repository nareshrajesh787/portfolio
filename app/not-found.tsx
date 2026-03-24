"use client";

import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center min-h-[70vh] px-4 w-full">
      <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 mb-8 border border-brand-100">
        <AlertCircle className="w-10 h-10" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 text-center">Page Not Found</h2>
      <p className="text-xl text-slate-500 mb-10 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="rounded-2xl h-14 px-8 bg-brand-600 hover:bg-brand-700 text-white transition-all shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
        <Link href="/">
          Return Home <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
