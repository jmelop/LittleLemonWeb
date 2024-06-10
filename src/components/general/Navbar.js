import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Reservations", href: "/reservation", current: false },
  { name: "Order Online", href: "/order-online", current: false },
  { name: "Login", href: "/login", current: false },
];

export default function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <header>
      <nav className="menu container">
        <Link>
          <img className="logo" src={Logo} alt="LittleLemon Logo" />
        </Link>
        <button
          className="side-menu"
          type="button"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul
          className={openSideMenu ? "menu-items lateral-menu" : "menu-items"}
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {navigation.map((url, index) => (
            <li key={index}>
              <Link to={url.href}>{url.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
