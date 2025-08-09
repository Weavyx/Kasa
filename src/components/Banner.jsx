const Banner = ({ text = "", img= null }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <span className="banner__text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
export default Banner;