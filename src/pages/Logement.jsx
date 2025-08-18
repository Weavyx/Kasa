import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logement from "../data/logements.json";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Star from "../components/Star";

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