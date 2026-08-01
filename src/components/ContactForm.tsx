import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "Full name", type: "text", span: 1 },
  { name: "email", label: "Email address", type: "email", span: 1 },
  { name: "phone", label: "Phone", type: "tel", span: 1 },
  { name: "organization", label: "Organization", type: "text", span: 1 },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-line rounded-3xl p-12 text-center"
      >
        <CheckCircle2 className="mx-auto text-gold" size={40} />
        <h3 className="font-display text-2xl text-ink mt-5">Message sent</h3>
        <p className="text-slate-muted mt-2 max-w-sm mx-auto">
          Thanks for reaching out — a member of our team will be in touch
          within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-line rounded-3xl p-8 sm:p-10">
      <div className="grid sm:grid-cols-2 gap-6">
        {fields.map((f) => (
          <div key={f.name} className={f.span === 2 ? "sm:col-span-2" : ""}>
            <label
              htmlFor={f.name}
              className="font-label uppercase tracking-[0.1em] text-xs text-slate-muted"
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-slate-muted/50 focus:outline-none focus:border-indigo transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label
          htmlFor="service"
          className="font-label uppercase tracking-[0.1em] text-xs text-slate-muted"
        >
          What service are you interested in?
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink focus:outline-none focus:border-indigo transition-colors"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option>Recruitment Services</option>
          <option>Outsourcing</option>
          <option>Human Capital Development</option>
          <option>HR Management Consultancy</option>
          <option>Talent Management</option>
          <option>Performance Management</option>
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="font-label uppercase tracking-[0.1em] text-xs text-slate-muted"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-slate-muted/50 focus:outline-none focus:border-indigo transition-colors resize-none"
        />
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-slate-muted">
        <input type="checkbox" required className="mt-1 accent-indigo" />
        I have read the Privacy Policy and agree to its terms.
      </label>

      <button
        type="submit"
        className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo text-paper font-label text-sm uppercase tracking-[0.1em] px-8 py-4 rounded-full hover:bg-indigo-deep transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
