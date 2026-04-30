import { useState } from "react";
import PageLayout from "../components/PageLayout";
import AnimalCard from "../components/AnimalCard";
import { animals } from "../data/animals";

import "../styles/adopt.css";

type FilterType = "All" | "Dog" | "Cat" | "Other";

export default function Adopt() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredAnimals =
    filter === "All"
      ? animals
      : animals.filter((animal) => animal.type === filter);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="adopt-hero">
        <p className="eyebrow">Adopt</p>
        <h1>Find your next family member.</h1>
        <p>
          Browse animals currently available or moving toward adoption readiness.
          Each profile can tell the full journey from intake to forever home.
        </p>
      </section>

      {/* FILTER BAR */}
      <section className="adopt-toolbar">
        {["All", "Dog", "Cat", "Other"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type as FilterType)}
          >
            {type}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="adopt-grid">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </section>
    </PageLayout>
  );
}