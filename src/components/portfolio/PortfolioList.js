import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Loading from "../loading/Loading";
import Error from "../error/Error";

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

  if (loading)
    return (
      <Container className="d-flex justify-content-center">
        <Loading animation="border" variant="primary" />
      </Container>
    );

  if (loadError)
    return (
      <Container className="d-flex justify-content-center">
        <Error
          variant="danger"
          displayText="Sorry! Something went wrong.."
          error={loadError}
        />
      </Container>
    );

  return (
    <>
      {portfolioItems.map((item) => (
        <Col sm={12} md={6} className="portfolio-item p-2" key={item.id}>
          <Link to={`/portfolio/${item.id}`} className="text-decoration-none">
            <Image
              fluid
              src={
                item.coverImage.formats.small.url == null
                  ? ""
                  : item.coverImage.formats.small.url
              }
            />
            <h3 className="mt-1">{item.title}</h3>
          </Link>
        </Col>
      ))}
    </>
  );
}
