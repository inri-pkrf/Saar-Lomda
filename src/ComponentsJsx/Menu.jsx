import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentsCss/Menu.css';

function Menu() {
  const [clickedButtons, setClickedButtons] = useState([]);
  const [isCompleting, setIsCompleting] = useState(false);
  const navigate = useNavigate();
  const background = `${process.env.PUBLIC_URL}/Img/Bg-allTheApp.png`;
  const buttonImg = `${process.env.PUBLIC_URL}/Img/menu-btn.png`;
  const doneImg = `${process.env.PUBLIC_URL}/Img/done-btn.png`;

  const menuItems = [
    'חזרה על תורה לחילוץ לכוד',
    'הנחות יסוד לרעידת אדמה',
    'דגשים לניהול זירת אירוע',
    'הטכניקה לחילוץ לכוד',
    'מודיעין אוכלוסייה – ליחידות 02',
    'נקודות התייחסות להמשך'
  ];

  useEffect(() => {
    if (clickedButtons.length === menuItems.length && menuItems.length > 0) {
      setIsCompleting(true);
      const timer = setTimeout(() => {
        navigate('/final');
      }, 1000);
      return () => clearTimeout(timer);
    }
    setIsCompleting(false);
  }, [clickedButtons, menuItems.length, navigate]);

  const handleButtonClick = (index) => {
    if (clickedButtons.includes(index)) {
      setClickedButtons(clickedButtons.filter(i => i !== index));
    } else {
      setClickedButtons([...clickedButtons, index]);
    }
  };

  return (
    <div
      className={`Menu ${isCompleting ? 'fade-out' : ''}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {isCompleting && (
        <div className="black-overlay" />
      )}
      <h1 className='header-menu'>תוכן עניינים:</h1>
      <div id="buttons-div">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`menu-btn ${clickedButtons.includes(index) ? 'clicked' : ''}`}
            style={{
              backgroundImage: `url(${buttonImg})`
            }}
            onClick={() => handleButtonClick(index)}
          >
            <span className="btn-text">{item}</span>
            {clickedButtons.includes(index) && (
              <div className="checkmark">
                <img src={doneImg} alt="done" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;