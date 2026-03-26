import React from 'react';
import '../../ComponentsCss/Parts/HeaderParts.css';

function HeaderParts({ title}) {
  return (
    <div className="header-parts">
      <div className="header-parts-top">
        <img src={`${process.env.PUBLIC_URL}/Img/rescue-icon.png`} alt="rescue" />
        <span className="header-parts-title">{title}</span>
      </div>
    </div>
  );
}

export default HeaderParts;