import React from 'react';
import HeaderParts from './HeaderParts';
import { useNavigate } from 'react-router-dom';
import '../../ComponentsCss/Parts/PartOne.css';
import '../../ComponentsCss/Parts/PartTwo.css';
import BulletBtn from './BulletBtn.jsx';

function PartTwo2() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const correctAnswer = '1927';

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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
      <HeaderParts title="הנחות יסוד לרעידת אדמה 2/2 " />

      <div className="partone-list partTwo">
        {[
          'לא ניתן לחזות רעידת אדמה',
          'במקום בו התרחשה רעידת אדמה, תתרחש רעידת אדמה נוספת בעתיד',
          'הערכת המומחים היא שבכל         80-100 שנה מתקיימת רעידת אדמה חזקה באזורנו',
          'מתי התרחשה רעידת אדמה חזקה אחרונה בישראל?'
        ].map((label, i) => (
          <div className="partone-item" key={i}>
            <BulletBtn
              text={label}
              onClick={() => {}}
              big={label === 'מתי התרחשה רעידת אדמה חזקה אחרונה בישראל?'}
            >
              {label === 'מתי התרחשה רעידת אדמה חזקה אחרונה בישראל?' && (
                <div className="quiz-options">
                  {['1930', '1927', '1941', '1995'].map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrect = option === correctAnswer;
                    const className = `quiz-option ${isSelected ? (isCorrect ? 'correct' : 'wrong') : ''}`;

                    return (
                      <button
                        key={option}
                        type="button"
                        className={className}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <span>{option}</span>
                        {isSelected && isCorrect && (
                          <img
                            src={`${process.env.PUBLIC_URL}/Img/done-btn.png`}
                            alt="done"
                            className="option-done-icon"
                          />
                        )}
                      </button>
                    );
                  })}
                  {selectedOption && (
                    <div className={`quiz-feedback ${selectedOption === correctAnswer ? 'correct-feedback' : 'wrong-feedback'}`}>
                      {selectedOption === correctAnswer ? 'נכון' : 'לא נכון'}
                    </div>
                  )}
                </div>
              )}
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

export default PartTwo2;
