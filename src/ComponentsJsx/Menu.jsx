import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentsCss/Menu.css';

function Menu() {
  const [clickedButtons, setClickedButtons] = useState(() => {
    // Load from localStorage on initial render
    try {
      const saved = localStorage.getItem('menuClickedButtons');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });
  const [isCompleting, setIsCompleting] = useState(() => {
    try {
      const saved = localStorage.getItem('isCompleting');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Ensure this state is reset when Menu mounts (app restart path too)
    setIsCompleting(false);
    try {
      localStorage.removeItem('isCompleting');
    } catch (error) {
      console.error('Failed to clear isCompleting on Menu mount', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('isCompleting', JSON.stringify(isCompleting));
    } catch (error) {
      console.error('Failed to persist isCompleting', error);
    }
  }, [isCompleting]);

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
            onClick={() => {
              const routes = ['/PartOne', '/PartTwo', '/PartThree', '/PartFour', '/PartFive', '/PartSix'];
              if (routes[index]) {
                // Mark button as clicked and navigate
                setClickedButtons(prev => {
                  const newState = prev.includes(index) ? prev : [...prev, index];
                  
                  // Save to localStorage
                  try {
                    localStorage.setItem('menuClickedButtons', JSON.stringify(newState));
                  } catch (error) {
                    console.error('Failed to save menu state:', error);
                  }
                  
                  return newState;
                });
                navigate(routes[index]);
              } else {
                // Fallback for any buttons without routes
                setClickedButtons(prev => {
                  const newState = prev.includes(index) 
                    ? prev.filter(i => i !== index) 
                    : [...prev, index];
                  
                  // Save to localStorage
                  try {
                    localStorage.setItem('menuClickedButtons', JSON.stringify(newState));
                  } catch (error) {
                    console.error('Failed to save menu state:', error);
                  }
                  
                  return newState;
                });
              }
            }}
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
      <button className='next-topic-btn' id='menu-btn' onClick={() => navigate("/final")}>
        <img src={`${process.env.PUBLIC_URL}/Img/nextTopic-btn.png`} alt="nextTopic" className='next-btn-icon'/>
        <span>לסיום</span>
      </button>
    </div>
  );
}

export default Menu;