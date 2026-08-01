import Reveal from "../components/Reveal";
import StretchRule from "../components/StretchRule";

export default function OurStory() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-[0.7fr_1.3fr] gap-14">
        <Reveal>
          <span className="eyebrow text-indigo">Our story</span>
          <StretchRule width={40} className="mt-3 mb-6" />
          <h2 className="font-display text-4xl text-ink leading-[1.1] tracking-tight">
            What we do &amp; how we got here.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-lg text-slate-muted leading-relaxed">
          <p>
            Stretch-IT Concepts was established with the goal of helping
            businesses of all sizes improve their HR practices, increase
            organizational effectiveness, and achieve their strategic goals.
            We're a human resource outsourcing solutions company, bureau of
            recruitment, performance management and training and development
            company situated in Lagos, Nigeria.
          </p>
          <p>
            Over the past 14 years of our existence, we have consistently
            provided quality HR services in our bid to attract, develop,
            motivate, and retain a diverse workforce within a supportive
            environment. It was founded essentially to offer growth and
            developmental services to organizations and individuals.
          </p>
          <p>
            We distinguish ourselves from other HR firms by our dedication to
            meeting our clients' needs. We develop customized solutions to
            meet the peculiar needs of your business and help you navigate
            the complex regulatory environment — with a team that offers
            practical, strategic HR expertise that translates to bottom-line
            results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
