import { clients } from "../lib/data";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function Clients() {
  const row = [...clients, ...clients];

  return (
    <section className="bg-paper py-20 md:py-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal className="text-center">
          <span className="eyebrow text-indigo">Trusted by</span>
          <StretchRule width={40} className="mt-3 mb-6 mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg mx-auto tracking-tight">
            Clients we've helped grow, locally and internationally.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />
        <div className="flex gap-16 animate-[marquee_28s_linear_infinite] w-max">
          {row.map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl text-slate-muted/40 whitespace-nowrap select-none"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
