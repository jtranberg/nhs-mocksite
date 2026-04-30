import PageLayout from "../components/PageLayout";
import "../styles/donate.css";

export default function Donate() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="donate-hero">
        <p className="eyebrow">Donate</p>

        <h1>Every donation creates a second chance.</h1>

        <p>
          Your support helps provide food, shelter, medical care, and recovery
          for animals in need. Every contribution makes a real difference.
        </p>
      </section>

      {/* IMPACT CARDS */}
      <section className="donate-impact">
        <div className="impact-card">
          <h3>$25</h3>
          <p>Provides food and basic care for an animal.</p>
        </div>

        <div className="impact-card">
          <h3>$75</h3>
          <p>Covers vaccinations and medical checkups.</p>
        </div>

        <div className="impact-card">
          <h3>$150</h3>
          <p>Supports recovery and rehabilitation efforts.</p>
        </div>

        <div className="impact-card">
          <h3>$300+</h3>
          <p>Helps prepare an animal for adoption and long-term care.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="donate-cta">
        <h2>Make a donation today</h2>

        <p>
          We will integrate CanadaHelps or your preferred donation platform to
          make giving simple, secure, and accessible.
        </p>

        <button className="button button-primary">
          Donate Securely
        </button>
      </section>

      {/* TRUST SECTION */}
      <section className="donate-trust">
        <p className="eyebrow">Transparency & Trust</p>

        <h2>Your support goes directly to animal care.</h2>

        <p>
          Our goal is to ensure that every dollar is used to support animals and
          improve outcomes. The platform will provide clear communication and
          updates so donors can see the real impact of their support.
        </p>
      </section>
    </PageLayout>
  );
}