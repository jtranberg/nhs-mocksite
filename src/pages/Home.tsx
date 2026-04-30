import PageLayout from "../components/PageLayout";
import AnimalCard from "../components/AnimalCard";
import JourneyPreview from "../components/JourneyPreview";
import QuickActions from "../components/QuickActions";
import ImpactSection from "../components/ImpactSection";
import AdoptionCTA from "../components/AdoptionCTA";

import "../styles/home.css";

const featuredAnimals = [
  {
    id: "milo",
    name: "Milo",
    type: "Dog",
    age: "2 years",
    status: "Ready for Adoption",
    description: "A playful companion learning confidence and trust every day.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "luna",
    name: "Luna",
    type: "Cat",
    age: "1 year",
    status: "In Recovery",
    description: "Gentle, curious, and slowly showing her bright personality.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rosie",
    name: "Rosie",
    type: "Rabbit",
    age: "8 months",
    status: "Foster Needed",
    description: "Sweet, quiet, and looking for a calm temporary home.",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
  },
];

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
          {featuredAnimals.map((animal) => (
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