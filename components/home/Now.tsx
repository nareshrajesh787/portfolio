"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import type { NowItem } from "@/lib/content";

const INTERVAL_MS = 4000;

type NowState = { items: NowItem[]; index: number; prev: number | null };
const NowContext = createContext<NowState | null>(null);

function useNow() {
  const ctx = useContext(NowContext);
  if (!ctx) throw new Error("Now components must be rendered inside <NowProvider>");
  return ctx;
}

/**
 * Rotates through the current activities. The hero panel caption and the "Now" line
 * both read from this so they stay in sync. Pauses while hovered or focused, and
 * stays on the first item for visitors who prefer reduced motion.
 */
export function NowProvider({ items, children }: { items: NowItem[]; children: React.ReactNode }) {
  const [{ index, prev }, setPosition] = useState<{ index: number; prev: number | null }>({ index: 0, prev: null });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setPosition(({ index: i }) => ({ index: (i + 1) % items.length, prev: i }));
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  return (
    <NowContext.Provider value={{ items, index, prev }}>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {children}
      </div>
    </NowContext.Provider>
  );
}

function OrgLink({ item }: { item: NowItem }) {
  if (!item.href) return <>{item.org}</>;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-b border-line-strong hover:border-accent hover:text-accent transition-colors"
    >
      {item.org}
    </a>
  );
}

export function NowLine() {
  const { items, index, prev } = useNow();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-2 md:gap-6 items-center min-w-0">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        <span className="h-[7px] w-[7px] rounded-full bg-accent motion-safe:animate-pulse" aria-hidden />
        Now
      </div>

      <div className="rotator text-[15px] text-ink">
        {items.map((item, i) => (
          <span key={item.org} inert={i !== index} data-state={i === index ? "on" : i === prev ? "out" : undefined}>
            {item.text} @ <OrgLink item={item} />
          </span>
        ))}
      </div>

      <div className="hidden md:block font-mono text-[11px] text-faint tabular-nums" aria-hidden>
        {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </div>
    </div>
  );
}

export function NowPanel({ src, alt }: { src: string; alt: string }) {
  const { items, index } = useNow();
  const item = items[index];
  return (
    <figure className="rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-line font-mono text-xs text-faint" aria-hidden>
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <span className="ml-2">~/now</span>
      </div>
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill priority sizes="(max-width: 768px) 100vw, 420px" className="object-cover object-[center_30%]" />
      </div>
      <figcaption className="flex justify-between gap-3 px-3.5 py-3 text-[13px] text-muted">
        <span key={`c${index}`} className="animate-fade-in">
          <span className="text-accent text-[10px] align-[1px]">●</span>{" "}
          <b className="text-ink font-semibold">{item.org}</b> · {item.role}
        </span>
        <span key={`s${index}`} className="animate-fade-in text-accent font-medium whitespace-nowrap">
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {item.stat} →
            </a>
          ) : (
            item.stat
          )}
        </span>
      </figcaption>
    </figure>
  );
}
