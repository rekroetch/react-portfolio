import React from "react";
import "./style.css";
import Resume from '../../assets/Rachel_Kroetch-Resume_02.22.pdf'

function Footer() {
  return (
    <nav className="navbar fixed-bottom navbar-dark navBottom">
        <div className="footer col">
            <a href="https://www.linkedin.com/in/rachelkroetch/" target="_blank" rel="noreferrer" className="social"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/rekroetch" target="_blank" rel="noreferrer" className="social"><i className="fab fa-github-square"></i></a>
            <a href={Resume} target="_blank" rel="noreferrer" className="resume">Resume</a>
        </div>
    </nav>
  );
}

export default Footer;