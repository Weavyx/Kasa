import { useState } from 'react';

const Collapse = ({ title, children, variant = 'about' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse collapse--${variant}`}>
      <button
        className={`collapse__toggle collapse__toggle--${variant}`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
        type="button"
      >
        <span className="collapse__text">{title}</span>
        <svg
          className={`collapse__arrow${isOpen ? ' collapse__arrow--open' : ''}`}
          width="25" height="14" viewBox="0 0 25 14"
        >
          <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill="white"/>
        </svg>
      </button>

      <div className={`collapse__content${isOpen ? ' collapse__content--open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
