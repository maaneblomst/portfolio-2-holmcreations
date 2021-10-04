import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";
import Tabs from "../components/layout/Tabs";
import { FiUser, FiCode, FiBriefcase } from "react-icons/fi";

export default function About() {
  const userIcon = <FiUser size={50} />;
  const skillsIcon = <FiCode size={50} />;
  const experienceIcon = <FiBriefcase size={50} />;

  return (
    <>
      <div className="hero-image-about">
        <HeroSection
          size="1"
          title="My Story"
          introText="Hi, I'm Tonje. I am a front-end development student with a passion for great design and problem solving."
          showButton="d-none"
          link="#"
        />
      </div>
      <main className="content-wrapper">
        <Tabs
          titleOne={userIcon}
          titleTwo={skillsIcon}
          titleThree={experienceIcon}
        />
      </main>
      <Footer />
    </>
  );
}
