import React from "react";
import PCNM_LOGO from "../assets/photos/PCNM_LOGO.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={PCNM_LOGO} alt="PCNM Logo" />
      <div>
        <h1>Personal Chef Near Me</h1>
        <p>Check out my Facebook page with the button below!</p>
        <a
          href="https://www.facebook.com/people/Personal-Chef-Near-Me/61555784183482/"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@personalchefnearme?_t=ZT-8w7772PjQ6g&_r=1"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTikTok />
        </a>
        <a
          href="https://www.instagram.com/personalchefnearme/"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
