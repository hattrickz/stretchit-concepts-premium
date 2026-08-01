import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../lib/data";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function ServicesSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <span className="eyebrow text-indigo">What we do</span>
          <StretchRule width={40} className="mt-3 mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl text-ink max-w-xl tracking-tight">
            Six ways we build stronger organizations.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link to={`/services/${s.slug}`}>
                <motion.div
                  whileHover="hover"
                  className="group grid md:grid-cols-[80px_1fr_auto] items-center gap-4 md:gap-10 py-8 cursor-pointer"
                >
                  <span className="font-display text-2xl text-slate-muted/50 group-hover:text-gold transition-colors">
                    {s.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-ink group-hover:text-indigo transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-slate-muted max-w-lg leading-relaxed">
                      {s.blurb}
                    </p>
                  </div>
                  <motion.span
                    variants={{ hover: { x: 4, y: -4 } }}
                    className="hidden md:flex w-12 h-12 rounded-full border border-line items-center justify-center text-slate-muted group-hover:border-gold group-hover:text-gold transition-colors shrink-0"
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
