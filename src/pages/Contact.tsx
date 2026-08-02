import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ContactInfoBand from "../sections/ContactInfoBand";
import ContactForm from "../components/ContactForm";
import FAQ from "../sections/FAQ";
import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your team."
        description="Whether you're hiring, restructuring, or building HR from scratch tell us where you're headed and we'll tell you how we can help."
      />
      <ContactInfoBand />

      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-[0.75fr_1.25fr] gap-14">
          <Reveal>
            <span className="eyebrow text-indigo">Get in touch</span>
            <StretchRule width={40} className="mt-3 mb-6" />
            <h2 className="font-display text-4xl text-ink leading-[1.1] tracking-tight">
              Complete the form and we'll respond within one business day.
            </h2>
            <p className="mt-5 text-slate-muted leading-relaxed max-w-xs">
              Prefer to talk directly? Reach us by phone or WhatsApp using the
              details above.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FAQ />
    </Layout>
  );
}
