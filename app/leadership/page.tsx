import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { Rocket, Landmark, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership | Naresh Rajesh",
  description: "Leadership roles and local government involvement.",
};

const timeline = [
  {
    category: "Engineering & Civic Involvement",
    items: [
      {
        title: "Georgia Tech STEP",
        role: "Summer Intern",
        icon: Rocket,
        color: "bg-brand-100 text-brand-600",
        bulletPoints: [
          "Built a prototype rover for a simulated space mission.",
          "Handled electrical design, systems integration, and an Arduino-based control system."
        ]
      },
      {
        title: "Forsyth County Govt Academy",
        role: "Nominated Representative",
        icon: Landmark,
        color: "bg-accent-100 text-accent-600",
        bulletPoints: [
          "1 of 2 nominated representatives from West Forsyth.",
          "Engaged directly with county leaders across Finance and Parks & Recreation.",
          "Contributed student perspectives on local initiatives to county officials."
        ]
      }
    ]
  },
  {
    category: "Business & Tech Leadership",
    items: [
      {
        title: "FBLA",
        role: "Region 11 Officer & VP of Competition",
        icon: Users,
        color: "bg-warm-100 text-warm-600",
        bulletPoints: [
          "Oversaw competition prep for 200+ members and coordinated regional events.",
          "Led the local chapter to its best-ever performance at the National Leadership Conference with a 5x increase in placements."
        ]
      },
      {
        title: "CS Club",
        role: "Executive VP",
        icon: Code2,
        color: "bg-brand-100 text-brand-600",
        bulletPoints: [
          "Directed operations and led technical workshops.",
          "Expanded coding education and prepared members for competitive events."
        ]
      }
    ]
  }
];

export default function LeadershipPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-32">
       {/* Header */}
       <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-slate-200/60 mb-16">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Leadership &<br/> Civic Impact</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            From driving student tech initiatives to engaging directly with local government operations.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {timeline.map((section, sIdx) => (
            <div key={section.category} className="relative">
              <FadeIn delay={0.2 + sIdx * 0.1}>
                <h2 className="text-2xl font-bold text-slate-900 mb-12 sticky top-24 bg-background/80 backdrop-blur-md py-4 z-10 border-b border-slate-100">
                  {section.category}
                </h2>
              </FadeIn>
              
              <div className="space-y-12">
                {section.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  return (
                    <FadeIn key={item.title} delay={0.3 + iIdx * 0.1}>
                      <div className="flex flex-col md:flex-row gap-6 relative group">
                        {/* Timeline visual line */}
                        <div className="hidden md:flex flex-col items-center ml-2 mr-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-4 ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          {iIdx !== section.items.length - 1 && (
                            <div className="w-px h-full bg-slate-200 mt-2"></div>
                          )}
                        </div>

                        {/* Content Card */}
                        <div className="flex-grow bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center md:hidden mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${item.color}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-6">{item.role}</p>
                          
                          <ul className="space-y-3">
                            {item.bulletPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-4 mt-2.5 shrink-0"></span>
                                <span className="leading-relaxed text-lg">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
