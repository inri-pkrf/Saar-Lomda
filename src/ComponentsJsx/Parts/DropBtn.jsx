import React from 'react';
import Carusel from './Carusel';
import '../../ComponentsCss/Parts/DropBtn.css';

function DropBtn({
  label,
  isDone,
  onClick,
  isActive,
  images,
  currentSlide,
  onPrev,
  onNext,
  children,
  renderChildren = false // NEW
}) {
  const buttonImg = `${process.env.PUBLIC_URL}/Img/${isActive ? 'partOne-btnOpen.png' : 'partOne-btn.png'}`;

  return (
    <div className={`drop-btn-container ${isActive ? 'expanded' : ''}`}>
      <button
        className={`drop-btn ${isDone ? 'done' : ''}`}
        onClick={onClick}
        style={{ backgroundImage: `url(${buttonImg})` }}
      >
        <span className="btn-text">{label}</span>
        <img
          className={`dropdown-icon ${isActive ? 'rotated' : ''}`}
          src={`${process.env.PUBLIC_URL}/Img/dropdown-btn.png`}
          alt="dropdown"
        />
      </button>

      {/* ✅ Render children ONLY if renderChildren is true */}
      {isActive && renderChildren && (
        <div className="drop-content">
          {children}
        </div>
      )}

      {isActive && images && (
        <div className="drop-carousel-wrapper">
          <Carusel
            images={images}
            currentSlide={currentSlide}
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      )}
    </div>
  );
}

export default DropBtn;