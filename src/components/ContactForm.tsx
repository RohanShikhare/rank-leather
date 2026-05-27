"use client";

import { FormEvent, useState, type ChangeEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/bullrideroriginal@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "RANK Contact Inquiry",
        }),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully.");
        setFormData(initialState);
      } else {
        setStatus("Unable to send your message. Please try again later.");
      }
    } catch {
      setStatus("Unable to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="space-y-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-xs sm:text-sm font-semibold text-slate-900">
          Name
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-red-accent/50 focus:ring-2 focus:ring-red-accent/10"
          />
        </label>
        <label className="block text-xs sm:text-sm font-semibold text-slate-900">
          Email
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-red-accent/50 focus:ring-2 focus:ring-red-accent/10"
          />
        </label>
      </div>
      <label className="block text-xs sm:text-sm font-semibold text-slate-900">
        Message
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-red-accent/50 focus:ring-2 focus:ring-red-accent/10"
        />
      </label>
      <button
        type="submit"
        disabled={isSending}
        className="inline-flex items-center justify-center rounded-full bg-red-accent px-6 py-3 text-xs sm:text-sm font-semibold text-black transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Sending…" : "Send Message"}
      </button>
      {status ? <p className="text-sm text-slate-700">{status}</p> : null}
    </form>
  );
}
