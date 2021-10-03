import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";
import Tabs from "../components/layout/Tabs";

export default function About() {
  return (
    <>
      <div className="hero-image-about">
        <HeroSection
          size="1"
          title="My Story"
          introText="Hi, I'm Tonje. I am a front-end development student with a passion for great design and problem solving."
          showButton="d-none"
        />
      </div>
      <main className="content-wrapper">
        <Tabs />
      </main>
      <Footer />
    </>
  );
}
