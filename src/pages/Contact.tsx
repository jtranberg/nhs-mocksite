import PageLayout from "../components/PageLayout";
import "../styles/contact.css";

export default function Contact() {
  return (
    <PageLayout>
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch.</h1>
        <p>
          Whether you have a question about adoption, fostering, donations, or
          volunteering, this page gives visitors a clear way to connect.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-card">
          <h2>Contact Information</h2>

          <div className="contact-detail">
            <strong>Email</strong>
            <span>info@northumberlandhumanesociety.ca</span>
          </div>

          <div className="contact-detail">
            <strong>Phone</strong>
            <span>(000) 000-0000</span>
          </div>

          <div className="contact-detail">
            <strong>Location</strong>
            <span>Northumberland County, Ontario</span>
          </div>

          <div className="contact-detail">
            <strong>Hours</strong>
            <span>Hours and visiting information can be managed through the CMS.</span>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Topic
            <select>
              <option>Adoption</option>
              <option>Fostering</option>
              <option>Volunteering</option>
              <option>Donation</option>
              <option>General question</option>
            </select>
          </label>

          <label>
            Message
            <textarea placeholder="How can NHS help?" rows={6}></textarea>
          </label>

          <button className="button button-primary" type="button">
            Send Message
          </button>
        </form>
      </section>
    </PageLayout>
  );
}