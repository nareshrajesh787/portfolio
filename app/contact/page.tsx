import { Metadata } from "next";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Naresh Rajesh about internships, projects, or collaborations.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { href: `mailto:${site.email}`, label: "Email", detail: site.email, icon: Mail },
  { href: site.linkedin, label: "LinkedIn", detail: "linkedin.com/in/naresh-rajesh", icon: Linkedin },
  { href: site.github, label: "GitHub", detail: "github.com/nareshrajesh787", icon: Github },
  { href: site.resume, label: "Resume", detail: "View PDF", icon: FileText },
];

export default function ContactPage() {
  return (
    <div className="w-full pb-28">
      <PageHeader
        kicker="Contact"
        title={
          <>
            Let&apos;s talk<span className="text-accent">.</span>
          </>
        }
        lede="I'm always open to discussing internships, new projects, or opportunities to collaborate. The fastest way to reach me is email."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn>
          <ul className="space-y-3">
            {channels.map(({ href, label, detail, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-line-strong hover:border-accent transition-colors group"
                >
                  <span className="h-11 w-11 rounded-xl bg-band border border-line flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold">{label}</span>
                    <span className="block text-sm text-muted truncate">{detail}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-faint group-hover:text-accent transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
