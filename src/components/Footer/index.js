import React from "react";
import "./style.css";

function Footer() {
  return (
    <nav className="navbar fixed-bottom navbar-dark navBottom">
        <div className="footer col">
            <a href="https://www.linkedin.com/in/rachelkroetch/" target="_blank" rel="noreferrer" className="social"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/rekroetch" target="_blank" rel="noreferrer" className="social"><i className="fab fa-github-square"></i></a>
            <a href="assets/Rachel Kroetch - Resume.pdf" target="_blank" rel="noreferrer" className="social"><i className="far fa-file-alt"></i></a>
        </div>
    </nav>
  );
}

export default Footer;