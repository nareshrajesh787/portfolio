import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  /** Short supporting text or links under the title in the left column. */
  aside?: ReactNode;
  children: ReactNode;
}

/**
 * Two-column section: the title sits in a narrow left column (sticky on wide screens)
 * and the content fills the right. Sections are separated by a top rule.
 */
export function Section({ id, title, aside, children }: SectionProps) {
  return (
    <section aria-labelledby={id} className="border-t border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <h2 id={id} className="text-2xl md:text-3xl font-bold tracking-[-0.03em]">
              {title}
            </h2>
            {aside && <div className="mt-3 text-[15px] text-muted leading-relaxed">{aside}</div>}
          </div>
        </div>
        <div className="lg:col-span-9 min-w-0">{children}</div>
      </div>
    </section>
  );
}
