import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Loading({ animation, variant, classname, statusText }) {
  return (
    <>
      <Row>
        <Col />
        <Col>
          <Container>
            <Spinner
              animation={animation}
              role="status"
              variant={variant}
              className={classname}
              size="lg"
            />
            {statusText}
          </Container>
        </Col>
        <Col />
      </Row>
    </>
  );
}
