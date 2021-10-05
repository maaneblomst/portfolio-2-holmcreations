import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import logo from "../../images/logo-bg-dark.svg";

export default function Footer() {
  return (
    <footer className="footer sticky-bottom bg-dark text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center" />
          <p className="h2 text-decoration-none fw-bold mb-2 menu">
            <Link to="/" className="text-decoration-none link-light">
              <Image src={logo} alt="Holm Creations logo" width={100} />
            </Link>
          </p>
          <p className="menu">
            <Link
              to="/"
              className="ms-2 text-uppercase text-decoration-none link-light"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="ms-2 text-uppercase text-decoration-none link-light"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="ms-2 text-uppercase text-decoration-none link-light"
            >
              My Story
            </Link>
          </p>
        </Row>
        <Row className="contact-icons">
          <Col>
            <a
              href="https://www.github.com/maaneblomst"
              className="p-2 link-light"
            >
              <FiGithub size={50} aria-label="github-link" />
            </a>
            <a
              href="https://www.instagram.com/tonje__/"
              className="p-2 link-light"
            >
              <FiInstagram size={50} aria-label="instagram-link" />
            </a>
            <a href="mailto:tonjeth@hotmail.com" className="p-2 link-light">
              <FiMail size={50} aria-label="mail-link" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
