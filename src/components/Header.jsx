import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai"
import logo from "../assets/little-lemon-logo.svg";
import "../styles/Header.css";

const Header = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header>
      <div className='header'>
        <a href="#">
          <img src={logo} alt="Little Lemon Restaurant" />{" "}
        </a>
        <nav>
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={30} color="#495E57" />
          </div>
         <ul className={menuOpen ? "show-menu" : ""}>
       {
        menuOpen && (
            <div className="drawer-header">
            <a href="#">
          <img src={logo} alt="Little Lemon Restaurant" />{" "}
        </a>
              <div className="close-button" onClick={()=> setMenuOpen(!menuOpen)}>
                <AiOutlineClose size={25} color="#495E57" />
              </div>
            </div>
        )
       }
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#menu">
              <li>Menu</li>
            </a>
            <a href="#reservations">
              <li>Reservations</li>
            </a>
            <a href="#order-online">
              <li>Order Online</li>
            </a>
            <a href="#login">
              <li>Login</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
