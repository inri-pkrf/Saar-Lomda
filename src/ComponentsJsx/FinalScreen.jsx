import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentsCss/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const bgImage = `${process.env.PUBLIC_URL}/Img/Bg-homePage.png`;

  return (
    <div className="Intro intro-root">
      <img
        className="intro-bg-image"
        src={bgImage}
        alt="fallback background"
        onError={() => console.warn('Background image not found:', bgImage)}
      />

      <div
        className="homePage-div"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Img/homePage-div.png)`
        }}
      >
        <div className="homePage-content final">
          <h1>כל הכבוד!</h1>
          <h2>סיימת את העזר בהצלחה</h2>
          <p>שחכת משהו? תמיד אפשר להתחיל שוב:</p>
          <button
            className="homePage-btn"
            onClick={() => {
              try {
                localStorage.removeItem('menuClickedButtons');
                localStorage.removeItem('isCompleting');
              } catch (error) {
                console.error('Failed to reset local storage on restart', error);
              }
              navigate('/');
            }}
          >התחלה מחדש</button>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}/>}

      <button
        className={isOpen ? "i-btnOpen" : "i-btn"}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Img/${isOpen ? 'i-btnOpen.png' : 'i-btn.png'})`
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        מידע על יוצרי המוצר
         {isOpen && (
          <div className="i-btn-content">
            <h4> יועצת דיגיטל וחדשנות, מנהלת הפרויקט:</h4>
            <p> תמר בוסתן</p>

            <h4> מעצבת המוצר, גרפיקאית, מתכנתת:</h4>
            <p> אליאורה לרר</p>
          </div>
          )}
      </button>
    </div>
  );
}

export default FinalScreen;