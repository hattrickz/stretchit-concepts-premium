import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

const steps = [
  { label: "Understand", text: "We study your organization, culture, and specific challenges before proposing anything." },
  { label: "Design", text: "Personalized HR solutions built around your goals — never a one-size-fits-all package." },
  { label: "Deliver", text: "Flexible, responsive execution, with a long-term relationship in mind from day one." },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-24 md:py-32 border-y border-line">
      <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow text-indigo">How we work</span>
          <StretchRule width={40} className="mt-3 mb-6" />
          <h2 className="font-display text-4xl sm:text-[2.75rem] text-ink leading-[1.1] tracking-tight">
            Customization, not a template.
          </h2>
          <p className="mt-6 text-lg text-slate-muted leading-relaxed max-w-md">
            We believe in understanding your organization first — its culture,
            its constraints, its ambitions — and only then designing the HR
            solution that fits.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-6 py-6 border-b border-line last:border-b-0"
              >
                <span className="font-display text-xl text-gold shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-label uppercase tracking-[0.1em] text-sm text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-slate-muted leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
