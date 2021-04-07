import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/react-portfolio/"  component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
