import PageLayout from "../components/PageLayout";
import AnimalCard from "../components/AnimalCard";
import { animals } from "../components/data/animals";

import "../styles/adopt.css";

export default function Adopt() {
  return (
    <PageLayout>
      <section className="adopt-hero">
        <p className="eyebrow">Adopt</p>
        <h1>Find your next family member.</h1>
        <p>
          Browse animals currently available or moving toward adoption readiness.
          Each profile can tell the full journey from intake to forever home.
        </p>
      </section>

      <section className="adopt-toolbar">
        <button>All</button>
        <button>Dogs</button>
        <button>Cats</button>
        <button>Other</button>
      </section>

      <section className="adopt-grid">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </section>
    </PageLayout>
  );
}