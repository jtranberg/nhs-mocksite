import { Link } from "react-router-dom";
import "../styles/layout.css";
import award from "../assets/award.webp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>Northumberland Humane Society</h3>
          <p>Helping animals find safety, care, and forever homes.</p>
        </div>

        <nav className="footer-links">
          <Link to="/adopt">Adopt</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-award">
          <img src={award} alt="Canadian Choice Award Winner 2026" />
          <p className="award-caption">Canadian Choice Award Winner 2026</p>
        </div>
      </div>
    </footer>
  );
}