import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { BrowserFrame, PhoneFrame } from "@/components/ui/frames";
import { NowLine, NowPanel, NowProvider } from "@/components/home/Now";
import { homeProjects, now, proof, site } from "@/lib/content";

export default function Home() {
  const [main, side] = homeProjects;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 md:pt-36">
          <NowProvider items={now}>
            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-10 md:gap-14 items-center pb-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-5">
                  {site.role} · {site.location}
                </p>
                <h1 className="text-[2.6rem] leading-[1.04] sm:text-6xl md:text-[4rem] font-bold tracking-[-0.04em]">
                  I engineer AI products <span className="text-accent">people actually use.</span>
                </h1>
                <p className="text-lg text-muted leading-relaxed max-w-xl mt-6">
                  I&apos;m {site.name}, interning at iVue on drone-platform software. I build full-stack apps and
                  multimodal AI pipelines with React, FastAPI, and AWS.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
            <NowLine />
          </NowProvider>

          <ul className="flex flex-wrap gap-2.5 py-5 border-t border-line" aria-label="Recognition">
            {proof.map((p) => (
              <li key={p.strong} className="text-[13.5px] font-medium text-muted bg-surface border border-line px-3.5 py-2 rounded-lg">
                <b className="text-accent font-semibold">{p.strong}</b> {p.rest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected projects */}
      <section className="py-20 md:py-28" aria-labelledby="selected-projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-baseline justify-between mb-8">
            <h2 id="selected-projects" className="text-3xl font-bold tracking-[-0.03em]">Selected projects</h2>
            <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FadeIn className="md:col-span-2">
              <Link
                href="/projects"
                className="edge-glow relative h-full flex flex-col gap-5 p-7 rounded-3xl bg-surface border border-line-strong hover:border-accent transition-colors group"
              >
                <ProjectTags tags={main.tags.filter((t) => t !== "Solo Developer").slice(0, 3)} />
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] group-hover:text-accent transition-colors">{main.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mt-2">{main.summary}</p>
                </div>
                <BrowserFrame src={main.imageUrl} alt={`${main.title} screenshot`} sizes="(max-width: 768px) 100vw, 640px" className="mt-auto" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/projects"
                className="edge-glow relative h-full flex flex-col gap-5 p-7 rounded-3xl bg-surface border border-line-strong hover:border-accent transition-colors group"
              >
                <ProjectTags tags={side.tags.slice(0, 2)} />
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] group-hover:text-accent transition-colors">{side.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mt-2">{side.summary}</p>
                </div>
                <PhoneFrame src={side.imageUrl} alt={`${side.title} app screenshot`} sizes="160px" className="w-[150px] mx-auto mt-auto" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-line bg-band">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
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

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {tags.map((t) => (
        <li key={t} className="font-mono text-[11.5px] font-medium text-accent bg-accent-soft px-2 py-1 rounded-md">
          {t}
        </li>
      ))}
    </ul>
  );
}
