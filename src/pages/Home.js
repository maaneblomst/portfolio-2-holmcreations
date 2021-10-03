import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="hero-image-home">
        <HeroSection
          size="1"
          title="Hi. Im Tonje, I'm a webdesigner"
          introText="I like helping people and businesses build and design their websites."
          link="/about"
          buttonTitle="My Story"
        />
      </div>
      <main className="content-wrapper"></main>
      <Footer />
    </>
  );
}
