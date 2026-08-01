import Layout from "../components/Layout";
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import HowWeWork from "../sections/HowWeWork";
import WhyChooseUs from "../sections/WhyChooseUs";
import Clients from "../sections/Clients";
import FAQ from "../sections/FAQ";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <HowWeWork />
      <WhyChooseUs />
      <Clients />
      <FAQ />
    </Layout>
  );
}
