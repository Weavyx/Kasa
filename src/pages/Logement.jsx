import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logement from "../data/logements.json";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";

// Composant Star pour l'étoile SVG
const Star = ({ filled }) => {
  if (filled) {
    // Étoile remplie
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logement__star logement__star--filled"
      >
        <path
          d="M7.43233 1.3376C7.29777 1.05833 7.01344 0.880615 6.70117 0.880615C6.38891 0.880615 6.10711 1.05833 5.97001 1.3376L4.3376 4.6964L0.691971 5.23462C0.387322 5.28032 0.133448 5.49358 0.0395141 5.78553C-0.0544193 6.07749 0.0217428 6.39992 0.240075 6.61572L2.88544 9.2332L2.26091 12.9322C2.21014 13.2368 2.33707 13.5466 2.58841 13.7268C2.83975 13.9071 3.17232 13.9299 3.4465 13.7852L6.70371 12.0462L9.96091 13.7852C10.2351 13.9299 10.5677 13.9096 10.819 13.7268C11.0703 13.544 11.1973 13.2368 11.1465 12.9322L10.5194 9.2332L13.1648 6.61572C13.3831 6.39992 13.4618 6.07749 13.3654 5.78553C13.2689 5.49358 13.0176 5.28032 12.7129 5.23462L9.06474 4.6964L7.43233 1.3376Z"
          fill="#FF6060"
        />
      </svg>
    );
  } else {
    // Étoile vide
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logement__star logement__star--empty"
      >
        <path
          d="M7.43233 1.3376C7.29777 1.05833 7.01344 0.880615 6.70117 0.880615C6.38891 0.880615 6.10711 1.05833 5.97001 1.3376L4.3376 4.6964L0.691971 5.23462C0.387322 5.28032 0.133448 5.49358 0.0395141 5.78553C-0.0544193 6.07749 0.0217428 6.39992 0.240075 6.61572L2.88544 9.2332L2.26091 12.9322C2.21014 13.2368 2.33707 13.5466 2.58841 13.7268C2.83975 13.9071 3.17232 13.9299 3.4465 13.7852L6.70371 12.0462L9.96091 13.7852C10.2351 13.9299 10.5677 13.9096 10.819 13.7268C11.0703 13.544 11.1973 13.2368 11.1465 12.9322L10.5194 9.2332L13.1648 6.61572C13.3831 6.39992 13.4618 6.07749 13.3654 5.78553C13.2689 5.49358 13.0176 5.28032 12.7129 5.23462L9.06474 4.6964L7.43233 1.3376Z"
          fill="#E3E3E3"
        />
      </svg>
    );
  }
};


const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentLogement = logement.find((item) => item.id === id);
  useEffect(() => {
    if (!currentLogement) {
      navigate("/404", { replace: true });
    }
  }, [currentLogement, navigate]);

  if (!currentLogement) {
    return null; // Évite d'afficher quoi que ce soit avant la redirection
  }

  return (
    <div className="logement">

      <Slideshow images={currentLogement.pictures} />

      <div className="logement__details">
        <div className="logement__details-info">
          <h1 className="logement__details-title">{currentLogement.title}</h1>
          <p className="logement__details-location">{currentLogement.location}</p>
          <div className="logement__details-tags">
            {currentLogement.tags.map((tag, index) => (
              <span key={index} className="logement__details-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement__meta">
          <div className="logement__host">
            <p className="logement__host-name">{currentLogement.host.name.replace(' ', '\n')}</p>
            <img className="logement__host-picture" src={currentLogement.host.picture} alt={currentLogement.host.name} />
          </div>
          <div className="logement__rating">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} filled={index < currentLogement.rating} />
            ))}
          </div>
        </div>
      </div>
      <div className="logement__collapse-container">
        <Collapse title="Description" variant="logement">
          {currentLogement.description}
        </Collapse>
        <Collapse title="Équipements" variant="logement">
          <ul>
            {currentLogement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logement;