import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Northumberland Humane Society</h3>
        <p>Helping animals find safety, care, and forever homes.</p>
      </div>

      <div className="footer-links">
        <Link to="/adopt">Adopt</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}