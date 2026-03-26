import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import DropBtn from '../../ComponentsJsx/Parts/DropBtn.jsx';
import { useState } from 'react';

function PartFour() {
  const navigate = useNavigate();
  
  const buttonLabels = [
    'הערכת מצב',
    'בניית תוכנית, הכנה ותדרוך',
    'ביצוע',
    'העברת מקל וסיום המשימה'
  ];

  const [currentSlide, setCurrentSlide] = useState([0, 0, 0]);
  const [completed, setCompleted] = useState([false, false, false]);
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
          <div className={`partone-item ${active === index ? 'active' : ''}`} key={label}>
            <DropBtn
              label={label}
              onClick={() => setActive(index === active ? null : index)}
              isActive={active === index}

            />
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
