import { Link } from "react-router-dom";
import "../styles/cards.css";

type AnimalCardProps = {
  id: string;
  name: string;
  type: string;
  age: string;
  status: string;
  description: string;
  image: string;
};

export default function AnimalCard({
  id,
  name,
  type,
  age,
  status,
  description,
  image,
}: AnimalCardProps) {
  return (
    <article className="animal-card">
      <img src={image} alt={name} />

      <div className="animal-card-content">
        <span className="animal-status">{status}</span>

        <h3>{name}</h3>

        <p className="animal-meta">
          {type} • {age}
        </p>

        <p>{description}</p>

        <Link to={`/animals/${id}`} className="animal-link">
          Meet {name}
        </Link>
      </div>
    </article>
  );
}