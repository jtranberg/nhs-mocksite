import PageLayout from "../components/PageLayout";
import "../styles/about.css";

export default function About() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="about-hero">
        <p className="eyebrow">About NHS</p>

        <h1>Care, shelter, and community.</h1>

        <p>
          The Northumberland Humane Society is dedicated to protecting,
          caring for, and finding loving homes for animals in need while
          supporting the community through compassion and education.
        </p>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <div>
          <h2>Our mission</h2>
          <p>
            To provide safe shelter, medical care, and compassionate support for
            animals while helping them transition into loving, permanent homes.
          </p>
        </div>

        <div>
          <h2>Our approach</h2>
          <p>
            Through adoption programs, foster networks, and community
            engagement, NHS focuses on both immediate care and long-term
            outcomes for animals.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="value-card">
          <h3>Compassion</h3>
          <p>Every animal deserves care, respect, and a second chance.</p>
        </div>

        <div className="value-card">
          <h3>Transparency</h3>
          <p>Open communication builds trust with adopters and supporters.</p>
        </div>

        <div className="value-card">
          <h3>Community</h3>
          <p>Strong local support makes better outcomes possible.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Be part of the journey.</h2>

        <p>
          Whether through adoption, volunteering, or donations, every
          contribution helps create better outcomes for animals.
        </p>

        <a href="/adopt" className="button button-primary">
          View Animals
        </a>
      </section>
    </PageLayout>
  );
}