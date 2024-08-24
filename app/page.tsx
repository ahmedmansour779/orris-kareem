import Image from "next/image";
import Hero from "./components/Hero";
import CountersSection from "./components/CountersSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import PartenersSection from "./components/PartenersSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <CountersSection />
      <ServicesSection />
      <WorkSection />
      <PartenersSection />
      <WhoWeAreSection />
      <ContactUs />
      <Footer />
    </>
  );
}
