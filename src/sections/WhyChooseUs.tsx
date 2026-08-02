import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function WhyChooseUs() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <span className="eyebrow text-gold">Why choose us</span>
          <StretchRule width={40} color="gold" className="mt-3 mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            We don't sell packages.
            <br />
            <span className="italic text-paper/60">We build fit.</span>
          </h2>
          <p className="mt-6 text-paper/65 text-lg leading-relaxed max-w-md">
            We take the time to understand your organization before we
            recommend anything so what we deliver actually aligns with
            where you're trying to go.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.1em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="border border-paper/15 rounded-2xl p-8 h-full hover:border-gold/50 transition-colors">
              <h3 className="font-label uppercase tracking-[0.12em] text-xs text-gold mb-4">
                Mission
              </h3>
              <p className="text-paper/75 leading-relaxed">
                To help our clients make distinctive, lasting improvements in
                their performance and productivity, through applying the
                appropriate human capital management techniques.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="border border-paper/15 rounded-2xl p-8 h-full hover:border-gold/50 transition-colors">
              <h3 className="font-label uppercase tracking-[0.12em] text-xs text-gold mb-4">
                Vision
              </h3>
              <p className="text-paper/75 leading-relaxed">
                To be the leading Human Resources practitioners in Nigeria
                and beyond known for genuine, tailored partnership over
                transactional service.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
