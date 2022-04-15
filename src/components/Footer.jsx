import React from "react";
import htmlIcon from "../images/html-icon.png";
import cssIcon from "../images/css-icon.png";
import jsIcon from "../images/js-icon.png";
import reactIcon from "../images/react-icon.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h2 style={{ display: "inline", verticalAlign: "middle" }}>Made with 🧡 by Aakash M. using </h2>
      <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={reactIcon} alt="react-icon" />
      <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={htmlIcon} alt="html-icon" />
      <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={cssIcon} alt="css-icon" />
      <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={jsIcon} alt="js-icon" />

      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
