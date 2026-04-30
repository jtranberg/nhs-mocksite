import { Link, useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { animals } from "../data/animals";

import "../styles/animal-profile.css";

export default function AnimalProfile() {
  const { id } = useParams();

  const animal = animals.find((item) => item.id === id);

  if (!animal) {
    return (
      <PageLayout>
        <section className="page-shell">
          <h1>Animal not found.</h1>
          <p>This profile may have been adopted or moved.</p>
          <Link to="/adopt" className="button button-primary">
            Back to Adopt
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="profile-hero">
        <div className="profile-image">
          <img src={animal.image} alt={animal.name} />
        </div>

        <div className="profile-content">
          <p className="eyebrow">{animal.status}</p>
          <h1>Meet {animal.name}</h1>

          <p className="profile-meta">
            {animal.type} • {animal.age}
          </p>

          <p className="profile-description">{animal.description}</p>

          <div className="personality-tags">
            {animal.personality.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>

          <div className="profile-actions">
            <Link to="/contact" className="button button-primary">
              Apply to Adopt
            </Link>

            <Link to="/adopt" className="button button-secondary">
              Back to Animals
            </Link>
          </div>
        </div>
      </section>

      <section className="profile-story">
        <div>
          <p className="eyebrow">Their story</p>
          <h2>A journey worth following.</h2>
        </div>

        <p>
          This profile page is designed to help visitors connect emotionally
          with each animal. NHS can share updates, personality notes, care
          milestones, and adoption readiness in one clear place.
        </p>
      </section>

      <section className="profile-timeline">
        <div className="timeline-card">
          <span>01</span>
          <h3>Intake</h3>
          <p>Initial arrival, safety check, and care assessment.</p>
        </div>

        <div className="timeline-card">
          <span>02</span>
          <h3>Care Plan</h3>
          <p>Medical, foster, behaviour, or recovery needs are identified.</p>
        </div>

        <div className="timeline-card">
          <span>03</span>
          <h3>Adoption Ready</h3>
          <p>Story, profile, and application pathway become public.</p>
        </div>

        <div className="timeline-card">
          <span>04</span>
          <h3>Forever Home</h3>
          <p>Adoption follow-up and happy updates can continue.</p>
        </div>
      </section>
    </PageLayout>
  );
}