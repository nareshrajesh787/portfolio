import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/60 pt-16 pb-8 mt-auto z-10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-slate-900 tracking-tight text-xl mb-4 block">
              Naresh<span className="text-slate-400">Rajesh</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI Engineer & Business Strategist building data-driven solutions and high-performing teams.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-2">Navigation</h4>
            <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">Home</Link>
            <Link href="/case-studies" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">Work</Link>
            <Link href="/leadership" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">Leadership</Link>
            <Link href="/about" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">About</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-2">Connect</h4>
            <a href="mailto:placeholder@example.com" className="group flex items-center text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">
              Email <ArrowUpRight className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">
              GitHub <ArrowUpRight className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors w-fit">
              LinkedIn <ArrowUpRight className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Naresh Rajesh. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-slate-400 text-xs tracking-wide">
            <span>BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
