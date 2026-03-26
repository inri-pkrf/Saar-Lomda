import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import '../../ComponentsCss/Parts/PartTwo.css';
import BulletBtn from './BulletBtn.jsx';

function PartTwo() {
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
      <HeaderParts title="הנחות יסוד לרעידת אדמה 1/2" />

      <div className="partone-list">
        {[
          'אירוע רחב היקף אשר פוגע באזורים נרחבים',
          'מתרחש בזמן שגרה ללא התראה מוקדמת',
          'גיוס כוחות חירום יקח זמן רב, ולא יהיה מענה בשעות/הימים הראשונים',
          'השעות הראשונות הן זמן קריטי בהצלת חיי לכודים'
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
        <div>
            <img src={`${process.env.PUBLIC_URL}/Img/PartTwo-pic.png`} alt="PartTwo-pic" className='PartTwo-pic'/>
            <p className='PartTwo-text'>מי שיבצע את פעולות החילוץ בזמן הראשוני הם עוברי האורח באירוע</p>
        </div>

      <button className='next-topic-btn' style={{marginBottom:'4vh'}} onClick={() => navigate('/PartTwo2')}>
        <img src={`${process.env.PUBLIC_URL}/Img/nextTopic-btn.png`} alt="nextTopic" className='next-btn-icon'/>
        <span>לחלק 2</span>
      </button>
    </div>
  );
}

export default PartTwo;
