import PageLayout from "../components/PageLayout";
import "../styles/documents.css";

const documents = [
  {
    title: "Adoption Application",
    description: "Download the application form for adopting an animal.",
    file: "#",
    tag: "Adoption",
  },
  {
    title: "Foster Application",
    description: "Apply to provide temporary care for animals in need.",
    file: "#",
    tag: "Foster",
  },
  {
    title: "Volunteer Form",
    description: "Get started as a volunteer with NHS.",
    file: "#",
    tag: "Volunteer",
  },
  {
    title: "Pet Care Guide",
    description: "Helpful information for new adopters and pet owners.",
    file: "#",
    tag: "Care Guide",
  },
];

export default function Documents() {
  return (
    <PageLayout>
      <section className="documents-hero">
        <p className="eyebrow">Document Centre</p>
        <h1>Forms and resources in one place.</h1>
        <p>
          A simple download hub makes it easier for adopters, foster families,
          volunteers, and supporters to access the documents they need.
        </p>
      </section>

      <section className="documents-grid">
        {documents.map((doc) => (
          <article className="document-card" key={doc.title}>
            <span className="document-tag">{doc.tag}</span>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>

            <a href={doc.file} className="button button-primary" download>
              Download
            </a>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}