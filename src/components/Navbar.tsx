import { Link, NavLink } from "react-router-dom";
import "../styles/layout.css";
import "../styles/buttons.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">🐾</span>
        <span>Northumberland Humane Society</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/adopt">Adopt</NavLink>
        <NavLink to="/journeys">Animal Journeys</NavLink>
        <NavLink to="/volunteer">Volunteer</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/donate" className="button button-primary">
        Donate
      </Link>
    </header>
  );
}