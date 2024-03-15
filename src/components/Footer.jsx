import React from "react";
import PCNM_LOGO from "../assets/photos/PCNM_LOGO.png";
import { FaSquareFacebook } from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={PCNM_LOGO} alt="PCNM Logo" />
      <div>
        <h1>Personal Chef Near Me</h1>
        <p>
          An accomplished and fervent chef, proudly rooted in Arizona, dedicated
          to delivering culinary excellence straight to your home and table.
        </p>
        <a
          href="https://www.facebook.com/people/Personal-Chef-Near-Me/61555784183482/"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
