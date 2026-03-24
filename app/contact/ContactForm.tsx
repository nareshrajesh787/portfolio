"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace this URL with your actual Formspree endpoint
      // Example: https://formspree.io/f/your_form_id
      const response = await fetch("https://formspree.io/f/mvzweqvq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your form");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm h-full flex flex-col relative overflow-hidden">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
      
      {status === "success" ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 py-8">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
          <p className="text-slate-500">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 flex-grow">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400"
                placeholder="John Doe"
                disabled={status === "submitting"}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400"
                placeholder="john@example.com"
                disabled={status === "submitting"}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                placeholder="Hey Naresh, I'd love to chat about..."
                disabled={status === "submitting"}
                aria-required="true"
              ></textarea>
            </div>
          </div>

          {status === "error" && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl flex items-start text-sm border border-red-100" role="alert">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-brand-600 transition-colors flex justify-center items-center group shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === "submitting" ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>Send Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </>
      )}
    </form>
  );
}
