import { useNavigate } from 'react-router-dom';

/**
 * @param {{
 *   id: string,
 *   title: string,
 *   cover: string
 * }} props
 */
const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2 className="card__title">{title}</h2>
      <img src={cover} alt={title} className="card__image" />
    </div>
  );
};

export default Card;
