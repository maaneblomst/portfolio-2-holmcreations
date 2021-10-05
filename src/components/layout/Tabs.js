import Nav from "react-bootstrap/Nav";
import QuickFacts from "../content/about/Personalia";
import { Skills } from "../content/about/Skills";
import Experience from "../content/about/Experience";
import { Tab, Row, Col } from "react-bootstrap";

export default function Tabs({ titleOne, titleTwo, titleThree }) {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Nav className="d-flex p-5 border-0 text-center" variant="tabs">
          <Col sm={12} md={4} lg={4}>
            <Nav.Item>
              <Nav.Link eventKey="first">{titleOne}</Nav.Link>
            </Nav.Item>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Nav.Item>
              <Nav.Link eventKey="second">{titleTwo}</Nav.Link>
            </Nav.Item>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Nav.Item>
              <Nav.Link eventKey="third">{titleThree}</Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Row>
      <Row>
        <Col sm={12}>
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
