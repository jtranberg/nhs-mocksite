import PageLayout from "../components/PageLayout";
import "../styles/journeys.css";

const posts = [
  {
    title: "Milo’s first week",
    summary:
      "From shy beginnings to playful confidence, Milo is learning to trust and connect.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luna’s recovery journey",
    summary:
      "Gentle care and quiet spaces are helping Luna regain strength and confidence.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rosie finds comfort",
    summary:
      "A calm environment is helping Rosie settle and begin her path to a forever home.",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Journeys() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="journeys-hero">
        <p className="eyebrow">Animal Journeys</p>

        <h1>Follow their stories.</h1>

        <p>
          This space brings transparency and connection to every stage of care —
          from intake to recovery to adoption.
        </p>
      </section>

      {/* POSTS */}
      <section className="journeys-grid">
        {posts.map((post) => (
          <article className="journey-card" key={post.title}>
            <img src={post.image} alt={post.title} />

            <div className="journey-card-content">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}