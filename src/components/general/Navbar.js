import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Navbar.css";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Reservations", href: "/reservation", current: false },
  { name: "Order Online", href: "/order-online", current: false },
  { name: "Login", href: "/login", current: false },
];

export default function Navbar() {
  return (
    <header>
      <nav className="menu container">
        <Link>
          <img className="logo" src={Logo} alt="LittleLemon Logo" />
        </Link>
        <ul>
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
