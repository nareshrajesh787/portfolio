import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { BrowserFrame, PhoneFrame } from "@/components/ui/frames";
import { NowLine, NowPanel, NowProvider } from "@/components/home/Now";
import { homeProjects, now, proof, site, type Project } from "@/lib/content";

export default function Home() {
  const [main, side] = homeProjects;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 md:pt-36">
          <NowProvider items={now}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-center pb-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-6">
                  {site.role} · {site.location}
                </p>
                <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-[-0.045em]">
                  I engineer AI products <span className="text-accent">people actually use.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mt-7">
                  I&apos;m {site.name}, interning at iVue on drone-platform software. I build full-stack apps and
                  multimodal AI pipelines with React, FastAPI, and AWS.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition group"
                  >
                    Explore my work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-line-strong text-ink font-semibold hover:border-ink transition-colors"
                  >
                    View resume <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <NowPanel src="/innovateatl-speaking.jpg" alt="Naresh Rajesh speaking at InnovateATL" />
            </div>

            {/* Now + recognition share one row on wide screens */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-5 xl:gap-10 py-6 border-t border-line">
              <div className="flex-1 min-w-0">
                <NowLine />
              </div>
              <ul className="flex flex-wrap gap-2.5" aria-label="Recognition">
                {proof.map((p) => (
                  <li key={p.strong} className="text-[13.5px] font-medium text-muted bg-surface border border-line px-3.5 py-2 rounded-lg">
                    <b className="text-accent font-semibold">{p.strong}</b> {p.rest}
                  </li>
                ))}
              </ul>
            </div>
          </NowProvider>
        </div>
      </section>

      {/* Selected projects: full-width rows */}
      <section className="py-20 md:py-28" aria-labelledby="selected-projects">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-baseline justify-between mb-10">
            <h2 id="selected-projects" className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">Selected projects</h2>
            <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent transition-colors">
              View all →
            </Link>
          </div>

          <div className="space-y-6">
            <FadeIn>
              <ProjectRow project={main} tags={main.tags.filter((t) => t !== "Solo Developer")}>
                <BrowserFrame src={main.imageUrl} alt={`${main.title} screenshot`} sizes="(max-width: 1024px) 100vw, 720px" className="w-full" />
              </ProjectRow>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProjectRow project={side} tags={side.tags}>
                <PhoneFrame src={side.imageUrl} alt={`${side.title} app screenshot`} sizes="200px" className="w-[170px] lg:w-[190px]" />
              </ProjectRow>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-line bg-band">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em]">
              Let&apos;s build something<span className="text-accent">.</span>
            </h2>
            <p className="text-muted text-lg mt-4 max-w-lg">
              Have a role, project, or idea in mind? I&apos;d love to hear about it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition"
            >
              Email me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-line-strong font-semibold hover:border-ink transition-colors"
            >
              LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/** A project as a wide row: description on the left, screenshot on the right. */
function ProjectRow({ project, tags, children }: { project: Project; tags: string[]; children: React.ReactNode }) {
  return (
    <Link
      href="/projects"
      className="edge-glow relative grid grid-cols-1 lg:grid-cols-[2fr_3fr] rounded-3xl bg-surface border border-line-strong hover:border-accent transition-colors overflow-hidden group"
    >
      <div className="p-7 md:p-10 flex flex-col">
        <ul className="flex flex-wrap gap-1.5 mb-6" aria-label="Tech stack">
          {tags.map((t) => (
            <li key={t} className="font-mono text-[11.5px] font-medium text-accent bg-accent-soft px-2 py-1 rounded-md">
              {t}
            </li>
          ))}
        </ul>
        <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.035em] group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-base md:text-lg leading-relaxed mt-3">{project.description}</p>
        <p className="text-[15px] text-muted leading-relaxed mt-4">{project.impact}</p>
        <span className="mt-8 lg:mt-auto pt-2 inline-flex items-center text-sm font-semibold text-ink group-hover:text-accent transition-colors">
          Read the case study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
      <div className="bg-band border-t lg:border-t-0 lg:border-l border-line flex items-center justify-center p-6 md:p-10">
        {children}
      </div>
    </Link>
  );
}
