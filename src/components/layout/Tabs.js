import Nav from "react-bootstrap/Nav";
import { QuickFacts, Skills, Experience } from "../content/About";
import { Tab, Row, Col } from "react-bootstrap";

export default function Tabs() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Nav className="d-flex" variant="tabs">
          <Col>
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Row>
      <Row>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <QuickFacts />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Skills />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Experience />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
