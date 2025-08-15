const Banner = ({ text = "", img= null, variant = "" }) => {
  const bannerClass = `banner${variant ? ` banner--${variant}` : ""}`;

  return (
    <div className={bannerClass} style={{ backgroundImage: `url(${img})` }}>
      <span className="banner__text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
export default Banner;