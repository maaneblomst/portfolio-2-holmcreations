import Heading from "../Heading";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function HeroSection({
  size,
  title,
  introText,
  link,
  showButton,
  buttonTitle,
}) {
  return (
    <Container className="intro-text">
      <Heading
        size={size}
        content={title}
        display=" display-2 text-center fw-bold pe-4 ps-4"
      />
      <p className="text-white lead text-center">{introText}</p>
      <div className={showButton}>
        <Link
          to={link}
          className="btn btn-lg text-white cta ps-5 pe-5 pt-2 pb-2 border-0"
        >
          {buttonTitle}
        </Link>
      </div>
    </Container>
  );
}

export default HeroSection;
