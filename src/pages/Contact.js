import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <div className="hero-image-contact">
        <HeroSection
          size="1"
          title="Let's talk"
          introText="Please get in touch if you have any questions, or want to have a chat – no strings attached."
          showButton="d-none"
          link="#"
        />
      </div>
      <main className="content-wrapper"></main>
      <Footer />
    </>
  );
}
