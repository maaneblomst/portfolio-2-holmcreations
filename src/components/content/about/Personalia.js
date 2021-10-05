import Heading from "../../Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FiUser,
  FiRefreshCcw,
  FiMapPin,
  FiHeart,
  FiImage,
} from "react-icons/fi";

export default function QuickFacts() {
  return (
    <Row>
      <Col className="text-center">
        <FiImage size={70} />
        <p>Portrait</p>
      </Col>
      <Col>
        <Container>
          <Heading size="4" content="Quick Facts:" />
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>
                <FiUser />
                <span className="fw-bold p-1">Name:</span> Tonje Holm
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <FiRefreshCcw />
                <span className="fw-bold p-1">Age:</span> 28
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <FiMapPin />
                <span className="fw-bold p-1">Location:</span> Oslo-Area
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <FiHeart />
                <span className="fw-bold p-1">Interests:</span>Dogs ( 🐾 Lumi,
                Australian Sheperd), Beauty, Technology, Cooking, Design
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>
      <Col></Col>
    </Row>
  );
}
