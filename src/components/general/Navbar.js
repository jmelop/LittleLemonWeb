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
      <nav className=""></nav>
    </header>
  );
}
