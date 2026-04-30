import "../styles/home.css";

const stats = [
  {
    value: "Faster",
    label: "paths from visitor interest to adoption action",
  },
  {
    value: "Clearer",
    label: "communication with adopters, donors, and supporters",
  },
  {
    value: "Stronger",
    label: "public trust through stories, updates, and transparency",
  },
];

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-copy">
        <p className="eyebrow">Built for impact</p>
        <h2>A website that supports the mission, not just the menu.</h2>
        <p>
          The goal is to create a public experience that makes adoption easier,
          donation more meaningful, and community support more visible.
        </p>
      </div>

      <div className="impact-grid">
        {stats.map((stat) => (
          <div className="impact-card" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}