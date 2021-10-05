import Heading from "../../Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { FiHeart } from "react-icons/fi";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiSass,
  DiWordpress,
  DiDatabase,
  DiGithubBadge,
  DiHeroku,
  DiIllustrator,
  DiNpm,
  DiPhotoshop,
} from "react-icons/di";

export function Skills() {
  return (
    <Row>
      <Col sm={12} md={4}>
        <Container>
          <ListGroup variant="flush">
            <Heading size="4" content="Language" />
            <ListGroup.Item>
              <p>
                <DiHtml5 />
                <span className="fw-bold p-1">HTML</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiCss3Full />
                <span className="fw-bold p-1">CSS</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiJavascript1 />
                <span className="fw-bold p-1">JavaScript</span>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>
      <Col sm={12} md={4}>
        <Container>
          <ListGroup variant="flush">
            <Heading size="4" content="Frameworks" />
            <ListGroup.Item>
              <p>
                <DiReact />
                <span className="fw-bold p-1">React</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiBootstrap />
                <span className="fw-bold p-1">Bootstrap</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiSass />
                <span className="fw-bold p-1">Sass</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <FiHeart />
                <span className="fw-bold p-1">Next js</span>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>
      <Col sm={12} md={4}>
        <Container>
          <ListGroup variant="flush">
            <Heading size="4" content="Technology & Tools" />
            <ListGroup.Item>
              <p>
                <DiWordpress />
                <span className="fw-bold p-1">Wordpress</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiDatabase />
                <span className="fw-bold p-1">Amazon AWS S3</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <FiHeart />
                <span className="fw-bold p-1">Strapi Headless CMS</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiGithubBadge />
                <span className="fw-bold p-1">GitHub</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiHeroku />
                <span className="fw-bold p-1">Heroku</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiNpm />
                <span className="fw-bold p-1">npm</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiIllustrator />
                <span className="fw-bold p-1">Adobe Illustrator</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <DiPhotoshop />
                <span className="fw-bold p-1">Adobe Photoshop</span>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>
    </Row>
  );
}
