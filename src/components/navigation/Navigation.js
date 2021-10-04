import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logo-bg-dark.svg";

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Navbar collapseOnSelect className="fixed-top bg-transparent" expand="xl">
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
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={handleClose}
                  eventKey="4"
                  as={Link}
                  to="/contact"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
