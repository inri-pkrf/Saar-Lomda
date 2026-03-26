import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import BulletBtn from './BulletBtn.jsx';
import '../../ComponentsCss/Parts/PartFive.css'

function PartFive() {
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
      <HeaderParts title="מודיעין אוכלוסייה – ליחידות 02" />
      <h1 style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'normal', fontSize: '10vw', marginBottom: '0vh' }}>מטרות עיקריות</h1>
      <div className="partone-list partTwo">
        {[
          'האם יש לכודים?',
          'צפי כמויות',
          'רשימת עוגן',
          'מיקום משוער',
            'סיום- אפס נעדרים',
        ].map((label, i) => (
          <div className="partone-item" key={i}>
            <BulletBtn
              text={label}
              onClick={() => {}}
            >  
            </BulletBtn>
          </div>
        ))}
        <img src={`${process.env.PUBLIC_URL}/Img/partFive-pic.png`} alt="Part Five" id='part-five-img' />
        {[
          'חלק בלתי נפרד מפעולות החילוץ',
          ' רוב הלכודים אינם גלויים',
          ' מקורות מידע רבים',
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

export default PartFive;
