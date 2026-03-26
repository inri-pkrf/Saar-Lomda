import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import BulletBtn from './BulletBtn.jsx';

function PartThree() {
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
      <HeaderParts title="דגשים לניהול זירת אירוע" />

      <div className="partone-list partTwo">
        {[
          'סיווג וגיבוש תמונת מצב',
          'תפיסת פיקוד ראשוני',
          'התארגנות ופעולה – חלוקה למשימות, סריקות, חילוץ קל',
          'מיפוי ורישום האתר',
            'חבירה והעברת מקל',
        ].map((label, i) => (
          <div className="partone-item" key={i}>
            <BulletBtn
              text={label}
              onClick={() => {}}
            >  
            </BulletBtn>
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

export default PartThree;
