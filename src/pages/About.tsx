import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import OurStory from "../sections/OurStory";
import WhyChooseUs from "../sections/WhyChooseUs";
import Clients from "../sections/Clients";

export default function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About us"
        title="Fourteen years of building better workplaces."
        description="Stretch-IT Concepts was established with the goal of helping businesses of all sizes improve their HR practices, increase organizational effectiveness, and achieve their strategic goals."
      />
      <OurStory />
      <WhyChooseUs />
      <Clients />
    </Layout>
  );
}
