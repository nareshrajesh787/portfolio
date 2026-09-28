import Image from "next/image";

/** Screenshot inside a minimal browser chrome. */
export function BrowserFrame({ src, alt, sizes, className = "" }: { src: string; alt: string; sizes: string; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-line bg-band ${className}`}>
      <div className="h-6 flex items-center gap-1.5 px-3 border-b border-line" aria-hidden>
        <i className="h-2 w-2 rounded-full bg-line-strong" />
        <i className="h-2 w-2 rounded-full bg-line-strong" />
        <i className="h-2 w-2 rounded-full bg-line-strong" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Portrait screenshot inside a phone bezel. */
export function PhoneFrame({ src, alt, sizes, className = "" }: { src: string; alt: string; sizes: string; className?: string }) {
  return (
    <div className={`relative aspect-[9/19] rounded-[1.75rem] border-[7px] border-[#050506] ring-1 ring-line-strong overflow-hidden bg-[#050506] ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}
