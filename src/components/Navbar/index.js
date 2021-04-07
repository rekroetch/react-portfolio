import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navTop">
      <Link className="navbar-brand" to="/react-portfolio/" style={{fontSize: "25px"}}>
        Rachel Kroetch
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/react-portfolio/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              style={{color: "whitesmoke"}}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/react-portfolio/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              style={{color: "whitesmoke"}}
            >
              Portfolio
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              style={{color: "whitesmoke"}}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;