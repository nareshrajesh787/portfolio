import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, MapPin, Target, Sparkles, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Naresh Rajesh",
  description: "Learn more about Naresh Rajesh.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-slate-200/60 mb-16">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">The Story So Far</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Bridging the gap between heavy technical implementation and high-level business strategy.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-8 space-y-12">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-brand-500" /> Academic Foundation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am a junior at West Forsyth High School concurrently studying computer science at the Georgia Institute of Technology through dual enrollment. This rigorous academic path allows me to build a strong theoretical foundation while applying concepts directly to real-world engineering challenges.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h3 className="font-bold text-slate-900">West Forsyth High School</h3>
                  <p className="text-sm text-slate-500 mt-1 mb-2">GPA: 4.51/4.0 • Rank: 1/653</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h3 className="font-bold text-slate-900">Dual Enrollment</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    <span className="font-semibold text-brand-600 block mb-0.5">Georgia Tech (CS 1301)</span>
                    <span className="font-semibold text-brand-600 block mt-2 mb-0.5">Georgia State University</span> 
                    Microeconomics, US History, English Comp I, Business Value
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-warm-500" /> Extracurricular Impact
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Outside of coursework, I compete heavily in FBLA and DECA, holding regional and chapter leadership roles. I focus on projects that leverage AI and data to solve tangible problems—whether that's analyzing public speaking patterns or creating sophisticated algorithmic trading strategies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My approach is deeply interdisciplinary. I believe the best products aren't just well-engineered; they are strategically positioned to create maximum value.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-bl-full pointer-events-none" />
              <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                I am currently seeking fall/summer tech and business internships where I can contribute my background in software engineering, data analysis, and team leadership to drive immediate impact.
              </p>
              <a 
                href="/Naresh-Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-white hover:bg-slate-100 transition-all hover:scale-[1.02] shadow-xl"
              >
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </FadeIn>
          </div>

          <div className="md:col-span-4 space-y-8">
            <FadeIn delay={0.5}>
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 sticky top-32">
                <h3 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-6">Quick Facts</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Base</p>
                      <p className="text-slate-500 text-sm">Cumming, GA</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Interests</p>
                      <p className="text-slate-500 text-sm leading-relaxed">Machine Learning, Systems Arch, Business Strategy, Behavioral Econ</p>
                    </div>
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
