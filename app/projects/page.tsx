"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHeader } from "@/components/ui/page-header";
import { PhoneFrame } from "@/components/ui/frames";
import { featuredProject, moreProjects, type Project } from "@/lib/content";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const expanded = expandedId !== null ? moreProjects[expandedId] : null;

  const toggleExpand = (idx: number) => setExpandedId(expandedId === idx ? null : idx);

  return (
    <div className="w-full pb-28">
      <PageHeader
        kicker="Projects"
        title="Systems & Strategy"
        lede="Deep dives into my AI builds and full-stack applications. Focused on the intersection of complex data and human-centric design."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24">
        {/* Featured Project */}
        <section aria-labelledby="featured">
          <SectionLabel id="featured" title="Featured Build" note="Deep dive" />

          <FadeIn>
            <article className="edge-glow relative grid grid-cols-1 lg:grid-cols-2 bg-surface border border-line-strong rounded-3xl overflow-hidden">
              <div className="p-8 md:p-10 lg:border-r border-line flex flex-col">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line mb-8">
                  <Image src={featuredProject.imageUrl} alt={`${featuredProject.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                </div>
                <DateChip>{featuredProject.date}</DateChip>
                <h3 className="text-4xl lg:text-5xl font-bold tracking-[-0.04em] mb-5">{featuredProject.title}</h3>
                <Tags tags={featuredProject.tags} />
                <ProjectLinks project={featuredProject} className="mt-auto pt-8" />
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center gap-8">
                <Detail label="The Problem">{featuredProject.problem}</Detail>
                <Detail label="The Approach">{featuredProject.approach}</Detail>
                <Detail label="The Impact" emphasis>{featuredProject.impact}</Detail>
              </div>
            </article>
          </FadeIn>
        </section>

        {/* Additional Projects */}
        <section aria-labelledby="additional">
          <SectionLabel id="additional" title="Additional Projects" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {moreProjects.map((project, idx) => {
              const open = expandedId === idx;
              return (
                <FadeIn key={project.title} delay={idx * 0.08} className="h-full">
                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    aria-expanded={open}
                    aria-controls="project-details"
                    className={`text-left h-full w-full flex flex-col p-7 rounded-3xl bg-surface border transition-colors group ${
                      open ? "border-accent" : "border-line-strong hover:border-accent/60"
                    }`}
                  >
                    <span className="text-sm text-faint mb-4">{project.date}</span>
                    <h3 className={`text-2xl font-bold tracking-[-0.03em] mb-3 transition-colors ${open ? "text-accent" : "group-hover:text-accent"}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted text-[15px] leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <Tags tags={project.tags} />
                    <span
                      className={`mt-6 flex items-center justify-between h-11 px-4 rounded-xl text-sm font-semibold border transition-colors ${
                        open ? "bg-accent text-on-accent border-accent" : "border-line-strong text-ink"
                      }`}
                    >
                      {open ? "Close details" : "View project"}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                </FadeIn>
              );
            })}
          </div>

          {/* Expanded details below the cards */}
          <div id="project-details" aria-live="polite">
            <AnimatePresence mode="wait">
              {expanded && (
                <motion.article
                  key={expanded.title}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="edge-glow relative bg-surface border border-line-strong rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
                    <div className="flex flex-col gap-8">
                      <div>
                        <DateChip>{expanded.date}</DateChip>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-4">{expanded.title}</h3>
                        <p className="text-lg text-muted leading-relaxed">{expanded.description}</p>
                      </div>
                      <Detail label="The Problem">{expanded.problem}</Detail>
                      <Detail label="The Approach">{expanded.approach}</Detail>
                      <Detail label="The Impact" emphasis>{expanded.impact}</Detail>
                      <ProjectLinks project={expanded} className="pt-6 border-t border-line" />
                    </div>

                    <div className="flex items-center justify-center">
                      {expanded.mobileLayout ? (
                        <PhoneFrame src={expanded.imageUrl} alt={`${expanded.title} app screenshot`} sizes="280px" className="w-full max-w-[260px]" />
                      ) : (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line">
                          <Image src={expanded.imageUrl} alt={`${expanded.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-8 pb-4 border-b border-line">
      <h2 id={id} className="text-2xl md:text-3xl font-bold tracking-[-0.03em]">{title}</h2>
      {note && <span className="font-mono text-xs uppercase tracking-[0.1em] text-faint">{note}</span>}
    </div>
  );
}

function DateChip({ children }: { children: React.ReactNode }) {
  return <span className="block text-sm text-faint mb-2">{children}</span>;
}

function Tags({ tags }: { tags: string[] }) {
  return <span className="block text-sm text-faint">{tags.join(" · ")}</span>;
}

function Detail({ label, emphasis, children }: { label: string; emphasis?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-2.5">{label}</h4>
      <p className={`text-[1.05rem] leading-relaxed ${emphasis ? "text-ink font-medium" : "text-muted"}`}>{children}</p>
    </div>
  );
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-12 px-5 rounded-xl border border-line-strong font-semibold hover:border-ink transition-colors"
      >
        <Github className="mr-2 h-4 w-4" /> View repository
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-5 rounded-xl bg-accent text-on-accent font-semibold hover:brightness-110 transition"
        >
          Live demo <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
}
