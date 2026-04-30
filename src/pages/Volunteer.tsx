import PageLayout from "../components/PageLayout";
import "../styles/volunteer.css";

const options = [
  {
    title: "Volunteer",
    text: "Support daily operations, assist with animal care, events, and community outreach.",
    icon: "🤝",
  },
  {
    title: "Foster",
    text: "Provide a safe temporary home for animals needing recovery, comfort, or socialization.",
    icon: "🏡",
  },
  {
    title: "Community Support",
    text: "Help with fundraising, awareness, and outreach to strengthen the NHS network.",
    icon: "💚",
  },
];

export default function Volunteer() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="volunteer-hero">
        <p className="eyebrow">Volunteer & Foster</p>

        <h1>Help animals directly.</h1>

        <p>
          Whether you give time, space, or support, every action helps animals
          feel safer, healthier, and closer to a forever home.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="volunteer-grid">
        {options.map((option) => (
          <article className="volunteer-card" key={option.title}>
            <span className="volunteer-icon">{option.icon}</span>
            <h3>{option.title}</h3>
            <p>{option.text}</p>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="volunteer-cta">
        <h2>Ready to get involved?</h2>

        <p>
          The platform can include application forms, onboarding steps, and
          clear guidance for volunteers and foster families.
        </p>

        <a href="/contact" className="button button-primary">
          Contact NHS
        </a>
      </section>
    </PageLayout>
  );
}