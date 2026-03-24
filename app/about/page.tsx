import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, MapPin, Target, Sparkles, GraduationCap, Code2, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Naresh Rajesh",
  description: "Learn more about Naresh Rajesh.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-32 overflow-hidden">
      {/* Cinematic Background Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 pt-32 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 overflow-hidden rounded-b-[2.5rem] shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/IMG_5725.jpeg" 
            alt="Naresh Rajesh presenting" 
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Gradient Overlays: White top for Navbar contrast, very dark bottom for Hero text contrast */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 via-white/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay"></div>
        </div>

        {/* Content overlaid on image */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4 mr-2" /> Based in Atlanta, GA
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-4 leading-[1.1]">
              About <br className="hidden md:block"/>
              <span className="text-brand-400">Me.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl">
              Bridging the gap between autonomous AI research and actionable enterprise strategy.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-8 space-y-20">
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500 shadow-sm border border-brand-100/50">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">The Hook</h2>
              </div>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-8">
                I am an Applied AI Engineer and Business Strategist based in Atlanta, GA. Currently studying computer science through dual enrollment at the Georgia Institute of Technology, my work bridges the gap between autonomous AI research and actionable enterprise strategy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-brand-200 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-slate-900 text-lg">West Forsyth High School</h3>
                  <p className="text-slate-500 mt-2 font-medium">GPA: 4.51/4.0</p>
                  <p className="text-slate-500 font-medium">Rank: 1/653</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-brand-200 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-slate-900 text-lg">Dual Enrollment</h3>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    <span className="font-semibold text-brand-600">Georgia Tech:</span> CS 1301<br/>
                    <span className="font-semibold text-brand-600 mt-1 block">Georgia State:</span> Economics, US History, English
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-warm-50 flex items-center justify-center text-warm-500 shadow-sm border border-warm-100/50">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">The Execution</h2>
              </div>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
                I don't just build wrappers; I architect systems that do the heavy lifting. On the engineering side, I develop agentic AI workflows—like automated peer-review systems and multimodal public speaking coaches—that analyze data and execute complex tasks.
              </p>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed">
                On the business side, I leverage quantitative research, Python-driven data analysis, and financial modeling to drive strategic decisions, work that recently secured a Global Finalist placement in the Wharton Youth Investment Challenge.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} className="p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden mt-12 shadow-2xl group border border-white/20">
              {/* Premium vibrant gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 z-0"></div>
              
              {/* Glowing blurred orbs for depth */}
              <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full mix-blend-overlay pointer-events-none z-0 transform group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-300/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none z-0" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Let's Connect.</h3>
                <p className="text-brand-50 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium drop-shadow-sm">
                  Currently seeking local internships in software engineering and data analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:nareshrajesh787@gmail.com" 
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-2xl text-brand-900 bg-white hover:bg-slate-50 transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 focus:outline-none group/btn"
                  >
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/Naresh_Rajesh_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-2xl text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 focus:outline-none"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-4 space-y-8">
            <FadeIn delay={0.6}>
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200/60 sticky top-32 shadow-sm">
                <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8">Quick Facts</h3>
                
                <ul className="space-y-8">
                  <li className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-brand-500 mr-3" />
                      <p className="font-bold text-slate-900">Base</p>
                    </div>
                    <p className="text-slate-500 text-sm pl-8">Atlanta, GA</p>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Code2 className="h-5 w-5 text-emerald-500 mr-3" />
                      <p className="font-bold text-slate-900">Stack</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed pl-8">Python (Pandas/scikit-learn), React/Next.js, Django, AI APIs</p>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-5 w-5 text-accent-500 mr-3" />
                      <p className="font-bold text-slate-900">Interests</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed pl-8">Agentic AI, Neural Networks, Quantitative Strategy</p>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Activity className="h-5 w-5 text-warm-500 mr-3" />
                      <p className="font-bold text-slate-900">Off-Screen</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed pl-8">Hitting the gym, playing soccer, and supporting Bayern Munich & the Atlanta Hawks</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
