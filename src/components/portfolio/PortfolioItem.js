import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import Heading from "../Heading";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HeroSection from "../layout/HeroSection";
import { FiCalendar, FiClipboard, FiEdit2, FiTool } from "react-icons/fi";

export default function PortfolioItem() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `portfolios/${id}`;

  useEffect(function () {
    async function getPortfolioItem() {
      try {
        const response = await axios.get(url);
        setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPortfolioItem();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Container>Loading</Container>;
  if (loadError) return <Container>Error: {loadError}</Container>;

  const title = item.title;
  const siteUrl = item.url;
  const itemId = item.id;
  const date = item.date;
  const intro = item.intro;
  const assignment = item.assignment;
  const desc = item.description;
  const coverImage = item.coverImage.url;
  const category = item.category;

  return (
    <>
      <div
        key={itemId}
        style={{ backgroundImage: `url(${coverImage})` }}
        className="hero-image-portfolio-item"
      >
        <HeroSection
          title={title}
          size="1"
          introText={intro}
          link={siteUrl}
          buttonTitle="Visit page"
        />
      </div>
      <main className="content-wrapper">
        <Row>
          <Col sm={0} md={2} />
          <Col sm={12} md={2}>
            <Container className="text-center mt-1">
              <FiClipboard size={70} className="text-primary" />
            </Container>
          </Col>
          <Col>
            <Container>
              <Heading size="2" content="When" />
              <p>{date}</p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm={0} md={2} />
          <Col sm={12} md={2}>
            <Container className="text-center mt-3">
              <FiCalendar size={70} className="text-primary" />
            </Container>
          </Col>
          <Col>
            <Container>
              <Heading size="2" content="What" />
              <p>{assignment}</p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm={0} md={2} />
          <Col sm={12} md={2}>
            <Container className="text-center mt-5">
              <FiEdit2 size={70} className="text-primary" />
            </Container>
          </Col>
          <Col>
            <Container>
              <Heading size="2" content="How" />
              <p>
                Category: A <span className="fw-bold"> {category}</span> project
              </p>
              <p>{desc}</p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm={0} md={2} />
          <Col sm={12} md={2}>
            <Container className="text-center mt-2">
              <FiTool size={70} className="text-primary" />
            </Container>
          </Col>
          <Col>
            <Container>
              <Heading size="2" content="Tools" />
              <p>Frameworks</p>
            </Container>
          </Col>
        </Row>
      </main>
    </>
  );
}
