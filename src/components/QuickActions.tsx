import { Link } from "react-router-dom";
import "../styles/home.css";

const actions = [
  {
    title: "Adopt",
    text: "Browse animals ready for loving homes.",
    link: "/adopt",
    icon: "🐶",
  },
  {
    title: "Donate",
    text: "Support food, shelter, medical care, and recovery.",
    link: "/donate",
    icon: "💚",
  },
  {
    title: "Foster",
    text: "Provide temporary care while animals wait for adoption.",
    link: "/volunteer",
    icon: "🏡",
  },
  {
    title: "Volunteer",
    text: "Give your time and help animals directly.",
    link: "/volunteer",
    icon: "🤝",
  },
];

export default function QuickActions() {
  return (
    <section className="quick-actions-section">
      <div className="section-heading">
        <p className="eyebrow">How to help</p>
        <h2>Choose the path that feels right for you.</h2>
        <p>
          Clear action pathways help visitors understand how they can make an
          immediate difference.
        </p>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <Link key={action.title} to={action.link} className="quick-action-card">
            <span className="quick-action-icon">{action.icon}</span>
            <h3>{action.title}</h3>
            <p>{action.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}