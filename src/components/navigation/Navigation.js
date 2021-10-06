import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../images/logo-bg-dark.svg";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";

export default function Navigation() {
  const [show, setShow] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setHeaderShow(window.pageYOffset > 500)
      );
    }
  }, []);

  return (
    <Navbar
      collapseOnSelect
      className={headerShow ? "fixed-top bg-dark" : "fixed-top bg-transparent"}
      expand="true"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <Image
              src={logo}
              className="d-inline-block mt-1"
              width="100"
              alt="Holmcreations logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          onClick={toggleShow}
          className="me-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          className="sidenav text-center border-0"
          scroll="true"
          keyboard
          autoFocus
        >
          <Offcanvas.Header closeButton closeLabel="close" closeVariant="white">
            <Offcanvas.Title className="center">
              <Link to="/">
                <Image
                  src={logo}
                  className="d-block mt-1"
                  width="100"
                  alt="Holmcreations logo"
                />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-nav me-auto fs-3 fw-bold">
              <Nav.Item>
                <Nav.Link onClick={handleClose} eventKey="1" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={handleClose}
                  eventKey="2"
                  as={Link}
                  to="/portfolio"
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={handleClose}
                  eventKey="3"
                  as={Link}
                  to="/about"
                >
                  My Story
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Row className="contact-icons p-5">
              <Col sm={4}>
                <a href="https://www.github.com/maaneblomst">
                  <FiGithub aria-label="github-link" />
                </a>
              </Col>
              <Col sm={4}>
                <a href="https://www.instagram.com/tonje__/">
                  <FiInstagram aria-label="instagram-link" />
                </a>
              </Col>
              <Col sm={4}>
                <a href="mailto:tonjeth@hotmail.com">
                  <FiMail aria-label="mail-link" />
                </a>
              </Col>
            </Row>
            <Row>
              <p className="fs-1 fw-bold text-primary text-opacity-75">
                Let's talk!
              </p>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
