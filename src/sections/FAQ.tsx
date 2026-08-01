import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../lib/data";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <Reveal>
          <span className="eyebrow text-indigo">FAQ</span>
          <StretchRule width={40} className="mt-3 mb-6" />
          <h2 className="font-display text-4xl text-ink tracking-tight">
            Common questions.
          </h2>
          <p className="mt-5 text-slate-muted leading-relaxed max-w-xs">
            Don't see your question here? Reach out and we'll get back to you
            directly.
          </p>
        </Reveal>

        <div>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="border-b border-line">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-ink">{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-paper flex items-center justify-center text-indigo"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-slate-muted leading-relaxed max-w-xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
