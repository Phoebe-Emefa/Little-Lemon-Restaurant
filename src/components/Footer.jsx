import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import logo from "../assets/little-lemon-logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Little Lemon restaurant" />
      </div>
      <div class="footer">
        <div className="bottom-nav">
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#menu">
            <p>Menu</p>
          </a>
          <a href="#menu">
            <p>Reservations</p>
          </a>
        </div>
        <div>
          <p>Chicago, Illinois</p>
          <p>+9023333322</p>
          <a href="mailto:info@littlelemon.com">
            <p>info@littlelemon.com</p>
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.instagram.com/dimaensa_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href=" https://twitter.com/Dimaensa"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://web.facebook.com/DimaensaRestaurant"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
