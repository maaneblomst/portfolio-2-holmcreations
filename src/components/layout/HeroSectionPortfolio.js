import Heading from "../Heading";
import Container from "react-bootstrap/Container";

//Had to duplicate HeroSection for the portfolioitems, because of the link structure.
//Work in progress.

function HeroSectionPortfolio({
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
        display=" display-2 text-center fw-bold pe-4 ps-4 pt-5 mt-5"
      />
      <p className="text-white lead text-center">{introText}</p>
      <div className={showButton}>
        <a
          href={link}
          target="_blank"
          rel="noreferer noopener"
          className="btn btn-lg text-white cta ps-5 pe-5 pt-2 pb-2 border-0"
        >
          {buttonTitle}
        </a>
      </div>
    </Container>
  );
}

export default HeroSectionPortfolio;
