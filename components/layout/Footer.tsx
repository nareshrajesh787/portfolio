import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/lib/content";

const external = [
  { href: `mailto:${site.email}`, label: "Email" },
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.resume, label: "Resume" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-band mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2">
            <Link href="/" className="font-bold tracking-tight text-lg">
              Naresh<span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mt-3">
              Software engineer in {site.location}, building full-stack products and multimodal AI pipelines.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint mb-1">Pages</h2>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted hover:text-ink text-sm w-fit transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint mb-1">Connect</h2>
            {external.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center text-muted hover:text-ink text-sm w-fit transition-colors"
              >
                {link.label}
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:text-accent transition" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-faint text-xs">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <p className="font-mono">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
