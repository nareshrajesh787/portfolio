import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/Analytics";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nareshrajesh.com"), // Update with real production URL
  title: {
    default: "Naresh Rajesh | Portfolio",
    template: "%s | Naresh Rajesh",
  },
  description: "Applied AI Engineer & Business Strategist bridging the gap between autonomous AI research and actionable enterprise strategy.",
  openGraph: {
    title: "Naresh Rajesh | Portfolio",
    description: "Applied AI Engineer & Business Strategist.",
    url: "https://nareshrajesh.com",
    siteName: "Naresh Rajesh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh Rajesh | Portfolio",
    description: "Applied AI Engineer & Business Strategist.",
  },
  verification: {
    google: "mozfxnTRkHata4s0t7zHjmFFUiyaebitFl0G5r6u7Sg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-brand-500/30 selection:text-brand-900`}>
        <Analytics />
        <Navbar />
        <main className="flex-grow flex flex-col pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
