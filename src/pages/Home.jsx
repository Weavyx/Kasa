import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerImg from '../assets/home-banner.jpg';
import logements from '../data/logements.json';

const Home = () => {
  return (
    <div>
      <Banner text="Chez vous,<br /> partout et ailleurs" img={bannerImg} />
      <div className="cards-container">
        {
          logements.map(({id, title, cover}) => (
            <Card key={id} id={id} title={title} cover={cover} style={{backgroundImage: `url(${cover})`}} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
