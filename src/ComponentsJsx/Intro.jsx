import React, { useState, useEffect, useRef  } from 'react';
import '../ComponentsCss/Intro.css';
import { Navigate , useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef(null);

  // path via PUBLIC_URL is robust across deployment methods
  const videoSrc = `${process.env.PUBLIC_URL}/media/intro-video.mp4`;
  const bgImage = `${process.env.PUBLIC_URL}/Img/Bg-homePage.png`;

  // Show skip button 1 second after video is loaded
  useEffect(() => {
    let timer;
    if (isLoaded) {
      timer = setTimeout(() => setShowSkip(true), 1000); // 1 sec
    }
    return () => clearTimeout(timer);
  }, [isLoaded]);

  // Skip video handler
  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // jump to end
      videoRef.current.pause(); // stop playback
      setVideoEnded(true); // hide the video
    }
  };

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
        <div className="homePage-content">
          <h1>עזר דיגיטלי </h1>
          <h2>רענון יחידת סע"ר</h2>
          <button className="homePage-btn" onClick={() => navigate("/Menu")}> התחלה</button>
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

      {(!videoEnded && !videoError) && (
        <>
          <video
            ref={videoRef}
            className="intro-video"
            autoPlay
            muted
            playsInline
            onCanPlay={() => setIsLoaded(true)}
            onEnded={() => setVideoEnded(true)}
            onError={() => setVideoError(true)}
          >
            <source src={videoSrc} type="video/mp4" />
            סרטון לא נתמך בדפדפן שלך.
          </video>

          {showSkip && (
            <button
              className="skip-btn"
              onClick={handleSkip}
            >
              דלג
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Intro;
