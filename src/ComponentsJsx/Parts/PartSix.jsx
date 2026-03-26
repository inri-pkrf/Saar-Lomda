import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import BulletBtn from './BulletBtn.jsx';
import '../../ComponentsCss/Parts/PartSix.css';

function PartSix() {
  const navigate = useNavigate();

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
      <HeaderParts title="נקודות התייחסות להמשך" />

      <div className="partone-list partTwo">
        {[
          'הצגת תפיסת החירום ברשות',
          'צוותי עבודה אורגניים עם שדרת פיקוד',
          'תרגול מודיעין אוכלוסייה, איסוף מידע, גיבוש תמונת מצב',
        ].map((label, i) => (
          <div className="partone-item" key={i}>
            <BulletBtn
              text={label}
              onClick={() => {}}
            >  
            </BulletBtn>
          </div>
        ))}
      <img src={`${process.env.PUBLIC_URL}/Img/sixPart-pic.png`} alt="Part six" id='part-six-img' />
      </div>

      <button className='next-topic-btn' style={{marginBottom:'4vh'}} onClick={() => navigate('/Menu')}>
        <img src={`${process.env.PUBLIC_URL}/Img/nextTopic-btn.png`} alt="nextTopic" className='next-btn-icon'/>
        <span>חזרה לתפריט</span>
      </button>
    </div>
  );
}

export default PartSix;
