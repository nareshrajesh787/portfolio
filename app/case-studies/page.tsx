"use client";

import Image from "next/image";

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
  "React": "bg-brand-50 text-brand-700",
  "React Native": "bg-brand-50 text-brand-700",
  "FastAPI": "bg-emerald-100 text-emerald-800",
  "Django": "bg-emerald-100 text-emerald-800",
  "PostgreSQL": "bg-slate-100 text-slate-800",
  "Python": "bg-warm-100 text-warm-800",
  "Data Analysis": "bg-accent-50 text-accent-700",
  "APIs": "bg-slate-200 text-slate-800",
  "Solo Developer": "bg-warm-50 text-warm-800",
  "Full-Stack": "bg-slate-100 text-slate-800",
  "Web App": "bg-slate-100 text-slate-800",
  "AI Integration": "bg-brand-50 text-brand-700 border-brand-200"
};

const featuredProject = {
  title: "SpeechScore",
  date: "2026",
  imageUrl: "/speechscore.png",
  problem: "Public speaking coaching is primarily inaccessible and highly subjective, making it difficult for individuals to systematically improve their communication skills.",
  approach: "Architected a full-stack platform that processes audio via AssemblyAI and generates real-time, objective feedback using Gemini AI. Built a resilient FastAPI backend connected to a responsive React interface.",
  impact: "Delivers immediate, actionable communication metrics to users, democratizing access to professional-level speech analysis.",
  tags: ["Solo Developer", "Full-Stack", "React", "FastAPI", "AI/ML"],
  githubUrl: "https://github.com/nareshrajesh787/SpeechScore",
  liveUrl: "https://speech-score.vercel.app/",
};

const explorations = [
  {
    title: "PeerPoint",
    date: "2025",
    imageUrl: "/Peerpoint.png",
    description: "Developed a secure Django-based platform utilizing PostgreSQL and the OpenAI API to programmatically generate structured feedback for academic peer reviews.",
    problem: "Academic peer reviews often lack structured, constructive feedback aligned with specific grading rubrics, reducing their educational value.",
    approach: "Developed a secure Django-based platform utilizing PostgreSQL and the OpenAI API to analyze student reviews and programmatically generate structured feedback.",
    impact: "Standardized the peer review process, significantly improving feedback quality and accelerating student growth.",
    tags: ["Django", "PostgreSQL", "OpenAI"],
    icon: Code2,
    githubUrl: "https://github.com/nareshrajesh787/PeerPoint",
    liveUrl: "https://techfair24-25.onrender.com/",
  },
  {
    title: "Clarity",
    date: "2026",
    imageUrl: "/Clarity.jpeg",
    mobileLayout: true,
    liveUrl: "",
    description: "Co-developed a React Native app with multimodal AI integration parsing facial recognition, vocal tone, and text sentiment from 60-second video check-ins.",
    problem: "Traditional text-based journaling apps fail to capture the nuanced realities of daily emotional states, relying solely on user self-reporting.",
    approach: "Co-developed a React Native app with multimodal AI integration parsing facial recognition, vocal tone, and text sentiment from 60-second video check-ins.",
    impact: "Enables comprehensive, real-time emotional tracking, providing users with deeper wellness insights than conventional methods.",
    tags: ["React Native", "AI Integration"],
    icon: Activity,
    githubUrl: "https://github.com/nareshrajesh787/Clarity",
  },
  {
    title: "EcoSearch",
    date: "2025",
    imageUrl: "/EcoSearch.png",
    liveUrl: "",
    description: "Developed a web application enhancing environmental awareness using Python data libraries alongside Open-Meteo and Nominatim APIs.",
    problem: "Individuals often lack centralized, accessible data regarding key environmental factors in their immediate local areas.",
    approach: "Utilized Python libraries (pandas, numpy, matplotlib) alongside APIs like Open-Meteo and Nominatim to create a localized data visualization platform.",
    impact: "Effectively combined data science techniques with environmental public APIs to promote sustainability through heightened local awareness.",
    tags: ["Python", "Web App", "APIs"],
    icon: Globe,
    githubUrl: "https://github.com/nareshrajesh787/EcoSearch",
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
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Systems & <br className="md:hidden"/> Strategy</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Deep dives into my AI builds, full-stack applications, and quantitative research. Focused on the intersection of complex data and human-centric design.
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
              <div className="lg:w-1/2 p-10 md:p-12 lg:border-r border-slate-100 bg-slate-50/50 flex flex-col relative z-10">
                {featuredProject.imageUrl && (
                  <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-[6px] border-white mb-8 relative flex-shrink-0 group/featuredimg">
                    <Image src={featuredProject.imageUrl} alt={featuredProject.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top group-hover/featuredimg:rotate-1 group-hover/featuredimg:scale-[1.02] transition-transform duration-700 origin-center" />
                  </div>
                )}
                
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-6">
                      {featuredProject.date}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight group-hover:text-brand-600 transition-colors duration-300">
                      {featuredProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tags.map(tag => (
                         <Badge key={tag} variant="secondary" className={`border-none rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${tagColors[tag] || "bg-slate-100 text-slate-700"}`}>
                           {tag}
                         </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-auto pt-4">
                    <Button asChild variant="outline" className="w-fit rounded-xl hover:bg-slate-100 transition-colors shadow-sm bg-white h-12 px-6">
                      <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center text-slate-700 font-bold">
                          <Github className="mr-2 h-5 w-5" /> View Repository
                        </span>
                      </a>
                    </Button>
                    {featuredProject.liveUrl && (
                      <Button asChild className="w-fit rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-all shadow-md hover:-translate-y-0.5 h-12 px-6">
                        <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center">
                            Live Demo <ArrowUpRight className="ml-2 h-5 w-5" />
                          </span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Featured Content / Details */}
              <div className="lg:w-1/2 p-10 md:p-14 space-y-12 relative z-10 flex flex-col justify-center">
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

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 relative z-20">
            {explorations.map((exp, idx) => (
              <FadeIn key={exp.title} delay={0.5 + idx * 0.1} className="h-full">
                <div 
                  className={`bg-white border ${expandedId === idx ? "border-brand-500 shadow-[0_8px_30px_rgb(59,130,246,0.15)] ring-2 ring-brand-500/20 scale-[1.02] z-30" : "border-slate-200/60 shadow-sm"} rounded-[2rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-500 focus:outline-none`}
                  onClick={() => toggleExpand(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedId === idx}
                >
                   <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-500 pointer-events-none">
                     <exp.icon className="w-48 h-48" />
                   </div>
                   
                   <div className="flex items-center justify-between mb-8 relative z-10">
                     <div className={`w-14 h-14 rounded-2xl ${expandedId === idx ? "bg-brand-500 text-white" : "bg-brand-50 border border-brand-100/50 text-brand-500"} flex items-center justify-center group-hover:scale-110 transition-colors duration-300 shadow-sm`}>
                       <exp.icon className="w-7 h-7" />
                     </div>
                     <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">{exp.date}</span>
                   </div>
                   
                   <h3 className={`text-2xl font-bold mb-3 relative z-10 transition-colors ${expandedId === idx ? "text-brand-600" : "text-slate-900 group-hover:text-brand-600"}`}>{exp.title}</h3>
                   <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 relative z-10 flex-grow">{exp.description}</p>
                   
                   <div className="flex flex-wrap gap-2 relative z-10 mb-8">
                      {exp.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 px-2 py-1.5 rounded-md ${tagColors[tag] || "text-slate-600"}`}>
                          {tag}
                        </span>
                      ))}
                   </div>

                   <Button 
                     variant={expandedId === idx ? "default" : "outline"}
                     className={`relative z-10 w-full justify-between mt-auto border ${expandedId === idx ? "bg-brand-600 hover:bg-brand-700 text-white border-transparent" : "border-slate-200 hover:bg-slate-50 hover:text-brand-600 hover:border-brand-300"} rounded-xl font-bold h-12 px-5 text-sm transition-all duration-300 pointer-events-none`}
                   >
                     {expandedId === idx ? "Close Details" : "View Case Study"}
                     <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${expandedId === idx ? "rotate-180" : ""}`} />
                   </Button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Full-Width Theater Mode Expansion Below the Cards */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {expandedId !== null && (
                <motion.div
                  key="expanded-content"
                  initial={{ height: 0, opacity: 0, scale: 0.98, y: -20 }}
                  animate={{ height: "auto", opacity: 1, scale: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden bg-white border border-slate-200/80 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative group"
                >
                  {/* Decorative background for the active project */}
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-full pointer-events-none -z-1 group-hover:scale-105 transition-transform duration-1000" />
                  
                  {/* Theater Content */}
                  {explorations[expandedId].mobileLayout ? (
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
                      {/* Left: Text and Buttons */}
                      <div className="lg:w-[60%] flex flex-col h-full space-y-12">
                        <div>
                          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-6">
                            Project {expandedId + 1}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            {explorations[expandedId].title}
                          </h3>
                          <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {explorations[expandedId].description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                           {/* Problem, Approach, Impact */}
                           <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center">
                               <span className="w-2.5 h-2.5 rounded-full bg-accent-500 mr-3 shadow-accent-500/50 shadow-sm"></span>The Problem
                             </h4>
                             <p className="text-slate-600 text-[1.05rem] leading-relaxed">{explorations[expandedId].problem}</p>
                           </div>
                           <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center">
                               <span className="w-2.5 h-2.5 rounded-full bg-warm-500 mr-3 shadow-warm-500/50 shadow-sm"></span>The Approach
                             </h4>
                             <p className="text-slate-600 text-[1.05rem] leading-relaxed">{explorations[expandedId].approach}</p>
                           </div>
                           <div className="sm:col-span-2 bg-brand-50/50 p-8 rounded-3xl border border-brand-100/50 relative overflow-hidden shadow-sm">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/50 rounded-bl-full pointer-events-none" />
                             <h4 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-3 flex items-center relative z-10">
                               <span className="w-2.5 h-2.5 rounded-full bg-brand-500 mr-3 shadow-brand-500/50 shadow-sm"></span> The Impact
                             </h4>
                             <p className="text-brand-900 text-lg font-medium leading-relaxed relative z-10">
                               {explorations[expandedId].impact}
                             </p>
                           </div>
                        </div>

                         <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-auto border-t border-slate-100">
                           <Button asChild variant="outline" className="rounded-2xl hover:bg-slate-50 border-slate-200 text-slate-700 h-14 font-bold text-[1.05rem] px-8 flex-1">
                             <a href={explorations[expandedId].githubUrl} target="_blank" rel="noopener noreferrer">
                               <Github className="w-5 h-5 mr-3 text-slate-400" /> View Repository
                             </a>
                           </Button>
                           {explorations[expandedId].liveUrl && (
                             <Button asChild className="rounded-2xl bg-brand-600 hover:bg-brand-700 text-white transition-all h-14 shadow-lg hover:shadow-brand-500/25 hover:translate-y-[-2px] duration-300 font-bold text-[1.05rem] px-8 flex-1">
                               <a href={explorations[expandedId].liveUrl} target="_blank" rel="noopener noreferrer">
                                  Live Demo <ArrowUpRight className="w-5 h-5 ml-2" />
                               </a>
                             </Button>
                           )}
                         </div>
                      </div>

                      {/* Right: Giant Vertical iPhone Mockup Screenshot */}
                      <div className="lg:w-[40%] flex justify-center lg:justify-end items-center">
                         <div className="w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-slate-900 shadow-2xl bg-slate-900 overflow-hidden relative group/screenshot mx-auto cursor-pointer ring-4 ring-slate-200/50" onClick={() => expandedId !== null && window.open(explorations[expandedId].liveUrl || explorations[expandedId].githubUrl, '_blank')}>
                           {/* iPhone Dynamic Island / Notch */}
                           <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20 pointer-events-none">
                             <div className="w-32 h-7 bg-slate-900 rounded-b-3xl"></div>
                           </div>
                           {/* Screenshot Image */}
                           {explorations[expandedId].imageUrl && (
                             <Image src={explorations[expandedId].imageUrl} alt="Mobile App" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover object-top group-hover/screenshot:scale-[1.02] transition-transform duration-700" />
                           )}
                           <div className="absolute inset-0 bg-brand-500/0 group-hover/screenshot:bg-white/10 transition-colors duration-500 pointer-events-none" />
                         </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
                      
                      {/* Left: Huge Title + Problem & Approach */}
                      <div className="lg:w-1/2 space-y-12">
                        <div>
                          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-6">
                            Project {expandedId + 1}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            {explorations[expandedId].title}
                          </h3>
                          <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {explorations[expandedId].description}
                          </p>
                        </div>

                        <div className="space-y-10 border-l-2 border-slate-100 pl-8 relative">
                          {/* Timeline dot pseudo-elements */}
                          <div className="absolute left-[-5px] top-6 w-2 h-2 rounded-full bg-accent-500 ring-4 ring-white" />
                          <div className="absolute left-[-5px] top-[140px] w-2 h-2 rounded-full bg-warm-500 ring-4 ring-white" />
                          
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                               The Problem
                            </h4>
                            <p className="text-slate-600 text-[1.05rem] leading-relaxed">{explorations[expandedId].problem}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3 mt-8">
                               The Approach
                            </h4>
                            <p className="text-slate-600 text-[1.05rem] leading-relaxed">{explorations[expandedId].approach}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Giant Screenshot Placeholder + Impact + Action Buttons */}
                      <div className="lg:w-1/2 flex flex-col justify-between space-y-10">
                        {/* Screenshot Display */}
                        <div 
                          className="w-full aspect-video rounded-3xl border-[6px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-slate-100 flex flex-col items-center justify-center relative overflow-hidden group/screenshot cursor-pointer" 
                          onClick={() => window.open(explorations[expandedId].liveUrl || explorations[expandedId].githubUrl, '_blank')}
                        >
                          {explorations[expandedId].imageUrl ? (
                            <Image src={explorations[expandedId].imageUrl} alt={explorations[expandedId].title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top group-hover/screenshot:rotate-1 group-hover/screenshot:scale-[1.02] transition-transform duration-700 origin-center" />
                          ) : (
                            <>
                              {(() => { const Icon = explorations[expandedId].icon; return <Icon className="w-16 h-16 text-slate-300 mb-4 group-hover/screenshot:rotate-3 transition-all duration-700" /> })()}
                              <span className="text-slate-400 font-bold tracking-widest text-xs uppercase relative z-10">Add Screenshot Here</span>
                            </>
                          )}
                        </div>

                        <div className="bg-brand-50/50 p-8 rounded-[2rem] border border-brand-100/50 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/50 rounded-bl-full pointer-events-none" />
                          <h4 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-3 flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 mr-3 shadow-sm"></span> The Impact
                          </h4>
                          <p className="text-brand-900 text-lg font-medium leading-relaxed relative z-10">
                            {explorations[expandedId].impact}
                          </p>
                        </div>

                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                           <Button asChild variant="outline" className="rounded-2xl hover:bg-slate-50 border-slate-200 text-slate-700 h-14 font-bold text-[1.05rem] px-8 flex-1">
                             <a href={explorations[expandedId].githubUrl} target="_blank" rel="noopener noreferrer">
                               <Github className="w-5 h-5 mr-3 text-slate-400" /> View Repository
                             </a>
                           </Button>
                           {explorations[expandedId].liveUrl && (
                             <Button asChild className="rounded-2xl bg-brand-600 hover:bg-brand-700 text-white transition-all h-14 shadow-lg hover:shadow-brand-500/25 hover:translate-y-[-2px] duration-300 font-bold text-[1.05rem] px-8 flex-1">
                               <a href={explorations[expandedId].liveUrl} target="_blank" rel="noopener noreferrer">
                                  Live Demo <ArrowUpRight className="w-5 h-5 ml-2" />
                               </a>
                             </Button>
                           )}
                         </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </div>
  );
}
