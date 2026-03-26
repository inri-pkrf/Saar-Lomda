import React from 'react';
import '../../ComponentsCss/Parts/Carusel.css';

function Carusel({ images, currentSlide, onPrev, onNext }) {
  return (
    <div className="carousel">

      {/* LEFT ARROW */}
      <button
        className="carousel-arrow left"
        onClick={onNext}   // RTL: next is LEFT
        disabled={currentSlide === images.length - 1}
      >
        ❯
      </button>

      {/* IMAGE */}
      <img
        src={images[currentSlide].url}
        alt={images[currentSlide].title}
        className="carousel-img"
      />

      {/* TITLE */}
      <div className="carousel-title">{images[currentSlide].title}</div>

      {/* RIGHT ARROW */}
      <button
        className="carousel-arrow right"
        onClick={onPrev}   // RTL: prev is RIGHT
        disabled={currentSlide === 0}
      >
        ❮
      </button>

      {/* DOTS */}
      <div className="carousel-dots">
        {images.map((_, dot) => (
          <span
            key={dot}
            className={`dot ${currentSlide === dot ? 'active' : ''}`}
          />
        ))}
      </div>

    </div>
  );
}

export default Carusel;