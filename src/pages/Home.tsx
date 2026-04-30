import PageLayout from "../components/PageLayout";
import AnimalCard from "../components/AnimalCard";
import JourneyPreview from "../components/JourneyPreview";
import QuickActions from "../components/QuickActions";
import ImpactSection from "../components/ImpactSection";
import AdoptionCTA from "../components/AdoptionCTA";
import { animals } from "../data/animals";

import "../styles/home.css";

export default function Home() {
  return (
    <PageLayout>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Adoption • Support • Community</p>

          <h1>Helping animals find safety, care, and forever homes.</h1>

          <p className="hero-text">
            A warm, accessible public platform designed to increase adoptions,
            strengthen donor engagement, and tell each animal’s journey with care.
          </p>

          <div className="hero-actions">
            <a href="/adopt" className="button button-primary">
              Find a Pet
            </a>

            <a href="/donate" className="button button-secondary">
              Support the Mission
            </a>
          </div>
        </div>

        <div className="hero-image-card">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=80"
            alt="Two dogs sitting together"
          />

          <div className="story-badge">
            <strong>Follow their journey</strong>
            <span>From intake to recovery to adoption.</span>
          </div>
        </div>
      </section>

      <section className="featured-section" id="adopt">
        <div className="section-heading">
          <p className="eyebrow">Meet the animals</p>
          <h2>Every adoption starts with a story.</h2>
          <p>
            Featured profiles show how the new site can connect visitors to each
            animal’s personality, progress, and needs.
          </p>
        </div>

        <div className="animal-grid">
          {animals.slice(0, 3).map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
      </section>

      <JourneyPreview />
      <QuickActions />
      <ImpactSection />
      <AdoptionCTA />
    </PageLayout>
  );
}