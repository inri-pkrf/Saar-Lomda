import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import DropBtn from '../../ComponentsJsx/Parts/DropBtn.jsx';
import { useState } from 'react';
import '../../ComponentsCss/Parts/PartFour.css';
import IconCard from '../../ComponentsJsx/Parts/IconCard.jsx';  
import { IconCardGroups } from '../../ComponentsJsx/Parts/IconCardGroups.js';

function PartFour() {
  const navigate = useNavigate();
  
  const buttonLabels = [
    'הערכת מצב',
    'בניית תוכנית, הכנה ותדרוך',
    'ביצוע',
    'העברת מקל וסיום המשימה'
  ];

  const [active, setActive] = useState(null);

  return (
    <div
      className="partone-root"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Img/Bg-allTheApp.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeaderParts title="הטכניקה לחילוץ לכוד" />

      <div className="partone-list">
        {buttonLabels.map((label, index) => (
          <div
            className={`partone-item ${active === index ? 'active' : ''}`}
            key={label}
          >
            <DropBtn
              label={label}
              onClick={() => setActive(index === active ? null : index)}
              isActive={active === index}
              renderChildren={true}
            >
              {index !== 2 && [null, IconCardGroups.group1, IconCardGroups.group2, IconCardGroups.group3, IconCardGroups.group4][index + 1] && (
                <div className="icon-cards-container">
                  {[null, IconCardGroups.group1, IconCardGroups.group2, IconCardGroups.group3, IconCardGroups.group4][index + 1].map((card) => (
                    <IconCard
                      key={card.id}
                      title={card.title}
                      items={card.items}
                      icon={card.icon}
                      className={card.className}
                    />
                  ))}
                </div>
              )}
              {index === 2 && (
                <div>
                  <div className="icon-cards-container">
                    {IconCardGroups.group3.map((card) => (
                      <IconCard
                        key={card.id}
                        title={card.title}
                        items={card.items}
                        icon={card.icon}
                        className={card.className}
                      />
                    ))}
                  </div>
                  <div style={{width: '100%', textAlign: 'center', marginTop: '20px'}}>
                    <img src={`${process.env.PUBLIC_URL}/Img/fourPart-pic.png`} alt="ביצוע" style={{width: '80vw', height: 'auto', maxWidth: '400px'}} />
                  </div>
                </div>
              )}
            </DropBtn>
          </div>
        ))}
      </div>

      <button className='next-topic-btn' style={{marginBottom:'4vh'}} onClick={() => navigate('/Menu')}>
        <img src={`${process.env.PUBLIC_URL}/Img/nextTopic-btn.png`} alt="nextTopic" className='next-btn-icon'/>
        <span>חזרה לתפריט</span>
      </button>
    </div>
  );
}

export default PartFour;

