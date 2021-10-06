import HeroSection from "../components/layout/HeroSection";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import image from "../images/home/holmcreations.png";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

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
      <main className="content-wrapper">
        <Row>
          <Col sm={12} md={6}>
            <Container className="text-center mt-5">
              <span className="display-1 lh-1 text-primary">Create</span>
              <br />
              <span className="display-1 lh-1 fw-bold">Explore</span>
              <Container>
                <Link
                  to="/portfolio"
                  className="btn btn-lg text-white cta ps-5 pe-5 pt-2 pb-2 border-0 mt-3"
                >
                  My Portfolio
                </Link>
              </Container>
            </Container>
          </Col>
          <Col sm={12} md={6}>
            <Image fluid src={image} />
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  );
}
