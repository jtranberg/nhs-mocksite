import { Link } from "react-router-dom";
import "../styles/home.css";

export default function AdoptionCTA() {
  return (
    <section className="adoption-cta">
      <div className="adoption-cta-content">
        <p className="eyebrow">Take the next step</p>

        <h2>Ready to change a life?</h2>

        <p>
          Whether you're looking to adopt, foster, or support, every action
          creates a real impact for animals in need.
        </p>

        <div className="adoption-cta-actions">
          <Link to="/adopt" className="button button-primary">
            View Available Animals
          </Link>

          <Link to="/donate" className="button button-secondary">
            Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
}