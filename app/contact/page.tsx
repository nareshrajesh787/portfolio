import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Github, Linkedin, ArrowRight, MessageSquare } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Naresh Rajesh",
  description: "Get in touch with Naresh Rajesh regarding new projects and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-slate-200/60 mb-16">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6 flex items-center">
            Let's Talk <MessageSquare className="ml-4 w-10 h-10 md:w-12 md:h-12 text-brand-500" />
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            I'm always open to discussing new projects, internships, or opportunities to collaborate on innovative tech.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full pointer-events-none -z-1" />
              <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Connect</h2>
              <div className="space-y-6 relative z-10">
                <a href="mailto:nareshrajesh787@gmail.com" className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-50 hover:border-brand-200 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700 transition-colors">Email</h3>
                    <p className="text-slate-500 text-sm">Drop me a line anytime</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/naresh-rajesh/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">LinkedIn</h3>
                    <p className="text-slate-500 text-sm">Professional network</p>
                  </div>
                </a>

                <a href="https://github.com/nareshrajesh787/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">GitHub</h3>
                    <p className="text-slate-500 text-sm">Code repositories</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
