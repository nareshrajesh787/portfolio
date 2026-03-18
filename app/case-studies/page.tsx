"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight, Github, Code2, Globe, Activity, Sparkles, Layers, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tagColors: Record<string, string> = {
  "AI/ML": "bg-brand-100 text-brand-800",
  "OpenAI": "bg-accent-100 text-accent-800",
  "Gemini AI": "bg-brand-100 text-brand-800",
  "React": "bg-blue-100 text-blue-800",
  "React Native": "bg-blue-100 text-blue-800",
  "FastAPI": "bg-emerald-100 text-emerald-800",
  "Django": "bg-emerald-100 text-emerald-800",
  "PostgreSQL": "bg-indigo-100 text-indigo-800",
  "Python": "bg-yellow-100 text-yellow-800",
  "Data Analysis": "bg-purple-100 text-purple-800",
  "APIs": "bg-slate-200 text-slate-800",
  "Solo Developer": "bg-warm-100 text-warm-800",
  "Full-Stack": "bg-slate-100 text-slate-800",
  "Web App": "bg-slate-100 text-slate-800",
  "AI Integration": "bg-brand-50 text-brand-700 border-brand-200"
};

const featuredProject = {
  title: "SpeechScore",
  date: "2024",
  problem: "Public speaking coaching is inaccessible, expensive, and highly subjective, making it difficult for individuals to systematically improve their communication skills.",
  approach: "Architected a full-stack platform that processes audio via AssemblyAI and generates real-time, objective feedback using Gemini AI. Built a resilient FastAPI backend connected to a responsive React interface.",
  impact: "Delivers immediate, actionable communication metrics to users, democratizing access to professional-level speech analysis.",
  tags: ["Solo Developer", "Full-Stack", "React", "FastAPI", "AI/ML"],
  githubUrl: "#",
};

const explorations = [
  {
    title: "PeerPoint",
    date: "2023",
    description: "Developed a secure Django-based platform utilizing PostgreSQL and the OpenAI API to programmatically generate structured feedback for academic peer reviews.",
    problem: "Academic peer reviews often lack structured, constructive feedback aligned with specific grading rubrics, reducing their educational value.",
    approach: "Developed a secure Django-based platform utilizing PostgreSQL and the OpenAI API to analyze student reviews and programmatically generate structured feedback.",
    impact: "Standardized the peer review process, significantly improving feedback quality and accelerating student growth.",
    tags: ["Django", "PostgreSQL", "OpenAI"],
    icon: Code2,
    githubUrl: "#",
  },
  {
    title: "Clarity",
    date: "2023",
    description: "Co-developed a React Native app with multimodal AI integration parsing facial recognition, vocal tone, and text sentiment from 60-second video check-ins.",
    problem: "Traditional text-based journaling apps fail to capture the nuanced realities of daily emotional states, relying solely on user self-reporting.",
    approach: "Co-developed a React Native app with multimodal AI integration parsing facial recognition, vocal tone, and text sentiment from 60-second video check-ins.",
    impact: "Enables comprehensive, real-time emotional tracking, providing users with deeper wellness insights than conventional methods.",
    tags: ["React Native", "AI Integration"],
    icon: Activity,
    githubUrl: "#",
  },
  {
    title: "EcoSearch",
    date: "2025",
    description: "Developed a web application enhancing environmental awareness using Python data libraries alongside Open-Meteo and Nominatim APIs.",
    problem: "Individuals often lack centralized, accessible data regarding key environmental factors in their immediate local areas.",
    approach: "Utilized Python libraries (pandas, numpy, matplotlib) alongside APIs like Open-Meteo and Nominatim to create a localized data visualization platform.",
    impact: "Effectively combined data science techniques with environmental public APIs to promote sustainability through heightened local awareness.",
    tags: ["Python", "Web App", "APIs"],
    icon: Globe,
    githubUrl: "#",
  }
];

export default function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expandedId === idx) {
      setExpandedId(null);
    } else {
      setExpandedId(idx);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-slate-200/60 mb-16">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Execution & <br className="md:hidden"/> Impact</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Deep dives into my technical builds and strategic initiatives. Focused on the intersection of data, engineering, and human-centric design.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Featured Project */}
        <section>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-brand-500" />
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Build</h2>
              </div>
              <p className="text-slate-500 font-medium">Deep Dive Case Study</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="group">
            <div className="flex flex-col lg:flex-row bg-white border border-slate-200/60 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-100/50 to-transparent rounded-bl-full pointer-events-none -z-1 transition-transform group-hover:scale-110 duration-700" />
              
              {/* Featured Meta / Hero part */}
              <div className="lg:w-2/5 p-10 md:p-12 lg:border-r border-slate-100 bg-slate-50/50 flex flex-col justify-between relative z-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-8">
                    {featuredProject.date}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight group-hover:text-brand-600 transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {featuredProject.tags.map(tag => (
                       <Badge key={tag} variant="secondary" className={`border-none rounded-full px-3 py-1 text-xs font-semibold ${tagColors[tag] || "bg-slate-100 text-slate-700"}`}>
                         {tag}
                       </Badge>
                    ))}
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-fit rounded-xl hover:bg-slate-100 transition-colors shadow-sm bg-white">
                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className={featuredProject.githubUrl === "#" ? "pointer-events-none opacity-50" : ""}>
                    <span className="flex items-center text-slate-700 font-bold">
                      <Github className="mr-2 h-4 w-4" /> View Repository <ArrowUpRight className="ml-1 h-4 w-4" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Featured Content / Details */}
              <div className="lg:w-3/5 p-10 md:p-12 space-y-10 relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-500 mr-3 shadow-sm shadow-accent-500/50"></span> The Problem
                  </h4>
                  <p className="text-slate-600 text-[1.1rem] leading-relaxed">{featuredProject.problem}</p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-transparent"></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-warm-500 mr-3 shadow-sm shadow-warm-500/50"></span> The Approach
                  </h4>
                  <p className="text-slate-600 text-[1.1rem] leading-relaxed">{featuredProject.approach}</p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-transparent"></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-500 mr-3 shadow-sm shadow-brand-500/50"></span> The Impact
                  </h4>
                  <p className="text-slate-900 font-semibold text-[1.1rem] leading-relaxed">{featuredProject.impact}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Explorations Section */}
        <section>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-slate-200/60 pb-6">
              <div className="flex items-center gap-3">
                <Layers className="w-7 h-7 text-slate-400" />
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Additional Projects</h2>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {explorations.map((exp, idx) => (
              <FadeIn key={exp.title} delay={0.5 + idx * 0.1}>
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                   <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-500">
                     <exp.icon className="w-48 h-48" />
                   </div>
                   
                   <div className="flex items-center justify-between mb-8 relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <exp.icon className="w-7 h-7 text-brand-500" />
                     </div>
                     <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">{exp.date}</span>
                   </div>
                   
                   <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-brand-600 transition-colors">{exp.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">{exp.description}</p>
                   
                   <div className="flex flex-wrap gap-2 relative z-10 mb-8">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                   </div>

                   <Button 
                     variant="ghost" 
                     onClick={() => toggleExpand(idx)} 
                     className="relative z-10 w-full justify-between mt-auto border border-slate-200/60 hover:bg-slate-50 hover:text-brand-600 rounded-xl font-semibold"
                   >
                     {expandedId === idx ? "Close Case Study" : "View Case Study"}
                     <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedId === idx ? "rotate-180 text-brand-500" : ""}`} />
                   </Button>

                   <AnimatePresence>
                     {expandedId === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden relative z-10"
                       >
                         <div className="pt-6 space-y-5 border-t border-slate-100 mt-6">
                           <div>
                             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">The Problem</h4>
                             <p className="text-slate-600 text-sm leading-relaxed">{exp.problem}</p>
                           </div>
                           <div>
                             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">The Approach</h4>
                             <p className="text-slate-600 text-sm leading-relaxed">{exp.approach}</p>
                           </div>
                           <div>
                             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">The Impact</h4>
                             <p className="text-slate-900 text-sm font-medium leading-relaxed">{exp.impact}</p>
                           </div>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
