import Page from "../components/Page";
import HomeHero from "../components/home/HomeHero";
import About from "../components/home/About";
import Ceo from "../components/home/Ceo";
import Service from "../components/home/Service";
import Contact from "../components/home/Contact";
import NavigateSection from "../components/home/NavigateSection";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page">
      <HomeHero />
      <About />
      <Ceo />
      <Service />
      <Contact />
      <NavigateSection />
    </Page>
  );
}
