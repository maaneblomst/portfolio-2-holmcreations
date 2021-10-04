import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export function PortfolioItems() {
  const [portfolioItems, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const url = BASE_URL + "portfolios";

  useEffect(function () {
    async function getPortfolio() {
      try {
        const response = await axios.get(url);
        setItems(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPortfolio();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Container>Loading..</Container>;

  if (loadError) return <Container>Error: {loadError} </Container>;

  return (
    <Container>
      <Row>
        {portfolioItems.map((item) => (
          <Col className="p-4" key={item.id}>
            <Link to={`/portfolio/${item.id}`} className="text-decoration-none">
              <Image src={item.coverImage.formats.small.url} />
              <h3>{item.title}</h3>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
