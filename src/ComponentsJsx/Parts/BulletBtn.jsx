import React from 'react';
import '../../ComponentsCss/Parts/BulletBtn.css';

function BulletBtn({ text, onClick, big = false, children }) {
  const className = `bullet-btn ${big ? 'bullet-btn--big' : 'bullet-btn--small'}`;

  return (
    <button type="button" onClick={onClick} className={className}>
      <img src={`${process.env.PUBLIC_URL}/Img/bulet.png`} alt="bullet" className="bullet-btn__icon" />
      <span className="bullet-btn__text">{text}</span>
      {big && <div className="bullet-btn__content">{children}</div>}
    </button>
  );
}

export default BulletBtn;
