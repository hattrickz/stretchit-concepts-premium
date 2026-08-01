import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function JobCirculation() {
  return (
    <Layout>
      <PageHero
        eyebrow="Careers"
        title="Job Circulation"
        description="Open roles from Stretch-IT Concepts and our client organizations, in one place."
      />

      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-8 max-w-xl text-center">
          <Reveal>
            <p className="text-lg text-slate-muted leading-relaxed">
              We're building out job circulation so you can browse and apply to open
              roles directly. In the meantime, reach out and our team will share current
              openings with you.
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
    </Layout>
  );
}
