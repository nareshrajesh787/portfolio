import { ReactNode } from "react";

interface PageHeaderProps {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}

/** Dark grid header used at the top of every inner page. Leaves room for the fixed navbar. */
export function PageHeader({ kicker, title, lede, children }: PageHeaderProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-14 md:pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-5">{kicker}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.03] max-w-5xl">{title}</h1>
        {lede && <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mt-6">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
