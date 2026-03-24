import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, ExternalLink, Sparkles, Network, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-32 pb-20 w-full overflow-hidden">
        {/* Background base pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 z-[-1]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none z-[-1]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none z-[-1]" />

        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10 relative">
          <FadeIn delay={0.1} direction="down">
            <div className="mb-6 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-slate-100 relative mx-auto flex items-center justify-center group">
              <Image src="/IMG_3252.jpeg" alt="Naresh Rajesh" fill sizes="(max-width: 768px) 150px, 250px" priority className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <Badge variant="outline" className="mb-8 px-4 py-1.5 text-sm font-medium border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white/50 backdrop-blur-sm rounded-full text-slate-600">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Open to Fall & Summer Internships
              </span>
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
              Engineer AI systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
                Drive business strategy.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide font-medium">
              I'm <span className="text-slate-900 font-semibold">Naresh Rajesh</span>, building agentic AI workflows and leveraging quantitative research to shape high-stakes decisions. 
              Recognized as a Wharton Global Finalist, FBLA National Winner, and Digital Technology SOTY.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="h-14 px-8 text-base rounded-2xl w-full sm:w-auto shadow-xl shadow-brand-500/20 bg-brand-600 hover:bg-brand-700 text-white transition-all hover:scale-[1.02] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Link href="/case-studies">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-2xl w-full sm:w-auto bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-slate-50 text-slate-700 transition-all focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Link href="/about">
                Read My Story
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Operating Principles Strip */}
      <section className="w-full bg-white py-20 border-y border-slate-100 relative z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="h-12 w-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 text-brand-600 shadow-sm">
                  <TerminalSquare className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Agentic AI & LLMs</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Building autonomous workflows and intelligent applications using tools like OpenAI, Gemini, and Python to solve complex, real-world problems.</p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="h-12 w-12 rounded-2xl bg-warm-50 border border-warm-100 flex items-center justify-center mb-6 text-warm-600 shadow-sm">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Full-Stack Engineering</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Architecting fast, scalable platforms with React, Next.js, Django, and modern cloud infrastructure to deliver seamless user experiences.</p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="h-12 w-12 rounded-2xl bg-accent-50 border border-accent-100 flex items-center justify-center mb-6 text-accent-600 shadow-sm">
                  <Network className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Quantitative Strategy</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Applying data research, statistical analysis, and financial modeling to craft strategies that drive high-stakes business decisions.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work - Bento Grid */}
      <section className="w-full bg-slate-50 py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Selected Projects</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  A look under the hood at the AI systems I've engineered and the quantitative research I've led.
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex items-center text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-xl px-4 py-2 transition-all">
                <Link href="/case-studies">
                  View all cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Main Featured Case Study - Span 2 cols */}
            <FadeIn delay={0.2} className="md:col-span-2 h-full">
              <Link href="/case-studies" className="block h-full group focus-visible:ring-2 focus-visible:ring-brand-500 focus:outline-none rounded-3xl">
                <Card className="h-full flex flex-col overflow-hidden bg-white border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="p-8 pb-4 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-brand-100 text-brand-800 hover:bg-brand-100 border-none rounded-full px-3 py-1">AI Integration</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-800 hover:bg-slate-100 border-none rounded-full px-3 py-1">Web App</Badge>
                      </div>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-brand-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900">SpeechScore</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow relative z-10">
                    <CardDescription className="text-slate-500 text-base leading-relaxed max-w-md">
                      A full-stack application architected to analyze public speaking using real-time ML processing. Providing actionable, data-driven communication coaching to end-users.
                    </CardDescription>
                  </CardContent>
                  <div className="p-8 mt-auto w-full relative z-10 flex justify-end">
                    <div className="text-brand-600 font-medium flex items-center transform group-hover:translate-x-2 transition-transform">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>

            {/* Technical Case Study - Span 1 col */}
            <FadeIn delay={0.3} className="md:col-span-1 h-full">
              <Link href="/case-studies" className="block h-full group focus-visible:ring-2 focus-visible:ring-brand-500 focus:outline-none rounded-3xl">
                <Card className="h-full flex flex-col overflow-hidden bg-white border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl relative">
                  <CardHeader className="p-6 pb-4 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none rounded-full px-3 py-1">Full-Stack</Badge>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 leading-tight">PeerPoint</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow relative z-10">
                    <CardDescription className="text-slate-500 text-sm leading-relaxed">
                      A Django-based academic platform using OpenAI to programmatically generate structured peer review feedback.
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 mt-auto w-full relative z-10">
                    <div className="text-emerald-600 text-sm font-medium flex items-center transform group-hover:translate-x-2 transition-transform">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-8 flex md:hidden justify-center">
            <Button asChild variant="outline" className="w-full rounded-xl h-14 bg-white shadow-sm font-medium text-slate-700">
              <Link href="/case-studies">Explore All Case Studies</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="w-full relative py-32 md:py-40 overflow-hidden bg-brand-600">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 z-0"></div>
        
        {/* Abstract glowing shapes */}
        <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-white/10 blur-[120px] rounded-full mix-blend-overlay pointer-events-none z-0" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[60%] h-[120%] bg-accent-300/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn delay={0.1}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-md">Let's Connect.</h2>
            <p className="text-xl md:text-2xl text-brand-50 mb-12 leading-relaxed font-medium drop-shadow-sm max-w-2xl mx-auto">
              Currently seeking local internships in software engineering and data analysis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="mailto:nareshrajesh787@gmail.com" 
                className="inline-flex items-center justify-center h-14 px-8 text-base font-bold rounded-2xl text-brand-900 bg-white hover:bg-slate-50 transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.15)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 focus:outline-none group/btn w-full sm:w-auto"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/Naresh_Rajesh_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-bold rounded-2xl text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 focus:outline-none w-full sm:w-auto"
              >
                View Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
