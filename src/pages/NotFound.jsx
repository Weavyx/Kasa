import { Link } from 'react-router';

const NotFound = () => {
  return (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <p className="not-found__text">Oups! La page que<br />vous demandez n'existe pas.</p>
    <Link to="/" className='not-found__link'>Retourner à la page d'accueil</Link>
  </div>)
};
export default NotFound;
