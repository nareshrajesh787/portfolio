import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naresh Rajesh | Portfolio",
  description: "AI Engineer & Business Strategist based in Cumming, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-brand-500/30 selection:text-brand-900`}>
        <Navbar />
        <main className="flex-grow flex flex-col pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
