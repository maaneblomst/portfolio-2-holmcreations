import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";
import { PortfolioItems } from "../components/portfolio/PortfolioList";

export default function Portfolio() {
  return (
    <>
      <div className="hero-image-portfolio">
        <HeroSection
          size="1"
          title="My Work"
          introText="This is a selection of some of my work from the last two years."
          showButton="d-none"
          link="#"
        />
      </div>
      <main className="content-wrapper">
        <PortfolioItems />
      </main>
      <Footer />
    </>
  );
}
