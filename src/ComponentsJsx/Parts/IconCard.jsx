import React from "react";
import '../../ComponentsCss/Parts/IconCard.css';

const IconCard = ({ title, items, icon, className }) => {
  const hasItems = items && items.length > 0;
  const contentClass = hasItems ? "icon-card-content" : "icon-card-content icon-card-content-centered";

  return (
    <div className={`icon-card ${className || ""}`}>
      <div className="icon-card-header">{title}</div>

      <div className={contentClass}>
        
        {/* only render items if they exist */}
        {hasItems && (
          <div className="icon-card-items">
            {items.map((item, index) => (
              <div key={index} className="icon-card-row">
                <span className="icon-card-label">{item.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="icon-card-side">
          <img src={icon} alt="icon" className="icon-card-main-icon" />
        </div>

      </div>
    </div>
  );
};

export default IconCard;

