import "../styles/home.css";

export default function JourneyPreview() {
  return (
    <section className="journey-section" id="journeys">
      <div className="journey-card">
        <div>
          <p className="eyebrow">Follow their journey</p>

          <h2>From intake to recovery to adoption.</h2>

          <p>
            Give supporters a transparent, emotional way to follow each animal’s
            progress. This turns the website into more than a directory — it
            becomes a living story of care, trust, and community impact.
          </p>

          <a href="/journeys" className="button button-primary">
            View Animal Journeys
          </a>
        </div>

        <div className="timeline">
          <div className="timeline-step">
            <span>01</span>
            <strong>Intake</strong>
            <p>Animal arrives and receives initial care.</p>
          </div>

          <div className="timeline-step">
            <span>02</span>
            <strong>Recovery</strong>
            <p>Medical, foster, and behavioral support begins.</p>
          </div>

          <div className="timeline-step">
            <span>03</span>
            <strong>Adoption Ready</strong>
            <p>Profile, story, and adoption pathway go live.</p>
          </div>

          <div className="timeline-step">
            <span>04</span>
            <strong>Forever Home</strong>
            <p>Adopter updates and follow-up support continue.</p>
          </div>
        </div>
      </div>
    </section>
  );
}