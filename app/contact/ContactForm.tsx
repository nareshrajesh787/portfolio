"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/mvzweqvq";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-line-strong bg-band text-ink placeholder:text-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const data: { errors?: { message: string }[] } = await response.json();
      setErrorMessage(data.errors?.map((err) => err.message).join(", ") || "Oops! There was a problem submitting your form.");
      setStatus("error");
    } catch {
      setErrorMessage("Oops! There was a problem submitting your form.");
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col rounded-3xl bg-surface border border-line-strong p-7">
      <h2 className="text-xl font-bold mb-6">Send a message</h2>

      {status === "success" ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center gap-3 py-8" role="status">
          <CheckCircle className="w-10 h-10 text-accent" />
          <h3 className="text-lg font-bold">Message sent</h3>
          <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 px-5 py-2 rounded-xl border border-line-strong text-sm font-medium hover:border-ink transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 flex-grow">
            <Field id="name" label="Name">
              <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Doe" disabled={submitting} />
            </Field>
            <Field id="email" label="Email">
              <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} placeholder="jane@company.com" disabled={submitting} />
            </Field>
            <Field id="message" label="Message">
              <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Hey Naresh, I'd love to chat about..." disabled={submitting} />
            </Field>
          </div>

          {status === "error" && (
            <div className="mt-4 p-3.5 rounded-xl flex items-start gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/30" role="alert">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full h-12 rounded-xl bg-accent text-on-accent font-semibold flex justify-center items-center hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-muted mb-1.5">
        {label} <span className="text-accent" aria-hidden>*</span>
      </label>
      {children}
    </div>
  );
}
