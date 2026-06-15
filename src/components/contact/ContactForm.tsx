"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { accentBg, accentHoverGlow } from "@/lib/accent";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-lime";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
          Name
        </label>
        <input id="name" name="name" type="text" required maxLength={100} className={inputClass} placeholder="Ada Lovelace" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
          Email
        </label>
        <input id="email" name="email" type="email" required maxLength={200} className={inputClass} placeholder="you@example.com" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className={cn(inputClass, "resize-none")}
          placeholder="What are you building?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-background uppercase transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
          accentBg.lime,
          accentHoverGlow.lime,
          "hover:-translate-y-0.5",
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-lime">
          <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-magenta">
          <AlertCircle size={16} /> {errorMessage}
        </p>
      )}
    </form>
  );
}
