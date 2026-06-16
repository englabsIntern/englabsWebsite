import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import ClientRibbon from "./sections/ClientRibbon";
import StatsCounter from "./sections/StatsCounter";
import AboutUs from "./sections/AboutUs";
import WhyUs from "./sections/WhyUs";
import Services from "./sections/Services";
import CaseStudies from "./sections/CaseStudies";
import ProcessTimeline from "./sections/ProcessTimeline";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <main>
        <Hero />

        <StatsCounter />
        <AboutUs />
        <WhyUs />
        <Services />
        <CaseStudies />
        <ProcessTimeline />
        <ClientRibbon />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

