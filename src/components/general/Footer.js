import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/logo-footer.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Reservations", href: "/reservation", current: false },
  { name: "Order Online", href: "/order-online", current: false },
  { name: "Login", href: "/login", current: false },
];

export default function Footer() {
  return (
    <section className="footer-block">
      <div className="footer-container">
        <img src={Logo} alt="LittleLemon Logo" />
        <nav>
          <h4>SITEMAP</h4>
          <ul>
            {navigation.map((url, index) => (
              <li key={index}>
                <Link to={url.href}>{url.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h4>CONTACT US</h4>
          <ul>
            <li>123 Main Street Chicago, 60601</li>
            <li>(555) 012-3456</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h4>CONNECT WITH US</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
