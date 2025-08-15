
import { useState } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si pas d'images ou une seule image, pas besoin de navigation
    if (!images || images.length === 0) {
        console.log('Slideshow - Aucune image, retour null');
        return null;
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slideshow__image"
            />

            {/* Afficher les flèches seulement s'il y a plus d'une image */}
            {images.length > 1 && (
                <>
                    <button
                        className="slideshow__arrow slideshow__arrow--left"
                        onClick={goToPrevious}
                        aria-label="Image précédente"
                    >
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </button>

                    <button
                        className="slideshow__arrow slideshow__arrow--right"
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                        </svg>
                    </button>
                </>
            )}

            {/* Afficher le compteur seulement s'il y a plus d'une image */}
            {images.length > 1 && (
                <div className="slideshow__counter">
                    {currentIndex + 1}/{images.length}
                </div>
            )}
        </div>
    );
};

export default Slideshow;