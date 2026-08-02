import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ImagePlaceholder from "../components/ImagePlaceholder";
import FadeImage from "../components/FadeImage";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";
import { services, serviceDetails } from "../lib/data";
import { serviceHeroImages } from "../lib/serviceImages";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const summary = services.find((s) => s.slug === slug);
  const detail = slug ? serviceDetails[slug] : undefined;

  if (!summary) {
    return (
      <Layout>
        <div className="max-w-content mx-auto px-6 md:px-8 py-40 text-center">
          <h1 className="font-display text-4xl text-ink">Service not found</h1>
          <p className="mt-4 text-slate-muted">
            That service page doesn't exist yet.{" "}
            <Link to="/" className="text-indigo underline">
              Back to home
            </Link>
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero eyebrow="Services" title={summary.name} description={summary.blurb} />

      <section className="max-w-content mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <Reveal>
          {serviceHeroImages[summary.slug] ? (
            <FadeImage
              src={serviceHeroImages[summary.slug]}
              alt={`${summary.name} hero`}
              className="w-full aspect-[21/9] object-cover rounded-2xl shadow-xl"
            />
          ) : (
            <ImagePlaceholder
              label={`${summary.name} — hero image`}
              ratio="aspect-[21/9]"
              className="shadow-xl"
            />
          )}
        </Reveal>
      </section>

      {detail ? (
        <>
          <section className="py-20 md:py-28">
            <div className="max-w-content mx-auto px-6 md:px-8 max-w-3xl">
              <Reveal>
                <p className="text-lg text-slate-muted leading-relaxed">{detail.intro}</p>
              </Reveal>

              <Reveal delay={0.1} className="mt-12">
                <h2 className="font-display text-3xl text-ink mb-6">{detail.processTitle}</h2>
                <ul className="space-y-4">
                  {detail.checklist.map((item, i) => {
                    const [head, ...rest] = item.split(" — ");
                    return (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-slate-ink leading-relaxed">
                          <strong className="font-semibold">{head}</strong>
                          {rest.length ? ` — ${rest.join(" — ")}` : ""}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              {detail.outro && (
                <Reveal delay={0.15} className="mt-6">
                  <p className="text-lg text-slate-muted leading-relaxed">{detail.outro}</p>
                </Reveal>
              )}

              {detail.closingLine && (
                <Reveal delay={0.2} className="mt-10 flex items-start gap-3">
                  <Phone size={18} className="text-indigo shrink-0 mt-1" />
                  <p className="font-display text-xl text-ink">{detail.closingLine}</p>
                </Reveal>
              )}

              <Reveal delay={0.25}>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-indigo text-paper font-label text-sm uppercase tracking-[0.1em] px-7 py-4 rounded-full hover:bg-indigo-deep transition-colors"
                >
                  {detail.ctaLabel ?? "Contact us today"}
                  <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </div>
          </section>

          {detail.subServices && detail.subServices.length > 0 && (
          <section className="bg-ink py-20 md:py-28">
            <div className="max-w-content mx-auto px-6 md:px-8">
              <Reveal>
                <span className="eyebrow text-gold">What's included</span>
                <StretchRule width={40} color="gold" className="mt-3 mb-10" />
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {detail.subServices.map((sub, i) => {
                  const Icon = sub.icon;
                  return (
                    <Reveal key={sub.label} delay={i * 0.05}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="group h-full rounded-2xl border border-paper/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:bg-white/[0.06] hover:border-gold/50"
                      >
                        <div className="w-12 h-12 rounded-xl bg-indigo-bright/15 flex items-center justify-center transition-colors duration-300 group-hover:bg-gold">
                          <Icon
                            size={20}
                            className="text-indigo-bright transition-colors duration-300 group-hover:text-ink"
                          />
                        </div>
                        <h3 className="mt-5 font-display text-lg text-paper">{sub.label}</h3>
                        <p className="mt-2 text-sm text-paper/55 leading-relaxed">
                          {sub.description}
                        </p>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
          )}
        </>
      ) : (
        <section className="py-24 md:py-32">
          <div className="max-w-content mx-auto px-6 md:px-8 max-w-xl text-center">
            <Reveal>
              <p className="text-lg text-slate-muted leading-relaxed">
                We're finalizing the detail page for {summary.name}. In the meantime, reach
                out directly and our team will walk you through how this service works for
                your organization.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-indigo text-paper font-label text-sm uppercase tracking-[0.1em] px-7 py-4 rounded-full hover:bg-indigo-deep transition-colors"
              >
                Contact us
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </Layout>
  );
}
