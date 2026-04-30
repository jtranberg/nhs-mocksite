import PageLayout from "../components/PageLayout";

export default function AnimalProfile() {
  return (
    <PageLayout>
      <section className="page-shell">
        <p className="eyebrow">Animal Profile</p>
        <h1>Meet this animal.</h1>
        <p>Full story, adoption status, and journey timeline will go here.</p>
      </section>
    </PageLayout>
  );
}