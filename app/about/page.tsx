import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { education, experience, honors, site, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Naresh Rajesh: software engineering intern at iVue, co-founder of InnovateATL and LearnAI Forsyth, and FBLA chapter co-president in the Atlanta area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHeader
        kicker={`About · ${site.location}`}
        title={
          <>
            I build software, and the teams and communities around it<span className="text-accent">.</span>
          </>
        }
      />

      {/* Story + photo */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-5 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a software engineer and a student at West Forsyth High School, taking Georgia Tech computer
              science and math courses through dual enrollment. Right now I&apos;m a software engineering intern at{" "}
              <span className="text-ink font-medium">iVue</span>, shipping features and leading backend work on AWS for a
              drone ground-control platform.
            </p>
            <p>
              I like building things that leave the demo stage: AI speech coaching, multimodal mental-health check-ins,
              and free AI tools for local nonprofits. Outside of code, I co-founded a statewide startup competition and
              lead one of Georgia&apos;s largest FBLA chapters.
            </p>
            <p>Off-screen, I&apos;m at the gym, playing soccer, or watching Bayern Munich and the Atlanta Hawks.</p>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-6 mt-3 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition"
            >
              View full resume <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <figure className="lg:col-span-6 rounded-2xl overflow-hidden border border-line-strong">
            <div className="relative aspect-[3/2]">
              <Image
                src="/innovateatl-demo.webp"
                alt="Naresh Rajesh demoing a project with teammates at InnovateATL"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-[center_25%]"
              />
            </div>
          </figure>
        </div>
      </div>

      <Section id="experience" title="Experience">
        <ul className="divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li key={item.org + item.role} className="py-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-baseline">
              <div>
                <p className="text-lg text-ink font-medium">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-line-strong hover:border-accent hover:text-accent transition-colors"
                    >
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                <p className="text-muted mt-0.5">{item.role}</p>
              </div>
              <p className="text-sm text-faint whitespace-nowrap">
                {item.date}
                {item.current && <span className="sr-only"> (current)</span>}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="honors" title="Honors">
        <ul className="divide-y divide-line border-y border-line">
          {honors.map((h) => (
            <li key={h.title + h.org} className="py-5 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-1 sm:gap-8 items-baseline">
              <p className="text-lg text-ink font-medium">{h.title}</p>
              <p className="text-muted">{h.org}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-baseline">
          <p className="text-lg text-ink font-medium">{education.school}</p>
          <p className="text-sm text-faint">{education.graduation}</p>
        </div>
        <p className="text-muted mt-1">Class rank {education.rank}</p>
        <p className="mt-6 pt-6 border-t border-line text-sm text-faint">Dual enrollment</p>
        <dl className="mt-3 space-y-2">
          {education.dualEnrollment.map((d) => (
            <div key={d.school} className="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-8">
              <dt className="text-ink">{d.school}</dt>
              <dd className="text-muted">{d.courses.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((s) => (
            <div key={s.group} className="py-4 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-8">
              <dt className="text-ink font-medium">{s.group}</dt>
              <dd className="text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
