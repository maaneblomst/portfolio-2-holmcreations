import { HashRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import { PUBLIC_URL } from "../../constants/PublicUrl";
import Navigation from "./Navigation";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import PortfolioItem from "../portfolio/PortfolioItem";

function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/portfolio/:id">
            <PortfolioItem />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default Routes;
