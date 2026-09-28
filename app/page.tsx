import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { BrowserFrame, PhoneFrame } from "@/components/ui/frames";
import { Section } from "@/components/ui/section";
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
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-10 py-6 border-t border-line">
              <div className="flex-1 min-w-0">
                <NowLine />
              </div>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-1 text-sm text-muted" aria-label="Recognition">
                {proof.map((p) => (
                  <li key={p.strong}>
                    <span className="text-ink font-medium">{p.strong}</span> {p.rest}
                  </li>
                ))}
              </ul>
            </div>
          </NowProvider>
        </div>
      </section>

      <Section
        id="selected-projects"
        title="Selected projects"
        aside={
          <>
            <p>Two recent builds: an AI speech coach and a multimodal mental-health app.</p>
            <Link href="/projects" className="inline-block mt-4 text-ink font-medium hover:text-accent transition-colors">
              All projects →
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          <FadeIn>
            <ProjectRow project={main}>
              <BrowserFrame src={main.imageUrl} alt={`${main.title} screenshot`} sizes="(max-width: 1024px) 100vw, 560px" className="w-full" />
            </ProjectRow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ProjectRow project={side}>
              <PhoneFrame src={side.imageUrl} alt={`${side.title} app screenshot`} sizes="200px" className="w-[160px] lg:w-[180px]" />
            </ProjectRow>
          </FadeIn>
        </div>
      </Section>

      <Section id="contact" title="Contact" aside={<p>Open to internships, collaborations, and interesting problems.</p>}>
        <p className="text-muted text-lg">The fastest way to reach me is email.</p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] break-all sm:break-normal underline decoration-accent decoration-2 underline-offset-[8px] hover:text-accent transition-colors"
        >
          {site.email}
        </a>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-muted">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            LinkedIn ↗
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            GitHub ↗
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            Resume ↗
          </a>
        </div>
      </Section>
    </div>
  );
}

/** A project as a wide row: description on the left, screenshot on the right. */
function ProjectRow({ project, children }: { project: Project; children: React.ReactNode }) {
  const stack = project.tags.filter((t) => t !== "Solo Developer").join(" · ");
  return (
    <Link
      href="/projects"
      className="edge-glow relative grid grid-cols-1 md:grid-cols-[1fr_1.25fr] rounded-3xl bg-surface border border-line-strong hover:border-accent transition-colors overflow-hidden group"
    >
      <div className="p-7 md:p-9 flex flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.035em] group-hover:text-accent transition-colors">{project.title}</h3>
          <span className="text-sm text-faint whitespace-nowrap">{project.date}</span>
        </div>
        <p className="text-muted text-base md:text-[17px] leading-relaxed mt-3">{project.description}</p>
        <p className="text-sm text-faint mt-4">{stack}</p>
        <span className="mt-8 md:mt-auto pt-2 inline-flex items-center text-sm font-semibold text-ink group-hover:text-accent transition-colors">
          Read the case study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
      <div className="bg-band border-t md:border-t-0 md:border-l border-line flex items-center justify-center p-6 md:p-8">
        {children}
      </div>
    </Link>
  );
}
