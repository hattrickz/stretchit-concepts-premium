import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stats } from "../lib/data";
import StretchRule from "../components/StretchRule";

const bars = [38, 62, 48, 84, 56, 100, 70, 46];

export default function Hero() {
  return (
    <section className="relative bg-paper pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="eyebrow text-indigo">Lagos, Nigeria · Est. 14 years</span>
            <StretchRule width={32} color="gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-medium text-ink tracking-tight"
          >
            Human capital,<br />
            <span className="italic font-normal text-indigo">stretched</span> to its
            full potential.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 text-lg text-slate-muted max-w-lg leading-relaxed"
          >
            We're a human resource outsourcing, recruitment, and performance
            management company — helping organizations attract, develop, and
            retain the people who move them forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-indigo text-paper font-label text-sm uppercase tracking-[0.1em] px-7 py-4 rounded-full hover:bg-indigo-deep transition-colors"
            >
              Get a free consultation
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.1em] text-ink px-2 py-4 border-b border-ink/20 hover:border-gold hover:text-indigo transition-colors"
            >
              Our story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-ink">{s.value}</div>
                <div className="text-xs text-slate-muted mt-1 font-label uppercase tracking-[0.08em]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature visual: stretching bars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl bg-ink p-10 sm:p-12 aspect-[4/5] flex flex-col justify-end overflow-hidden"
        >
          <div className="absolute top-8 left-10 right-10 flex items-center justify-between">
            <span className="font-label text-paper/50 text-xs uppercase tracking-[0.15em]">
              Workforce Growth Index
            </span>
            <span className="w-2 h-2 rounded-full bg-gold" />
          </div>
          <div className="flex items-end gap-2.5 sm:gap-3 h-56">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: "6%" }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-1 rounded-t-sm ${
                  i === 5 ? "bg-gold" : "bg-paper/25"
                }`}
              />
            ))}
          </div>
          <p className="mt-8 text-paper/70 text-sm leading-relaxed max-w-xs">
            Fourteen years of consistent placement, retention, and performance
            outcomes across Nigeria's private sector.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
