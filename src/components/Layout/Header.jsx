import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/little-lemon-logo.svg";
import "../../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Little Lemon Restaurant" />{" "}
        </Link>
        <nav>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={30} color="#495E57" />
          </div>
          <ul className={menuOpen ? "show-menu" : ""}>
            {menuOpen && (
              <div className="drawer-header">
                <Link to="/">
                  <img src={logo} alt="Little Lemon Restaurant" />{" "}
                </Link>
                <div
                  className="close-button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <AiOutlineClose size={25} color="#495E57" />
                </div>
              </div>
            )}
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/reservations">
              <li>Reservations</li>
            </Link>
            <Link to="/order-online">
              <li>Order Online</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
