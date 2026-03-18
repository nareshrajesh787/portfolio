import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { Trophy, Medal, MapPin, Globe, Code, Star, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Honors | Naresh Rajesh",
  description: "A showcase of awards, hackathons, and global competitions.",
};

const topAwards = [
  {
    title: "Wharton Global Youth Investment Challenge",
    org: "The Wharton School",
    levels: ["Global Finalist (Top 10 of 5,000+ Teams)"],
    date: "Apr 2025",
    icon: Globe,
    color: "bg-brand-100 text-brand-600 border-brand-200",
    description: "Leveraged Python, data analysis, and custom algorithms to support portfolio construction and optimize performance. Applied financial modeling to drive strategy."
  },
  {
    title: "FBLA Management Information Systems",
    org: "Future Business Leaders of America",
    levels: ["6th Place @ Nationals", "2nd Place @ State", "2nd Place @ Region"],
    date: "Jul 2025",
    icon: Trophy,
    color: "bg-amber-100 text-amber-600 border-amber-200",
    description: "Analyzed business IT infrastructure and proposed solutions for data management, cybersecurity, and enterprise technology in a case study + objective test competition."
  },
  {
    title: "FBLA Data Analysis",
    org: "Future Business Leaders of America",
    levels: ["1st Place @ State"],
    date: "Mar 2026",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600 border-blue-200",
    description: "Identified historical trends by performing statistical analysis on 100+ years of Olympic data using Python. Translated insights into a consulting-style strategy for LA 2028."
  },
  {
    title: "FBLA Digital Citizenship",
    org: "Future Business Leaders of America",
    levels: ["6th Place @ Nationals", "1st Place @ State", "5th Place @ Region"],
    date: "Jun 2023",
    icon: Star,
    color: "bg-purple-100 text-purple-600 border-purple-200",
    description: "Demonstrated expertise in responsible online behavior, data privacy, cybersecurity ethics, and digital literacy in a competitive objective examination."
  },
  {
    title: "Digital Technology Student of the Year",
    org: "Forsyth County CTAE",
    levels: ["School Winner / Nominee"],
    date: "Feb 2026",
    icon: Medal,
    color: "bg-warm-100 text-warm-600 border-warm-200",
    description: "Nominated as the Digital Technology SOTY to represent West Forsyth High School at the Forsyth County CTAE Awards Gala. Recognized for CS academic excellence."
  }
];

const techHackathons = [
  {
    title: "EcoSearch",
    org: "West Hack'd",
    placement: "2nd Place",
    date: "Jan 2025"
  },
  {
    title: "PeerPoint",
    org: "Lanier Regional Tech Fair",
    placement: "2nd Place (Internet Applications)",
    date: "Jan 2025"
  },
  {
    title: "Password Generator",
    org: "Lanier Regional Tech Fair",
    placement: "3rd Place (Project Programming)",
    date: "Jan 2022"
  }
];

const otherFblaDeca = [
  {
    title: "DECA Hospitality & Tourism Selling",
    levels: ["2nd Place @ State"],
    date: "Jan 2025"
  },
  {
    title: "FBLA Intro to IT",
    levels: ["4th Place @ State", "2nd Place @ Region", "5th Place @ Region"],
    date: "Mar 2024"
  },
  {
    title: "FBLA Intro to Marketing",
    levels: ["2nd Place @ State"],
    date: "Mar 2024"
  },
  {
    title: "DECA Travel & Tourism",
    levels: ["13th Place @ State"],
    date: "Feb 2024"
  },
  {
    title: "FBLA Exploring CS",
    levels: ["8th Place @ State"],
    date: "Mar 2023"
  }
];

export default function AwardsPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-slate-200/60 mb-16">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6 flex items-center">
            Awards &<br/> Honors
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Recognized at the state, national, and global levels for excellence in strategy, technology, and analytics.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Top Awards Section */}
        <section>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-10">
              <Trophy className="w-7 h-7 text-amber-500" />
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Major Achievements</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topAwards.map((award, idx) => (
              <FadeIn key={award.title} delay={0.3 + idx * 0.1} className="h-full">
                <div className={`h-full bg-white border ${award.color.split(' ')[2]} rounded-3xl p-8 shadow-sm hover:shadow-md transition-all group overflow-hidden relative`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${award.color.split(' ')[0]} rounded-bl-[100px] opacity-20 transition-transform group-hover:scale-110 pointer-events-none`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${award.color.split(' ')[0]} ${award.color.split(' ')[1]}`}>
                    <award.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{award.title}</h3>
                  <p className="text-slate-500 font-medium text-sm mb-5">{award.org} • {award.date}</p>
                  
                  <div className="space-y-2 mb-6">
                    {award.levels.map((level, lIdx) => (
                      <div key={lIdx} className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg mr-2 mb-2">
                        {level}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {award.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Two Column Layout for the rest */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tech & Hackathons */}
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-brand-500" />
              <h2 className="text-2xl font-bold text-slate-900">Tech & Hackathons</h2>
            </div>
            <div className="space-y-4">
              {techHackathons.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
                    <span className="text-brand-600 font-semibold text-sm">{item.placement}</span>
                    <span className="text-slate-500 text-sm">{item.org} • {item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Other FBLA & DECA */}
          <FadeIn delay={0.7}>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-warm-500" />
              <h2 className="text-2xl font-bold text-slate-900">FBLA & DECA</h2>
            </div>
            <div className="space-y-4">
              {otherFblaDeca.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.levels.map((level, lIdx) => (
                      <span key={lIdx} className="text-warm-600 font-semibold text-sm bg-warm-100 px-2 py-1 rounded-md">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
        
      </div>
    </div>
  );
}
