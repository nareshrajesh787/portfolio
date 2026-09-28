import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center min-h-[80vh] px-4 w-full text-center">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <p className="relative font-mono text-sm text-accent mb-4">404</p>
      <h1 className="relative text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-4">Page not found</h1>
      <p className="relative text-lg text-muted mb-10 max-w-md">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link
        href="/"
        className="relative inline-flex items-center h-12 px-6 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition"
      >
        Return home <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
