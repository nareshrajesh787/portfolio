import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHeader } from "@/components/ui/page-header";
import { education, experience, honors, site, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Naresh Rajesh: software engineering intern at iVue, co-founder of InnovateATL and LearnAI Forsyth, and FBLA chapter co-president in the Atlanta area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="w-full pb-28">
      <PageHeader
        kicker={`About · ${site.location}`}
        title={
          <>
            I build software, and the teams and communities around it<span className="text-accent">.</span>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20 md:space-y-24">
        {/* Story + photo */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5 text-lg text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer and a student at West Forsyth High School, taking Georgia Tech computer
                science and math courses through dual enrollment. Right now I&apos;m a software engineering intern at{" "}
                <span className="text-ink font-medium">iVue</span>, shipping features and leading backend work on AWS for
                a drone ground-control platform.
              </p>
              <p>
                I like building things that leave the demo stage: AI speech coaching, multimodal mental-health check-ins,
                and free AI tools for local nonprofits. Outside of code, I co-founded a statewide startup competition and
                lead one of Georgia&apos;s largest FBLA chapters.
              </p>
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
        </FadeIn>

        {/* Highlights + honors side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
          <FadeIn>
            <section aria-labelledby="highlights">
              <SectionTitle id="highlights">Highlights</SectionTitle>
              <ul className="divide-y divide-line border-y border-line">
                {experience.map((item) => (
                  <li key={item.org + item.role} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6">
                    <p className="text-ink">
                      {item.role} ·{" "}
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold border-b border-line-strong hover:border-accent hover:text-accent transition-colors"
                        >
                          {item.org}
                        </a>
                      ) : (
                        <span className="font-semibold">{item.org}</span>
                      )}
                    </p>
                    <p className="flex items-center gap-2 font-mono text-xs text-faint whitespace-nowrap">
                      {item.current && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />}
                      {item.date}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.05}>
            <section aria-labelledby="honors">
              <SectionTitle id="honors">Honors</SectionTitle>
              <ul className="divide-y divide-line border-y border-line">
                {honors.map((h) => (
                  <li key={h.title + h.org} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6">
                    <p className="text-ink font-medium">{h.title}</p>
                    <p className="text-sm text-muted sm:text-right">{h.org}</p>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </div>

        {/* Education, skills, off-screen */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SideCard title="Education">
              <p className="text-ink font-semibold">{education.school}</p>
              <p className="text-sm text-muted mt-1">{education.graduation}</p>
              <dl className="mt-4">
                <Stat label="Class rank" value={education.rank} />
              </dl>
              <div className="mt-5 pt-4 border-t border-line space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Dual enrollment</p>
                {education.dualEnrollment.map((d) => (
                  <p key={d.school} className="text-sm text-muted">
                    <span className="text-ink font-medium">{d.school}</span>
                    {d.courses.length > 0 && <>: {d.courses.join(", ")}</>}
                  </p>
                ))}
              </div>
            </SideCard>

            <SideCard title="Skills">
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.group}>
                    <p className="text-sm text-ink font-medium mb-2">{s.group}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="font-mono text-[11px] text-muted border border-line-strong px-2 py-0.5 rounded-md">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SideCard>

            <SideCard title="Off-screen">
              <p className="text-sm text-muted leading-relaxed">
                Hitting the gym, playing soccer, and supporting Bayern Munich &amp; the Atlanta Hawks.
              </p>
            </SideCard>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold tracking-[-0.03em] mb-6">
      {children}
    </h2>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-surface border border-line-strong p-6 h-full">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-band border border-line px-3 py-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">{label}</dt>
      <dd className="text-sm text-ink font-semibold mt-0.5">{value}</dd>
    </div>
  );
}
