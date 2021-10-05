import { HashRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import { PUBLIC_URL } from "../../constants/PublicUrl";
import Navigation from "./Navigation";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
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
        </Switch>
      </>
    </Router>
  );
}

export default Routes;
